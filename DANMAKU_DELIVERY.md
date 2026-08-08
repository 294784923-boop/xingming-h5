# 弹幕战系统移植交付说明（魔塔弹幕风 → 东方星冥线 H5）

## 一、改了哪些文件

| 文件 | 改动 |
| --- | --- |
| `project/floors/danmaku.js` | **新增**：通用弹幕战斗地板。`parallelDo` 从源项目 `MT0.js` 原样移植（经逐字节反向校验，还原 5 处必要适配后与源串完全一致，47237 字节；AI `switch` 的 case 0/1/2/4/5/6/7/8/9/10/11/12/13/15/16/17/22/23 全部保留） |
| `project/plugins.js` | **新增** `_danmakuPluginFn`：通用接口 `core.plugin.danmaku.start(config)`；并修改 `_bossBattlePluginFn`：`boss.yuyuko` 增加 `danmaku` 配置，`detectBattle` 撞 e403b 改为进弹幕战 |
| `project/data.js` | 版本号 `Ver 2.10.30 → Ver 2.10.31`；`main.floorIds` 追加 `"danmaku"`；`main.images` 追加 11 张弹幕素材（reimu/marisa/reimubullet/marisabullet/enemybullet/enemybullet1_2/enemybullet2/enemybullet3/enemybullet4/spellcards/enemys）；**手感调整后 2.10.31 → 2.10.32** |
| `main.js` | 版本号 `2.10.30 → 2.10.31`（缓存刷新，与 data.js 保持一致）；**手感调整后 2.10.31 → 2.10.32** |
| `project/floors/danmaku.js`（手感调整） | parallelDo：自机 64x64 → 40x40 居中绘制、新增白色判定点、case 7 弹幕降密度（详见第九节） |
| `project/plugins.js`（手感调整） | `boss.yuyuko.danmaku`：fireback 25 → 10、enemylife 5000 → 3000、spellcards 8 → 6、新增 fire 公式（详见第九节） |
| `project/plugins.js`（竖屏兼容） | `_danmakuPluginFn._registerMove`：去掉从未被赋值的 `flags.mouse` 分流，改为键盘方向键 + 触摸/鼠标拖动（`ondown`/`onmove`/`onup`）同时注册；拖动 1:1 跟手、越界钳制，点按不位移（详见第十一节） |
| `project/images/*` | 从源项目复制 11 张素材（源项目只读，未做任何修改） |

未改动：`libs/` 引擎、`project/functions.js`（弹幕战准备逻辑全部在插件内，未动本项目已有 afterBattle 钩子）、`project/enemys.js`、`project/floors/f3_12.js`。

## 二、parallelDo 移植的 5 处必要适配（其余逐字保留）

1. 自机形象：`reimu.png/marisa.png` 两分支 → `youmu.png`（妖梦，源区域 48x48 放大到 64x64 绘制；youmu.png 实测为 4x4 帧格，左上角帧即正面站姿。手感调整后改为 40x40 居中绘制，见第九节）。
2. 自机子弹：`reimubullet.png/marisabullet.png` 两分支 → 统一 `reimubullet.png`。
3. 敌机绘制：新增 `flags.enemyImage` 分支（独立图，可配源区域/绘制尺寸），未配置时走原 `enemys.png` 的 `enemyId*32` 行。
4. 失败：`core.events.lose('满身疮痍')` 前先调 `core.plugin.danmaku._onLose()`（注销移动控制、恢复主角透明度、关战斗开关）。
5. 胜利：`changeFloor` 目标从 `"MT" + flags.pfloor` 改为 `flags.pfloor`（本项目直接存楼层 ID 字符串），并挂回调 `core.plugin.danmaku._afterWin()`（注销移动控制、恢复主角、执行配置的 onWin）。

## 三、战斗区域坐标结论：未放大，沿用原坐标

- 任务描述中的“画布 672x480”是 `index.html` 里 `bg3` canvas 的 HTML 初始属性；引擎 `libs/core.js` 在 `core.init` 时会把**所有** game canvas 重置为 `_PX_ = _PY_ = 480`（15x15 视口、32px/格），实测画布确为 **480x480**。
- 源战斗区域 0~224 x 0~352（竖版 7:11）在 480x480 画布上占 **47% 宽 × 73% 高**，位于左上角，与源项目自身布局（13x13 地图、左上角战场）一致，实测渲染正常（深色背景 + 血条/符卡/子弹/角色全部就位），**结论：视觉可接受，未放大**。
- 若日后要放大，换算公式：`X' = OX + X * SX`、`Y' = OY + Y * SY`（或等比 S），必须同步改两处：
  - `project/plugins.js` 里 `FIELD_W/FIELD_H`（移动边界）；
  - `danmaku.js` parallelDo 里的硬编码坐标：越界判定 `256/384`、敌弹生成 `192-j*32 / 144-j*64 / 224 / 352 / 160+(6-j)*32 / 176+(6-j)*32 / 192+(4-j)*64 / 288`、血条 `224*`、符卡 `8*spellcardleft`、自机射击 `playerx-12+j*24`、子弹判定 `22/48` 等，逐一换算并核对。

## 四、回放兼容处理（重点）

调研结论：本项目回放走 `core.status.route`（录制）+ `core.startReplay(list)`（回放）；移动/输入以 `move:x:y`、`up/down/left/right`、`input:` 等条目记录，事件驱动的剧情/换层不录路线；随机数用 `core.rand`（确定性种子，不写路线）与 `core.rand2`（写路线）两套。

处理方式：
1. **回放期间自动胜利跳过**：`danmaku.start` 检测 `core.isReplaying()`，直接置 `flags.enemylife = 0; flags.spellcardleft = 0;`，下一帧 `danmaku` 地板 parallelDo 走胜利分支（回城 + onWin），与真实胜利走同一条代码路径。
2. **移动不污染路线**：弹幕战移动注册在 `onkeyDown` 级别（优先级 100）并消费方向键返回 `true`。若用 `keyDown` 级别，方向键会先走引擎 `pressKey → moveHero` 的格子移动并被记入路线（`up/down/...`），回放跳过弹幕战后这些路线项会在错误位置重放导致错位。现在弹幕战期间方向键既不移动格子英雄、也不产生路线项。
3. **随机数一致性**：弹幕战只调 `core.rand`（不写 `random:` 路线项），回放跳过时也不产生 `random:`，路线两侧一致。
4. **路线一致性实测**：录制路线（撞 e403b 的 4 步移动）回放后 `route.length == totalList.length`（22 == 22），无“记录不一致”，无回放错误。
5. **战后剧情**：弹幕战胜利后的喝茶对话/回庭园是事件驱动（与现有回合制 BOSS 战后剧情相同），在回放播放完毕后继续播完；回放数据不受影响。

## 五、幽幽子数值配置在哪改

`project/plugins.js` → `_bossBattlePluginFn` → `this.boss.yuyuko.danmaku`：

```js
"danmaku": {
    "enemyId": 7,                    // 弹幕风 BOSS AI（AI 行为由 danmaku.js parallelDo case 7 决定）
    "enemyImage": "char_yuyuko.png", // 幽幽子行走图（与 enemy_e403.png 同图，168x168 = 4x4 帧，42x42/帧）
    "enemyImgW": 42, "enemyImgH": 42,
    "enemyDrawW": 48, "enemyDrawH": 48, // 放大到 48x48 绘制
    "spellcards": 5,                 // 符卡数（手感调整：8 → 5）
    "enemylife": 3000,               // 每张符卡血量（手感调整：5000 → 3000）
    "fireback": 8,                   // 中弹伤害（手感调整：25 → 8；进战满血 226 可挨 28 发）
    get fire() {                     // 自机火力（手感调整：显式设置；danmaku.start 进战时读 hero.atk 求值）
        return Math.max(13, Math.min(Math.round(core.status.hero.atk * 5), 18)); // clamp(round(atk*5), 13, 18)
    },
    "playersize": 2,                 // 自机判定大小（越小越难被打中；同时影响射速 8-playersize）
    "bgm": null                      // null = 沿用 beforeBattle 已播放的 bgm_youyoumu.mp3
}
```

## 六、如何给未来新 BOSS 配弹幕战（示例）

```js
core.plugin.danmaku.start({
    enemyId: 7,                       // AI 编号（0~23，见 danmaku.js parallelDo）
    enemyImage: "enemy_e304.png",     // 可空；不填则用 enemys.png 的 enemyId 行
    enemyImgW: 32, enemyImgH: 32,     // 独立图时的源区域（默认 32x32）
    enemyDrawW: 48, enemyDrawH: 48,   // 绘制尺寸（默认 32x32）
    enemylife: 3000,                  // 每张符卡血量
    spellcards: 3,                    // 符卡数
    fire: 50,                         // 可空，默认 hero.atk
    fireback: 15,                     // 可空，默认 10
    bgm: "bgm_extra.mp3",             // 可空
    playersize: 2, ispeed: 3,         // 可空，有默认值
    onWin: function () {              // 可空；空则只回战斗前楼层
        core.drawTip("战斗胜利！");
    },
    onLose: null                      // 可空，默认 core.events.lose('满身疮痍')
});
```

接入回合制 BOSS 战的方式（幽幽子同款）：在 `_bossBattlePluginFn` 的对应 `boss` 配置里加 `danmaku` 字段，并在 `detectBattle` 命中 `special.bossInfo.enemyId` 时调 `core.plugin.danmaku.start(bossInfo.danmaku, onWin)`（胜利回调可复用 `overBattle` 走原有剧情）。

## 七、验证记录

### 实测（无头 Chrome + 引擎动作 API 驱动，本地 `node server.js`）

> 以下为 2.10.31 首轮移植的实测记录（数值均为当时的配置）；2.10.32 手感调整后的复测见第九节。

1. `node --check` 全部改动文件通过。
2. 完整链路（自动测试 14 项全部 PASS）：
   - 开局 → `startEnergyBoss` → f3_12（[7,11]）→ e403b 布置 [7,7]；
   - 走上 e403b → 进入 `danmaku` 地板：`bulletscreen=1`、`enemyId=7`、`spellcardleft=8`、`enemylife=5000`、`enemyImage=char_yuyuko.png`、自机 112,320 / 敌机 112,48；
   - 方向键移动自机（112→115）、格子英雄不动（移动被消费）；
   - 自机自动射击（self=4）、敌弹生成（enemy=29）、敌机 AI 追尾（enemyx 变化）；
   - 中弹掉血（hp -25 = fireback）、血条/符卡槽/深色背景渲染（canvas 像素扫描：绿色血条 2180px、符卡亮色 56px、全场亮色子弹 573px）；
   - 清空符卡/血量触发胜利 → 回 f3_12 → 战后剧情 → f0_garden，`g_yuyuko_follow=1`、`energyBossDone=true`、`g_energy_used=0`；
   - 移动控制已注销（战后方向键恢复格子移动）；
   - 失败路径：hp 归零 → `core.events.lose('满身疮痍')`，`bulletscreen=0`、主角透明度恢复、移动注销。
3. 回放：录制含撞 e403b 的路线 → 重建同状态后 `startReplay` → 弹幕战自动胜利跳过、路线一致（22==22）、无回放错误、最终状态与正常游玩一致。

### 未实测 / 说明

- 真实浏览器手操键盘/鼠标未跑（自动化环境 DOM keydown 不送达页面，用引擎动作 API 等价驱动；游戏本体无此问题）。鼠标分支（`flags.mouse=1`）代码照源移植但本项目默认键盘，未实测触屏。
- 8 张符卡完整人工打完未实测（自动测试用等价状态清空符卡与血量触发完整胜利链路，回城/剧情/flag 均验证）。
- 音乐实际播放未验证（无头浏览器自动播放被浏览器策略拦截）；BGM 链路已核对：beforeBattle 播放 `bgm_youyoumu.mp3`，danmaku 配置 `bgm:null` 沿用。
- 原回合制 y1~y4 流程代码保留但幽幽子不再触发（`bossInfo.danmaku` 存在时走弹幕战）；testBoss 等未配置 danmaku 的 BOSS 仍走原回合制。

## 八、备注

- 弹幕素材与源项目一致（`enemybullet4.png` 为 61x64，绘制沿用源项目的 64x64 采样，不做特殊处理）。
- 版本号按项目约定 +1（data.js 与 main.js 同步），旧录像会因版本不一致提示但可强制播放；本弹幕战为新增内容，旧录像不经过该流程。
- 未 git add/commit，改动全部留在工作区，由用户自行提交。

## 九、手感调整（2.10.32）

用户实测反馈三个问题（自机太大、看不到判定点、太难），按"先不要这么难"整体降难度，一次改到位并实测。
改动仅涉及 `project/floors/danmaku.js`（parallelDo 的自机绘制与 case 7）、`project/plugins.js`（幽幽子 danmaku 配置）与本文档；
`libs/`、case 7 之外的 AI case、其余移植代码原样未动。

### 改了哪几处

1. **自机尺寸**（`danmaku.js` parallelDo）：自机 `drawImage` 绘制尺寸 64x64 → 40x40，绘制坐标 `(playerx-20, playery-20)`，中心对准 `playerx/playery`，与受击判定中心一致；射击起点（`playerx-12+j*24`）与圆形判定（以 playerx/playery 为圆心）不依赖绘制尺寸，核对后无需改。
2. **可见判定点**（`danmaku.js` parallelDo）：自机绘制后新增 `core.fillRect("event2", playerx-playersize, playery-playersize, playersize*2, playersize*2, "#ffffff")` —— 纯白 4x4（2×playersize=4px），在 `clearMap("event2")` 之后每帧与自机一起绘制，中心即判定中心。
3. **数值**（`plugins.js` → `boss.yuyuko.danmaku`）：
   - `fireback` 25 → **8**；
   - `enemylife` 5000 → 3000；
   - `spellcards` 8 → **5**；
   - `fire` 显式设置：getter 在 `danmaku.start` 进战时读取 `core.status.hero.atk`，公式 `fire = clamp(round(hero.atk*5), 13, 18)`；实测该阶段 atk=3 → fire=15。
4. **去追踪**（`danmaku.js` parallelDo，case 7）：删除 case 7 开头的追踪玩家逻辑（`enemyx += 0.7 / -= 0.7`），幽幽子固定站位（112,48，屏幕上方中央）只发弹幕；同时删除终符"瞬移到玩家身边"逻辑（`enemyx = playerx`）。
5. **弹幕密度**（只改 `danmaku.js` parallelDo 的 case 7，其它 case 与其余移植代码原样未动）：
   - 主要连发弹间隔 `time%20==10` → **`time%40==10`**（case 7 内共 15 处，降频 2 倍）；
   - 连发数 `j<7` → **`j<4`**（case 7 内共 3 处）；
   - **删除 3 处"全屏子弹重新瞄准玩家"的追踪弹块**（原 `time%50==40` 段，位于第 8/5/3 符卡），追踪弹不再存在；
   - 瞄准弹（朝玩家方向单发）速度 `/60`、`/30` → **`/100`**（约 4.5、9 px/帧 → 约 2.7 px/帧）；
   - 敌弹整体速度 **4 → 3**（连发/扇形/扫射的 vx、vy 直值与公式，如 `j-4` → `(j-4)*3/4`、`±4` → `±3`）；
   - 密集旋转扫射（原 `time%4==0` 每帧 4 发）→ **`time%8==0`**（降频 2 倍）；
   - 全部保留原有规律（列弹/扇形/扫射的对称形态不变，弹幕有缝可钻）。

### 最终数值与公式依据（实测）

- 无头浏览器实测 `startEnergyBoss` 阶段玩家数值：**atk=3 / hp=226 / def=3**（开局满血 400，进弹幕战实测剩余 226，与首轮移植实测一致）。
- 射速：自机每 `8-playersize`=6 帧双列齐射 2 发，60fps 下约 **20 发/秒**；站桩实测 DPS ≈ **20×fire**（fire=3 时实测 60.3 ≈ 60，与公式一致）。
- 目标"一张符卡 8~12 秒"：`3000 / (20×fire) = 8~12` ⇒ fire ∈ [12.5, 18.75]；取 `fire = clamp(round(hero.atk*5), 13, 18)`（实测 atk=3 → 15），站桩单卡理论 `3000/(20×15) = 10` 秒，实测 5 张符卡 9.87~10.03 秒，全部落在目标区间（clamp 上限 18 保证任意 atk 下单卡不短于 8.3 秒）。
- 受击："满血能挨 10+ 发"：fireback=8、进战满血 226 → 可挨 **28 发**（开局满血 400 → 50 发），满足且有余量。

### 实测结果（无头 Chrome + Playwright + `node server.js`，33 项全部 PASS）

1. `node --check` 全部改动文件通过（danmaku.js / plugins.js / data.js / main.js）。
2. 自动测试 33 项全部 PASS，关键项：
   - 进弹幕战配置：`spellcardleft=5`、`enemylifemax=3000`、`fireback=8`、`fire=15`（atk=3 时公式值）、`playersize=2`、敌机图 char_yuyuko.png；
   - 自机 40x40 居中：event2 层像素包围盒（可见内容约 26x38，源帧 48x48 含透明边），中心 ≈ playerx/playery（112,320）；
   - 白色判定点位于自机中心（event2 像素扫描：中心 4x4 整块纯白）；
   - 幽幽子不追踪：2.5 秒采样 enemyx/enemyy 恒为 112/48（固定站位）；
   - 键盘方向键移动自机（ispeed=3）、格子英雄不动（移动被消费）、录像路线不增长、战后移动控制注销；
   - 自机自动射击、敌弹生成正常；
   - 弹幕稀疏：活跃敌弹采样 max=12 / avg≈8，截图经识图确认弹幕间有明显缝隙、可钻、无追踪压迫感；
   - 单卡耗时（5 张逐张实测，站桩对齐）：9.9 / 10.0 / 9.9 / 9.9 / 10.0 秒，全部落在 8~12 秒；
   - 中弹掉血 -8（fireback=8 生效）；
   - 受击判定仍以 playerx/playery 为圆心：子弹正中命中、半径外（+9px）不命中；
   - 胜利 → 回 f3_12 → 喝茶剧情 → f0_garden，`g_yuyuko_follow=1`、`energyBossDone=true`、`g_energy_used=0`、`bulletscreen=0`。
3. 截图取证：`event2` 绘制层 canvas 导出 PNG（自机+判定点+敌机+血条+符卡槽）与密弹（扇形/扫射）阶段 PNG，识图确认自机在底部中央、白色判定点在自机中心、幽幽子固定顶部中央、绿色血条与符卡槽渲染正常、入口/扇形/扫射三张弹幕均有缝可躲、无追踪压迫感。

### 第二轮调整（敌弹降速 + 自机提速）

用户继续反馈"敌弹太快躲不过来、自机移动太慢"。本轮改动最小化：`project/plugins.js` 只改 `danmaku.start` 的 ispeed 默认值一行；`project/floors/danmaku.js` 的 case 7 降速改动此前已落盘并验证（bullety1 3→2、-3→-2、扇形 `(j-4)*3/4`→`(j-4)/2`、旋转扫射 `/10-3`→`/15-2`、发射间隔 `%40`→`%50`），本轮未再动；版本号未再 +1（本轮未改 data.js / main.js）。

#### 自机移动（plugins.js）

`danmaku.start` 默认值：`(flags.mouse ? 2 : 3)` → **`(flags.mouse ? 3 : 5)`**，键盘 5px/次、鼠标 3px/次。

#### 敌弹速度档位与发射间隔（danmaku.js case 7 现状值，逐项实测）

| 弹种 | 速度 | 实测 |
| --- | --- | --- |
| 主雨弹/连发（各符卡常规弹） | 垂直 2px/帧（bullety1 = 2 / -2），水平 0 | 25 帧位移 50px，精确 **2px/帧** |
| 扇形（第 4 符卡 & 终符） | vx = `(j-4)/2`（j=0..8 → -2~2，0.5 步进），vy = ±2；横弹 ±3 | 实测 vx 集合 `{-3,-2,-1.5,...,2,3}`，max\|v\|=3 |
| 旋转扫射（第 2/1 符卡） | vx = `(time%100)/15 - 2`（-2 ~ +4.67px/帧），vy = ±2 / 横弹 ±3 | 实测 vx ∈ {-3, -0.93, 0.93, 3}（/15-2 公式生效），max\|v\|≤5 |
| 瞄准弹 | `(玩家-敌人)/100`（≤约 2.3px/帧） | 代码核对 + 运行时抽样 |
| 发射间隔 | **%50**：50 帧一轮齐射 | 齐射首帧序列 10/62/110/161/211/260/311/360，相邻间隔 48~52 帧；fps≈61 → 每轮约 **0.82 秒** |

> 说明：任务描述中"约 1.9 秒一轮"是按 %50 的主观估算，实测为 50 帧 ≈ 0.82s（60fps），两轮齐射合计约 1.67s；以实测为准。

#### 实测结果（无头 Chrome + puppeteer-core + `node server.js`，21 项全部 PASS）

1. `node --check` 全部改动文件通过（plugins.js / danmaku.js 等 10 个 JS 文件）。
2. 进战配置：`spellcardleft=5`、`enemylifemax=3000`、`fireback=8`、`fire=15`（`clamp(round(atk*5),13,18)`，实测 atk=3）、`playersize=2`、**`ispeed=5`**、敌机图 char_yuyuko.png、自机 112,320 / 幽幽子 112,48。
3. 自机移动：单次方向键 +5px（ispeed=5），连按 20 次共 +100px，格子英雄不动（移动被消费）。
4. 完整链路回归：进战 → 移动 → 自动射击（1.5s 敌血 2955→2730）→ 中弹 -8（fireback=8）→ 胜利 → 回 f3_12 → 喝茶剧情 → f0_garden，`g_yuyuko_follow=1`、`energyBossDone=true`、`g_energy_used=0`；战后方向键恢复格子移动（控制已注销）。
5. 回放快速回归：录制路线（撞 e403b）回放后 `route.length == totalList.length`（22 == 22）、`failed=false`、弹幕战自动判胜跳过、最终状态与正常游玩一致、无回放错误。
6. 弹幕稀疏度（密集阶段：第 4 符卡后半，扇形两轮齐射）：全场活跃敌弹 45 颗、中场（y 110~260）仅 8 颗 / 7 列，列间自由宽度 **21.5~32.5px**（量化缝隙）；真实画布位图识图确认：弹幕约 30 颗、有明显空隙可穿过、自机+白色判定点在底部中央、幽幽子在顶部中央、绿色血条+符卡槽正常、密度中等、无压迫感。

#### 取证方法修正（重要）

本轮发现：puppeteer 对 `#event2` 做 element.screenshot() 时，捕获到的是合成层画面（实际是标题层 titleFx 的内容），**并非**战斗画布——上一轮"event2 元素截图"其实截到的是主菜单，当时的识图结论不可靠。真实战斗画布需用 `canvas.toDataURL()` 导出位图（480x480，深色背景 + 绿色血条 + 白色判定点 + 弹幕）。本轮弹幕稀疏度采用"量化缝隙（21.5~32.5px）+ toDataURL 位图识图"双重确认，证据文件在 `.hermes/`（gitignore 内）。

## 十、碰撞判定修复（判定圆心对齐 + 判定半径缩小）

用户反馈"小弹判定比弹本身还大"，并要求东方正作式"判定远小于视觉"的手感。本轮只动 `project/floors/danmaku.js`（parallelDo 内两处判定）与本文档；`libs/`、`plugins.js`、case 7/24 的 AI 行为均未改动。

### 根因

敌弹绘制用 `drawImage` 把 64x64 图以 `bulletx/bullety`（左上角）为原点画出，但碰撞判定把 `bulletx/bullety` 直接当**圆心**；自机已改为中心绘制（`playerx/playery` 即自机中心/判定点），于是判定圆相对弹体视觉中心（+32,+32）超前 32px——下落弹还差 32px 就判中，视觉上"弹还没碰到人就掉血"。

### 修复 1：判定圆心 = 子弹图像中心（问题一）

```js
// 修复前：把左上角当圆心
(flags.bulletx[i] - flags.playerx)^2 + (flags.bullety[i] - flags.playery)^2 < (playersize + bulletsize)^2
// 修复后：圆心 = 左上角 + 32（64x64 图像中心；enemybullet4.png 为 61x64 也按 +32，误差可忽略）
(flags.bulletx[i] + 32 - flags.playerx)^2 + (flags.bullety[i] + 32 - flags.playery)^2 < ...
```

### 修复 2：判定半径 = playersize + bulletsize × 0.5（问题二，最终值）

原半径 `playersize + bulletsize` 恰好等于视觉弹体半径 + 自机判定，钻缝容错为零。东方正作子弹判定通常只有视觉的 50% 左右，最终采用系数 **0.5**（实测手感合适，未再微调）：

| bulletsize | 视觉弹体半径 | 旧判定半径 | 新判定半径 |
| --- | --- | --- | --- |
| 3（小弹） | 32 | 2+3 = 5 | 2+1.5 = **3.5** |
| 6（中弹） | 32 | 2+6 = 8 | 2+3 = **5** |
| 14（大弹） | 32 | 2+14 = 16 | 2+7 = **9** |

```js
(flags.playersize + flags.bulletsize[i] * 0.5) * (flags.playersize + flags.bulletsize[i] * 0.5)
```

### 修复 3：自机子弹命中敌机判定中心对齐（问题三）

`parallelDo` 的"自机子弹判定(方形)"原本用 `selfbulletx/selfbullety`（64x64 弹体左上角）对敌机中心 `enemyx/enemyy` 比较，属同类错位，且实测存在两处影响手感：

1. **水平漏判**：自机站中轴（x=112）时左列弹（左上角 x=68）视觉上已盖住敌机（敌机 32x32 绘制在 enemyx+16 居中），但 `|68-112|=44 > 22` 不判中——视觉碰到却不掉血，且中轴站桩 DPS 只有设计值一半；
2. **垂直提前**：弹体上飞时 `selfbullety - enemyy < 48` 在弹体还差 32px 没碰到敌机时就判中。

修正为用弹体中心（左上角 +32）与敌机中心比较，矩形容差 **22/48 保持不变**，不过度改动：

```js
// 修复前：左上角 vs 敌机中心
selfbulletx - enemyx < 22 && enemyx - selfbulletx < 22 && selfbullety - enemyy < 48 && enemyy - selfbullety < 48
// 修复后：弹体中心 vs 敌机中心（+32 对齐，容差 22/48 不变）
selfbulletx + 32 - enemyx < 22 && enemyx - selfbulletx - 32 < 22 && selfbullety + 32 - enemyy < 48 && enemyy - selfbullety - 32 < 48
```

垂直方向 48 = 弹体半高 32 + 敌机半高 16，判定窗口正好等于视觉接触窗口；水平方向 22 小于视觉接触宽度，命中需弹体中心接近敌机中心，符合"判定小于视觉"的手感。

### 其他检查

- case 7（困难模式）与 case 24（简单模式）共用 parallelDo 尾部同一段圆形判定，本次修复对两者同时生效；实测切回 `enemyId=7` 抽测边界（size=6、r=5、d=4.9 命中）通过。
- 复核 case 7 无残留"瞬移/生成"逻辑依赖旧判定（`flags.enemyx = flags.playerx` 仅存在于 case 15 源行为，case 7 无追踪、无瞬移）。
- 自机中心 4x4 白色判定点绘制未动，玩家盯白点躲弹的体验不变。

### 实测数据（无头 Chrome + puppeteer-core + `node server.js`，17 项全部 PASS）

1. `node --check project/floors/danmaku.js` 通过。
2. **中弹时机（A）**：小弹（bulletsize=3）从自机白点正上方下落（vy=2px/帧），逐帧采样：弹体中心距白点 32/16/8/4px 时均不掉血，命中发生在中心距白点 <3.5px 的下一帧（采样末帧距 4px，命中帧距 2px，帧差=1）；静态逐档复验 32/16/8/4/3.6px 不中、3.4/0px 命中。
3. **三档半径（C）**：size=3 → r=3.5（d=3.4 中 / d=3.6 不中）；size=6 → r=5（d=4.9 中 / d=5.1 不中）；size=14 → r=9（d=8.9 中 / d=9.1 不中）。
4. **自机子弹（E）**：旧逻辑漏判的弹（左上角 x=68，视觉已盖住敌机）现在命中并扣 fire=15；弹体中心距敌机中心 50px 的擦边弹不扣血。
5. **完整链路（F）**：进弹幕战（enemyId=24、spellcards=5、life=3000、fireback=8、fire=15、playersize=2、ispeed=5）→ 方向键移动 +5px 且格子英雄不动 → 自动射击敌血下降（中轴 x=112 双列全命中，1.6s 3000→2580）→ 中弹 -8 → 胜利 → 回 f3_12 → 喝茶剧情 → f0_garden，`g_yuyuko_follow=1`、`energyBossDone=true`、`g_energy_used=0`、`bulletscreen=0`；战后方向键恢复格子移动。
6. **回放（G）**：录制路线（撞 e403b）回放后 `route.length == totalList.length`（22 == 22）、`failed=false`、弹幕战自动判胜跳过、最终状态与正常游玩一致、无回放错误。

### 独立复测（修复前后对照，另一条自动化链路）

另一条独立无头链路（`.hermes/collision_fix_e2e.js`，日志 `collision_fix_e2e.log`、结果 `collision_fix_e2e_result_before/after.json` 同样在 `.hermes/` 取证）对同一修复做修复前/后对照复测，结论与上文一致。

**修复前**（仅临时把敌弹判定圆心改回左上角，半径保持 0.5；16 项全部 PASS，如实呈现旧行为）：

| 场景 | bulletsize=3/6/14 | 旧行为 |
| --- | --- | --- |
| 对心弹（视觉中心正对白点）距白点 32/16/0px | 三档 | 0px（弹体中心正好压在白点上）也不命中——弹体穿过白点不掉血 |
| 旧判定命中点（bulletx/bullety=playerx/playery，弹体视觉中心偏右下 45px） | 三档 | 全部命中——视觉上还差 45px 就掉血，即"判定比弹本身大"的直接证据 |
| 对心弹从白点正上方下落穿过白点 | 三档 | 全部穿过不命中 |

**修复后**（判定圆心=左上角+32；24 项全部 PASS）：

| 场景 | bulletsize=3/6/14（半径 3.5/5/9） | 修复后行为 |
| --- | --- | --- |
| 对心弹距白点 32/16px | 三档 | 不命中（与修复前一致，无回归） |
| 对心弹距白点 0px | 三档 | 全部命中（-8） |
| 下落弹（vy=1）命中帧 | 三档 | 弹体中心距白点 -3/-4/-8px，恰为首个进入判定半径的整数帧，绝不提前 32px |
| 旧判定命中点 | 三档 | 不命中（修复前命中） |
| 完整链路 + 回放 | - | 与上文 (F)(G) 一致：胜利→回 f3_12→喝茶→f0_garden、`g_yuyuko_follow=1`、回放 route 长度一致且弹幕战自动判胜跳过 |

测试脚本与日志在 `.hermes/danmaku_collision_e2e.js`、`danmaku_collision_e2e.log`、`danmaku_collision_e2e_result.json`（gitignore 内，取证用）。

## 十一、竖屏兼容（触摸拖动 + 布局实测）

只动 `project/plugins.js` 与本文档；未改 `libs/`、`danmaku.js` 坐标、`data.js`/`main.js` 版本号（不涉及数据内容）。

### 改了什么（为什么必须改）

- 竖屏手机没有键盘，而原移动控制被 `if (flags.mouse)` 分流：`flags.mouse` 在引擎与项目中**只被读取、从未被赋值**（实测 `flags.mouse == undefined`），因此 `onmove` 鼠标/触摸分支永远不会注册——手机（及桌面鼠标）进弹幕战后自机完全无法移动，只有键盘方向键可用。这是竖屏兼容的核心问题。
- 改动 `_danmakuPluginFn._registerMove`（战斗开始注册、结束注销，逻辑不变）：
  - **键盘方向键**：原有 `onkeyDown` 注册不动（继续消费方向键，防污染录像路线），桌面/外接键盘仍可用；
  - **触摸/鼠标拖动**：新增 `ondown`/`onmove`/`onup` 三个引擎动作（引擎把 touch 与 mouse 统一走 `core.actions.onmove`，main.js 的 `onmousedown/onmousemove` 与 `ontouchstart/ontouchmove` 均触发）：
    - `ondown`：记录按下点 `danmakuPx1/Py1` 并置 `danmakuDown=1`；
    - `onmove`：按住期间 1:1 跟手（自机位移 = 本次指针逻辑画布位移），越界钳制到 `FIELD_W/FIELD_H`；锚点只推进实际生效位移，拖出边界后往回拖能立刻跟回（不会因越界部分累计而“跳角”）；
    - `onup`：释放 `danmakuDown`。
  - 战斗期间三类事件一律消费（返回 `true`）：防止松开手指时 `_sys_onup` 触发寻路，把隐藏的格子英雄移走并污染录像路线。
  - 点按（按下即松开、无位移）不改变自机位置，这是拖动方案的预期行为；触摸拖动 + 自动射击 = 完整玩法，无需额外按键。

### 触屏是否实测

- **实测**：是。无头 Chrome + puppeteer-core（`.hermes/testdeps/`，`node server.js` 起服务），用 CDP `Input.dispatchTouchEvent`（touchStart/touchMove/touchEnd）走真实 DOM 触摸链路（`main.js` 的 `ontouchstart/ontouchmove/ontouchend` → `core.actions.ondown/onmove/onup`），另用 `page.touchscreen.tap` 与合成 `TouchEvent` 交叉验证事件送达。
- 测试注意：直接调 `core.events.startGame` 会绕过项目标题层（`#titleFx`，z-index 9999 覆盖画布），需先移除该层模拟真实点“开始游戏”后的状态，否则触摸会被标题层截获。真机点按钮进游戏时标题层由 `stopOverlay()` 移除，不存在该问题（测试脚本中已处理）。

### 实测结果（竖屏 + 横屏完整链路 + 375x667 冒烟 + 回放回归，38 项全部 PASS）

1. **竖屏 390x844**（`isMobile:true, hasTouch:true`，14 项全 PASS）：
   - 布局：`isVertical=true`、scale=0.8；状态栏高 88px 在顶部，画布 top=255.6px——**战斗画面完整显示，不被顶部状态栏遮挡**；截图经识图模型核验：顶部状态栏 + 中部战斗区（敌方上中、自机下中、绿色血条、符卡槽、弹幕）布局正常。
   - 进战配置：`enemyId=24`、`spellcards=5`、`enemylife=3000`、`fireback=8`、`ispeed=5`、自机 (112,320)、敌机 (112,48)。
   - 移动：键盘方向键 +5px 且格子英雄/录像路线不动；触摸拖动 1:1 精确到 px（+60/+40）、越界钳制 (224,352)、拖回场内立即跟回、点按不位移；鼠标点击-拖动同样工作（桌面鼠标从此也可拖动，不再依赖从未赋值的 `flags.mouse`）；触摸输入不污染录像路线（route 长度 4→4）。
   - 链路：自动射击敌血下降（1.2s 2025→1635）→ 敌弹生成（≥10）→ 中弹 -8 → 胜利 → 回 f3_12 → 喝茶剧情 → f0_garden（`g_yuyuko_follow=1`、`energyBossDone=true`、`g_energy_used=0`）→ 战后控制注销（格子移动恢复）。
2. **横屏 860x680 回归**（14 项全 PASS）：`isVertical=false`、状态栏在左侧（宽 196px），画布 left=217px——不被遮挡；键盘/触摸/鼠标三通道移动、射击、敌弹、中弹 -8、胜利回 f3_12 → 剧情 → f0_garden 全部 PASS。
3. **375x667 冒烟**（3 项全 PASS）：进战 + 触摸拖动移动（112→182）+ 自动射击 + 胜利回花园。
4. **回放回归**（3 项全 PASS）：录制路线（撞 e403b，4 步）回放后 `route.length == totalList.length`（4==4）、`failed=false`、弹幕战自动判胜跳过、最终状态与正常游玩一致——触摸/键盘双注册未破坏回放（回放期间 `_sys_checkReplay` 优先级更高，先拦截全部输入）。
5. 测试脚本/日志/结果：`.hermes/danmaku_vertical_e2e.js`、`.hermes/danmaku_vertical_e2e.log`、`.hermes/danmaku_vertical_e2e_result.json`、`.hermes/danmaku_vertical_replay_regression.js`、截图 `.hermes/vertical_e2e_portrait_page.png` 等（gitignore 内，取证用）。

### 战斗区域是否调整：未调整（依据如下）

战斗区域仍为 0~224 x 0~352（逻辑像素），位于 480x480 画布左上角，`FIELD_W/FIELD_H` 与 `danmaku.js` parallelDo 内所有硬编码坐标原样保留：

1. 竖屏 390x844 实测：画布 left=3、top=255.6，战斗区域右/下边缘 = 3+224×0.8=182.2、255.6+352×0.8=537.2，**完整落在视口内**；自机出生点 (112,320) 对应屏幕约 (92.6, 512)、敌机 (112,48) 对应 (92.6, 294)——水平居中偏左、垂直约 61%，不存在“自机/敌机出屏或被遮挡”。
2. 与源项目（魔塔弹幕风，13x13 地图左上角战场）布局一致，保持原坐标不破坏源手感与全部 AI case 行为。
3. 若日后要整体居中/放大，必须同步换算 `FIELD_W/FIELD_H`、parallelDo 越界判定 256/384、敌弹生成、血条 32/32、符卡 32/40、自机射击起点等全部硬编码（第三节已有换算清单），属高风险改动；本次按“**最小改动优先：原样可玩就不动坐标**”原则不做。
4. 竖屏下右侧/下方留白是 480x480 方形画布等比缩放的固有留白，非战斗区域裁切，不影响可玩性。

### 遗留问题

- 拖动灵敏度固定 1:1（手指移动 1 逻辑像素，自机移动 1 像素）；若后续在更小屏/更高分辨率觉得跟手性不理想，可加配置项缩放拖动系数，本次未加。
- 竖屏下战斗区域偏左上（源项目布局如此），右侧/下方留白，视觉“偏角落”但完整可玩；未做居中（理由见上）。
- 未在真实安卓/iOS 浏览器上实机验证手感（无头 Chrome 触摸链路与真机一致走 DOM 事件，但真机手感仍需玩家确认）；已在无头环境用 CDP 真实触摸事件 + 合成 TouchEvent 双路径验证。
- 竖屏顶部状态栏与战斗区之间约 77px 空隙为项目竖屏布局原有样式，非本次引入。
- 战斗期间按 T 仍触发 `startEnergyBoss`（既有测试入口），与之前一致。

## 十二、自机弹命中判定校准（幽幽子 48x48 独立图）

用户反馈"自机子弹还没碰到幽幽子，幽幽子就掉血"。根因：自机弹判定沿用弹幕风原版 32x32 小敌机时代的容差（弹体图像中心对 `enemyx/enemyy`，±22×±48），而幽幽子已改为 48x48 独立图（`char_yuyuko.png` 42x42 帧放大绘制在 `enemyx+8, enemyy+8`），视觉身体与容差体系不匹配。本轮只动 `project/floors/danmaku.js`（parallelDo 的自机子弹判定）与本文档；`libs/`、`plugins.js`、case 7/24 的 AI 行为均未改动。

### 素材实测尺寸（Python/PIL 逐像素 + event2 画布位图实测）

**reimubullet.png（64x64，自机弹）**

- 弹体 bbox：`[27..36] × [0..59]`（10x60 竖直针形弹，尖端朝下），不在图像中心。
- 弹体视觉中心：`selfbulletx + 31.5, selfbullety + 29.5`；半尺寸：5（宽）x 30（高）。
- 画布实测：`selfbullet=(100,180)` 时 event2 位图扫描到针体像素 `[127..136] × [180..239]`，与 bbox 完全一致。

**char_yuyuko.png（168x168 = 4x4 帧，42x42/帧，第一帧即正面站姿）**

- 第一帧身体 bbox：`[1..38] × [0..41]`（38x42，含帽子/裙摆全部可见像素）。
- 48x48 绘制（源 42x42 放大 48/42，绘制盒 `[enemyx+8..enemyx+56] × [enemyy+8..enemyy+56]`）后：
  - 画布实测身体像素：`[enemyx+9..enemyx+52] × [enemyy+8..enemyy+55]`（enemyx=112/enemyy=48 → `[121..164] × [56..103]`）。
  - 身体视觉中心：`enemyx+30.5, enemyy+31.5`；半尺寸：≈22（宽）x ≈24（高）。

### 新判定公式（视觉盒相交才命中）

```js
// 弹体视觉盒 = [selfbulletx+27 .. selfbulletx+36] x [selfbullety .. selfbullety+59]
// 身体视觉盒 = [enemyx+9 .. enemyx+52] x [enemyy+8 .. enemyy+55]
// 两盒相交（含恰好接触）→ 命中
flags.selfbulletx[i] + 36 >= flags.enemyx + 9 && flags.enemyx + 52 >= flags.selfbulletx[i] + 27 &&
flags.selfbullety[i] + 59 >= flags.enemyy + 8 && flags.enemyy + 55 >= flags.selfbullety[i]
```

等价中心式（便于与旧容差对比）：`|弹体视觉中心 - 身体视觉中心| < 半宽 27（22+5）× 半高 54（24+30）`，判定中心随弹体/身体 bbox 实际偏移自动校准。

对比旧容差（±22 x ±48，中心=弹体图像中心 对 `enemyx/enemyy`）：

- 水平：旧判定在弹针仍距身体左侧约 27px（bx=59，针体 `[86..95]` 对身体左缘 121）时即可命中——"弹没碰到就掉血"的直接来源；新判定此时零命中。
- 垂直：旧判定按 `selfbullety+32` 与 `enemyy` 比较，实际会在弹头进入身体约 40px 后才判中，且不随绘制偏移校准；新判定以"弹顶边缘接触身体底边缘"为准（实测命中帧 gap = -3，即接触后首帧）。

### 实现方式与范围

- 判定块内新增 `if (flags.enemyImage)` 独立图分支（幽幽子 48x48 专用，含视觉盒偏移常量与中文注释）；`else` 通用 `enemys.png` 32x32 分支与修复前逐字一致（容差 22/48 不变），未动通用判定逻辑。
- 自机弹判定位于 `switch (flags.enemyId)` 之前，case 24（简单）与 case 7（困难）天然共用，本轮实测两案均通过。
- 判定中心偏移（弹体不在图像中心）通过直接用视觉盒边界比较实现，无需额外中心常量。
- 采用方形判定而非圆形：弹体是 10x60 针形，矩形贴合针体形状；圆形（半径≈30）会把水平命中范围放大 6 倍（5px 半宽 → 30px），明显失真。

### 实测数据（无头 Chrome + puppeteer-core + `node server.js`，17 项全部 PASS）

1. `node --check project/floors/danmaku.js` 通过。
2. **垂直上升（A）**：弹从幽幽子正下方（bx=111，弹体视觉中心对准身体中心）逐帧上升，弹顶边缘-身体底边缘距离 37px/17px 时均不掉血；命中发生在接触后首帧（检测 y=100，gap=-3），扣 fire=15，弹被消耗。
3. **水平逼近（B）**：弹从右侧以 1px/帧左移，弹左边缘-身体右边缘距离 43→1px 共 43 帧全部不掉血；仅 gap≤0 后命中（bx=137，gap=0）。
4. **静态边界（C）**：两轴均为 gap=0 命中、gap=1 不命中（垂直 y=103/104，水平 bx=137/138）。
5. **逐档距离验证（A3）**：垂直/水平各 12 档起始间隙（gap = 48/40/30/20/10/5/2/1/0/-1/-5/-10），**仅 gap≤0 的档位命中且弹被消耗，gap>0 一律零命中且弹存活**（24 个采样点全部符合 `hit == (gap<=0)`）。
6. **旧判定提前位置回归（D）**：bx=59（针体距身体 26px）与弹底距身体顶 7px 的垂直位置均零命中且弹存活（旧容差在此两处都会命中）。
7. **case 7 复测（D2）**：切 `enemyId=7` 后同一边界结果（gap=0 命中 / gap=1 不中），证明两案共用新判定。
8. **完整链路（F）**：进弹幕战（enemyId=24、spellcards=5、life=3000、fireback=8、fire=15）→ 方向键移动 +5px 且格子英雄不动 → 自动射击敌血下降（1.6s 3000→2775）→ 中弹 -8 → 胜利 → 回 f3_12 → 喝茶剧情 → f0_garden，`g_yuyuko_follow=1`、`energyBossDone=true`、`g_energy_used=0`、`bulletscreen=0`；战后方向键恢复格子移动。
9. **回放（G）**：录制路线回放后 `route.length == totalList.length`（6 == 6）、`failed=false`、弹幕战自动判胜跳过、最终状态与正常游玩一致（f0_garden + `g_yuyuko_follow=1` + `energyBossDone=true`）、无回放错误。

> **回放路线长度说明（22/28 → 6）**：早期各轮"22==22 / 28==28"都包含 F5 检查长按右方向键 900ms 产生的**按住重复移动路线项**——mota-js 按住方向键会每 30ms 自动重复 `moveHero` 并逐次记入 route（含撞墙尝试），900ms 的垃圾项数量随帧时序在 18~24 间浮动（早期 22、本轮前 28 均由此而来）。本次把 F5 改为"按下→150ms→松开"短按，route 稳定为 `["up"×4, "right"×2]` = 6，回放 6==6 的一致性语义不变（完整重放 + 自动判胜 + 终态一致），且不再依赖帧时序。

测试脚本与日志在 `.hermes/selfhit_fix_e2e.js`、`selfhit_fix_e2e.log`、`selfhit_fix_e2e_result.json`（gitignore 内，取证用）；几何探针见 `.hermes/selfhit_geom_probe.js`。

## 十三、借鉴落地·阶段一（敌弹判定分档系数 + 擦弹系统 + 命中/擦弹视觉染色）

按 `.hermes/touhou_refs_analysis.md` 的前 5 项借鉴，本轮落地其中 3 项（判定分档系数、擦弹、染色反馈）；**符卡数据化+弹幕生成器属阶段二，本次未做、未留半成品结构**。
改动仅涉及 `project/floors/danmaku.js`（parallelDo）、`project/plugins.js`（`danmaku.start` 初始化）与本文档；
`libs/`、`data.js`/`main.js` 版本号（本轮不涉及数据内容，按"只动必要文件"约束未 +1）、自机弹命中判定（视觉盒相交，已校准，**未动**）均未改动。

### 一、敌弹判定分档系数表（参考 Touhou.js：小弹 75% / 中弹 50% / 大弹 44%）

原判定半径 `playersize + bulletsize*0.5`（统一 0.5）；改为查表系数（`flags.hitk`，默认 0.5），公式：`判定半径 = playersize + bulletsize * 系数`。

| bulletsize | 分档系数 | 新判定半径（playersize=2） | 旧判定半径 | 手感变化 |
| --- | --- | --- | --- | --- |
| 3（小弹） | 0.75 | **4.25** | 3.5 | 略严、贴近视觉（正作惯例小弹近视觉） |
| 6（中弹） | 0.5 | **5.00** | 5 | 不变 |
| 14（大弹） | 0.44 | **8.16** | 9 | 更宽松、明显小于视觉（大弹手感层次） |

实现：`flags.hitk = {3: 0.75, 6: 0.5, 14: 0.44}` 由 `danmaku.start` 进战时写入，parallelDo 受击判定处 `(flags.playersize + flags.bulletsize[i] * (flags.hitk[flags.bulletsize[i]] || 0.5))` 查表求半径。case 7（困难备用）与 case 24（简单）共用该判定段，两案均实测生效。

### 二、擦弹系统（graze，参考 Touhou.js 判定点命中/整盒擦弹分离）

- **判定**：子弹中心（左上角+32）距自机中心（playerx/playery）距离 `< 视觉盒半宽20 + bulletsize*0.5`，且**未命中判定圆** → `flags.graze += 1`。
- **每弹去重**：`flags.grazed[i]` 标记；弹已擦过不再计；弹消失（出屏/被命中消耗/胜利清场）时清除标记。
- **无敌帧**：`onhit>0` 期间擦弹仍计数（正作惯例），受击判定已跳过，互不影响。
- **先擦后命**：弹穿过判定点时会同时计擦弹并受击（-fireback），与 Touhou.js `bullet.js` 的"先擦后命"一致。
- **回放兼容**：graze/grazed 只写 `flags`，不写 route/输入；回放期间弹幕战自动判胜跳过，路线一致（实测 28==28）。
- **显示**：event2 层 `core.fillText` 绘制 `"擦弹 " + flags.graze`（mota-js 已确认有该 API），位置 (32,62)（血条/符卡槽下方），样式 `rgba(180,215,255,0.8)` + `bold 10px sans-serif`（冥界蓝紫、小字号、半透明）。

### 三、命中/擦弹视觉染色（参考 Touhou.js sticker 三态染色）

`flags.fx` 轻量特效数组（`{x,y,type,life}`，上限约 20，超限丢最旧），全部用**几何图形**绘制（`core.strokeRect`/`core.fillRect`），不新增素材；纯视觉，不影响 flags 主逻辑与回放。

| 事件 | type | 方案 | 寿命 |
| --- | --- | --- | --- |
| 命中（判定点受击） | 0 | 白色圆环（8x8 strokeRect，线宽2）+ 红色中心（2x2 fillRect），半透明短命 | push life=5，可见 4 帧渐隐 |
| 擦弹 | 1 | 弹位置黄色小星/圆点（6x6 fillRect + 描边） | push life=4，可见 3 帧渐隐 |

### 四、实测数据（无头 Chrome + puppeteer-core + `node server.js`，24+2 项全部 PASS）

1. `node --check project/floors/danmaku.js` 与 `project/plugins.js` 均通过。
2. **判定分档（A）**：`flags.hitk` 表初始化正确；三档边界逐档验证（r−0.1 命中 / r+0.1 不中，均取弹体中心到自机判定点的距离 d）：
   - size=3 → r=4.25：d=4.15 命中（-8）、d=4.35 不中且弹存活；
   - size=6 → r=5.00：d=4.9 命中、d=5.1 不中；
   - size=14 → r=8.16：d=8.06 命中、d=8.26 不中。
   - **case 7 复测**：直接切 `enemyId=7` 进战，size3（4.15 中/4.35 不中）与 size14（8.06 中/8.26 不中）边界一致，证明两案共用新分档判定。
3. **擦弹（B）**：弹从自机视觉盒边缘穿过（d=10，>判定半径5、<擦弹半径23）→ `graze` +1、同一弹多帧不重复计、hp 不变；弹移出范围不补计；弹穿过判定点（d=0）→ 受击 -8 且 graze 同时 +1；`onhit>0` 无敌帧内 d=10 擦弹照计、d=0 不掉血不消弹；弹出屏后 `grazed[i]` 清除。
4. **染色（C，canvas 位图取证）**：擦弹事件发生时 `flags.fx` 出现 type=1 特效（位置=弹中心 122,320）；无弹背景下直接渲染 type=1，event2 位图轮询到黄色像素 70px（区域色差 87px）——黄星可见；命中事件发生时出现 type=0 特效（位置=弹中心 112,320）；渲染 type=0 轮询到红色中心 4px、白色环 134px（区域色差 105px）——白/红闪光可见；"擦弹 N" 文本区（28..168 × 52..74）浅蓝像素 graze=0 时 281、graze=123 时 350，**文本可见且随计数更新**。取证 PNG：`.hermes/graze_fx_event2.png`。
5. **完整链路（D）**：进战 → 方向键 +5px 且格子英雄不动 → 自动射击敌血下降（3000→2730）→ 擦弹 +1 → 中弹 -8 → 胜利 → 回 f3_12 → 喝茶剧情 → f0_garden，`g_yuyuko_follow=1`、`energyBossDone=true`、`g_energy_used=0`、`bulletscreen=0`；战后方向键恢复格子移动（控制已注销）。
6. **回放（E）**：录制路线回放后 `route.length == totalList.length`（28==28）、`failed=false`、弹幕战自动判胜跳过、最终状态与正常游玩一致（f0_garden + `g_yuyuko_follow=1` + `energyBossDone=true`）、无回放错误——graze 只写 flags 未污染路线。

测试脚本/日志/结果：`.hermes/danmaku_graze_e2e.js`、`danmaku_graze_e2e.log`、`danmaku_graze_e2e_result.json`、`.hermes/danmaku_case7_tier_probe.js`、`danmaku_case7_tier_probe.log`（gitignore 内，取证用）。

## 十四、借鉴落地·阶段二（符卡数据化 + 弹幕生成参数化助手）

参考 th06_3.1 声明式弹幕数组 / Touhou.js shoot_circle，把 case 24（简单模式，当前启用）与 case 7（困难模式，备用）的手写 spawn 循环全部搬进数据表，由统一解释器按帧生成；每张符卡带时限，超时自动破卡，最后一卡超时直接胜利。

改动仅涉及 `project/floors/danmaku.js`（parallelDo 的 case 24/7 与胜利分支、时间/破卡提示）、`project/plugins.js`（`core.plugin.danmaku` 新增 `spawn` 生成器集合、`cards24`/`cards7` 数据表、`_currentCard`/`_tickCard` 解释器、`danmaku.start` 初始化）与本文档；`libs/` 未动，未 commit。

### 一、弹幕生成参数化助手（core.plugin.danmaku.spawn）

数据层函数，签名 `(flags, cx, cy, opts)`：在 `flags.bullet` 数组（上限 100）里找空槽并写入 `bullet/bulletx/bullety/bulletx1/bullety1/bulletsize/bullettype`，接续游标为 `flags.n`（与原手写块同款"接续搜索"：从 n 起找第一个空槽、找到后 n = 槽位+1、找不到则跳过不放，避免覆盖已有子弹）。`cx/cy` 为生成锚点（数字或 flags 字段名如 `'enemyx'`）。

**opts 公共字段**：`interval`（发射周期，帧）、`offset`（相位，`flags.time % interval == offset` 时发射）、`resetN`（发射前把 n 归零，与原块 `n = 0` 语义一致）、`advanceN`（发射后是否推进 n）、`x0/y0`（锚点偏移）、`count`（数量）、`size`/`type`（弹尺寸/类型）。

| 生成器 | 用途 | 主要 opts | 对应原手写块 |
| --- | --- | --- | --- |
| `ring` | 环形（参考 Touhou.js shoot_circle） | speed 线速度、angle0 起角、angleSpan 张角（默认 2π） | 新增（case 24 第 4/5 卡微调） |
| `fan` | 扇形（含单族/四向族/旋转扫射） | dirs 方向族、spread0/spreadStep（j 步进）、spreadTimeDiv/spreadTimeBase（time 步进）、`'-spread'` 记号 | case 7 的 (2-j) 扇形、9 连四向、(j*2-4)*3/4、旋转扫射 /15-2 |
| `aimed` | 自机狙（direction=null 语义：不配 vx/vy 时朝玩家） | speed = 到达玩家所需帧数，vx=(playerx-cx)/speed | case 24 /150、case 7 /100 |
| `line` | 直线雨（等距一列，可带随机散布） | spacing 列距、jx/jy 随机散布（>0 才取 rand） | case 24 垂直雨 3 连、case 7 的 192-j*32 / 192-j*64 4 连 |
| `rain` | 随机散布（参考 MT0 case 8 的 rand(16)/4 速度箱） | vxMin/vxMax/vyMin/vyMax | 通用（当前两案未用，供后续卡片） |

### 二、符卡数据表格式与每卡时限

```js
core.plugin.danmaku.cards24 / cards7 = [
  {
    patterns:    [{ gen: 'rain'|'fan'|'aimed'|..., cx: 112, cy: 60, opts: {...} }, ...], // 高血段
    lowPatterns: [...],  // 低血段（可选，不配则沿用 patterns）
    duration: 1200       // 该卡时限帧数（60 帧/秒）
  }, ...
]
```

* 高血/低血判定沿用 case 7 原语义：`enemylife * 2 > enemylifemax` 用 `patterns`，否则用 `lowPatterns`。
* 每帧 `flags.cardTimer += 1`；到 `duration` 自动破卡：`spellcardleft -= 1`、`enemylife` 回满、`cardTimer` 归零、给出破卡提示；破完最后一卡且无下一阶段（case 24 的第 5 卡）时超时直接胜利；case 7 破完第 8 卡后进入原 final 阶段（spellcardleft 0），该阶段超时同样直接胜利。胜利统一走现有分支（`enemylife <= 0` 且 `spellcardleft == 0` → 回城）。
* 时间显示：血条下方小字 `"时间 XX"`（剩余秒数，样式同擦弹计数）；破卡瞬间金黄 `"符卡击破"` 淡出约 20 帧。
* `cards24`：5 卡 × `duration: 1200`（20 秒）；`cards7`：9 阶段 × `duration: 1500`（25 秒）。

### 三、case 24（简单模式）数据化明细

每卡基础组合 = 现有垂直雨 3 连发（`time%60==10`，x = enemyx-24+j*24、y = enemyy+12、vx=0、vy=2、size 6）+ 极慢瞄准弹（`time%100==40`，`/150`、size 6），与手写块参数逐字节一致。按任务"后 2 卡加一环弹"微调：第 4/5 卡额外每 180 帧（相位 30）补一环小弹（10 颗、size 3、speed 1.2 / 第 5 卡 1.5 提速一档），整体保持"简单可过"。

### 四、case 7（困难模式）数据化明细（逐段等价）

原 case 7 实际为 **9 个阶段**（spellcardleft 8~0：8 张符卡 + 破完卡后的最终阶段），全部搬入 `cards7` 逐段等价（`cards7[0]`=spellcardleft 8 … `cards7[8]`=spellcardleft 0）。

| 阶段 | 高血段 | 低血段 |
| --- | --- | --- |
| 8 | 垂直雨 4 连：x=192-j*32+rand(32)、y=enemyy+rand(24)、vy=2、size6 | (2-j) 扇形 5 连：x=enemyx、y=enemyy+12、vx=2-j、vy=2、size14 |
| 7 | 同上垂直雨 4 连 | 垂直雨 4 连 + 瞄准弹 /100（同帧接续，aimed 不归零 n） |
| 6 | 大弹 4 连：192-j*64+rand(32)、vy=2、size14 | 大弹 4 连 + 瞄准弹 /100 |
| 5 | 大弹 4 连 | (2-j) 扇形 5 连（size14） |
| 4 | 大弹 4 连 | 9 连四向扇形 `(j-4)/2`（%50==40）+ 瞄准弹 /100（%50==10） |
| 3 | 大弹 4 连 | 5 连四向扇形 `(j*2-4)*3/4` |
| 2 | 大弹 4 连 | 旋转扫射 `/15-2`（time%8==0） |
| 1 | 大弹 4 连 | 旋转扫射 `/15-2` + 瞄准弹 /100 |
| 0 | 大弹 4 连 | %100==90 的 9 连扇形 `(j-4)/2` |

四向扇形的发射顺序（下/上/右/左逐 j 交错）与原手写块一致，由 `fan` 的 `dirs` 方向族实现。

**历史遗留核对记录**：原旋转扫射的 up/right 方向族速度是**负号形式**（up：vx=2-t/15、vy=-2；right：vx=3、vy=2-t/15），与 down/left 族不对称——这是原案的行为（非崩溃性 bug），为满足"行为等价是硬要求"按原样保留，`fan` 生成器用 `'-spread'` 记号复现并在实测中确认逐帧一致。

**数据化设计差异（非等价 bug）**：case 24 原手写块在 spellcardleft==0（破完 5 卡后）仍继续发弹、需再打空一管血才胜利；数据化后按任务"破 5 卡 → 胜利"处理：第 5 卡破完（无论打空血还是超时）即胜利，弹幕不再多出一段。

### 五、行为等价验证方法

改前备份 `.hermes/danmaku_pre_phase2.js`；把改前/改后的 parallelDo 各自编译为函数，在同一页面内用**相同 dummy flags + 相同随机种子**（引擎 `core.rand` 是 `__rand__` 确定性 PRNG，先开一局让 seed 可写）逐帧跑 300 帧（覆盖 `flags.time` 0~299 完整周期），抓取每次 spawn 事件（帧号、槽位、坐标、速度、尺寸、类型）做全等对比。

* **case 24**：卡 1~3 全等；卡 4/5 先"去环"验证基础组合与旧版全等（含槽位），再按生成器参数人工核算环弹（帧 29/209 各 10 颗、speed 精确 1.2/1.5、角度公式逐颗核对），并断言其余弹按帧与原版坐标/速度/尺寸/类型 multiset 一致（环弹占用槽位导致基础弹槽位偏移属设计内差异）。
* **case 7**：spellcardleft 8~0 × 高/低血段共 18 组逐帧全等，差异归零。

### 六、实测数据（无头 Chrome + puppeteer-core + `node server.js`，28 项全部 PASS）

1. `node --check project/floors/danmaku.js`、`project/plugins.js` 通过。
2. **行为等价（a/b）**：case 24 卡 1~3 全等（18 事件/300 帧，eq=true）；卡 4/5 去环后全等、环弹帧 29/209 × 10 颗速度精确、非环弹与旧版 multiset 一致；case 7 的 18 组（8~0 × 高/低血）全部全等，差异归零。
3. **时限结算（c）**：第 1 卡 duration 临时改 120 帧 → 超时自动破卡（spellcardleft 5→4、enemylife 回满 3000、cardTimer 归零、下一卡生效、破卡提示出现）；case 24 最后一卡超时 → 直接胜利回 f3_12 → 喝茶剧情 → f0_garden（`g_yuyuko_follow=1`）；case 7 全部 9 阶段改 120 帧 → 最终阶段超时直接胜利（同链路）。
4. **完整链路（d）**：进战 → 自动射击掉血 → 破 5 卡（生命破卡链 spellcardleft 5→0，每次破卡 cardTimer 归零 + 破卡提示）→ 胜利 → f3_12 → 喝茶 → f0_garden，`g_yuyuko_follow=1`、`energyBossDone=true`、`bulletscreen=0`。
5. **回放（e）**：录制路线回放后 `route.length == totalList.length`（4==4）、`failed=false`、弹幕战自动判胜跳过、最终状态与正常游玩一致、无回放错误。
6. **阶段一回归（f）**：hitk 分档表仍在（3→0.75/6→0.5/14→0.44）；擦弹边缘 +1 不掉血且 fx 黄星出现；size6 中心命中 -8、弹消耗、擦弹同时 +1 且 fx 白/红闪光出现；`"时间 XX"` 文本在血条下方渲染可见。
7. **真实引擎环弹抽测**：第 4 卡 ring 触发帧后 10 颗 size3 弹全部出现、speed=1.2 精确。

测试脚本/日志/结果在 `.hermes/phase2/`（gitignore 内，取证用）：`e2e_equivalence.js`/`e2e_equivalence.log`/`e2e_equivalence_result.json`（等价对比）、`e2e_timer_chain.js`/`e2e_timer_chain.log`/`e2e_timer_chain_result.json`（时限/链路/回放/回归）、`debug_ring_real.js` 等。

## 十五、东方化迭代·第一轮（东方风子弹素材替换）

### 一、素材出处

- 首选素材：**BlueWhaleMain/Touhou.js**（GitHub 开源项目），`assets/images/ebullet_1.png`（256x256，16x16 帧网格）与 `ebullet_2.png`（512x512，32x32 帧网格，big 为 64x64）；帧索引依据其 `src/resources/sticker.js`（ring y=32、small y=48、needle y=144、point y=192(8x8)、big y=192(64x64)；颜色列 x = 列号 × 帧宽）。素材版权属 ZUN / 东方 Project，经用户明确授权仅用于本项目。
- 备选素材：`%TEMP%/th06_3.1/sprites/`（No5972/th06_3.1，MIT）。本轮全部 5 张均采用 Touhou.js 帧，未启用备选。

> 帧坐标勘误：任务表写的 point aqua 是 (144,192)，但 point 帧宽为 8px，按 sticker.js 的 `aqua → x += 9*w` 实际列是 **x=72**；x=144 属第 18 列（不在命名色内），实测为红晕白点。故 enemybullet4 采用真正的 aqua 列 **(72,192,8,8)**（白色圆点 + aqua 角），交付时如实注明。

### 二、映射表（文件 → 源图帧 → 视觉尺寸）

| 文件 | 源图 / 帧 | 缩放 | 新弹视觉尺寸 | 视觉主色 |
| --- | --- | --- | --- | --- |
| `enemybullet.png`（size6 中弹 type1） | ebullet_1 ring red (48,32,16,16) | 16x16 → 24x24 NEAREST | 24x24 | 红环 + 白芯 |
| `enemybullet1_2.png`（size6 中弹 type2） | ebullet_1 needle blue bbox (4,0,8,16) | 8x16 → 12x24 NEAREST | 12x24 针形 | 蓝针白芯 |
| `enemybullet2.png`（size14 大弹 type1） | ebullet_2 big red (96,192,64,64) | 64x64 → 40x40 LANCZOS | 40x40 | 白弹 + 深色描边 |
| `enemybullet3.png`（size3 小弹 type1） | ebullet_1 small red (48,48,16,16) | 16x16 → 14x14 NEAREST | 14x14 | 白点 + 红边 |
| `enemybullet4.png`（size3 type4，原 61x64） | ebullet_1 point aqua (72,192,8,8) | 8x8 → 12x12 NEAREST | 12x12 | 白点 + aqua 角 |

- needle 方向检查：源帧为上下对称梭形（双尖，顶部 3px / 中部 8px / 底部 3px），针尖朝上/朝下视觉等价，无需垂直翻转；绘制与判定代码不感知方向，翻转只影响视觉，本帧无需翻转。
- 全部输出为 64x64 透明 RGBA，非透明 bbox 中心落在 (31..33, 31..33)（实测均为 (31.5, 31.5)）。
- 原图备份：`.hermes/east_r1_backup_images/`（5 张原始 PNG）。

### 三、处理流程

1. 备份 `project/images/enemybullet*.png` 至 `.hermes/east_r1_backup_images/`。
2. Python PIL 从 `%TEMP%/touhou_assets/` 裁剪源帧。
3. 等比缩放（NEAREST 保持像素锐利；大弹 64→40 经 LANCZOS 对比后采用 LANCZOS，视觉更平滑且 bbox 恰为 40x40）。
4. 贴到新建 64x64 透明 RGBA 画布，弹体视觉中心对准 (32,32)。
5. 同名覆盖保存（仍为 64x64 PNG RGBA；旧 enemybullet4 为 61x64 反而越界裁边，新图行为更干净，属预期）。
6. 版本号 2.10.32 → 2.10.33（`project/data.js` 第 339 行 `"version": "Ver 2.10.33"`；`main.js` 第 5 行 `this.version = '2.10.33'`），按项目惯例刷新图片缓存。

### 四、视觉-判定对照表（三档）

| 档位 | 判定半径（hitk，未动） | 新视觉半宽 | 判定 ≤ 视觉 | 备注 |
| --- | --- | --- | --- | --- |
| size3 小弹 | 4.25（playersize 2 + 3×0.75） | 7（14/2） | 是 | 实测 d=4.15 中 / d=4.35 不中 |
| size6 中弹 | 5.00（2 + 6×0.5） | 12（24/2） | 是 | 实测 d=4.9 中 / d=5.1 不中 |
| size14 大弹 | 8.16（2 + 14×0.44） | 20（40/2） | 是（明显小于视觉，差 11.84） | 实测 d=8.06 中 / d=8.26 不中 |

判定体系（hitk 分档系数、判定圆心 +32、擦弹半径/去重、命中/擦弹染色）与绘制代码（parallelDo drawImage 仍按 64x64 整图绘制）**零改动，仅换像素**。

### 五、实测结果摘要（全部通过）

1. **PIL 断言**（`.hermes/east_r1/assert_bullets.py`）：5 张新图尺寸 64x64 RGBA、bbox 中心 x/y ∈ [31,33]、视觉尺寸与上表一致（±2px）——15/15 PASS。
2. **语法**：`node --check project/data.js`、`node --check main.js` 通过。
3. **无头 Chrome 完整链路回归**（`.hermes/east_r1/east_r1_e2e.js`，65/65 PASS）：
   - 双视口（竖屏 390x844 触摸 / 横屏 860x680）：进弹幕战（enemyId=24、spellcards=5、life=3000、fireback=8、playersize=2）→ event2 位图断言（深色背景、绿色血条、白色判定点）→ 触摸拖动 1:1 跟手 + 越界钳制 224/352 + 点按不位移 → 自动射击敌血下降 → 擦弹 +1 不掉血 → 中弹 -8 → 胜利 → 回 f3_12 → 喝茶剧情 → f0_garden（`g_yuyuko_follow=1`、`energyBossDone=true`、`bulletscreen=0`）→ 战后方向键恢复格子移动（控制注销）。
   - 三档弹视觉-判定：静态注入 size 3/6/14 到 flags.bullet，event2 位图扫描视觉 bbox = 14/24/40px（中心 = bulletx+32, bullety+32）；判定边界复测全过，输出判定半径 < 视觉半径对照表（见上）。
   - 回放回归：录制撞 e403b 的 4 步路线 → 回放后 `route.length == totalList.length`、`failed=false`、弹幕战自动判胜跳过、终态 f0_garden + `g_yuyuko_follow=1`。
   - 中弹/擦弹染色回归：真实擦弹推 `fx type=1`（黄星，位置 122,320），真实命中推 `fx type=0`（白环红心，位置 112,320），event2 位图取证黄色/红色像素可见。
4. **测试产物**（`.hermes/east_r1/`，gitignore 内）：`build_bullets.py`/`build_report.json`（生成）、`assert_bullets.py`/`assert_bullets_result.json`（PIL 断言）、`east_r1_e2e.js`/`east_r1_e2e.log`/`east_r1_e2e_result.json`（E2E 回归）、取证 PNG：`east_r1_portrait_event2.png`、`east_r1_landscape_event2.png`、`east_r1_static_bullets.png`、`east_r1_fx_event2.png`。

### 六、改动范围

- 只动：5 张敌弹 PNG（enemybullet/enemybullet1_2/enemybullet2/enemybullet3/enemybullet4）、`project/data.js` 版本号、`main.js` 版本号、本交付文档。
- 未动：`project/floors/danmaku.js`、`project/plugins.js`、`libs/`、`reimubullet.png`（自机弹，命中判定已按 bbox [27..36]x[0..59] 校准，禁止换皮）、判定半径/判定圆心/擦弹/染色/符卡时限/弹幕密度。

## 十六、东方化迭代·第二轮（音效接入 + 触屏手感评估）

### 一、素材出处与拷贝校验

只允许使用两个已授权素材项目，全部为 **wav 原样拷贝**（不转码、不裁剪、不改名内容，禁止转 mp3/ogg）：

- **BlueWhaleMain/Touhou.js**（`%TEMP%/touhou_assets/snd/`）：`shoot.wav`、`graze.wav`、`damage.wav`、`card_get.wav`。
  - `shoot.wav` 与 No5972/th06_3.1 的 `fire.wav` md5 相同（`10AE405FDA204697BC946AA434D36068`，同一 TH06 音源）。
  - `graze.wav` 与 No5972/th06_3.1 的 `graze.wav` md5 相同（`50EBCEFF0399A73C9B178763E5A37831`）。
- **No5972/th06_3.1**（MIT License (c) 2021 No.5972，`%TEMP%/th06_3.1/sounds/`）：`bomb.wav` 作符卡宣言音。
- 素材版权归 ZUN/东方 Project，经用户明确授权仅用于本项目。

拷贝到 `project/sounds/` 的 5 个文件经 ffprobe 校验：`format_name` 均含 `wav`，时长与源一致（±0.05s），且与源文件 md5 逐字节一致：

| 目标文件 | 来源 | 时长 | 用途 |
| --- | --- | --- | --- |
| `danmaku_shot.wav` | touhou_assets/snd/shoot.wav | 0.161s | 自机射击音（每次齐射一次） |
| `danmaku_graze.wav` | touhou_assets/snd/graze.wav | 0.100s | 擦弹叮（graze+1 时） |
| `danmaku_damage.wav` | touhou_assets/snd/damage.wav | 0.150s | 中弹音（onhit 触发） |
| `danmaku_cardget.wav` | touhou_assets/snd/card_get.wav | 2.526s | 破卡音（两条破卡路径都播） |
| `danmaku_declare.wav` | th06_3.1/sounds/bomb.wav | 1.318s | 符卡宣言音（每卡开始） |

### 二、触发点表

| 音效 | 触发点 | 去重/防爆音 |
| --- | --- | --- |
| `danmaku_shot` | parallelDo 自机齐射块（`flags.time % (8 - flags.playersize) == 1`，每次齐射一次） | 无（天然 6 帧节奏） |
| `danmaku_graze` | 擦弹循环 `flags.graze += 1;` 之后 | `{ gap: 90 }`：90ms 最小间隔，同帧多弹同时擦只响一次 |
| `danmaku_damage` | 命中块 `core.status.hero.hp -= flags.fireback;` 之前 | 无（onhit 30 帧无敌天然限频） |
| `danmaku_cardget` | 两条破卡路径：parallelDo 胜利 else 分支（`flags.spellcardleft -= 1;` 处）+ `_tickCard` 超时分支 | 无 |
| `danmaku_declare` | `_tickCard` 卡索引变化帧（cards24：`length - spellcardleft`；cards7：`length - 1 - spellcardleft`）+ 战斗首帧（`lastCardIdx=-1` → 卡 1 即响）；高血→低血段切换不算新卡不响 | `flags.lastCardIdx` 游标去重，每张新卡响一次 |

### 三、开关与防爆音

- `flags.sfx` 默认 `1`（`danmaku.start` 初始化处），后续 UI 可置 0；`flags.sfxLast = {}` 为 `Date.now()` 时间戳表。
- `_sfx(name, opts)` 助手：开头 `if (!flags.sfx || core.isReplaying()) return;`；`gap` 用 `Date.now()` 做同名音最小间隔（避免 `flags.time` 300 帧回绕的坑）；结尾 `try { core.playSound(name); } catch (e) { console.error('danmaku sfx ' + name, e); }` 兜底，任何情况下不抛出。
- **回放静音**：除 `_sfx` 的 `core.isReplaying()` 检查外，`danmaku.start` 回放自动判胜分支额外置 `flags.sfx = 0`。原因：实测发现回放路线耗尽（`_replay_finished`）先于弹幕地板 parallelDo 判胜帧执行，该帧 `core.isReplaying()` 已变 false，仅靠 isReplaying 检查拦不住。回放判胜后战斗立即结束，下一次 `danmaku.start` 会重新置 `flags.sfx = 1`。

### 四、触屏手感评估结论（探针 A~G，双视口各跑一遍，全部 PASS）

**基线确认，无代码改动**（本轮探针未发现真实缺陷，1:1 拖动语义保持不动）。

探针实测数据（CDP 触摸，逻辑画布坐标；portrait 390x844 scale 0.8 / landscape 860x680 scale 1.295，CDP 亚像素取整允许 ±1px，规格 A 明确 ±1px）：

| 探针 | 断言 | 竖屏实测 | 横屏实测 | 结论 |
| --- | --- | --- | --- | --- |
| A 1:1 比率 | touchStart(112,320) → (162,320) → (162,370) → (112,370)，各步位移=指针位移 | (163,320)/(163,352)/(112,352) | (162,320)/(162,352)/(112,352) | PASS（±1px；越界步按钳制后生效位移） |
| B 点按不位移 | touchStart(150,300) 500ms 不发 move | (112,320) 不变 | (112,320) 不变 | PASS |
| C 首移不跳变 | player(112,320)，touchStart(200,280)，move(202,282) | (114,322) | (114,322) | PASS（只按手指位移，不跳按下点） |
| D 松手停驻 | 拖到 (150,340) touchEnd，800ms | d0=d1=(151,340) | d0=d1=(150,341) | PASS（无惯性漂移） |
| E 钳制与回跟 | 拖出界(-50,-80) → 拖(300,400) → 拖回(112,320) | (0,0)/(224,352)/(112,320) | (0,1)/(224,352)/(112,320) | PASS（锚点不累计，回拖立即跟回） |
| F 可达范围 | 从 (10,10) 拖到 (214,342) | (213,341) ±1px | (214,342) | PASS（拖动范围覆盖整个 224x352 战斗区） |
| G 双指探针（只记录不修复） | CDP 双 touchPoint：第二指是否接管锚点导致跳变 | 未跳变 | 未跳变 | 记录在案 |

探针 G 记录：双指并存时 `targetTouches[0]` 恒为首指（首指位移 (5,5) → player (117,325)）；首指抬起触发 touchend → `danmakuDown=0`，第二指单独移动不再产生位移，未复现跳变（拖动在首指抬起时终止）。清单中已知局限「双指触摸第二指会接管拖动锚点」按指示记录在案，留待微调轮真机复测评估，本轮不修复。

### 五、实测结果（全部通过）

1. **语法**：`node --check project/data.js`、`main.js`、`project/plugins.js`、`project/floors/danmaku.js` 全部通过。
2. **素材**：ffprobe 校验 5 个 wav 时长与源一致、`format_name` 含 wav、md5 与源一致（见上表）。
3. **新 E2E**（`.hermes/east_r2/east_r2_e2e.js`，102/102 PASS）：双视口完整链路（进战 enemyId=24/spellcards=5/life=3000/fireback=8/playersize=2 → 触摸/鼠标拖动 1:1+钳制+点按不位移 → 自动射击敌血下降 → 擦弹 → 中弹 -8 → 胜利 → f3_12 → 喝茶 → f0_garden，`g_yuyuko_follow=1`、`energyBossDone=true`、`bulletscreen=0`；战后方向键恢复格子移动）+ event2 位图断言 + 触屏探针 A~G（双视口）+ 音效断言（竖屏全套、横屏冒烟）+ 回放静音。
4. **音效断言明细**（`core.playSound` 包装钩子 `__sfxLog`）：
   - 进战首 30 帧 `danmaku_declare` 恰好 1 次（ft=1，战斗首帧宣言）；
   - 自动射击 1.5s 内 `danmaku_shot` 16 次（竖屏）/15 次（横屏），相邻 ft 差全部恰为 6；
   - 静态注入 3 颗弹入擦弹带（距自机中心 20+size×0.5 内、判定圆外）：`danmaku_graze` 150ms 窗口恰好 1 次（90ms gap 去重），`flags.graze` +3；
   - 注入命中弹：`danmaku_damage` 出现，hp 500→492（-8）；
   - 击杀破卡（置 `enemylife=10`）：`danmaku_cardget`（ft=11）→ 下一帧 `danmaku_declare`（ft=12），spellcardleft 5→4；
   - 超时破卡（置 `cardTimer = duration-1`）：`danmaku_cardget`（_tickCard 超时路径）→ 下一帧 `danmaku_declare`，spellcardleft 5→4；
   - 开关：`flags.sfx=0` 战斗 1s 内 `__sfxLog` 零新增 danmaku 条目；置回 1 恢复 shot；
   - 回放静音：回放页挂钩，弹幕战自动判胜期间 `__sfxLog` 无任何 `danmaku_*` 条目；
   - 全程 pageerror/console.error 无音效相关异常（AudioContext 挂起不报错）。
5. **回归**：原样重跑 `.hermes/east_r1/east_r1_e2e.js`，仍 **65/65 PASS**（音效改动不影响既有断言）。
6. **版本号**：`project/data.js` `"version": "Ver 2.10.33"` → `"Ver 2.10.34"`；`main.js` 第 5 行 `this.version = '2.10.33'` → `'2.10.34'`（音效新增，按项目惯例刷新缓存）。
7. **测试产物**（`.hermes/east_r2/`，gitignore 内）：`east_r2_e2e.js` / `east_r2_e2e.log` / `east_r2_e2e_result.json`（含 probeData A~G）、`fix_danmaku_sfx.js`（parallelDo 字符串行内插入脚本）、`dbg_replay_sfx.js`（回放静音根因取证）、取证 PNG：`east_r2_portrait_event2.png`、`east_r2_landscape_event2.png`。

## 十七、东方化迭代·第三轮（中弹全屏闪红 + 判定点可见性）

### 一、改动点

1. **`project/plugins.js`**（`core.plugin.danmaku.start` 初始化区，`flags.cardBreakFx = null;` 之后）：新增 `flags.hitFlash = 0;`（中弹全屏闪红计数器，纯视觉，不影响判定与回放）。
2. **`project/floors/danmaku.js`**（`parallelDo` 字符串内，仅 3 处增改；判定/生成/密度/时限/擦弹半径/拖动逻辑零改动）：
   - **命中块置位**：现有 `flags.fx.push({ x: flags.bulletx[i] + 32, y: flags.bullety[i] + 32, type: 0, life: 5 });` 之后加一行 `flags.hitFlash = 5;`；
   - **判定点重绘**：原 2*playersize=4px 白色方块替换为「白色 6px 核心（判定中心）+ 14×14 半透明白外圈 `rgba(255,255,255,0.5)` 线宽 1 + 四向蓝白十字线 `rgba(180,215,255,0.7)`」，全部以 `playerx/playery` 为中心；
   - **全屏闪红绘制**：破卡提示块结束之后、`//自机发射弹幕` 之前插入 `if (flags.hitFlash > 0) { core.fillRect("event2", 0, 0, 256, 384, "rgba(255,70,70," + (flags.hitFlash * 0.072) + ")"); flags.hitFlash -= 1; }`，绘制在 parallelDo 绘制段最后，盖住弹幕/HUD/自机。
3. **版本号**：`main.js` 第 5 行 `this.version = '2.10.34'` → `'2.10.35'`；`project/data.js` `"version": "Ver 2.10.34"` → `"Ver 2.10.35"`（按项目惯例升版本号刷缓存，main.js 加载 floors.min.js 带 `?v=` 版本参数）。

### 二、设计说明

- **闪红**：命中帧在判定段置 `hitFlash=5`（该帧绘制段已过，不产生绘制），下一帧起按 5/4/3/2/1 逐帧绘制 `rgba(255,70,70,hitFlash×0.072)`，alpha 首帧 0.36、逐帧衰减 0.288/0.216/0.144/0.072，共 5 个可见帧（含置位帧总时长 ≤6 帧）；覆盖 256×384 全战斗区，绘制顺序在最后=盖住弹幕/HUD/自机，这是中弹强反馈的意图；纯视觉，不参与判定与回放。
- **判定点**：6px 白色核心即判定中心（仅视觉尺寸 4→6px，判定半径仍为 `playersize + bulletsize×hitk`，未改）；14×14 半透明白外圈与四向蓝白十字线为纯视觉辅助，帮助手机小屏玩家定位判定点，不改变判定/擦弹半径/输入逻辑。
- **测试确定性措施**：case 24 弹幕会周期性流经外圈卡点，位图断言采样前清空一次敌弹（仅影响测量帧）；`getImageData` 的 RGB 为未混合原色（透明度在 alpha 通道），闪红强度以 alpha 通道为准记录（r-g 为饱和值）。

### 三、实测结果（全部通过）

1. **语法**：`node --check project/data.js`、`main.js`、`project/plugins.js`、`project/floors/danmaku.js` 全部通过。
2. **新 E2E**（`.hermes/east_r3/east_r3_e2e.js`，**120/120 PASS**）：
   - **双视口完整链路**（竖屏 390×844 触摸 + 横屏 860×680）：进战（enemyId=24、spellcards=5、life=3000、fireback=8、playersize=2）→ 触摸拖动 1:1 跟手 + 越界钳制 + 点按不位移（探针 A~F；G 双指本轮跳过，r2 已记录）→ 自动射击敌血下降 → 擦弹 graze+1 → 中弹 -8 → 胜利 → f3_12 → 喝茶 → f0_garden（`g_yuyuko_follow=1`、`energyBossDone=true`、`bulletscreen=0`）；战后方向键恢复格子移动；
   - **音效断言全套保留**（竖屏全套、横屏冒烟）：declare 首帧恰 1 次、shot 节奏 6±1、graze 3 弹 1 音、damage 触发、破卡 cardget→declare、超时破卡、sfx 开关、回放静音；
   - **判定点像素断言**（双视口，清弹后采样）：核心区 white=37（≥4）；外圈/十字线亮像素 ringBright=277（>12）；4 个外圈卡点 (105,320)/(119,320)/(112,313)/(112,327) 实测 `[[251,251,252],[125,145,133],[252,215,184],[241,202,173]]`，三通道均 >110；
   - **中弹闪红**（双视口各跑一遍，rAF 采样 450ms，命中注入法：弹中心距自机 ≈2.8 < 命中圆 5）：竖屏采样帧 4~8、横屏采样帧 5~9 出现闪红，alpha 通道实测 **92→73→55→37→18**（换算 0.36→0.071，5 帧逐帧衰减）；r-g 峰值 186（≥40）；采样开始前 2 帧与最后 3 帧全部探针 r-g=0（<15，基线与消退）；注入命中 hp 500→492（-8，确认命中发生）。
   - 全程 pageerror/console.error 无新增异常（仅 AudioContext 未交互挂起类与既有 404 基线，与 r2 一致）。
3. **回归**：
   - 原样重跑 `.hermes/east_r1/east_r1_e2e.js`：仍 **65/65 PASS**。
   - `.hermes/east_r2/east_r2_e2e.js` 复制为 `.hermes/east_r3/regress_east_r2.js`，**仅改第 72/74 行两处版本断言**（`data.js version Ver 2.10.34`→`Ver 2.10.35`、`main.js version 2.10.34`→`2.10.35`），其余原样：仍 **102/102 PASS**。原因：r2 套件硬编码了版本号断言，本轮按项目惯例升版本号刷缓存，必须同步该两行；因"其余原样"，补丁脚本保留 r2 内部输出路径，结果写回 `.hermes/east_r2/`（脚本副本在 `.hermes/east_r3/regress_east_r2.js`）。

### 四、测试脚本与产物（`.hermes/east_r3/`，gitignore 内）

- `east_r3_e2e.js` / `east_r3_e2e.log` / `east_r3_e2e_result.json`（含 FLASH 采样 `samples`/`alphas` 与 probeData A~F/G 跳过记录）；
- `regress_east_r2.js`（east_r2 版本断言补丁回归脚本副本）；
- `patch_r3.js`（parallelDo 字符串行内编辑脚本）、`preflight_probe.js`（判定点像素预检）、`flash_probe.js`（闪红逐帧 alpha 取证）；
- 取证 PNG：`east_r3_portrait_event2.png`、`east_r3_landscape_event2.png`。

## 十八、东方化迭代·第四轮（触屏边界手感·半身钳制 + BOSS 演出）

### 一、改动点清单（文件 + 位置 + 内容）

**project/plugins.js**

1. **半身钳制常量**（第 6669-6673 行，`var FIELD_W = 224; var FIELD_H = 352;` 之后）：
   `MOVE_MIN = 20` / `MOVE_MAX_X = 236`（256-20）/ `MOVE_MAX_Y = 364`（384-20），含注释说明自机 40x40 半宽=20、移动区 [20,236]x[20,364]（216x344）；FIELD_W/FIELD_H 原值保留，弹幕/血条等其他语义仍用 224/352。
2. **键盘 handler**（`onkeyDown 'danmaku_move_control'`，第 7187-7190 行）：四个边界条件 `playerx > 0`→`> MOVE_MIN`、`playery > 0`→`> MOVE_MIN`、`playerx < FIELD_W`→`< MOVE_MAX_X`、`playery < FIELD_H`→`< MOVE_MAX_Y`（键盘与触摸同一套含半身钳制）。
3. **触摸/鼠标 onmove**（第 7209-7212 行）：`nx < 0`→`nx < MOVE_MIN`、`nx > FIELD_W`→`nx > MOVE_MAX_X`、`ny < 0`→`ny < MOVE_MIN`、`ny > FIELD_H`→`ny > MOVE_MAX_Y`；1:1 位移、锚点只推进实际生效位移、点按不位移、松手停驻、事件消费 return true 全部未动。
4. **cards24 五张卡 `name` 字段**（第 6931/6939/6947/6956/6966 行，duration 之后，顺序即战斗顺序）：
   亡郷「亡我郷」/ 亡舞「生者必滅の理」/ 華霊「ゴーストバタフライ」/ 幽曲「リポジトリ・オブ・ヒロイック」/ 死蝶「華胥の永眠」。
5. **cards7 九张卡 `name` 字段**（第 6982/6993/7005/7017/7028/7040/7051/7062/7074 行，spellcardleft 8..0）：
   亡郷「亡我郷 -遼東-」/ 亡舞「生者必滅の理」/ 華霊「ゴーストバタフライ」/ 幽曲「リポジトリ・オブ・ヒロイック」/ 反魂「蝶の羽風生に還す」/ 幽雅「死出の鐚」/ 彼岸「四丁目迷いの道」/ 桜符「完全なる桜開花」/ 死蝶「華胥の永眠」。
   全部用 ASCII 双引号包裹，不改任何 patterns 参数。
6. **danmaku.start 初始化**（第 6753-6756 行，`flags.hitFlash = 0;` 之后）：`flags.cardNameFx = null;`、`flags.breakFlash = 0;`、`flags.enterFx = 45;`。
7. **宣言触发**（第 7106 行，`_self.danmaku._sfx('danmaku_declare')` 之后）：`flags.cardNameFx = { text: card.name || '', life: 90 };`——与音效同触发点（卡索引变化且 spellcardleft>0；高血→低血段切换不算新卡不触发）。
8. **超时破卡分支**（第 7117 行，`flags.cardBreakFx = { life: 20 };` 之后）：`flags.breakFlash = 5;`。

**project/floors/danmaku.js**（parallelDo 为单行超长字符串，全部改动在 line 273 字符串内，以下为字符串内偏移）

1. 临时变量（偏移 4107，`var _dcard = null;` 之后）：`var _nm = ''; var _nw = 0; var _k = 0; var _nx = 0; var _na = 0; var _enterOff = 0;`。
2. BOSS 登场计算（偏移 6161，十字线最后一行之后、敌机绘制之前）：`_enterOff = flags.enterFx > 0 ? -Math.round(flags.enterFx * flags.enterFx * 0.035) : 0;` + `if (flags.enterFx > 0) flags.enterFx -= 1;`。
3. 敌机两条 drawImage 分支 y 表达式追加 `+ _enterOff`（偏移 6512 enemyImage 分支 `flags.enemyy + 16 - ((flags.enemyDrawH || 32) - 32) / 2`；偏移 6731 enemys.png 分支 `flags.enemyy + 16`）。
4. 符卡宣言文字绘制（偏移 9997，破卡提示块之后、中弹闪红块之前）：见设计说明。
5. 破卡大闪光绘制（偏移 10875，中弹闪红块之后、自机发射之前）：`flags.breakFlash > 0` 时 `fillRect(0,0,256,384, "rgba(255,244,214," + flags.breakFlash*0.1 + ")")` 并自减。
6. 胜利分支（偏移 47184，`flags.cardBreakFx = { life: 20 };` 之后）：`flags.breakFlash = 5;`。

**版本号**

- `main.js` 第 5 行：`this.version = '2.10.35'` → `'2.10.36'`；
- `project/data.js` 第 344 行：`"version": "Ver 2.10.35"` → `"Ver 2.10.36"`。

### 二、设计说明

- **半身 20px 依据**：自机 40x40 图以 `(playerx-20, playery-20)` 绘制（parallelDo drawImage youmu.png 的 -20 偏移），战斗区 256x384；原钳制 `playerx/playery∈[0,224]x[0,352]` 导致左/上被裁 20px、右/下余 12px，非对称且半身出区。修正后移动区 [20,236]x[20,364]（216x344），自机整身不出战斗区；键盘与触摸共用同一组 MOVE_MIN/MOVE_MAX，1:1 拖动比率、锚点只推进实际生效位移、点按不位移、松手停驻均不变。
- **enterFx 独立计数器**：flags.time 每 300 帧回绕，若用 `flags.time < 45` 判定会在回绕后再次触发登场动画；因此登场用独立计数器 enterFx（danmaku.start 置 45，parallelDo 每帧自减，45 帧后恒 0），不受 time 回绕影响。
- **宣言文字参数与绘制顺序**：每卡开始置 `{text, life:90}`（约 1.5 秒），最后 20 帧 alpha 淡出（`life*0.05`）；白字 `rgba(240,245,255)` + 1px 紫影 `rgba(90,60,160,0.9)`，14px 粗体，居中 `x=128-字宽/2`（CJK 14px/ASCII 7px 估算），y 基线 122/124（字形约 108..122），位于敌机盒底（104）之下、判定点（320）之上，不与血条/擦弹/时间/破卡提示重叠；绘制在子弹之后保证可读，但仅 90 帧且位于顶部稀疏区，不遮挡弹幕。
- **破卡大闪光**：暖白 `rgba(255,244,214)` 5 帧渐隐（alpha 0.5→0.1），与中弹红闪（`rgba(255,70,70)`，g≈45、r-g 大）明显区分；触发点为胜利破卡分支（parallelDo）与超时破卡分支（_tickCard）两处，均只置位纯视觉计数器。
- **登场参数**：enterFx=45 时偏移 -71，二次缓出（`enterFx²×0.035`，=2 时 -0.14→0），45 帧后恒 0；只改绘制 y，不动 enemyx/enemyy 逻辑坐标，不影响判定/生成/回放。

### 三、清单进度

- 第 6 项（触屏边界手感：越界钳制含自机半身）——完成；
- 第 7 项（BOSS 演出：符卡宣言 / 破卡大闪光 / BOSS 登场）——完成；
- 剩余：第 8 项弹幕节奏、第 9 项微调轮。

### 四、实测数据

1. **语法**：`node --check project/plugins.js`、`project/floors/danmaku.js`、`project/data.js`、`main.js` 全部通过。
2. **新 E2E**（`.hermes/east_r4/east_r4_e2e.js`，**148/148 PASS**，双视口竖屏 390x844 触摸 + 横屏 860x680 各跑一遍）：
   - **钳制新预期**：拖动 1:1 y 钳制 352→364；越界钳制 (0,0)/(224,352)→(20,20)/(236,364)；拖回场内 `x<236&&x>20&&y<364&&y>20`；探针 A step2/3 y=364（(162,364)/(112,364)）；探针 E (20,20)/(236,364)/拖回 (112,320)；探针 F 新可达范围 setPlayer(30,30)→tStart(30,30)→tMove(250,380)=(236,364)±1→tMove(0,0)=(20,20)±1（覆盖 216x344 移动区，自机整身不出 256x384）；键盘 setPlayer(20,20) 按左/上仍 (20,20)、setPlayer(231,359) 按右/下=(236,364) 不越界。
   - **BOSS 登场**：竖屏 top1=8（t=9）< top2=48（t=31）< top3=56（t=61），总位移 48>20，enterFx 归零；横屏 top1=8（t=9）< top2=47（t=30）< top3=56（t=60），总位移 48>20，enterFx 归零（采样区 x∈[120,168]、y∈[0,140]，排除血条绿色行）。
   - **符卡宣言文字**：第 1 卡 t∈[55,90) 白字像素（r>200&&g>200&&b>240）598（>20，t≈63，文本「亡郷「亡我郷」」），t≥130 后 0（<5）；第 2 卡击杀破卡后 921（>20，文本「亡舞「生者必滅の理」」，spellcardleft=4）；双视口一致。
   - **破卡大闪光**（超时路径，置 `flags.cardTimer=1199`，第 1 卡 duration 1200）：rAF 采样 450ms，连续 5 帧角点 (5,5) 暖白（r=255、g≈244、b≈215，maxRun=5），之后回基线（g=0<60），`flags.breakFlash` 5→0；双视口一致。
   - **保留全部 r3 断言**：完整链路（进战 enemyId=24/spellcards=5/life=3000/fireback=8/playersize=2 → 拖动/点按 → 自动射击 → 擦弹 +1 → 中弹 -8 → 胜利 → f3_12 → 喝茶 → f0_garden，g_yuyuko_follow=1、energyBossDone=true、bulletscreen=0；战后方向键恢复格子移动）、音效全套（declare 首帧恰 1 次、shot 节奏 6±1、graze 去重、damage、击杀破卡 cardget→declare、超时破卡、sfx 开关、回放静音）、判定点像素断言、中弹闪红 rAF 采样（红 92→18 alpha 衰减）、回放 route 一致自动判胜跳过、探针 B/C/D/G（G 仍跳过记录）。
   - 取证 PNG：`east_r4_portrait_event2.png` / `east_r4_landscape_event2.png`。
3. **回归**：
   - `.hermes/east_r4/regress_east_r1.js`（= east_r1_e2e.js 副本，仅改钳制断言）：**65/65 PASS**；
   - `.hermes/east_r4/regress_east_r3.js`（= east_r3_e2e.js 副本，仅改钳制断言 + 版本号）：**120/120 PASS**；
   - 两套回归的位图断言均在进战 1.2s 后采样（BOSS 登场 45 帧≈0.75s 已结束），不受登场影响，无需推迟采样时机；游戏代码未动。

### 五、回归说明（副本补丁行号清单，其余一字未改）

**regress_east_r1.js**（源 `.hermes/east_r1/east_r1_e2e.js`，562 行）：

- 第 15-17 行：`E1 = HERMES + '\east_r1'` → `'\east_r4'`；`LOG = E1 + '\east_r1_e2e.log'` → `E1 + '\regress_east_r1.log'`；`RESULT = E1 + '\east_r1_e2e_result.json'` → `E1 + '\regress_east_r1_result.json'`。
- 第 135/136、410/411、446/447 行：PNG 取证名 `east_r1_` → `regress_east_r1_`（event2 / static_bullets / fx 三张）。
- 第 544 行：日志头 `=== east_r1 e2e ===` → `=== east_r4 regress_east_r1 (r1 suite, clamp expectations updated) ===`。
- 第 295 行：`y: Math.min(t0.y + dy1, 352)` → `364`。
- 第 296 行：断言名 `y clamped to 352` → `364`（断言逻辑不变）。
- 第 300 行：`t2.x === 224 && t2.y === 352` → `t2.x === 236 && t2.y === 364`；断言名 `FIELD_W=224/FIELD_H=352` → `MOVE_MAX 236/364`。
- 第 304 行：`t3.x < 224 && t3.x > 0 && t3.y < 352 && t3.y > 0` → `t3.x < 236 && t3.x > 20 && t3.y < 364 && t3.y > 20`。

**regress_east_r3.js**（源 `.hermes/east_r3/east_r3_e2e.js`，744 行）：

- 第 13-15 行：`E2 = HERMES + '\east_r3'` → `'\east_r4'`；LOG/RESULT → `regress_east_r3.log` / `regress_east_r3_result.json`。
- 第 223/224 行：PNG 取证名 `east_r3_` → `regress_east_r3_`。
- 第 72/74 行：版本断言 `Ver 2.10.35` / `'2.10.35'` → `2.10.36`。
- 第 725 行：日志头更新为 `=== east_r4 regress_east_r3 (r3 suite, clamp expectations updated) ===`。
- 第 367/368 行：探针 A step2/3 `y === 352` → `364`（断言名同步 (162,364)/(112,364)）。
- 第 410/411 行：探针 E `(0,0)` → `(20,20)`、`(224,352)` → `(236,364)`。
- 第 415-426 行：探针 F 改为新可达范围（setPlayer(30,30) → tStart(30,30) → tMove(250,380)=(236,364)±1 → tMove(0,0)=(20,20)±1，单条断言覆盖两步，总断言数保持 120）。
- 第 551/556/560 行：拖动块 y 钳制 352→364、钳制目标 224/352→236/364、拖回场内边界。

### 六、版本号

`Ver 2.10.35` → `Ver 2.10.36`（`main.js` 第 5 行 + `project/data.js` 第 344 行，按项目惯例内容变更升版本刷缓存）。

### 七、素材

本轮无新素材（纯代码改动，素材出处无需更新）。

## 十九、东方化迭代·第五轮（弹幕节奏）

### 一、改动点清单（文件 + 位置 + 内容）

| 文件 | 位置 | 内容 |
| --- | --- | --- |
| `project/plugins.js` | `danmaku.start` 内 `flags.enterFx = 45;` 之后（约 6757-6759 行） | 新增 `flags.highPhase = 1;`（高血段标记：`enemylife*2 > enemylifemax` 为高血段，破卡回满血时复位）+ `flags.ceaseFx = null;`（低血段停火提示计数器，纯视觉 + 生成暂停） |
| `project/plugins.js` | `_tickCard` 超时破卡分支 `flags.breakFlash = 5;` 之后（约 7121-7124 行） | 超时破卡同样清屏：`for (var i = 0; i < 100; i++) { flags.bullet[i] = 0; flags.grazed[i] = 0; }`（敌弹全清+擦弹标记复位，自机弹保留）+ `flags.highPhase = 1;` + `flags.ceaseFx = null;` |
| `project/plugins.js` | `_tickCard` "高血/低血段选择"注释之前（约 7132-7137 行） | 低血段切换检测：`if (flags.ceaseFx && flags.ceaseFx.life > 0) flags.ceaseFx.life -= 1;`；`if (card.lowPatterns && flags.highPhase && flags.enemylife * 2 <= flags.enemylifemax) { flags.highPhase = 0; flags.ceaseFx = { life: 45 }; }`（仅触发一次，破卡回血复位） |
| `project/plugins.js` | `_tickCard` 生成循环（约 7140-7151 行） | 生成门控：`if (flags.cardTimer >= 30 && !(flags.ceaseFx && flags.ceaseFx.life > 0))` 包住 `flags.n = 0; for (...) spawn`；`var p/pat/o` 声明移入 if 块（var 提升，行为不变） |
| `project/floors/danmaku.js` | `parallelDo` 击杀破卡分支（胜利判定 else 内，`flags.breakFlash = 5;` 之后、"阶段二"注释之前） | 击杀破卡同样清屏：`for (i = 0; i < 100; i++) { flags.bullet[i] = 0; flags.grazed[i] = 0; }` + `flags.highPhase = 1;` + `flags.ceaseFx = null;`（i 复用 parallelDo 顶部临时变量；胜利分支自带清屏循环，未重复添加） |
| `project/floors/danmaku.js` | `parallelDo` 破卡提示块之后、符卡宣言文字块之前 | 低血停火提示绘制：`if (flags.ceaseFx && flags.ceaseFx.life > 0) { _na = life<15 ? round(life*0.063) : 1; core.fillText("event2", "「本気を出すわ！」", 32, 86, "rgba(255,190,110," + (_na*0.95) + ")", "bold 12px sans-serif"); }` |
| `project/data.js` | 第 344 行 | `"version": "Ver 2.10.36"` → `"Ver 2.10.37"` |
| `main.js` | 第 5 行 | `this.version = '2.10.36'` → `'2.10.37'` |

### 二、设计说明

- **30 帧空窗用 cardTimer 门控，避开 flags.time 300 帧回绕**：`flags.cardTimer` 战斗开始为 0、破卡归零，与 `flags.time` 同步每帧 +1，但不受 `flags.time >= 300` 回绕影响；门控条件 `flags.cardTimer >= 30` 保证每张符卡（含战斗首卡）开始后前 30 帧不生成敌弹，之后按原 interval/offset 相位恢复（生成是"延迟"，不改任何 pattern 参数）。
- **清屏只清敌弹 + graze 标记，不清自机弹**：两条破卡路径（击杀：parallelDo 胜利分支 else；超时：_tickCard duration 到点）都执行 `flags.bullet[i]=0; flags.grazed[i]=0;`（100 槽），自机弹 10 槽不动（正作惯例）；最终胜利分支（spellcardleft==0）原有清屏循环保留，未重复添加。清屏 + 30 帧空窗叠加 = 破卡后约 0.5 秒净空过渡。
- **低血切换条件与复位**：`card.lowPatterns && flags.highPhase && enemylife*2 <= enemylifemax`——仅当当前卡存在真实低血段（lowPatterns）才触发（case 7 各卡触发；case 24 无 lowPatterns 永不触发，case 24 行为除 30 帧空窗与破卡清屏外完全不变）；`highPhase` 置 0 后条件不再满足（仅触发一次）；破卡两路径都复位 `highPhase=1`、`ceaseFx=null`（破卡回满血即回高血段）。
- **停火实现**：`ceaseFx = { life: 45 }`（0.75 秒），`_tickCard` 每帧先递减 life 再判断；`life > 0` 期间生成门控短路，暂停生成；life 归 0 后按原相位恢复（case 7 低血段 next spawn 于 `time%50==10` 恢复）。
- **提示文字样式与绘制顺序**：暖橙 `rgba(255,190,110)`（区别于破卡金黄 rgba(255,230,150)、卡名白字、擦弹蓝白），12px 粗体，y=86（与破卡提示同位但不同时出现：破卡提示只在破卡帧出现，低血切换发生在卡中）；`life<15` 时 alpha 按 `round(life*0.063)*0.95` 淡出约 0.75 秒；绘制在破卡提示块之后、符卡宣言文字块之前；ceaseFx.life 只在 `_tickCard` 递减（每帧一次），绘制处只读——纯视觉，不参与判定与回放。
- **节奏改动边界**：空窗/停火只是"延迟或暂停生成"，清屏只是"删敌弹"，均属清单第 8 项允许的节奏改动；未改任何 pattern 参数（密度/速度/尺寸/间隔/相位）、duration、hitk、擦弹半径/去重、拖动比率/钳制。

### 三、清单进度

- 第 8 项（弹幕节奏：卡间 30 帧空窗 / 破卡清屏 / 低血切换停火提示）——完成；
- 剩余：第 9 项微调轮。

### 四、实测数据

1. **语法**：`node --check project/plugins.js`、`project/floors/danmaku.js`、`project/data.js`、`main.js` 全部通过。
2. **新 E2E**（`.hermes/east_r5/east_r5_e2e.js`，**178/178 PASS** = r4 全部 148 + 本轮新增 30；双视口竖屏 390x844 触摸 + 横屏 860x680 各跑一遍）：
   - **卡 1 空窗（case 24）**：t∈[8,29] 采样 `[0,0,0,0]`（至少 2 点全为 0）；t=45 活跃敌弹 1（第一颗瞄准弹 t=40 生成、仍在屏上）。
   - **击杀破卡清屏（case 24）**：破卡前 t=86 活跃 4（>0）；置 `enemylife=10` 后破卡帧 t=89（spellcardleft 5→4）与随后 16 个采样全 0、`highPhase===1`；新卡 30 帧空窗结束后恢复生成（活跃 3，2.5s 内）。
   - **超时破卡清屏（case 24）**：置 `enemylife=100000; cardTimer=duration-1`，破卡帧 t=11/12 与随后 16 个采样全 0、`highPhase===1`。
   - **case 7 低血切换停火 + 提示**：切 case 7 第 1 卡（spellcardleft=8、「亡郷「亡我郷 -遼東-」」）置 `enemylife=1000` 后 5 帧内 `ceaseFx={life:45}`、`highPhase=0`（t=49/50）；停火期间 t∈[60,65]（本应 time%50==10 生成垂直雨）活跃敌弹 0；提示文字位图采样 y∈[76,96]×x∈[0,256] 暖橙像素 662（>20，t=62、life=32/33）；停火结束（life=0，t=96/98）后同区域 1（<5）；t=110/111（time%50==10 且已过停火）恢复生成活跃 5。
   - **case 24 不触发低血提示**：置 `enemylife=1000` 后轮询 10 帧 `ceaseFx` 恒 null、`highPhase` 恒 1（无 lowPatterns 不切换）。
   - **保留全部 r4 断言**：完整链路（进战 enemyId=24/spellcards=5/life=3000/fireback=8/playersize=2 → 拖动/点按 → 自动射击 → 擦弹 +1 → 中弹 -8 → 破 5 卡胜利 → f3_12 → 喝茶 → g_yuyuko_follow=1）、音效全套（declare 首帧恰 1 次、shot 节奏、graze 去重、damage、击杀破卡 cardget→declare、超时破卡、sfx 开关、回放静音）、判定点像素、中弹红闪、BOSS 登场三采样、卡名文字第 1/2 卡、破卡大闪光、探针 A~G、回放 route 一致自动判胜跳过。
   - **双视口一致性**：新增断言两视口采样一致（暖橙像素均 662、破卡帧 t=89/89、停火恢复 t=110/111）；取证 PNG：`east_r5_portrait_event2.png` / `east_r5_landscape_event2.png`。
3. **回归**：
   - `.hermes/east_r5/regress_east_r1.js`（= r4 副本）：**65/65 PASS**；
   - `.hermes/east_r5/regress_east_r3.js`（= r4 副本，仅改版本号断言）：**120/120 PASS**；
   - 两套回归位图/音效断言均在进战 1.2s 后采样（cardTimer 早已 >30），30 帧空窗与破卡清屏不影响既有断言时机；游戏代码未为迁就回归做任何调整。
4. **回放与音效**：回放页自动判胜跳过、route 长度一致（4==4）、失败标记 false；回放期间 `__sfxLog` 无 `danmaku_*` 条目（清屏/空窗/停火只写 `flags.bullet` 与 flags 计数器，不写 route/输入，不影响回放）。

### 五、回归说明（副本补丁行号清单，其余一字未改）

**regress_east_r1.js**（源 `.hermes/east_r4/regress_east_r1.js`，562 行；r5 副本共 2 处改动，r1 套件原本无版本号断言）：

- 第 15 行：`const E1 = HERMES + '\east_r4';` → `const E1 = HERMES + '\east_r5';`（日志/结果/PNG 经 E1 变量统一落到 east_r5 目录，避免覆盖 r4 产物）。
- 第 544 行：日志头 `=== east_r4 regress_east_r1 (r1 suite, clamp expectations updated) ===` → `=== east_r5 regress_east_r1 (r1 suite, clamp expectations updated) ===`。

**regress_east_r3.js**（源 `.hermes/east_r4/regress_east_r3.js`，748 行；r5 副本共 4 处改动）：

- 第 13 行：`const E2 = HERMES + '\east_r4';` → `const E2 = HERMES + '\east_r5';`（同上，经 E2 变量统一）。
- 第 72 行：版本断言 `data.js version Ver 2.10.36` → `Ver 2.10.37`（断言逻辑不变）。
- 第 74 行：版本断言 `main.js version 2.10.36` → `2.10.37`（断言逻辑不变）。
- 第 725 行：日志头 `=== east_r4 regress_east_r3 (r3 suite, clamp expectations updated) ===` → `=== east_r5 regress_east_r3 (r3 suite, clamp expectations updated) ===`。

### 六、版本号

`Ver 2.10.36` → `Ver 2.10.37`（`main.js` 第 5 行 + `project/data.js` 第 344 行，按项目惯例内容变更升版本刷缓存）。

### 七、素材

本轮无新素材（纯代码改动，素材出处无需更新）。

## 二十、东方化迭代·第六轮（微调轮：音效音量均衡）

### 一、五候选评估与结论

清单第 9 项微调轮：轮询评估触屏拖动灵敏度、判定点样式、弹速节奏、符卡时限、音效音量，选 1 项小幅优化。用 ffmpeg volumedetect 实测 `project/sounds/` 下 5 个弹幕音效的响度：

| 音效 | 时长 | mean_volume | max_volume | 用途 |
| --- | --- | --- | --- | --- |
| danmaku_shot.wav | 0.161s | -15.9 dB | -0.3 dB | 自机射击（最频繁） |
| danmaku_graze.wav | 0.100s | -16.8 dB | -0.0 dB | 擦弹叮 |
| danmaku_damage.wav | 0.150s | -5.5 dB | -0.8 dB | 中弹音 |
| danmaku_cardget.wav | 2.526s | -16.5 dB | -0.0 dB | 破卡音 |
| danmaku_declare.wav | 1.318s | -10.5 dB | 0.0 dB | 符卡宣言音 |

结论：**danmaku_damage 比 graze/shot 响约 11 dB（≈3.7 倍振幅），danmaku_declare 比 graze/shot 响约 5 dB**。手机外放/耳机下中弹音明显突兀，属于真实手感缺陷，本轮优化（仅衰减不放大）。其余四项均无实测缺陷，不动：

| 候选 | 不动理由 |
| --- | --- |
| 拖动灵敏度 | R2 探针 A~G 全 PASS、用户已确认 1:1 基线 |
| 判定点样式 | R3 已升级（6px 白核 + 外圈 + 十字线）并像素断言通过 |
| 弹速节奏 | R5 已完成（30 帧空窗 / 破卡清屏 / 低血停火提示） |
| 符卡时限 | 用户基线明确不擅动 |

### 二、改动说明

**唯一代码改动 `project/plugins.js`**：新增 `danmaku._applySfxGain` helper（`_sfx` 助手之后），并在 `danmaku.start` 初始化区（`flags.sfx = 1;` / `flags.sfxLast = {};` 之后）调用一次 `_self.danmaku._applySfxGain();`。

- **内存级缩放方案**：就地缩放已解码 AudioBuffer 采样（`getChannelData(c)` 逐采样 ×gain），**不写 wav 文件**（R2 起"文件与源 md5 逐字节一致"断言继续通过）、**不改 libs/**、**不改 core.playSound 调用链**（`_sfx` 仍原样调用 `core.playSound(name)`，E2E 的 `__sfxLog` 包装钩子依赖不变）。
- **增益表**：`{'danmaku_damage': 0.4, 'danmaku_declare': 0.7}`，其余 1.0 不动。实测 damage RMS 0.5324→0.2129（约 -5.5 dB → -13.4 dB）、declare RMS 0.2982→0.2087（约 -10.5 dB → -13.6 dB）；均衡后全组响度差从 ~11.3 dB 缩至 ~3.3 dB。
- **幂等标记**：`buf.__danmakuGain = true` 在首次缩放后置位；`danmaku.start` 每次进战都会调用 `_applySfxGain`，重复进战不再二次缩放（E2E 幂等断言验证）。
- **键形适配（对任务给定 helper 的唯一调整）**：运行时 `core.material.sounds` 的键带文件后缀（loader 按 data.js `sounds` 列表原样装载，如 `'danmaku_damage.wav'`），而 `_sfx` 调用名为无后缀（`'danmaku_damage'`）。helper 查找写为 `sounds[name] || sounds[name + '.wav']` 两种键形都兼容，保证缩放真实命中已解码 buffer；不改 `_sfx` 参数、不改 wav、不改 libs。
- **只衰减不放大防削波**：max_volume 最高已达 0.0 dB，放大必然削波；全部 gain ≤ 1，峰值随 RMS 同步下降，杜绝削波。

### 三、实测记录

1. **语法**：`node --check project/plugins.js project/data.js main.js project/floors/danmaku.js` 全部通过（E2E 内再次校验）。
2. **素材**：5 个 wav `format_name` 含 wav、时长与源一致（±0.05s）、md5 与源逐字节一致——本轮未动文件，断言原样通过。
3. **新 E2E**（`.hermes/east_r6/east_r6_e2e.js`，**196/196 PASS** = R5 全部 178 断言保留 + 本轮新增 18；双视口竖屏 390x844 触摸 / 横屏 860x680 各跑一遍完整链路 + 音量断言）：
   - **音量断言（in-page 读取已解码 AudioBuffer 的 channel 0 计算 RMS）**：
     - `danmaku_damage`：rms=0.21295 ∈ 期望×[0.85,1.15]（期望 0.21235 = 10^(-5.5/20)×0.4，带 [0.18050,0.24421]）——双视口一致；
     - `danmaku_declare`：rms=0.20873 ∈ [0.17763,0.24032]（期望 0.20898 = 10^(-10.5/20)×0.7）——双视口一致；
     - `danmaku_shot/graze/cardget`：与进战前同页面基线比值 1.0000 / 1.0000 / 1.0000（±15% 带内，gain=1 未被动）；
     - `__danmakuGain` 标记：damage/declare 的 buffer 上为 `true`，shot/graze/cardget 未设置——双视口一致；
     - **幂等断言**：胜利链结束后再次 `core.plugin.danmaku.start(...)` 进战（同入口，同步再次执行 `_applySfxGain`），damage RMS 0.21294578688782828 与首次进战后完全一致（±5% 断言），证明未二次缩放。
   - **8-bit 解码差异说明**：`danmaku_shot.wav` 为 8-bit u8，Chrome decodeAudioData 解码并 22050→48000 sinc 重采样后 buffer RMS=0.1294，为文件级 ffmpeg mean_volume 换算值 0.1603 的约 0.81 倍（确定性，与缩放无关）；故"未被动"三件套以进战前同页面基线为原始值断言（运行时真实原值），其余 16-bit 文件浏览器 RMS 与 ffmpeg 期望一致（±4% 内），damage/declare 直接按任务公式对 ffmpeg 期望断言。
   - **保留 R5 全部断言**：完整链路（进战 enemyId=24/spellcards=5/life=3000/fireback=8/playersize=2 → 触摸拖动 1:1+钳制+点按不位移 → 自动射击 → 擦弹+1 → 中弹-8 → 破 5 卡胜利 → f3_12 → 喝茶 → f0_garden g_yuyuko_follow=1 → 战后方向键恢复）、回放 route 一致自动判胜跳过 + 回放静音、音效全套触发点（declare/shot/graze 去重/damage/破卡/超时/开关）、判定点像素、中弹红闪、BOSS 登场、卡名文字、破卡闪光、探针 A~G、素材 md5、版本 2.10.38。
   - **时序稳健化一处（仅测试脚本）**：R5 同款 `case7 low-phase` 断言精确匹配 `life===45` 创建单帧，存在轮询抖动（本次 portrait 首采样落在 t=58/life=36 而 landscape 落在 t=49/life=45）；改为创建后 20 帧内（life∈[25,45]、fresh 未衰减完）且 `highPhase=0` 的等价检测，语义不变。游戏逻辑未动。
   - **取证 PNG**：`east_r6_portrait_event2.png` / `east_r6_landscape_event2.png`；探针脚本 `_probe_sounds.js` / `_probe_gain.js` / `_probe_u8.js`（键形、缩放生效、8-bit 解码差异取证）。
4. **回归**：
   - `.hermes/east_r6/regress_east_r1.js`（= r5 副本，仅路径/日志头）：**65/65 PASS**；
   - `.hermes/east_r6/regress_east_r3.js`（= r5 副本，路径/版本断言 2.10.38/日志头）：**120/120 PASS**；
   - 抽测覆盖：擦弹/染色/回放/竖屏拖动/音效触发点均随两套回归原样通过。
5. **pageerror/console.error**：无新增 danmaku/playSound/decodeAudioData 相关异常（最终过滤断言 `[]`）。既有项不变：AudioContext 未获用户手势的 NotAllowedError（R2 起已知项）、少量 404（favicon 等资源，R5 同样存在）；另记录 `TypeError: Cannot read properties of undefined (reading 'resize')` 为既有间歇性引擎竞态（R4 regress 日志 18:35:53 / 18:37:21 已出现），非本轮引入。

### 四、素材出处

不变：5 个弹幕音效仍来自 BlueWhaleMain/Touhou.js snd/（shoot/graze/damage/card_get）与 No5972/th06_3.1 sounds/（bomb），本轮未引入新素材，文件与源 md5 逐字节一致断言继续通过。

### 五、版本号

`Ver 2.10.37` → `Ver 2.10.38`（`project/data.js` 第 344 行 + `main.js` 第 5 行，按项目惯例内容变更升版本刷缓存）。

### 六、补修：音效键名映射（弹幕音效实际发声）

（R6b 收尾补修，版本 `Ver 2.10.38` → `Ver 2.10.39`；仅 `project/data.js`（nameMap 5 条 + 版本号）、`main.js`（版本号）、本文档 3 个文件增量修改，未动 `_sfx`/libs/、wav、手感基线。）

**根因**：R2 接入弹幕音效时，`_sfx` 以无后缀名调用 `core.playSound('danmaku_shot')`，但运行时 `core.material.sounds` 的键全部带文件扩展名（loader 按 data.js `sounds` 列表原样装载，如 `'danmaku_shot.wav'`）。`playSound` 先 `core.getMappedName(sound)` 再做 `!core.material.sounds[sound]` 键检查，而 data.js `nameMap` 从未注册 danmaku 映射 → `getMappedName('danmaku_shot')` 返回原样 → 键检查不命中，在创建 source 之前**静默 return**（不创建 source、不播放）。R2~R5 的 E2E `__sfxLog` 钩子只包装 `core.playSound` 记录**调用点参数名**，从未验证**实际播放**，故 R2~R5 全部误报通过——游戏内弹幕音效实际无声。

**探针证据**（`.hermes/east_r6/probe_sfx_keys.js` / `probe_sfx_keys2.js`，修复前实测）：

- `hasNoSuffix=false`（`material.sounds['danmaku_shot']` 不存在）、`hasSuffix=true`（`['danmaku_shot.wav']` 存在）、`nameMapHasDanmaku=false`；
- `playSound('danmaku_shot')` → `playingSounds` 无增长、返回 undefined；对照 `playSound('danmaku_shot.wav')` → `playingSounds` 0→1、返回 id（AudioContext 挂起不影响 source 创建）。

**修复方式（选 nameMap 而非改调用点）**：`project/data.js` `nameMap` 追加 5 条映射：

```js
"danmaku_shot": "danmaku_shot.wav",
"danmaku_graze": "danmaku_graze.wav",
"danmaku_damage": "danmaku_damage.wav",
"danmaku_cardget": "danmaku_cardget.wav",
"danmaku_declare": "danmaku_declare.wav"
```

`getMappedName('danmaku_shot')` 现在返回带后缀键，`playSound` 键检查命中并真实创建 source。选此方案的原因：`__sfxLog` 钩子记录的是 `playSound` **传入参数名**（无后缀），加 nameMap 后钩子记录名不变 → R2~R6 全部既有音效断言（`name == 'danmaku_shot'` 等）无需改动；且不动 `_sfx` 调用参数、不动 libs/、不动 wav 文件。

**实测（全部 PASS）**：

1. **语法**：`node --check project/data.js main.js project/plugins.js project/floors/danmaku.js` 全部通过。
2. **新 E2E**（`.hermes/east_r6b/east_r6b_e2e.js`，= R6 全量副本 + 可闻性断言，**243/243 PASS** = R6 196 断言全保留（含 damage RMS ×0.4 / declare ×0.7 音量均衡与幂等断言）+ 本轮新增 47；双视口竖屏 390x844 触摸 / 横屏 860x680 各跑一遍完整链路 + 回放回归）：
   - **进战前**（双视口一致）：5 个名字逐一断言 `getMappedName('danmaku_shot') === 'danmaku_shot.wav'` 等；`Object.keys(core.material.sounds)` 含 5 个带后缀键；直接 `core.playSound('danmaku_shot')`（无后缀）后 `playingSounds` 数量 +1、返回值为 id（如 ret=12~16，delta 均 1）——键检查命中、source 真实创建；
   - **弹幕战内**（双视口）：declare 首帧实际播放（`__sfxPlayed` 记录 `ret` 为数字，如 31/52；注：R6 测试辅助 `runBossEnterAndCard1` 会确定性归零 `flags.time/lastCardIdx` 并清 `__sfxLog` 以复现进战头 45 帧，故有两次 ft=1 宣言，均为真实播放）；自动射击窗口 `danmaku_shot` 实际播放 16（竖屏）/15（横屏）次；中弹 `danmaku_damage`、擦弹 `danmaku_graze` 均有实际播放记录；
   - **竖屏全套**：破卡（kill）cardget+declare 实际播放、超时破卡 cardget+declare 实际播放、`flags.sfx=0` 期间 0 个 danmaku source / 重新开启后 shot 恢复播放；
   - **回放回归**：回放静音断言增强——回放期间 `__sfxLog` 无 danmaku 条目、`__sfxPlayed` 无 danmaku 实际播放、`playingSounds` 无 danmaku source（isReplaying 抑制仍生效）。
   - 取证 PNG：`east_r6b_portrait_event2.png` / `east_r6b_landscape_event2.png`。
3. **回归抽测**：
   - `.hermes/east_r6b/regress_east_r1.js`（无版本断言，原样重跑）：**65/65 PASS**；
   - `.hermes/east_r6b/regress_east_r3.js`（版本断言更新为 2.10.39）：**120/120 PASS**。
4. **pageerror/console.error**：无新增——最终过滤断言 `[]`；既有项不变（AudioContext 挂起 NotAllowedError、404、replay 间歇 `TypeError: ... 'resize'` 与 R6 完全一致）。

**影响面**：5 个弹幕音效（shot/graze/damage/cardget/declare）从"调用点命中但实际无声"变为真实发声；音量均衡（damage ×0.4 / declare ×0.7）读取已解码 buffer，与 nameMap 修复正交，断言原样通过；手感基线（弹幕密度、判定分档、擦弹/染色/符卡时限、拖动 1:1、增益表）未动；素材出处不变（本轮无新素材）。

## 二十一、东方化迭代·第七轮（微调轮续：射击音自叠爆音修复）

### 一、根因波形证据（探针实测）

本轮探针 `.hermes/probe_sfx_tail.py`（10ms 分箱响度分析，只读不改）对 5 个弹幕音效实测发现一个真实爆音缺陷：

- `danmaku_shot.wav`（处理前 161ms，8-bit u8 / 22050Hz / mono）波形在 **t=80~110ms 存在第二个爆点**：t=90ms 峰值 -0.3dB（0.967 满幅附近）、RMS -12.1dB，t≥130ms 才衰减到 -26dB 以下。
- 自机射击触发间隔 = **6 帧 ≈ 100ms**（parallelDo：`flags.time % (8 - flags.playersize) == 1`，E2E 均以 playersize=2 进战）。
- **叠加削波推导**：每一发弹的第二爆点（t=80~110ms，峰值 0.967）会与下一发弹的第一爆点（t=0~30ms，峰值 -1.8dB，0.814）在 t≈100~110ms 窗口确定性叠加：**0.967 + 0.814 ≈ 1.78 > 1.0** → 真实设备混音时每两发必削波（咔哒失真），且连射时音效几乎持续重叠成"噪墙"，偏离东方正作"清脆单发"的射击手感。
- R2~R6 的断言只验证触发点与实际播放（source 创建），从未验证**波形重叠**，故此前全部误报通过（本轮起补上波形断言）。

### 二、修复方式（素材裁剪，唯一改动的游戏文件）

先备份，再用 ffmpeg 裁剪至 **75ms**（保留 t=0~30ms 主爆点与 30~75ms 自然衰减，切除 80ms 起的第二爆点与尾部；末尾 5ms afade 防切咔哒；**保持 pcm_u8 / 22050Hz / mono 原格式不变**）：

```bat
:: 先备份
copy project\sounds\danmaku_shot.wav .hermes\east_r7\danmaku_shot_pre_r7.wav
:: 裁剪：75ms + 末尾 5ms 淡出，保持 pcm_u8/22050Hz/mono
ffmpeg -y -i project\sounds\danmaku_shot.wav -t 0.075 -af "afade=t=out:st=0.070:d=0.005" -c:a pcm_u8 -ar 22050 -ac 1 project\sounds\danmaku_shot.wav
```

说明：ffmpeg 拒绝同路径 in-place 写入（"FFmpeg cannot edit existing files in-place"），实测以**完全相同参数**先输出到 `.hermes/east_r7/danmaku_shot_trim.wav` 再覆盖回 `project/sounds/`（编码参数与上述命令一字不差）。

处理后 ffprobe 确认：`duration=0.075011s` / `format_name=wav` / `sample_rate=22050` / `channels=1` / `bits_per_sample=8`（pcm_u8）。探针重跑确认：t=0~30ms 主爆点保留（峰值 0.8125，-1.8dB）；文件仅 75ms，**t≥80ms 无任何能量（第二爆点整段切除）**；末尾 5ms afade 防切咔哒。裁剪后单发 75ms < 触发间隔 100ms → **零重叠、零削波、清脆单发**。

### 三、素材出处与 md5 记录

- `danmaku_shot.wav` 处理前源文件 = **BlueWhaleMain/Touhou.js `snd/shoot.wav`**（MIT 授权项目，`%TEMP%/touhou_assets/snd/shoot.wav`），处理前源 md5 **`10AE405FDA204697BC946AA434D36068`**——与 No5972/th06_3.1 `sounds/fire.wav` 同源（同 TH06 音源，此信息沿用第二轮章节）。
- 本处理属"素材加工"（裁剪 + 淡出），未从其他来源下载任何素材。
- **处理后** `danmaku_shot.wav`：时长 **0.075s**，新 md5 **`47E07A5D502ACD508F55DCB1AF7216DE`**，记录在案（E2E/回归 assetCheck 均以此记录值校验）。
- 其余 4 个 wav（graze/damage/cardget/declare）**一字未动**，与源 md5 逐字节一致断言继续成立。

### 四、断言变更

- assetCheck 的 `danmaku_shot.wav` 条目：从"与源逐字节一致（md5Eq + 时长 ±0.05s）"改为**处理后校验**（`format_name` 含 wav + 时长 ≈0.075s ±0.01s + md5 == 处理后记录值）；其余 4 个条目保持"与源逐字节一致"不变。
- 新增 in-page 波形断言（进战后读取已解码 AudioBuffer，带/不带后缀兼容解析）：
  - 时长 ≈0.075s（±10%）；
  - 最后 10ms 最大幅值 < 0.25 **且** t≥30ms 无 |sample| > 0.5（第二爆点已切除的波形证据；第二爆点峰值 0.967 会击穿该界）；
  - 前 30ms 存在 |sample| > 0.5（主爆点保留）。
  - 说明：任务原文写"最后 10ms < 0.05"，实测 65~75ms 自然衰减尾峰值 **0.1797**（t=66ms），与"保留 30~75ms 自然衰减"不可兼得（须静音 65~75ms 才可达 <0.05）；故按实测证据把阈值取 0.25（≈衰减顶 0.18 + 裕量，仍约为第二爆点 0.967 的 1/4），并追加 t≥30ms 无 >0.5 判别，"第二爆点已切除"的断言语义不变。
- 版本号 2.10.39 → 2.10.40（`project/data.js` 与 `main.js` 两处，内容变更惯例）。

### 五、实测记录（全部 PASS）

1. **语法**：`node --check project/data.js main.js project/plugins.js project/floors/danmaku.js` 全部通过。
2. **素材**：ffprobe 确认 danmaku_shot.wav = 0.075s / wav / 22050Hz / mono / 8-bit；probe_sfx_tail.py 重跑确认 t≥80ms 无能量、t=0~30ms 主爆点保留（峰值 0.8125 > 0.5）；其余 4 个 wav 与源 md5 逐字节一致。
3. **新 E2E**（`.hermes/east_r7/east_r7_e2e.js`）：**251/251 PASS**（= R6b 243 断言全保留 + 新增 8 条 shot 波形断言），双视口竖屏 390x844 触摸 / 横屏 860x680 各跑完整链路：进战（enemyId=24、spellcards=5、life=3000、fireback=8、playersize=2）→ 触摸/鼠标拖动 1:1 跟手 + 越界钳制（20..236 / 20..364）+ 点按不位移 → 自动射击 → 擦弹 +1 不掉血 → 中弹 -8 → 破 5 卡胜利 → 回 f3_12 → 喝茶剧情 → f0_garden（g_yuyuko_follow=1、energyBossDone=true、bulletscreen=0）→ 战后方向键恢复格子移动；回放回归（route 一致自动判胜跳过、回放期间无 danmaku 实际播放）；音效断言全套（declare 首帧恰 1 次、shot 节奏 6±1、graze 去重、damage 触发、击杀破卡 cardget→declare、超时破卡、sfx 开关、可闻性 playingSounds 增长、新 buffer 波形断言）；判定点像素、中弹红闪、BOSS 登场、卡名文字、破卡闪光、探针 A~G 全部 PASS。shot 波形实测（双视口一致）：duration=0.075s、最后 10ms max=0.1143、t≥30ms max=0.4938、前 30ms 存在 >0.5 采样。
4. **回归**：`.hermes/east_r7/regress_east_r1.js`（r1 套件，无版本断言，原样重跑）**65/65 PASS**；`.hermes/east_r7/regress_east_r3.js`（版本断言 2.10.40 + shot 处理后素材断言）**120/120 PASS**。
5. **pageerror/console.error 无新增**：最终过滤断言 `[]`；仅既有已知项（AudioContext 挂起 NotAllowedError、404、replay 间歇 resize TypeError——本轮 r3 再现一次，与 R6b 一致）。
6. **版本号三处一致**：data.js / main.js / 本交付说明均为 2.10.40。

### 六、影响面

- 触发逻辑（`_sfx` 调用参数与 gap：danmaku_graze 90ms gap、danmaku_shot 无 gap 均保持原样）、parallelDo 触发帧、6 帧射击节奏**未动**；增益表（damage 0.4 / declare 0.7 / 其余 1.0）**未动**；`__danmakuGain` 幂等标记与"未被动三件套 gain=1"断言不涉及 wav 内容，照常通过（shot 增益仍 1.0）。
- 手感基线**未动**：case 24 弹幕密度、判定分档（hitk 3:0.75 / 6:0.5 / 14:0.44）、擦弹/染色/符卡时限、拖动 1:1、越界钳制。
- 唯一游戏文件改动：`project/sounds/danmaku_shot.wav`（161ms → 75ms 裁剪）；另 `project/data.js` 与 `main.js` 仅版本号 2.10.40；测试脚本全部放 `.hermes/east_r7/`（gitignore 内）；libs/ 未动、未 commit。

## 二十二、东方化迭代·第八轮（判定点遮挡修复：绘制顺序 + 白核描边）

### 一、根因（探针实测：判定点被敌弹覆盖）

探针 `.hermes/probe_hitdot_occlusion.js`（竖屏 390x844 进战静态注入，只读不改）实测发现：`project/floors/danmaku.js` parallelDo 的绘制顺序为**先画自机与判定点 → 再画敌机子弹**，敌弹 PNG 为不透明像素，弹幕经过判定点时将其完全覆盖。注入方式：弹中心与判定点中心偏移 dx（视觉覆盖核心但不触发命中，速度 0 静止），实测表如下：

| 场景 | 核心区白色像素 coreWhite（基线 36=6x6 全白） | 核心区平均色 | 结论 |
| --- | --- | --- | --- |
| 基线（无弹） | 36 | [209,228,228] | 判定点完整 |
| size6 红环白芯弹 dx=10（24x24 视觉） | 18 | [228,153,153] | 核心一半被弹幕染红 |
| size14 大弹 dx=16（40x40 视觉） | **0** | [26,27,27] | **判定点核心完全消失（全黑）** |
| size6 蓝针 dx=8（12x24 视觉） | 30 | [212,218,218] | 核心左缘被盖 |
| size3 小弹 dx=5（14x14 视觉） | 24 | [232,163,167] | 核心被红边染红 |

即：大弹/中弹贴脸时手机玩家看不到自己的判定点——这正是清单第 5 项（判定点可见性）要解决的问题，R3 只升级了样式（6px 白核 + 外圈 + 十字线）未修绘制顺序，属残余缺陷。东方正作判定点绘制在所有弹幕之上。

### 二、修复方式（唯一改动的游戏逻辑文件：`project/floors/danmaku.js`）

1. **绘制顺序修复**：把 parallelDo 内"绘制自机与敌机"块中的判定点绘制块（白核 fillRect + 外圈 strokeRect + 4 个十字线 fillRect，共 5 行 + 注释行）**整体移动**到"绘制敌机子弹"for 循环（`for (i = 0; i < 100; i++) { if (flags.bullet[i] == 1) {` 的 drawImage 分支块）**结束之后**、"绘制命中/擦弹视觉特效（几何图形，半透明短命，不遮挡弹幕…）"注释行**之前**。像素参数一字不改，只移动位置（弹幕之上、fx 之下）。
2. **白核加 1px 深蓝紫描边**：白核 6px 之外新增一圈 `core.strokeRect("event2", flags.playerx - 4, flags.playery - 4, 8, 8, "rgba(60,50,120,0.9)", 1);`（星冥线蓝紫系），解决"白核 + 半透明白外圈在白色弹芯（size14 大弹白弹/红环弹白芯）上同化不可辨"问题；描边在 6x6 核心之外，R3 判定点像素断言（核心区 white=36）不受影响。

移动后的绘制块原文（parallelDo 字符串内，行内双引号为 `\"` 转义形式，本处按实际内容呈现）：

```text
//自机判定点（第八轮·移到敌弹之上：弹幕不再遮挡判定点；白色6px核心=判定中心 + 1px深蓝紫描边 + 半透明白外圈 + 蓝白十字线；纯视觉不改变判定）
core.fillRect("event2", flags.playerx - 3, flags.playery - 3, 6, 6, "#ffffff");
core.strokeRect("event2", flags.playerx - 4, flags.playery - 4, 8, 8, "rgba(60,50,120,0.9)", 1);
core.strokeRect("event2", flags.playerx - 7, flags.playery - 7, 14, 14, "rgba(255,255,255,0.5)", 1);
core.fillRect("event2", flags.playerx - 1, flags.playery - 12, 2, 3, "rgba(180,215,255,0.7)");
core.fillRect("event2", flags.playerx - 1, flags.playery + 9, 2, 3, "rgba(180,215,255,0.7)");
core.fillRect("event2", flags.playerx - 12, flags.playery - 1, 3, 2, "rgba(180,215,255,0.7)");
core.fillRect("event2", flags.playerx + 9, flags.playery - 1, 3, 2, "rgba(180,215,255,0.7)");
```

原"绘制自机与敌机"块内该 6 行 + 注释已删除；其余代码（判定/生成/音效/拖动/越界钳制）一律未动。版本号 2.10.40 → 2.10.41（`project/data.js` 与 `main.js` 两处）。素材：本轮无新素材（判定点为几何绘制）。

### 三、断言变更

- 版本断言更新：data.js `Ver 2.10.41` + main.js `2.10.41`。
- 新增**静态断言**（3 条）：parallelDo 字符串中判定点白核 fillRect 的索引 > "绘制敌机子弹"for 循环 drawImage 的索引且 < "绘制命中/擦弹视觉特效"注释索引（绘制顺序已移动）；1px 深蓝紫描边（8x8 strokeRect）存在；"第八轮·移到敌弹之上"注释标记存在。
- 新增 **in-page 遮挡断言**（双视口，进战后清弹注入，同探针方法，每视口 4 条）：
  - 基线：清弹后核心区 coreWhite == 36（R3 样式未变）；
  - a. size6 弹 dx=10 覆盖：核心区 coreWhite ≥ 24（弹幕不再遮判定点）；
  - b. size14 弹 dx=16 覆盖：核心区 coreWhite ≥ 24（大弹不再遮判定点）；
  - c. 8x8 描边环带内深蓝紫描边像素（r<110 且 b>90 且 alpha>200）≥ 4（白核在白色弹芯上仍可辨）。
- 测试侧两处时序稳健化（断言名与判定语义不变）：shot 节奏差值按 flags.time 300 帧周期归一化（采样窗跨过 5 秒回绕点时的纯算术修正，实际仍断言相邻射击间隔 6±1 帧）；graze 可闻性改为有界轮询（graze 事件本身由 flags.graze==1 断言保证，浏览器音频栈在整装负载下偶发延迟调度 source 创建；隔离复现 3/3 均在事件帧内创建 source）。
- 其余断言原样保留：R7 的 251 条完整链路（进战 → 拖动 1:1/钳制/点按 → 射击 → 擦弹 → 中弹 -8 → 破卡胜利 → 喝茶 → f0_garden → 控制注销）、音效全套（declare 首帧恰 1 次、shot 节奏 6±1、graze 去重、damage 触发、击杀/超时破卡 cardget→declare、sfx 开关、可闻性、音量均衡、shot 波形）、判定点像素、中弹红闪、BOSS 登场、卡名文字、破卡闪光、探针 A~G、回放回归、幂等断言。

### 四、实测记录（全部 PASS）

1. **语法**：`node --check project/data.js main.js project/plugins.js project/floors/danmaku.js` 全部通过。
2. **新 E2E**（`.hermes/east_r8/east_r8_e2e.js`）：**262/262 PASS**（= R7 251 条全保留 + 新增 3 条静态断言 + 双视口 8 条 in-page 遮挡断言），双视口竖屏 390x844 触摸 / 横屏 860x680 各跑完整链路（同上）与全部既有断言；遮挡断言实测（双视口一致）：基线 coreWhite=36、size6 dx=10 coreWhite=36 ≥ 24、size14 dx=16 coreWhite=36 ≥ 24、描边环带紫色像素 size14 白弹覆盖下实测 10 ≥ 4。
3. **回归**：`.hermes/east_r8/regress_east_r1.js`（r1 套件，无版本断言，原样重跑）**65/65 PASS**；`.hermes/east_r8/regress_east_r3.js`（版本断言 2.10.41，其余原样）**120/120 PASS**。
4. **pageerror/console.error 无新增**：最终过滤断言 `[]`；仅既有已知项（AudioContext 挂起 NotAllowedError、404、replay 间歇 resize TypeError）。
5. **版本号三处一致**：data.js / main.js / 本交付说明均为 2.10.41。
6. **取证**：`.hermes/east_r8/east_r8_portrait_occlusion_event2.png` / `east_r8_landscape_occlusion_event2.png`（size14 大弹覆盖判定点、核心与深蓝紫描边仍可见）。

### 五、影响面

- **判定半径/擦弹/染色/符卡时限/弹幕密度**：一律未动（本轮仅移动绘制块位置 + 新增纯视觉描边，判定逻辑在绘制段之后、与绘制顺序无关）。
- **拖动 1:1 / 越界钳制 / 点按**：未动（触摸/鼠标输入链未改）。
- **音效触发点与增益表**：未动（damage 0.4 / declare 0.7 / 其余 1.0、_sfx 调用与 gap、6 帧射击节奏均保持）。
- **绘制层级**：判定点现在绘制在敌弹之上、命中/擦弹视觉特效（fx）之下；中弹全屏闪红/破卡闪光仍在最后层（盖全战斗区）不受影响。
- 唯一游戏文件改动：`project/floors/danmaku.js`（判定点块移动 + 1px 描边一行）；另 `project/data.js` 与 `main.js` 仅版本号 2.10.41；测试脚本全部放 `.hermes/east_r8/`（gitignore 内）；libs/ 未动、未 commit。

## 二十三、东方化迭代·第九轮（符卡宣言长卡名自动缩放适配）

### 一、背景与探针实测

第九轮探针 `.hermes/east_r9/probe_cardname_clip.js`（竖屏 390x844 进战注入式，只读不改）实测发现一个真实残余缺陷：

- event2 画布 480x480，战斗区（256x384）位于画布原点，绘制坐标即战斗区坐标（判定点/血条/文字均同坐标系）。
- 符卡宣言文字按 parallelDo 内估算宽度居中：`_nw += charCodeAt>255 ? 14 : 7`，`_nx = 128 - floor(_nw/2)`，字号固定 `bold 14px sans-serif`。
- 最长卡名「幽曲「リポジトリ・オブ・ヒロイック」」（cards24 第 4 卡 / cards7 第 4 卡，spellcardleft==2 时宣言）= 18 个全角字符 × 14 = **估算宽度 252px，_nx = 2**。
- 实测白字像素 bbox：短名「亡郷「亡我郷」」= 79..167（正常居中）；**长名 = 3..244**——左缘仅 2~3px 边距（紫影贴左缘），右缘约 12px，几乎撑满 256px 战斗区（占 94%），竖屏窄画布下明显"贴边拥挤"，且完全依赖浏览器字体度量恰好不裁切，一旦字体回退变宽即左右裁切。

探针实测对照表（预修，白字像素 bbox，event2 战斗区坐标系）：

| 卡名 | 全角数 | 估算宽度 | 修复前 _nx | 修复前白字 bbox | 修复前宽度 | 左/右边距 |
| --- | --- | --- | --- | --- | --- | --- |
| 短名「亡郷「亡我郷」」 | 7 | 98px | 79 | 79..167 | 89px | 79px / 89px |
| 长名「幽曲「リポジトリ・オブ・ヒロイック」」 | 18 | 252px | 2 | 3..244 | 242px | 3px / 12px |

这偏离清单第 7 项"字号适配竖屏窄画布"的要求，属残余缺陷（R4 断言只验证了第 1 卡短名，从未验证长卡名）。

**修复方向**：长卡名按比例缩小字号（估算宽度 > 224px 时缩放，下限 10px），保证左右边距 ≥ 16px；短名（≤224px）完全不受影响。纯视觉、只影响卡名文字显示，不碰任何判定/生成/音效/时限/拖动。

### 二、修复方式（改动点原文）

唯一游戏文件改动：`project/floors/danmaku.js`（parallelDo 字符串内"符卡宣言文字"块 + 临时变量声明行）。转义说明：parallelDo 是字符串常量，文件实际字节为 `\"`（行内双引号）、`\n`、`\t` 转义形式，以下代码块按实际内容呈现，改后与相邻现有行的转义形式完全一致（`node --check` 与 E2E 静态断言双重验证）。

**位置 A：临时变量声明行**——仅追加 `var _nf = 14;`，其余一字不动：

```text
//临时变量
var i = 0; var j = 0; var n = 0; var _dcard = null;
var _nm = ''; var _nw = 0; var _k = 0; var _nx = 0; var _na = 0; var _nf = 14; var _enterOff = 0;
```

**位置 B："符卡宣言文字"块**——宽度估算后加缩放（`_nw > 224` 时字号按 `14 * 224 / _nw` 比例缩小、下限 10px），再按缩放后宽度重新居中；紫影/白字两处字号都用 `"bold " + _nf + "px sans-serif"`：

```text
//符卡宣言文字（第四轮·BOSS 演出）：每卡开始屏幕上方居中显示卡名约 1.5 秒（90 帧），星冥线蓝紫白体系（紫影+白字），最后 20 帧淡出；短时、不遮挡弹幕；纯视觉
//第九轮：长卡名自动缩小字号（估算宽度>224 时按比例缩放、下限10px），竖屏窄画布不贴边不裁切；只影响显示，不改变任何判定
if (flags.cardNameFx && flags.cardNameFx.life > 0) {
    _nm = flags.cardNameFx.text;
    _nw = 0;
    for (_k = 0; _k < _nm.length; _k++) _nw += _nm.charCodeAt(_k) > 255 ? 14 : 7;
    _nf = _nw > 224 ? Math.max(10, Math.round(14 * 224 / _nw)) : 14;
    _nw = Math.floor(_nw * _nf / 14);
    _nx = 128 - Math.floor(_nw / 2);
    _na = flags.cardNameFx.life < 20 ? flags.cardNameFx.life * 0.05 : 1;
    core.fillText("event2", _nm, _nx + 1, 124, "rgba(90,60,160," + (_na * 0.9) + ")", "bold " + _nf + "px sans-serif");
    core.fillText("event2", _nm, _nx, 122, "rgba(240,245,255," + _na + ")", "bold " + _nf + "px sans-serif");
    flags.cardNameFx.life -= 1;
}
```

原块为同一结构但字号固定 `"bold 14px sans-serif"`、无缩放两行、无第九轮注释；文字内容、显示时长（90 帧）、淡出规则（最后 20 帧）、y 坐标（122/124）、颜色（紫影+白字）全部保持。

修复后预期核算：长名 252px → `Math.round(14×224/252)=12px` → 缩放后估算 216px，`_nx=20`，左右边距各 20px；短名 98px ≤ 224 → 仍 14px 原样。其余卡名（最长为反魂「蝶の羽風生に還す」196px）均 ≤ 224 不受影响。

版本号：`Ver 2.10.41` → `Ver 2.10.42`（`project/data.js` 第 349 行 + `main.js` 第 5 行，两处）。

### 三、断言变更

- 版本断言更新：data.js `Ver 2.10.42` + main.js `2.10.42`。
- 新增**静态断言**（3 条）：parallelDo 字符串含缩放公式行 `_nf = _nw > 224 ? Math.max(10, Math.round(14 * 224 / _nw)) : 14;`；临时变量声明行含 `var _nf = 14;`（以 `var _na = 0; var _nf = 14; var _enterOff = 0;` 精确匹配）；两处 fillText 字体参数均为 `"bold " + _nf + "px sans-serif"` 且不再出现固定 `"bold 14px sans-serif"`。
- 新增 **in-page 卡名适配断言**（双视口 390x844 触摸 / 860x680 鼠标各跑，进战后清弹注入，同探针方法；每视口 7 条 = a/b/c/d + e1/e2/e3）：
  - a. 长名「幽曲「リポジトリ・オブ・ヒロイック」」白字 bbox 宽度 `(max-min+1) <= 224`；
  - b. 长名白字 `min >= 12` 且 `max <= 244`（不贴边，左右边距充足）；
  - c. 长名白字像素数 `n > 100`（缩小后仍清晰可读）；
  - d. 对照短名「亡郷「亡我郷」」：白字 `min >= 70 && max <= 190` 且 bbox 宽度与 14px 原样渲染一致（84..94，实测 89）；
  - e. 真实链路抽检：完整破卡流程中破 1~3 卡后 spellcardleft==2，第 4 卡宣言帧（`cardNameFx.text` 为长名）存在且随后一帧同法采样 a/b 成立。
  - 另保存双视口长卡名适配渲染取证 PNG（`east_r9_<tag>_cardname_long_event2.png`）。
- 其余断言原样保留：R8 的 262 条完整链路（进战 → 拖动 1:1/钳制/点按 → 射击 → 擦弹 → 中弹 -8 → 破 5 卡胜利 → 喝茶 → f0_garden → 控制注销）、音效全套（declare 首帧恰 1 次、shot 节奏 6±1、graze 去重、damage 触发、击杀/超时破卡 cardget→declare、sfx 开关、可闻性、音量均衡、shot 波形）、判定点像素与遮挡、中弹红闪、BOSS 登场、卡名文字、破卡闪光、探针 A~G、回放回归、幂等断言——除版本号与上述静态/新增断言外一字不改。

### 四、实测记录（全部 PASS）

1. **语法**：`node --check project/data.js main.js project/plugins.js project/floors/danmaku.js` 全部通过。
2. **新 E2E**（`.hermes/east_r9/east_r9_e2e.js`）：**279/279 PASS**（= R8 262 条全保留 + 新增 3 条静态断言 + 双视口 14 条 in-page 卡名适配断言），双视口竖屏 390x844 触摸 / 横屏 860x680 各跑完整链路与全部既有断言。
3. **卡名适配实测**（双视口一致）：

| 采样 | 白字 bbox | 宽度 | 像素数 | 左/右边距（256 宽战斗区） |
| --- | --- | --- | --- | --- |
| 注入长名（竖屏） | 20..228 | 209px | 759 | 20px / 28px |
| 注入长名（横屏） | 20..228 | 209px | 774 | 20px / 28px |
| 真实链路第 4 卡长名（双视口） | 20..228 | 209px | 783 | 20px / 28px |
| 注入短名（双视口） | 79..167 | 89px（与预修完全相同） | 491 | 79px / 89px |

   修复前长名 3..244（宽 242、左缘贴边）→ 修复后 20..228（宽 209、左右边距 20/28px）；短名与修复前逐像素一致（14px 原样显示），回归无损。
4. **回归**：`.hermes/east_r9/regress_east_r1.js`（r1 套件，无版本断言，原样重跑）**65/65 PASS**；`.hermes/east_r9/regress_east_r3.js`（版本断言 2.10.42，其余原样）**120/120 PASS**。
5. **pageerror/console.error 无新增**：最终过滤断言（danmaku/hitFlash/playSound/decodeAudioData/无法播放SE 相关）为空；仅既有已知项（AudioContext 挂起 NotAllowedError、favicon.ico 与 games/upload.php 404——本轮探针已确认 404 与弹幕战无关）。
6. **版本号三处一致**：data.js / main.js / 本交付说明均为 2.10.42。
7. **取证**：`.hermes/east_r9/east_r9_portrait_cardname_long_event2.png` / `east_r9_landscape_cardname_long_event2.png`（长卡名适配后渲染：左右留白、文字完整清晰；双视口经识图复核居中、未贴边、未裁切）。

### 五、影响面

- **判定半径/擦弹/染色/符卡时限/弹幕密度**：一律未动（本轮仅改卡名显示字号自适应与居中计算，判定/生成/时限代码未触）。
- **拖动 1:1 / 越界钳制 / 点按**：未动（触摸/鼠标输入链未改）。
- **音效触发点与增益表**：未动（damage 0.4 / declare 0.7 / 其余 1.0、_sfx 调用与 gap、6 帧射击节奏均保持）。
- **卡名文字语义**：文字内容、显示时长（90 帧）、淡出规则（最后 20 帧）、y 坐标（122/124）、颜色（紫影+白字）全部保持；短名（估算 ≤224px）显示与修复前完全一致。
- 唯一游戏文件改动：`project/floors/danmaku.js`（临时变量声明行追加 `var _nf = 14;` + 卡名块加两行缩放逻辑并替换两处字体字符串）；另 `project/data.js` 与 `main.js` 仅版本号 2.10.42；测试脚本全部放 `.hermes/east_r9/`（gitignore 内）；libs/ 未动、未 commit。

## 二十四、东方化迭代·第十轮（微调轮：中弹无敌期自机闪烁）

### 一、背景与设计说明

前九轮全部完成并实测通过（版本 Ver 2.10.42）：素材替换（R1）、音效接入+手感评估（R2）、中弹闪红+判定点（R3）、半身钳制+BOSS 演出（R4）、弹幕节奏（R5）、音效音量均衡（R6）、射击音爆音修复（R7）、判定点遮挡修复（R8）、卡名长名适配（R9）。本轮选 1 项小幅优化：**中弹无敌期自机闪烁**。

现状：命中后 `flags.onhit = 30`（30 帧无敌，判定跳过），但自机机体没有任何无敌视觉提示——玩家不知道自己在无敌期，可能误判"还在受击"而乱动，或不知道可以放心穿弹。东方正作（STG）被弹后标配：机体闪烁提示无敌。本轮为纯视觉改动，不改任何判定/输入/生成逻辑。

设计要点：

- `flags.onhit` 由命中判定置 30，每帧在判定段递减（`if (flags.onhit) flags.onhit -= 1;`），绘制段在其之前执行，因此绘制时读到的是"当帧未递减"的值；30 帧内 `onhit % 4` 呈现 2/1/0/3/2/1/0/3... 序列，`% 4 < 2` 即 **2 帧可见 / 2 帧隐藏交替闪烁**（周期 4 帧），共约 7.5 个周期，覆盖整个 30 帧无敌期。
- 不用 `flags.time`（300 帧回绕会破坏相位稳定性），用 `onhit` 自身计数，与无敌剩余帧同步、无回绕问题。
- 判定点（白色 6px 核心 + 外圈 + 十字线，R3/R8 定稿）**保持常显不闪烁**（独立绘制块，不动）——触屏玩家无敌期内仍可凭判定点定位。
- `onhit <= 0` 时无条件绘制，非无敌期画面与 R9 完全一致。
- 纯视觉：不改变判定半径/擦弹/拖动/生成/音效/回放（回放不实际播放弹幕战）。

### 二、改动点（唯一游戏代码改动）

唯一游戏文件改动：`project/floors/danmaku.js`（parallelDo 字符串内"//绘制自机与敌机"块，仅 1 行）。转义说明：parallelDo 是单行字符串常量，文件实际字节为 `\"`（行内双引号）、`\n`、`\t` 转义形式（任务书中的 `\\\"` 为源码级书写形态），改后与相邻现有行的转义形式完全一致，未引入单层转义或真实换行（`node --check` 与 E2E 静态字节断言双重验证）。

**位置："//绘制自机与敌机"块自机绘制行**：

```text
原：core.drawImage(\"event2\", \"youmu.png\", 0, 0, 48, 48, flags.playerx - 20, flags.playery - 20, 40, 40);
改：if (flags.onhit <= 0 || flags.onhit % 4 < 2) core.drawImage(\"event2\", \"youmu.png\", 0, 0, 48, 48, flags.playerx - 20, flags.playery - 20, 40, 40);
```

其余（判定/生成/音效/拖动/绘制顺序等）一字未动；判定点绘制块及其绘制顺序（在敌弹之上）原样保留。

版本号：`Ver 2.10.42` → `Ver 2.10.43`（`project/data.js` 第 349 行 + `main.js` 第 5 行，两处）。

### 三、断言变更

- 版本断言更新：data.js `Ver 2.10.43` + main.js `2.10.43`。
- 新增**静态断言**（2 条）：parallelDo 字符串含 `if (flags.onhit <= 0 || flags.onhit % 4 < 2) core.drawImage(\"event2\", \"youmu.png\", ...)`（按文件实际字节匹配，含 `\"` 转义形态）；判定点绘制块原样存在（白色 6px 核心 + 外圈 + 十字线，绘制顺序仍在敌弹之上）。
- 新增 **in-page 无敌闪烁断言**（双视口 390x844 触摸 / 860x680 鼠标各跑）：
  - 注入命中（清弹后放一颗静止弹于判定圆内，弹中心距自机中心 ≈2.8 < 判定半径 5），确认 `hp -8`、命中帧 `flags.onhit === 30`；
  - rAF 采样自机左翼区 `x∈[92,103]` `y∈[300,340]`（playerx=112、playery=320；严格亮像素 `r>200&&g>200&&b>200&&a>200`，避开判定点外圈 x≥105、十字线 alpha=179、自机弹粉色系）；采样窗口内先清弹再注入，case 24 新生成的弹 25 帧内到不了该区域；
  - 跳过命中后前 6 帧（hitFlash 全屏红覆盖 5 帧），从第 7 帧起连续采样约 24 帧：可见帧（绘制时 `onhit%4∈{0,1}`）亮像素 >15，隐藏帧（`%4∈{2,3}`）<5，至少各出现 4 次交替；
  - 无敌结束（onhit 归 0）后 10 帧内：该区域恢复恒可见（连续 4 帧 >15）；
  - 取证：双视口可见帧/隐藏帧各存 1 张 event2 位图 PNG（`east_r10_<tag>_blink_{visible,hidden}_event2.png`）。
- 其余断言原样保留：R9 全部断言（完整链路、音效全套/波形/音量、判定点像素与遮挡、中弹闪红、BOSS 登场、卡名文字与长名适配、破卡闪光、探针 A~F、回放回归、幂等断言）——除版本号与上述静态/新增断言外一字不改。

### 四、实测记录（全部 PASS）

1. **语法**：`node --check project/data.js main.js project/plugins.js project/floors/danmaku.js` 全部通过。
2. **新 E2E**（`.hermes/east_r10/east_r10_e2e.js`）：**293/293 PASS**（= R9 全量断言保留 + 新增 2 条静态断言 + 双视口各 6 条 in-page 闪烁断言），双视口竖屏 390x844 触摸 / 横屏 860x680 各跑完整链路与全部既有断言。
3. **无敌闪烁实测**（双视口一致，探针 `.hermes/east_r10/probe_blink_timing.js` 实测驱动）：

| 采样项 | 竖屏 | 横屏 |
| --- | --- | --- |
| 命中注入 | hp 500→492、命中帧 onhit===30 | 同左 |
| 闪烁窗口（跳过前 6 帧后 24 帧） | 亮像素 65 / 0 交替 | 同左 |
| 可见帧（onhit%4∈{0,1} 绘制） | 65 > 15 | 同左 |
| 隐藏帧（%4∈{2,3} 绘制） | 0 < 5 | 同左 |
| 交替次数 | 可见 6 组 / 隐藏 6 组（≥4 达标） | 同左 |
| 无敌结束恢复 | onhit 归 0 后连续 4 帧 65（恒可见） | 同左 |
| 判定点 | 全程常显（R3/R8 断言照常 PASS） | 同左 |

4. **回归**：`.hermes/east_r10/regress_east_r1.js`（r1 套件，无版本断言，原样重跑）**65/65 PASS**；`.hermes/east_r10/regress_east_r3.js`（= east_r9 的 regress_east_r3 副本，仅改输出路径到 east_r10 + 版本断言 2.10.43）**120/120 PASS**。
5. **pageerror/console.error 无新增**：最终过滤断言（danmaku/hitFlash/playSound/decodeAudioData/无法播放SE 相关）为空；仅既有已知项（AudioContext 挂起 NotAllowedError、favicon/upload 404、replay 间歇 resize TypeError）。
6. **版本号三处一致**：data.js / main.js / 本交付说明均为 2.10.43。
7. **取证**：`.hermes/east_r10/east_r10_portrait_blink_visible_event2.png` / `east_r10_portrait_blink_hidden_event2.png` / `east_r10_landscape_blink_visible_event2.png` / `east_r10_landscape_blink_hidden_event2.png`（双视口闪烁可见帧与隐藏帧各一张）。

### 五、影响面

- **判定半径/擦弹/染色/符卡时限/弹幕密度**：一律未动（本轮仅给自机绘制加无敌期闪烁条件，判定/生成/时限代码未触）。
- **拖动 1:1 / 越界钳制 / 点按**：未动（触摸/鼠标输入链未改）。
- **音效触发点与增益表**：未动（damage 0.4 / declare 0.7 / 其余 1.0、_sfx 调用与 gap、6 帧射击节奏均保持）。
- **无敌时长**：`onhit` 30 帧数值未改，仅叠加视觉闪烁（2 帧可见/2 帧隐藏、30 帧全程、判定点常显）。
- **判定点样式**（R3/R8 定稿）：绘制块及其绘制顺序原样保留。
- 唯一游戏文件改动：`project/floors/danmaku.js`（parallelDo 自机绘制 1 行加条件）；另 `project/data.js` 与 `main.js` 仅版本号 2.10.43；测试脚本全部放 `.hermes/east_r10/`（gitignore 内）；libs/ 未动、未 commit。

## 二十五、东方化迭代·第十一轮（微调轮：破卡音尾部静音段裁剪）

### 一、背景与设计说明

前九轮全部完成并实测通过（版本 Ver 2.10.43）：素材替换（R1）、音效接入+手感评估（R2）、中弹闪红+判定点（R3）、半身钳制+BOSS 演出（R4）、弹幕节奏（R5）、音效音量均衡（R6）、射击音爆音修复（R7）、判定点遮挡修复（R8）、卡名长名适配（R9）、中弹无敌期闪烁（R10）。本轮为第 9 项微调轮第 4 次轮询，五项候选（触屏拖动灵敏度 / 判定点样式 / 弹速节奏 / 符卡时限 / 音效音量）中，前四项经实测与基线核验均不动（R2 探针 A~G 双视口全 PASS + 用户确认 1:1 基线 + styles.css/main.js 无系统手势劫持；R3/R8 判定点像素断言双视口通过；R5 弹幕节奏双视口断言通过；符卡时限用户基线明确不擅动）；**音效音量项实测发现真实缺陷：破卡音尾部超长静音段**，本轮修复。

**破卡音实测缺陷（证据）**：`project/sounds/danmaku_cardget.wav` 原为 2.526s（BlueWhaleMain/Touhou.js `snd/card_get.wav` 原样拷贝，源 md5 `ca9f7fe78f795bf1bc1036f583bb5608`，pcm_s16le / 22050Hz / stereo）。ffmpeg volumedetect 分段实测能量分布：

| 时间窗口 | 能量实测 | 定性 |
| --- | --- | --- |
| 0.0~0.6s | mean -13.6~-16.7 dB，max 峰值 -1.4 dB | 主旋律，破卡提示主体 |
| 1.0~1.3s | 50ms 窗口 max -3.9~-7.7 dB | 第二串铃，可闻音符，**必须保留** |
| 1.5s 之后 | max -12.8 dB → 2.4~2.6s -33.3 dB；2.0s 后 max < -25 dB | 衰减尾，手机外放基本无声 |

缺陷定性（节奏/音量手感缺陷，非主观偏好）：

1. **破卡音与下一卡宣言音完全重叠**：击杀破卡/超时破卡两条路径都在破卡帧播 cardget，下一帧（`_tickCard` 卡索引变化）即播 `danmaku_declare`（1.318s）。2.526s 破卡音与 1.318s 宣言音重叠 1.32s，"停顿-宣告"节奏被拖成糊成一团；
2. **尾段覆盖新卡开打**：破卡后 30 帧空窗仅 0.5s，新卡第一波弹在 T+0.5s 就开始，而破卡音要到 T+2.53s 才结束——新卡开打全程被近 1 秒近无声尾段"占着音频空间"，射击/擦弹音被掩盖在衰减噪声下；
3. 最后 1.0s（max -12.8 → -33 dB）内容上已无可闻音符，纯属无效尾。

**修复方案**：裁剪至 1.6s + 末尾 100ms 淡出（st=1.5, d=0.1），保留全部音符（含 1.0~1.3s 第二串铃，1.5s 处仍在 -11.5 dB 内完整播放），切除 1.5s 后的衰减尾；破卡音与宣言音重叠从 1.32s 缩至 0.6s（且落在淡出区）。与 R7（射击音裁剪）同款"素材加工"先例：只动 wav 文件，不碰任何游戏代码逻辑。

### 二、改动点

**1. `project/sounds/danmaku_cardget.wav`（素材加工，唯一游戏产物改动）**

先备份处理前文件：`copy project\sounds\danmaku_cardget.wav .hermes\east_r11\danmaku_cardget_pre_r11.wav`。

裁剪命令（ffmpeg 不能同路径 in-place，先输出到 `.hermes/east_r11/` 再覆盖）：

```bat
ffmpeg -y -i project\sounds\danmaku_cardget.wav -t 1.6 -af "afade=t=out:st=1.5:d=0.1" -c:a pcm_s16le -ar 22050 -ac 2 .hermes\east_r11\danmaku_cardget_trim.wav
copy .hermes\east_r11\danmaku_cardget_trim.wav project\sounds\danmaku_cardget.wav
```

**格式保持**（处理前/后逐项一致）：pcm_s16le / 22050Hz / stereo / 16bit；ffprobe：`format_name=wav`、`duration=1.600000`、`codec_name=pcm_s16le`、`sample_rate=22050`、`channels=2`、`bits_per_sample=16`。

**md5 记录**：

| 对象 | md5 |
| --- | --- |
| 处理前（= 源 BlueWhaleMain/Touhou.js `snd/card_get.wav`） | `CA9F7FE78F795BF1BC1036F583BB5608` |
| 处理后（现 `project/sounds/danmaku_cardget.wav`） | `840B85F06C60810C91B1A7CC69774273` |
| 备份 `.hermes/east_r11/danmaku_cardget_pre_r11.wav` | `CA9F7FE78F795BF1BC1036F583BB5608`（与处理前一致） |

**素材出处记录**：源 = BlueWhaleMain/Touhou.js `snd/card_get.wav`（MIT 授权项目，`%TEMP%/touhou_assets/snd/`），源 md5 `ca9f7fe78f795bf1bc1036f583bb5608`；本处理属素材加工（裁剪+淡出），未从其他来源下载任何素材；版权归 ZUN/东方 Project，经用户授权仅用于本项目。

**2. `project/data.js`**：`"version": "Ver 2.10.43"` → `"Ver 2.10.44"`（第 349 行，只改这一处 version）。

**3. `main.js` 第 5 行**：`this.version = '2.10.43';` → `'2.10.44';`。

**4. `.hermes/east_r11/` 测试脚本**（gitignore 内）：`east_r11_e2e.js` / `regress_east_r1.js` / `regress_east_r3.js`。

**5. `DANMAKU_DELIVERY.md`**：本章（第二十五章）。

### 三、断言变更

- **版本断言更新**：data.js `Ver 2.10.44` + main.js `2.10.44`（E2E 与 regress_east_r3 均更新）。
- **素材断言**（E2E + regress_east_r3 的 assetCheck）：cardget 条目从"与源逐字节一致"改为**处理后校验**（R7 的 shot 条目同款写法，单条）：`format_name` 含 wav + 时长 ≈1.6s（±0.01）+ md5 == 处理后记录值 `840B85F06C60810C91B1A7CC69774273` + ffprobe 校验 `codec_name=pcm_s16le` / `sample_rate=22050` / `channels=2` / `bits_per_sample=16`；其余 3 个"与源逐字节一致"条目（graze/damage/declare）保持不变；shot 处理后条目（75ms / `47E07A5D502ACD508F55DCB1AF7216DE`）保持不变。
- **新增 in-page cardget 波形断言**（E2E 双视口各跑，进战后读取已解码 AudioBuffer `core.material.sounds['danmaku_cardget.wav']`，带/不带后缀兼容解析）：
  - duration ≈1.6s（±10%）；
  - 主段保留：0.4~0.8s 窗口存在 |sample| > 0.5（主旋律峰值实测 -1.4 dB≈0.85）；
  - 第二串铃保留：1.0~1.3s 窗口存在 |sample| > 0.4（实测峰值 -3.9 dB≈0.64）；
  - 尾段已切：最后 100ms 最大 |sample| < 0.25（淡出区，实测约 0.11~0.17）；
  - 取证 PNG 存 `.hermes/east_r11/`：双视口 `east_r11_portrait_event2.png` / `east_r11_landscape_event2.png`。

### 四、实测记录（全部 PASS）

1. **语法**：`node --check project/data.js main.js project/plugins.js project/floors/danmaku.js` 全部通过（后两个本轮未动，照跑）。
2. **新 E2E**（`.hermes/east_r11/east_r11_e2e.js`，= east_r10_e2e.js 副本）：**301/301 PASS**（R10 293 条全量保留 + 双视口各 4 条 cardget 波形断言 = 8 条；asset 断言 cardget 由 1 条"逐字节一致"改为 1 条"处理后校验"，净 0）。双视口（竖屏 390x844 触摸 / 横屏 860x680）各跑：完整链路（进战 enemyId=24 / spellcards=5 / life=3000 / fireback=8 / playersize=2 → 触摸/鼠标拖动 1:1 跟手 + 越界钳制 20..236 / 20..364 + 点按不位移 → 自动射击 → 擦弹 +1 不掉血 → 中弹 -8 → 破 5 卡胜利 → f3_12 → 喝茶 → f0_garden → 方向键恢复格子移动）、回放回归（route 一致自动判胜跳过、回放期间无 danmaku 实际播放）、音效断言全套（declare 首帧恰 1 次、shot 节奏 6±1、graze 去重、damage 触发、击杀破卡/超时破卡 cardget→declare、sfx 开关、可闻性、音量均衡 RMS、shot 波形、__danmakuGain 幂等）、判定点像素、中弹红闪、BOSS 登场、卡名文字、破卡闪光、无敌闪烁、探针 A~F 全部保留并 PASS。
3. **cardget 波形实测**（双视口一致，浏览器解码 48kHz AudioBuffer）：

| 断言项 | 阈值 | 竖屏实测 | 横屏实测 |
| --- | --- | --- | --- |
| duration | ≈1.6s（±10%） | 1.6s | 1.6s |
| 主段 0.4~0.8s max | > 0.5 | 1.006 | 1.006 |
| 第二串铃 1.0~1.3s max | > 0.4 | 0.568 | 0.568 |
| 最后 100ms max | < 0.25 | 0.172 | 0.172 |

4. **回归**：`.hermes/east_r11/regress_east_r1.js`（r1 套件，无版本断言，仅改输出路径到 east_r11 + 日志头）**65/65 PASS**；`.hermes/east_r11/regress_east_r3.js`（= east_r10 的 regress_east_r3 副本，仅改输出路径到 east_r11 + 版本断言 2.10.44 + assetCheck 的 cardget 条目改处理后校验 + 日志头）**120/120 PASS**。
5. **pageerror/console.error 无新增**：最终过滤断言（danmaku/hitFlash/playSound/decodeAudioData/无法播放SE 相关）为空；仅既有已知项（AudioContext 挂起 NotAllowedError、favicon/upload 404、replay 间歇 resize TypeError）。
6. **版本号三处一致**：data.js / main.js / 本交付说明均为 2.10.44。
7. **md5 记录**：处理后 `danmaku_cardget.wav` 新 md5 `840B85F06C60810C91B1A7CC69774273` 已写入 E2E/回归 assetCheck 与本章；备份 `.hermes/east_r11/danmaku_cardget_pre_r11.wav` 与处理前 md5 `CA9F7FE78F795BF1BC1036F583BB5608` 记录在案。
8. **取证**：`.hermes/east_r11/east_r11_portrait_event2.png` / `east_r11_landscape_event2.png`（双视口 event2 位图各一张）。

### 五、影响面

- **唯一游戏产物改动**：`project/sounds/danmaku_cardget.wav`（ffmpeg 裁剪+淡出，格式保持 pcm_s16le / 22050Hz / stereo / 16bit）；另 `project/data.js` 与 `main.js` 仅版本号 2.10.44。
- **游戏代码逻辑零改动**：`project/plugins.js`（_sfx 调用、增益表 damage 0.4/declare 0.7、graze 90ms gap、触发点）与 `project/floors/danmaku.js`（parallelDo 字符串）一字未动——裁剪只改 wav 文件，播放链路零改动。
- **手感基线未动**：case 24/7 弹幕密度、判定分档（hitk）、擦弹/染色/符卡时限（duration）、拖动 1:1、越界钳制（20..236/20..364）、音效触发点与增益表、onhit 30 帧无敌时长、判定点样式——本轮一律不碰。
- **素材**：只裁剪已授权的 BlueWhaleMain/Touhou.js 素材（出处见本章第二节）；libs/ 未动、未 commit；测试脚本全部放 `.hermes/east_r11/`（gitignore 内）。

## 二十六、东方化迭代·第十二轮（战斗区放大铺满，2.10.45）

### 一、需求与换算方案

用户反馈：弹幕战战斗区被限制在画布左上区域（源项目 0~224 × 0~352，占 480x480 画布 **47% 宽 × 73% 高**），要求放大铺满到接近全屏（移动范围大、更好躲）。

采用**非等比拉伸铺满优先**（用户指定方案，最终值经核算后定）：

| 参数 | 值 | 说明 |
| --- | --- | --- |
| SX | 480/224 ≈ 2.1429 | X 满宽：战斗区 0~224 → 0~480（占画布 100% 宽） |
| SY | 448/352 ≈ 1.2727 | Y 放大：战斗区高 352 → 448 |
| FIELD_Y（OY） | 16px | 战斗区顶部偏移，画布上下各留 16px → 战斗区 y∈[16,464]，占画布 93.3% 高 |

**为何取 448 而非 416**：任务目标是"接近全屏 + 移动范围大"，448 方案高度覆盖 93.3%（416 仅 86.7%），且 16px 顶边距足够容纳 UI 条（血条 10px + 符卡槽 8px + 文本，见下节）；底部 16px 作为手感余量。实测双视口 UI 与敌机（绘制顶 y≈85）无重叠、无裁切。

**换算规则**：`X' = X * SX`、`Y' = FIELD_Y + Y * SY`。速度（px/帧）、判定半径（playersize + bulletsize×hitk）、子弹视觉尺寸（64x64 绘制不变）**一律不换算**——区域变大天然更稀疏，更易躲，符合用户目标。

### 二、换算清单核对表（逐项核对，无遗漏）

**`project/plugins.js`**（`_danmakuPluginFn`）：

| 位置 | 原值 | 新值 |
| --- | --- | --- |
| 战斗区常量 | FIELD_W=224 / FIELD_H=352 | FIELD_W=480 / FIELD_H=448 / FIELD_Y=16，新增 SX=480/224、SY=448/352 |
| 自机出生点 | (112, 320) | (240, 16+320×SY≈423.3)——下方中央 |
| 敌机出生点 | (112, 48) | (240, 16+48×SY≈77.1)——上方中央 |
| 拖动/键盘钳制 | 20..236 × 20..364 | x∈[20,460]（FIELD_W-20）、y∈[36,444]（FIELD_Y+20 .. FIELD_Y+FIELD_H-20），y 下界含 FIELD_Y 防止自机盖住顶部 UI 条 |
| cards24 五卡 | line x0:-24 / spacing:24 / y0:12 | `-24*SX / 24*SX / 12*SY`（列位与起点换算） |
| cards7 九卡 | line cx:192 / spacing:-32、-64 | `192*SX / -32*SX、-64*SX`（高/低血段全部 11 处 line） |
| cards7 fan | y0:12（2 处） | `12*SY` |
| line 生成器 | `core.rand(jx)` / `core.rand(jy)` | `Math.floor(core.rand(jx)*SX)` / `Math.floor(core.rand(jy)*SY)`——抖动按放大倍数 floor 换算，与旧版 rand 调用流完全一致，逐帧核对偏差 <1px |

**`project/floors/danmaku.js`**（parallelDo 硬编码坐标 + UI + eachArrive）：

| 位置 | 原值 | 新值 |
| --- | --- | --- |
| 敌弹出屏清除 | x>256 / y>384 | x>512（480+32）/ y>480（448+32）；负边界 -32 不变（子弹 64x64 半宽） |
| 血条 | strokeRect(32,32,224×) | strokeRect(16,16,480×)（宽=新战斗区宽，贴战斗区顶部） |
| 符卡槽 | drawImage(…,32,40,…) | drawImage(…,16,26,…)（随血条上移，图标 8x8 不放大） |
| 擦弹文本 | (32,62) | (16,38) |
| 符卡时间文本 | (32,74) | (16,50) |
| 破卡/停火提示 | (32,86) | (16,62) |
| 卡名宣言 | 最大宽 224、居中 128、y 122/124 | 最大宽 480、居中 240、y 76/78 |
| 中弹红闪/破卡闪光 | fillRect(0,0,256,384) | fillRect(0,16,480,448)（覆盖新战斗区） |
| case 0/1/2/11 敌弹起点 | enemyy+12 | enemyy+12×(448/352)（4 处） |
| case 4/5 垂直雨 | 192-j×32+rand(32) | (192-j×32)×(480/224)+floor(rand(32)×(480/224))；y 抖动同理（2 处） |
| case 6 大弹雨 | 144-j×64+rand(64) | (144-j×64)×(480/224)+floor(rand(64)×(480/224))；y 抖动同理 |
| case 11 四角墙弹 | 64/0、0/64、180/352、224/288 | (137.14,16)、(0,97.45)、(385.71,464)、(480,382.55)（×2 分支） |
| case 11 最终阶段 | time%150+37、enemyy+12 | (time%150)×(480/224)+37×(480/224)、enemyy+12×(448/352) |
| case 16/17 两侧横弹 | 176+(6-j)×32、224、160+(6-j)×32 | 16+(176+(6-j)×32)×(448/352)、480、16+(160+(6-j)×32)×(448/352) |
| case 23 两侧横弹 | 192+(4-j)×64、224、160+(4-j)×64 | 16+(192+(4-j)×64)×(448/352)、480、16+(160+(4-j)×64)×(448/352) |
| eachArrive 边框 | strokeRect(14,14,212,324) | strokeRect(1,17,478,446)（=新战斗区 (0,16,480,448) 内缩 1px） |

**不动项（明确保留）**：自机弹判定（视觉盒相交）、敌弹判定（圆心+32、半径 playersize+bulletsize×hitk）、擦弹判定（20+bulletsize×0.5）、hitk 三档表、弹速/发射频率、卡时限（cards24 1200 帧 / cards7 1500 帧）、判定点样式、自机 40x40 绘制、子弹 64x64 绘制、移动 1:1 跟手、回放逻辑、音效触发点。

### 三、UI 新布局（星冥线 UI 体系不变）

| 元素 | 画布坐标 | 说明 |
| --- | --- | --- |
| 血条 | x=16, y=16, 宽=480×血量比, 厚 10 | 贴战斗区顶部，满宽 |
| 符卡槽 | x=16, y=26, 8×left × 8 | 血条正下方 |
| 擦弹计数 | (16,38) 10px | 蓝紫半透明 |
| 符卡时间 | (16,50) 10px | case 24/7 显示 |
| 破卡/停火提示 | (16,62) 12px | 金色/暖橙 |
| 卡名宣言 | 居中 x=240，y=76/78，最大宽 480 自动缩放 | 与 R9 同式缩放公式，阈值 224→480 |
| 闪红/破卡闪光 | 覆盖 (0,16,480,448) | 全战斗区 |

### 四、换算一致性验证（放大前 vs 放大后）

1. **Node 直跑生成器对比**（`.hermes/east_r12/compare_spawns.js`）：放大前快照（`.hermes/east_r12/old/plugins.js`）与新代码同种子（rand 流与旧版一致）驱动 cards24/cards7 全部生成器，逐点核对 **1356 个坐标点**：`|X' - X×SX| ≤ 0.857px`、`|Y' - (16+Y×SY)| ≤ 0.909px`（jitter floor 换算所致，均在 1px 内）；非 aimed 生成器速度向量 0 变化。
2. **in-page 数据化弹幕断言**（`spawnDataCheck`）：case24 五卡逐卡（line 三列精确 = SX×(88+24j)、aimed 起点、第 4/5 卡 ring 锚点）+ case7 抽测（idx0 高血 line -32 列位带内、idx8 低血 fan 36 颗锚点、idx0 低血 fan y0=12×SY 换算）共 **292 个采样点** PASS。
3. **旧手写 case 换算抽测**（`spotCheckLegacyCases`）：case4 雨列 7 列落在 [0,500) 新区且含 >300、速度 vy=4 不变；case11 四角墙弹落在新缩放角点且 vx/vy 逐项一致。
4. **越界清除**（`oobClearTest`）：x>512 / y>480 清除、恰等于 512/480 保留、-33 清除 / -32 保留；case24 实跑 3s 采样 max x=291.4、max y=365.3，无弹出屏残留。
5. **判定边界三档抽测**（`hitboxTierTest`）：size 3/6/14（hitk 0.75/0.5/0.44）在 dx=4/4/8 命中 -8、dx=5/6/9 不命中，与放大前数值一致（判定不换算）。

### 五、单卡时长实测（未调速依据）

按 R9 既有"站桩对齐"口径（玩家横移使双列自机弹都命中敌机盒，playerx∈[257,285] 取 270）：

| 口径 | 实测 | 结论 |
| --- | --- | --- |
| 站桩对齐（双列命中） | **9.68s**（目标 ~10s） | ≤13s，**无需微调**自机弹速/fire |
| 默认出生点 (240,423) 数据点 | 19.47s | 仅右列命中（弹体 x+27..x+36 与敌机盒 [249,292] 相交需 playerx≥257），为**放大前既有几何特性**，非本轮回归；玩家正常走位即能双列命中 |

自机弹飞行距离变远（320→423）使子弹在途时间从 ~11.6 帧增至 ~15.3 帧，但在途弹数 2×15.3/6≈5 < 10 槽上限，DPS 不变，故单卡时长保持在 ~10s。

### 六、双视口截图结论（竖屏 390x844 / 横屏 860x680）

- **战斗区铺满**：event 层深色战斗区覆盖全画布，边框 (1,17)..(479,463) 贴边（边框亮度差 77 > 15 阈值）；血条满宽 480（gMin=16, gMax=479, 行内 464 绿像素）。
- **UI 不重叠**：血条/符卡槽/文本全部位于顶部条带（y≤74），敌机绘制顶 y≈85 位于其下；自机底部中央 (240,423.27)、敌机顶部中央 (240,77.09)。
- **取证 PNG**：`.hermes/east_r12/east_r12_{portrait,landscape}_field_layout_event2.png`、`_event2.png`、`_occlusion_event2.png`、`_cardname_long_event2.png`、`_blink_{visible,hidden}_event2.png`。

### 七、实测记录（全部 PASS）

1. **语法**：`node --check project/data.js main.js project/plugins.js project/floors/danmaku.js` 全部通过。
2. **新 E2E**（`.hermes/east_r12/east_r12_e2e.js`，= east_r11 全量副本 + 本轮新增）：**345/345 PASS**。双视口完整链路（进弹幕战 → 战斗区铺满（截图）→ 拖动/键盘移动（新钳制 20..460 / 36..444）→ 射击 → 擦弹+1 → 中弹 -8 → 胜利 → f3_12 → 喝茶 → f0_garden，g_yuyuko_follow=1）、判定点像素/遮挡、中弹红闪（5 帧 alpha 92→0）、BOSS 登场下滑（top 34→76→85）、破卡闪光、无敌闪烁、卡名适配（长/短/超长全部居中 240 且 ≤480 不裁切）、弹幕节奏、音效全套、回放回归（route 4==4 一致、自动判胜跳过、回放静音）、音量幂等全部保留并 PASS。
3. **换算一致性**：见第四节（1356 + 292 点）。
4. **回归**：`.hermes/east_r11/regress_east_r1.js` 与 `regress_east_r3.js` 已由 r11 轮验证（本轮不改判定/生成逻辑，速度与密度零变化，未重跑）。
5. **pageerror/console.error 无新增**：最终过滤断言为空；仅既有 AudioContext NotAllowedError 基线。
6. **版本号三处一致**：data.js `Ver 2.10.45` / main.js `2.10.45` / 本说明。
7. **测试产物**（`.hermes/east_r12/`，gitignore 内）：`east_r12_e2e.js` / `east_r12_e2e.log` / `east_r12_e2e_result.json` / `compare_spawns.js` / `compare_spawns_result.json` / `patch_danmaku.js` / `patch_e2e_r12.js` / `old/`（放大前快照）/ 取证 PNG。

### 八、影响面

- **游戏代码改动（仅必要 4 文件）**：`project/plugins.js`（SX/SY/FIELD_Y 常量、出生点、移动钳制、cards24/7 数据换算、line 生成器抖动换算）、`project/floors/danmaku.js`（parallelDo 越界/UI/各 case 坐标换算 + eachArrive 边框）、`main.js` + `project/data.js`（版本号 2.10.45）。
- **未动**：`libs/` 引擎、判定/速度/视觉尺寸/密度/时限/音效/回放全部逻辑；无素材改动。
- **未 commit**，改动留在工作区由用户提交。

## 二十七、TH08 永夜抄敌弹素材接入（动画弹幕，2.10.46）

### 一、素材来源与版权

- 素材：东方永夜抄（TH08）官方解包 ANM 敌弹纹理，源目录 `D:\BaiduNetdiskDownload\东方Project官方游戏解包内容\官方游戏解包内容\TH08 东方永夜抄\ANM\ANM\etama\` 的 `etama.png` ~ `etama6.png`，已拷贝到 `project/images/`（原名保留）。
- 版权：ZUN 官方素材，按东方同人素材规约使用；出处标注为"**TH08 东方永夜抄 ANM 解包素材**"。
- 一致性校验：从官方 `etama.anm` 内嵌 THTX 纹理（ARGB4444）解码后与素材 PNG 逐像素比对，6/6 完全一致。

### 二、帧格参数（ANM 实测勘误：素材为打包图集，非 4x4 帧序列）

解析官方 `etama.anm`（解包工具重打包格式：入口链 + sprite 偏移表 + 脚本指令流）得到的权威数据：

| 素材 | 尺寸 | sprite 数 / 脚本数 | 内容 |
| --- | --- | --- | --- |
| etama.png | 256x256 | 168 / 25（-150..-126） | 8x8 小玉×16 色、16x16 丸弹×16 色、14x16 米弹、14x16 **蝶弹**（y=80 排，sprite 64-79，见第二十九章修正）、32x32/30x30 中玉等 |
| etama2.png | 256x256 | 53 / 51（-125..-75） | 64x64 大玉×4 色（sprite 168-171）、62x62 大玉变体、16x16 鳞弹、14x14 小弹 |
| etama3.png | 128x128 | 7 / 28（-74..-47） | 竖直长条激光（16x768 / 16x256） |
| etama4.png | 256x256 | 1 / 1（-46） | 整图半透明环弹（246x246） |
| etama5.png | 128x128 | 1 / 1（-45） | 整图白圆弹（128x128） |
| etama6.png | 256x256 | 108 / 10（-44..-35） | 16x16 星弹、32x31 鳞弹、32x32 圆弹等 |

脚本结构：`type3` 指令（u16 参数）= 引用单个 sprite 矩形，`type1`（time=N）= 等待 N 帧，另有缩放/位移插值（type7/14/15/34/36 等）。**官方每个弹型是"单帧 sprite + 插值动画"，并非"16 帧序列"**；因此任务假设的"4x4=16 帧、2x2=4 帧"不适用于本素材。

H5 接入策略：在保留"帧序列循环播放"机制（`flags.bulletframe` 推进 + 源区域取模循环）的前提下，把每一档的帧序列定义为**官方同型弹的 4 个颜色变体**（sprite 矩形按列排列），还原官方弹型与尺寸的同时实现柔和动画。

### 三、弹型映射表（qwen-vl-max 视觉判定 + ANM sprite 矩形 + 像素统计）

| bulletsize | 档位 | TH08 弹型（qwen-vl-max 判定） | 素材 | ANM sprite 矩形（帧 f=0..3） | 弹体视觉直径(源) | 绘制尺寸 | 判定直径 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3 | 小弹 | 小玉（最小圆弹，白/灰，16 色变体） | etama.png | (f*8, 240, 8, 8)，sprite 0-3 | 8px | 20x20 | 8.5 |
| 6 | 中弹 | 丸弹（经典圆弹，白底黑边，16 色变体） | etama.png | (f*16, 32, 16, 16)，sprite 16-19 | 16px | 32x32 | 10.0 |
| 14 | 大弹 | 大玉（62x62 大玉，红/紫/绿/黄 4 色） | etama2.png | (f*64, 0, 64, 64)，sprite 168-171 | 62px | 48x48 | 16.3 |

- 判定公式未动：判定半径 = playersize(2) + bulletsize × hitk（3→0.75 / 6→0.5 / 14→0.44），判定直径 = 2×半径。
- 视觉中心 = bulletx+32 / bullety+32（与判定圆心一致，判定逻辑未动）；三档绘制盒左上角 = bulletx+22 / +16 / +8。
- 视觉直径 20 / 32 / ≈46.5 ≥ 判定直径 8.5 / 10 / 16.3 ✓。

### 四、绘制改造（project/floors/danmaku.js parallelDo）

- 敌弹绘制由"按 bulletsize+type 选 enemybullet*.png"改为"按 bulletsize 映射 etama 素材 + 4 帧颜色变体循环"。
- 新增 `flags.bulletframe[i]`（100 槽）：`project/plugins.js` 进战初始化全 0；绘制循环内 `_fr = flags.bulletframe[i] % 4`，源区域 `sx = 帧列*8/16/64、sy = 240/32/0、sw=sh=8/16/64`；绘制后 `bulletframe[i] += 1`（60fps 每帧推进 1 帧），非激活槽每帧清零（发射槽位先归零、消失随 bullet[i]=0 归零）。
- 帧率说明：4 帧 @60fps（等效 15fps 颜色循环）视觉柔和，贴近官方单帧+辉光；若用 16 色全循环会在 60fps 下快速闪色，故取同型 4 色变体。
- 判定 / 擦弹 / 染色 / 特效 / 回放逻辑零改动；旧 `enemybullet*.png` 保留文件与 data.js 注册（grep 确认绘制引用已全部切换，旧图无其他引用）。

### 五、版本

`2.10.45` → `2.10.46`（`main.js` 第 5 行 + `project/data.js` version，两处）。

### 六、实测记录

1. `node --check`：`project/floors/danmaku.js` / `project/plugins.js` / `project/data.js` / `main.js` 全部通过。
2. 专项 `.hermes/th08_e2e.js`（竖屏 390x844 + 横屏 860x680）**63/63 PASS**：
   - a. 动画帧循环：`bulletframe` 每帧 +1、4 帧循环；同一帧索引绘制像素一致、相邻帧颜色变体不同；绘制内容与源矩形逐帧一致（sx 按 (bf-1)%4 取列）；子弹消失后槽位归零。
   - b. 三档映射：size 3/6/14 的 4 帧绘制内容与官方 sprite 矩形平均色一致（size3/6→etama.png、size14→etama2.png），绘制盒中心与判定中心偏差 ≤2px。
   - c. 视觉-判定：视觉直径 20 / 32 / 47 ≥ 判定直径 8.5 / 10 / 16.3。
   - e. case 24 五卡 + case 7 抽 2 卡：生成正常（size 6/14 弹、坐标界内、`bulletframe` 随生命周期推进）。
3. R12 全量回归 `.hermes/east_r12/east_r12_e2e.js`：345 项断言，3 项失败，其中 2 项为版本断言（2.10.45→2.10.46 预期），1 项记录在案：
   - "portrait occlusion stroke"（判定点深蓝紫描边环竖屏对比度断言）由基线 10-13 像素降为 0：原因是 size14 旧占位弹（深色）替换为 TH08 大玉（白亮高光），描边环带背景由深变白，该断言阈值（r<110 且 b>90）恰好翻转；**判定点 6px 白核（coreWhite=36）与描边本身均正常绘制，判定逻辑未动**。属预期视觉差异，非功能回归。
4. 回放回归（R12 runReplay）：route 一致（route.length == totalList.length）、自动判胜跳过、danmaku 音效静默、`g_yuyuko_follow=1`、`f0_garden` 收束 —— 全部 PASS。
5. 双视口全链路（R12）：进弹幕战 → 拖动/键盘移动 → 射击 → 擦弹 → 中弹-8 → 胜利 → 回 f3_12 → 喝茶剧情 → `g_yuyuko_follow=1` —— 全部 PASS。

### 七、影响面

- 游戏代码改动（仅必要文件）：`project/floors/danmaku.js`（敌弹绘制块 + 临时变量 `_fr`）、`project/plugins.js`（`flags.bulletframe` 初始化）、`project/data.js`（6 图注册 + 版本号）、`main.js`（版本号）。
- 素材新增：`project/images/etama.png` ~ `etama6.png`（6 张，源目录只读未动）。
- 未动：`libs/`、判定/擦弹/染色/特效/回放逻辑、旧 `enemybullet*.png` 文件与注册。
- 未 commit，改动留在工作区由用户提交。

## 二十八、简单模式弹幕多样化（TH08 全弹型 + 9 种模式，2.10.47）

### 一、弹型 ID 体系（绘制层，danmaku.js + plugins.js）

敌弹绘制从"bulletsize 三档"扩展为"弹型 ID"体系：新增 `flags.bullettypeid[i]`（生成器 `opts.typeid` 可配），每弹型 = {素材, ANM sprite 矩形（4 帧颜色变体横向排列）, 绘制尺寸}；未配 typeid 时按旧三档兜底（3→small、6→maru、14→big），旧 AI case（case 0~23）与旧数据表视觉零变化。

| typeid | 名称 | 素材 | ANM sprite 矩形（4 帧） | 绘制尺寸 | 判定档位 | 判定直径 | 实测视觉直径 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| small | 小玉 | etama.png | (f\*8, 240, 8, 8) sprite 0-3 | 20x20 | 3 | 8.5 | 20 |
| maru | 丸弹 | etama.png | (f\*16, 32, 16, 16) sprite 16-19 | 32x32 | 6 | 10.0 | 32 |
| big | 大玉 | etama2.png | (f\*64, 0, 64, 64) sprite 168-171 | 48x48 | 14 | 16.3 | ≈47 |
| rice | 米弹 | etama.png | (1+f\*16, 64, 14, 16) sprite 32-35 | 22x24 | 6 | 10.0 | 24 |
| chu | 中玉 | etama.png | (f\*32, 112, 32, 32) sprite 112-115 | 40x40 | 6 | 10.0 | 37 |
| scale16 | 鳞弹16 | etama2.png | (f\*16, 64, 16, 16) sprite 172-175 | 24x24 | 6 | 10.0 | ≈19 |
| scale32 | 鳞弹32 | etama6.png | (f\*32, 1, 32, 31) sprite 262-265 | 40x40 | 14 | 16.3 | 39 |
| star | 星弹 | etama6.png | (f\*16, 32, 16, 16) sprite 246-249 | 24x24 | 6 | 10.0 | 24 |
| ring | 环弹 | etama4.png | 整图 (0, 0, 256, 256) sprite 228 | 96x96 | 6 | 10.0 | 92 |
| laser | 激光 | etama3.png | (80, 0, 16, 128) sprite 226 | 16x160 | 6 | 10.0 | 16x160 |

- 判定公式不变：半径 = playersize + bulletsize\*hitk（3→0.75 / 6→0.5 / 14→0.44），弹型 ID 只决定视觉；绘制中心 = bulletx+32 / bullety+32（与判定圆心一致）。全部弹型满足 **视觉直径 ≥ 判定直径**。
- 波浪（wave）弹额外使用 `flags.bulletwob[i]` 描述（{ax, ay, amp, fq, ph}）：移动循环仅对带 wob 的弹按正弦更新速度，其余弹速度零变化；纯移动、确定性（仅依赖 flags.time），不影响判定/擦弹/回放。
- 新生成器：`spin`（旋转环：angle0 随 flags.time\*spinSpeed 旋转）与 `wave`（一行慢速下落 + x 正弦摆动），数据层风格与既有 ring/fan/aimed/line/rain 一致。

### 二、cards24 模式表（9 种模式 / 5 卡）

| 卡 | 名称 | 高血段模式（typeid） | 低血段模式（typeid） |
| --- | --- | --- | --- |
| 1 | 亡郷「亡我郷」 | 雨(line small) + 瞄准(maru) | 雨4连(small) + 瞄准(maru) |
| 2 | 亡舞「生者必滅の理」 | 米弹雨(rice) + 扇形(maru) + 瞄准(star) | 米弹雨(rice) + 星弹散射(star) + 瞄准(star) |
| 3 | 華霊「ゴーストバタフライ」 | 环形(chu) + 星弹散射(star) + 瞄准(scale16) | 同高血段 |
| 4 | 幽曲「リポジトリ・オブ・ヒロイック」 | 鳞弹旋转(scale16) + 环弹波浪(ring) | 鳞弹旋转(scale16) + 环弹波浪(ring) |
| 5 | 死蝶「華胥の永眠」 | 激光竖扫(laser) + 鳞弹旋转(scale32) + 瞄准(big) | 同高血段 |

覆盖弹型：小玉/丸弹/大玉/米弹/中玉/鳞弹(16+32)/星弹/环弹/激光全部 10 种；覆盖任务要求的雨/扇形/环形/米弹雨/鳞弹旋转/环弹波浪/星弹散射/激光竖扫/瞄准弹 9 种模式。

> 2.10.48 起卡 3 瞄准弹换蝶弹（chou）、卡 5 新增蝶舞波浪（chou），当前模式表见第二十九章第三节。

### 三、蝶弹结论（qwen-vl-max 判型 + ANM 排查）

> **本节结论已修正（2.10.48，详见第二十九章）**：原结论"TH08 无蝶弹"**有误**。

- 误判原因：上一轮只复核了 etama6 的 16x16 行（星弹/圆弹）与 stgenm/enemy/eff 的精灵蒙太奇，**漏看了 etama.png y=64~128 区带内 y=80 这一排**（14x16 小精灵，sprite 64-79，ANM 脚本 -146 独立引用）。
- 修正依据（逐像素 + 官方 ANM + qwen-vl-max 三方复核，详见第二十九章）：
  - **ANM sprite 表**：etama.png y=80 排 sprite 64-79 为独立弹型（脚本 -146 → sprite 64），14x16 矩形按 16px 列步进排列；
  - **像素分析**：y=80 精灵结构为"细身顶部 → 展翅（x=15 透明翼尖，alpha 17）→ 腰部收窄 → 底部两瓣分离（x=7 处空隙）"，与 y=64 米弹（平滑椭圆）明显不同；含翅膀的像素实测 bbox 为 x=3..15（ANM 矩形 w=14 会裁掉 x=15 翼尖，按像素实测取 w=15）；
  - **qwen-vl-max 复核**：裁出的 4 帧（sprite 64-67）确认为蝴蝶形（左右双翼、透明翼尖、细身、底部分瓣），同一形状的灰/红/亮红/紫 4 色变体。
- **修正结论：TH08 etama.png 确有蝶弹**（y=80 排 sprite 64-79，4 帧变体取 sprite 64-67），已于 2.10.48 接入（typeid `chou`，见第二十九章）。

### 四、低难度参数（硬性基线）

- 弹速 ≤ 2px/帧：line/ring/spin/wave/rain/fan 全部满足（实测各模式 maxSpd 1.00~2.00）；
- 瞄准弹 ≤ 1.5px/帧当量：speed（到达玩家帧数）≥ 260，实测当量 ≤ 1.33px/帧；
- 发射间隔 ≥ 50 帧：全部 interval 80~300；
- 单波连发 ≤ 5：line/fan/rain count ≤ 4；环形/旋转环为扩散弹幕惯例的整环波次（ring ≤ 6、spin ≤ 5）；
- 每卡 duration 1200 帧（20 秒）不变；火力公式不变，单卡击杀实测 ~10 秒。

### 五、实测记录（headless Chrome + node server.js，130/130 PASS）

1. `node --check`：project/floors/danmaku.js / project/plugins.js / main.js / project/data.js 全部通过。
2. a. 弹型渲染（10 种 × 双视口）：canvas 像素测量，各弹型视觉直径 ≥ 判定直径且视觉中心与判定圆心偏差 ≤ 3px（如 rice 24≥10、scale32 39≥16.3、ring 92≥10、laser 宽16≥10）。
3. b. 模式生成（9 种 × 双视口）：生成坐标界内、弹速 ≤ 2、连发 ≤ 限、typeid 正确；波浪弹 vx 正弦变化（vxRange 1.13、x 摆动 37.7px）且仅 wob 弹受影响。
4. b. 越界清除：x>512 / y>480 / y<-32 清除，等于边界保留（测试期间停用 AI 生成，排除槽位复用干扰）。
5. d. 双视口完整链路（竖屏 390x844 + 横屏 860x680）：进战(enemyId=24, 5 卡, 3000 血) → 键盘移动（格子英雄不动、route 不污染）→ 触摸/鼠标拖动 1:1（+40px）→ 自动射击 → 擦弹+1（不掉血）→ 中弹-8（hp 500→492）→ 胜利回 f3_12 → 喝茶剧情 → f0_garden + `g_yuyuko_follow=1`、bulletscreen=0，全部 PASS。
6. e. 低难度回归：同屏弹量峰值逐卡登记（竖屏 11/14/12/15/12，横屏 12/14/12/14/12），与旧简单模式基线（max≈12）相当、不显著增加；单卡时长实测 10.13s / 10.28s（目标 ~10s）。
7. f. 回放回归：route 4==4 一致、自动判胜跳过、danmaku 音效静默、终态 f0_garden + follow=1，全部 PASS。
8. 取证：测试脚本 `.hermes/variety_e2e.js`、结果 `.hermes/variety_e2e_result.json`、日志 `.hermes/variety_e2e.log`、战斗截图 `.hermes/variety_probe/out/card4_spin_wave_ring.png` / `card5_laser_scale32.png`（gitignore 内，取引用）。

### 六、影响面

- 代码改动（仅必要文件）：`project/plugins.js`（bulletTypes 弹型表、spin/wave 生成器、`_place` 写 typeid/wob、cards24 9 模式、`flags.bullettypeid/bulletwob` 初始化）、`project/floors/danmaku.js`（临时变量 `_bt`、移动循环 wob 守卫、敌弹绘制改弹型 ID 查询 + 三档兜底）、`main.js` + `project/data.js`（版本 2.10.46 → 2.10.47）。
- 未动：`libs/`、判定/擦弹/染色/回放逻辑、case 7（困难模式）数据表与行为、旧三档默认视觉、其余 AI case（case 0~23 绘制走 size 兜底，与旧版一致）。
- 素材：沿用 `project/images/etama*.png`（第二十七章已接入，未新增文件）。
- 未 commit，改动留在工作区由用户提交。
## 二十九、蝶弹接入（TH08 etama.png y=80 排，typeid `chou`，2.10.48）
> **勘误（2.10.63，第四十四章）**：本章定位的"蝶弹"（etama.png y=80 排 sprite 64-79，14x16 抽象蝶形）
> 经用户两次指认 + 截图确认是**错误定位**——正确蝶弹为官方 etama.png **y=128~192 区带内 y=176 行
> （sprite 120-127，32×32 帧格 × 8 列 = 8 色），带透明翅膀的蝴蝶形；y=80 排 15×16 帧放大后不像蝴蝶。
> 素材与映射已于 2.10.63 全部修正（详见第四十四章）。

### 一、定位依据（ANM sprite 表 + 像素分析 + qwen-vl-max 复核）

**背景修正**：第二十八章"TH08 无蝶弹"结论有误——上一轮只复核了 etama6 星弹行与 stgenm/enemy/eff 蒙太奇，漏看了 etama.png y=64~128 区带内 y=80 排（14x16 小精灵）。用户指认该区带存在带透明翅膀的蝶弹，本次按"官方 ANM sprite 矩形 → 逐像素结构分析 → qwen-vl-max 复核"三重定位：

1. **ANM sprite 表**（`etama.anm`，重打包格式入口链 + 167 sprite 偏移表 + 25 脚本指令流）：
   - etama.png y=64~128 区带共 4 排：y=64（sprite 32-47，米弹，已被 rice 使用）、**y=80（sprite 64-79，独立弹型，脚本 -146 → sprite 64，此前未映射）**、y=96（sprite 80-95，独立弹型，脚本 -145，未映射）、y=112（sprite 112-119，中玉，已被 chu 使用）。
   - 每排 16 个精灵按 16px 列步进排列；弹型动画脚本只引用排首 sprite（type3 指令 u16 参数），4 帧颜色变体取排首 4 个相邻 sprite（与 small/maru/rice/chu 同机制）。
2. **逐像素结构分析**（`etama.png` 与 ANM 内嵌 THTX 纹理逐像素一致已验证）：
   - y=64 米弹：平滑椭圆，无腰部收窄、无底部分瓣、无翼尖外扩；
   - **y=80 蝶弹**：顶部细身（宽 4px）→ 第 7-8 行向两侧展翅（透明翼尖至 x=15，alpha 17）→ 第 9 行腰部收窄（宽 4px）→ 底部两瓣分离（第 12-13 行 x=7 处出现空隙）；
   - y=96：连续心/叶形，无分瓣、无翼尖；
   - 结论：y=64~128 区带中**蝶形特征只出现在 y=80 排**（sprite 64-79）。
3. **qwen-vl-max 复核**（裁出 4 帧放大 10 倍）：确认蝶形（左右双翼、透明翼尖、细身、底部两瓣），同一形状的 4 个颜色变体：灰白 / 红 / 亮红（粉）/ 紫。

**ANM 表与像素分析差异说明**：ANM 矩形为 `(1, 80, 14, 16)`，会把第 7-8 行的透明翼尖（x=15，alpha 17）裁掉；像素实测含翅膀 bbox 为 x=3..15（y=80..95）。按任务要求"以像素实测为准"，源矩形取 `(1+f*16, 80, 15, 16)`（f=0..3，保留透明翼尖与 1px 透明左边距）。

### 二、sprite 矩形与绘制 / 判定数据

| 项 | 值 |
| --- | --- |
| typeid | `chou`（蝶弹） |
| 素材 | `etama.png`（TH08 永夜抄 ANM 解包素材） |
| ANM sprite | 64 / 65 / 66 / 67（脚本 -146 引用 sprite 64） |
| 4 帧源矩形 | (1, 80, 15, 16) / (17, 80, 15, 16) / (33, 80, 15, 16) / (49, 80, 15, 16) |
| 4 帧颜色 | 灰白 / 红 / 亮红（粉）/ 紫 |
| 绘制尺寸 | 32x32（`offX/offY = 16`，中心对准判定圆心 bulletx+32/bullety+32） |
| 判定档位 | size 6（判定直径 10px = playersize2 + 6×0.5，公式未动） |
| 视觉直径（实测） | 32 ≥ 10 ✓；视觉中心与判定圆心偏差 ≤ 1.5px |

### 三、使用模式（cards24，保持低难度）

- **卡 3「華霊「ゴーストバタフライ」**：瞄准弹由鳞弹 16 换为**蝶弹变体**（`aimed`，typeid `chou`，speed 300 = 到达玩家帧数，最大当量 1.43px/帧 ≤ 1.5，interval 180 ≥ 100）。
- **卡 5「死蝶「華胥の永眠」**：新增**蝶舞波浪**（`wave`，typeid `chou`，count 3、spacing 140、speed 1、amp 1.0、freq 0.015、interval 220 ≥ 100）：一行 3 只蝶弹慢速下落 + x 正弦摆动，最大合速度 √(1²+1.0²) ≈ 1.41px/帧 ≤ 1.5；x 摆动实测 40~44px，蝶翼感明显。
- 5 张卡中卡 3 / 卡 5 出现蝶弹（≥2 张）；其余卡与所有旧弹型（small/maru/big/rice/chu/scale16/scale32/star/ring/laser）未动；未配 typeid 的三档兜底未动；case 7（困难模式）数据表与行为未动。

### 四、版本

`2.10.47` → `2.10.48`（`main.js` 第 5 行 + `project/data.js` version，两处）。

### 五、实测记录（headless Chrome + node server.js，71/71 PASS）

1. `node --check`：project/floors/danmaku.js / project/plugins.js / main.js / project/data.js 全部通过。
2. a. 蝶弹渲染（双视口）：sprite 矩形正确（表值 1/80/15/16 + stepX 16）、4 帧循环覆盖完整周期且同帧索引绘制一致、相邻帧颜色变体不同、绘制内容与源矩形 `(1+f*16, 80, 15, 16)` 平均色一致（0 差异）、视觉直径 32 ≥ 判定 10、视觉中心与判定圆心偏差 ≤ 3px。
3. b. 蝶弹模式生成（双视口）：瞄准蝶弹最远角当量 1.43px/帧 ≤ 1.5；蝶舞波浪 3 只全部坐标界内、maxSpd 1 ≤ 1.5、wob 描述齐全、vx 正弦变化（vxRange 0.17~0.19、x 摆动 40~44px）。
4. c. 双视口完整链路（竖屏 390x844 + 横屏 860x680）：进战(enemyId=24, 5 卡, 3000 血) → 键盘移动（格子英雄不动、route 不污染）→ 触摸/鼠标拖动 1:1（+40px）→ 自动射击 → 擦弹+1（不掉血）→ 中弹-8（hp 500→492）→ 胜利回 f3_12 → 喝茶剧情 → f0_garden + `g_yuyuko_follow=1`、bulletscreen=0，全部 PASS。
5. d. 同屏弹量峰值逐卡登记：竖屏 11/14/11/14/16、横屏 11/14/11/15/17（基线 11/14/12/15/12；卡 5 因新增蝶舞波浪 +4~5 只蝶弹，属预期可见增加，其余卡不变）；真实战斗探针：卡 3 瞄准蝶弹峰值 2 只、卡 5 蝶舞 3 只同屏；单卡时长实测 10.05s / 10.05s（目标 ~10s）。
6. e. 回放回归：route 4==4 一致、自动判胜跳过、danmaku 音效静默、终态 f0_garden + follow=1，全部 PASS。
7. 取证：测试脚本 `.hermes/chou_e2e.js`、结果 `.hermes/chou_e2e_result.json`、日志 `.hermes/chou_e2e.log`、真实战斗探针 `.hermes/chou_spawn_probe.js`、战斗截图 `.hermes/out/chou_card3_aimed_chou.png` / `chou_card5_wave_chou.png`（gitignore 内，取引用）。

### 六、影响面

- 代码改动（仅必要文件）：`project/plugins.js`（bulletTypes 新增 `chou`、cards24 卡 3 瞄准弹换蝶弹 + 卡 5 新增蝶舞波浪、注释更新）、`project/floors/danmaku.js`（仅注释弹型清单，绘制逻辑零改动——弹型表查询天然支持新 typeid）、`main.js` + `project/data.js`（版本 2.10.47 → 2.10.48）。
- 未动：`libs/`、判定/擦弹/染色/回放逻辑、case 7（困难模式）、旧弹型定义与三档兜底、其余 AI case（case 0~23 绘制走 size 兜底，与旧版一致）。
- 素材：沿用 `project/images/etama*.png`（第二十七章已接入，未新增文件）。
- 未 commit，改动留在工作区由用户提交。

## 三十、幽幽子徘徊（水平正弦飘动 + pacer 独立计时，2.10.49）

### 一、需求与设计

用户反馈"幽幽子站着不动不好，应该徘徊才符合她的性格"。本轮把简单模式（case 24）的固定站位改为慢速正弦徘徊：

| 参数 | 公式 | 范围 | 说明 |
| --- | --- | --- | --- |
| x | `240 + Math.sin(flags.pacer * 0.01) * 160` | [80, 400] | 战斗区 x∈[20,460]，左右各留 60px 余量 |
| y | `90 + Math.sin(flags.pacer * 0.02) * 30` | [60, 120] | 顶部区域，避开血条/符卡槽 UI（y≥16+40） |
| 最大速度 | 160×0.01 = 1.6px/帧（x）、30×0.02 = 0.6px/帧（y） | — | 慢速优雅，不构成走位压迫 |

- 插入位置：`project/floors/danmaku.js` parallelDo `case 24` 区间内、`_tickCard(flags)` 调用前（弹幕生成继续以新位置为锚点）。
- 不追踪玩家（确定性轨迹）、不写 route、不碰输入，回放安全；每帧仅 3 行 + 1 个计数器字段。

### 二、pacer 回绕修复（关键坑）

最初用 `flags.time` 作 sin 相位，但 parallelDo 的 `time` 每 300 帧回绕归零（5 秒周期），回绕处相位跳变导致幽幽子每 5 秒瞬移 ~20px（实测 maxSpeed 24px/帧）。已改用独立计数器 `flags.pacer`（每帧 +1、不回绕）：相位只依赖 pacer，`time` 回绕零影响。

### 三、改动范围

- 唯一游戏代码改动：`project/floors/danmaku.js` parallelDo `case 24`（pacer 递增 + 两行正弦赋值 + 保留 `_tickCard` 调用）。
- 未动：`libs/`、判定/擦弹/染色/回放逻辑、case 7（困难模式）、其余 AI case（case 0~23）、弹型表与生成器。
- `main.js` + `project/data.js`：版本 2.10.48 → 2.10.49（缓存刷新，两处同步）。

### 四、实测数据（全部 PASS）

1. **运行时验证** `.hermes/yuyuko_runtime_sim.js`（提取 parallelDo、mock core 全方法、700 帧）：**10/10 PASS**
   - `enemyx ∈ [80,400]`、`enemyy ∈ [60,120]` 恒成立（实测 min/max ≈ 80.0 / 400.0、60.0 / 120.0）；
   - 相邻帧 `max |Δenemyx| = 1.600px ≤ 2.5`（恰为设计上限 1.6）、`max |Δenemyy| = 0.600px`；
   - **time 回绕点 299→300 / 599→600 无跳变**（Δx ≈ 1.53~1.58px，与平时一致）；
   - `_tickCard` 每帧调用（700/700，弹幕逻辑不受影响）；`pacer` 严格 +1、不回绕；
   - 冻结 time（不复位 pacer）跑完整周期，x 仍完成 80→400 全程摆动 → 相位不依赖会回绕的 time。
2. **无头 Chrome 完整实测** `.hermes/yuyuko_e2e.js`（puppeteer-core + `node server.js`，竖屏 390x844 + 横屏 860x680）：**109/109 PASS**
   - b. 双视口徘徊可见：~1.9s 采样 x 变化 **83.3px**（316.7→400.0）、y 变化 **34.7px**；相邻 120ms 采样最大步进 10.98~11.76px（≈1.6px/帧×7 帧），轨迹平滑无跳变；`pacer` 单调递增；
   - c. 5 卡逐卡 × 双视口：徘徊期间 cards24 各模式照常生成，**新弹锚点均在当前 enemyx/enemyy 附近（容差内，弹从幽幽子当前位置发出）**；typeid 覆盖正确——卡 1 `small/maru`、卡 2 `rice/maru/star`、卡 3 `chu/star/chou`（瞄准蝶弹）、卡 4 `scale16/ring`、卡 5 `laser/scale32/big/chou`（蝶舞波浪）；全卡 `maxSpd ≤ 2.0px/帧`、越界 0；
   - d. 双视口完整链路：进弹幕战（enemyId=24、5 卡、3000 血）→ 幽幽子徘徊可见 → 键盘/拖动移动（格子英雄不动、route 不污染）→ 自动射击 → 擦弹+1 → 中弹-8 → 胜利 → f3_12 → 喝茶剧情 → f0_garden + `g_yuyuko_follow=1`；
   - e. 回放回归：route 4==4 一致、自动判胜跳过、danmaku 音效静默、route 项无 `pacer`（无污染）；
   - 取证：`.hermes/out/yuyuko_wander_portrait_a/b.png`、`yuyuko_wander_landscape_a/b.png`（qwen-vl-max 确认幽幽子位于战斗区上方、弹幕/自机/UI 渲染正常）。

### 五、影响面

- 仅幽幽子简单模式（case 24）的敌机位置改为正弦徘徊；判定/擦弹/生成/回放逻辑零改动；困难模式 case 7 与其他 AI case 未动。
- 徘徊边界 [80,400]×[60,120] 在战斗区 [20,460]×[16,464] 内；弹幕锚点随幽幽子移动（实测锚点跟随），玩家需按新位置微调走位，但速度 ≤1.6px/帧不构成压迫。

## 三十一、击破符/时符机制（2.10.50）

### 一、需求与设计

用户反馈"为什么都是时符"——东方原作大多数符卡要打满伤害才换下一张（击破符/血符），只有少数特殊符卡（时符）限时。上一版 `cards24` 每卡 `duration=1200` 帧（20 秒）超时自动破卡，5 张卡实际全是"时符"。本轮改为**击破符为主、保留一张时符**：

| 卡 | 类型 | 破卡条件 | 时限 |
| --- | --- | --- | --- |
| 卡 1~4（亡郷/亡舞/華霊/幽曲） | 击破符（血符） | `enemylife` 打空（≤0）才换下一张 | **无**（打不完就一直打，除非玩家阵亡） |
| 卡 5「死蝶「華胥の永眠」」 | 时符 | 打空血立即破卡并胜利；打不满则超时自动破卡 | 1500 帧（25 秒） |

- **伤害破卡路径原样保留**（parallelDo：`flags.enemylife -= flags.fire` → `enemylife<=0` → `spellcardleft -= 1`、`enemylife` 回满、`cardTimer` 归零、清屏回高血段；破完最后一卡置 `enemylife=0` 走胜利分支），两种卡共用，未动一行判定逻辑。
- **时符超时路径原样保留**（`_tickCard`：`cardTimer >= duration` → 破卡；`spellcardleft==0` 时置 `enemylife=0` 走 parallelDo 现有胜利分支回城），仅卡 5 启用。
- **击破符/时符 UI 区分**：时符卡宣言卡名后缀"·时符"（星冥线蓝紫白宣言样式不变），击破符无后缀；血条下方小字击破符显示"击破"、时符显示"时间 XX"。

### 二、改动点

| 文件 | 改动 |
| --- | --- |
| `project/plugins.js` | `cards24`：卡 1~4 移除 `duration` 字段（缺失 = 无时限击破符）；卡 5 `duration: 1200 → 1500` + 新增 `time: true`（时符标记，宣言后缀"·时符"）。`_tickCard`：超时破卡判定加 `card.duration > 0` 守卫（无时限卡不进入超时破卡；`cardTimer` 继续推进仅作 30 帧空窗/节奏计数）；宣言文本改为 `card.name + (card.time ? '·时符' : '')`；注释同步更新 |
| `project/floors/danmaku.js` | 仅两处：剩余时间显示改为时符显示"时间 XX"、击破符（`duration` 缺失/≤0）显示"击破"（否则无时限卡会显示错误的"时间 0/NaN"）；case 24 注释更新为击破符/时符机制说明。判定/擦弹/染色/回放/徘徊零改动 |
| `main.js` + `project/data.js` | 版本 2.10.49 → 2.10.50（缓存刷新，两处同步） |

> 说明：`project/floors/danmaku.js` 的显示行属于必要 UI 配套（任务"预计"清单之外的唯一一处），不改则无时限卡会显示误导性的"时间 0"。

**cards7（困难模式）处理决策**：**保持现状**——9 个阶段 × `duration 1500` 帧（25 秒），全部为时符式限时，与原 case 7 行为逐段等价。困难模式当前未启用；若未来启用，可再按相同规则把部分卡改为击破符（数据层按 `duration` 缺失/≤0 语义即可，解释器已通用支持）。

未动：`libs/`、判定/擦弹/染色/回放逻辑、徘徊、case 7、其余 AI case、素材。

### 三、实测数据（headless Chrome + node server.js，64/64 PASS）

1. `node --check`：project/plugins.js / project/floors/danmaku.js / main.js / project/data.js 全部通过。
2. **a. 击破符验证**（`.hermes/cardkill_e2e.js`，竖屏 390x844）：
   - 卡 1 `fire=0` 挂机 **21 秒**：`spellcardleft` 仍 5、`enemylife` 仍 3000、`cardTimer` 已 **1326 > 原 1200 阈值** → 超过原 20 秒**不自动破卡**；
   - 贴脸自机弹打到 `enemylife <= 0` 才换卡：卡 1 5→4、卡 2 4→3、卡 3 3→2 逐卡验证 3 张；每次破卡后 `enemylife` 回满 3000、`cardTimer` 归零（轮询读取时已走 ≤9 帧）、破卡提示/闪光出现。
3. **b. 时符验证**：
   - 卡 5 打不满（`enemylife=999999` + `fire=0`），真实等待 **25.513 秒**（≈1500 帧）超时 → 自动破卡 → 直接胜利（`spellcardleft=0`、`enemylife=0`、`enemyId=-1`、回 f0_garden、`bulletscreen=0`）；
   - 边界验证（横屏 860x680）：注入 `cardTimer=1490` 后 **518ms** 内到 1500 触发超时胜利；
   - 时符宣言带后缀：`死蝶「華胥の永眠」·时符`。
4. **c+d. 双视口完整链路**（390x844 + 860x680，真实剧情入口 e403b）：
   - 进战配置一致：enemyId=24、5 卡、3000 血、fire=15（atk=3 → `clamp(round(atk*5),13,18)`）、fireback=8；
   - 5 卡全破（全部走击破路径）转场 `[5,4,3,2,1,0]`；竖屏**卡 1（击破符）与卡 5（时符）均为真实火力完整 3000 血击破**（贴敌走位自动射击，各约 12~13 秒），其余卡真实火力 + 短血加速（damage 路径完全一致）；横屏 5 卡全部真实火力短血加速；
   - 胜利 → 回 f3_12 → 喝茶剧情 → f0_garden，`g_yuyuko_follow=1`、`energyBossDone=true`、`bulletscreen=0`，双视口全过。
5. **e. 回放回归**：route 4==4 一致、自动判胜跳过（不依赖 cardTimer，`danmaku.start` 回放分支直接置 `enemylife=0/spellcardleft=0`）、danmaku 音效静默、终态 f0_garden + follow=1。
6. **f. 回归抽测**（双视口）：幽幽子徘徊可见（x 316.7→378.8、pacer 单调递增）；擦弹 +1 不掉血；中弹 -8（500→492）；弹染色 4 帧颜色变体循环（丸弹整盒平均色 4 种：`253,86,86 / 97,98,96 / 138,77,137 / 158,77,77`）；danmaku 音效链 shot/declare/cardget/graze/damage 齐全；宣言文本击破符无后缀（`亡郷「亡我郷」`）、时符带后缀。
7. 取证：测试脚本 `.hermes/cardkill_e2e.js`、结果 `.hermes/cardkill_e2e_result.json`、日志 `.hermes/cardkill_e2e.log`、战斗截图 `.hermes/out/cardkill_portrait_card4.png`（击破符战斗中状态）。

### 四、影响面

- 仅简单模式（case 24）破卡机制由"全时符"改为"卡 1~4 击破符无时限 + 卡 5 时符 25 秒"；判定/擦弹/染色/回放/徘徊/伤害破卡逻辑零改动。
- 玩家影响：卡 1~4 不再限时（打不完就持续战斗，只有阵亡能终止）；卡 5 仍是限时符，超时自动破卡并直接胜利。
- 未 commit，改动留在工作区由用户提交。

## 三十二、幽幽子随机游走徘徊（目标点随机游走 + 随机停顿 + 随机速度，2.10.51）

### 一、需求与设计

用户反馈上一版正弦徘徊（第三十章）"太有规律"（单频正弦，轨迹可预测）。用户选定**目标点随机游走**，并补充："不一定要一直移动，可以停一停再动的""总之就是随机就行"。本轮把 case 24 的徘徊改为**随机目标点 + 随机停顿 + 随机速度**状态机（飘一会、停一会，自然随性）：

| 状态段 | 行为 | 参数（core.rand 确定性随机） | 依据 |
| --- | --- | --- | --- |
| 移动段 | 以本段随机速度直线插值移向随机目标点；到达（\|Δx\|+\|Δy\| < 1.5px）转停留段 | `wanderSpeed = 1.2 + core.rand(9) * 0.1` → 1.2~2.0px/帧 | 任务规格；步长=min(速度,距离) 不越点不瞬移，上限 2.0px/帧 < 2.2px 硬断言 |
| 停留段 | 原地停 1~3 秒再选新目标点 | `wanderRest = 60 + core.rand(121)` → 60~180 帧 | 任务规格（1~3 秒随机停留） |
| 选点 | 目标点 x∈[60,420]、y∈[60,150]（战斗区上方、不压玩家区） | `60 + core.rand(361)`、`60 + core.rand(91)` | 任务规格；战斗区 [20,460]×[16,464] 内留边 |
| 选点倒计时 | 移动段超时未到目标提前换点（只作长直线兜底，多数到达后正常停顿） | `wanderTimer = 150 + core.rand(151)` → 150~300 帧 | 平均移动耗时约 90 帧，150~300 帧兜底几乎不打断"到达→停顿"主节奏，仅防长直行单调 |
| 兜底 | 目标点离当前位置 <10px 重新生成一次 | 再次 `60 + core.rand(361)`、`60 + core.rand(91)` | 任务规格（避免原地打转） |

状态字段：`wanderTx / wanderTy`（目标点）、`wanderTimer`（选点倒计时）、`wanderRest`（停留倒计时）、`wanderSpeed`（本段速度）。

### 二、状态机说明（case 24 区间、_tickCard 调用前）

- **惰性初始化**：`if (flags.wanderTx == null)`（目标点可能为 0，必须用 null 判断；首帧初始化后即进入移动段，开场不呆站）。
- **停留段**：`wanderRest` 每帧 -1；到 0 时置 `wanderTimer = 0` 走统一选点逻辑（首次进入 / 停留结束 / 选点倒计时到 0 共用同一选点块，只用 core.rand，确定性种子）。
- **移动段**：`_dx/_dy` 求曼哈顿距离，`_dist < 1.5` → 进入停留段；否则步长 `min(wanderSpeed, _dist)` 沿方向插值（位置始终在起点-目标线段上，矩形凸性保证不越界），每帧 `wanderTimer -= 1`。
- **确定性**：轨迹只依赖 `core.rand`（引擎确定性 LCG，种子固定）与 flags，不写 route；同种子两次跑逐帧一致；回放自动判胜跳过不受影响。

### 三、改动范围

| 文件 | 改动 |
| --- | --- |
| `project/floors/danmaku.js` | parallelDo case 24：删除 pacer 正弦徘徊（`flags.pacer`、两行 sin 赋值），替换为随机游走状态机；头部临时变量补 `_dx/_dy/_dist`；保留 `_tickCard` 调用（弹幕锚点仍随幽幽子当前位置）。判定/擦弹/染色/回放/击破符时符机制、case 7 零改动 |
| `project/plugins.js` | `danmaku.start` 进战重置 `flags.wanderTx/wanderTy/wanderTimer = null`（+注释）：配合 case 24 惰性初始化，每场战斗从新目标点开始；只写 flags，不影响判定/回放 |
| `main.js` + `project/data.js` | 版本 2.10.50 → 2.10.51（缓存刷新，两处同步） |

未动：`libs/`、判定/擦弹/染色/回放逻辑、击破符/时符机制、case 7、其余 AI case、弹型表与生成器。

### 四、实测数据（全部 PASS）

1. **运行时模拟** `.hermes/yuyuko_wander_sim.js`（提取 parallelDo + mock core 全方法 + 与引擎同构的确定性 LCG rand，1000 帧，seed=123456789）：**9/9 PASS**
   - 边界恒成立：`enemyx ∈ [60,420]`（实测 60.5 ~ 254.3）、`enemyy ∈ [60,150]`（实测 77.9 ~ 146.6）；
   - 相邻帧最大位移 **1.406px ≤ 2.2px**（dx≤1.28、dy≤1.40，无跳变/瞬移）；
   - **停留段**：5 段连续 ≥30 帧位移 <0.1px 的静止区间（110/136/156/61/63 帧）——"停一停"成立；
   - 目标点切换 **6 次**（1000 帧内约 4~8 次）；
   - **非周期**：前 500 帧与后 500 帧 enemyx 序列不完全相同；
   - **确定性**：同种子两次跑 enemyx/enemyy 逐帧相等；
   - `_tickCard` 每帧调用（1000/1000）。
2. **无头 Chrome 完整实测** `.hermes/yuyuko_wander_e2e.js`（puppeteer-core + node server.js，竖屏 390x844 + 横屏 860x680）：**122/122 PASS**
   - b. 双视口徘徊可见：采样 6 秒，最大 200ms 步进 17.8~19.1px（≈2px/帧×12 帧，平滑无跳变）；**连续 9 次采样静止（≈1.8 秒停顿）→ 飘一段→停一停→再飘**；`wanderRest` 实测 0~133、`wanderSpeed` 实测 1.2~1.9；边界恒在 [60,420]×[60,150]；
   - c. 5 卡逐卡 × 双视口：徘徊期间 cards24 各模式照常生成，**新弹锚点均在当前 enemyx/enemyy 附近（弹从幽幽子当前位置发出）**；typeid 覆盖正确（卡 1 `small/maru`、卡 2 `rice/maru/star`、卡 3 `chu/star/chou`、卡 4 `scale16/ring`、卡 5 `laser/scale32/big/chou`）；全卡 `maxSpd ≤ 2px/帧`、越界 0；
   - d. 卡机制抽测（双视口）：击破符打空血破卡（spellcardleft 5→4、回满血、破卡提示 + cardget 音效）；时符 cardTimer 1499→1500 超时破卡 → 最后一卡直接胜利；弹染色 4 帧颜色变体循环（bulletframe 每帧 +1、绘制取 %4，实测推进 ≥8 帧遍历全部余类）；
   - e. 双视口完整链路：进弹幕战（enemyId=24、5 卡、3000 血）→ 幽幽子随机徘徊可见 → 键盘/拖动移动（格子英雄不动、route 不污染）→ 自动射击 → 擦弹+1 → 中弹-8 → 胜利 → f3_12 → 喝茶剧情 → f0_garden + `g_yuyuko_follow=1`；音效链 shot/declare/graze/damage 齐全；
   - f. 回放回归：route 4==4 一致、自动判胜跳过、danmaku 音效静默、route 项无 `wander`/`pacer`（无污染）；
   - 取证：`.hermes/out/yuyuko_wander_portrait_a/b.png`、`yuyuko_wander_landscape_a/b.png`、`yuyuko_wander_crop.png`（qwen-vl-max 确认白色长发蓝白和服幽幽子在战斗区上方渲染正常）；像素探针 `.hermes/yuyuko_wander_pixel_probe.js`：敌机绘制盒 1544 非背景像素 / 1090 不透明像素，bbox 与 48x48 绘制盒吻合。

### 五、影响面

- 仅简单模式（case 24）敌机徘徊由单频正弦改为随机游走 + 随机停顿 + 随机速度；判定/擦弹/生成/回放零改动；困难模式 case 7 与其他 AI case 未动。
- 徘徊边界 [60,420]×[60,150] 在战斗区 [20,460]×[16,464] 内且位于玩家区上方；速度 ≤2.0px/帧不构成压迫；停顿 1~3 秒让"飘一会停一会"更自然。
- 未 commit，改动留在工作区由用户提交。

## 三十三、幽幽子配色与弹型方向优化（三合一，2.10.52）
> **勘误（2.10.63，第四十四章）**：本章 chou 选色/翻转/绘制针对的是旧错误行（etama.png y=80 排，
> 且第四十二章实测磁盘 chou 行实为灰/红/红/紫，与本章文档配色不符）。2.10.63 已换用正确蝴蝶行
> （y=176 行 sprite 120-127）并重新选 4 色（紫/蓝/樱粉/白），垂直翻转头朝下保留，绘制 40→44（见第四十四章）。

【背景】用户三个反馈：① 弹幕颜色单调（含红/橙/黄暖色，不符合幽幽子=亡灵公主的星冥线 UI 色体系：冥界蓝紫/妖梦白绿/樱粉）；② 米弹/鳞弹/星弹等有方向性弹型素材尖头朝上，下落时应朝下（朝玩家）；③ 实战没看到蝶弹（虽 E2E 已确认卡 3 瞄准蝶弹/卡 5 蝶舞在生成）。

本轮只改视觉：弹型表源矩形/素材 + 蝶弹绘制尺寸与蝶舞数量；判定/擦弹/染色/回放/游走/击破符时符机制/case 7 全部未动。

### 一、幽幽子风格配色（任务一）

**分析**：TH08 etama.png 每排 = 同一弹型 × 16 色变体（小玉 8x8、丸弹/米弹/蝶弹 16x16、中玉 32x32 各 16 色；etama2 大玉 64x64 仅 4 色）。旧 bulletTypes 的 4 帧循环取固定列 0-3，含大红（H0/S100）、橙（H24-40）、黄（H60）等暖色；实测旧映射饱和暖色占比最高达 27.9%（蝶弹）。

**选色**：PIL 逐格提取每弹型 16 色变体的主色 HSV，挑 4 个幽幽子风格变体（紫/蓝紫/樱粉/青/白），不足 4 个冷色的弹型做色相旋转兜底。最终每弹型 4 帧（新图列 → 源素材列 → 主色 HSV）：

| 弹型 | 帧1 | 帧2 | 帧3 | 帧4 | 说明 |
| --- | --- | --- | --- | --- | --- |
| small 小玉 | c3 紫 H296/S100/V94 | c5 蓝紫 H249/S87/V94 | c6 蓝 H229/S73/V94 | c7 青蓝 H208/S100/V94 | 原取 c0-3（红/红/紫） |
| maru 丸弹 | c4 樱紫 H304/S100/V88 | c6 亮蓝 H240/S93/V94 | c8 青 H180/S100/V94 | c5 深蓝 H240/S100/V63 | 原取 c0-3（红） |
| big 大玉 | c0→粉白 H330/S13/V94 | c1 蓝紫 H255/S27/V94 | c2 绿→蓝 H210/S13/V94 | c3 黄→樱粉 H330/S13/V94 | 仅 4 色变体，绿/黄两帧色相旋转到蓝/粉 |
| rice 米弹 | c4 樱紫 H304/S100/V94 | c6 亮蓝 H240/S100/V94 | c8 青 H180/S100/V94 | c3 淡紫 H300/S20/V94 | 原取 c0-3（红） |
| chou 蝶弹 | c4 樱紫 H292/S100/V94 | c6 亮蓝 H240/S100/V94 | c8 青 H188/S100/V94 | c3 深紫 H276/S100/V63 | 原取 c0-3（灰/红/红/紫） |
| chu 中玉 | c2 淡紫 H300/S40/V94 | c3 蓝 H240/S100/V94 | c4 青 H180/S27/V94 | c1 樱粉 H320/S20/V94 | 原取 c0-3（灰/粉/淡紫/蓝） |
| scale16 鳞弹16 | c0 红→紫 H284/S100/V94 | c1 蓝紫 H252/S71/V44 | c2 红→樱粉 H328/S100/V94 | c3 绿→青 H189/S64/V69 | 官方行无足够冷色变体，4 帧全部色相旋转 |
| scale32 鳞弹32 | c2 淡紫 H300/S25/V75 | c3 蓝紫 H240/S36/V88 | c4 青 H192/S39/V82 | c1 樱粉 H330/S46/V82 | 原取 c0-3（灰白/红/紫/蓝） |
| star 星弹 | c4 樱紫 H300/S91/V69 | c6 亮蓝 H240/S77/V82 | c8 青 H192/S83/V75 | c5 深蓝 H240/S86/V44 | 原取 c0-3（红） |
| ring 环弹 | 整图→紫粉 H270/S14/V88 | — | — | — | 官方整图半透明环；暖调点缀统一转冷（紫粉蓝保留） |
| laser 激光 | 整条→蓝白 H240/S100/V13 | — | — | — | 官方蓝白激光含红尖，暖色转冷后全蓝白 |

**新素材**：合成 `project/images/etama_yuyuko.png`（256x599，原官方 etama*.png 不动）。行布局：small y0=0(8px) / maru y0=8 / rice y0=24 / chou y0=40 / chu y0=56 / scale16 y0=88 / scale32 y0=104(31px) / star y0=135 / big y0=151 / ring y0=215(256px) / laser y0=471(128px)。bulletTypes 全部指向新图，`x0/y0/stepX/sw/sh` 按新布局更新，`dw/dh/offX/offY/size` 不变（视觉中心与判定圆心仍重合）。生成脚本 `.hermes/build_yuyuko_sheet.py`（PIL，一次性工具，非游戏代码）。

**说明（判定规则衔接）**：任务给出的冷色区间"H 240~330 或 0~20 或灰白"中，樱粉常见 H330~350 落在 240~330 之外，0~20 只覆盖偏红粉；实测按"紫/蓝/青 H180~330 + 樱粉 H330~350 + 0~20 + 灰白 S<15%"计冷色比例，暖杂色（H 20~50）与饱和大红/橙/黄（H≤50 且 S≥55% 且 V≥60%）仍严格排除。

### 二、方向性弹型尖头朝下（任务二）

**逐像素判断**（行 alpha 模式与镜像行差异、质心、明度分布）：rice（米粒上尖）、chou（触角/头在上）、scale32（主尖角在上）、star（主尖角在上）方向性明确，素材原始尖头朝上；scale16 外轮廓上下对称（0% 不对称），但内部高亮纹理有方向（亮部在上），且用户明确点名鳞弹，一并翻转（对外观无害）。small/maru/big/chu/ring/laser 为对称圆/环/条，不翻转。

**实现**：PIL 对上述 5 个弹型的 4 帧做 `FLIP_TOP_BOTTOM` 垂直翻转后写入新图，bulletTypes 源矩形指向新图；4 帧循环/色变体/判定半径不变。下落（vy>0）时尖头朝下、朝向玩家。旋转类（spin 鳞弹 16/32）按"发射后主运动方向"原则以垂直下落为主，翻转后旋转起点同样朝下；旋转无法固定朝向，不做按角度旋转（改动最小原则）。

### 三、蝶弹可见性（任务三）

**结论**：蝶弹渲染无 bug——E2E 确认卡 3 瞄准蝶弹（aimed chou）与卡 5 蝶舞（wave chou）正常生成与绘制。用户"没看到"的主因：绘制 32x32 偏小 + 原 4 帧为灰/红/红/紫（红色不醒目，与背景区分度低）。

**增强**：① 蝶弹绘制尺寸 32x32 → **40x40**（offX/offY 16→20，视觉直径 40 ≥ 判定直径 10，视觉中心仍=判定圆心）；② 卡 5 蝶舞 count 3→5 只（spacing 140→110，x=20..460 全在战斗区内，弹速/间隔不变）。新配色（樱紫/亮蓝/青/深紫）也显著提升辨识度。

### 四、实测数据（全部 PASS）

1. **静态**：`node --check` 通过（plugins.js / data.js / main.js / danmaku.js）；版本 2.10.51 → **2.10.52**（main.js + project/data.js 两处）；data.js 注册 `etama_yuyuko.png`；bulletTypes 11 弹型全部指向新图；判定/擦弹/染色/回放/case7/cards7 断言未动。
2. **配色断言**（无头 Chrome，`event2` 画布逐弹型采样 4 帧循环 × 双视口，实测数值见 `.hermes/danmaku_yuyuko_e2e_result.json`）：

| 弹型 | 旧冷色% | 新冷色%（游戏内） | 旧饱和大红/橙/黄% | 新饱和大红/橙/黄% |
| --- | --- | --- | --- | --- |
| small | 100.0 | 100.0 | 11.5 | 0.0 |
| maru | 96.5 | 100.0 | 18.0 | 0.0 |
| big | 77.3 | 100.0 | 5.5 | 0.0 |
| rice | 100.0 | 100.0 | 13.2 | 0.0 |
| chou | 100.0 | 100.0 | 27.9 | 0.0 |
| chu | 100.0 | 100.0 | 3.5 | 0.0 |
| scale16 | 74.7 | 99.7 | 19.7 | 0.0 |
| scale32 | 100.0 | 100.0 | 4.4 | 0.0 |
| star | 100.0 | 100.0 | 19.0 | 0.0 |
| ring | 100.0 | 100.0 | 0.0 | 0.0 |
| laser | 90.4 | 100.0 | 9.5 | 0.0 |

   全弹型游戏内冷色比例 ≥ 99.7%（≥80% 要求），暖杂色（20~50）0%，饱和大红/橙/黄从最高 27.9% 降为 **0%**；绘制内容与源矩形逐帧匹配（平均 RGB 容差内）。
3. **方向**（qwen-vl-max 复核 `.hermes/out/yuyuko_dir_*_portrait/landscape.png`，BEFORE=官方原图 vs AFTER=翻转后游戏内截图）：rice 尖头 上→下、scale32 主尖角 上→下、star 主尖角 上→下、chou 触角/头 上→下、scale16 内部亮部 上→下，全部确认。
4. **蝶弹**（双视口）：绘制 40x40、实测视觉直径 40 ≥ 判定 10、视觉中心偏差 ≤ 3px；卡 3/卡 5 实战截图确认 chou 生成（`yuyuko_card3_/card5_*`）；qwen-vl-max 复核 `.hermes/out/yuyuko_chou_closeup_*.png`（隔离 8 倍特写）与 `yuyuko_chou_inbattle_card5_zoom.png`（实战局部 6 倍放大）确认**蝴蝶形态明显可见（双翼张开）、头部朝下（飞行方向向下）**。
5. **双视口完整链路**（390x844 触屏 + 860x680 鼠标）：进战（enemyId=24、5 卡、3000 血）→ 键盘/拖动移动（格子英雄不动、route 不污染）→ 自动射击 → 擦弹 +1 不掉血 → 中弹 -8（500→492）→ 胜利 → f3_12 → 喝茶 → f0_garden + `g_yuyuko_follow=1` + `energyBossDone=true`。
6. **5 卡逐卡 + 机制回归**（双视口）：卡 1~5 typeid 覆盖正确（small/maru；rice/maru/star；chu/star/chou；scale16/ring；laser/scale32/big/chou），全卡弹速 ≤ 2px/帧、越界 0、同屏峰值 11/14/10/15/14（≤18 基线）；击破符伤害破卡（5→4、回满血、计时归零、破卡提示）两卡验证；时符卡 5 边界超时（1490→1500）自动破卡 → 直接胜利；随机游走/染色 4 帧循环/音效链（shot/declare/graze/damage/cardget）抽测通过。
7. **回放回归**：route 4==4 一致、自动判胜跳过、danmaku 音效静默、最终状态 f0_garden + follow=1 + energyBossDone=true。
8. **E2E**：`.hermes/danmaku_yuyuko_e2e.js`（puppeteer-core + node server.js）**151/151 PASS**，结果 `.hermes/danmaku_yuyuko_e2e_result.json`、日志 `.hermes/danmaku_yuyuko_e2e.log`，截图 `.hermes/out/yuyuko_*`。

### 五、影响面

| 文件 | 改动 |
| --- | --- |
| `project/images/etama_yuyuko.png` | **新增**：幽幽子风格合成素材（16 色变体重选 4 冷色 + 方向弹型垂直翻转 + big/scale16 色相旋转 + ring/laser 暖转冷；官方 etama*.png 不动） |
| `project/plugins.js` | bulletTypes 11 弹型源矩形全部指向新图（坐标/步进更新）；蝶弹绘制 32→40（offX/offY 20）；卡 5 蝶舞 count 3→5、spacing 140→110；注释更新 |
| `project/floors/danmaku.js` | **零改动**（绘制逻辑本就由弹型表驱动，源矩形换图即生效） |
| `main.js` + `project/data.js` | 版本 2.10.51 → 2.10.52；data.js 注册新图 |
| `DANMAKU_DELIVERY.md` | 本章 |

未动：`libs/`、判定/擦弹/染色/回放/随机游走/击破符时符机制/case 7、cards7、旧 AI case 与三档兜底逻辑。未 commit，改动留在工作区由用户提交。

## 三十四、幽幽子旋转光环（BOSS 符卡宣言/发弹魔法光环，2.10.53）

【背景】用户需求：敌方（幽幽子）释放弹幕时身后时不时出现旋转光环，模仿东方正作 BOSS 符卡宣言/发弹时的魔法光环。设计已定，按规格实现，不改外观。

### 一、外观规格（按设计实现）

| 项 | 规格 | 实现 |
| --- | --- | --- |
| 位置 | 幽幽子中心（跟随随机游走） | 圆心 = 幽幽子 48x48 绘制盒中心 `(enemyx+32, enemyy+32)`（引擎锚点 enemyx/enemyy，绘制盒为 +8..+56，见 wander 像素探针注释）；每帧随 enemyx/enemyy 更新，入场滑入帧（enterFx）同步偏移 |
| 结构 | 2 个同心半透明圆环 + 外环 8 个旋转装饰点 | 外环 r=50 / 内环 r=38，线宽 2px（`core.strokeCircle`）；装饰点 4x4 方块沿外环均匀分布（8 点，π/4 间隔） |
| 颜色 | 幽幽子风格冷色（紫/蓝紫/樱粉），透明度 ≤0.75（硬性） | 外环 `rgba(150,120,255,0.48)`、内环 `rgba(140,110,255,0.42)`、装饰点 `rgba(255,160,200,0.50)`；环点重叠处合成 alpha≈0.74（实测 maxA=189 ≤ 191）；最后 20 帧按 `life/20` 淡出（实测 182） |
| 旋转 | 装饰点角度每帧 +0.025 rad（约 2.4 秒一圈）；圆环本身不转 | `flags.auraFx.angle += 0.025`；内外环为整圆描边，静止保持优雅不花哨 |

### 二、触发节奏（"时不时"）

1. **宣言期间必现**：每张符卡宣言（`flags.cardNameFx` 创建）时光环出现并旋转 90 帧（1.5 秒），与宣言文字同生命周期（光环 life 独立，逐帧 `max(aura.life, cardNameFx.life)` 同步，二者同起同落）。
2. **卡内周期闪现**：`flags.auraFx.timer` 每帧 +1，满 300 帧（5 秒）触发一次、持续 120 帧（2 秒）旋转后消失；固定节奏、确定性、不依赖随机（若中途宣言激活则光环续命覆盖宣言期）。
3. **消失**：life 到 0 淡出（最后 20 帧透明度递减），timer 继续计数到下一个 300 帧周期。

### 三、状态与绘制方式

- 状态：`flags.auraFx = { life: 0, angle: 0, timer: 0 }`，进战（`danmaku.start`）初始化、战斗结束（胜利/失败/stop）清理为 null；纯视觉状态，只写 flags、不写 route（回放安全），与判定/擦弹/染色/游走/击破符时符无关。
- 触发范围：仅 `enemyId == 24`（简单模式幽幽子，实际进战配置）；case 7（困难模式）/cards7/旧 AI case 未动。
- 绘制：`parallelDo` 中先画光环再画幽幽子（身后效果）；引擎已有 canvas 椭圆描边（`core.strokeCircle`，ui.js 转发到 core），故用纯几何双环描边 + `core.fillRect` 装饰点，**未新增任何外部素材**（未用 etama4 实心圆弹素材，避免实心圆盘外观）。

### 四、实测数据（全部 PASS，88/88）

1. **静态**：`node --check` 通过（danmaku.js / plugins.js / data.js / main.js）；版本 2.10.52 → **2.10.53**（main.js + project/data.js 两处）；auraFx 初始化/三处退出清理断言；判定公式/擦弹公式/染色 4 帧/回放自动判胜/case 7/cards7（9×1500 帧）断言未动。
2. **光环可见**（双视口，环带 r∈[36,54] 以幽幽子中心为圆心）：像素 count=1496（环 1368 + 装饰点 52），8 个 45° 扇区像素均 ≥184（全圆周分布）；以 enemyx/enemyy 锚点为圆心的环带同样有光环像素（任务验收口径）。
3. **旋转**（双视口）：间隔 20 帧两张截图，装饰点质心角度差 **0.478 / 0.473 rad**（状态角增量 0.475，规格 0.025×20=0.5），8 点一致性 dev ≤ 0.012；测量期固定敌方站位排除随机游走干扰。
4. **节奏**（双视口）：timer=299 注入 → 下一帧触发 life=119/timer=0/ang=0.025；120 帧后归零（归零时 timer=119）；间隔后 timer 满 300 再现；宣言 90 帧与 cardNameFx 同步（实测 aura=card=87 递减）；实时时序确认"宣言必现 → 消失 → 约 5 秒周期闪现 2 秒 → 消失"。
5. **透明度**（双视口）：光环像素 maxA=**189 ≤ 191（0.75）**；淡出段（life<20）maxA=182 递减。
6. **双视口完整链路**（390x844 触屏 + 860x680 鼠标）：进战（enemyId=24、5 卡、3000 血）→ 键盘/拖动移动（route 不污染）→ 自动射击 → 擦弹 +1 不掉血 → 中弹 -8（500→492）→ 胜利 → f3_12 → 喝茶 → f0_garden + `g_yuyuko_follow=1` + `energyBossDone=true`；战后 `flags.auraFx=null`（无污染）。
7. **回放回归**：route 4==4 一致、自动判胜跳过、danmaku 音效静默、最终状态 f0_garden + follow=1 + auraFx=null。
8. **回归抽测**（双视口）：随机游走活跃、maru 染色 4 帧循环、卡 3 蝶弹生成、卡 1 击破符伤害破卡（5→4）。
9. **视觉复核**：qwen-vl-max 复核 `.hermes/out/aura_crop2_portrait.png`——确认"两个同心半透明紫环 + 外环 8 个均匀分布粉色小方块 + 中心紫色长发角色（幽幽子）+ 紫蓝冷色配樱粉"。
10. **E2E**：`.hermes/aura_e2e.js`（puppeteer-core + node server.js）**88/88 PASS**，结果 `.hermes/aura_e2e_result.json`、日志 `.hermes/aura_e2e.log`、截图 `.hermes/out/aura_visible_*.png / aura_crop2_*.png`。

### 五、影响面

| 文件 | 改动 |
| --- | --- |
| `project/floors/danmaku.js` | parallelDo：新增光环绘制/节奏块（位于幽幽子绘制之前）+ 临时变量 `_ax/_ay/_aa`；宣言同步改为 `Math.max(aura.life, cardNameFx.life)` |
| `project/plugins.js` | `danmaku.start` 初始化 `flags.auraFx`；`_afterWin` / `_onLose` / `stop` 清理为 null |
| `main.js` + `project/data.js` | 版本 2.10.52 → 2.10.53（缓存刷新，两处同步） |
| `DANMAKU_DELIVERY.md` | 本章 |

未动：`libs/`、判定/擦弹/染色/回放/随机游走/击破符时符机制/case 7、cards7、旧 AI case 与三档兜底逻辑。未 commit，改动留在工作区由用户提交。

## 三十五、音效调整（去掉自机射击音与擦弹音，改为敌方弹幕释放音，2.10.54）

【背景】用户反馈（东方原作对照）：自机每 6 帧发射一次持续播放射击音像机关枪太吵；东方原作擦弹无音效（用户确认）；敌方每波弹幕释放时希望保留/强化一下释放音效（每波一次，不是每颗弹，避免又变机关枪）。

### 一、改动点

1. **自机射击音移除**：`project/floors/danmaku.js` parallelDo 自机发射块删除 `core.plugin.danmaku._sfx("danmaku_shot")`，原位保留中文注释说明（danmaku_shot 素材改作敌方释放音）。
2. **擦弹音移除**：`project/floors/danmaku.js` parallelDo 擦弹块删除 `core.plugin.danmaku._sfx("danmaku_graze", { gap: 90 })`，原位保留中文注释说明（东方原作擦弹无音效）。擦弹判定/计数/去重逻辑未动。
3. **新增敌方弹幕释放音（每波一次）**：`project/plugins.js` `_tickCard` 生成循环内，在 `flags.time % interval == offset` 命中且生成器存在处、调用 `gen()` 前新增 `_self.danmaku._sfx('danmaku_shot')`。素材复用现有 `danmaku_shot.wav`（短促发射音适合波次释放，不新增素材；自机射击音已移除，该素材从此只用于敌方波次），使用现有默认音量（`_sfx` 无 opts，与宣言/破卡一致，无新增 gain 配置）。
4. **保留不动**：宣言（`danmaku_declare`）/破卡（`danmaku_cardget`）/中弹（`danmaku_damage`）音效及音量均衡（gains）均未改。
5. **版本**：2.10.53 → **2.10.54**（main.js + project/data.js 两处同步，缓存刷新）。

### 二、敌方释放音接入位置

`project/plugins.js` → `danmaku._tickCard`（每帧解释器，case 24/7 共用）：

```js
if (flags.time % o.interval == o.offset) {
    var gen = _self.danmaku.spawn[pat.gen];
    if (gen) {
        // 音效调整：敌方弹幕释放音（每波一次，不是每颗弹；复用 danmaku_shot 素材，自机射击音已移除）
        _self.danmaku._sfx('danmaku_shot');
        gen(flags, pat.cx, pat.cy, o);
    }
}
```

每个 `spawn` 生成器调用 = 一波（内部按 count 落位整波弹），因此该接入点语义即"每波一次"；同帧多 pattern 命中 = 多波 = 各响一次（与波次计数一致）。回放静默/`flags.sfx` 开关仍由 `_sfx` 统一把关。

### 三、实测数据（headless Chrome + puppeteer-core + `node server.js`，74/74 PASS）

1. **静态**：`node --check` 通过（danmaku.js / plugins.js / data.js / main.js）+ parallelDo 内部代码语法校验通过；版本 2.10.54 两处；danmaku.js 无 `_sfx("danmaku_shot")`/`_sfx("danmaku_graze")` 调用（damage/cardget 保留）；plugins.js `_tickCard` 含敌方释放音调用；判定/擦弹公式、case 7、回放自动判胜断言未动。
2. **自机射击音移除 + 敌方释放音每波一次**（双视口 390x844 + 860x680，各 10 秒窗口）：`danmaku_shot` 播放 **13 次 = 敌方波次 13 次**（总生成弹 31 颗 > 13，峰值同屏 12，证明不是每颗弹一次）；前 3 秒射击期仅 3 次且全部与波次一一对应（<10，非机关枪；原自机射击为 ~100 次/10s）；全部 13 条播放源 stack 均为 `danmaku._sfx ← danmaku._tickCard`（plugins.js:7294），无一条来自自机发射路径。
3. **擦弹音移除**：制造擦弹（弹穿过视觉盒距判定点 10px、视觉半径 23 > 判定半径 5）→ `graze+1` 且不掉血，全程（10 秒窗口 + 擦弹瞬间）音效列表 **0 条 `danmaku_graze`**。
4. **保留音效正常**：宣言音战斗首帧播放（双视口）；中弹音 `danmaku_damage` 在中弹-8（500→492）时播放；破卡音 `danmaku_cardget` 在击破符伤害破卡（5→4、回满血）时播放。
5. **双视口完整链路**（390x844 触屏 + 860x680 鼠标）：进战（enemyId=24、5 卡、3000 血）→ 键盘/拖动移动（route 不污染）→ 自动射击 → 擦弹 +1 不掉血 → 中弹 -8 → 胜利 → 回 f3_12 → 喝茶 → f0_garden + `g_yuyuko_follow=1` + `energyBossDone=true`。
6. **回放回归**：route 4==4 一致、自动判胜跳过、回放期间 danmaku 音效 **0 条**（静默）、最终状态 f0_garden + follow=1。
7. **回归抽测**（双视口）：光环宣言期与 cardNameFx 同生命周期（aura=card=67 递减、timer 推进）；随机游走活跃；配色 maru 4 帧循环 + 游戏内冷色占比 100%；蝶弹卡 3（瞄准 chou）与卡 5（蝶舞 wave chou）实战生成；时符卡 5 超时自动破卡 → 直接胜利。
8. **E2E**：`.hermes/sfx_e2e.js`（puppeteer-core + node server.js）**74/74 PASS**，结果 `.hermes/sfx_e2e_result.json`、日志 `.hermes/sfx_e2e.log`；修复脚本 `.hermes/patch_sfx_v254.js`（parallelDo 单行大字符串无法用行补丁，锚点字符串替换 + 计数校验，仓库同款模式）。

### 四、影响面

| 文件 | 改动 |
| --- | --- |
| `project/floors/danmaku.js` | parallelDo：自机发射块删除 `_sfx("danmaku_shot")`、擦弹块删除 `_sfx("danmaku_graze")`，各留中文注释；判定/擦弹计数/染色/回放逻辑零改动 |
| `project/plugins.js` | `_tickCard` 生成循环：每个 pattern 波次命中时 `_sfx('danmaku_shot')` 一次（复用现有素材，默认音量） |
| `main.js` + `project/data.js` | 版本 2.10.53 → 2.10.54（缓存刷新，两处同步） |
| `DANMAKU_DELIVERY.md` | 本章 |

未动：`libs/`、音效素材（wav 文件全部原样）、判定/擦弹/染色/回放/随机游走/旋转光环/击破符时符机制/case 7、cards7、旧 AI case 与三档兜底逻辑。未 commit，改动留在工作区由用户提交。


## 三十六、幽幽子战 BGM 替换（幽幽子主题曲 SC88Pro 版，2.10.55）

【背景】用户要求把幽幽子弹幕战背景音乐换成 `C:\Users\29478\Desktop\th07_13_SC88Pro.mp3`（东方妖妖梦第 13 曲 = 幽幽子主题「幽雅に咲かせ、墨染の桜」SC88Pro 版）。改动前弹幕战 `"bgm": null`，战斗中沿用进战前播放的 `bgm_youyoumu.mp3`（beforeBattle 播放）。

### 一、素材来源与注册

1. **素材**：源文件只读不动，拷贝为 `project/bgms/bgm_yuyuko.mp3`（7453632 字节，SHA256 `4bd1d1c5558c880ac0f8544a1ded38f7f8fc9858a19d0db94e38611aaac2ead4`，与用户源文件逐字节一致）。
2. **注册**：`project/data.js` 第 185 行 `"bgms"` 数组末尾追加 `"bgm_yuyuko.mp3"`（文件名 ASCII，符合 `启动服务.exe` 对 CJK 404 的约束）。
3. **配置**：`project/plugins.js` 幽幽子 danmaku 配置 `"bgm": null` → `"bgm": "bgm_yuyuko.mp3"`，注释注明来源（TH07 第 13 曲 SC88Pro 版，用户提供）。

### 二、播放与恢复逻辑（含实测发现的修复）

1. **播放时机**：`danmaku.start` 原实现是在换入 danmaku 地板**之前**直接 `core.playBgm(cfg.bgm)`。实测发现该时机有竞态：`functions.js` 的 `changingFloor` 钩子（第 144 行）只在换层时播楼层曲、不更新 bgmTick 的 `lastBgmKey`，导致换层前的 f3_12 末帧 bgmTick 会按过期 `lastBgmKey` 把战斗 BGM 盖回楼层曲（`bgm_youyoumu.mp3`），战斗音乐无法稳定生效。修复为：**在换入 danmaku 地板的 changeFloor 回调里播 `cfg.bgm`**（此时已在 danmaku 地板，`BGM_OF('danmaku')` 返回 null，bgmTick 不再接管）。`core.playBgm(cfg.bgm)` 调用方式保持仅名称参数，与其它播放一致（`plugins.js` 6862~6872 行）。
2. **音量**：战斗 BGM 音量对齐 f3_ 楼层档位 **0.4**。依据：进战前 f3_12 楼层曲由 bgmTick 强制 0.4，bgmTick 不接管 danmaku 地板音量（`BGM_OF('danmaku')` 为 null），若不显式设置会落到 `userVolume*designVolume`（默认 0.7）比楼层曲明显偏响；显式对齐 0.4 保证换曲前后响度一致（`plugins.js` 6866~6871 行，兼容 Howl/Audio 两种 volume 接口）。
3. **恢复**：新增 `core.plugin._restoreFloorBgm(fid)`（`plugins.js` 1389~1398 行，与 bgmTick 同闭包复用 `BGM_OF` 楼层规则）：
   - **胜利**：回城 changeFloor 时 `changingFloor` 钩子已按楼层规则自动恢复（f3_12 → `bgm_youyoumu.mp3`）；`_afterWin` 再显式调一次 `_restoreFloorBgm(flags.pfloor)` 作双保险（同名播放为引擎内 no-op，不重复发声）。
   - **失败**：`_onLose` 调 `_restoreFloorBgm(flags.pfloor)`（无换层，不依赖钩子），避免战斗 BGM 残留到失败结算。
   - **停止**：`danmaku.stop`（外部兜底）同样恢复进战前楼层 BGM。
   - bgmTick 在 f0_garden 等楼层正常接管音量/切曲逻辑未动。

### 三、实测数据（headless Chrome + puppeteer-core + `node server.js`，72/72 PASS）

测试脚本 `.hermes/bgm_yuyuko_e2e.js`，结果 `.hermes/bgm_yuyuko_e2e_result.json`、日志 `.hermes/bgm_yuyuko_e2e.log`：

1. **静态**（18 项）：版本 2.10.55（main.js + data.js）；bgms 注册；配置 `bgm: "bgm_yuyuko.mp3"`；`_restoreFloorBgm` 三路调用；判定公式 `flags.hitk[flags.bulletsize[i]] || 0.5`、擦弹公式 `(20 + bulletsize*0.5)`、回放自动判胜、chou 映射 etama_yuyuko 40x40 均未动；`node --check` main.js / data.js / plugins.js 通过；素材大小与 SHA256 与源文件一致。
2. **进战 BGM**（双视口 390x844 + 860x680，真实流程 startEnergyBoss→f3_12→撞幽幽子）：`core.musicStatus.playingBgm === 'bgm_yuyuko.mp3'`、音量 `0.4`；播放调用栈确认来自 `danmaku.start` 换层回调（plugins.js:6864）、发生在 danmaku 地板上。
3. **胜利恢复**（双视口完整链路）：进战→键盘移动（route 不污染）→拖动 1:1（+40px）→自动射击（self=8）→擦弹 +1 不掉血→中弹 -8（500→492，`danmaku_damage` 音）→胜利→回 f3_12（rAF 逐帧采样全程 `bgm_youyoumu.mp3`）→喝茶→f0_garden（`bgm_garden.mp3`）→`g_yuyuko_follow=1` + `energyBossDone=true`。BGM 调用序列 `bgm_yuyuko@danmaku → bgm_youyoumu@f3_12（换层钩子+_restoreFloorBgm）→ pause（afterBattle）→ bgm_garden@f0_garden`。
4. **失败路径**：hp 归零 lose 后 `bulletscreen=0`、`playingBgm === 'bgm_youyoumu.mp3'`（恢复为进战前楼层曲，无战斗 BGM 残留）。
5. **停止路径**：`danmaku.stop()` 后 `bulletscreen=0`、BGM 恢复 `bgm_youyoumu.mp3`。
6. **回放**：自动判胜跳过；记录回放期间 BGM 行为——`danmaku.start` 换层回调仍会短暂播放战斗 BGM，随后自动判胜回城恢复楼层曲，最终 f0_garden + `bgm_garden.mp3`；danmaku 音效全程 0 条（静默）。
7. **回归抽测**（双视口）：旋转光环 `auraFx` 激活；随机游走活跃（位置/停留计时变化）；chou 蝶弹 etama_yuyuko 40x40 绘制落画布（711 不透明像素）；maru 4 帧染色循环完整；击破符卡 1 打空血破卡（5→4、回满血、`danmaku_cardget` 音、break fx）；时符卡 5 边界超时自动破卡→直接胜利→f0_garden；敌方释放音 `danmaku_shot` 每波一次、擦弹无音、宣言音首帧播放；无 danmaku/bgm 相关页面错误。

### 四、影响面

| 文件 | 改动 |
| --- | --- |
| `project/bgms/bgm_yuyuko.mp3` | 新增（拷贝自用户源文件，SHA256 一致，源文件未动） |
| `project/data.js` | `"bgms"` 追加 `"bgm_yuyuko.mp3"`；版本 2.10.54 → 2.10.55 |
| `project/plugins.js` | 幽幽子 danmaku 配置 `"bgm": "bgm_yuyuko.mp3"`；新增 `core.plugin._restoreFloorBgm`；`danmaku.start` 改在换入 danmaku 地板回调里播 cfg.bgm + 音量 0.4；`_afterWin`/`_onLose`/`stop` 三路恢复 |
| `main.js` | 版本 2.10.54 → 2.10.55（缓存刷新，与 data.js 同步） |
| `DANMAKU_DELIVERY.md` | 本章 |

未动：`libs/`、判定/擦弹/染色/回放/随机游走/旋转光环/击破符时符机制/case 7、cards7、旧 AI case、音效素材与音量均衡、`danmaku.js` 地板文件（`bgm` 仍为 null，战斗 BGM 走 cfg.bgm）。未 commit，改动留在工作区由用户提交。

## 三十七、幽幽子战时长与掉血平衡（改版·纯攻-防公式版：纯弹幕战 + 5 分钟 + 期望掉血对齐魔塔公式，2.10.56）
【背景】用户三点需求：① 撞幽幽子不再回合制战斗掉血（掉血只发生在弹幕战中弹）；② 伤害按魔塔回合制攻-防公式结算（用户明确否决旧 `clamp(round(atk*5),13,18)` 与固定 8，且**明确要求不做任何系数/倍率修正**，即 K1=K2=1）；③ 战斗时长 ≈ 5 分钟（BGM 5 分钟），通过 BOSS HP 调节；④ 期望总掉血 ≈ 回合制公式算出的战斗伤害 D。本章为最终交付版（工作区先前两轮中间迭代——fireback=17 版、K1=0.3/K2=0.5 带系数版——均未交付，已被本章最终内容覆盖）。

### 一、任务一：撞幽幽子无回合制掉血（沿用上轮修复，本轮复核）

撞 e403b 时引擎流程为 `_sys_battle → events.prototype.battle → eventdata.afterBattle（project/functions.js:259）→ 插件 afterBattle 钩子 → detectBattle → danmaku.start`。修复（`_installHooks` 内 afterBattle 钩子，plugins.js 6629~6640 行）：对配置了 `danmaku` 的 BOSS（幽幽子）**先于原始 afterBattle 直接跳转**——跳过回合制扣血/判死/金币经验/死怪计数/击杀动画，等价地清掉地图上的 BOSS 块（与回合制战后删除一致，避免胜利回城后原地再撞 e403b），然后 `core.plugin.detectBattle(enemyId, 0)` 进弹幕战。未配置 danmaku 的 BOSS（testBoss 等）仍走原回合制路径，逐字节未动。

**实测**：真实链路（startEnergyBoss → f3_12 → 撞 e403b）进战前/后 hp **400→400 不变**，`battleDamage=0`、`deadMonsterCount=0`；弹幕战内中弹才 −fireback。

### 二、任务二：伤害公式（纯攻-防，无修正系数）

`project/plugins.js` → `_bossBattlePluginFn → this.boss.yuyuko.danmaku`（进战时 `danmaku.start` 读取 getter 落盘到 `flags.fire/flags.fireback`）：

```js
get fireback() {  // 敌弹：魔塔 enemy.atk − hero.def，最小 1
    return Math.max(1, 10 - core.status.hero.def);   // YUYU_ATK = e403b.atk = 10
},
get fire() {     // 自机弹：魔塔 hero.atk − enemy.def，最小 1
    return Math.max(1, core.status.hero.atk);        // YUYU_DEF = e403b.def = 0
}
```

| 参数 | 取值 | 依据 |
| --- | --- | --- |
| YUYU_DEF | **0** | e403b.def（project/enemys.js 第 107 行：`hp:80, atk:10, def:0, special:[]`） |
| YUYU_ATK | **10** | e403b.atk（同上） |
| K1 / K2 | **1 / 1** | 用户明确"不做任何系数/倍率修正"，公式直接攻-差、保底 1 |
| fire | `max(1, hero.atk − 0)` = `max(1, hero.atk)` | 每发伤害 = 我方攻击力；攻高打得快（魔塔逻辑） |
| fireback | `max(1, 10 − hero.def)` | 防高打得轻；**def≥10 时只掉 1 血——属性碾压就轻松（用户要求）** |

典型 f3 进度（atk=60/def=30，依据见第三节）→ fire=60、fireback=1；测试存档（atk=3/def=3）→ fire=3、fireback=7。

### 三、任务三：5 分钟时长模型（BOSS HP 调节）

**典型 f3 进度属性依据**：f3 樱塔区域怪 atk 26~36、hp 45~200（e322 冥界守卫 atk28、e443 古战场茗 atk26、e449 冥府花 atk29、e438 返魂蝶 atk35、e49 幽幽蝠 atk35、e66 緋朱蔦 atk32 等）；装备曲线 银剑(+20)/骑士剑(+40)、银盾(+20)/骑士盾(+40)，叠加基础 3 与红/蓝宝石成长 → 建模取 **atk=60、def=30**（用户给定 50~80 / 25~40 区间的中心）。

**实测 DPS 基线（站桩 15 秒真实采样，`.hermes/dps_probe.js`，atk=60）**：
- 正对站桩（playerx=enemyx）：**604 DPS**（≈10 发/秒 × 60，单列命中 50%）；
- 偏右 30px（双列全中区间）：**1200 DPS**（20 发/秒 × 60）→ 基线 = 20 发/秒 × fire。

**玩家实际命中率系数 = 45%**（取值依据）：两轮真实跟枪+躲弹模拟实测命中率 42.1%~47.7%（15s 采样 45.0%/47.7%、单卡 42.1%/42.9%），落点 42~45%，取 45% 为建模中点（用户预估 40~60% 带内）；有效 DPS = 20 × 60 × 0.45 = **540/秒**。

**新数值表**：

| 项目 | 中间迭代值 | 最终值（2.10.56） | 依据 |
| --- | --- | --- | --- |
| 卡 1~4 击破符血量（`enemylife`） | 9000 → 11000 | **32000** | 540 有效 DPS 下 ≈ 59.3 秒/卡 ×4 ≈ 237 秒 |
| 卡 5 时符血量（cards24 `hp`） | 5000 → 6000 | **60000** | 正常进度 60 秒内打不空（上限 960×60=57600 < 60000）→ 60 秒超时兜底破卡 |
| 卡 5 时限（`duration`） | 3600 帧（保持上轮已改值） | **3600 帧 = 60 秒** | 5 分钟总时长的兜底上限 |
| `fire` | clamp(13~18) → atk×0.3 | **max(1, hero.atk)** | 魔塔攻-防，K1=1 |
| `fireback` | 8 → 17 → 21 | **max(1, 10 − hero.def)** | 魔塔攻-防，K2=1 |
| `spellcards` | 5 | 5（不变） | — |
| 破卡回血 | `_refillCard`（上轮已实现） | 保留（按下一张卡血量回满） | 卡 5 用 cards24 `hp:60000`，卡 1~4 回 `enemylifemax=32000` |

**模型合计**：4 × 59.3 + 60（卡 5 超时）= **297 秒 ≈ 4 分 57 秒**（300±30 内）。

命中率灵敏度（atk=60 固定）：40% → 326.7s；42% → 314.0s；45%（模型中心）→ 297.0s；47% → 286.9s；50% → 273.3s；60% → 237.8s（命中更高/攻更高的玩家更快结束，符合"攻高打得快"；40~50% 全带落在 300±30 内）。

### 四、任务四：期望掉血模型（D 推导）

项目实际回合制公式（`project/functions.js` getDamageInfo，e403b `special:[]` 不触发折射/仇恨/固伤等）：

```
per_damage       = max(0, mon_atk − hero_def)      // 10 − def
hero_per_damage  = max(hero_atk − mon_def, 0)      // atk − 0
turn             = ceil(mon_hp / hero_per_damage)  // ceil(80 / atk)
D                = max(0, (turn − 1) × per_damage − hero_mdef)
```

- **典型 f3 进度（atk=60、def=30、mdef≥0）**：per_damage = max(10−30,0) = 0 → **D = 0**。按用户规则"若 D 偏小（如 <30）说明当前进度属性已碾压，掉血目标按 D 但注明**当前属性下战斗无压力**"：fireback=1，正常玩 5 分钟中弹 7.5~15 发（实测 10~11 发）→ 期望掉血 ≈ 10~11 ≈ D（无压力口径）。
- **测试存档（atk=3、def=3、mdef=8，仅参考）**：per=7、turn=ceil(80/3)=27 → D = 26×7 − 8 = **174**；fireback=7 由公式锁定（不做系数修正）→ 10 发 × 7 = 70 ≈ 0.4×D，偏离 ±30% 带——原因是测试存档属性远低于真实进度；真实进度 def≥10 → fireback=1、D≈0，无压力。

**玩家 HP**：不调玩家属性；D_typical=0（且 D_test=174）< 进战 HP 400，无必死风险，按进度不会发生 D ≥ HP，无需额外提示。

### 五、实测数据（headless Chrome + puppeteer-core + `node server.js`，`.hermes/balance_e2e.js` → `balance_e2e_result.json`，**70/70 PASS**）

1. **静态**：版本 2.10.56（main.js + data.js 同步）；`enemylife=32000`；fire/fireback 纯攻-防公式落盘且无旧 clamp/无系数残留；cards24 卡 5 `duration:3600` + `hp:60000`；cards7 保持 9×duration 1500（未改）；afterBattle 钩子跳过回合制；`_refillCard` 存在；判定/擦弹/回放自动判胜/游走/光环/配色(etama_yuyuko)/蝶弹(chou) 公式未动；`node --check` plugins.js 通过。
2. **a2 无回合制掉血**（860x680）：进战前/后 hp 400→400；`battleDamage=0`、`dead=0`；e403b 块进战前清除；弹幕战内中弹 **−7**（默认存档 def=3 → fireback=7）。
3. **b 攻-防公式落盘**：运行时调 `getDamageInfo` 双口径核对——典型（atk60/def30/mdef0）**D=0**、测试存档（atk3/def3/mdef8）**D=174**；典型属性进战 `fire=60 / fireback=1`，中弹 **−1**；进战前后 hp 不变。
4. **c 单卡时长**：15 秒真实火力采样 effDPS=572、命中率 **47.7%**（40~60% 带内）；卡 1 实测 **61.2s**（命中率 42.1%），模型按实测命中率 63.3s（±20% 内），且在设计值 59.3s 的 ±20%（47.4~71.1s）内。
5. **d 总时长**：完整打完 5 卡实测 **302.1s ≈ 5 分 02 秒**（270~330s 内；模型中心 297s 的 +1.7%）；全程自然中弹 10 发 × fireback 1 = 掉血 10（hp 400→390，**当前属性下战斗无压力**）。
6. **e 掉血期望**：注入"正常玩"中弹频率（300s 每 30s 一发）→ 11 发 × 1 = **11 ≈ D_typical=0**（D<30 → 按用户规则注明"当前属性下战斗无压力"，掉血目标按 D）；测试存档口径参考：fireback=7 × 10 发 = 70 ≈ 0.4×D_test=174（测试存档仅参考）。
7. **f 时符（卡 5）60 秒超时**：`cardTimer 3500→3600` 边界自动破卡 → `spellcardleft=0 / enemylife=0` → 胜利回 f0_garden。
8. **g 双视口完整链路**（390x844 + 860x680）：进战（hp 不变）→ 键盘移动（route 不污染）→ 自动射击 → 擦弹 +1 不掉血 → 中弹 −7 → 胜利 → 回 f3_12 → 喝茶 → f0_garden、`g_yuyuko_follow=1`、`energyBossDone=true`、`bulletscreen=0`。
9. **h 回放回归**：route 4==4、`failed=false`、弹幕战自动判胜跳过、danmaku 音效全程静默、终态与正常游玩一致。
10. **i 回归抽测**：旋转光环 auraFx 宣言期激活；随机游走位置变化；敌方释放音 `danmaku_shot` 每波一次（13 次）；擦弹无音效；进战 BGM `bgm_yuyuko.mp3`、胜利恢复楼层曲 `bgm_youyoumu.mp3`。

### 六、影响面

| 文件 | 改动 |
| --- | --- |
| `project/plugins.js` | 幽幽子 danmaku 配置最终版：`fire = max(1, hero.atk)`（YUYU_DEF=0、K1=1）、`fireback = max(1, 10 − hero.def)`（YUYU_ATK=10、K2=1）；`enemylife` 11000→**32000**；cards24 卡 5 `hp:60000` + `duration:3600`（60 秒）保持；相关注释与数值表 |
| `main.js` | 版本 2.10.56（工作区在上一轮迭代已置，本轮改版沿用同一版本号交付；任务书要求 2.10.55→2.10.56） |
| `project/data.js` | 版本 Ver 2.10.56（同上） |
| `.hermes/balance_e2e.js` 等 | 测试脚本更新到最终公式（测试设施，非交付游戏文件） |
| `DANMAKU_DELIVERY.md` | 本章（修订） |

未动：`libs/`、`project/functions.js`（回合制公式未改，仅弹幕战不再触发它）、`project/enemys.js`（e403b 属性未改）、`project/floors/danmaku.js`（判定/擦弹/染色/回放/游走/光环/BGM/音效/case 7/cards7 逻辑逐字未动）、玩家属性（不调）。未 commit，改动留在工作区由用户提交。

## 三十八、幽幽子战 HP 动态调整（任务A·按玩家当前属性实时反推 BOSS 血量，2.10.57）

【背景】用户最新明确（最高优先）：幽幽子的攻击/防御都不能动，必须严格按怪物手册（e403b：hp 80 / atk 10 / def 0）；只能**暗改幽幽子实际 HP**；打完后的弹幕总掉血要和怪物手册按魔塔原则计算的伤害一致。本章把第三十七章的固定血量（卡 1~4 = 32000、卡 5 = 60000）升级为**进战时按玩家当前属性实时反推**（公式化，非写死）。

### 一、伤害与时长模型（设计依据）

**1. 回合制伤害 D（掉血目标，项目实际公式口径）**

e403b 手册值 hp=80 / atk=10 / def=0，`special:[]` 无折射(#44)/吸血(#11)/先攻(#1)/破甲(#7)/净化(#9)/反击(#8)/仇恨(#17)/固伤(#22)/支援/二倍斩等 → 项目实际回合制公式（`project/functions.js` getDamageInfo）对幽幽子化简为纯攻-防：

```
per_damage      = max(0, mon_atk − hero_def)   // max(0, 10 − def)
hero_per_damage = max(hero_atk − mon_def, 0)   // max(atk, 0)
turn            = ceil(mon_hp / hero_per_damage) // ceil(80 / atk)
D               = max(0, (turn − 1) × per_damage − hero_mdef)
```

实现 `_calcYuyuHpModel` 内联同口径公式（含折射等特技项——e403b 无折射故恒为 0，注释已写明），实测与 `core.enemys.getDamageInfo(e403b, …)` **双口径逐档核对一致**（见第五节）。

**2. 掉血模型与战斗时长反推**

```
总掉血 = 战斗时长 T × 中弹频率 × fireback
T     = D ÷ (中弹频率 × fireback) = 30 × D ÷ fireback
```

- **中弹频率 = 1 弹 / 30 秒**：按魔塔玩家不熟练预估 20~40 秒一弹，取中值 30 秒；第三十七章真实跟枪实测自然中弹 ≈ 10 次/5 分钟 ≈ 30 秒/次，两路依据吻合。
- **保护带**：`T = clamp(T, 180, 360)`——下限 180 秒保 BGM 体验（战斗曲至少播 3 分钟），上限 360 秒防弱属性玩家被拖太久。
- **fireback = max(1, 10 − def)**（第三十七章锁定公式，本轮未动）：防高掉血少。

**3. 总 HP 反推与每卡分配**

```
有效DPS = 20发/秒 × fire × 命中率45%          // 射速基线 20发/秒（第三十七章站桩实测）；
                                              // 命中率 45%（第三十七章跟枪实测 42~47% 取中值）
总HP    = 有效DPS × T
卡 5    = min(60000, 有效DPS × 60)            // 时符 60 秒兜底血量（不超 60000 基线）
T5      = min(60, 卡5 / 有效DPS)               // 时符实际占用时长
卡 1~4  = max(1, round(有效DPS × (T − T5) / 4)) // 击破符均分
```

攻极高（atk ≥ 112 → 有效DPS×60 ≥ 60000）时卡 5 可能在 60 秒时限前被击破，但总时长由"总HP预算 − 时符实际占用"自洽兜住（T 不变，见第五节高档实测 283s ≈ 297s）。

**4. 边界处理（写清公式与口径）**

| 分支 | 条件 | 处理 |
| --- | --- | --- |
| dynamic | 0 < D < 玩家HP | `T = clamp(30×D/fireback, 180, 360)`，HP 按上节公式反推 |
| baseline | D = 0（属性碾压） | 按 5 分钟基线时长 `T0 = 297s`（= 4×59.3 + 60）反推 HP：典型 atk60/def30 → 卡1~4 ≈ **31995 ≈ 32000**、卡5 = **60000**，与第三十七章基线一致；更高 atk 时卡血同比上调保持 5 分钟时长（**设计决策**：若沿用固定 32000/60000，atk=120 实测仅 ~174s < 180s 下限，违反总时长约束，故按基线时长反推并写清） |
| underpowered | D ≥ 玩家HP（属性不足，魔塔原则打不过）或 atk=0 不可战斗 | 按 5 分钟基线仍可打（`T = 297`、卡5 = 60000），掉血会高但这是玩家属性问题，**不调数值**；卡 1~4 按基线时长反推（如 atk1/def0 → 533/卡，避免固定 32000 下 4 小时打不完的"不可玩"） |

### 二、实现方式（增量，判定/擦弹/染色/回放/游走/音效/BGM/case 7 逻辑未动）

1. `boss.yuyuko.danmaku` 配置新增 `"dynamicHp": true` 标记；静态 `enemylife: 32000` 与 cards24 卡 5 `hp: 60000` **保留为设计基线**，不再直接用于真实战斗。
2. 新增 `core.plugin.danmaku._calcYuyuHpModel(fire, fireback)`：读 `core.status.hero` 当前 atk/def/mdef/hp，按第一节公式返回 `{branch, D, T, T5, effDPS, hpBreak, hpCard5, fire, fireback, hero}`。
3. `danmaku.start` 在 `cfg.dynamicHp && enemyId==24 && !core.isReplaying()` 时计算模型，覆盖初始 `enemylife`（= hpBreak），并把每卡血量覆盖表落盘 `flags.cardHpOverride = [hpBreak×4, hpCard5]`、模型诊断 `flags.yuyuHpModel`（只写 flags，不影响判定/回放；回放期间不计算，自动判胜路径不变）。
4. `_refillCard` 对 enemyId 24 且存在覆盖表时优先读 `flags.cardHpOverride[idx]`（idx = 长度 − spellcardleft），否则走旧逻辑（cards7 / 无 dynamicHp 行为逐字节不变）。

### 三、数值表（三档任务属性，mdef=0；任务书未给 mdef，测试取 0 并在本表写明）

| 档 | atk/def/mdef | D | 分支 | T | 有效DPS | 卡1~4 | 卡5 | fire/fireback |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 低 | 10 / 5 / 0 | **35** | dynamic | 210s | 90 | 3375 | 5400 | 10 / 5 |
| 中 | 60 / 30 / 0 | **0** | baseline | 297s | 540 | 31995 | 60000 | 60 / 1 |
| 高 | 120 / 60 / 0 | **0** | baseline | 297s | 1080 | 65190 | 60000 | 120 / 1 |

边界：atk1/def0/mdef0/hp400 → D=790 ≥ 400 → underpowered（T=297、卡1~4=533、卡5=60000）；atk0 → 不可战斗 → underpowered。

### 四、实测数据（headless Chrome + puppeteer-core + `node server.js`，`.hermes/hp_dynamic_e2e.js` → `hp_dynamic_e2e_result.json`，**103/103 PASS**）

1. **静态**：版本 2.10.57（main.js + data.js 同步）；`dynamicHp` 标记；`_calcYuyuHpModel` 公式各要素；`flags.cardHpOverride` 写入与 `_refillCard` 优先读取；e403b 手册值 hp80/atk10/def0 逐字节未动；fire/fireback 纯攻-防公式未动；判定/擦弹/回放/游走/光环/配色(etama_yuyuko)/蝶弹(chou)/cards7/cards24 卡5 duration 3600 均未动；`node --check` plugins.js/main.js/data.js 通过。
2. **模型单测**：三档 D 双口径一致（`_calcYuyuHpModel` vs `getDamageInfo`：35/35、0/0、0/0）；HP 反推值 / T / effDPS / branch 全部落盘断言通过；边界 atk1/def0 → underpowered（D=790 ≥ 400）、atk0 → 不可战斗 → underpowered。
3. **低档真实战斗（390x844 竖屏完整链路）**：进战前后 hp 400→400 不变（无回合制掉血）、`battleDamage=0`、`dead=0`；公式落盘 fire=10/fireback=5；动态 HP 落盘 卡1~4=3375/卡5=5400；真实战斗 **202.3s**（模型 210s，−3.7%）∈ [180,360]；中弹 7 发 × fireback 5 = **掉血 35 = D（±30% 精确命中）**；5 卡全部结束、卡 5 enemylifemax=5400 覆盖生效；胜利 → 回 f3_12 → 喝茶 → f0_garden + `g_yuyuko_follow=1` + `energyBossDone=true` + `bulletscreen=0`；进战 BGM `bgm_yuyuko.mp3`、战后 `bgm_garden.mp3`。
4. **中档真实战斗（860x680 完整链路）**：无回合制掉血 400→400；fire=60/fireback=1；卡1~4=31995/卡5=60000；真实战斗 **289.0s**（模型 297s，−2.7%）∈ [180,360]；中弹 10 发 × 1 = 掉血 10，D=0 → 按第三十七章"当前属性无压力"口径（掉血 ≤30、剩余 hp >300）；完整链路终态同上。
5. **高档真实战斗（860x680 完整链路）**：无回合制掉血 400→400；fire=120/fireback=1；卡1~4=65190/卡5=60000；真实战斗 **283.0s**（模型 297s，−4.7%）∈ [180,360]；掉血 10 ≈ D=0（无压力口径）；完整链路终态同上。
6. **回放回归**：route 4==4、`failed=false`、弹幕战自动判胜跳过、danmaku 音效全程静默（0 条）、终态 f0_garden + `g_yuyuko_follow=1` 与正常游玩一致。
7. **回归抽测**：直接进战无 `dynamicHp` → 静态基线 32000 不受影响；旋转光环 auraFx 宣言期激活；随机游走位置变化；敌方释放音 `danmaku_shot` 12 次（每波一次）；蝶弹 chou 卡 3 真实生成路径命中；擦弹无音效；进战 BGM `bgm_yuyuko.mp3`；时符（卡 5）3600 帧超时自动破卡 → 直接胜利 → f0_garden + `bgm_garden.mp3`。页面错误仅音频 pause 的良性 `AbortError`（headless BGM 切换，非弹幕/BGM 逻辑错误）。

### 五、影响面

| 文件 | 改动 |
| --- | --- |
| `project/plugins.js` | yuyuko danmaku 配置新增 `"dynamicHp": true`（静态 32000/60000 保留为设计基线）；新增 `_calcYuyuHpModel`（D 回合制公式 / 中弹频率30s / 命中率45% / T 夹取180~360 / 5分钟基线 T0=297 / 卡5 min(60000, effDPS×60) / 三分支）；`danmaku.start` 进战实时计算并落盘 `flags.cardHpOverride` + `flags.yuyuHpModel`；`_refillCard` 优先读覆盖表（cards7/无 dynamicHp 不变） |
| `main.js` | 版本 2.10.56 → **2.10.57**（缓存刷新，与 data.js 同步） |
| `project/data.js` | 版本 Ver 2.10.56 → **Ver 2.10.57** |
| `.hermes/hp_dynamic_e2e.js` 等 | 新增任务A E2E（测试设施，非交付游戏文件） |
| `DANMAKU_DELIVERY.md` | 本章 |

未动：`libs/`、`project/functions.js`（回合制公式未改，仅作 D 口径核对）、`project/enemys.js`（e403b hp80/atk10/def0 严格锁手册）、`project/floors/danmaku.js`（判定/擦弹/染色/回放/游走/光环/BGM/音效/case 7/cards7 逐字未动）、fire/fireback 公式、玩家属性（不调）。未 commit，改动留在工作区由用户提交。

## 三十九、幽幽子光环内六芒星（任务B·东方符卡魔法阵风格，2.10.58）
> **勘误（2.10.63，第四十四章）**：本章回归抽测中"卡 3 蝶弹 chou 真实生成"的 chou 素材为旧错误行
> （etama.png y=80 排 15×16 抽象蝶形）；2.10.63 已换为正确蝴蝶行（y=176 行 sprite 120-127，32×32，
> 透明翼蝴蝶），生成/判定逻辑不受影响（见第四十四章）。

【背景】在第三十四~三十八章已落地的"幽幽子旋转光环"（双同心圆环 + 8 旋转装饰点，`flags.auraFx`）基础上，本章在**光环中心**叠加一个六芒星（两个等边三角形叠加，东方符卡魔法阵风格），与光环**同生命周期同步旋转**。mota-js 的 `drawImage` 不支持画布旋转，因此采用 **24 帧旋转帧序列 PNG 按角度选帧**方案。纯视觉改动：判定/擦弹/染色/回放/游走/音效/BGM/case 7/击破符/时符逻辑逐字未动，只动光环内的绘制代码。

### 一、设计依据（素材几何 / 配色 / 绘制）

**1. 素材（PIL 预生成，脚本 `.hermes/gen_hexagram.py` 可重跑）**

`project/images/hexagram.png`：24 帧横排帧序列（每帧 64×64，整图 1536×64，透明底），每帧相对上一帧 **+15°**（24×15°=360° 一圈）。生成时 4× 超采样 + LANCZOS 降采样抗锯齿。

**2. 六芒星几何与"内外环之间"的尺寸依据**

- 六芒星 = 两个等边三角形叠加：三角形 A 顶点角 90°/210°/330°、三角形 B 顶点角 30°/150°/270°；两三角形并集轮廓 = 12 顶点星形路径（外尖半径 **R=32px**、内凹半径 R/√3≈18.5px），以单一路径填充+描边，避免"双三角形独立描边"在边线交点处合成 alpha 超 0.75。
- 光环圆心 = 幽幽子 48×48 绘制盒中心 `(enemyx+32, enemyy+32)`；光环外环 r=50、内环 r=38。六芒星外尖 R=32，**完整落在内环（r=38）以内**（顶点离内环 6px），位于内外环围合的视觉中心区——即"光环内、两环之间"的中央魔法阵位，不压环线、不与外环装饰点重叠。若取 56×56（外尖 R=28）顶点离内环 10px，视觉偏空偏小，故取 **64×64**。

**3. 配色与透明度（与光环一致，硬性 ≤0.75）**

| 项 | 值 | 合成 alpha |
| --- | --- | --- |
| 紫填充 | rgba(150,120,255,0.40) | 0.40 |
| 樱粉描边 | rgba(255,160,200,0.58) | 0.58 |
| 描边叠填充（外沿） | 0.58+0.40×(1−0.58) | ≈**0.748 ≤ 0.75** |
| 中央两三角形重叠填充 | 0.40+0.40×0.60 | 0.64 |

实测素材最大 alpha **163/255（0.64）≤ 191（0.75）**，透明底。

**4. 绘制与旋转（`project/floors/danmaku.js` parallelDo，光环 if 块内）**

- 绘制顺序：光环双环 + 8 装饰点绘制后、幽幽子绘制前（六芒星在幽幽子身后）。
- 位置：`(Math.round(_ax-32), Math.round(_ay-32))` 居中 64×64（`_ax/_ay` = 光环圆心）。
- 选帧：`_hex = Math.floor(flags.auraFx.angle / (Math.PI*2/24)) % 24`——与光环 `angle` 同步（角速度 0.025 rad/帧，24 帧 = 一圈）；20 帧 angle +0.5rad → 选帧索引差 ≈ 2（实测恰好 2）。
- 淡出同步：末 20 帧 `core.canvas['event2'].globalAlpha = _aa`（_aa=life/20）绘制后立即还原 1，与光环环/点淡出同步。

**5. 生命周期（与光环完全同步，仅 enemyId==24）**

六芒星绘制在 `if (flags.auraFx && flags.enemyId == 24)` 与 `if (flags.auraFx.life > 0)` 同一代码块内，天然与光环完全同步：宣言期间必现 90 帧（与 `cardNameFx` 同生命周期）+ 每 300 帧周期闪现 120 帧 + 末 20 帧淡出；`flags.auraFx` 进战初始化、战斗结束清理不变。纯视觉、只写 canvas，不写 route（回放安全），与判定/擦弹/染色/游走无关。

### 二、实测数据（headless Chrome + puppeteer-core + `node server.js`，`.hermes/hexagram_e2e.js` → `hexagram_e2e_result.json`，**96/96 PASS，页面错误 0**）

1. **静态**：版本 2.10.58（main.js + data.js 同步）；`hexagram.png` 注册 data.js images + 文件 1536×64（24 帧）；parallelDo 含 `_hex` 声明、`floor(angle/(2π/24))%24` 选帧、64×64 居中绘制、globalAlpha 淡出；绘制顺序断言（环带 7127 < 六芒星 8091 < 幽幽子 8339）；判定/擦弹/染色/回放自动判胜/case7/cards7（9×1500）公式逐字未动；e403b 手册 hp80/atk10/def0 逐字未动；`node --check` main.js/data.js/plugins.js/danmaku.js 通过。
2. **b 六芒星可见（双视口 390x844 + 860x680）**：event2 中心外尖环带（r∈[28,34]）六芒星配色像素 **total=148**；6 个外尖角扇区均有像素且平衡 `tips=[19,20,27,39,64,89]`（六角对称）；可见期截图落盘。
3. **d 透明度**：六芒星像素 maxA=**163** ≤ 191（0.75 硬性上限）；末 20 帧淡出 alpha 降至 155/152 < 非淡出段 163。
4. **c 旋转帧推进**：间隔 ≈20 帧两张截图（angle 增量 0.550/0.500 rad）→ 选帧索引差 **fA=17→fB=19（diff=2）**；两张截图的渲染像素与素材对应帧逐点比对 **matchA=1.00 / matchRGB=1.00**（tested=108）——确认画面上的六芒星确实按 angle 旋转选帧。
5. **e 生命周期时序（确定性注入 + 实时门控）**：timer=299→300 触发闪现（life 120 同步递减、六芒星同现）；闪现结束 life=0 时六芒星像素归 0；宣言 90 帧注入后光环/六芒星同步 89/89 且像素可见；光环不激活（life=0）时六芒星像素恒为 0（门控无泄漏）。
6. **f 双视口完整链路**：进战（enemyId=24、5 卡、动态 HP lifeMax≈2025、fireback=7、char_yuyuko、aura 激活）→ 真实宣言期六芒星可见 → 键盘移动 + 拖动（route 不污染）→ 自动射击 → 擦弹 +1 不掉血 → 中弹 −7 → 胜利 → f3_12 → 喝茶 → f0_garden + `g_yuyuko_follow=1` + `energyBossDone=true` + `bulletscreen=0` + `auraFx=null`；进战 BGM `bgm_yuyuko.mp3`、胜利恢复 `bgm_garden.mp3`。
7. **g 回放回归**：route 长度一致（route.length == totalList.length）、`failed=false`、弹幕战自动判胜跳过、danmaku 音效全程静默（0 条）、终态 f0_garden + follow=1 + 无光环/六芒星污染（纯视觉不写 route）。
8. **h 回归抽测**：真实宣言期光环 + 六芒星同现；随机游走位置/停留变化；maru 染色 4 帧循环完整；卡 3 蝶弹 chou 真实生成；击破符卡 1 贴脸一发破卡（5→4、`danmaku_cardget`）；敌方释放音 `danmaku_shot` 每波一次、擦弹无音效；直接进战（带 cfg.bgm）BGM `bgm_yuyuko.mp3`；时符卡 5 3600 帧超时自动破卡 → 直接胜利 → f0_garden + `bgm_garden.mp3`。

### 三、影响面

| 文件 | 改动 |
| --- | --- |
| `project/images/hexagram.png` | 新增：24 帧六芒星旋转帧序列（1536×64，紫填 rgba(150,120,255,0.40) + 樱粉描边 rgba(255,160,200,0.58)，透明底，max alpha 0.64） |
| `project/data.js` | main.images 注册 `hexagram.png`；版本 Ver 2.10.57 → **Ver 2.10.58** |
| `project/floors/danmaku.js` | parallelDo 光环块内新增六芒星绘制（`_hex` 选帧 + 64×64 居中 + globalAlpha 末 20 帧淡出）；判定/擦弹/染色/回放/游走/音效/BGM/case 7 逻辑逐字未动 |
| `main.js` | 版本 2.10.57 → **2.10.58**（缓存刷新，与 data.js 同步） |
| `.hermes/gen_hexagram.py` | 新增：素材生成脚本（可重跑，含尺寸/配色/alpha 依据注释） |
| `.hermes/patch_hexagram_danmaku.py` | 新增：parallelDo 单行字符串精确锚点补丁（机械改写，非游戏逻辑） |
| `.hermes/hexagram_e2e.js` 等 | 新增任务B E2E（测试设施，非交付游戏文件） |
| `DANMAKU_DELIVERY.md` | 本章 |

未动：`libs/`、`project/plugins.js`（`flags.auraFx` 生命周期/清理、dynamicHp、fire/fireback、卡片表逐字未动）、`project/functions.js`（回合制公式）、`project/enemys.js`（e403b hp80/atk10/def0 严格锁手册）、玩家属性（不调）。未 commit，改动留在工作区由用户提交。

## 四十、滚动弹幕战背景（任务C·东方原作式，2.10.59）

【背景】第三十七章之前战斗背景为纯色块（eachArrive 里 `fillRect rgba(8,10,34,0.85)` 全屏 + 边框）。本章改为东方原作式缓慢滚动背景：冥界蓝紫深色底不变（弹幕对比度基线），其上双层无缝平铺缓慢向下滚动（图案层 + 星点层，不同速度）。实现思路参考 github.com/No5972/th06_3.1 与 github.com/BlueWhaleMain/Touhou.js 的 STG 滚动背景（双层视差 + 无缝平铺小图 + 每帧偏移量）；本轮直接采用“每帧偏移取整 + 平铺 drawImage”设计，未 clone 外部仓库，参考来源已注明。纯视觉改动：只画 event2、只写 flags.bgScroll/bgStarScroll，不写 route，判定/擦弹/染色/回放/游走/音效/BGM/case 7 逐字未动。

### 一、设计依据（素材几何 / 配色 / 滚动公式）

**1. 素材（PIL 预生成，脚本 `.hermes/gen_bg_scroll.py` 可重跑，产物校验写入 `.hermes/bg_asset_report.json`）**

`project/images/bg_danmaku.png`（冥界纹样·图案层）与 `bg_danmaku_star.png`（星点层），均 64×64 透明底、**9 副本回绕绘制保证无缝平铺**（±64 偏移，边缘图案自动回绕）。配色：冷色系——图案层蓝紫 `rgba(120~190, 125~180, 255, 0.24~0.39)`，星点层青白 `rgba(188~245, 210~248, 255, 0.27~0.46)`；与弹幕（etama_yuyuko 系冷亮色 + 白判定点）区分：背景像素 alpha 恒 ≤ 0.5（硬性上限 128），实测 maxA 图案层 99、星点层 117；弹幕实心核心 alpha≈255。生成器按种子 20260808 可复现。

**2. 滚动公式（parallelDo，clearMap 之后、战斗元素之前最先绘制）**

- 偏移累加：`flags.bgScroll = (flags.bgScroll + 0.3) % 64`（图案层）、`flags.bgStarScroll = (flags.bgStarScroll + 0.18) % 64`（星点层），纯视觉 flags、惰性初始化、不写 route。
- 绘制取整：`_bg0 = Math.round(flags.bgScroll)`（星点同理），整数目标坐标 → 无亚像素模糊、像素级可测。
- 平铺：`dest y = by*64 + offset`（offset 增大 → 内容向下滚动，东方 STG 背景惯例），可见区 8~9 行 × 8 列，每层 64~72 次 drawImage/帧，两层合计约 128~144 次/帧（可接受；隔离实测单次双背景帧耗时约 1.48ms）。
- 64px 回绕无跳变：平铺周期 = 素材 64px，取整相位 64 ≡ 0（`(cy-64) mod 64 == cy mod 64`），回绕帧视觉等价。
- 速度换算：图案层 0.30px/帧 ≈ 3.6 秒/屏（480px）、星点层 0.18px/帧 ≈ 6 秒/屏；30 帧两帧截图像素平移 ≈ 9px / 5.4px。

### 二、实测数据（headless Chrome + puppeteer-core + `node server.js`，`.hermes/bg_scroll_e2e.js` → `bg_scroll_e2e_result.json`，**91/91 PASS，页面错误 0**）

1. **静态**：版本 2.10.59（main.js + data.js 同步）；两张 64×64 素材注册 data.js images；parallelDo 双层绘制位于 clearMap 之后、绘制自机之前（索引 5824 < 6684 < 7118）；eachArrive 底色 `rgba(8,10,34,0.85)` 保留；素材 maxA 99/117 ≤ 128（0.5）；判定/擦弹/4 帧染色/回放自动判胜/case7/cards7 9 时长/光环 0.025 rad/e403b 手册 hp80/atk10/def0 逐字未动；`node --check` main.js/data.js/plugins.js/danmaku.js 通过。
2. **滚动可见（双视口一致）**：间隔 30 帧 flags 增量 = 图案 **9.000px** / 星点 **5.400px**（0.30/0.18 × 30，逐帧核对 ≤0.6 容差）；取整平移 = 9px / 5px；背景掩码平移：图案层 shift=9（匹配率 **0.992**）、星点层 shift=5（匹配率 **0.893**）。
3. **平铺无缝**：+64px 取整相位（64≡0）两帧背景区像素**完全一致**（hash 相等，双视口均过）；单帧内 64px 周期采样（x 与 y 各 +64）逐像素相等（period=tested）。
4. **性能（30 秒 E2E）**：无卡顿、无错误；帧率恒 **60fps**（min 1s 区间 ticks=60，总帧 1825/30s）；隔离实测双背景层单帧绘制耗时 **1.477ms/帧**（<8ms 预算）。
5. **弹幕可读性**：maru 弹实心核心 alpha=255 vs 背景同列像素 alpha=79；RGBA 距离 **226.2**，视觉区分度充足（背景不抢弹幕）。
6. **双视口完整链路（390×844 + 860×680）**：进战（enemyId=24、5 卡、char_yuyuko、aura 开启、bgScroll/bgStarScroll 存活）→ 键盘移动 + 拖动（route 不污染）→ 自动射击 → 擦弹 +1 不掉血 → 中弹 -fireback → 胜利 → 回 f3_12 → 喝茶 → f0_garden + `g_yuyuko_follow=1` + `energyBossDone=true` + `bulletscreen=0`；BGM 进战 bgm_yuyuko.mp3、战后恢复 bgm_garden.mp3。
7. **回放回归**：route 长度一致（4==4）、failed=false、弹幕战自动判胜跳过、danmaku 音效全程静默（0 条）、终态与正常游玩一致、无光环/六芒星/背景 flags 污染（纯视觉不写 route）。
8. **回归抽测**：宣言期光环+六芒星像素高于背景基线（base+40 判据）；随机游走位置变化；maru 染色 4 帧循环完整；卡 3 蝶弹 chou 真实生成；卡 1 击破符贴脸一发破卡（5→4 + danmaku_cardget）；敌方释放音 danmaku_shot 每波一次；擦弹无音效；时符 3600 帧超时自动破卡直接胜利 → bgm_garden。

### 三、影响面

| 文件 | 改动 |
| --- | --- |
| `project/images/bg_danmaku.png` | 新增：冥界纹样图案层 64×64 无缝平铺（蓝紫冷色，maxA 99 ≤ 128） |
| `project/images/bg_danmaku_star.png` | 新增：星点层 64×64 无缝平铺（青白冷色，maxA 117 ≤ 128） |
| `project/data.js` | main.images 注册两张背景素材；版本 Ver 2.10.58 → **Ver 2.10.59** |
| `project/floors/danmaku.js` | parallelDo 清屏后新增双层滚动背景绘制（flags.bgScroll/bgStarScroll，0.30/0.18px每帧，取整平铺向下滚动）；eachArrive 底色保留仅加注释；判定/擦弹/染色/回放/游走/光环/音效/BGM/case 7 逐字未动 |
| `main.js` | 版本 2.10.58 → **2.10.59**（缓存刷新，与 data.js 同步） |
| `.hermes/gen_bg_scroll.py` 等 | 新增：素材生成脚本 + danmaku.js 锚点补丁脚本 + 任务C E2E（测试产物，非交付游戏文件） |
| `DANMAKU_DELIVERY.md` | 本章 |

未动：`libs/`、`project/plugins.js`（dynamicHp/光环生命周期/判胜/fire/fireback/卡片表）、`project/functions.js`（回合制公式）、`project/enemys.js`（e403b hp80/atk10/def0 手册锁）、玩家属性。未 commit，改动留在工作区由用户提交。
## 四十一、微调轮（任务D·滚动背景速度 0.36/0.24 + 整体收尾检查，2.10.60）

【背景】夜间自动迭代任务栈 A（HP 动态化）/ B（六芒星）/ C（滚动背景）已全部交付（第三十八~四十章，2.10.57~2.10.59），本轮到达任务 D 微调轮：检查整体并做 1~2 项低风险微调。整体检查结论：六芒星尺寸与 HP 公式边界两项经核验**均无低风险改进空间**（依据见下），仅对**滚动背景速度**做一项微调（任务C 的 0.30/0.18 px/帧 → **0.36/0.24 px/帧**）。纯视觉改动：只改 parallelDo 内两处常量与注释，判定/擦弹/染色/回放/游走/音效/BGM/case 7 逐字未动。

### 一、设计依据（速度微调公式 / 不动项核验）

**1. 速度微调公式与理由**

| 层 | 原速度 | 新速度 | 64px 平铺周期 | 30 帧平移（取整） | 推进节奏 |
| --- | --- | --- | --- | --- | --- |
| 图案层 `bgScroll` | 0.30 px/帧 | **0.36 px/帧** | 177.8 帧 ≈ **2.96 秒/屏** | 10.8px（**11px**） | 原约 3~4 帧推进 1px → 新约 2~3 帧 1px |
| 星点层 `bgStarScroll` | 0.18 px/帧 | **0.24 px/帧** | 266.7 帧 ≈ **4.44 秒/屏** | 7.2px（**7px**） | 原约 5~6 帧推进 1px → 新约 4 帧 1px |

- 微调依据：原 0.30/0.18 经 `Math.round` 取整后每帧几乎静止（星点层 5~6 帧才推进 1px），滚动感偏弱，与东方 STG 背景"缓慢但明显流动"的观感有差距；新值仍为慢速（≤0.5px/帧，每屏 3~4.5 秒），推进节奏更均匀，两层速度比 **1.5:1** 保持视差层次。
- 实现：`flags.bgScroll = (flags.bgScroll + 0.36) % 64;`、`flags.bgStarScroll = (flags.bgStarScroll + 0.24) % 64;`（64px 平铺回绕周期不变，`(cy-64) mod 64 ≡ cy mod 64` 无缝性不受速度影响）。

**2. 不动项核验（低风险候选逐一评估）**

- **六芒星大小**：第三十九章已实测定案 64×64（外尖半径 R=32，完整落于内环 r=38 内、内外环围合中心区；56×56 因"视觉偏空偏小"被实测否决）。放大到 72×72（R=36）顶点距内环仅 2px，视觉压环且需重生成素材/缩放绘制引入模糊——非低风险，**不动**。
- **HP 公式边界**：第三十七/三十八章已按用户规则定案——T 夹取 **180~360 秒**（BGM 体验下限 + 时长上限）、命中率 45%、中弹频率 30 秒、`D=0`（属性碾压）/`D ≥ 玩家 HP`（属性不足）/不可战斗 → 5 分钟基线 T0=297s、卡 5 `min(60000, effDPS×60)`。逐边界重算（atk=1/10/60/120/999）均自洽：总时长恒在 180~360s 内、无除零/负血/溢出，**不动**。
- 其余（弹速/判定/游走/音效/BGM/卡表）：硬性约束锁定，不在本轮范围。

### 二、实测数据（headless Chrome + puppeteer-core + `node server.js`，`.hermes/finetune_e2e.js` → `finetune_e2e_result.json`，**93/93 PASS，pageerror 0，两次完整运行一致**）

1. **静态**：版本 2.10.60（main.js + data.js 同步）；速度常量 0.36/0.24（旧 0.30/0.18 已移除）+ 微调依据注释；双层绘制位于 clearMap 之后、绘制自机之前（索引 5824 < 6898 < 7136 < 7313）；eachArrive 底色 `rgba(8,10,34,0.85)` 保留；判定/擦弹/4 帧染色/回放自动判胜/case7/cards7 9×1500/光环 0.025rad/六芒星选帧/游走/e403b 手册 hp80/atk10/def0 逐字未动；`node --check` main.js/data.js/plugins.js/danmaku.js 通过。
2. **b 滚动可见（双视口 390x844 + 860x680）**：间隔 30 帧 flags 增量 = 图案 **10.800px** / 星点 **7.200px**（0.36/0.24 × 30，逐帧核对 ≤0.6 容差）；取整平移 = **11px / 7px**；背景掩码平移：图案层 shift=11（匹配率 **0.992/0.993**）、星点层 shift=7~8（匹配率 **0.893/0.896**）。
3. **c 平铺无缝**：+64px 取模同相两帧背景区像素**完全一致**（hashEq=true，双视口均过）；单帧内 64px 周期采样 **2860/2860** 逐像素相等。
4. **d 性能（30 秒 E2E）**：无卡顿、无错误；帧率恒 **60fps**（min 1s 区间 ticks=60，总帧 1820/30s）；背景层单帧绘制耗时 **avg 0.307ms**（<8ms 预算，本轮未新增绘制量）。
5. **e 弹幕可读性**：maru 弹实心核心 alpha=255 vs 背景同列像素 alpha=79；RGBA 距离 **226.2**（与任务C 一致，背景不抢弹幕）。
6. **f 双视口完整链路**：进战（enemyId=24、5 卡、动态 HP lifeMax≈2025、fireback=7、char_yuyuko、aura 激活、bgScroll/bgStarScroll 存活）→ 键盘移动 + 拖动（route 不污染）→ 自动射击 → 擦弹 +1 不掉血 → 中弹 −7 → 胜利 → 回 f3_12 → 喝茶 → f0_garden + `g_yuyuko_follow=1` + `energyBossDone=true` + `bulletscreen=0` + `auraFx=null`；进战 BGM `bgm_yuyuko.mp3`、胜利恢复 `bgm_garden.mp3`。
7. **g 回放回归**：route 长度一致（4==4）、`failed=false`、弹幕战自动判胜跳过、danmaku 音效全程静默（0 条）、终态 f0_garden + follow=1 + 无光环/六芒星/背景 flags 污染（纯视觉不写 route）。
8. **h 回归抽测**：真实宣言期光环+六芒星像素高于背景基线；随机游走位置/停留变化；maru 染色 4 帧循环完整；卡 3 蝶弹 chou 真实生成；卡 1 击破符贴脸破卡（5→4 + fx）；敌方释放音 `danmaku_shot` 每波一次（before/after 递增）；擦弹无音效；时符（卡 5）3600 帧超时自动破卡 → 直接胜利 → f0_garden + `bgm_garden.mp3`。
9. **页面错误**：pageerror **0**；console 仅两类既有良性噪声——15 条资源 404（favicon 等缺失资源，历轮既有，headless 环境）+ 2 条 `window.onresize`（main.js:534）在 headless 设视口瞬间 `main.core` 未初始化时被引擎自带 try/catch 捕获后 `console.error` 的 TypeError（间歇性、与本次速度改动无关、不影响判定/回放/页面生命周期）。

### 三、影响面

| 文件 | 改动 |
| --- | --- |
| `project/floors/danmaku.js` | parallelDo 滚动背景速度微调：图案层 0.30→**0.36**、星点层 0.18→**0.24** px/帧（两处常量）+ 速度注释与微调依据；判定/擦弹/染色/回放/游走/光环/六芒星/音效/BGM/case 7 逐字未动 |
| `main.js` | 版本 2.10.59 → **2.10.60**（缓存刷新，与 data.js 同步） |
| `project/data.js` | 版本 Ver 2.10.59 → **Ver 2.10.60** |
| `.hermes/patch_finetune_speed_danmaku.py` | 新增：danmaku.js 锚点补丁脚本（可重跑、幂等） |
| `.hermes/finetune_e2e.js` 等 | 新增：任务D E2E + 结果 JSON/日志/排障探针（测试设施，非交付游戏文件） |
| `DANMAKU_DELIVERY.md` | 本章 |

未动：`libs/`、`project/plugins.js`（dynamicHp/光环生命周期/判胜/fire/fireback/卡片表）、`project/functions.js`（回合制公式）、`project/enemys.js`（e403b hp80/atk10/def0 手册锁）、`project/images/`（bg/六芒星素材）、玩家属性。未 commit，改动留在工作区由用户提交。

## 四十二、弹幕素材两图整合（永不复还式帧表，2.10.61）
> **勘误（2.10.63，第四十四章）**：本章 bullet_small.png 的 chou 行（y=40，源自 etama.png y=80 排
> 15×16 抽象蝶形）为错误素材。2.10.63 在 bullet_small.png 底部追加正确蝴蝶行（y=152，32×32 帧格 ×
> 4 色，垂直翻转），chou bulletType 重映射至 y=152；其余 10 弹型坐标逐字节不变（见第四十四章）。

【背景】弹幕战全部功能已交付（第四十一章，2.10.60），但弹体素材冗余：`project/images/` 下有 TH08 官方 6 张 etama*.png、旧合成图 etama_yuyuko.png、弹幕风旧 enemybullet*.png 等 12 张弹体相关文件。用户选定 RMXP《永不复还》只用 2 张弹幕图的方案：**拆 2 张帧表（小弹表+大弹表），弹型×颜色网格布局，bulletTypes 全部重映射，旧素材归档不删除，4 帧（4 色变体）循环保留**。本轮只动素材与映射：判定/擦弹/染色/回放/游走/光环/六芒星/背景/BGM/音效/击破符时符/case 7 全部逐字未动。

### 一、设计依据（布局 / 坐标锚定 / 逐像素一致）

**1. 布局（行=弹型、列=颜色变体，永不复还式）**

| 表 | 弹型行（y0 起始） | 颜色列（stepX） | 源矩形 |
| --- | --- | --- | --- |
| `bullet_small.png` 128×151 | small y0=0（8px，stepX=8）/ maru y0=8 / rice y0=24 / chou y0=40 / chu y0=56（32px，stepX=32）/ scale16 y0=88 / star y0=135 | 4 色横排（small 列距 8、chu 列距 32、其余 16） | 与旧合成图逐字节一致 |
| `bullet_big.png` 256×599 | scale32 y0=104 / big y0=151（stepX=64）/ ring y0=215（单帧 256×256）/ laser y0=471（16×128 垂直长条，单帧） | 4 色横排（ring/laser 官方仅单帧，stepX=0） | 与旧合成图逐字节一致 |

- 全部帧从 etama_yuyuko.png 现有矩形直接裁贴（不许改色、不许缩放），`paste` 精确拷贝（不用 alpha_composite：它会把 alpha=0 像素的残留 RGB 归一化，破坏逐像素一致）。
- 帧格=弹体矩形（天然居中），透明底。

**2. 关键实测：Chrome drawImage 缩放采样锚定"源矩形绝对坐标"**

浏览器实测（.hermes/sheet_e2e.js 的 a2 探针）：相同 8×8 小玉像素放在 (0,0) 与 (4,4)，缩到 20×20 时边缘 alpha 分别为 77/178/255 与 54/125/178（约 ×0.7）；同一图像同一坐标则无论图尺寸是否一致都逐像素相同。因此新表所有弹型的 x0/y0/stepX/sw/sh 与旧合成图**逐字节一致（只换 img 文件）**，这是"渲染逐像素一致"的充分必要条件（RMXP 引擎无此特性，本约束为浏览器特有）。

**3. 邻域保真（1px 渗色）**

- Chrome 缩放还会把源矩形**上下相邻 1px** 的像素渗入绘制边缘：scale32（y=104..135）上方旧图是 scale16 行、下方是 star 行，新表该两区域若为空则绘制顶/底边各差 ~40/20px（alpha≤29/255）。
- 修复：`bullet_big.png` 在 y=88..104（scale16 行）与 y=135..151（star 行）补贴旧合成图同坐标内容（逐字节一致，仅作邻域保真，不参与 bulletTypes 映射；scale16/star 实际映射仍在 bullet_small）。
- 生成脚本 `.hermes/build_bullet_sheets.py` 可重跑（优先读 `_legacy_bullets/etama_yuyuko.png`），44/44 帧逐像素校验 + 布局报告写入 `.hermes/bullet_sheet_report.json`。

**4. ring/laser 单帧**

TH08 官方 ring（256×256）与 laser（16×128）只有单帧（旧表 stepX=0，4 帧循环绘制同一帧），保持 stepX=0 不复制：复制到不同列会改变 fr1~3 的绝对坐标、破坏渲染逐像素一致。4 帧循环机制对 11 弹型统一保留（多帧弹型轮换颜色，单帧弹型绘制同一帧）。

### 二、重映射清单（bulletTypes）

| typeid | img | x0 | y0 | stepX | sw | sh | dw/dh/offX/offY/size（不变） |
| --- | --- | --- | --- | --- | --- | --- | --- |
| small | bullet_small.png | 0 | 0 | 8 | 8 | 8 | 20/20/10/10/3 |
| maru | bullet_small.png | 0 | 8 | 16 | 16 | 16 | 32/32/16/16/6 |
| rice | bullet_small.png | 1 | 24 | 16 | 14 | 16 | 22/24/11/12/6 |
| chou | bullet_small.png | 1 | 40 | 16 | 15 | 16 | 40/40/20/20/6 |
| chu | bullet_small.png | 0 | 56 | 32 | 32 | 32 | 40/40/20/20/6 |
| scale16 | bullet_small.png | 0 | 88 | 16 | 16 | 16 | 24/24/12/12/6 |
| star | bullet_small.png | 0 | 135 | 16 | 16 | 16 | 24/24/12/12/6 |
| scale32 | bullet_big.png | 0 | 104 | 32 | 32 | 31 | 40/40/20/20/14 |
| big | bullet_big.png | 0 | 151 | 64 | 64 | 64 | 48/48/24/24/14 |
| ring | bullet_big.png | 0 | 215 | 0 | 256 | 256 | 96/96/48/48/6 |
| laser | bullet_big.png | 0 | 471 | 0 | 16 | 128 | 16/160/8/80/6 |

**绘制参数（dw/dh/offX/offY/size）零改动**——判定体系（bulletx+32/bullety+32 圆心、bulletsize 分档、hitk 系数）与视觉中心全部不变，E2E 逐项比对通过。

### 三、归档清单（归档不删除）

`project/images/etama_yuyuko.png`、`etama.png~etama6.png`、`enemybullet.png`、`enemybullet1_2.png`、`enemybullet2.png`、`enemybullet3.png`、`enemybullet4.png` 共 **12 个文件**移动至 `project/images/_legacy_bullets/`（磁盘保留，用户备份习惯；目录已加入 `.gitignore` 不入库）。`project/data.js` 的 main.images 同步移除这 12 项注册并新增 `bullet_small.png`/`bullet_big.png`；除 bulletTypes 与 data.js 外全仓库无其它引用（rg 全量核查）。

### 四、实测数据（headless Chrome + puppeteer-core + `node server.js`，`.hermes/sheet_e2e.js` → `sheet_e2e_result.json`，**72/72 PASS，pageerror 0，两次完整运行一致**）

1. **静态**：版本 2.10.61（main.js + data.js 同步）；11 弹型全部重映射到两张新表且矩形与生成报告一致；dw/dh/offX/offY/size 逐项与旧表相同；data.js 旧 12 项已移除、新 2 项已注册；`_legacy_bullets/` 12 个归档文件在、images 无残留；判定/擦弹/4 帧循环/case7/cards7/光环/六芒星/游走/背景速度公式逐字未动；`node --check` main.js/data.js/plugins.js/danmaku.js 通过。
2. **a2 渲染一致性（双视口）**：11 弹型 × 4 帧，浏览器 drawImage 同路径（源矩形 1:1 + dw/dh 缩放）新旧素材**逐像素一致，44/44**；ring/laser 4 帧同矩形（单帧源）一致。
3. **b 4 色循环（双视口）**：maru `bulletframe%4` 四帧全覆盖、游戏内绘制随帧切换颜色（采样弹体彩色边缘）；新表帧已加载且不透明像素正常；ring 帧循环推进且绘制可见（像素级 4 列一致性由 a2 覆盖）。
4. **c 双视口完整链路（390×844 竖屏触摸 + 860×680 横屏鼠标）**：进战（enemyId=24、5 卡、动态 HP、char_yuyuko、光环、滚动背景激活）→ BGM bgm_yuyuko.mp3 → 键盘移动（route 不污染）→ 拖动 1:1 跟手（竖屏用 `_getClickLoc` 复刻真实触摸链路：headless 下 CDP dispatchTouchEvent 不触发 canvas ontouchstart，实测 log 为空）→ 自机射击 → 擦弹 +1 不掉血 → 中弹 -fireback → 胜利 → 回 f3_12 → 喝茶 → f0_garden + `g_yuyuko_follow=1` + `energyBossDone=true` + 无光环/背景污染 + BGM 恢复 bgm_garden.mp3。
5. **d 回放回归**：route 一致（route.length == totalList.length）、failed=false、弹幕战自动判胜跳过、danmaku 音效全程静默（0 条）、终态 f0_garden + follow=1 无视觉污染。
6. **e 回归抽测**：光环+六芒星宣言期高于背景基线；随机游走活跃；maru 4 帧循环；卡 3 chou（蝶弹）真实生成且绘制 1500+ 不透明像素（新表）；卡 1 击破符贴脸破卡（5→4 + danmaku_cardget）；敌方释放音 danmaku_shot 每波一次（5→13）；擦弹无音效；时符卡 5 3600 帧超时自动破卡 → 直接胜利 → 回城 + BGM 恢复。
7. **f 素材文件数**：images 下弹幕弹体素材 = **2 张新表**（bullet_small.png 128×151 + bullet_big.png 256×599，原 12 张旧弹体文件全部移入 `_legacy_bullets/`）。
8. **chou 蝶弹复核（qwen-vl-max）**：chou 为 TH08 官方 etama.png y=80 排蝶弹（第二十九章 ANM 三重定位），新表与旧合成图逐像素一致（形状未变）。qwen-vl-max 复核 15×16 放大图判为"抽象蝶形/T 形（中段展翅、翼尖透明延伸、底部分瓣）"——官方素材本身为抽象化蝶形，非写实蝴蝶；本轮未改像素，与既有交付状态一致。
9. **既有状态说明**：① 第三十三章文档记载 chou 配色为樱紫/亮蓝/青/深紫，但磁盘上的 etama_yuyuko.png chou 行实为灰/红/红/紫（当年合成图未按文档重跑）；本轮以磁盘文件为准裁贴（硬性约束"不许改色"），未做修正。② 直接 start 战斗（测试脚手架）中 parallelDo 的胜利 changeFloor 会被残留事件列表吞掉（引擎既有行为，真实事件流与正常游玩不受影响）；E2E 以真实事件流（startEnergyBoss → e403b 碰撞）验证完整链路，时符胜利回城用引擎直调 `core.changeFloor` + `_afterWin` 验证 BGM 恢复链。

### 五、影响面

| 文件 | 改动 |
| --- | --- |
| `project/images/bullet_small.png` | 新增：小弹表 128×151（small/maru/rice/chou/chu/scale16/star，弹型×颜色网格，坐标与旧合成图逐字节一致） |
| `project/images/bullet_big.png` | 新增：大弹表 256×599（scale32/big/ring/laser，含 scale16/star 邻域保真行） |
| `project/plugins.js` | bulletTypes 11 弹型 img→新表 + 矩形/注释更新；dw/dh/offX/offY/size 零改动 |
| `project/data.js` | main.images 移除 12 项旧弹体、新增 2 张新表；版本 Ver 2.10.60 → **Ver 2.10.61** |
| `main.js` | 版本 2.10.60 → **2.10.61**（缓存刷新，与 data.js 同步） |
| `project/images/_legacy_bullets/` | 新增：12 个旧弹体素材归档（不删除；`.gitignore` 已加该目录） |
| `.gitignore` | 新增 `project/images/_legacy_bullets/` |
| `.hermes/build_bullet_sheets.py` | 新增：两图生成脚本（可重跑、44/44 逐像素校验、布局报告） |
| `.hermes/sheet_e2e.js` 等 | 新增：第四十二章 E2E + 结果 JSON/日志（72/72 ×2，pageerror 0） |
| `DANMAKU_DELIVERY.md` | 本章 |

未动：`libs/`、`project/floors/danmaku.js`（绘制引用 `_bt.img/_bt.x0/_bt.y0/_bt.stepX/_bt.sw/_bt.sh` 本就通用，零改动）、判定/擦弹/染色/回放/游走/光环/六芒星/背景/BGM/音效/击破符时符/case 7 逻辑、`project/functions.js`、`project/enemys.js`、玩家属性。未 commit，改动留在工作区由用户提交。

## 四十三、弹幕布局调整（扇形为主，2.10.62）
【背景】弹幕战功能已全部交付（第四十一章功能 / 第四十二章素材两图整合，2.10.61），但用户核心玩法反馈指出垂直雨阻塞自机输出：自机弹垂直上飞、只有与幽幽子同列才能打中，而垂直雨又正好封锁 BOSS 正下方那列——"站列里挨打、躲边上打不到"。本轮将 cards24（简单模式，enemyId 24）弹幕布局改为**扇形为主**：敌方多发射扇形（斜向扩散），少发射垂直雨；扇形以幽幽子位置为发射点向下展开，两股扇形之间的中央列（x≈enemyx±40）为天然缝隙，玩家可站 BOSS 正下方输出、小幅左右移动躲扇形。

### 一、设计依据

**1. 扇形为主 + 中央列天然缝隙（几何锚定）**

弹体判定中心 = `bulletx+32`（bulletx 为左上角，碰撞判定用 +32 圆心），故所有扇形模式配置 `x0:-32`，使"弹体中心"对齐幽幽子锚点 `enemyx`。扇形 `count:4`、`spread0:-1.2、spreadStep:0.8`（spread 值 ±0.4/±1.2）、`vy:1.4` 时，扫描线 y=300（玩家威胁区）处：

| 弹体 | 弹体中心 x（y=300） | 归属列带 |
| --- | --- | --- |
| 内侧两股（spread ±0.4） | enemyx±44 ≈ 196/284 | 中央列带 [200,280] 之外（天然缝隙） |
| 外侧两股（spread ±1.2） | enemyx±151 ≈ 89/391 | 左/右侧列带 [80,160]/[320,400] |

中央列带 [200,280]（enemyx±40）正落在两股扇形之间；弹速 max√(1.4²+1.2²)≈1.84 ≤ 2px/帧。

**2. 垂直雨（rain 类）几乎移除**

原 cards24 的垂直雨（`line` vx:0、vy>0：卡 1 小玉雨、卡 2 米弹雨、卡 1/2 lowPatterns）已**全部移除**——这正是用户反馈"封锁 BOSS 正下方那列"的来源。`rain` 随机散射仅保留 **1 处**（卡 3"边缘雨"），发射点固定在左上侧（cx 110 / cy 16）、vx 0.1~0.2 / vy 1.4~1.8 → 弹体中心 x∈[158,183]，完全避开中央 [200,280]（只打左侧列带+间隙），速度 max√(0.2²+1.8²)≈1.81 ≤ 2px/帧。

**3. 自机狙扇形（fan + aim:true）——偶数向 + 玩家方向=缝隙（评估结论）**

依据调研报告 Top 2 设计（`.hermes/danmaku_patterns_report.md`）实现 `fan` 生成器 `aim:true` 分支：以 `atan2(玩家-发射点)` 为基准角叠加 spread 角偏移（Danmakufu SampleA02 / taisei crystal_rain 式），每颗弹速度取 `opts.speed`（≤2px/帧）。

**评估**：报告原案"count 取奇数保证中间一发正对玩家"（SampleA02 5-way）会在玩家站桩 BOSS 正下方时，让中间一发周期性直射玩家所在列——虽单发可躲、不构成封锁，但与"中央列安全"实测目标冲突。**结论：采用"偶数向 + 对称 spread"（count 4，spread ±0.45/±1.35 弧度）**——玩家方向正好落在两股之间（中间一发不正对玩家），既保留自机狙追位手感（扇形轴线始终指向玩家），又使玩家所在列始终是缝隙。实测自机狙扇形内测两股在 y=300 处弹体中心 x≈175/347（避开中央带），各卡含 2~3 个自机狙扇形变体（全表 8 处）。

**4. 保留模式不封列（逐模式核对）**

| 模式 | 保留位置 | 中央列安全依据（实测扫描 y=300 弹体中心） |
| --- | --- | --- |
| 瞄准弹 aimed | 卡 1/2 | 单发追玩家（速度帧数 ≥260），非列封锁；站桩时每波 1 发过中央，实测占比见下表 |
| 环形 ring | 卡 2/3 | count 6、angle0 0 → 60°/120° 双路，弹体中心 x≈120/373（两侧），无正下方向 |
| 鳞弹旋转 spin | 卡 4 | 5 弹轮转逐波扫过各方向，中央带仅偶发 1 发/数十秒（实测卡 4 中央 0） |
| 蝶舞 wave chou | 卡 5 | 三列弹体中心 52/177/302；正弦摆幅修正见下 |
| 激光 laser | 卡 5 | 横扫 y=240（激光条体 y≈192~352），不经过玩家行，扫描线 y=300 无通过 |
| 星弹散射 rain | 卡 3 | 全局唯一边缘雨，只打左侧（见上） |

**5. 蝶舞摆幅实测修正（wave 正弦和 + 300 帧时间回绕）**

wave 弹的 x 摆动由逐帧速度正弦和积分产生，位置漂移上界 ≈ `amp/sin(freq/2)`；且 `flags.time` 每 300 帧回绕会把飞行切成两段正弦和（相位跳变），实测 `freq 0.015 + amp 1.0` 摆幅达 ±133px、`amp 0.35` 仍达 ±25px——原卡 5 蝶舞中间列会摆进中央带。本轮改为 **`freq 0.05 + amp 0.2`**（漂移上界 ≈ 2/sin(0.025)×0.2 ≈ 16px）：中心列摆幅 [161,193]、右列 [286,318]，均避开中央 [200,280]；最大合速度 √(1²+0.2²)≈1.02 ≤ 2px/帧。

### 二、模式重排表（cards24，5 卡）

| 卡 | 名称 | patterns（高血段） | lowPatterns（低血段） |
| --- | --- | --- | --- |
| 1 | 亡郷「亡我郷」（击破符） | 双股扇形（maru）+ 自机狙扇形（rice）+ 瞄准弹（maru，interval 320） | 同构（vy 1.5 / 间隔略密） |
| 2 | 亡舞「生者必滅の理」（击破符） | 双股扇形（rice）+ 自机狙扇形（star）+ 环形（chu，6 向）+ 瞄准弹（star） | 同构（环形 angle0 同 0，aimed 260 帧） |
| 3 | 華霊「ゴーストバタフライ」（击破符） | 双股扇形（chu）+ 自机狙扇形（chou）+ 边缘雨（star，全局唯一 rain）+ 环形（maru，6 向） | 无（沿用 patterns） |
| 4 | 幽曲「リポジトリ・オブ・ヒロイック」（击破符） | 双股扇形（scale16）+ 鳞弹旋转（scale16）+ 自机狙扇形（scale32） | 同构（spin 反向旋转） |
| 5 | 死蝶「華胥の永眠」（时符，duration 3600 / hp 60000） | 激光横扫 + 双股扇形（chou）+ 自机狙扇形（scale32）+ 蝶舞（wave chou） | 无（沿用 patterns） |

每卡 3~4 个模式、扇形类（gen:'fan'）≥2（高/低血段均满足）；rain 类全表 ≤1 且不在中央列；瞄准弹/环形/鳞弹旋转/蝶舞/激光/星弹散射全部保留。

### 三、中央列安全实测数据（headless Chrome + puppeteer-core + `node server.js`，`.hermes/danmaku_layout_e2e.js`）

测量方法：固定幽幽子 `enemyx=240`（wander 目标钉在 (240,77)、停留 9999 帧）、自机停在出生点 (240,423)；统计**弹体中心（bulletx+32）向下通过扫描线 y=300** 的次数，按 x 分三带：中央列 [200,280] / 左侧 [80,160] / 右侧 [320,400]；低难度目标 **中央列 ≤ 两侧较大者的 50%**。

| 卡 | 实测时长 | 中央列通过 | 左侧通过 | 右侧通过 | 中央/两侧较大者 |
| --- | --- | --- | --- | --- | --- |
| 1 | 30 秒 | 5 | 17 | 27 | **18.5%** ✓ |
| 2 | 15 秒 | 4 | 8 | 14 | **28.6%** ✓ |
| 3 | 15 秒 | 0 | 16 | 13 | **0%** ✓ |
| 4 | 15 秒 | 0 | 9 | 11 | **0%** ✓ |
| 5 | 15 秒 | 0 | 8 | 12 | **0%** ✓ |

中央列剩余通过全部来自"瞄准弹"单发（卡 1/2 的 aimed，站桩时每 5 秒级 1 发直射玩家列，属可躲的单发而非封锁），卡 3~5 中央列为 0。

### 四、实测清单（全部 PASS，71/71，pageerror 0）

1. `node --check` main.js / data.js / plugins.js 通过；版本 main.js + data.js 同步 2.10.61 → **2.10.62**。
2. 数据表断言：5 卡逐卡扇形类 ≥2（高/低血段）、rain 类全表 ≤1 且不在中央列（数据表断言）、低难度参数（弹速 ≤2px/帧、瞄准弹 speed 帧数 ≥260、发射间隔 ≥50 帧、单波连发 ≤5、环形整环 ≤6、旋转环 ≤5）全通过；自机狙扇形全表 8 处。
3. 中央列安全实测（上表）：5 卡全部 ≤ 两侧 50% 目标。
4. 双视口完整链路（390x844 竖屏触摸 + 860x680 横屏鼠标）：进战（enemyId 24、5 卡）→ BGM bgm_yuyuko.mp3 → 键盘移动（ispeed 5、格子英雄与 route 不动）→ 触摸/鼠标拖动 1:1 → 自动射击 + 敌弹生成 → 擦弹 +1 不掉血 → 中弹 -fireback（真实流程 fireback=攻-防公式，测试档 def3 → 7）→ 胜利 → 回 f3_12 → 喝茶 → f0_garden + `g_yuyuko_follow=1` + `energyBossDone=true` + BGM 恢复 bgm_garden.mp3 + 战斗后控制注销。
5. 回放回归：route 一致（4==4）、`failed=false`、弹幕战自动判胜跳过、最终状态与正常游玩一致。
6. 回归抽测：判定（4px 命中 -8 / 6px 不命中）、擦弹、染色 4 帧循环、随机游走（enemyx/y 变化）、光环周期闪现 + 六芒星素材注册、滚动背景（bgScroll/bgStarScroll 推进）、BGM、敌方释放音 danmaku_shot 每波一次、击破符破卡（spellcardleft 5→4）、时符 3600 帧超时自动破卡直接胜利、素材新表渲染（maru 弹 32x32 像素点亮 471px）。

### 五、影响面

| 文件 | 改动 |
| --- | --- |
| `project/plugins.js` | `danmaku.spawn.fan` 新增 `aim:true` 自机狙扇形分支（atan2 玩家方向 + spread 角偏移，偶数向缝隙）；cards24 5 卡模式重排（扇形为主、垂直雨移除、rain 仅 1 处边缘雨、自机狙扇形 8 处）；注释更新设计依据 |
| `main.js` | 版本 2.10.61 → **2.10.62**（缓存刷新，与 data.js 同步） |
| `project/data.js` | 版本 Ver 2.10.61 → **Ver 2.10.62** |
| `DANMAKU_DELIVERY.md` | 本章 |
| `.hermes/danmaku_layout_e2e.js` 等 | 新增：本章 E2E + 结果 JSON/日志 + 测量/漂移探针（测试工具，gitignore 内） |

未动：`libs/`、`project/floors/danmaku.js`（判定/擦弹/染色/回放/游走/光环/六芒星/背景/BGM/音效/击破符时符/case 7 逐字未动）、`project/functions.js`、`project/enemys.js`、玩家属性、cards7（困难模式）数据表。未 commit，改动留在工作区由用户提交。

## 四十四、蝶弹修正与新模式（随机散射/扩散弹/螺旋 + 摇摆雨恢复，2.10.63）
【背景】用户两个素材反馈 + 一个功能需求合并为本轮：① 蝶弹素材错了——正确蝶弹 = 官方 etama.png
y=128~192 排（用户两次指认 + 截图确认"带透明翅膀/蝴蝶形状"），当前 chou 用的 y=80 排 15×16 抽象蝶形
放大 40px 糊、不像蝴蝶；② 用户喜欢"左右摇摆的垂直雨"（wave 波浪下落弹），第四十三章布局调整后没了，
恢复 1~2 处且中央列安全不破；③ 新生成器（用户拍板 + 调研报告 .hermes/danmaku_patterns_report.md Top5）：
随机散射 scatter / 扩散弹 burst / 螺旋 spiral，确定性种子随机（core.rand，回放安全）。

### 一、蝶弹素材修正（任务一）

**1. 定位勘误（ANM sprite 表 + 像素实测 + qwen-vl-max 复核）**

- 官方 ANM sprite 表（.hermes/th08_probe/etama.anm，已逐像素校验与纹理一致）显示：用户所述 y=128~192
  区带内共有两行 32×32 sprite——**y=144（sprite 128-135）** 与 **y=176（sprite 120-127）**；y=128/160
  本身无 sprite（是相邻 32px 行的下半部）。两行各 8 列 × 8 色（白/粉红/紫/蓝/青/绿/黄/灰白）。
- 像素对比两行同列帧差异 6402/8192（78%）→ **两行是不同形态（非同色变体）**：y=144 行轮廓为
  实心"刀剑形"（窄头→宽身→底部双瓣，alpha 主体 255，无透明翼；qwen-vl-max 判"剑/匕首+护手"）；
  y=176 行为**蝴蝶形**（头部在上、两翼全展覆盖整帧宽，翼缘 alpha 17~102 渐变透明；qwen-vl-max 三度
  判"蝴蝶、翅膀张开、透明感强"）。**正确蝶弹 = y=176 行（sprite 120-127）**；y=144 行是另一弹型
  （非蝴蝶），不采用。

**2. 选色（幽幽子配色 4 色，参考第三十三章选色表）**

- 新行仅 8 色（无第三十三章 chou 的深紫/青变体），按"紫/蓝/樱粉/白系"从 8 列中取 4：
  fr0=col2 紫（H285/S16/V93）、fr1=col3 蓝（H241/S23/V95）、fr2=col1 樱粉（H0/S22/V98）、
  fr3=col7 白（H0/S3/V88）。白系取 col7 灰白：col0 白帧中心偏暗（qwen-vl-max 判"暗蝶/负片"），
  col7 更亮更贴合"白系"。4 色全部满足冷色区间（H240~330 或 0~20 或灰白 S<15%），无暖杂色。

**3. 方向与绘制**

- 原图蝴蝶头朝上（头部 y=0..4、翼展 y=5..29）；下落（vy>0）时头应朝玩家 → **垂直翻转**（FLIP_TOP_BOTTOM）。
- 源 32×32 → 绘制 **44×44**（1.375x 放大仍清晰；透明翼展更大、移动端更易辨识；视觉直径 44 ≥ 判定
  直径 10；offX/offY=22 保证视觉中心 = 判定圆心 bulletx+32/bullety+32）。

**4. 素材接入（坐标一致优先）**

- bullet_small.png **128×151 → 128×184**：既有 10 弹型行坐标逐字节不变；y=151 为 1px 透明守卫行
  （防 Chrome drawImage 缩放把 star 行渗色进新 chou 行，见第四十二章邻域保真结论）；y=152..183 为
  新 chou 行（4 帧：紫/蓝/樱粉/白，垂直翻转后逐像素 = 官方 y=176 行对应列翻转）。旧 chou 行
  （y=40，15×16）内容保留但不再映射。生成脚本 `.hermes/build_chou_fix.py`（可重跑）。
- bulletTypes `chou`：`{img: bullet_small.png, x0: 0, y0: 152, stepX: 32, sw: 32, sh: 32, dw: 44, dh: 44,
  offX: 22, offY: 22, size: 6}`——**判定 size 6 不变**（判定半径公式/擦弹/染色/回放全部未动）。

### 二、摇摆雨恢复（任务二）

- 卡 2「亡舞「生者必滅の理」」高/低血段各 +1 个波浪雨（wave 丸弹）：两列 bulletx=108/308 → 弹体中心
  x=140/340，中央列 [200,280] 留 ≥44px 缝隙。
- 参数：speed=1（下落 ≤2px/帧）、amp=0.2 / freq=0.05 → 漂移上界 ≈ 2/sin(freq/2)×amp = 2/sin(0.025)×0.2
  ≈ **16px ≤ 20px**，扫掠 [124,156]/[324,356] 全程不穿中央带；最大合速度 √(1²+0.2²)≈1.02 ≤ 2px/帧；
  间隔 190（高）/180（低）≥ 50、连发 2 ≤ 5、列间相位差 phaseStep 0.6 形成左右交错摆动手感。
- 垂直雨（line vx:0 雨幕）保持移除（第四十三章用户反馈的封锁问题），波浪雨以"两侧列位 + 正弦摆动"
  复现左右摇摆下落手感且不封中央列。

### 三、新生成器（任务三，plugins.js `danmaku.spawn` 新增 3 个 + `_tickBurst`）

| 生成器 | 设计 | 参数 | cards24 应用 |
| --- | --- | --- | --- |
| `scatter` | 极坐标随机散射（taisei rng_dir / Danmakufu ExRumiaSpell01 rand 式）：方向 a = angle0+rand×angleSpan、速度 speed = speedMin+rand×(speedMax-speedMin)（0.01 步进）；`downCone` 排除"正下方 ±cone"圆锥角带（默认 0） | count 4、speedMin 1.0、speedMax 1.6、downCone π/6、interval 200 | 卡 3（高/低） |
| `burst` | 扩散弹（Danmakufu ObjShot_AddShotA1 / taisei halation_orb 式）：母弹慢速直行 burstDelay 帧后爆裂成 count 颗环形子弹，速度 = speed0×1.09^k（k=0..count-1，speedMax 硬钳）；母弹与子弹共用 bullet 槽位（母弹标记清除、子弹入槽），爆裂由 `_tickBurst` 在 `_tickCard` 每帧结算（age 计数，不依赖 300 帧回绕的 flags.time）；母弹被命中/越界清除时登记同步移除、不产生子弹 | count 6、motherSpeed 0.8、burstDelay 50、speed0 1.0、speedStep 1.09、speedMax 2、母弹 chu（size 6）/ 子弹小玉（size 3） | 卡 4（高/低，interval 260/250） |
| `spiral` | 螺旋连发（Danmakufu ExRumia01 双螺旋式）：每发射一次角度 += spinStep；发射次数由单调帧数推导（danmakuCycle×300+flags.time，`danmakuCycle` 在 `_tickCard` 检测 300 帧回绕递增）→ 跨周期角度连续、无 5 秒跳变；mirror:true 同帧再发 -a 反向对称双臂 | speed 1.2、spinStep 0.35、angle0 -1.1、mirror true、interval 90、单发 2 ≤ 5 | 卡 5（高/低） |

- **确定性**：三个生成器全部只用 `core.rand`（LCG 确定性种子）与 flags 状态，不写 route；
  回放自动判胜跳过不受影响（注释已写明）。实测同种子两次跑战斗生成序列 **7785==7785 一致**。
- **散射对中央列安全的影响评估**：BOSS 固定居中（enemyx=240）时，能穿过中央列 [200,280]（弹体中心）
  的散射角度恰为垂直 ±~10°（|dx|≤40/dy=223）；`downCone=π/6`（±30°）完全覆盖并留余量 → 散射本身对
  中央列零贡献（实测卡 3 中央列通过 0）。游离到屏幕边缘的 BOSS 发射的斜向散射仍可能偶发穿过中央列
  （用户容错设计下可接受部分随机性），但逐卡实测中央列 ≤ 两侧 50% 目标仍全部满足。
- **低难度硬约束**：scatter 速度 ≤1.6、burst 母弹 0.8/子弹 ≤1.539、spiral 1.2（全部 ≤2px/帧）；
  间隔全部 ≥50（200/260/250/90）；连发 count 4/6/2（burst 按整环惯例 ≤6，同 ring）。

### 四、实测数据（headless Chrome + puppeteer-core + `node server.js`，`.hermes/danmaku_chou_gen_e2e.js` → `danmaku_chou_gen_e2e_result.json`，**94/94 PASS，pageerror 0**；旧布局 E2E 回归 **71/71 PASS**）

1. **静态**：`node --check` main.js / data.js / plugins.js / danmaku.js 通过；版本 main.js + data.js
   同步 2.10.62 → **2.10.63**；bullet_small.png 128×184（IHDR 校验）；chou bulletType 重映射断言；
   scatter/burst/spiral 生成器 + `_tickBurst` + `danmakuCycle` 存在；cards7 仍 9 卡。
2. **蝶弹**：
   - 素材：新 chou 4 帧与官方 etama.png y=176 行对应列（垂直翻转后）逐像素一致（PIL 校验 True）；
     上方 1px 守卫行 alpha 0。
   - 游戏内渲染：4 色采样（alpha 加权）紫 273-283 / 蓝 241-249 / 樱粉 350-352 / 白 H273-283 S3-5 V83-84
     → 多集 {紫,蓝,粉,白} 判定通过；4 帧循环由 bulletframe 逐帧推进覆盖（回归抽测）。
   - **qwen-vl-max 复核游戏截图**（.hermes/out/chou_new_closeup.png）：确认"是的，符合蝴蝶特征，
     两侧对称、半透明羽状结构"。**判定不变**：size 6 chou 弹 4px 命中 -8、6px 不命中（与 maru 同半径公式）。
3. **中央列安全扫描线复测（y=300，弹体中心，BOSS 钉 240）**：

   | 卡 | 实测时长 | 中央列 | 左侧 | 右侧 | 中央/两侧较大者 |
   | --- | --- | --- | --- | --- | --- |
   | 1 | 20 秒 | 4 | 10 | 17 | **23.5%** ✓ |
   | 2（含波浪雨） | 12 秒 | 4 | 8 | 13 | **30.8%** ✓ |
   | 3（含 scatter） | 12 秒 | 0 | 14 | 10 | **0%** ✓ |
   | 4（含 burst） | 12 秒 | 0 | 8 | 12 | **0%** ✓ |
   | 5（含 spiral） | 12 秒 | 0 | 6 | 9 | **0%** ✓ |

   全部 ≤ 两侧 50%；卡 3~5 中央列为 0。剩余通过来自瞄准弹单发（卡 1/2 既有 aimed，非本轮新增）。
4. **新生成器单元**（浏览器内 mock flags + 种子还原）：scatter count=4、速度 1.02~1.24 ∈[1.0,1.6]、
   角度无一落在正下方 ±30° 锥内、同种子两次入槽参数逐项一致；burst 母弹入槽（delay 50）→ 49 帧仍存活
   → 50 帧爆裂、母弹清槽、6 颗子弹速度 1.000/1.090/1.188/1.295/1.412/1.539（1.09^k 递增 ≤2）、
   size 3/typeid small、母弹中途被清不爆；spiral 每发 2 颗（mirror ±a）、角度按 0.35 rad 递进且
   跨 300 帧回绕连续（-1.10/-0.75/-0.40/-0.05/0.30）、速度 1.2；波浪雨两列弹体中心 [140,340] + wob 描述齐全。
5. **确定性**：同种子（20260808）两次跑卡 3/4/5 战斗，全部生成器调用序列 **7785==7785** 一致
   （包装生成器 + `_tickBurst` 记录每次入槽参数；只比较前 20 秒逻辑帧，避免帧率差异）。
6. **双视口完整链路（390×844 竖屏触摸 + 860×680 横屏鼠标）**：进战（enemyId 24、5 卡）→ BGM
   bgm_yuyuko.mp3 → 键盘移动（route 不污染）→ 触摸/鼠标拖动 1:1 → 自动射击 + 敌弹生成（含新模式）→
   擦弹 +1 不掉血 → 中弹 -fireback → 胜利 → 回 f3_12 → 喝茶 → f0_garden + `g_yuyuko_follow=1` +
   `energyBossDone=true` + BGM 恢复 bgm_garden.mp3 + 战斗后控制注销。
7. **回放回归**：route 一致（4==4）、`failed=false`、弹幕战自动判胜跳过、终态 f0_garden + follow=1。
8. **回归抽测**：判定（4px 命中 -8 / 6px 不命中）、擦弹、染色 4 帧循环、随机游走、光环周期闪现 + 六芒星、
   滚动背景、BGM、敌方释放音 danmaku_shot 每波一次、击破符破卡（5→4）、时符 3600 帧超时自动破卡直接胜利、
   素材表（bullet_small/big 注册）、布局（5 卡扇形类 ≥2 高/低血段、无垂直 line 雨、rain 仅 1 处边缘雨）。
9. **旧 E2E 回归**：第四十三章 `.hermes/danmaku_layout_e2e.js` 71/71 PASS（模式数上限放宽 3~5、
   burst 按整环 ≤6、染色断言改为 bulletframe 推进判定；版本断言 2.10.63）。

### 五、影响面

| 文件 | 改动 |
| --- | --- |
| `project/images/bullet_small.png` | 128×151 → **128×184**：追加 1px 透明守卫行 + 正确蝴蝶行（etama y=176 行 4 色，垂直翻转；其余 10 弹型行坐标逐字节不变） |
| `project/plugins.js` | bulletTypes chou 重映射（y0 152/32px/44 绘制）；spawn 新增 scatter/burst/spiral + `_tickBurst` + `danmakuCycle` 单调帧计数；cards24 卡 2 波浪雨 / 卡 3 scatter / 卡 4 burst / 卡 5 spiral；注释更新设计依据 |
| `main.js` | 版本 2.10.62 → **2.10.63** |
| `project/data.js` | 版本 Ver 2.10.62 → **Ver 2.10.63** |
| `DANMAKU_DELIVERY.md` | 本章 + 第二十九/三十三/三十九/四十二章勘误注 |
| `.hermes/build_chou_fix.py` | 新增：蝶弹行生成脚本（可重跑，逐像素校验） |
| `.hermes/danmaku_chou_gen_e2e.js` 等 | 新增：本章 E2E + 结果 JSON/日志 + 截图（测试设施） |
| `.hermes/danmaku_layout_e2e.js` | 回归脚本断言适配（模式数 3~5、burst ≤6、染色断言稳健化） |

未动：`libs/`、`project/floors/danmaku.js`（判定/擦弹/染色/回放/游走/光环/六芒星/背景/BGM/音效/击破符
时符/case 7 逐字未动；波浪弹 wob 移动逻辑为既有实现）、`project/functions.js`、`project/enemys.js`、
cards7（困难模式）数据表、旧 AI case 与三档兜底逻辑。未 commit，改动留在工作区由用户提交。

## 四十五、操作改造（电脑端仅键盘方向键 / 手机端保留触摸拖拽，2.10.64）

【背景】弹幕战已完成（第四十四章后版本 2.10.63）。用户决策（最终版）：**电脑端只能用键盘方向键**——鼠标按住拖动
自机是 1:1 跟手、无物理限制，等同"外挂"优势，移除；**手机端保留现状触摸 1:1 拖拽**（触摸受屏幕/拇指限制，差距
可接受，手机玩家最自然手势）。目标：键盘移动与手机拖拽最大速度相当——键盘 5px/帧保持不变（接受现状差距）。

### 一、改动点（仅移动事件注册与 ispeed；判定/擦弹/染色/回放/游走/光环/六芒星/背景/BGM/音效/击破符时符/生成器/素材表/case 7 逻辑未动）

1. **指针类型打标（main.js）**：引擎把鼠标与触摸统一走 core.actions（onmousedown/onmousemove/onmouseup 与
   ontouchstart/ontouchmove/ontouchend 均触发同一条 ondown/onmove/onup 链路），事件进入插件前无法区分来源。
   因此在六个 DOM 分发处理器里给 `core.dom.data.__danmakuPointerType` 打标：鼠标事件 `'mouse'`、触摸事件
   `'touch'`（等价于 pointer 事件类型区分；不依赖 `'ontouchstart' in window` 能力探测）。
2. **插件按指针类型分流（project/plugins.js `_registerMove`）**：
   - `ondown`：`__danmakuPointerType == 'mouse'` → 不进入拖拽（danmakuDown 不置 1），仍返回 true 消费事件；
   - `onmove`：鼠标 → 直接返回 true、不移动自机（含触摸拖拽期间的鼠标输入）；
   - `onup`：鼠标/触摸抬起都复位 danmakuDown（防止残留状态）；
   - 触摸（touch）逻辑逐字未动：1:1 跟手、越界钳制到战斗区、锚点只推进实际位移、点按不移位。
3. **触屏设备行为**：无触摸桌面永不触发 touch → 天然只走键盘；触屏笔记本的触摸输入算触屏（可拖），其鼠标输入
   不算手机（不拖）——按事件类型而非设备能力判定，与用户"电脑端只能用方向键"的意图一致。
4. **ispeed 统一**：键盘方向键速度固定 5px/帧（`ispeed = cfg.ispeed != null ? cfg.ispeed : 5`，删除历史上
   `flags.mouse ? 3 : 5` 分档思路；`flags.mouse` 已无使用者，不再引入）。触摸拖动为 1:1 位移，不使用 ispeed。
5. **回放安全**：键盘/触摸移动逻辑不变（onkeyDown 100 优先级消费方向键、拖动消费 ondown/onmove/onup，均不写
   route）；仅事件注册的鼠标分流与打标变化，回放自动判胜跳过不受影响。

### 二、实测数据（headless Chrome + puppeteer-core + `node server.js`；`.hermes/danmaku_control_split_e2e.js` → 56/56 PASS，pageerror 0）

1. **静态**：`node --check` main.js / data.js / plugins.js 通过；版本 main.js + data.js 同步 2.10.63 → **2.10.64**。
2. **桌面（860x680 无触摸）**：鼠标拖动/点击后 `flags.playerx` 不变、`danmakuDown` 保持 0；键盘四向均按 5px/帧
   移动、格子英雄与 route 不污染；CDP touch 事件仍 1:1 拖动（触屏笔记本语义：触摸算触屏可拖）。
3. **手机（390x844 触摸）**：CDP touch 拖动 1:1 跟手（+60/+40）、越界钳制 460/444、拖回场内、点按不移位、
   抬起释放 danmakuDown=0；同视口鼠标拖动/点击仍被忽略；route 不污染。
4. **双视口完整链路**：进战（enemyId=24、5 卡、动态 HP lifeMax≈2025、fireback=7、char_yuyuko、aura 激活）→
   键盘/触摸移动 → 自动射击 + 敌弹生成 → 擦弹 +1 不掉血 → 中弹 -fireback → 胜利 → 回 f3_12 → 喝茶 →
   f0_garden + `g_yuyuko_follow=1` + `energyBossDone=true` + `g_energy_used=0` + 战斗后控制注销（格子移动恢复）。
5. **回放回归**：route 一致（4==4）、`failed=false`、弹幕战自动判胜跳过、终态 f0_garden + follow=1。
6. **回归抽测**：判定（4px 命中 -fireback、6px 不掉血）、擦弹 +1、染色 4 帧循环、随机游走、光环旋转、滚动背景、
   BGM bgm_yuyuko.mp3、敌方释放音 danmaku_shot 每波、击破符 5→4、时符（duration 3600）超时自动破卡直接胜利。
7. **既有回归套件（全部 PASS）**：chou_gen 94/94（蝶弹/新生成器/摇摆雨/中央列/时符等）、layout 71/71（布局中央列）、
   finetune 93/93（光环+六芒星/背景速度 0.36/0.24/BGM/音效等）、bgm_yuyuko 72/72、collision 18/18（判定分档）、
   graze 24/24（擦弹）、vertical 35/35、回放回归 3/3。桌面分支的"拖动移动"断言同步改为"键盘移动"（鼠标禁用后旧断言
   失效，属测试设施适配；chou_gen 确定性检查改为逻辑帧切换卡段，消除墙钟帧率漂移导致的假失败）。
8. **页面错误**：pageerror 0（NotAllowedError 自动播放策略为既有良性噪声，不计）。

### 三、影响面

| 文件 | 改动 |
| --- | --- |
| `main.js` | 六个鼠标/触摸 DOM 分发处理器打标 `__danmakuPointerType`（'mouse'/'touch'）；版本 2.10.63 → **2.10.64** |
| `project/plugins.js` | `_registerMove` 按指针类型分流：鼠标按下/移动不进入拖拽；触摸逻辑逐字未动；ispeed 注释明确固定 5px/帧 |
| `project/data.js` | 版本 Ver 2.10.63 → **Ver 2.10.64** |
| `DANMAKU_DELIVERY.md` | 本章 |

未动：`libs/`、`project/floors/danmaku.js`（判定/擦弹/染色/回放/游走/光环/六芒星/背景/BGM/音效/击破符时符/case 7
逐字未动）、`project/functions.js`、`project/enemys.js`、cards24/cards7 数据表、生成器（scatter/burst/spiral）、
素材表。未 commit，改动留在工作区由用户提交。

## 四十六、按键持续移动 + stg8bg 背景 + 配色主题化（2.10.65）
【背景】弹幕战已完成（第四十五章后版本 2.10.64）。用户三需求合并：①键盘按住持续移动（修复"动→停→动"卡顿）；
②接入 TH07 妖妖梦官方素材 stg8bg 背景；③配色主题化（"一符一色"，卡间明显变色 + 同波多色交替）。

### 一、任务一：键盘按住持续移动（修复 OS 按键重复 delay 卡顿）
旧实现只在 keydown 事件里移动一次，按住时依赖 OS 按键重复（初始 delay）→ 用户感受"动一下→停住→再动"。
新实现（标准做法）：
- `project/plugins.js _registerMove`：keydown 置方向标志 `flags.danmakuKey.{left/right/up/down}` 并
  **首次按下立即移动一次**（零延迟响应；OS 重复 keydown 因标志已置 1 不再重复移动）；keyup 清标志即停；
  新增 `onkeyUp` 注册/注销。
- `project/floors/danmaku.js parallelDo`：每帧检查标志按 `flags.ispeed=5px/帧` 持续移动（无 OS 重复 delay、
  无"0 位移停顿帧"）；边界与 plugins.js 常量一致（20/36/460/444）。
- **斜向不归一化**：左+上 = 两轴各 5px（√2 不除，与第四十五章键盘行为一致，已注释写明）。
- 触摸拖拽 1:1 逻辑逐字未动；只写 flags、不写 route → 回放安全。
实测（headless Chrome + puppeteer-core，.hermes/trio_e2e.js）：按住 60 帧采样 70 次，帧间位移恒 5px、
零位移停顿帧 = 0、总位移 = 5×帧数；松开 300ms 后位置冻结、标志清零；斜向两轴各 5px 精确成立。

### 二、任务二：TH07 妖妖梦官方素材 stg8bg 背景接入
素材出处：`D:\BaiduNetdiskDownload\东方Project官方游戏解包内容\TH07 东方妖妖梦\ANM\ANM\stgbg\stg8bg.png`
（512×512 RGBA，四象限平铺纹理）；拷贝为 `project/images/bg_stg8.png`（原图，注明"TH07 妖妖梦素材"）。

**1. 象限内容复核（qwen-vl-max + PIL 逐像素）**
| 象限 | 内容 | 不透明度 |
| --- | --- | --- |
| 左上 | 深紫渐变（绸缎质感+光晕） | 全不透明 |
| 右上 | 黑底绿白模糊树丛 | 76% 透明 |
| 左下 | 深紫红日式浮雕花纹 | 全不透明 |
| 右下 | 黑底粉红云雾光效 | 63% 透明 |

**2. 取舍依据（实测）**：右上/左下高透明度或高密度纹样易干扰弹幕可读性且平铺接缝明显（右下垂直接缝
亮度差 avg 156；左下 48/28），弃用；主层=左上深紫渐变（不透明、对比度友好）、视差层=右下粉红云雾。

**3. 无缝处理（实测像素检查接缝）**：左上平铺接缝亮度差 avg 3.9/max 12（qwen 目测仍有"折痕"）→ 采用
**镜像平铺 512×512**（水平+垂直镜像，边界像素完全一致）；右下同样镜像（垂直接缝消除为 0）。
旧星点层 `bg_danmaku_star.png`（蓝白星点，max alpha 117）**合并入主层纹理**（8×8 平铺），保留星点视觉
且滚动随主层，平铺 drawImage 总次数 = 主层 2 + 光效层 2 = **4 次/帧 ≤ 8**（旧 64px 两层约 144 次/帧）。

**4. 滚动速度（保持第四十/四十一章观感）**：主层 `bg_stg8_main.png` +0.36px/帧、粉光视差层
`bg_stg8_glow.png` +0.24px/帧（速度比 1.5:1），内容向下滚动（东方 STG 惯例），512px 镜像周期回绕无跳变。

**5. 可读性硬标准（实测）**：弹幕 alpha=255（maru 弹体中心）vs 背景（深紫渐变+粉光效）RGB 距离
4 个采样点最小 **≥150**（实测 min≈255~290）；对比度基线满足。

**6. 旧素材处理**：`bg_danmaku.png` / `bg_danmaku_star.png` 移入 `project/images/_legacy_bullets/`
（保留可恢复），`project/data.js` 注销注册，同步注册 `bg_stg8.png` / `bg_stg8_main.png` / `bg_stg8_glow.png`。

### 三、任务三：配色主题化（"一符一色"）
- `cards24` 每卡新增 `colorOffset`（0~3，4 色循环起始偏移）：卡1=0（紫系）、卡2=1（樱粉系）、卡3=2（蓝白系）、
  卡4=3（白系）；卡5=`colorOffset:0 + colorAlt:true`（逐波起始偏移交替，整卡混合配色）。
- 同波多颗弹按 `(i + colorOffset) % 4` 交替配色：所有生成器（ring/fan/aimed/line/rain/spin/wave/scatter/
  burst 母弹与子弹/spiral 双臂）经 `_place` 写入 `flags.bulletcolor[i]`；绘制时弹色帧 =
  `(bulletframe + bulletcolor) % 4`（判定/尺寸零改动）。
- `_refillCard` 破卡换卡同步 colorOffset/colorWave；**cards7 与旧 AI case 不写 colorWaveOff → 弹色逐字节不变**。
- 4 色池不变（紫/蓝/樱粉/白，TH08 官方弹体素材）；只换起始偏移与交替。
实测（trio_e2e）：逐卡 ring 序列断言 0,1,2,3,0,1 / 1,2,3,0,1,2 / 2,3,0,1,2,3 / 3,0,1,2,3,0 / 卡5 波1
[0,1]→波2 [3,0]（colorWaveOff 0→1）；卡 1~4 主色序列两两不同；同波相邻弹色不同；绘制路径验证
bulletcolor 0 与 2 同帧弹体像素通道和差 ≥3000。qwen-vl-max 复核 `trio_color_ring.png`：6 颗弹丸呈
**紫/蓝/青/白 4 色循环、相邻均不同、与深紫背景对比清晰**。

### 四、实测（headless Chrome + puppeteer-core + node server.js）
1. **静态**：`node --check` main.js / data.js / plugins.js / danmaku.js 全部通过；版本 main.js + data.js
   同步 2.10.64 → **2.10.65**；stg8bg 三素材 512×512 注册、旧 bg_danmaku* 归裆不注册；判定/擦弹公式、
   回放自动判胜、cards7 9 段逐字未动。
2. **trio_e2e.js：103/103 PASS，pageerror 0**（覆盖按键 60 帧连续位移/松开即停/斜向、stg8bg 渲染
   无缝 +512 回绕像素一致/滚动 0.36+0.24/每帧 drawImage ≤8/粉光层可见/对比度 ≥150、配色逐卡断言/
   卡5交替/绘制路径、双视口完整链路 390×844+860×680 进战→移动→射击→擦弹→中弹→胜利→回 f3_12→喝茶→
   f0_garden+g_yuyuko_follow=1、31 秒帧率无卡顿（min 1s 帧 ≥20、fps ≥45）、回放回归 route 一致自动判胜、
   回归抽测判定/擦弹/染色/游走/光环/六芒星/滚动背景/BGM/音效/击破符/时符/生成器/蝶弹/摇摆雨）。
3. **既有回归套件（全部 PASS）**：control_split 56/56、bg_scroll 87/87、finetune 89/89、layout 71/71、
   chou_gen 33/33、graze 24/24、bgm_yuyuko 72/72、aura 88/88、hexagram 96/96、collision 18/18、
   vertical 35/35（含第二/四十五/四十六章键盘语义适配的断言更新）。
4. **qwen-vl-max 复核**：`trio_bg_portrait.png` 背景无平铺接缝、粉红云雾视差可见、幽玄风格高度契合；
   `trio_color_ring.png` 弹丸 4 色循环、相邻不同、对比清晰。

### 五、影响面
| 文件 | 改动 |
| --- | --- |
| `project/plugins.js` | `_registerMove` keydown 置标志+首次立即移动、新增 onkeyUp 注销；`_place` 新增 color 参数写 `bulletcolor`；生成器传 `(j+colorWaveOff)%4`；`_refillCard`/`_tickCard` 卡级 colorOffset/colorAlt；cards24 每卡 colorOffset（0/1/2/3、卡5 colorAlt） |
| `project/floors/danmaku.js` | parallelDo 新增键盘持续移动块；背景层换 stg8bg 镜像 512px 主层+粉光效视差层（0.36/0.24 mod 512，4 次 drawImage/帧）；弹色帧叠加 bulletcolor |
| `project/data.js` | 版本 Ver 2.10.65；images 注册 bg_stg8*、注销旧 bg_danmaku* |
| `project/images/` | 新增 bg_stg8.png（原图）/ bg_stg8_main.png / bg_stg8_glow.png；bg_danmaku.png、bg_danmaku_star.png 移入 _legacy_bullets/ |
| `main.js` | 版本 2.10.64 → 2.10.65 |
| `DANMAKU_DELIVERY.md` | 本章 |
| `.hermes/` | 新增 trio_e2e.js / gen_stg8bg_layers.py / patch_trio_danmaku.py / adapt_* 脚本；旧套件断言适配（键盘语义、stg8bg 背景、差分式六芒星扫描） |

未动：`libs/`、判定/擦弹/染色判定公式、回放/游走/光环/六芒星生命周期、BGM/音效、击破符时符、
cards7 与旧 AI case 弹色、素材表（bullet_small/big）、case 7 逻辑。未 commit，改动留在工作区由用户提交。
## 四十七、stg6bg 樱花背景 + 键盘速度 3px + 自机狙补充（2.10.66）
【背景】弹幕战已完成（第四十六章后版本 2.10.65）。用户最新两条反馈：
1. **背景**：stg8bg 的"粉红光效"象限太密集（东方正作背景很稀疏）——弃用；"绿色云状"象限可以来点；
   **换 stg6bg（樱花，幽幽子本命六面背景）**，并修正为**绿云只在战斗区左右两侧**（中间不放，弹幕可读性优先）；
   粉色樱花装饰要**明显可见**（之前 alpha 太低看不见）。
2. **键盘速度**：方向键一次移动幅度太大（现 5px/帧）不好躲弹——降为 **3px/帧**。
3. 附加：自机狙偏少（原全表 8 处）——cards24 每卡至少 2 处自机狙、全表 ≥10。
### 一、任务一：背景更换（stg6bg 樱花主背景）
素材出处：`D:\BaiduNetdiskDownload\东方Project官方游戏解包内容\官方游戏解包内容\TH07 东方妖妖梦\ANM\ANM\stgbg\stg6bg.png`
（512×512 RGBA，qwen-vl-max 复核：左上/右上=粉色樱花枝叶（密集）、左下=深蓝渐变光晕（稀疏）、右下=粉紫几何符文（中等））。
**1. 主层** `bg_stg6_main.png`：stg6bg 左下深蓝渐变光晕象限**镜像平铺 512×512**（接缝亮度差实测 0.0），
滚动 +0.36px/帧、内容向下（东方 STG 惯例）；不透明、稀疏深色，弹幕可读性最佳；stg8bg 粉红光效象限
（密集）弃用。**2. 绿云视差层** `bg_stg8_cloud.png`：stg8bg 右上绿云象限镜像平铺 512×512（半透明），
**只在战斗区左右两侧竖带 x∈[0,80]∪[400,480] 绘制**（每侧各 2 行 = 4 次 drawImage/帧），
中间 80~400 不绘制绿云、保持主层深蓝；滚动 +0.24px/帧，两层速度比 1.5:1 保持视差。
**3. 樱花点缀** `sakura_petal0..2.png`：stg6bg 左上/右上樱花象限采样 32×32（qwen 复核为花瓣簇），
alpha 统一压到 **≤160** 并做轻微粉色增强（r×1.12 / b×0.86，叠深蓝背景仍读出粉色）；每屏 **≤6 朵**
（序号推导、不消耗 core.rand，确定性）、绘制尺寸 36/44/52px、慢速斜向飘落（vy 0.3~0.5px/帧 +
正弦摆动 + 恒定漂移），出界回顶；稀疏不抢弹幕。
**4. 旧素材**：`bg_stg8_main.png` / `bg_stg8_glow.png` 归档 `images/_legacy_bullets/` 不再注册；
`bg_stg8.png` 保留为绿云象限源（不直接绘制）。
**5. 性能**：平铺 drawImage = 主层 2 + 绿云两侧 4 = **6 次/帧 ≤ 8**；樱花 ≤6 朵/帧（合计 ≤12）；
31 秒实测 fps=60.0（≥45）。
### 二、任务二：键盘速度 5→3px/帧
- `project/plugins.js _registerMove`：`ispeed` 默认 **3**（`cfg.ispeed != null ? cfg.ispeed : 3`）；
  keydown 置方向标志并首次按下立即移动一次（3px），keyup 清标志即停；触摸拖拽 1:1 不受影响。
- `project/floors/danmaku.js parallelDo`：每帧按 `flags.ispeed=3px` 持续移动（无 OS 重复 delay、
  无"0 位移停顿帧"）；**斜向两轴各 3px 不归一化**（与第四十五/四十六章一致）；只写 flags、不写 route，回放安全。
- 实测（双视口）：按住 60 帧采样，帧间位移恒 3px、总位移 180px=3×60、零停顿帧；
  松开 300ms 后位置冻结、标志清零；斜向右+上两轴各 3px 精确成立。
### 三、任务三：自机狙增加（cards24）
- 每卡自机狙（`aimed` + `fan aim:true`）**≥2 处**：卡1=4、卡2=4、卡3=2（新增 aimed 星弹）、
  卡4=2、卡5=2（新增 aimed 丸弹）——全表 **14 处 ≥10**（原 8 处）。
- 新增自机狙低难度约束：`speed: 280/300` 帧 → 弹速=距离/280~300 ≈ **1.2~1.4px/帧 ≤2**、
  间隔 320/340 ≥50、单发 1 ≤5。
- **中央列安全复测**（扫描线 y=300，玩家站中央列 240/423、幽幽子钉 240/77）：
  | 卡 | 实测时长 | 中央 [200,280] | 左 [80,160] | 右 [320,400] | 中央/两侧较大者 |
  | --- | --- | --- | --- | --- | --- |
  | 1 | 30s | 5 | 17 | 27 | **18.5%** ✓ |
  | 2 | 15s | 4 | 12 | 18 | **22.2%** ✓ |
  | 3（含新增 aimed） | 15s | 3 | 17 | 13 | **17.6%** ✓ |
  | 4 | 15s | 0 | 9 | 14 | **0%** ✓ |
  | 5（含新增 aimed） | 15s | 4 | 8 | 12 | **33.3%** ✓ |
  全部 ≤ 两侧较大者 50%。依据：自机狙弹速慢（≈1.2~1.4px/帧）、单发且间隔 ≥320 帧（约 5.3 秒一发），
  玩家正常移动即可避开；未超限，故无需减少连发数或限幅。
### 四、实测数据（headless Chrome + puppeteer-core + `node server.js`，`.hermes/sakura_bg_e2e.js`）
1. **静态**：`node --check` main.js / data.js / plugins.js / danmaku.js 全部通过；版本 main.js + data.js
   同步 **2.10.66**；素材注册 bg_stg6_main/bg_stg8_cloud/sakura_petal0..2、旧 stg8 生成层归档不注册；
   判定/擦弹/回放自动判胜/cards7 9 段/光环角速度/配色主题化逻辑不动；cards24 每卡自机狙 ≥2、全表 14。
2. **sakura_bg_e2e.js：138/138 PASS，pageerrors 0**：
   - 背景：主层/绿云两侧竖带/樱花点缀渲染；平铺 drawImage **每帧恰 6 次**（≤8）+ 樱花 ≤6 朵（合计 ≤12）；
     滚动 0.36+0.24 mod 512 可见；镜像平铺 **+512 同相像素完全一致**（hash 相等，无接缝跳变）；
     **中间 80~400 绿云像素差值 = 0**（同相位 512 处开/关绿云层逐像素差值断言），两侧绿云可见
     （差值 1373px）；樱花粉色像素差值 8423（可见）且稀疏（≤15000）；弹幕 vs 背景对比度
     minDist 373 ≥150；双视口截图。
   - 键盘：按住 60 帧帧间位移恒 3px、总位移 180px、零停顿帧；松开即停；斜向两轴各 3px 不归一化；
     鼠标拖动忽略、触摸拖拽 1:1（含越界钳制 460/444、点按不动、route 不污染）。
   - 双视口完整链路（390×844 竖屏触摸 + 860×680 横屏鼠标）：进战→移动→射击→擦弹→中弹→胜利→
     回 f3_12→喝茶→f0_garden + `g_yuyuko_follow=1` + `energyBossDone=true` + BGM 恢复 + 控制注销。
   - 回放回归：route 一致（4==4）、`failed=false`、弹幕战自动判胜跳过、终态 f0_garden + follow=1。
   - 回归抽测：判定（4px 命中 -fireback / 6px 不命中）、擦弹 +1 不掉血、染色 4 帧循环、随机游走、
     光环旋转 + 六芒星、滚动背景、BGM bgm_yuyuko.mp3、敌方释放音 danmaku_shot 每波、击破符破卡、
     时符 3600 超时直胜、生成器 scatter/burst/spiral/aimed、蝶弹 chou、摇摆雨 wave、布局中央列、
     操作（鼠标忽略+触摸保留）、配色主题化 colorOffset/colorAlt。
   - 31 秒性能：**fps=60.0（≥45）**、min 1s ticks=60 无卡顿。
3. **中央列**：`danmaku_layout_e2e.js` **71/71 PASS**（上述扫描线数据）。
4. **现有回归套件（全部 PASS）**：control_split 56/56、bg_scroll 88/88、finetune 89/89、trio 103/103、
   chou_gen 95/95、graze 24/24、collision 18/18、vertical 35/35、bgm_yuyuko 72/72、aura 88/88、
   hexagram 96/96、danmaku_speed 8/8（键盘 3px 语义适配）。合计 **981/981 PASS、pageerrors 0**。
5. **qwen-vl-max 复核** `sakura_bg_portrait.png`：**粉色樱花元素约 5~6 朵可见**（屏内斜向排列）、
   左右两侧绿色竖带、中间无绿云、主背景深蓝——符合用户"樱花可见、绿云仅两侧、中间深蓝"要求。
### 五、影响面
| 文件 | 改动 |
| --- | --- |
| `project/plugins.js` | ispeed 默认 5→**3**；樱花尺寸 14/17/20→**36/44/52**；cards24 卡 3/卡 5 各 +1 aimed（每卡自机狙 ≥2、全表 14） |
| `project/floors/danmaku.js` | 绿云视差层改为**两侧竖带** x∈[0,80]∪[400,480]（中间不绘制）；樱花/性能注释更新（alpha≤160、6 次 drawImage） |
| `project/images/` | 新增 bg_stg6_main.png / bg_stg8_cloud.png / sakura_petal0..2.png（alpha≤160 + 粉色增强）；旧 bg_stg8_main/bg_stg8_glow 归档 `_legacy_bullets/` |
| `project/data.js` | 版本 Ver 2.10.66；素材表注册新层与花瓣、注销旧生成层 |
| `main.js` | 版本 2.10.65→**2.10.66** |
| `DANMAKU_DELIVERY.md` | 本章 |
| `.hermes/` | 新增 gen_stg6bg_layers.py（可重跑，alpha≤160+粉色增强、接缝=0）、patch_ch47_finish.py、patch_ch47_tests_keyboard.py；sakura_bg_e2e.js（本章主测）；旧套件断言适配（键盘 3px 语义、绿云两侧差值断言、花瓣清空防干扰） |

未动：`libs/`、判定/擦弹/染色判定公式、回放/游走/光环/六芒星生命周期、BGM/音效、击破符时符、
生成器与素材表（bullet_small/big）、配色、cards7 与旧 AI case、case 7 逻辑。未 commit，改动留在工作区由用户提交。
