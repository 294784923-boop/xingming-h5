// RMXP enemy str/dex/maxsp for 使役 (Baby_Buff)
// RMXP enemy str/dex/maxsp lookup for 使役系统
var ENEMY_RMXP_STATS = {
  1: {str:1, dex:1, maxsp:1},
  2: {str:1, dex:1, maxsp:2},
  3: {str:1, dex:1, maxsp:2},
  4: {str:50, dex:50, maxsp:500},
  5: {str:50, dex:50, maxsp:500},
  6: {str:50, dex:50, maxsp:500},
  7: {str:50, dex:50, maxsp:500},
  8: {str:50, dex:50, maxsp:500},
  9: {str:50, dex:50, maxsp:500},
  10: {str:1, dex:1, maxsp:2},
  11: {str:50, dex:50, maxsp:500},
  12: {str:1, dex:1, maxsp:18},
  13: {str:1, dex:1, maxsp:26},
  14: {str:1, dex:1, maxsp:34},
  15: {str:50, dex:50, maxsp:500},
  16: {str:50, dex:50, maxsp:500},
  17: {str:50, dex:50, maxsp:500},
  18: {str:50, dex:50, maxsp:500},
  19: {str:50, dex:50, maxsp:500},
  20: {str:50, dex:50, maxsp:500},
  21: {str:50, dex:50, maxsp:500},
  22: {str:1, dex:1, maxsp:11},
  23: {str:50, dex:50, maxsp:500},
  24: {str:50, dex:50, maxsp:500},
  25: {str:50, dex:50, maxsp:500},
  26: {str:50, dex:50, maxsp:500},
  27: {str:50, dex:50, maxsp:500},
  28: {str:50, dex:50, maxsp:500},
  29: {str:50, dex:50, maxsp:500},
  30: {str:2, dex:1, maxsp:16},
  31: {str:50, dex:50, maxsp:500},
  32: {str:50, dex:50, maxsp:500},
  33: {str:50, dex:50, maxsp:500},
  34: {str:50, dex:50, maxsp:500},
  35: {str:50, dex:50, maxsp:500},
  36: {str:50, dex:50, maxsp:500},
  37: {str:50, dex:50, maxsp:500},
  38: {str:50, dex:50, maxsp:500},
  39: {str:50, dex:50, maxsp:500},
  40: {str:50, dex:50, maxsp:500},
  41: {str:50, dex:50, maxsp:500},
  42: {str:50, dex:50, maxsp:500},
  43: {str:50, dex:50, maxsp:500},
  44: {str:50, dex:50, maxsp:500},
  45: {str:50, dex:50, maxsp:500},
  46: {str:1, dex:1, maxsp:45},
  47: {str:50, dex:50, maxsp:500},
  48: {str:1, dex:1, maxsp:2},
  49: {str:2, dex:1, maxsp:4},
  50: {str:50, dex:50, maxsp:500},
  51: {str:50, dex:50, maxsp:500},
  52: {str:50, dex:50, maxsp:500},
  53: {str:50, dex:50, maxsp:500},
  54: {str:50, dex:50, maxsp:500},
  55: {str:50, dex:50, maxsp:500},
  56: {str:50, dex:50, maxsp:500},
  57: {str:50, dex:50, maxsp:500},
  58: {str:50, dex:50, maxsp:500},
  59: {str:50, dex:50, maxsp:500},
  60: {str:50, dex:50, maxsp:500},
  61: {str:50, dex:50, maxsp:500},
  62: {str:50, dex:50, maxsp:500},
  63: {str:50, dex:50, maxsp:10},
  64: {str:50, dex:50, maxsp:500},
  65: {str:50, dex:50, maxsp:500},
  66: {str:3, dex:2, maxsp:20},
  67: {str:50, dex:50, maxsp:500},
  68: {str:2, dex:2, maxsp:42},
  69: {str:50, dex:50, maxsp:500},
  70: {str:50, dex:50, maxsp:10},
  71: {str:50, dex:50, maxsp:500},
  72: {str:50, dex:50, maxsp:500},
  73: {str:50, dex:50, maxsp:500},
  74: {str:50, dex:50, maxsp:500},
  75: {str:50, dex:50, maxsp:500},
  76: {str:50, dex:50, maxsp:500},
  77: {str:50, dex:50, maxsp:500},
  78: {str:50, dex:50, maxsp:500},
  79: {str:50, dex:50, maxsp:500},
  80: {str:50, dex:50, maxsp:500},
  81: {str:50, dex:50, maxsp:500},
  82: {str:50, dex:50, maxsp:500},
  83: {str:50, dex:50, maxsp:500},
  84: {str:1, dex:1, maxsp:7},
  85: {str:2, dex:1, maxsp:1},
  86: {str:2, dex:1, maxsp:0},
  87: {str:2, dex:1, maxsp:2},
  88: {str:50, dex:50, maxsp:500},
  89: {str:50, dex:50, maxsp:500},
  90: {str:50, dex:50, maxsp:500},
  91: {str:50, dex:50, maxsp:500},
  92: {str:50, dex:50, maxsp:500},
  93: {str:50, dex:50, maxsp:500},
  94: {str:50, dex:50, maxsp:500},
  95: {str:50, dex:50, maxsp:500},
  96: {str:50, dex:50, maxsp:500},
  97: {str:50, dex:50, maxsp:500},
  98: {str:50, dex:50, maxsp:500},
  99: {str:50, dex:50, maxsp:500},
  100: {str:50, dex:50, maxsp:500},
  101: {str:50, dex:50, maxsp:500},
  102: {str:50, dex:50, maxsp:500},
  103: {str:50, dex:50, maxsp:500},
  104: {str:50, dex:50, maxsp:500},
  105: {str:50, dex:50, maxsp:500},
  106: {str:50, dex:50, maxsp:500},
  107: {str:4, dex:1, maxsp:19},
  108: {str:50, dex:50, maxsp:500},
  109: {str:50, dex:50, maxsp:500},
  110: {str:50, dex:50, maxsp:500},
  111: {str:50, dex:50, maxsp:500},
  112: {str:50, dex:50, maxsp:500},
  113: {str:50, dex:50, maxsp:500},
  114: {str:50, dex:50, maxsp:500},
  115: {str:50, dex:50, maxsp:500},
  116: {str:50, dex:50, maxsp:500},
  117: {str:50, dex:50, maxsp:500},
  118: {str:50, dex:50, maxsp:500},
  119: {str:50, dex:50, maxsp:500},
  120: {str:1, dex:1, maxsp:0},
  121: {str:50, dex:50, maxsp:500},
  122: {str:50, dex:50, maxsp:500},
  123: {str:50, dex:50, maxsp:500},
  124: {str:50, dex:50, maxsp:500},
  125: {str:50, dex:50, maxsp:500},
  126: {str:1, dex:1, maxsp:8},
  127: {str:1, dex:2, maxsp:18},
  128: {str:1, dex:2, maxsp:2},
  129: {str:50, dex:50, maxsp:500},
  130: {str:50, dex:50, maxsp:500},
  131: {str:50, dex:50, maxsp:500},
  132: {str:50, dex:50, maxsp:500},
  133: {str:50, dex:50, maxsp:500},
  134: {str:50, dex:50, maxsp:500},
  135: {str:50, dex:50, maxsp:500},
  136: {str:50, dex:50, maxsp:500},
  137: {str:50, dex:50, maxsp:500},
  138: {str:50, dex:50, maxsp:500},
  139: {str:50, dex:50, maxsp:500},
  140: {str:50, dex:50, maxsp:500},
  141: {str:50, dex:50, maxsp:500},
  142: {str:50, dex:50, maxsp:500},
  143: {str:50, dex:50, maxsp:500},
  144: {str:50, dex:50, maxsp:500},
  145: {str:50, dex:50, maxsp:500},
  146: {str:2, dex:1, maxsp:9},
  147: {str:50, dex:50, maxsp:500},
  148: {str:50, dex:50, maxsp:500},
  149: {str:50, dex:50, maxsp:500},
  150: {str:50, dex:50, maxsp:500},
  151: {str:2, dex:1, maxsp:5},
  152: {str:50, dex:50, maxsp:500},
  153: {str:50, dex:50, maxsp:500},
  154: {str:50, dex:50, maxsp:500},
  155: {str:50, dex:50, maxsp:500},
  156: {str:50, dex:50, maxsp:500},
  157: {str:50, dex:50, maxsp:500},
  158: {str:1, dex:1, maxsp:10},
  159: {str:2, dex:1, maxsp:3},
  160: {str:1, dex:2, maxsp:14},
  161: {str:1, dex:2, maxsp:34},
  162: {str:1, dex:3, maxsp:31},
  163: {str:2, dex:1, maxsp:1},
  164: {str:1, dex:1, maxsp:26},
  165: {str:50, dex:50, maxsp:500},
  166: {str:50, dex:50, maxsp:500},
  167: {str:3, dex:1, maxsp:13},
  168: {str:2, dex:2, maxsp:7},
  169: {str:50, dex:50, maxsp:500},
  170: {str:50, dex:50, maxsp:500},
  171: {str:2, dex:2, maxsp:95},
  172: {str:50, dex:50, maxsp:500},
  173: {str:50, dex:50, maxsp:500},
  174: {str:50, dex:50, maxsp:500},
  175: {str:50, dex:50, maxsp:500},
  176: {str:50, dex:50, maxsp:500},
  177: {str:50, dex:50, maxsp:500},
  178: {str:50, dex:50, maxsp:500},
  179: {str:50, dex:50, maxsp:500},
  180: {str:50, dex:50, maxsp:500},
  181: {str:50, dex:50, maxsp:500},
  182: {str:50, dex:50, maxsp:500},
  183: {str:50, dex:50, maxsp:500},
  184: {str:50, dex:50, maxsp:500},
  185: {str:50, dex:50, maxsp:500},
  186: {str:50, dex:50, maxsp:500},
  187: {str:50, dex:50, maxsp:500},
  188: {str:50, dex:50, maxsp:500},
  189: {str:50, dex:50, maxsp:500},
  190: {str:3, dex:1, maxsp:8},
  191: {str:50, dex:50, maxsp:500},
  192: {str:50, dex:50, maxsp:500},
  193: {str:50, dex:50, maxsp:500},
  194: {str:50, dex:50, maxsp:500},
  195: {str:50, dex:50, maxsp:500},
  196: {str:50, dex:50, maxsp:500},
  197: {str:1, dex:1, maxsp:16},
  198: {str:50, dex:50, maxsp:500},
  199: {str:50, dex:50, maxsp:500},
  200: {str:50, dex:50, maxsp:500},
  201: {str:50, dex:50, maxsp:500},
  202: {str:50, dex:50, maxsp:500},
  203: {str:50, dex:50, maxsp:500},
  204: {str:50, dex:50, maxsp:500},
  205: {str:50, dex:50, maxsp:500},
  206: {str:50, dex:50, maxsp:500},
  207: {str:50, dex:50, maxsp:500},
  208: {str:50, dex:50, maxsp:500},
  209: {str:50, dex:50, maxsp:500},
  210: {str:50, dex:50, maxsp:500},
  211: {str:50, dex:50, maxsp:500},
  212: {str:50, dex:50, maxsp:500},
  213: {str:50, dex:50, maxsp:500},
  214: {str:50, dex:50, maxsp:500},
  215: {str:50, dex:50, maxsp:500},
  216: {str:50, dex:50, maxsp:500},
  217: {str:50, dex:50, maxsp:500},
  218: {str:50, dex:50, maxsp:500},
  219: {str:50, dex:50, maxsp:500},
  220: {str:50, dex:50, maxsp:500},
  221: {str:50, dex:50, maxsp:500},
  222: {str:2, dex:3, maxsp:34},
  223: {str:4, dex:1, maxsp:6},
  224: {str:4, dex:1, maxsp:8},
  225: {str:50, dex:50, maxsp:500},
  226: {str:50, dex:50, maxsp:500},
  227: {str:50, dex:50, maxsp:500},
  228: {str:50, dex:50, maxsp:500},
  229: {str:50, dex:50, maxsp:500},
  230: {str:50, dex:50, maxsp:500},
  231: {str:50, dex:50, maxsp:500},
  232: {str:50, dex:50, maxsp:500},
  233: {str:50, dex:50, maxsp:500},
  234: {str:50, dex:50, maxsp:500},
  235: {str:50, dex:50, maxsp:500},
  236: {str:50, dex:50, maxsp:500},
  237: {str:50, dex:50, maxsp:500},
  238: {str:50, dex:50, maxsp:500},
  239: {str:50, dex:50, maxsp:500},
  240: {str:50, dex:50, maxsp:500},
  241: {str:50, dex:50, maxsp:500},
  242: {str:50, dex:50, maxsp:500},
  243: {str:50, dex:50, maxsp:500},
  244: {str:50, dex:50, maxsp:500},
  245: {str:50, dex:50, maxsp:500},
  246: {str:50, dex:50, maxsp:500},
  247: {str:50, dex:50, maxsp:500},
  248: {str:50, dex:50, maxsp:500},
  249: {str:50, dex:50, maxsp:500},
  250: {str:2, dex:2, maxsp:48},
  251: {str:50, dex:50, maxsp:500},
  252: {str:50, dex:50, maxsp:500},
  253: {str:2, dex:2, maxsp:46},
  254: {str:50, dex:50, maxsp:500},
  255: {str:50, dex:50, maxsp:500},
  256: {str:50, dex:50, maxsp:500},
  257: {str:50, dex:50, maxsp:500},
  258: {str:50, dex:50, maxsp:500},
  259: {str:50, dex:50, maxsp:500},
  260: {str:50, dex:50, maxsp:500},
  261: {str:50, dex:50, maxsp:500},
  262: {str:50, dex:50, maxsp:500},
  263: {str:50, dex:50, maxsp:500},
  264: {str:50, dex:50, maxsp:500},
  265: {str:3, dex:2, maxsp:13},
  266: {str:50, dex:50, maxsp:500},
  267: {str:50, dex:50, maxsp:500},
  268: {str:50, dex:50, maxsp:500},
  269: {str:50, dex:50, maxsp:500},
  270: {str:50, dex:50, maxsp:500},
  271: {str:50, dex:50, maxsp:500},
  272: {str:50, dex:50, maxsp:500},
  273: {str:50, dex:50, maxsp:500},
  274: {str:50, dex:50, maxsp:500},
  275: {str:50, dex:50, maxsp:500},
  276: {str:50, dex:50, maxsp:500},
  277: {str:50, dex:50, maxsp:500},
  278: {str:50, dex:50, maxsp:500},
  279: {str:50, dex:50, maxsp:500},
  280: {str:50, dex:50, maxsp:500},
  281: {str:50, dex:50, maxsp:500},
  282: {str:50, dex:50, maxsp:500},
  283: {str:50, dex:50, maxsp:500},
  284: {str:50, dex:50, maxsp:500},
  285: {str:50, dex:50, maxsp:500},
  286: {str:50, dex:50, maxsp:500},
  287: {str:50, dex:50, maxsp:500},
  288: {str:50, dex:50, maxsp:500},
  289: {str:50, dex:50, maxsp:500},
  290: {str:50, dex:50, maxsp:500},
  291: {str:50, dex:50, maxsp:500},
  292: {str:50, dex:50, maxsp:500},
  293: {str:50, dex:50, maxsp:500},
  294: {str:50, dex:50, maxsp:500},
  295: {str:50, dex:50, maxsp:500},
  296: {str:50, dex:50, maxsp:500},
  297: {str:50, dex:50, maxsp:500},
  298: {str:50, dex:50, maxsp:500},
  299: {str:50, dex:50, maxsp:500},
  300: {str:50, dex:50, maxsp:500},
  301: {str:50, dex:50, maxsp:500},
  302: {str:50, dex:50, maxsp:500},
  303: {str:50, dex:50, maxsp:500},
  304: {str:1, dex:1, maxsp:12},
  305: {str:50, dex:50, maxsp:500},
  306: {str:50, dex:50, maxsp:500},
  307: {str:50, dex:50, maxsp:500},
  308: {str:50, dex:50, maxsp:500},
  309: {str:50, dex:50, maxsp:500},
  310: {str:50, dex:50, maxsp:500},
  311: {str:50, dex:50, maxsp:500},
  312: {str:50, dex:50, maxsp:500},
  313: {str:50, dex:50, maxsp:500},
  314: {str:1, dex:2, maxsp:56},
  315: {str:50, dex:50, maxsp:500},
  316: {str:50, dex:50, maxsp:500},
  317: {str:50, dex:50, maxsp:500},
  318: {str:2, dex:2, maxsp:84},
  319: {str:50, dex:50, maxsp:500},
  320: {str:50, dex:50, maxsp:500},
  321: {str:50, dex:50, maxsp:500},
  322: {str:1, dex:4, maxsp:65},
  323: {str:50, dex:50, maxsp:500},
  324: {str:50, dex:50, maxsp:500},
  325: {str:1, dex:1, maxsp:10},
  326: {str:50, dex:50, maxsp:500},
  327: {str:50, dex:50, maxsp:500},
  328: {str:50, dex:50, maxsp:500},
  329: {str:50, dex:50, maxsp:500},
  330: {str:50, dex:50, maxsp:500},
  331: {str:50, dex:50, maxsp:500},
  332: {str:50, dex:50, maxsp:500},
  333: {str:50, dex:50, maxsp:500},
  334: {str:50, dex:50, maxsp:500},
  335: {str:50, dex:50, maxsp:500},
  336: {str:50, dex:50, maxsp:500},
  337: {str:50, dex:50, maxsp:500},
  338: {str:50, dex:50, maxsp:500},
  339: {str:50, dex:50, maxsp:500},
  340: {str:50, dex:50, maxsp:500},
  341: {str:50, dex:50, maxsp:500},
  342: {str:50, dex:50, maxsp:500},
  343: {str:50, dex:50, maxsp:500},
  344: {str:50, dex:50, maxsp:500},
  345: {str:50, dex:50, maxsp:500},
  346: {str:50, dex:50, maxsp:500},
  347: {str:50, dex:50, maxsp:500},
  348: {str:50, dex:50, maxsp:500},
  349: {str:50, dex:50, maxsp:500},
  350: {str:50, dex:50, maxsp:500},
  351: {str:50, dex:50, maxsp:500},
  352: {str:50, dex:50, maxsp:500},
  353: {str:50, dex:50, maxsp:500},
  354: {str:50, dex:50, maxsp:500},
  355: {str:50, dex:50, maxsp:500},
  356: {str:50, dex:50, maxsp:500},
  357: {str:50, dex:50, maxsp:500},
  358: {str:50, dex:50, maxsp:500},
  359: {str:50, dex:50, maxsp:500},
  360: {str:50, dex:50, maxsp:500},
  361: {str:50, dex:50, maxsp:500},
  362: {str:50, dex:50, maxsp:500},
  363: {str:50, dex:50, maxsp:500},
  364: {str:50, dex:50, maxsp:500},
  365: {str:50, dex:50, maxsp:500},
  366: {str:50, dex:50, maxsp:500},
  367: {str:50, dex:50, maxsp:500},
  368: {str:50, dex:50, maxsp:500},
  369: {str:50, dex:50, maxsp:500},
  370: {str:50, dex:50, maxsp:500},
  371: {str:50, dex:50, maxsp:500},
  372: {str:50, dex:50, maxsp:500},
  373: {str:50, dex:50, maxsp:500},
  374: {str:50, dex:50, maxsp:500},
  375: {str:50, dex:50, maxsp:500},
  376: {str:50, dex:50, maxsp:500},
  377: {str:50, dex:50, maxsp:500},
  378: {str:50, dex:50, maxsp:500},
  379: {str:50, dex:50, maxsp:500},
  380: {str:50, dex:50, maxsp:500},
  381: {str:50, dex:50, maxsp:500},
  382: {str:50, dex:50, maxsp:500},
  383: {str:50, dex:50, maxsp:500},
  384: {str:50, dex:50, maxsp:500},
  385: {str:50, dex:50, maxsp:500},
  386: {str:50, dex:50, maxsp:500},
  387: {str:50, dex:50, maxsp:500},
  388: {str:50, dex:50, maxsp:500},
  389: {str:50, dex:50, maxsp:500},
  390: {str:50, dex:50, maxsp:500},
  391: {str:50, dex:50, maxsp:500},
  392: {str:50, dex:50, maxsp:500},
  393: {str:50, dex:50, maxsp:500},
  394: {str:50, dex:50, maxsp:500},
  395: {str:50, dex:50, maxsp:500},
  396: {str:50, dex:50, maxsp:500},
  397: {str:50, dex:50, maxsp:500},
  398: {str:50, dex:50, maxsp:500},
  399: {str:50, dex:50, maxsp:500},
  400: {str:50, dex:50, maxsp:500},
  401: {str:1, dex:1, maxsp:0},
  402: {str:50, dex:50, maxsp:500},
  403: {str:1, dex:1, maxsp:0},
  404: {str:50, dex:50, maxsp:500},
  405: {str:50, dex:50, maxsp:500},
  406: {str:50, dex:50, maxsp:500},
  407: {str:50, dex:50, maxsp:500},
  408: {str:50, dex:50, maxsp:500},
  409: {str:50, dex:50, maxsp:500},
  410: {str:50, dex:50, maxsp:500},
  411: {str:50, dex:50, maxsp:500},
  412: {str:50, dex:50, maxsp:500},
  413: {str:50, dex:50, maxsp:500},
  414: {str:50, dex:50, maxsp:500},
  415: {str:50, dex:50, maxsp:500},
  416: {str:50, dex:50, maxsp:500},
  417: {str:50, dex:50, maxsp:500},
  418: {str:50, dex:50, maxsp:500},
  419: {str:50, dex:50, maxsp:500},
  420: {str:50, dex:50, maxsp:500},
  421: {str:50, dex:50, maxsp:500},
  422: {str:50, dex:50, maxsp:500},
  423: {str:50, dex:50, maxsp:500},
  424: {str:50, dex:50, maxsp:500},
  425: {str:50, dex:50, maxsp:500},
  426: {str:50, dex:50, maxsp:500},
  427: {str:50, dex:50, maxsp:500},
  428: {str:50, dex:50, maxsp:500},
  429: {str:50, dex:50, maxsp:500},
  430: {str:50, dex:50, maxsp:500},
  431: {str:50, dex:50, maxsp:500},
  432: {str:50, dex:50, maxsp:500},
  433: {str:50, dex:50, maxsp:500},
  434: {str:50, dex:50, maxsp:500},
  435: {str:50, dex:50, maxsp:500},
  436: {str:50, dex:50, maxsp:500},
  437: {str:1, dex:1, maxsp:1},
  438: {str:3, dex:1, maxsp:12},
  439: {str:1, dex:3, maxsp:8},
  440: {str:1, dex:1, maxsp:25},
  441: {str:1, dex:1, maxsp:6},
  442: {str:1, dex:1, maxsp:8},
  443: {str:1, dex:3, maxsp:83},
  444: {str:50, dex:50, maxsp:500},
  445: {str:2, dex:2, maxsp:22},
  446: {str:2, dex:2, maxsp:18},
  447: {str:3, dex:1, maxsp:2},
  448: {str:2, dex:1, maxsp:12},
  449: {str:3, dex:1, maxsp:4},
  450: {str:3, dex:1, maxsp:17},
};
///<reference path='../runtime.d.ts'/>
var plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1 =
{
	"init": function () {
		this._afterLoadResources = function () {
			// 本函数将在所有资源加载完毕后，游戏开启前被执行
			// 【东方星冥线】补全引擎缺失的块操作别名（core.xxx → core.maps.xxx）
			if (!core.moveBlock) core.moveBlock = core.maps.moveBlock.bind(core.maps);
			// 【东方星冥线】使役系统 (Baby_Buff)
			// 存储使役敌人ID
			core.setFlag('shiyi_enemy_id', 0);
			// 覆写 getRealStatus: atk/def 叠加使役加成
			// 使役+水晶 buff 注入 getRealStatusOrDefault（战斗和面板共用）
			var __grsd = core.getRealStatusOrDefault;
			core.getRealStatusOrDefault = function(status, name) {
				var val = __grsd.call(this, status, name);
				var eid = core.getFlag('shiyi_enemy_id', 0);
				if (eid && ENEMY_RMXP_STATS && ENEMY_RMXP_STATS[eid]) {
					var s = ENEMY_RMXP_STATS[eid];
					if (name === 'atk') val += Math.max(0, s.str - 1);
					if (name === 'def') val += Math.max(0, s.dex - 1);
					if (name === 'mdef') val += (s.maxsp || 0);
				}

				return val;
			};
			// 使役捕获：core.captureShiyi(enemyId)
			core.captureShiyi = function(enemyId) {
				var enemy = core.material.enemys['e' + enemyId] || core.material.enemys[enemyId];
				if (!enemy) return false;
				core.setFlag('shiyi_enemy_id', enemyId);
				core.setFlag('shiyi_name', enemy.name || '???');
				core.updateStatusBar();
				var stats = ENEMY_RMXP_STATS[enemyId];
				var atkB = stats ? Math.max(0, stats.str - 1) : 0;
				var defB = stats ? Math.max(0, stats.dex - 1) : 0;
				core.drawTip('成功使役 ' + (enemy.name || '???') + ' (atk+' + atkB + ' def+' + defB + ')');
				return true;
			};

			// 使役释放
			core.releaseShiyi = function() {
				core.setFlag('shiyi_enemy_id', 0);
				core.setFlag('shiyi_name', '');
				core.updateStatusBar();
				core.drawTip('使役已释放');
			};
			// 战斗后自动捕获（捕获模式开启时）+ 清除水晶buff
			// 【星冥线】RMXP 式升级系统 (CE23)


			core.checkLevelUp = function() {
				var threshold = core.getFlag('expThreshold', 0);
				if (!threshold) { threshold = 20; core.setFlag('expThreshold', 20); }
				if (!core.status.hero || core.status.hero.exp < threshold) return;
				var hero = core.status.hero;
				hero.exp -= threshold;
				hero.lv = (hero.lv || 1) + 1;
				var hpGain = hero.lv * 10 + 140;
				hero.hp += hpGain;
				core.setFlag('expThreshold', threshold + 8);
				var lvMsg = "升级至" + hero.lv + "级，HP +" + hpGain + "! 请选择：";
				core.insertAction([
					{type: "choices", text: lvMsg, choices: [
						{text: "增加1点攻击", action: [{type: "function", function: "function(){core.addStatus('atk',1);core.checkLevelUp();}"}]},
						{text: "增加1点防御", action: [{type: "function", function: "function(){core.addStatus('def',1);core.checkLevelUp();}"}]}
					]}
				]);
			};

			var __nextLv = core.getNextLvUpNeed;
			core.getNextLvUpNeed = function() { return core.getFlag('expThreshold', 20); };

			var __afterBattle = core.events.afterBattle;
			core.events.afterBattle = function(enemy, x, y, callback) {
				if (core.getFlag('crystal_red',0)) { core.removeFlag('crystal_red'); core.addStatus('atk', -1); }
				if (core.getFlag('crystal_blue',0)) { core.removeFlag('crystal_blue'); core.addStatus('def', -1); }
				if (core.getFlag('shiyi_mode', 0) && enemy) {
					var eid = enemy.id || enemy;
					var numId = typeof eid == 'string' ? parseInt(eid.replace(/[^0-9]/g, '')) : eid;
					if (numId > 0) core.captureShiyi(numId);
				}
				if (__afterBattle) __afterBattle.call(this, enemy, x, y, callback);
				core.checkLevelUp();
			};

		}
		// 【星冥线】手册每页5只怪，间距拉大
			var __pageinfo = core.ui._drawBook_pageinfo;
			core.ui._drawBook_pageinfo = function() {
				var info = __pageinfo.call(this);
				info.per_page = 5;
				info.per_height = (core._PY_ - 32 - info.padding_top) / info.per_page;
				return info;
			};

		// 【星冥线】怪物手册使役信息
			var __drawBookContent = core.ui._drawBook_drawContent;
			core.ui._drawBook_drawContent = function(index, enemy, top, left) {
				__drawBookContent.call(this, index, enemy, top, left);
				var eid = enemy.id;
				if (typeof eid == 'string') eid = parseInt(eid.replace(/[^0-9]/g, ''));
				var s = ENEMY_RMXP_STATS && ENEMY_RMXP_STATS[eid];
				if (!s) return;
				var ab = Math.max(0, s.str - 1);
				var db = Math.max(0, s.dex - 1);
				var mb = s.maxsp || 0;
				if (ab == 0 && db == 0 && mb == 0) return;
				var col1 = left, col2 = left + (core._PX_ - left) * 9 / 25, col3 = left + (core._PX_ - left) * 17 / 25;
				var pos = top + 74;
				var f12 = core.ui._buildFont(12, false);
				core.fillText('ui', '力+' + ab, col1, pos, '#FFCC88', f12);
				core.fillText('ui', '巧+' + db, col2, pos, '#88CCFF', f12);
				core.fillText('ui', '魔+' + mb, col3, pos, '#CC88FF', f12);
			};

		// 【东方星冥线】禁用双击瞬移（保留行走中重新指定目标）
		control.prototype._setAutomaticRoute_isMoving = function (destX, destY) {
			if (core.status.automaticRoute.autoHeroMove) {
				core.stopAutomaticRoute();
				return true;
			}
			return false;
		};
		// 【东方星冥线】塔层全景滚动+雾效 (复刻 script126/127 配置)
		// 全景: 纵向向上 3/8px/帧 = 15px/s; 雾: 右0.5/8 + 上1/8 px/帧 = 右2.5 + 上5 px/s, 200%放大 25%透明
		var panoCv = null, fogCv = null;
		var PANO_SPEED_Y = 15, FOG_SPEED_X = 2.5, FOG_SPEED_Y = 5;
		function isTower(fid) { return fid && (fid.indexOf('f1_') === 0 || fid.indexOf('f3_') === 0); }
		function bgTick() {
			requestAnimationFrame(bgTick);
			if (!core.isPlaying() || !core.status.floorId || !core.dymCanvas) return;
			var fid = core.status.floorId;
			// --- 全景滚动层 (bg画布之下) ---
			if (!panoCv) {
				if (!core.dymCanvas.panoBg) core.createCanvas('panoBg', 0, 0, core._PX_, core._PY_, -1);
				panoCv = core.dymCanvas.panoBg || null;
				if (!panoCv) return;
			}
			var pano = core.material.images.images['pano_' + fid + '.png'];
			var w = core._PX_, h = core._PY_;
			panoCv.clearRect(0, 0, w, h);
			if (pano && isTower(fid)) {
				var psc = w / pano.width;    // 视口宽/图宽 (15x15后480/416)
				var imgH = pano.height * psc;
				var offY = (Date.now() / 1000 * PANO_SPEED_Y) % imgH;
				// 向上滚动: 窗口在整幅高图上滑动, 按图高 wrap
				panoCv.globalAlpha = 0.5;
				panoCv.drawImage(pano, 0, 0, pano.width, pano.height, 0, -offY, w, imgH);
				panoCv.drawImage(pano, 0, 0, pano.width, pano.height, 0, imgH - offY, w, imgH);
				panoCv.globalAlpha = 1;
			}
			// --- 雾层 (blocks之上, damage/动画之下: DOM插到#damage前) ---
			if (!fogCv) {
				if (!core.dymCanvas.panoFog) {
					core.createCanvas('panoFog', 0, 0, core._PX_, core._PY_, '');
					var fogEl = document.getElementById('panoFog');
					var dmgEl = document.getElementById('damage');
					if (fogEl && dmgEl && fogEl.parentNode === dmgEl.parentNode)
						dmgEl.parentNode.insertBefore(fogEl, dmgEl);
				}
				fogCv = core.dymCanvas.panoFog || null;
				if (!fogCv) return;
			}
			var fogName = fid.indexOf('f1_') === 0 ? 'fog_t1.png' : fid.indexOf('f3_') === 0 ? 'fog_t3.png' : null;
			var fog = fogName && core.material.images.images[fogName];
			fogCv.clearRect(0, 0, w, h);
			if (!fog || !isTower(fid)) return;
			var W = fog.width * 2, H = fog.height * 2;
			var offX = (Date.now() / 1000 * FOG_SPEED_X) % W;
			var offY2 = (Date.now() / 1000 * FOG_SPEED_Y) % H;
			fogCv.globalAlpha = 0.25;
			for (var x = offX - W; x < w; x += W)
				for (var y = -offY2; y < h; y += H)
					fogCv.drawImage(fog, 0, 0, fog.width, fog.height, x, y, W, H);
			fogCv.globalAlpha = 1;
			// --- 使役捕获光环 ---
			var haloImg = core.material.images.images['shiyi.png'];
			if (core.getFlag('shiyi_mode', 0) && haloImg) {
				if (!core.dymCanvas.shiyiHalo) {
					core.createCanvas('shiyiHalo', 0, 0, core._PX_, core._PY_, 35);
				}
				var hc = core.dymCanvas.shiyiHalo;
				hc.clearRect(0, 0, core._PX_, core._PY_);
				var hx = core.getHeroLoc('x'), hy = core.getHeroLoc('y');
				var ox = core.bigmap.offsetX, oy = core.bigmap.offsetY;
				hc.drawImage(haloImg, hx * 32 - ox - 32, hy * 32 - oy - 32);
			} else if (core.dymCanvas.shiyiHalo) {
				core.dymCanvas.shiyiHalo.clearRect(0, 0, core._PX_, core._PY_);
			}
		}
		// 【东方星冥线】满屏适配: 任意浮点倍率铺满窗口 (参照七曜旅人竖屏公式, 黑边最小化)
		control.prototype.resize = function () {
			if (main.mode == 'editor') return;
			var clientWidth = main.dom.body.clientWidth, clientHeight = main.dom.body.clientHeight;
			var BORDER = 3;
			var extendToolbar = core.flags.extendToolbar;
			let hideLeftStatusBar = core.flags.hideLeftStatusBar;
			var BAR_WIDTH = hideLeftStatusBar ? 0 : Math.round(core._PY_ * 0.31);
			var horizontalMaxRatio = (clientHeight - 2 * BORDER - (hideLeftStatusBar ? BORDER : 0) - (extendToolbar ? BORDER : 0)) / (core._PY_ + (extendToolbar ? 38 : 0) + (hideLeftStatusBar ? 0 : 0));
			if (clientWidth - 3 * BORDER >= core._PX_ + BAR_WIDTH || (clientWidth > clientHeight && horizontalMaxRatio < 1)) {
				// 横屏: 浮点倍率, 取宽/高较小者铺满
				core.domStyle.isVertical = false;
				core.domStyle.availableScale = [];
				core.domStyle.scale = Math.min((clientWidth - 3 * BORDER) / (core._PX_ + BAR_WIDTH), horizontalMaxRatio);
			}
			else {
				// 竖屏
				core.domStyle.isVertical = true;
				core.domStyle.scale = Math.min((clientWidth - 2 * BORDER) / core._PX_);
				core.domStyle.availableScale = [];
				extendToolbar = false;
				hideLeftStatusBar = false;
				BAR_WIDTH = Math.round(core._PX_ * 0.3);
			}
			var statusDisplayArr = this._shouldDisplayStatus(), count = statusDisplayArr.length;
			var statusCanvas = core.flags.statusCanvas, statusCanvasRows = core.values.statusCanvasRowsOnMobile || 3;
			var col = statusCanvas ? statusCanvasRows : Math.ceil(count / 3);
			var globalAttribute = core.status.globalAttribute || core.initStatus.globalAttribute;
			var obj = {
				clientWidth: clientWidth,
				clientHeight: clientHeight,
				BORDER: BORDER,
				BAR_WIDTH: BAR_WIDTH,
				TOOLBAR_HEIGHT: 38,
				outerWidth: core._PX_ * core.domStyle.scale + 2 * BORDER,
				outerHeight: core._PY_ * core.domStyle.scale + 2 * BORDER,
				globalAttribute: globalAttribute,
				border: '3px ' + core.arrayToRGBA(globalAttribute.borderColor) + ' solid',
				statusDisplayArr: statusDisplayArr,
				count: count,
				col: col,
				statusBarHeightInVertical: core.domStyle.isVertical ? (32 * col + 6) * core.domStyle.scale + 2 * BORDER : 0,
				toolbarHeightInVertical: core.domStyle.isVertical ? 38 * core.domStyle.scale + 2 * BORDER : 0,
				extendToolbar: extendToolbar,
				is15x15: true,
				hideLeftStatusBar
			};
			this._doResize(obj);
			this.setToolbarButton();
			core.updateStatusBar();
		}
		// 【东方星冥线】塔层BGM (原版: 庭园=开场, 1塔=二色莲传说~rum, 3塔=妖妖的梦) — 文件名必须ASCII(启动服务.exe对CJK名404)
		var BGM_OF = function (fid) {
			if (fid === 'f0_garden') return ['bgm_garden.mp3', 0.8];
			if (fid && fid.indexOf('f1_') === 0) return ['bgm_tower1.mp3', 1.0];
			if (fid && fid.indexOf('f3_') === 0) return ['bgm_tower3.mp3', 0.4];
			return null;
		};
		var lastBgmKey = null;
		function bgmTick() {
			requestAnimationFrame(bgmTick);
			if (!core.isPlaying() || !core.status.floorId) return;
			var b = BGM_OF(core.status.floorId);
			if (!b) return;
			if (core.musicStatus.playingBgm !== b[0] && lastBgmKey !== b[0] + core.status.floorId) {
				core.playBgm(b[0]);
				lastBgmKey = b[0] + core.status.floorId;
			}
			var h = core.material.bgms[b[0]];
			try {  // h可能是Howl(volume方法)或Audio(volume属性)
				if (h) {
					if (typeof h.volume === 'function') { if (h.volume() !== b[1]) h.volume(b[1]); }
					else h.volume = b[1];
				}
			} catch (e) { /* ignore */ }
		}
		bgmTick();
		// 【东方星冥线】无怪物楼层显伤防崩: checkBlock子对象未初始化时补空(updateDamage读ambush会炸)
		var _origUpdateDamage = control.prototype.updateDamage;
		control.prototype.updateDamage = function (floorId, ctx) {
			var cb = core.status.checkBlock;
			if (cb) {
				if (!cb.damage) cb.damage = {};
				if (!cb.ambush) cb.ambush = {};
				if (!cb.repulse) cb.repulse = {};
				if (!cb.type) cb.type = {};
			}
			return _origUpdateDamage.call(this, floorId, ctx);
		};
		bgTick();
		// 【东方星冥线】楼层天气 (复刻扩展天气模块: 庭园樱花type10 power2=12粒, 双塔闪光type14 power10=44粒)
		(function () {
			var cv = null, sakuraImgs = [], sparkleImgs = [];
			var sakuraP = [], sparkleP = [], last = 0, frameClock = 0, frameTick = 0;
			var SPARKLE_N = 24, SAKURA_N = 12;
			function sakuraInit() {
				if (sakuraImgs.length) return;
				for (var i = 0; i <= 10; i++) sakuraImgs.push(core.material.images.images['title_sakura' + i + '.png']);
				for (var k = 0; k < SAKURA_N; k++) {
					var st = Math.floor(Math.random() * 100);
					sakuraP.push({ x: Math.random() * core._PX_, y: Math.random() * (core._PY_ + 50) - 50, f0: k % 11,
						drift: (st % 2 === 0) ? (st < 10 ? -40 : 40) : 0 });
				}
			}
			function sparkleInit() {
				if (sparkleImgs.length) return;
				var dark = 'rgb(77,136,225)', mid = 'rgb(126,197,235)', light = 'rgb(181,244,255)', white = 'rgb(255,255,255)';
				function mk(fn) { var c = document.createElement('canvas'); c.width = 7; c.height = 7; fn(c.getContext('2d')); return c; }
				function R(x, y, w, h, col, c) { c.fillStyle = col; c.fillRect(x, y, w, h); }
				sparkleImgs.push(mk(function (c) { R(3, 3, 1, 1, dark, c); }));
				sparkleImgs.push(mk(function (c) { R(3, 2, 1, 3, dark, c); R(2, 3, 3, 1, dark, c); R(3, 3, 1, 1, mid, c); }));
				sparkleImgs.push(mk(function (c) {
					R(1, 1, 1, 1, dark, c); R(5, 1, 1, 1, dark, c); R(2, 2, 1, 1, mid, c); R(4, 2, 1, 1, mid, c);
					R(3, 3, 1, 1, light, c); R(2, 4, 1, 1, mid, c); R(4, 4, 1, 1, mid, c); R(1, 5, 1, 1, dark, c); R(5, 5, 1, 1, dark, c);
				}));
				sparkleImgs.push(mk(function (c) {
					R(3, 1, 1, 5, dark, c); R(1, 3, 5, 1, dark, c); R(3, 2, 1, 3, mid, c); R(2, 3, 3, 1, mid, c); R(3, 3, 1, 1, light, c);
				}));
				sparkleImgs.push(mk(function (c) {
					R(2, 2, 3, 3, mid, c); R(3, 2, 1, 3, dark, c); R(2, 3, 3, 1, dark, c); R(3, 3, 1, 1, light, c);
					R(1, 1, 1, 1, dark, c); R(5, 1, 1, 1, dark, c); R(1, 5, 1, 1, dark, c); R(5, 5, 1, 1, dark, c);
				}));
				sparkleImgs.push(mk(function (c) {
					R(2, 1, 3, 5, dark, c); R(1, 2, 5, 3, dark, c); R(2, 2, 3, 3, mid, c); R(3, 1, 1, 5, mid, c); R(1, 3, 5, 1, mid, c);
					R(3, 2, 1, 3, light, c); R(2, 3, 3, 1, light, c); R(3, 3, 1, 1, white, c);
				}));
				sparkleImgs.push(mk(function (c) {
					R(2, 1, 3, 5, mid, c); R(1, 2, 5, 3, mid, c); R(3, 0, 1, 7, dark, c); R(0, 3, 7, 1, dark, c);
					R(2, 2, 3, 3, light, c); R(3, 2, 1, 3, mid, c); R(2, 3, 3, 1, mid, c); R(3, 3, 1, 1, white, c);
				}));
				for (var k = 0; k < SPARKLE_N; k++)
					sparkleP.push({ x: Math.random() * 466 - 50, y: Math.random() * 516 - 100, f: Math.floor(Math.random() * 7),
						t: 0.025 + Math.random() * 0.35, op: 64 + Math.random() * 191 });
			}
			function tick(now) {
				requestAnimationFrame(tick);
				if (!core.isPlaying() || !core.status.floorId || !core.dymCanvas) { last = now; return; }
				if (!cv) {
					if (!core.dymCanvas.weatherFx) {
						core.createCanvas('weatherFx', 0, 0, core._PX_, core._PY_, 80);
						var el = document.getElementById('weatherFx'), dmg = document.getElementById('damage');
						if (el && dmg && el.parentNode === dmg.parentNode) dmg.parentNode.insertBefore(el, dmg);
					}
					cv = core.dymCanvas.weatherFx || null;
					if (!cv) return;
				}
				var dt = Math.min(0.1, (now - last) / 1000); last = now;
				if (dt <= 0) return;
				var fid = core.status.floorId, w = core._PX_, h = core._PY_;
				cv.clearRect(0, 0, w, h);
				if (fid === 'f0_garden') {
					// 樱花: 40px/s下落, 部分横漂, 0.375s换帧(11帧)
					sakuraInit();
					frameClock += dt;
					if (frameClock >= 0.375) { frameClock -= 0.375; frameTick++; }
					sakuraP.forEach(function (p) {
						p.y += 40 * dt; p.x += p.drift * dt;
						if (p.y > h + 8) { p.y = -8 - Math.random() * 40; p.x = Math.random() * w; }
						if (p.x < -8) p.x = w + 8; else if (p.x > w + 8) p.x = -8;
						var im = sakuraImgs[(p.f0 + frameTick) % 11];
						if (im) cv.drawImage(im, p.x - 8, p.y - 8);
					});
				} else if (fid.indexOf('f1_') === 0 || fid.indexOf('f3_') === 0) {
					// 闪光: 40px/s下落, 40/s渐隐, op<64即随机位置重生(全屏随机出现, 非只从顶部)
					sparkleInit();
					sparkleP.forEach(function (p) {
						p.y += 40 * dt; p.op -= 40 * dt;
						p.t -= dt;
						if (p.t <= 0) { p.f = (p.f + 1) % 7; p.t = 0.025 + Math.random() * 0.35; }
						if (p.op < 64 || p.y > h + 8 || p.x < -50 || p.x > w + 50) {
							p.x = Math.random() * 466 - 50; p.y = Math.random() * 516 - 100;
							p.op = 255; p.f = 0;
						}
						cv.globalAlpha = Math.max(0, Math.min(1, p.op / 255));
						cv.drawImage(sparkleImgs[p.f], p.x - 3, p.y - 3, 14, 14);
						cv.globalAlpha = 1;
					});
				}
			}
			requestAnimationFrame(tick);
		})();
		// 【东方星冥线】昼夜色调系统 (复刻 script138, 仅庭园: 全屏染色+左上角日历)
		(function () {
			// 8时相 [名, 开始比率, UI文字色, 画面色RGBA]
			var PHASES = [
				['丑三つ時', 0.000, 'rgb(150,145,200)', [10, 10, 35, 75]],
				['東雲', 0.125, 'rgb(200,185,205)', [55, 50, 75, 40]],
				['朝霧', 0.250, 'rgb(220,215,205)', [170, 165, 160, 20]],
				['昼下がり', 0.375, 'rgb(248,240,200)', [0, 0, 0, 0]],
				['夕暮れ', 0.500, 'rgb(245,200,145)', [235, 210, 170, 20]],
				['逢魔が時', 0.625, 'rgb(235,135,95)', [195, 150, 110, 35]],
				['宵の口', 0.750, 'rgb(140,142,195)', [30, 32, 65, 55]],
				['夜半', 0.875, 'rgb(105,110,170)', [15, 15, 40, 70]],
			];
			var MONTHS = ['睦月', '如月', '弥生', '卯月', '皐月', '水無月', '文月', '葉月', '長月', '神無月', '霜月', '師走'];
			var DAY_LEN = 120;        // 一天120秒 (4800帧@40fps)
			var TRANS = 15;           // 色調迁移15秒 smoothstep
			var tintCv = null, calCv = null, last = 0;
			var curPhase = -1, transFrom = null, transTo = null, transT = 1, dispColor = [0, 0, 0, 0];
			var lastCal = '';
			function sstep(t) { t = Math.max(0, Math.min(1, t)); return t * t * (3 - 2 * t); }
			function blend(a, b, r) {
				return [0, 1, 2, 3].map(function (i) { return Math.round(a[i] + (b[i] - a[i]) * r); });
			}
			function phaseOf(t) {
				var ratio = (t % DAY_LEN) / DAY_LEN;
				for (var i = PHASES.length - 1; i >= 0; i--) if (ratio >= PHASES[i][1]) return i;
				return 0;
			}
			function tick(now) {
				requestAnimationFrame(tick);
				var inGarden = core.isPlaying() && core.status.floorId === 'f0_garden' && core.dymCanvas;
				if (!inGarden) {
					last = now;
					if (tintCv) {   // 离开庭园: 清空染色和日历 (时间暂停, 回来自动恢复)
						tintCv.clearRect(0, 0, core._PX_, core._PY_);
						calCv.clearRect(0, 0, core._PX_, core._PY_);
						lastCal = '';
					}
					return;
				}
				if (!tintCv) {
					core.createCanvas('tintFx', 0, 0, core._PX_, core._PY_, 35);   // 地图/事件之上, 勇士之下
					core.createCanvas('calendarFx', 0, 0, core._PX_, core._PY_, 175); // 最顶层(日历)
					tintCv = core.dymCanvas.tintFx; calCv = core.dymCanvas.calendarFx;
					if (!tintCv || !calCv) { tintCv = null; return; }
				}
				var dt = Math.min(0.1, (now - last) / 1000); last = now;
				if (dt <= 0) return;
				// 时间前进 (只在庭园, 存flag随存档)
				var t = core.getFlag('gt_time', 0) + dt;
				core.setFlag('gt_time', t);
				var pi = phaseOf(t);
				if (pi !== curPhase) {
					transFrom = dispColor.slice(); transTo = PHASES[pi][3].slice(); transT = 0;
					curPhase = pi;
				}
				transT = Math.min(1, transT + dt / TRANS);
				dispColor = blend(transFrom, transTo, sstep(transT));
				// 染色层
				tintCv.clearRect(0, 0, core._PX_, core._PY_);
				if (dispColor[3] > 0) {
					tintCv.fillStyle = 'rgba(' + dispColor[0] + ',' + dispColor[1] + ',' + dispColor[2] + ',' + (dispColor[3] / 255) + ')';
					tintCv.fillRect(0, 0, core._PX_, core._PY_);
				}
				// 日历面板
				var days = Math.floor(t / DAY_LEN);
				var year = 180 + Math.floor(days / 360);
				var mon = Math.floor(days / 30) % 12;
				var day = days % 30 + 1;
				var cal = year + '季 ' + MONTHS[mon] + (day < 10 ? '0' : '') + day;
				if (cal !== lastCal || transT < 1) {
					lastCal = cal;
					calCv.clearRect(0, 0, core._PX_, core._PY_);
					calCv.fillStyle = 'rgba(0,0,0,0.59)';
					calCv.fillRect(6, 6, 148, 28);
					calCv.strokeStyle = 'rgba(255,215,0,0.71)';
					calCv.lineWidth = 1;
					calCv.strokeRect(6.5, 6.5, 147, 27);
					calCv.font = 'bold 14px SimSun, "Microsoft YaHei", sans-serif';
					calCv.textAlign = 'center';
					calCv.fillStyle = 'rgba(0,0,0,0.63)';
					calCv.fillText(cal, 6 + 74 + 1, 6 + 19 + 1);
					calCv.fillStyle = PHASES[pi][2];
					calCv.fillText(cal, 6 + 74, 6 + 19);
					calCv.textAlign = 'left';
				}
			}
			requestAnimationFrame(tick);
		})();
	// 【东方星冥线】全屏裸屏: 迷你悬浮HUD(HP/魔塔能量) + 右下圆钮(道具/存档/设置)
	(function () {
		var SYS = 'rgba(192,224,255,0.85)', WHITE = 'rgb(255,255,255)';
		var hudCv = null, hudCtx = null, btnCv = null, btnCtx = null, lastHp = null;
		var BR = 15;
		var BTNS = []; // 按钮已移到底部工具栏
		function pill(c, x, y, w, h, text, fillColor, ratio) {
			c.fillStyle = 'rgba(20,16,40,0.72)';
			c.fillRect(x, y, w, h);
			if (ratio != null && ratio > 0) {
				c.fillStyle = fillColor;
				c.fillRect(x + 1, y + 1, (w - 2) * Math.min(1, ratio), h - 2);
			}
			c.strokeStyle = SYS; c.lineWidth = 1;
			c.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
			c.font = 'bold 10px Verdana, "Microsoft YaHei", sans-serif';
			c.textAlign = 'center'; c.textBaseline = 'middle';
			c.fillStyle = 'rgba(0,0,0,0.7)';
			c.fillText(text, x + w / 2 + 1, y + h / 2 + 1);
			c.fillStyle = WHITE;
			c.fillText(text, x + w / 2, y + h / 2);
		}
		function btnAt(x, y) {
			for (var i = 0; i < 3; i++) {
				var dx = x - (24 + i * 40), dy = y - 20;
				if (dx * dx + dy * dy <= BR * BR) return i;
			}
			return -1;
		}
		function toLocal(e) {
			var r = btnCv.getBoundingClientRect();
			return { x: (e.clientX - r.left) * 128 / r.width, y: (e.clientY - r.top) * 40 / r.height };
		}
		function onBtn(e) {
			var p = toLocal(e), i = btnAt(p.x, p.y);
			if (i >= 0) { e.stopPropagation(); e.preventDefault(); BTNS[i].fn(); }
		}
		function onMove(e) {
			var p = toLocal(e);
			btnCv.style.cursor = btnAt(p.x, p.y) >= 0 ? 'pointer' : 'default';
		}
		function tick() {
			requestAnimationFrame(tick);
			var gd = core.dom && core.dom.gameDraw;
			if (!gd) return;
			if (!hudCv) {
				hudCv = document.createElement('canvas');
				hudCv.id = 'miniHud';
				hudCv.width = 416; hudCv.height = 416;
				hudCv.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;z-index:135;pointer-events:none;';
				gd.appendChild(hudCv);
				hudCtx = hudCv.getContext('2d');
				}
			var playing = core.isPlaying() && core.status && core.status.hero;
			hudCv.style.display = playing ? 'block' : 'none';
		if (!playing) { lastHp = null; return; }
			var hero = core.status.hero;
			// 魔塔能量统计 (沿用原HUD逻辑: 进塔设上限3000, 按掉血消耗)
			var fid = core.status.floorId || '';
			var inTower = fid.indexOf('f1_') === 0 || fid.indexOf('f3_') === 0;
			if (inTower && !core.getFlag('g_energy_max', 0)) core.setFlag('g_energy_max', 3000);
			if (lastHp != null && hero.hp < lastHp) core.setFlag('g_energy_used', core.getFlag('g_energy_used', 0) + (lastHp - hero.hp));
			lastHp = hero.hp;
			var PX = core._PX_ || 416, PY = core._PY_ || 416;
			if (hudCv.width !== PX) { hudCv.width = PX; hudCv.height = PY; }
			var c = hudCtx;
			c.clearRect(0, 0, PX, PY);
			// HP已由左侧状态栏显示，迷你HUD只保留能量条
			var topY = fid === 'f0_garden' ? 38 : 6;
			var emax = core.getFlag('g_energy_max', 0);
			if (inTower && emax > 0) {
				var remain = Math.max(0, emax - core.getFlag('g_energy_used', 0));
				pill(c, 6, topY + 20, 116, 16, remain + '/' + emax, 'rgb(150,140,255)', remain / emax);
			}
			}
			requestAnimationFrame(tick);
	})();
		// 【东方星冥线】复刻原版开机动画+标题画面 (Main + Scene_Title, 800x480虚拟分辨率)
		(function () {
			var VW = 800, VH = 480;
			var T_SPLASH_IN = 1.125, T_SPLASH_HOLD = 3.875, T_SPLASH_OUT = 0.75; // 45f/155f/30f @40fps
			var T_FOG = 3.0, T_LOGO = 9.25, T_BTN = 0.75;                        // 120f/370f/30f
			var booted = false; // 首次=完整开机动画, 之后回标题直接进按钮
			var ov = null;

			function img(n) { return core.material.images.images[n]; }

			function stopOverlay() {
				if (!ov) return;
				cancelAnimationFrame(ov.raf);
				window.removeEventListener('resize', ov.onResize);
				ov.cv.removeEventListener('mousemove', ov.onMove);
				ov.cv.removeEventListener('mousedown', ov.onDown);
				window.removeEventListener('keydown', ov.onKey, true);
				if (ov.cv.parentNode) ov.cv.parentNode.removeChild(ov.cv);
				ov = null;
			}

			function showTitle() {
				stopOverlay();
				core.dom.startPanel.style.display = 'none';
				var cv = document.createElement('canvas');
				cv.id = 'titleFx';
				cv.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;z-index:9999;background:#000;cursor:default;';
				core.dom.gameDraw.appendChild(cv);
				var ctx = cv.getContext('2d');
				ov = { cv: cv, ctx: ctx, phase: '', t0: 0, sel: -1, raf: 0, fadeTo: null,
					sakura: [], clock: 0, frameTick: 0, watchReplay: false };
				for (var i = 0; i < 30; i++) { // 樱花30粒, 复刻 RPG::Weather type10
					var st = Math.floor(Math.random() * 100);
					ov.sakura.push({ x: Math.random() * VW, y: Math.random() * (VH + 100) - 50,
						f0: i % 11, drift: (st % 2 === 0) ? (st < 10 ? -40 : 40) : 0 });
				}
				function resize() { // 跟随 gameDraw 实际显示尺寸, 按 dpr 渲染防糊
					var dpr = window.devicePixelRatio || 1;
					var w = Math.round(cv.clientWidth * dpr), h = Math.round(cv.clientHeight * dpr);
					if (w > 0 && h > 0 && (cv.width !== w || cv.height !== h)) { cv.width = w; cv.height = h; }
				}
				window.addEventListener('resize', resize);
				resize();
				ov.onResize = resize;

				function kick() { // 浏览器音频解锁: 每次交互重试
					try { core.control.checkBgm(); } catch (e) {}
				}
				function wantBgm() { core.playBgm('bgm_title.mp3'); }

				function toVirtual(e) { // CSS坐标→设备像素→虚拟800x480
					var r = cv.getBoundingClientRect();
					var dpr = r.width > 0 ? cv.width / r.width : 1;
					var px = (e.clientX - r.left) * dpr, py = (e.clientY - r.top) * dpr;
					var s = Math.min(cv.width / VW, cv.height / VH);
					return { x: (px - (cv.width - VW * s) / 2) / s, y: (py - (cv.height - VH * s) / 2) / s };
				}
				var BTN = [
					{ n: 'title_new_n.png', s: 'title_new_s.png', y: 336 },
					{ n: 'title_load_n.png', s: 'title_load_s.png', d: 'title_load_d.png', y: 384 },
					{ n: 'title_replay_n.png', s: 'title_replay_s.png', y: 432 }
				];
				function hasSave() {
					return core.saves && core.saves.ids && Object.keys(core.saves.ids).length > 0;
				}
				function hitAt(p) {
					for (var i = 0; i < 3; i++)
						if (p.x >= 324 && p.x <= 476 && p.y >= BTN[i].y - 16 && p.y <= BTN[i].y + 16) return i;
					return -1;
				}
				function setPhase(p) { ov.phase = p; ov.t0 = performance.now(); }
				function skipIntro() { setPhase('btnFade'); wantBgm(); }

				ov.onMove = function (e) {
					if (!ov || ov.phase !== 'title') return;
					var h = hitAt(toVirtual(e));
					if (h === 1 && !hasSave()) h = -1;
					if (h !== ov.sel) { ov.sel = h; if (h >= 0) core.playSound('光标移动'); }
				};
				ov.onDown = function (e) {
					if (!ov) return;
					kick();
					if (ov.phase === 'title') {
						var h = hitAt(toVirtual(e));
						if (h === 1 && !hasSave()) h = -1;
						if (h >= 0) confirm(h);
					} else if (ov.phase !== 'fadeout') skipIntro();
				};
				ov.onKey = function (e) {
					if (!ov) return;
					kick();
					if (ov.phase === 'title') {
						var k = e.keyCode;
						if (k === 40 || k === 38) {
							var d = k === 40 ? 1 : -1, n = ov.sel < 0 ? 0 : ov.sel;
							for (var i = 0; i < 3; i++) {
								n = (n + d + 3) % 3;
								if (n !== 1 || hasSave()) break;
							}
							if (n !== ov.sel) { ov.sel = n; core.playSound('光标移动'); }
							e.preventDefault(); e.stopPropagation();
						} else if (k === 13 || k === 32 || k === 67) {
							if (ov.sel >= 0) confirm(ov.sel);
							e.preventDefault(); e.stopPropagation();
						}
					} else if (ov.phase !== 'fadeout') { skipIntro(); e.stopPropagation(); }
				};
				cv.addEventListener('mousemove', ov.onMove);
				cv.addEventListener('mousedown', ov.onDown);
				window.addEventListener('keydown', ov.onKey, true);

				function confirm(i) {
					core.playSound('确定');
					if (i === 2) { // 录像回放: 保留标题, 回放真正开始后再撤
						ov.watchReplay = true;
						core.chooseReplayFile();
						return;
					}
					setPhase('fadeout');
					ov.fadeTo = function () {
						stopOverlay();
						if (i === 0) { core.dom.startPanel.style.display = 'none'; core.events.startGame(''); }
						else { core.control.checkBgm(); core.load(); }
					};
				}

				function drawC(im, cx, cy, op, zoom) {
					if (!im || op <= 0) return;
					ctx.globalAlpha = Math.min(1, op);
					var w = im.width * (zoom || 1), h = im.height * (zoom || 1);
					ctx.drawImage(im, cx - w / 2, cy - h / 2, w, h);
					ctx.globalAlpha = 1;
				}

				var last = performance.now();
				function frame(now) {
					if (!ov) return;
					ov.raf = requestAnimationFrame(frame);
					resize(); // gameDraw 尺寸可能随引擎缩放变化
					var dt = Math.min(0.1, (now - last) / 1000); last = now;
					var t = (now - ov.t0) / 1000;
					if (ov.watchReplay && (core.isPlaying() || (core.status.replay && core.status.replay.replaying))) {
						ov.watchReplay = false;
						setPhase('fadeout');
						ov.fadeTo = function () { stopOverlay(); };
						return;
					}
					if (ov.phase === 'splashIn' && t >= T_SPLASH_IN) setPhase('splashHold');
					else if (ov.phase === 'splashHold' && t >= T_SPLASH_HOLD) setPhase('splashOut');
					else if (ov.phase === 'splashOut' && t >= T_SPLASH_OUT) setPhase('fogFade');
					else if (ov.phase === 'fogFade' && t >= T_FOG) { setPhase('logoAnim'); wantBgm(); }
					else if (ov.phase === 'logoAnim' && t >= T_LOGO) setPhase('btnFade');
					else if (ov.phase === 'btnFade' && t >= T_BTN) { setPhase('title'); if (ov.sel < 0) ov.sel = hasSave() ? 1 : 0; }
					else if (ov.phase === 'fadeout' && t >= 0.5) { var f = ov.fadeTo; ov.fadeTo = null; if (f) f(); return; }

					var sakuraOn = ['logoAnim', 'btnFade', 'title', 'fadeout'].indexOf(ov.phase) >= 0;
					if (sakuraOn) {
						ov.clock += dt;
						if (ov.clock >= 0.375) { ov.clock -= 0.375; ov.frameTick++; }
						ov.sakura.forEach(function (p) {
							p.y += 40 * dt; p.x += p.drift * dt;
							if (p.y > VH + 8) { p.y = -8 - Math.random() * 40; p.x = Math.random() * VW; }
							if (p.x < -8) p.x = VW + 8; else if (p.x > VW + 8) p.x = -8;
						});
					}

					var w = cv.width, h = cv.height;
					var s = Math.min(w / VW, h / VH);
					ctx.setTransform(1, 0, 0, 1, 0, 0);
					ctx.fillStyle = '#000'; ctx.fillRect(0, 0, w, h);
					ctx.setTransform(s, 0, 0, s, (w - VW * s) / 2, (h - VH * s) / 2);
					ctx.save();
					ctx.beginPath(); ctx.rect(0, 0, VW, VH); ctx.clip();

					var ph = ov.phase;
					if (ph === 'splashIn' || ph === 'splashHold' || ph === 'splashOut') {
						var op = ph === 'splashIn' ? t / T_SPLASH_IN : ph === 'splashHold' ? 1 : 1 - t / T_SPLASH_OUT;
						var sp = img('title_splash.png');
						if (sp) { ctx.globalAlpha = Math.max(0, Math.min(1, op)); ctx.drawImage(sp, 80, 0); ctx.globalAlpha = 1; }
					} else {
						var bgX = 0, bgOp = 1, l1 = 1, l3x = 400, l3o = 1, l2y = 240, l2o = 1;
						if (ph === 'fogFade') { bgOp = t / T_FOG; bgX = -480; l1 = l3o = l2o = 0; }
						else if (ph === 'logoAnim') {
							bgX = -480 + 480 * Math.min(1, t / T_LOGO);
							l1 = Math.min(1, t / 3);
							if (t >= 1 && t <= 4) { var u = (t - 1) / 3; l3x = 840 - 440 * u; l3o = u; }
							else if (t < 1) l3o = 0;
							if (t >= 1.75 && t <= 4.75) { var v = (t - 1.75) / 3; l2y = -200 + 440 * v; l2o = v; }
							else if (t < 1.75) l2o = 0;
						}
						var bg = img('title_back.png');
						if (bg) { ctx.globalAlpha = Math.min(1, bgOp); ctx.drawImage(bg, bgX, 0); ctx.globalAlpha = 1; }
						drawC(img('title_logo1.png'), 400, 240, l1);
						drawC(img('title_logo3.png'), l3x, 240, l3o);
						drawC(img('title_logo2.png'), 400, l2y, l2o);
						if (ph === 'btnFade' || ph === 'title' || ph === 'fadeout') {
							var bop = ph === 'btnFade' ? t / T_BTN : 1;
							var sv = hasSave();
							for (var i = 0; i < 3; i++) {
								var b = BTN[i], sel = ov.sel === i && ph === 'title';
								if (i === 1 && !sv) drawC(img(b.d), 400, b.y, bop, 1);
								else if (sel) drawC(img(b.s), 400, b.y, bop, 1.08);
								else drawC(img(b.n), 400, b.y, bop, 1);
							}
						}
						if (sakuraOn) {
							ov.sakura.forEach(function (p) {
								var im = img('title_sakura' + ((p.f0 + ov.frameTick) % 11) + '.png');
								if (im) ctx.drawImage(im, p.x - 8, p.y - 8);
							});
						}
						if (ph === 'fadeout') {
							ctx.globalAlpha = Math.min(1, t / 0.5);
							ctx.fillStyle = '#000'; ctx.fillRect(0, 0, VW, VH);
							ctx.globalAlpha = 1;
						}
					}
					ctx.restore();
				}
				if (!booted) { booted = true; setPhase('splashIn'); core.playSound('logo1.mp3'); }
				else { setPhase('btnFade'); wantBgm(); }
				ov.raf = requestAnimationFrame(frame);
			}

			control.prototype.showStartAnimate = function (noAnimate, callback) {
				core.control._showStartAnimate_resetDom();
				core.dom.startPanel.style.display = 'none';
				core.dom.startTop.style.display = 'none';
				showTitle();
			};
		})();
	},
	"drawLight": function () {

		// 绘制灯光/漆黑层效果。调用方式 core.plugin.drawLight(...)
		// 【参数说明】
		// name：必填，要绘制到的画布名；可以是一个系统画布，或者是个自定义画布；如果不存在则创建
		// color：可选，只能是一个0~1之间的数，为不透明度的值。不填则默认为0.9。
		// lights：可选，一个数组，定义了每个独立的灯光。
		//        其中每一项是三元组 [x,y,r] x和y分别为该灯光的横纵坐标，r为该灯光的半径。
		// lightDec：可选，0到1之间，光从多少百分比才开始衰减（在此范围内保持全亮），不设置默认为0。
		//        比如lightDec为0.5代表，每个灯光部分内圈50%的范围全亮，50%以后才开始快速衰减。
		// 【调用样例】
		// core.plugin.drawLight('curtain'); // 在curtain层绘制全图不透明度0.9，等价于更改画面色调为[0,0,0,0.9]。
		// core.plugin.drawLight('ui', 0.95, [[25,11,46]]); // 在ui层绘制全图不透明度0.95，其中在(25,11)点存在一个半径为46的灯光效果。
		// core.plugin.drawLight('test', 0.2, [[25,11,46,0.1]]); // 创建一个test图层，不透明度0.2，其中在(25,11)点存在一个半径为46的灯光效果，灯光中心不透明度0.1。
		// core.plugin.drawLight('test2', 0.9, [[25,11,46],[105,121,88],[301,221,106]]); // 创建test2图层，且存在三个灯光效果，分别是中心(25,11)半径46，中心(105,121)半径88，中心(301,221)半径106。
		// core.plugin.drawLight('xxx', 0.3, [[25,11,46],[105,121,88,0.2]], 0.4); // 存在两个灯光效果，它们在内圈40%范围内保持全亮，40%后才开始衰减。
		this.drawLight = function (name, color, lights, lightDec) {

			// 清空色调层；也可以修改成其它层比如animate/weather层，或者用自己创建的canvas
			var ctx = core.getContextByName(name);
			if (ctx == null) {
				if (typeof name == 'string')
					ctx = core.createCanvas(name, 0, 0, core._PX_ || core.__PIXELS__, core._PY_ || core.__PIXELS__, 98);
				else return;
			}

			ctx.mozImageSmoothingEnabled = false;
			ctx.webkitImageSmoothingEnabled = false;
			ctx.msImageSmoothingEnabled = false;
			ctx.imageSmoothingEnabled = false;

			core.clearMap(name);
			// 绘制色调层，默认不透明度
			if (color == null) color = 0.9;
			ctx.fillStyle = "rgba(0,0,0," + color + ")";
			ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

			lightDec = core.clamp(lightDec, 0, 1);

			// 绘制每个灯光效果
			ctx.globalCompositeOperation = 'destination-out';
			lights.forEach(function (light) {
				// 坐标，半径，中心不透明度
				var x = light[0],
					y = light[1],
					r = light[2];
				// 计算衰减距离
				var decDistance = parseInt(r * lightDec);
				// 正方形区域的直径和左上角坐标
				var grd = ctx.createRadialGradient(x, y, decDistance, x, y, r);
				grd.addColorStop(0, "rgba(0,0,0,1)");
				grd.addColorStop(1, "rgba(0,0,0,0)");
				ctx.beginPath();
				ctx.fillStyle = grd;
				ctx.arc(x, y, r, 0, 2 * Math.PI);
				ctx.fill();
			});
			ctx.globalCompositeOperation = 'source-over';
			// 可以在任何地方（如afterXXX或自定义脚本事件）调用函数，方法为  core.plugin.xxx();
		}
	},
	"shop": function () {
		// 【全局商店】相关的功能
		// 
		// 打开一个全局商店
		// shopId：要打开的商店id；noRoute：是否不计入录像
		this.openShop = function (shopId, noRoute) {
			var shop = core.status.shops[shopId];
			// Step 1: 检查能否打开此商店
			if (!this.canOpenShop(shopId)) {
				core.drawTip("该商店尚未开启");
				return false;
			}

			// Step 2: （如有必要）记录打开商店的脚本事件
			if (!noRoute) {
				core.status.route.push("shop:" + shopId);
			}

			// Step 3: 检查道具商店 or 公共事件
			if (shop.item) {
				if (core.openItemShop) {
					core.openItemShop(shopId);
				} else {
					core.playSound('操作失败');
					core.insertAction("道具商店插件不存在！请检查是否存在该插件！");
				}
				return;
			}
			if (shop.commonEvent) {
				core.insertCommonEvent(shop.commonEvent, shop.args);
				return;
			}

			_shouldProcessKeyUp = true;

			// Step 4: 执行标准公共商店    
			core.insertAction(this._convertShop(shop));
			return true;
		}

		////// 将一个全局商店转变成可预览的公共事件 //////
		this._convertShop = function (shop) {
			return [
				{ "type": "function", "function": "function() {core.addFlag('@temp@shop', 1);}" },
				{
					"type": "while",
					"condition": "true",
					"data": [
						// 检测能否访问该商店
						{
							"type": "if",
							"condition": "core.isShopVisited('" + shop.id + "')",
							"true": [
								// 可以访问，直接插入执行效果
								{ "type": "function", "function": "function() { core.plugin._convertShop_replaceChoices('" + shop.id + "', false) }" },
							],
							"false": [
								// 不能访问的情况下：检测能否预览
								{
									"type": "if",
									"condition": shop.disablePreview,
									"true": [
										// 不可预览，提示并退出
										{ "type": "playSound", "name": "操作失败" },
										"当前无法访问该商店！",
										{ "type": "break" },
									],
									"false": [
										// 可以预览：将商店全部内容进行替换
										{ "type": "tip", "text": "当前处于预览模式，不可购买" },
										{ "type": "function", "function": "function() { core.plugin._convertShop_replaceChoices('" + shop.id + "', true) }" },
									]
								}
							]
						}
					]
				},
				{ "type": "function", "function": "function() {core.addFlag('@temp@shop', -1);}" }
			];
		}

		this._convertShop_replaceChoices = function (shopId, previewMode) {
			var shop = core.status.shops[shopId];
			var choices = (shop.choices || []).filter(function (choice) {
				if (choice.condition == null || choice.condition == '') return true;
				try { return core.calValue(choice.condition); } catch (e) { return true; }
			}).map(function (choice) {
				var ableToBuy = core.calValue(choice.need);
				return {
					"text": choice.text,
					"icon": choice.icon,
					"color": ableToBuy && !previewMode ? choice.color : [153, 153, 153, 1],
					"action": ableToBuy && !previewMode ? [{ "type": "playSound", "name": "商店" }].concat(choice.action) : [
						{ "type": "playSound", "name": "操作失败" },
						{ "type": "tip", "text": previewMode ? "预览模式下不可购买" : "购买条件不足" }
					]
				};
			}).concat({ "text": "离开", "action": [{ "type": "playSound", "name": "取消" }, { "type": "break" }] });
			core.insertAction({ "type": "choices", "text": shop.text, "choices": choices });
		}

		/// 是否访问过某个快捷商店
		this.isShopVisited = function (id) {
			if (!core.hasFlag("__shops__")) core.setFlag("__shops__", {});
			var shops = core.getFlag("__shops__");
			if (!shops[id]) shops[id] = {};
			return shops[id].visited;
		}

		/// 当前应当显示的快捷商店列表
		this.listShopIds = function () {
			return Object.keys(core.status.shops).filter(function (id) {
				return core.isShopVisited(id) || !core.status.shops[id].mustEnable;
			});
		}

		/// 是否能够打开某个商店
		this.canOpenShop = function (id) {
			if (this.isShopVisited(id)) return true;
			var shop = core.status.shops[id];
			if (shop.item || shop.commonEvent || shop.mustEnable) return false;
			return true;
		}

		/// 启用或禁用某个快捷商店
		this.setShopVisited = function (id, visited) {
			if (!core.hasFlag("__shops__")) core.setFlag("__shops__", {});
			var shops = core.getFlag("__shops__");
			if (!shops[id]) shops[id] = {};
			if (visited) shops[id].visited = true;
			else delete shops[id].visited;
		}

		/// 能否使用快捷商店
		this.canUseQuickShop = function (id) {
			// 如果返回一个字符串，表示不能，字符串为不能使用的提示
			// 返回null代表可以使用

			// 检查当前楼层的canUseQuickShop选项是否为false
			if (core.status.thisMap.canUseQuickShop === false)
				return '当前楼层不能使用快捷商店。';
			return null;
		}

		var _shouldProcessKeyUp = true;

		/// 允许商店X键退出
		core.registerAction('keyUp', 'shops', function (keycode) {
			if (!core.status.lockControl || core.status.event.id != 'action') return false;
			if ((keycode == 13 || keycode == 32) && !_shouldProcessKeyUp) {
				_shouldProcessKeyUp = true;
				return true;
			}

			if (!core.hasFlag("@temp@shop") || core.status.event.data.type != 'choices') return false;
			var data = core.status.event.data.current;
			var choices = data.choices;
			var topIndex = core.actions._getChoicesTopIndex(choices.length);
			if (keycode == 88 || keycode == 27) { // X, ESC
				core.actions._clickAction(core._HALF_WIDTH_ || core.__HALF_SIZE__, topIndex + choices.length - 1);
				return true;
			}
			return false;
		}, 60);

		/// 允许长按空格或回车连续执行操作
		core.registerAction('keyDown', 'shops', function (keycode) {
			if (!core.status.lockControl || !core.hasFlag("@temp@shop") || core.status.event.id != 'action') return false;
			if (core.status.event.data.type != 'choices') return false;
			core.status.onShopLongDown = true;
			var data = core.status.event.data.current;
			var choices = data.choices;
			var topIndex = core.actions._getChoicesTopIndex(choices.length);
			if (keycode == 13 || keycode == 32) { // Space, Enter
				core.actions._clickAction(core._HALF_WIDTH_ || core.__HALF_SIZE__, topIndex + core.status.event.selection);
				_shouldProcessKeyUp = false;
				return true;
			}
			return false;
		}, 60);

		// 允许长按屏幕连续执行操作
		core.registerAction('longClick', 'shops', function (x, y, px, py) {
			if (!core.status.lockControl || !core.hasFlag("@temp@shop") || core.status.event.id != 'action') return false;
			if (core.status.event.data.type != 'choices') return false;
			var data = core.status.event.data.current;
			var choices = data.choices;
			var topIndex = core.actions._getChoicesTopIndex(choices.length);
			if (Math.abs(x - (core._HALF_WIDTH_ || core.__HALF_SIZE__)) <= 2 && y >= topIndex && y < topIndex + choices.length) {
				core.actions._clickAction(x, y);
				return true;
			}
			return false;
		}, 60);
	},
	"removeMap": function () {
		// 高层塔砍层插件，删除后不会存入存档，不可浏览地图也不可飞到。
		// 推荐用法：
		// 对于超高层或分区域塔，当在1区时将2区以后的地图删除；1区结束时恢复2区，进二区时删除1区地图，以此类推
		// 这样可以大幅减少存档空间，以及加快存读档速度

		// 删除楼层
		// core.removeMaps("MT1", "MT300") 删除MT1~MT300之间的全部层
		// core.removeMaps("MT10") 只删除MT10层
		this.removeMaps = function (fromId, toId) {
			toId = toId || fromId;
			var fromIndex = core.floorIds.indexOf(fromId),
				toIndex = core.floorIds.indexOf(toId);
			if (toIndex < 0) toIndex = core.floorIds.length - 1;
			flags.__visited__ = flags.__visited__ || {};
			flags.__removed__ = flags.__removed__ || [];
			flags.__disabled__ = flags.__disabled__ || {};
			flags.__leaveLoc__ = flags.__leaveLoc__ || {};
			for (var i = fromIndex; i <= toIndex; ++i) {
				var floorId = core.floorIds[i];
				if (core.status.maps[floorId].deleted) continue;
				delete flags.__visited__[floorId];
				flags.__removed__.push(floorId);
				delete flags.__disabled__[floorId];
				delete flags.__leaveLoc__[floorId];
				(core.status.autoEvents || []).forEach(function (event) {
					if (event.floorId == floorId && event.currentFloor) {
						core.autoEventExecuting(event.symbol, false);
						core.autoEventExecuted(event.symbol, false);
					}
				});
				core.status.maps[floorId].deleted = true;
				core.status.maps[floorId].canFlyTo = false;
				core.status.maps[floorId].canFlyFrom = false;
				core.status.maps[floorId].cannotViewMap = true;
			}
		}

		// 恢复楼层
		// core.resumeMaps("MT1", "MT300") 恢复MT1~MT300之间的全部层
		// core.resumeMaps("MT10") 只恢复MT10层
		this.resumeMaps = function (fromId, toId) {
			toId = toId || fromId;
			var fromIndex = core.floorIds.indexOf(fromId),
				toIndex = core.floorIds.indexOf(toId);
			if (toIndex < 0) toIndex = core.floorIds.length - 1;
			flags.__removed__ = flags.__removed__ || [];
			for (var i = fromIndex; i <= toIndex; ++i) {
				var floorId = core.floorIds[i];
				if (!core.status.maps[floorId].deleted) continue;
				flags.__removed__ = flags.__removed__.filter(function (f) { return f != floorId; });
				core.status.maps[floorId] = core.loadFloor(floorId);
			}
		}

		// 分区砍层相关
		var inAnyPartition = function (floorId) {
			var inPartition = false;
			(core.floorPartitions || []).forEach(function (floor) {
				var fromIndex = core.floorIds.indexOf(floor[0]);
				var toIndex = core.floorIds.indexOf(floor[1]);
				var index = core.floorIds.indexOf(floorId);
				if (fromIndex < 0 || index < 0) return;
				if (toIndex < 0) toIndex = core.floorIds.length - 1;
				if (index >= fromIndex && index <= toIndex) inPartition = true;
			});
			return inPartition;
		}

		// 分区砍层
		this.autoRemoveMaps = function (floorId) {
			if (main.mode != 'play' || !inAnyPartition(floorId)) return;
			// 根据分区信息自动砍层与恢复
			(core.floorPartitions || []).forEach(function (floor) {
				var fromIndex = core.floorIds.indexOf(floor[0]);
				var toIndex = core.floorIds.indexOf(floor[1]);
				var index = core.floorIds.indexOf(floorId);
				if (fromIndex < 0 || index < 0) return;
				if (toIndex < 0) toIndex = core.floorIds.length - 1;
				if (index >= fromIndex && index <= toIndex) {
					core.resumeMaps(core.floorIds[fromIndex], core.floorIds[toIndex]);
				} else {
					core.removeMaps(core.floorIds[fromIndex], core.floorIds[toIndex]);
				}
			});
		}
	},
	"fiveLayers": function () {
		// 是否启用五图层（增加背景2层和前景2层） 将__enable置为true即会启用；启用后请保存后刷新编辑器
		// 背景层2将会覆盖背景层 被事件层覆盖 前景层2将会覆盖前景层
		// 另外 请注意加入两个新图层 会让大地图的性能降低一些
		// 插件作者：ad
		var __enable = false;
		if (!__enable) return;

		// 创建新图层
		function createCanvas (name, zIndex) {
			if (!name) return;
			var canvas = document.createElement('canvas');
			canvas.id = name;
			canvas.className = 'gameCanvas anti-aliasing';
			// 编辑器模式下设置zIndex会导致加入的图层覆盖优先级过高
			if (main.mode != "editor") canvas.style.zIndex = zIndex || 0;
			// 将图层插入进游戏内容
			document.getElementById('gameDraw').appendChild(canvas);
			var ctx = canvas.getContext('2d');
			core.canvas[name] = ctx;
			canvas.width = core._PX_ || core.__PIXELS__;
			canvas.height = core._PY_ || core.__PIXELS__;
			return canvas;
		}

		var bg2Canvas = createCanvas('bg2', 20);
		var fg2Canvas = createCanvas('fg2', 63);
		// 大地图适配
		core.bigmap.canvas = ["bg2", "fg2", "bg", "event", "event2", "fg", "damage"];
		core.initStatus.bg2maps = {};
		core.initStatus.fg2maps = {};

		if (main.mode == 'editor') {
			/*插入编辑器的图层 不做此步新增图层无法在编辑器显示*/
			// 编辑器图层覆盖优先级 eui > efg > fg(前景层) > event2(48*32图块的事件层) > event(事件层) > bg(背景层)
			// 背景层2(bg2) 插入事件层(event)之前(即bg与event之间)
			document.getElementById('mapEdit').insertBefore(bg2Canvas, document.getElementById('event'));
			// 前景层2(fg2) 插入编辑器前景(efg)之前(即fg之后)
			document.getElementById('mapEdit').insertBefore(fg2Canvas, document.getElementById('ebm'));
			// 原本有三个图层 从4开始添加
			var num = 4;
			// 新增图层存入editor.dom中
			editor.dom.bg2c = core.canvas.bg2.canvas;
			editor.dom.bg2Ctx = core.canvas.bg2;
			editor.dom.fg2c = core.canvas.fg2.canvas;
			editor.dom.fg2Ctx = core.canvas.fg2;
			editor.dom.maps.push('bg2map', 'fg2map');
			editor.dom.canvas.push('bg2', 'fg2');

			// 创建编辑器上的按钮
			var createCanvasBtn = function (name) {
				// 电脑端创建按钮
				var input = document.createElement('input');
				// layerMod4/layerMod5
				var id = 'layerMod' + num++;
				// bg2map/fg2map
				var value = name + 'map';
				input.type = 'radio';
				input.name = 'layerMod';
				input.id = id;
				input.value = value;
				editor.dom[id] = input;
				input.onchange = function () {
					editor.uifunctions.setLayerMod(value);
				}
				return input;
			};

			var createCanvasBtn_mobile = function (name) {
				// 手机端往选择列表中添加子选项
				var input = document.createElement('option');
				var id = 'layerMod' + num++;
				var value = name + 'map';
				input.name = 'layerMod';
				input.value = value;
				editor.dom[id] = input;
				return input;
			};
			if (!editor.isMobile) {
				var input = createCanvasBtn('bg2');
				var input2 = createCanvasBtn('fg2');
				// 获取事件层及其父节点
				var child = document.getElementById('layerMod'),
					parent = child.parentNode;
				// 背景层2插入事件层前
				parent.insertBefore(input, child);
				// 不能直接更改背景层2的innerText 所以创建文本节点
				var txt = document.createTextNode('bg2');
				// 插入事件层前(即新插入的背景层2前)
				parent.insertBefore(txt, child);
				// 向最后插入前景层2(即插入前景层后)
				parent.appendChild(input2);
				var txt2 = document.createTextNode('fg2');
				parent.appendChild(txt2);
				parent.childNodes[2].replaceWith("bg");
				parent.childNodes[6].replaceWith("事件");
				parent.childNodes[8].replaceWith("fg");
			} else {
				var input = createCanvasBtn_mobile('bg2');
				var input2 = createCanvasBtn_mobile('fg2');
				// 手机端因为是选项 所以可以直接改innerText
				input.innerText = '背景层2';
				input2.innerText = '前景层2';
				var parent = document.getElementById('layerMod');
				parent.insertBefore(input, parent.children[1]);
				parent.appendChild(input2);
			}
		}

		var _loadFloor_doNotCopy = core.maps._loadFloor_doNotCopy;
		core.maps._loadFloor_doNotCopy = function () {
			return ["bg2map", "fg2map"].concat(_loadFloor_doNotCopy());
		}
		////// 绘制背景和前景层 //////
		core.maps._drawBg_draw = function (floorId, toDrawCtx, cacheCtx, config) {
			config.ctx = cacheCtx;
			core.maps._drawBg_drawBackground(floorId, config);
			// ------ 调整这两行的顺序来控制是先绘制贴图还是先绘制背景图块；后绘制的覆盖先绘制的。
			core.maps._drawFloorImages(floorId, config.ctx, 'bg', null, null, config.onMap);
			core.maps._drawBgFgMap(floorId, 'bg', config);
			if (config.onMap) {
				core.drawImage(toDrawCtx, cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
				core.clearMap('bg2');
				core.clearMap(cacheCtx);
			}
			core.maps._drawBgFgMap(floorId, 'bg2', config);
			if (config.onMap) core.drawImage('bg2', cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
			config.ctx = toDrawCtx;
		}
		core.maps._drawFg_draw = function (floorId, toDrawCtx, cacheCtx, config) {
			config.ctx = cacheCtx;
			// ------ 调整这两行的顺序来控制是先绘制贴图还是先绘制前景图块；后绘制的覆盖先绘制的。
			core.maps._drawFloorImages(floorId, config.ctx, 'fg', null, null, config.onMap);
			core.maps._drawBgFgMap(floorId, 'fg', config);
			if (config.onMap) {
				core.drawImage(toDrawCtx, cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
				core.clearMap('fg2');
				core.clearMap(cacheCtx);
			}
			core.maps._drawBgFgMap(floorId, 'fg2', config);
			if (config.onMap) core.drawImage('fg2', cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
			config.ctx = toDrawCtx;
		}
		////// 移动判定 //////
		core.maps._generateMovableArray_arrays = function (floorId) {
			return {
				bgArray: this.getBgMapArray(floorId),
				fgArray: this.getFgMapArray(floorId),
				eventArray: this.getMapArray(floorId),
				bg2Array: this._getBgFgMapArray('bg2', floorId),
				fg2Array: this._getBgFgMapArray('fg2', floorId)
			};
		}
	},
	"itemShop": function () {
		// 道具商店相关的插件
		// 可在全塔属性-全局商店中使用「道具商店」事件块进行编辑（如果找不到可以在入口方块中找）

		var shopId = null; // 当前商店ID
		var type = 0; // 当前正在选中的类型，0买入1卖出
		var selectItem = 0; // 当前正在选中的道具
		var selectCount = 0; // 当前已经选中的数量
		var page = 0;
		var totalPage = 0;
		var totalMoney = 0;
		var list = [];
		var shopInfo = null; // 商店信息
		var choices = []; // 商店选项
		var use = 'money';
		var useText = '金币';

		var bigFont = core.ui._buildFont(20, false),
			middleFont = core.ui._buildFont(18, false);

		this._drawItemShop = function () {
			// 绘制道具商店

			// Step 1: 背景和固定的几个文字
			core.ui._createUIEvent();
			core.clearMap('uievent');
			core.ui.clearUIEventSelector();
			core.setTextAlign('uievent', 'left');
			core.setTextBaseline('uievent', 'top');
			core.fillRect('uievent', 0, 0, core._PX_, core._PY_, 'black');
			core.drawWindowSkin('winskin.png', 'uievent', 0, 0, 416, 56);
			core.drawWindowSkin('winskin.png', 'uievent', 0, 56, 312, 56);
			core.drawWindowSkin('winskin.png', 'uievent', 0, 112, 312, 304);
			core.drawWindowSkin('winskin.png', 'uievent', 312, 56, 104, 56);
			core.drawWindowSkin('winskin.png', 'uievent', 312, 112, 104, 304);
			core.setFillStyle('uievent', 'white');
			core.setStrokeStyle('uievent', 'white');
			core.fillText("uievent", "购买", 32, 74, 'white', bigFont);
			core.fillText("uievent", "卖出", 132, 74);
			core.fillText("uievent", "离开", 232, 74);
			core.fillText("uievent", "当前" + useText, 324, 66, null, middleFont);
			core.setTextAlign("uievent", "right");
			core.fillText("uievent", core.formatBigNumber(core.status.hero[use]), 405, 89);
			core.setTextAlign("uievent", "left");
			core.ui.drawUIEventSelector(1, "winskin.png", 22 + 100 * type, 66, 60, 33);
			if (selectItem != null) {
				core.setTextAlign('uievent', 'center');
				core.fillText("uievent", type == 0 ? "买入个数" : "卖出个数", 364, 320, null, bigFont);
				core.fillText("uievent", "<   " + selectCount + "   >", 364, 350);
				core.fillText("uievent", "确定", 364, 380);
			}

			// Step 2：获得列表并展示
			list = choices.filter(function (one) {
				if (one.condition != null && one.condition != '') {
					try { if (!core.calValue(one.condition)) return false; } catch (e) { }
				}
				return (type == 0 && one.money != null) || (type == 1 && one.sell != null);
			});
			var per_page = 6;
			totalPage = Math.ceil(list.length / per_page);
			page = Math.floor((selectItem || 0) / per_page) + 1;

			// 绘制分页
			if (totalPage > 1) {
				var half = 156;
				core.setTextAlign('uievent', 'center');
				core.fillText('uievent', page + " / " + totalPage, half, 388, null, middleFont);
				if (page > 1) core.fillText('uievent', '上一页', half - 80, 388);
				if (page < totalPage) core.fillText('uievent', '下一页', half + 80, 388);
			}
			core.setTextAlign('uievent', 'left');

			// 绘制每一项
			var start = (page - 1) * per_page;
			for (var i = 0; i < per_page; ++i) {
				var curr = start + i;
				if (curr >= list.length) break;
				var item = list[curr];
				core.drawIcon('uievent', item.id, 10, 125 + i * 40);
				core.setTextAlign('uievent', 'left');
				core.fillText('uievent', core.material.items[item.id].name, 50, 132 + i * 40, null, bigFont);
				core.setTextAlign('uievent', 'right');
				core.fillText('uievent', (type == 0 ? core.calValue(item.money) : core.calValue(item.sell)) + useText + "/个", 300, 133 + i * 40, null, middleFont);
				core.setTextAlign("uievent", "left");
				if (curr == selectItem) {
					// 绘制描述，文字自动放缩
					var text = core.material.items[item.id].text || "该道具暂无描述";
					try { text = core.replaceText(text); } catch (e) { }
					for (var fontSize = 20; fontSize >= 8; fontSize -= 2) {
						var config = { left: 10, fontSize: fontSize, maxWidth: 403 };
						var height = core.getTextContentHeight(text, config);
						if (height <= 50) {
							config.top = (56 - height) / 2;
							core.drawTextContent("uievent", text, config);
							break;
						}
					}
					core.ui.drawUIEventSelector(2, "winskin.png", 8, 120 + i * 40, 295, 40);
					if (type == 0 && item.number != null) {
						core.fillText("uievent", "存货", 324, 132, null, bigFont);
						core.setTextAlign("uievent", "right");
						core.fillText("uievent", item.number, 406, 132, null, null, 40);
					} else if (type == 1) {
						core.fillText("uievent", "数量", 324, 132, null, bigFont);
						core.setTextAlign("uievent", "right");
						core.fillText("uievent", core.itemCount(item.id), 406, 132, null, null, 40);
					}
					core.setTextAlign("uievent", "left");
					core.fillText("uievent", "预计" + useText, 324, 250);
					core.setTextAlign("uievent", "right");
					totalMoney = selectCount * (type == 0 ? core.calValue(item.money) : core.calValue(item.sell));
					core.fillText("uievent", core.formatBigNumber(totalMoney), 405, 280);

					core.setTextAlign("uievent", "left");
					core.fillText("uievent", type == 0 ? "已购次数" : "已卖次数", 324, 170);
					core.setTextAlign("uievent", "right");
					core.fillText("uievent", (type == 0 ? item.money_count : item.sell_count) || 0, 405, 200);
				}
			}

			core.setTextAlign('uievent', 'left');
			core.setTextBaseline('uievent', 'alphabetic');
		}

		var _add = function (item, delta) {
			if (item == null) return;
			selectCount = core.clamp(
				selectCount + delta, 0,
				Math.min(type == 0 ? Math.floor(core.status.hero[use] / core.calValue(item.money)) : core.itemCount(item.id),
					type == 0 && item.number != null ? item.number : Number.MAX_SAFE_INTEGER)
			);
		}

		var _confirm = function (item) {
			if (item == null || selectCount == 0) return;
			if (type == 0) {
				core.status.hero[use] -= totalMoney;
				core.getItem(item.id, selectCount);
				core.stopSound();
				core.playSound('确定');
				if (item.number != null) item.number -= selectCount;
				item.money_count = (item.money_count || 0) + selectCount;
			} else {
				core.status.hero[use] += totalMoney;
				core.removeItem(item.id, selectCount);
				core.playSound('确定');
				core.drawTip("成功卖出" + selectCount + "个" + core.material.items[item.id].name, item.id);
				if (item.number != null) item.number += selectCount;
				item.sell_count = (item.sell_count || 0) + selectCount;
			}
			selectCount = 0;
		}

		this._performItemShopKeyBoard = function (keycode) {
			var item = list[selectItem] || null;
			// 键盘操作
			switch (keycode) {
				case 38: // up
					if (selectItem == null) break;
					if (selectItem == 0) selectItem = null;
					else selectItem--;
					selectCount = 0;
					break;
				case 37: // left
					if (selectItem == null) {
						if (type > 0) type--;
						break;
					}
					_add(item, -1);
					break;
				case 39: // right
					if (selectItem == null) {
						if (type < 2) type++;
						break;
					}
					_add(item, 1);
					break;
				case 40: // down
					if (selectItem == null) {
						if (list.length > 0) selectItem = 0;
						break;
					}
					if (list.length == 0) break;
					selectItem = Math.min(selectItem + 1, list.length - 1);
					selectCount = 0;
					break;
				case 13:
				case 32: // Enter/Space
					if (selectItem == null) {
						if (type == 2)
							core.insertAction({ "type": "break" });
						else if (list.length > 0)
							selectItem = 0;
						break;
					}
					_confirm(item);
					break;
				case 27: // ESC
					if (selectItem == null) {
						core.insertAction({ "type": "break" });
						break;
					}
					selectItem = null;
					break;
			}
		}

		this._performItemShopClick = function (px, py) {
			var item = list[selectItem] || null;
			// 鼠标操作
			if (px >= 22 && px <= 82 && py >= 71 && py <= 102) {
				// 买
				if (type != 0) {
					type = 0;
					selectItem = null;
					selectCount = 0;
				}
				return;
			}
			if (px >= 122 && px <= 182 && py >= 71 && py <= 102) {
				// 卖
				if (type != 1) {
					type = 1;
					selectItem = null;
					selectCount = 0;
				}
				return;
			}
			if (px >= 222 && px <= 282 && py >= 71 && py <= 102) // 离开
				return core.insertAction({ "type": "break" });
			// < >
			if (px >= 318 && px <= 341 && py >= 348 && py <= 376)
				return _add(item, -1);
			if (px >= 388 && px <= 416 && py >= 348 && py <= 376)
				return _add(item, 1);
			// 确定
			if (px >= 341 && px <= 387 && py >= 380 && py <= 407)
				return _confirm(item);

			// 上一页/下一页
			if (px >= 45 && px <= 105 && py >= 388) {
				if (page > 1) {
					selectItem -= 6;
					selectCount = 0;
				}
				return;
			}
			if (px >= 208 && px <= 268 && py >= 388) {
				if (page < totalPage) {
					selectItem = Math.min(selectItem + 6, list.length - 1);
					selectCount = 0;
				}
				return;
			}

			// 实际区域
			if (px >= 9 && px <= 300 && py >= 120 && py < 360) {
				if (list.length == 0) return;
				var index = parseInt((py - 120) / 40);
				var newItem = 6 * (page - 1) + index;
				if (newItem >= list.length) newItem = list.length - 1;
				if (newItem != selectItem) {
					selectItem = newItem;
					selectCount = 0;
				}
				return;
			}
		}

		this._performItemShopAction = function () {
			if (flags.type == 0) return this._performItemShopKeyBoard(flags.keycode);
			else return this._performItemShopClick(flags.px, flags.py);
		}

		this.openItemShop = function (itemShopId) {
			shopId = itemShopId;
			type = 0;
			page = 0;
			selectItem = null;
			selectCount = 0;
			core.isShopVisited(itemShopId);
			shopInfo = flags.__shops__[shopId];
			if (shopInfo.choices == null) shopInfo.choices = core.clone(core.status.shops[shopId].choices);
			choices = shopInfo.choices;
			use = core.status.shops[shopId].use;
			if (use != 'exp') use = 'money';
			useText = use == 'money' ? '金币' : '经验';

			core.insertAction([{
				"type": "while",
				"condition": "true",
				"data": [
					{ "type": "function", "function": "function () { core.plugin._drawItemShop(); }" },
					{ "type": "wait" },
					{ "type": "function", "function": "function() { core.plugin._performItemShopAction(); }" }
				]
			},
			{
				"type": "function",
				"function": "function () { core.deleteCanvas('uievent'); core.ui.clearUIEventSelector(); }"
			}
			]);
		}

	},
	"enemyLevel": function () {
		// 此插件将提供怪物手册中的怪物境界显示
		// 使用此插件需要先给每个怪物定义境界，方法如下：
		// 点击怪物的【配置表格】，找到“【怪物】相关的表格配置”，然后在【名称】仿照增加境界定义：
		/*
		 "level": {
			  "_leaf": true,
			  "_type": "textarea",
			  "_string": true,
			  "_data": "境界"
		 },
		 */
		// 然后保存刷新，可以看到怪物的属性定义中出现了【境界】。再开启本插件即可。

		// 是否开启本插件，默认禁用；将此改成 true 将启用本插件。
		var __enable = false;
		if (!__enable) return;

		// 这里定义每个境界的显示颜色；可以写'red', '#RRGGBB' 或者[r,g,b,a]四元数组
		var levelToColors = {
			"萌新一阶": "red",
			"萌新二阶": "#FF0000",
			"萌新三阶": [255, 0, 0, 1],
		};

		// 复写 _drawBook_drawName
		var originDrawBook = core.ui._drawBook_drawName;
		core.ui._drawBook_drawName = function (index, enemy, top, left, width) {
			// 如果没有境界，则直接调用原始代码绘制
			if (!enemy.level) return originDrawBook.call(core.ui, index, enemy, top, left, width);
			// 存在境界，则额外进行绘制
			core.setTextAlign('ui', 'center');
			if (enemy.specialText.length == 0) {
				core.fillText('ui', enemy.name, left + width / 2,
					top + 27, '#DDDDDD', this._buildFont(17, true));
				core.fillText('ui', enemy.level, left + width / 2,
					top + 51, core.arrayToRGBA(levelToColors[enemy.level] || '#DDDDDD'), this._buildFont(14, true));
			} else {
				core.fillText('ui', enemy.name, left + width / 2,
					top + 20, '#DDDDDD', this._buildFont(17, true), width);
				switch (enemy.specialText.length) {
					case 1:
						core.fillText('ui', enemy.specialText[0], left + width / 2,
							top + 38, core.arrayToRGBA((enemy.specialColor || [])[0] || '#FF6A6A'),
							this._buildFont(14, true), width);
						break;
					case 2:
						// Step 1: 计算字体
						var text = enemy.specialText[0] + "  " + enemy.specialText[1];
						core.setFontForMaxWidth('ui', text, width, this._buildFont(14, true));
						// Step 2: 计算总宽度
						var totalWidth = core.calWidth('ui', text);
						var leftWidth = core.calWidth('ui', enemy.specialText[0]);
						var rightWidth = core.calWidth('ui', enemy.specialText[1]);
						// Step 3: 绘制
						core.fillText('ui', enemy.specialText[0], left + (width + leftWidth - totalWidth) / 2,
							top + 38, core.arrayToRGBA((enemy.specialColor || [])[0] || '#FF6A6A'));
						core.fillText('ui', enemy.specialText[1], left + (width + totalWidth - rightWidth) / 2,
							top + 38, core.arrayToRGBA((enemy.specialColor || [])[1] || '#FF6A6A'));
						break;
					default:
						core.fillText('ui', '多属性...', left + width / 2,
							top + 38, '#FF6A6A', this._buildFont(14, true), width);
				}
				core.fillText('ui', enemy.level, left + width / 2,
					top + 56, core.arrayToRGBA(levelToColors[enemy.level] || '#DDDDDD'), this._buildFont(14, true));
			}
		}

		// 也可以复写其他的属性颜色如怪物攻防等，具体参见下面的例子的注释部分
		core.ui._drawBook_drawRow1 = function (index, enemy, top, left, width, position) {
			// 绘制第一行
			core.setTextAlign('ui', 'left');
			var b13 = this._buildFont(13, true),
				f13 = this._buildFont(13, false);
			var col1 = left,
				col2 = left + width * 9 / 25,
				col3 = left + width * 17 / 25;
			core.fillText('ui', '生命', col1, position, '#DDDDDD', f13);
			core.fillText('ui', core.formatBigNumber(enemy.hp || 0), col1 + 30, position, /*'red' */ null, b13);
			core.fillText('ui', '攻击', col2, position, null, f13);
			core.fillText('ui', core.formatBigNumber(enemy.atk || 0), col2 + 30, position, /* '#FF0000' */ null, b13);
			core.fillText('ui', '防御', col3, position, null, f13);
			core.fillText('ui', core.formatBigNumber(enemy.def || 0), col3 + 30, position, /* [255, 0, 0, 1] */ null, b13);
		}
	},
	"multiHeros": function () {
		// 多角色插件
		// Step 1: 启用本插件
		// Step 2: 定义每个新的角色各项初始数据（参见下方注释）
		// Step 3: 在游戏中的任何地方都可以调用 `core.changeHero()` 进行切换；也可以 `core.changeHero(1)` 来切换到某个具体的角色上

		// 是否开启本插件，默认禁用；将此改成 true 将启用本插件。
		var __enable = false;
		if (!__enable) return;

		// 在这里定义全部的新角色属性
		// 请注意，在这里定义的内容不会多角色共用，在切换时会进行恢复。
		// 你也可以自行新增或删除，比如不共用金币则可以加上"money"的初始化，不共用道具则可以加上"items"的初始化，
		// 多角色共用hp的话则删除hp，等等。总之，不共用的属性都在这里进行定义就好。
		var hero1 = {
			"floorId": "MT0", // 该角色初始楼层ID；如果共用楼层可以注释此项
			"image": "brave.png", // 角色的行走图名称；此项必填不然会报错
			"name": "1号角色",
			"lv": 1,
			"hp": 10000, // 如果HP共用可注释此项
			"atk": 1000,
			"def": 1000,
			"mdef": 0,
			// "money": 0, // 如果要不共用金币则取消此项注释
			// "exp": 0, // 如果要不共用经验则取消此项注释
			"loc": { "x": 0, "y": 0, "direction": "up" }, // 该角色初始位置；如果共用位置可注释此项
			"items": {
				"tools": {}, // 如果共用消耗道具（含钥匙）则可注释此项
				// "constants": {}, // 如果不共用永久道具（如手册）可取消注释此项
				"equips": {}, // 如果共用在背包的装备可注释此项
			},
			"equipment": [], // 如果共用装备可注释此项；此项和上面的「共用在背包的装备」需要拥有相同状态，不然可能出现问题
		};
		// 也可以类似新增其他角色
		// 新增的角色，各项属性共用与不共用的选择必须和上面完全相同，否则可能出现问题。
		// var hero2 = { ...

		var heroCount = 2; // 包含默认角色在内总共多少个角色，该值需手动修改。

		this.initHeros = function () {
			core.setFlag("hero1", core.clone(hero1)); // 将属性值存到变量中
			// core.setFlag("hero2", core.clone(hero2)); // 更多的角色也存入变量中；每个定义的角色都需要新增一行

			// 检测是否存在装备
			if (hero1.equipment) {
				if (!hero1.items || !hero1.items.equips) {
					alert('多角色插件的equipment和道具中的equips必须拥有相同状态！');
				}
				// 存99号套装为全空
				var saveEquips = core.getFlag("saveEquips", []);
				saveEquips[99] = [];
				core.setFlag("saveEquips", saveEquips);
			} else {
				if (hero1.items && hero1.items.equips) {
					alert('多角色插件的equipment和道具中的equips必须拥有相同状态！');
				}
			}
		}

		// 在游戏开始注入initHeros
		var _startGame_setHard = core.events._startGame_setHard;
		core.events._startGame_setHard = function () {
			_startGame_setHard.call(core.events);
			core.initHeros();
		}

		// 切换角色
		// 可以使用 core.changeHero() 来切换到下一个角色
		// 也可以 core.changeHero(1) 来切换到某个角色（默认角色为0）
		this.changeHero = function (toHeroId) {
			var currHeroId = core.getFlag("heroId", 0); // 获得当前角色ID
			if (toHeroId == null) {
				toHeroId = (currHeroId + 1) % heroCount;
			}
			if (currHeroId == toHeroId) return;

			var saveList = Object.keys(hero1);

			// 保存当前内容
			var toSave = {};
			// 暂时干掉 drawTip 和 音效，避免切装时的提示
			var _drawTip = core.ui.drawTip;
			core.ui.drawTip = function () { };
			var _playSound = core.control.playSound;
			core.control.playSound = function () { }
			// 记录当前录像，因为可能存在换装问题
			core.clearRouteFolding();
			var routeLength = core.status.route.length;
			// 优先判定装备
			if (hero1.equipment) {
				core.items.quickSaveEquip(100 + currHeroId);
				core.items.quickLoadEquip(99);
			}

			saveList.forEach(function (name) {
				if (name == 'floorId') toSave[name] = core.status.floorId; // 楼层单独设置
				else if (name == 'items') {
					toSave.items = core.clone(core.status.hero.items);
					Object.keys(toSave.items).forEach(function (one) {
						if (!hero1.items[one]) delete toSave.items[one];
					});
				} else toSave[name] = core.clone(core.status.hero[name]); // 使用core.clone()来创建新对象
			});

			core.setFlag("hero" + currHeroId, toSave); // 将当前角色信息进行保存
			var data = core.getFlag("hero" + toHeroId); // 获得要切换的角色保存内容

			// 设置角色的属性值
			saveList.forEach(function (name) {
				if (name == "floorId");
				else if (name == "items") {
					Object.keys(core.status.hero.items).forEach(function (one) {
						if (data.items[one]) core.status.hero.items[one] = core.clone(data.items[one]);
					});
				} else {
					core.status.hero[name] = core.clone(data[name]);
				}
			});
			// 最后装上装备
			if (hero1.equipment) {
				core.items.quickLoadEquip(100 + toHeroId);
			}

			core.ui.drawTip = _drawTip;
			core.control.playSound = _playSound;
			core.status.route = core.status.route.slice(0, routeLength);
			core.control._bindRoutePush();

			// 插入事件：改变角色行走图并进行楼层切换
			var toFloorId = data.floorId || core.status.floorId;
			var toLoc = data.loc || core.status.hero.loc;
			core.insertAction([
				{ "type": "setHeroIcon", "name": data.image || "hero.png" }, // 改变行走图
				// 同层则用changePos，不同层则用changeFloor；这是为了避免共用楼层造成触发eachArrive
				toFloorId != core.status.floorId ? {
					"type": "changeFloor",
					"floorId": toFloorId,
					"loc": [toLoc.x, toLoc.y],
					"direction": toLoc.direction,
					"time": 0 // 可以在这里设置切换时间
				} : { "type": "changePos", "loc": [toLoc.x, toLoc.y], "direction": toLoc.direction }
				// 你还可以在这里执行其他事件，比如增加或取消跟随效果
			]);
			core.setFlag("heroId", toHeroId); // 保存切换到的角色ID
		}
	},
	"heroFourFrames": function () {
		// 样板的勇士/跟随者移动时只使用2、4两帧，观感较差。本插件可以将四帧全用上。

		// 是否启用本插件
		var __enable = true;
		if (!__enable) return;

		["up", "down", "left", "right"].forEach(function (one) {
			// 指定中间帧动画
			core.material.icons.hero[one].midFoot = 2;
		});

		var heroMoving = function (timestamp) {
			if (core.status.heroMoving <= 0) return;
			if (timestamp - core.animateFrame.moveTime > core.values.moveSpeed) {
				core.animateFrame.leftLeg++;
				core.animateFrame.moveTime = timestamp;
			}
			core.drawHero(['stop', 'leftFoot', 'midFoot', 'rightFoot'][core.animateFrame.leftLeg % 4], 4 * core.status.heroMoving);
		}
		core.registerAnimationFrame('heroMoving', true, heroMoving);

		core.events._eventMoveHero_moving = function (step, moveSteps) {
			var curr = moveSteps[0];
			var direction = curr[0], x = core.getHeroLoc('x'), y = core.getHeroLoc('y');
			// ------ 前进/后退
			var o = direction == 'backward' ? -1 : 1;
			if (direction == 'forward' || direction == 'backward') direction = core.getHeroLoc('direction');
			var faceDirection = direction;
			if (direction == 'leftup' || direction == 'leftdown') faceDirection = 'left';
			if (direction == 'rightup' || direction == 'rightdown') faceDirection = 'right';
			core.setHeroLoc('direction', direction);
			if (curr[1] <= 0) {
				core.setHeroLoc('direction', faceDirection);
				moveSteps.shift();
				return true;
			}
			if (step <= 4) core.drawHero('stop', 4 * o * step);
			else if (step <= 8) core.drawHero('leftFoot', 4 * o * step);
			else if (step <= 12) core.drawHero('midFoot', 4 * o * (step - 8));
			else if (step <= 16) core.drawHero('rightFoot', 4 * o * (step - 8)); // if (step == 8) {
			if (step == 8 || step == 16) {
				core.setHeroLoc('x', x + o * core.utils.scan2[direction].x, true);
				core.setHeroLoc('y', y + o * core.utils.scan2[direction].y, true);
				core.updateFollowers();
				curr[1]--;
				if (curr[1] <= 0) moveSteps.shift();
				core.setHeroLoc('direction', faceDirection);
				return step == 16;
			}
			return false;
		}
	},
	"routeFixing": function () {
		// 是否开启本插件，true 表示启用，false 表示禁用。
		var __enable = true;
		if (!__enable) return;
		/*
		 使用说明：启用本插件后，录像回放时您可以用数字键1或6分别切换到原速或24倍速，
		 暂停播放时按数字键7（电脑按N）可以单步播放。（手机端可以点击难度单词切换出数字键）
		 数字键2-5可以进行录像自助精修，具体描述见下（实际弹窗请求您输入时不要带有任何空格）：
		 
		 up down left right 勇士向某个方向「行走一步或撞击」
		 item:ID 使用某件道具，如 item:bomb 表示使用炸弹
		 unEquip:n 卸掉身上第(n+1)件装备（n从0开始），如 unEquip:1 默认表示卸掉盾牌
		 equip:ID 穿上某件装备，如 equip:sword1 表示装上铁剑
		 saveEquip:n 将身上的当前套装保存到第n套快捷套装（n从0开始）
		 loadEquip:n 快捷换上之前保存好的第n套套装
		 fly:ID 使用楼传飞到某一层，如 fly:MT10 表示飞到主塔10层
		 choices:none 确认框/选择项「超时」（作者未设置超时时间则此项视为缺失）
		 choices:n 确认框/选择项选择第(n+1)项（选择项n从0开始，确认框n为0表示「确定」，1表示「取消」）
		 选择项n为负数时表示选择倒数第 -n 项，如 -1 表示最后一项（V2.8.2起标准全局商店的「离开」项）
		 此项缺失的话，确认框将选择作者指定的默认项（初始光标位置），选择项将弹窗请求补选（后台录像验证中选最后一项，可以复写函数来修改）
		 shop:ID 打开某个全局商店，如 shop:itemShop 表示打开道具商店。因此连载塔千万不要中途修改商店ID！
		 turn 单击勇士（Z键）转身，core.turnHero() 会产生此项，因此通过事件等方式强制让勇士转向应该用 core.setHeroLoc()
		 turn:dir 勇士转向某个方向，dir 可以为 up down left right（此项一般是读取自动存档产生的，属于样板的不良特性，请勿滥用）
		 getNext 轻按获得身边道具，优先获得面前的（面前没有则按上下左右顺序依次获得），身边如果没有道具则此项会被跳过
		 input:none “等待用户操作事件”中超时（作者未设置超时时间则此项会导致报错）
		 input:xxx 可能表示“等待用户操作事件”的一个操作（如按键操作将直接记录 input:keycode ），
		 也可能表示一个“接受用户输入数字”的输入，后者的情况下 xxx 为输入的整数。此项缺失的话前者将直接报错，后者将用0代替（后者现在支持负数了）
		 input2:xxx 可能表示“读取全局存储（core.getGlobal）”读取到的值，也可能表示一个“接受用户输入文本”的输入，
		 两种情况下 xxx 都为 base64 编码。此项缺失的话前者将重新现场读取，后者将用空字符串代替
		 no 走到可穿透的楼梯上不触发楼层切换事件，通过本插件可以让勇士停在旁边没有障碍物的楼梯上哦～
		 move:x:y 尝试瞬移到 [x,y] 点（不改变朝向），该点甚至可以和勇士相邻或者位于视野外
		 key:n 松开键值为n的键，如 key:49 表示松开大键盘数字键1，默认会触发使用破墙镐
		 click:n:px:py 点击自绘状态栏，n为0表示横屏1表示竖屏，[px,py] 为点击的像素坐标
		 random:n 生成了随机数n，即 core.rand2(num) 的返回结果，n必须在 [0,num-1] 范围，num必须为正整数。此项缺失将导致现场重新随机生成数值，可能导致回放结果不一致！
		 作者自定义的新项（一般为js对象，可以先JSON.stringify()再core.encodeBase64()得到纯英文数字的内容）需要用(半角圆括弧)括起来。
		 
		 当您使用数字键5将一些项追加到即将播放内容的开头时，请注意要逆序逐项追加，或者每追加一项就按下数字键7或字母键N单步播放一步。
		 但是【input input2 random choices】是被动读取的，单步播放如果触发了相应的事件就会连续读取，这时候只能提前逐项追加好。
		 电脑端熟练以后推荐直接在控制台操作 core.status.route 和 core.status.replay.toReplay（后者录像回放时才有），配合 core.push() 和 core.unshift() 更加灵活自由哦！
		 */
		core.actions.registerAction('onkeyUp', '_sys_onkeyUp_replay', function (e) {
			if (this._checkReplaying()) {
				if (e.keyCode == 27) // ESCAPE
					core.stopReplay();
				else if (e.keyCode == 90) // Z
					core.speedDownReplay();
				else if (e.keyCode == 67) // C
					core.speedUpReplay();
				else if (e.keyCode == 32) // SPACE
					core.triggerReplay();
				else if (e.keyCode == 65) // A
					core.rewindReplay();
				else if (e.keyCode == 83) // S
					core.control._replay_SL();
				else if (e.keyCode == 88) // X
					core.control._replay_book();
				else if (e.keyCode == 33 || e.keyCode == 34) // PgUp/PgDn
					core.control._replay_viewMap();
				else if (e.keyCode == 78) // N
					core.stepReplay();
				else if (e.keyCode == 84) // T
					core.control._replay_toolbox();
				else if (e.keyCode == 81) // Q
					core.control._replay_equipbox();
				else if (e.keyCode == 66) // B
					core.ui._drawStatistics();
				else if (e.keyCode == 49 || e.keyCode == 54) // 1/6，原速/24倍速播放
					core.setReplaySpeed(e.keyCode == 49 ? 1 : 24);
				else if (e.keyCode > 49 && e.keyCode < 54) { // 2-5，录像精修
					switch (e.keyCode - 48) {
						case 2: // pop
							alert("您已移除已录制内容的最后一项：" + core.status.route.pop());
							break;
						case 3: // push
							core.utils.myprompt("请输入您要追加到已录制内容末尾的项：", "", function (value) {
								if (value != null) core.status.route.push(value);
							});
							break;
						case 4: // shift
							alert("您已移除即将播放内容的第一项：" + core.status.replay.toReplay.shift());
							break;
						case 5: // unshift
							core.utils.myprompt("请输入您要追加到即将播放内容开头的项：", "", function (value) {
								if (value != null) core.status.replay.toReplay.unshift(value);
							});
					}
				}
				return true;
			}
		}, 100);
	},
	"numpad": function () {
		// 样板自带的整数输入事件为白屏弹窗且可以误输入任意非法内容但不支持负整数，观感较差。本插件可以将其美化成仿RM样式，使其支持负整数同时带有音效
		// 另一方面，4399等第三方平台不允许使用包括 core.myprompt() 和 core.myconfirm() 在内的弹窗，因此也需要此插件来替代，不然类似生命魔杖的道具就不好实现了
		// 关于负整数输入，V2.8.2原生支持其录像的压缩和解压，只是默认的 core.events._action_input() 函数将负数取了绝对值，可以只复写下面的 core.isReplaying() 部分来取消

		// 是否启用本插件，false表示禁用，true表示启用
		var __enable = true;
		if (!__enable) return;

		core.events._action_input = function (data, x, y, prefix) { // 复写整数输入事件
			if (core.isReplaying()) { // 录像回放时，处理方式不变，但增加负整数支持
				core.events.__action_getInput(core.replaceText(data.text, prefix), false, function (value) {
					value = parseInt(value) || 0; // 去掉了取绝对值的步骤
					core.status.route.push("input:" + value);
					core.setFlag("input", value);
					core.doAction();
				});
			} else {
				// 正常游戏中，采用暂停录制的方式然后用事件流循环“绘制-等待-变量操作”三板斧实现（按照13*13适配的）。
				// 您可以自行修改循环内的内容来适配15*15或其他需求，或干脆作为公共事件编辑。
				core.insertAction([
					// 记录当前录像长度，下面的循环结束后裁剪。达到“暂停录制”的效果
					{ "type": "function", "function": "function(){flags['@temp@length']=core.status.route.length}" },
					{ "type": "setValue", "name": "flag:input", "value": "0" },
					{
						"type": "while",
						"condition": "true",
						"data": [
							{ "type": "drawBackground", "background": "winskin.png", "x": 16, "y": 16, "width": 384, "height": 384 },
							{ "type": "drawIcon", "id": "X10181", "x": 32, "y": 288 },
							{ "type": "drawIcon", "id": "X10185", "x": 64, "y": 288 },
							{ "type": "drawIcon", "id": "X10186", "x": 96, "y": 288 },
							{ "type": "drawIcon", "id": "X10187", "x": 128, "y": 288 },
							{ "type": "drawIcon", "id": "X10188", "x": 160, "y": 288 },
							{ "type": "drawIcon", "id": "X10189", "x": 192, "y": 288 },
							{ "type": "drawIcon", "id": "X10193", "x": 224, "y": 288 },
							{ "type": "drawIcon", "id": "X10194", "x": 256, "y": 288 },
							{ "type": "drawIcon", "id": "X10195", "x": 288, "y": 288 },
							{ "type": "drawIcon", "id": "X10196", "x": 320, "y": 288 },
							{ "type": "drawIcon", "id": "X10197", "x": 352, "y": 288 },
							{ "type": "drawIcon", "id": "X10286", "x": 32, "y": 352 },
							{ "type": "drawIcon", "id": "X10169", "x": 96, "y": 352 },
							{ "type": "drawIcon", "id": "X10232", "x": 128, "y": 352 },
							{ "type": "drawIcon", "id": "X10185", "x": 320, "y": 352 },
							{ "type": "drawIcon", "id": "X10242", "x": 352, "y": 352 },
							{ "type": "fillBoldText", "x": 48, "y": 256, "style": [255, 255, 255, 1], "font": "bold 32px Consolas", "text": "${flag:input}" },
							{ "type": "fillBoldText", "x": 32, "y": 48, "style": [255, 255, 255, 1], "font": "16px Consolas", "text": core.replaceText(data.text, prefix) },
							{
								"type": "wait",
								"forceChild": true,
								"data": [{
									"case": "keyboard",
									"keycode": "48,49,50,51,52,53,54,55,56,57",
									"action": [
										// 按下数字键，追加到已输入内容的末尾，但禁止越界。变量：keycode-48就是末位数字
										{ "type": "playSound", "name": "光标移动" },
										{
											"type": "if",
											"condition": "(flag:input<0)",
											"true": [
												{ "type": "setValue", "name": "flag:input", "value": "10*flag:input-(flag:keycode-48)" },
											],
											"false": [
												{ "type": "setValue", "name": "flag:input", "value": "10*flag:input+(flag:keycode-48)" },
											]
										},
										{ "type": "setValue", "name": "flag:input", "value": "core.clamp(flag:input,-9e15,9e15)" },
									]
								},
								{
									"case": "keyboard",
									"keycode": "189",
									"action": [
										// 按下减号键，变更已输入内容的符号
										{ "type": "playSound", "name": "跳跃" },
										{ "type": "setValue", "name": "flag:input", "value": "-flag:input" },
									]
								},
								{
									"case": "keyboard",
									"keycode": "8",
									"action": [
										// 按下退格键，从已输入内容的末尾删除一位
										{ "type": "playSound", "name": "取消" },
										{ "type": "setValue", "name": "flag:input", "operator": "//=", "value": "10" },
									]
								},
								{
									"case": "keyboard",
									"keycode": "27",
									"action": [
										// 按下ESC键，清空已输入内容
										{ "type": "playSound", "name": "读档" },
										{ "type": "setValue", "name": "flag:input", "value": "0" },
									]
								},
								{
									"case": "keyboard",
									"keycode": "13",
									"action": [
										// 按下回车键，确定
										{ "type": "break", "n": 1 },
									]
								},
								{
									"case": "mouse",
									"px": [32, 63],
									"py": [288, 320],
									"action": [
										// 点击减号，变号。右边界写63防止和下面重叠
										{ "type": "playSound", "name": "跳跃" },
										{ "type": "setValue", "name": "flag:input", "value": "-flag:input" },
									]
								},
								{
									"case": "mouse",
									"px": [64, 384],
									"py": [288, 320],
									"action": [
										// 点击数字，追加到已输入内容的末尾，但禁止越界。变量：x-2就是末位数字
										{ "type": "playSound", "name": "光标移动" },
										{
											"type": "if",
											"condition": "(flag:input<0)",
											"true": [
												{ "type": "setValue", "name": "flag:input", "value": "10*flag:input-(flag:x-2)" },
											],
											"false": [
												{ "type": "setValue", "name": "flag:input", "value": "10*flag:input+(flag:x-2)" },
											]
										},
										{ "type": "setValue", "name": "flag:input", "value": "core.clamp(flag:input,-9e15,9e15)" },
									]
								},
								{
									"case": "mouse",
									"px": [32, 64],
									"py": [352, 384],
									"action": [
										// 点击左箭头，退格
										{ "type": "playSound", "name": "取消" },
										{ "type": "setValue", "name": "flag:input", "operator": "//=", "value": "10" },
									]
								},
								{
									"case": "mouse",
									"px": [96, 160],
									"py": [352, 384],
									"action": [
										// 点击CE，清空
										{ "type": "playSound", "name": "读档" },
										{ "type": "setValue", "name": "flag:input", "value": "0" },
									]
								},
								{
									"case": "mouse",
									"px": [320, 384],
									"py": [352, 384],
									"action": [
										// 点击OK，确定
										{ "type": "break", "n": 1 },
									]
								}
								]
							}
						]
					},
					{ "type": "clearMap" },
					// 裁剪录像，只保留'input:n'，然后继续录制
					{ "type": "function", "function": "function(){core.status.route.splice(flags['@temp@length']);core.status.route.push('input:'+core.getFlag('input',0))}" }
				], x, y);
				core.events.doAction();
			}
		}
	},
	"sprites": function () {
		// 基于canvas的sprite化，摘编整理自万宁魔塔
		// 
		// ---------------------------------------- 第一部分 js代码 （必装） --------------------------------------- //

		/* ---------------- 用法说明 ---------------- *
		 * 1. 创建sprite: var sprite = new Sprite(x, y, w, h, z, reference, name);
		 *   其中x y w h为画布的横纵坐标及长宽，reference为参考系，只能填game（相对于游戏画面）和window（相对于窗口）
		 *   且当为相对游戏画面时，长宽与坐标将会乘以放缩比例（相当于用createCanvas创建）
		 *   z为纵深，表示不同元素之间的覆盖关系，大的覆盖小的
		 *   name为自定义名称，可以不填
		 * 2. 删除: sprite.destroy();
		 * 3. 设置css特效: sprite.setCss(css);
		 *   其中css直接填 box-shadow: 0px 0px 10px black;的形式即可，与style标签与css文件内写法相同
		 *   对于已设置的特效，如果之后不需要再次设置，可以不填
		 * 4. 添加事件监听器: sprite.addEventListener(); 用法与html元素的addEventListener完全一致
		 * 5. 移除事件监听器: sprite.removeEventListener(); 用法与html元素的removeEventListener完全一致
		 * 6. 属性列表
		 *   (1) sprite.x | sprite.y | sprite.width | sprite.height | sprite.zIndex | sprite.reference 顾名思义
		 *   (2) sprite.canvas 该sprite的画布
		 *   (3) sprite.context 该画布的CanvasRenderingContext2d对象，即样板中常见的ctx
		 *   (4) sprite.count 不要改这个玩意
		 * 7. 使用样板api进行绘制
		 *   示例：
		 *   var ctx = sprite.context;
		 *   core.fillText(ctx, 'xxx', 100, 100);
		 *   core.fillRect(ctx, 0, 0, 50, 50);
		 *   当然也可以使用原生js
		 *   ctx.moveTo(0, 0);
		 *   ctx.bezierCurveTo(50, 50, 100, 0, 100, 50);
		 *   ctx.stroke();
		 * ---------------- 用法说明 ---------------- */

		var count = 0;

		/** 创建一个sprite画布
		 * @param {number} x
		 * @param {number} y
		 * @param {number} w
		 * @param {number} h
		 * @param {number} z
		 * @param {'game' | 'window'} reference 参考系，游戏画面或者窗口
		 * @param {string} name 可选，sprite的名称，方便通过core.dymCanvas获取
		 */
		function Sprite (x, y, w, h, z, reference, name) {
			this.x = x;
			this.y = y;
			this.width = w;
			this.height = h;
			this.zIndex = z;
			this.reference = reference;
			this.canvas = null;
			this.context = null;
			this.count = 0;
			this.name = name || '_sprite_' + count;
			this.style = null;
			/** 初始化 */
			this.init = function () {
				if (reference === 'window') {
					var canvas = document.createElement('canvas');
					this.canvas = canvas;
					this.context = canvas.getContext('2d');
					canvas.width = w;
					canvas.height = h;
					canvas.style.width = w + 'px';
					canvas.style.height = h + 'px';
					canvas.style.position = 'absolute';
					canvas.style.top = y + 'px';
					canvas.style.left = x + 'px';
					canvas.style.zIndex = z.toString();
					document.body.appendChild(canvas);
					this.style = canvas.style;
				} else {
					this.context = core.createCanvas(this.name || '_sprite_' + count, x, y, w, h, z);
					this.canvas = this.context.canvas;
					this.canvas.style.pointerEvents = 'auto';
					this.style = this.canvas.style;
				}
				this.count = count;
				count++;
			}
			this.init();

			/** 设置css特效
			 * @param {string} css
			 */
			this.setCss = function (css) {
				css = css.replace('\n', ';').replace(';;', ';');
				var effects = css.split(';');
				var self = this;
				effects.forEach(function (v) {
					var content = v.split(':');
					var name = content[0];
					var value = content[1];
					name = name.trim().split('-').reduce(function (pre, curr, i, a) {
						if (i === 0 && curr !== '') return curr;
						if (a[0] === '' && i === 1) return curr;
						return pre + curr.toUpperCase()[0] + curr.slice(1);
					}, '');
					var canvas = self.canvas;
					if (name in canvas.style) canvas.style[name] = value;
				});
				return this;
			}

			/** 
			 * 移动sprite
			 * @param {boolean} isDelta 是否是相对位置，如果是，那么sprite会相对于原先的位置进行移动
			 */
			this.move = function (x, y, isDelta) {
				if (x !== undefined && x !== null) this.x = x;
				if (y !== undefined && y !== null) this.y = y;
				if (this.reference === 'window') {
					var ele = this.canvas;
					ele.style.left = x + (isDelta ? parseFloat(ele.style.left) : 0) + 'px';
					ele.style.top = y + (isDelta ? parseFloat(ele.style.top) : 0) + 'px';
				} else core.relocateCanvas(this.context, x, y, isDelta);
				return this;
			}

			/** 
			 * 重新设置sprite的大小
			 * @param {boolean} styleOnly 是否只修改css效果，如果是，那么将会不高清，如果不是，那么会清空画布
			 */
			this.resize = function (w, h, styleOnly) {
				if (w !== undefined && w !== null) this.w = w;
				if (h !== undefined && h !== null) this.h = h;
				if (reference === 'window') {
					var ele = this.canvas;
					ele.style.width = w + 'px';
					ele.style.height = h + 'px';
					if (!styleOnly) {
						ele.width = w;
						ele.height = h;
					}
				} else core.resizeCanvas(this.context, w, h, styleOnly);
				return this;
			}

			/**
			 * 旋转画布
			 */
			this.rotate = function (angle, cx, cy) {
				if (this.reference === 'window') {
					var left = this.x;
					var top = this.y;
					this.canvas.style.transformOrigin = (cx - left) + 'px ' + (cy - top) + 'px';
					if (angle === 0) {
						canvas.style.transform = '';
					} else {
						canvas.style.transform = 'rotate(' + angle + 'deg)';
					}
				} else {
					core.rotateCanvas(this.context, angle, cx, cy);
				}
				return this;
			}

			/**
			 * 清除sprite
			 */
			this.clear = function (x, y, w, h) {
				if (this.reference === 'window') {
					this.context.clearRect(x, y, w, h);
				} else {
					core.clearMap(this.context, x, y, w, h);
				}
				return this;
			}

			/** 删除 */
			this.destroy = function () {
				if (this.reference === 'window') {
					if (this.canvas) document.body.removeChild(this.canvas);
				} else {
					core.deleteCanvas(this.name || '_sprite_' + this.count);
				}
			}

			/** 添加事件监听器 */
			this.addEventListener = function () {
				this.canvas.addEventListener.apply(this.canvas, arguments);
			}

			/** 移除事件监听器 */
			this.removeEventListener = function () {
				this.canvas.removeEventListener.apply(this.canvas, arguments);
			}
		}

		window.Sprite = Sprite;
	},
	"hotReload": function () {
		/* ---------- 功能说明 ---------- *

		1. 当 libs/ main.js index.html 中的任意一个文件被更改后，会自动刷新塔的页面
		2. 修改楼层文件后自动在塔的页面上显示出来，不需要刷新
		3. 修改脚本编辑或插件编写后也能自动更新更改的插件或脚本，但不保证不会出问题（一般都不会有问题的
		4. 修改图块属性、怪物属性等后会自动更新
		5. 当全塔属性被修改时，会自动刷新塔的页面
		6. 样板的 styles.css 被修改后也可以直接显示，不需要刷新
		7. 其余内容修改后不会自动更新也不会刷新

		/* ---------- 使用方式 ---------- *

		1. 前往 https://nodejs.org/en/ 下载node.js的LTS版本（点左边那个绿色按钮）并安装
		2. 将该插件复制到插件编写中
		3. 在造塔群的群文件-魔塔样板·改中找到server.js，下载并放到塔的根目录（与启动服务同一级）
		4. 在该目录下按下shift+鼠标右键（win11只按右键即可），选择在终端打开或在powershell打开
		5. 运行node server.js即可

		*/

		if (main.mode !== 'play' || main.replayChecking) return;

		/**
		 * 发送请求
		 * @param {string} url
		 * @param {string} type
		 * @param {string} data
		 * @returns {Promise<string>}
		 */
		async function post(url, type, data) {
			const xhr = new XMLHttpRequest();
			xhr.open(type, url);
			xhr.send(data);
			const res = await new Promise(res => {
				xhr.onload = e => {
					if (xhr.status !== 200) {
						console.error(`hot reload: http ${xhr.status}`);
						res('@error');
					} else res('success');
				};
				xhr.onerror = e => {
					res('@error');
					console.error(`hot reload: error on connection`);
				};
			});
			if (res === 'success') return xhr.response;
			else return '@error';
		}

		/**
		 * 热重载css
		 * @param {string} data
		 */
		function reloadCss(data) {
			const all = Array.from(document.getElementsByTagName('link'));
			all.forEach(v => {
				if (v.rel !== 'stylesheet') return;
				if (v.href === `http://127.0.0.1:3000/${data}`) {
					v.remove();
					const link = document.createElement('link');
					link.rel = 'stylesheet';
					link.type = 'text/css';
					link.href = data;
					document.head.appendChild(link);
					console.log(`css hot reload: ${data}`);
				}
			});
		}

		/**
		 * 热重载楼层
		 * @param {string} data
		 */
		async function reloadFloor(data) {
			// 首先重新加载main.floors对应的楼层
			await import(`/project/floors/${data}.js?v=${Date.now()}`);
			// 然后写入core.floors并解析
			core.floors[data] = main.floors[data];
			const floor = core.loadFloor(data);
			if (core.isPlaying()) {
				core.status.maps[data] = floor;
				delete core.status.mapBlockObjs[data];
				core.extractBlocks(data);
				if (data === core.status.floorId) {
					core.drawMap(data);
					core.setWeather(
						core.animateFrame.weather.type,
						core.animateFrame.weather.level
					);
				}
				core.updateStatusBar(true, true);
			}
			console.log(`floor hot reload: ${data}`);
		}

		/**
		 * 热重载脚本编辑及插件编写
		 * @param {string} data
		 */
		async function reloadScript(data) {
			if (data === 'plugins') {
				// 插件编写比较好办
				const before = plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1;
				// 这里不能用动态导入，因为动态导入会变成模块，变量就不是全局的了
				const script = document.createElement('script');
				script.src = `/project/plugins.js?v=${Date.now()}`;
				document.body.appendChild(script);
				await new Promise(res => {
					script.onload = () => res('success');
				});
				const after = plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1;
				// 找到差异的函数
				for (const id in before) {
					const fn = before[id];
					if (typeof fn !== 'function') continue;
					if (fn.toString() !== after[id]?.toString()) {
						try {
							core.plugin[id] = after[id];
							core.plugin[id].call(core.plugin);
							core.updateStatusBar(true, true);
							console.log(`plugin hot reload: ${id}`);
						} catch (e) {
							console.error(e);
						}
					}
				}
			} else if (data === 'functions') {
				// 脚本编辑略微麻烦点
				const before = functions_d6ad677b_427a_4623_b50f_a445a3b0ef8a;
				// 这里不能用动态导入，因为动态导入会变成模块，变量就不是全局的了
				const script = document.createElement('script');
				script.src = `/project/functions.js?v=${Date.now()}`;
				document.body.appendChild(script);
				await new Promise(res => {
					script.onload = () => res('success');
				});
				const after = functions_d6ad677b_427a_4623_b50f_a445a3b0ef8a;
				// 找到差异的函数
				for (const mod in before) {
					const fns = before[mod];
					for (const id in fns) {
						const fn = fns[id];
						if (typeof fn !== 'function' || id === 'hasSpecial')
							continue;
						const now = after[mod][id];
						if (fn.toString() !== now.toString()) {
							try {
								if (mod === 'events') {
									core.events.eventdata[id] = now;
								} else if (mod === 'enemys') {
									core.enemys.enemydata[id] = now;
								} else if (mod === 'actions') {
									core.actions.actionsdata[id] = now;
								} else if (mod === 'control') {
									core.control.controldata[id] = now;
								} else if (mod === 'ui') {
									core.ui.uidata[id] = now;
								}
								core.updateStatusBar(true, true);
								console.log(
									`function hot reload: ${mod}.${id}`
								);
							} catch (e) {
								console.error(e);
							}
						}
					}
				}
			}
		}

		/**
		 * 属性热重载，包括全塔属性等
		 * @param {string} data
		 */
		async function reloadData(data) {
			const script = document.createElement('script');
			script.src = `/project/${data}.js?v=${Date.now()}`;
			document.body.appendChild(script);
			await new Promise(res => {
				script.onload = () => res('success');
			});

			let after;
			if (data === 'data')
				after = data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d;
			if (data === 'enemys')
				after = enemys_fcae963b_31c9_42b4_b48c_bb48d09f3f80;
			if (data === 'icons')
				after = icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1;
			if (data === 'items')
				after = items_296f5d02_12fd_4166_a7c1_b5e830c9ee3a;
			if (data === 'maps')
				after = maps_90f36752_8815_4be8_b32b_d7fad1d0542e;
			if (data === 'events')
				after = events_c12a15a8_c380_4b28_8144_256cba95f760;

			if (data === 'enemys') {
				core.enemys.enemys = after;
				for (var enemyId in after) {
					core.enemys.enemys[enemyId].id = enemyId;
				}
				core.material.enemys = core.getEnemys();
			} else if (data === 'icons') {
				core.icons.icons = after;
				core.material.icons = core.getIcons();
			} else if (data === 'items') {
				core.items.items = after;
				for (var itemId in after) {
					core.items.items[itemId].id = itemId;
				}
				core.material.items = core.getItems();
			} else if (data === 'maps') {
				core.maps.blocksInfo = after;
				core.status.mapBlockObjs = {};
				core.status.number2block = {};
				Object.values(core.status.maps).forEach(v => delete v.blocks);
				core.extractBlocks();
				core.setWeather(
					core.animateFrame.weather.type,
					core.animateFrame.weather.level
				);
				core.drawMap();
			} else if (data === 'events') {
				core.events.commonEvent = after.commonEvent;
			} else if (data === 'data') {
				location.reload();
			}
			core.updateStatusBar(true, true);
			console.log(`data hot reload: ${data}`);
		}

		// 初始化
		(async function () {
			const data = await post('/reload', 'POST', 'test');
			if (data === '@error') {
				console.log(`未检测到node服务，热重载插件将无法使用`);
			} else {
				console.log(`热重载插件加载成功`);
				// reload
				setInterval(async () => {
					const res = await post('/reload', 'POST');
					if (res === '@error') return;
					if (res === 'true') location.reload();
					else return;
				}, 1000);

				// hot reload
				setInterval(async () => {
					const res = await post('/hotReload', 'POST');
					const data = res.split('@@');
					data.forEach(v => {
						if (v === '') return;
						const [type, file] = v.split(':');
						if (type === 'css') reloadCss(file);
						if (type === 'data') reloadData(file);
						if (type === 'floor') reloadFloor(file);
						if (type === 'script') reloadScript(file);
					});
				}, 1000);
			}
		})();
	}
}