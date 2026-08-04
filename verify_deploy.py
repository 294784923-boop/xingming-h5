# -*- coding: utf-8 -*-
"""
GitHub Pages 部署前验证脚本（Python 3.11，仅使用标准库）。

在部署前检查：
  1. 应被 .gitignore 忽略的路径确实被忽略（git check-ignore -q 验证）；
  2. 关键游戏文件不被忽略；
  3. 工作区干净（git status --porcelain 输出为空）；
  4. 关键部署文件存在。

全部通过时退出码为 0，任一失败时退出码为 1。
"""

import os
import subprocess
import sys

# 脚本所在目录视为仓库根目录，保证从任意位置运行时都基于正确的仓库
REPO_ROOT = os.path.dirname(os.path.abspath(__file__))

# 应被 .gitignore 忽略的路径 -> 说明（用于输出提示）
IGNORE_RULES = {
    "_probe.txt": "根目录探针文件",
    "_probe_test.txt": "探针测试文件",
    "test_write.txt": "写入测试文件",
    "_server/": "本地服务目录",
    "server.js": "本地服务脚本",
    ".hermes/": "Hermes 工具目录",
    "启动服务.exe": "本地启动服务程序",
    "_extensions/": "扩展目录",
    "Codex-H5.bat": "本地启动批处理",
    "_ins_rd.py": "安装辅助脚本",
    "project/_tmp_maps.js": "临时地图文件",
    "project/data.js.bak_shop": "商店数据备份",
    "project/plugins.js.bak_reducedmg": "减伤插件备份",
    "project/materials/items.png.bak": "物品图备份",
}

# 关键游戏文件：必须不被 .gitignore 忽略
REQUIRED_TRACKED = [
    "index.html",
    "main.js",
    "styles.css",
    "project/floors/f3_12.js",
]

# 关键部署文件：必须存在
REQUIRED_EXIST = [
    "index.html",
    "main.js",
    "project/data.js",
    "project/maps.js",
    "project/plugins.js",
    "project/floors/f3_12.js",
]


def run_git(args):
    """运行 git 命令，返回 (返回码, 标准输出文本)。"""
    try:
        proc = subprocess.run(
            ["git"] + args,
            cwd=REPO_ROOT,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
        )
        return proc.returncode, proc.stdout
    except OSError as exc:
        print(f"FAIL 无法运行 git: {exc}")
        return 1, ""


def check_ignored(path, expected_ignored):
    """用 git check-ignore -q 验证路径的忽略状态是否符合预期。"""
    code, _ = run_git(["check-ignore", "-q", "--", path])
    is_ignored = code == 0
    return is_ignored == expected_ignored, is_ignored


def main():
    os.chdir(REPO_ROOT)  # 后续相对路径判断基于仓库根目录
    failures = []

    # 1. 断言应忽略的路径确实被忽略
    print("== 检查 .gitignore 忽略规则 ==")
    for path in IGNORE_RULES:
        ok, is_ignored = check_ignored(path, True)
        if ok:
            print(f"OK  {path}")
        else:
            status = "已忽略" if is_ignored else "未忽略"
            print(f"FAIL {path}（当前状态：{status}）")
            failures.append(path)

    # 2. 断言关键游戏文件不被忽略
    print("== 检查关键文件未被忽略 ==")
    for path in REQUIRED_TRACKED:
        ok, is_ignored = check_ignored(path, False)
        if ok:
            print(f"OK  {path}")
        else:
            print(f"FAIL {path}（当前状态：已忽略）")
            failures.append(path)

    # 3. 检查工作区是否干净
    print("== 检查工作区状态 ==")
    code, output = run_git(["status", "--porcelain"])
    if code != 0:
        print("FAIL 无法获取 git status")
        failures.append("<git status>")
    elif output.strip() == "":
        print("OK  工作区干净（无未提交变更）")
    else:
        print("FAIL 存在未提交文件：")
        for line in output.splitlines():
            print(f"      {line}")
        failures.append("未提交文件")

    # 4. 检查关键部署文件是否存在
    print("== 检查关键部署文件 ==")
    for path in REQUIRED_EXIST:
        if os.path.isfile(path):
            print(f"OK  {path}")
        else:
            print(f"FAIL {path}（文件不存在）")
            failures.append(path)

    # 汇总结果
    print("==")
    if failures:
        print("VERIFY FAIL: " + ", ".join(failures))
        return 1
    print("VERIFY PASS")
    return 0


if __name__ == "__main__":
    sys.exit(main())
