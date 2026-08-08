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
			// animFrameCount
			core.animFrameCount = {"1":6,"3":6,"4":16,"5":12,"6":10,"7":12,"9":6,"10":4,"12":8,"13":6,"14":20,"15":16,"16":40,"17":40,"18":40,"19":40,"21":69,"24":15,"25":10,"26":15,"36":70,"39":73,"40":73,"8":6,"53":11,"77":75,"78":11,"89":11,"94":11,"95":73};
			// 【星冥线】战斗动画SE：RGM动画ID → 音效文件（取RGM timing的SE；字符串=第0帧，对象=逐帧映射）
			core.animSe = {
				"1": "101-Attack13.mp3",
				"3": "086-Action01.mp3",
				"4": "shengji.mp3",
				"5": "132-Wind01.mp3",
				"6": "108-Heal04.mp3",
				"7": "117-Fire01.mp3",
				"8": "100-Attack12.mp3",
				"9": "151-Support09.mp3",
				"12": "094-Attack06.mp3",
				"13": "138-Darkness01.mp3",
				"14": "140-Darkness03.mp3",
				"15": "140-Darkness03.mp3",
				"21": "se_enep01.mp3",
				"24": "020-Teleport03.mp3",
				"25": "124-Thunder02.mp3",
				"26": "121-Ice02.mp3",
				"36": "018-Teleport01.mp3",
				"53": "111-Heal07.mp3",
				"77": {0: "dibiyong1.mp3", 29: "teshu2.mp3", 34: "teshu2.mp3", 37: "teshu2.mp3", 42: "teshu2.mp3", 44: "teshu2.mp3", 50: "teshu2.mp3", 55: "teshu2.mp3", 59: "teshu2.mp3", 63: "teshu2.mp3", 68: "teshu2.mp3", 71: "teshu2.mp3"}
			};
			// 【星冥线】地格动画SE（传送门等）：RGM动画ID → 音效文件
			core.tileAnimSe = {"78": "chuansong.mp3", "89": "chuansong.mp3", "94": "chuansong.mp3"};
			// 预加载战斗动画图片到 core._animImages（直接new Image，不走core.material.images.images）
			core._animImages = {};
			[1,3,4,5,6,7,8,9,10,12,13,14,15,21,24,25,26,36,53,77].forEach(function(id) {
				var name = 'anim_battle_' + id + '.png';
				var img = new Image();
				img.src = 'project/images/' + name;
				core._animImages[id] = img;
			});
			// 预加载地格动画图片
			[16,17,18,19,39,40,78,89,94,95].forEach(function(id) {
				var name = 'anim_tile32_' + id + '.png';
				var img = new Image();
				img.src = 'project/images/' + name;
				core._animImages['tile_' + id] = img;
			});
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
				if (name === 'atk' && core.getFlag('sc_meizhan_active', false)) { val += 1; }

				return val;
			};
			// 使役捕获：core.captureShiyi(enemyId)
			core.captureShiyi = function(enemyId) {
				var enemy = core.material.enemys['e' + enemyId] || core.material.enemys[enemyId];
				if (!enemy) return false;
				core.setFlag('shiyi_enemy_id', enemyId);
						core.setFlag('shiyi_name', enemy.name || '???');
						core.updateStatusBar(true, true);
						core.ui.drawStatusBar();
						setTimeout(function(){ core.ui.drawStatusBar(); }, 200);
					var stats = ENEMY_RMXP_STATS[enemyId];
				var atkB = stats ? Math.max(0, stats.str - 1) : 0;
				var defB = stats ? Math.max(0, stats.dex - 1) : 0;
				core.drawTip('成功使役 ' + (enemy.name || '???') + ' (atk+' + atkB + ' def+' + defB + ')');
				core.playBattleAnim(36, {scale: 1.0, fps: 25});
				core.setFlag('shiyi_mode', 0);
				return true;
			};

			// 使役释放
			core.releaseShiyi = function() {
				core.setFlag('shiyi_enemy_id', 0);
				core.setFlag('shiyi_name', '');
				core.updateStatusBar();
						core.ui.drawStatusBar();
						core.drawTip('使役已释放');
			};
			// 战斗后自动捕获（捕获模式开启时）+ 清除水晶buff
			// 【星冥线】RMXP 式升级系统 (CE23)


			core.checkLevelUp = function() {
				// 【星冥线】道具详情预览(_getItemDetail)期间禁止升级：itemEffect 在
				// Proxy(只记diff不写target)下执行时若含 checkLevelUp，exp/lv 写入被
				// 丢弃但 threshold 被抬高+弹窗被启动 → 假升级（2026-08-04 实测：
				// f3_0 战斗后红经验书预览导致 lv 永久差一级，回放状态漂移）。
				if (core.hasFlag('__statistics__')) return;
				var threshold = core.getFlag('expThreshold', 0);
				if (!threshold) { threshold = 20; core.setFlag('expThreshold', 20); }
				if (!core.status.hero || core.status.hero.exp < threshold) return;
				// 【星冥线】回放防伪升级：录像中没有对应加点(choices)的升级弹窗
				// （回放中战斗/经验漂移导致多出升级，如 2026-08-04 存档 f3_8 场景），
				// 直接跳过不升级：不扣 exp、不加 lv/hp，属性与录制保持一致；
				// exp 保留后，录像真正的升级点（choices 在队首）仍会正常触发。
				if (core.isReplaying() && core.status.replay && core.status.replay.toReplay) {
					var _n0 = core.status.replay.toReplay[0];
					if (typeof _n0 != 'string' || _n0.indexOf('choices:') != 0) return;
				}
				var hero = core.status.hero;
				hero.exp -= threshold;
				hero.lv = (hero.lv || 1) + 1;
				var hpGain = hero.lv * 10 + 140;
				hero.hp += hpGain;
				core.setFlag('expThreshold', threshold + 8);
				// 【星冥线】升级动画：RGM 4号「升级」（16帧 + 第0帧SE「shengji」）
				// 闪光按 RGM timing 复刻：第0帧 flash_scope=0 角色白闪（升级是角色闪光，不做全屏闪光）
				core.playBattleAnim(4, {fps: 15});
				core.heroFlash();
				var lvMsg = "升级至" + hero.lv + "级，HP +" + hpGain + "! 请选择：";
				// 【星冥线】升级加点弹窗：非回放时延迟 200ms 启动新事件流，避开
				// 换层/BFS 自动拾取收尾的 data 清理窗口（收尾同步执行，200ms
				// 足够；实测收尾在 startEvents 的 30ms 等待窗口内清掉 choices →
				// 弹窗永远不出现，2026-08-03 用户实测）。回放保持立即启动
				// （回放路径已验证不受收尾清理影响）。
				var __lvChoices = [
					{type: "choices", text: lvMsg, choices: [
						{text: "增加1点攻击", action: [{type: "function", function: "function(){core.addStatus('atk',1);core.checkLevelUp();}"}]},
						{text: "增加1点防御", action: [{type: "function", function: "function(){core.addStatus('def',1);core.checkLevelUp();}"}]}
					]}
				];
				if (core.isReplaying()) {
					core.events.startEvents(__lvChoices);
				} else {
					setTimeout(function () {
						if (!core.status.hero || core.status.gameOver) return;
						core.events.startEvents(__lvChoices);
					}, 200);
				}
			};

			var __nextLv = core.getNextLvUpNeed;
			core.getNextLvUpNeed = function() { return core.getFlag('expThreshold', 20); };

			var __afterBattle = core.events.afterBattle;
			core.events.afterBattle = function(enemy, x, y, callback) {
				// 【修复】战后收尾必须在原始 afterBattle（内含 getDamageInfo 伤害计算，读取
				// shiyi_enemy_id 使役加成 + 水晶临时加成）之后执行；否则本场战斗的伤害结算
				// 会用到新使役的加成/丢失水晶加成（原使役增益失效）。
				var shiyiCaptureId = 0;
				if (core.getFlag('shiyi_mode', 0) && enemy) {
					var eid = enemy.id || enemy;
					var numId = typeof eid == 'string' ? parseInt(eid.replace(/[^0-9]/g, '')) : eid;
					if (numId > 0) shiyiCaptureId = numId;
				}
				if (__afterBattle) __afterBattle.call(this, enemy, x, y, callback);
				// --- 以下均为战斗伤害结算完成后的收尾 ---
				if (core.getFlag('crystal_red',0)) { core.removeFlag('crystal_red'); core.addStatus('atk', -1); }
				if (core.getFlag('crystal_blue',0)) { core.removeFlag('crystal_blue'); core.addStatus('def', -1); }
				if (shiyiCaptureId > 0 && core.status.hero.hp > 0) core.captureShiyi(shiyiCaptureId);
				core.checkLevelUp();
				core.ui.drawStatusBar();
			};

		}
			// 【东方星冥线】符卡系统 — 妖梦3张符卡
			core.setFlag('sc_1_avail', true); core.setFlag('sc_2_avail', true); core.setFlag('sc_3_avail', true);
			core.setFlag('sc_meizhan_active', false); core.setFlag('sc_meizhan_turns', 0);
			core._SC_FULL = ['瞑斩「楼观赋予我能斩断弹幕的心之眼」','断迷剑「迷津慈航斩」','魂符「二重的苦轮」'];
			// 瞑斩回合递减（放在原始 afterBattle 之后，确保最后一场的 atk+1 吃到加成）
			var __sc_ab = core.events.afterBattle;
			core.events.afterBattle = function(enemy, x, y, callback) {
				if (__sc_ab) __sc_ab.call(this, enemy, x, y, callback);
				if (core.getFlag('sc_meizhan_active', false)) { var tr = core.getFlag('sc_meizhan_turns',0)-1; if (tr<=0) { core.setFlag('sc_meizhan_active',false); core.setFlag('sc_meizhan_turns',0); core.drawTip('瞑斩效果结束'); } else { core.setFlag('sc_meizhan_turns',tr); } }
				core.ui.drawStatusBar();
			};
			// 符卡总入口
			core.useSpellCard = function(idx) {
				if (!core.isPlaying()||(core.status.event&&core.status.event.id)) return;
				if (!core.getFlag('sc_'+idx+'_avail',false)) { core.drawTip('该符卡已使用'); return; }
				// 【星冥线】录制修复：HUD 符卡点击此前完全不写 route（且被 e.stopPropagation
				// 拦截，连 click: 都不记），导致位移类符卡（sc_3）在回放中缺失 → 状态漂移。
				// 真实游玩时记一条 spell: 动作，回放时由注册的 replay action 消费。
				// 回放时也必须记录（引擎二次记录机制，与移动/瞬移一致），
				// 否则 _replay_finished 检测 route.length != totalList.length 报“记录不一致”。
				if (core.status.route && core.status.route.push) {
					core.status.route.push("spell:" + idx);
				}
				if (idx===1) core._sc1(); else if (idx===2) core._sc2(); else if (idx===3) core._sc3();
			};
			// 瞑斩: 攻击+1持续6回合
			core._sc1 = function() { var _sc=this; core._showSkillImage('youmuskill1.png', function(){ core.playSound('zone'); core.setFlag('sc_1_avail',false); core.setFlag('sc_meizhan_active',true); core.setFlag('sc_meizhan_turns',6); core.playBattleAnim(12,{fps:12}); core.updateDamage(); core.drawTip(core._SC_FULL[0]); core.ui.drawStatusBar(); if (core.plugin&&core.plugin.autoClean) core.plugin.autoClean.doAutoClean(); }); };
			// 断迷剑: 斩断面前一堵墙
			core._sc2 = function() { var h=core.status.hero; if(!h)return; var d=h.loc&&h.loc.direction,dx=0,dy=0; if(d==='up')dy=-1;else if(d==='down')dy=1;else if(d==='left')dx=-1;else if(d==='right')dx=1; var tx=h.loc.x+dx,ty=h.loc.y+dy; var block=core.getBlock(tx,ty); if(!block||!block.event||!block.event.noPass||block.event.cls!=='tileset'){core.drawTip('必须面对一堵墙方能使用');return;} core._showSkillImage('youmuskill2.png', function(){ core.playSound('pickaxe'); core.setFlag('sc_2_avail',false); core.setBlock(0,tx,ty); core.playBattleAnim(5,{tx:tx,ty:ty,fps:12}); core.drawTip(core._SC_FULL[1]); core.ui.drawStatusBar(); if (core.plugin&&core.plugin.autoClean) core.plugin.autoClean.doAutoClean(); }); };
			// 魂符: 镜像+传送
			core._sc3 = function() { var h=core.status.hero; if(!h)return; var toX=core.bigmap.width-1-h.loc.x,toY=core.bigmap.height-1-h.loc.y; if(toX<0||toX>=core.bigmap.width||toY<0||toY>=core.bigmap.height){core.drawTip('无法位移至该位置');return;} var blk=core.getBlock(toX,toY); if(blk&&blk.event&&blk.event.noPass){core.drawTip('无法位移至该位置');return;} core._showSkillImage('youmuskill3.png', function(){ core.playSound('centerFly'); core.setFlag('sc_3_avail',false); core.clearMap('hero'); core.setHeroLoc('x',toX); core.setHeroLoc('y',toY); core.drawHero(); core.playBattleAnim(6,{fps:12}); core.drawTip(core._SC_FULL[2]); core.ui.drawStatusBar(); if (core.plugin&&core.plugin.autoClean) core.plugin.autoClean.doAutoClean(); }); };
		// 【星冥线】技能插图：画面中央显示，1.5秒后消失
			core._showSkillImage = function(imgName, onDone) {
				var gd = core.dom && core.dom.gameDraw; if (!gd) return;
				var imgs = core.material && core.material.images && core.material.images.images; if (!imgs) return;
				var img = imgs[imgName]; if (!img) return;
				// 【星冥线】回放时同步回调：本函数的插图动画约 1.55s（350+800+400ms）后
				// 才执行 onDone，而 spell 回放动作在 useSpellCard 返回后立即 core.replay()
				// 继续——若效果（sc_2 破墙 / sc_3 位移 / sc_1 挂 flag）晚于后续动作落地，
				// 回放状态会按"未用符卡"的顺序执行 → 漂移。回放（含 replayChecking）时
				// 直接同步调用 onDone，效果与录制顺序一致；真实游玩保持原动画。
				if (core.isReplaying && core.isReplaying()) {
					if (onDone) onDone();
					return;
				}
				// 自适应屏幕尺寸：插图占视口短边的50%，最小200px
				var gdRect = gd.getBoundingClientRect();
				var gdW = gdRect.width;
				var gdH = gdRect.height;
				var SIZE = Math.max(200, Math.round(Math.min(gdW, gdH) * 0.5));
				// 黑色柔雾遮罩（复刻RGM fog效果）
				var overlay = document.createElement('div');
				overlay.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,0);z-index:199;pointer-events:none;transition:background 0.5s ease;';
				gd.appendChild(overlay);
				requestAnimationFrame(function(){ overlay.style.background = 'rgba(0,0,0,0.4)'; });
				// 技能插图
				var cv = document.createElement('canvas'); cv.width = SIZE; cv.height = SIZE;
				cv.style.cssText = 'position:absolute;top:50%;z-index:200;pointer-events:none;';
				var ctx = cv.getContext('2d'); ctx.drawImage(img, 0, 0, SIZE, SIZE);
				gd.appendChild(cv);
				var centerX = (gdW - SIZE) / 2;
				var centerY = -SIZE / 2;
				var startTime = performance.now();
				var DUR_IN = 350, DUR_HOLD = 800, DUR_OUT = 400;
				// easeInOutCubic: RGM smoothstep 风格
				function ease(t) { return t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2; }
				function anim(now) {
					var elapsed = now - startTime;
					var x, alpha, scale;
					if (elapsed < DUR_IN) {
						var t = ease(elapsed / DUR_IN);
						x = centerX - (1-t) * gdW;
						alpha = t;
						scale = 0.9 + 0.1*t;
					} else if (elapsed < DUR_IN + DUR_HOLD) {
						x = centerX; alpha = 1; scale = 1;
					} else if (elapsed < DUR_IN + DUR_HOLD + DUR_OUT) {
						var t = ease((elapsed - DUR_IN - DUR_HOLD) / DUR_OUT);
						x = centerX + t * gdW;
						alpha = 1 - t;
						scale = 1 + 0.1*t;
					} else {
						overlay.style.background = 'rgba(0,0,0,0)';
						setTimeout(function(){ if(overlay.parentNode)overlay.parentNode.removeChild(overlay); if(cv.parentNode)cv.parentNode.removeChild(cv); }, 500);
						if (onDone) onDone();
						return;
					}
					cv.style.opacity = alpha;
					cv.style.left = x + 'px';
					cv.style.marginTop = centerY + 'px';
					cv.style.transform = 'scale('+scale+')';
					requestAnimationFrame(anim);
				}
				requestAnimationFrame(anim);
			};
		// 【星冥线】全屏闪光工具（对应 RGM timing 的 flash_scope=1 全屏闪光）
			core.screenFlash = function(opts) {
				opts = opts || {};
				var gd = core.dom && core.dom.gameDraw; if (!gd) return;
				var fl = document.createElement('div');
				fl.style.cssText = 'position:absolute;left:0;top:0;right:0;bottom:0;background:' + (opts.color || '#fff') + ';opacity:0;pointer-events:none;z-index:190;';
				gd.appendChild(fl);
				var delay = opts.delay || 0, hold = opts.hold != null ? opts.hold : 250, fade = opts.fade != null ? opts.fade : 200;
				var peak = opts.opacity != null ? opts.opacity : 0.8;
				setTimeout(function () { fl.style.opacity = '' + peak; }, delay);
				setTimeout(function () { fl.style.transition = 'opacity ' + fade + 'ms ease-out'; fl.style.opacity = '0'; }, delay + hold);
				setTimeout(function () { if (fl.parentNode) fl.parentNode.removeChild(fl); }, delay + hold + fade + 100);
			};
		// 【星冥线】角色闪光工具（对应 RGM timing 的 flash_scope=0 目标闪光：角色本体瞬间变白再淡出）
			core.heroFlash = function(opts) {
				opts = opts || {};
				var heroCanvas = document.getElementById('hero');
				if (!heroCanvas) return;
				// RGM「升级」第0帧：白色(255,255,255,255) 目标闪光，持续5帧（约167ms@30fps）
				var hold = opts.hold != null ? opts.hold : 90;
				var fade = opts.fade != null ? opts.fade : 150;
				var oldTransition = heroCanvas.style.transition;
				var oldFilter = heroCanvas.style.filter || '';
				heroCanvas.style.transition = 'none';
				heroCanvas.style.filter = 'brightness(40) saturate(0)';
				setTimeout(function () {
					heroCanvas.style.transition = 'filter ' + fade + 'ms linear';
					heroCanvas.style.filter = oldFilter || 'none';
				}, hold);
				setTimeout(function () {
					heroCanvas.style.transition = oldTransition;
					heroCanvas.style.filter = oldFilter || 'none';
				}, hold + fade + 80);
			};
		// 【星冥线】道具使用动画：旋转光环 + 对应道具图标（纯代码绘制，无需动画素材）
		// itemId 为道具id（自动取 items 图标表对应图标）；opts.color 光环主色，opts.iconGlow 图标光晕色，opts.sound 音效
			core.playItemAnim = function(itemId, opts) {
				opts = opts || {};
				var gd = core.dom && core.dom.gameDraw; if (!gd) return;
				var h = core.status && core.status.hero; if (!h || !h.loc) return;
				var img = core.material && core.material.images && core.material.images.items; if (!img) return;
				var icon = (core.material.icons && core.material.icons.items && core.material.icons.items[itemId]);
				if (icon == null) return;
				var TILE = 32, S = 160, ICON_H = 32;
				var ox = core.bigmap ? (core.bigmap.offsetX || 0) : 0;
				var oy = core.bigmap ? (core.bigmap.offsetY || 0) : 0;
				var gs = (core.domStyle && core.domStyle.scale) || 1;
				var cv = document.createElement('canvas');
				cv.width = S; cv.height = S;
				cv.style.cssText = 'position:absolute;z-index:200;pointer-events:none;';
				// 画布中心对齐角色所在格的中心（tile 中心 = tile*32 + 16）
				cv.style.left = Math.round((h.loc.x * TILE + ox + TILE / 2 - S / 2) * gs) + 'px';
				cv.style.top = Math.round((h.loc.y * TILE + oy + TILE / 2 - S / 2) * gs) + 'px';
				cv.style.width = Math.round(S * gs) + 'px';
				cv.style.height = Math.round(S * gs) + 'px';
				gd.appendChild(cv);
				var ctx = cv.getContext('2d');
				// 颜色工具：由主色派生光环/符文/粒子等配色
				function hex2rgb(hex) {
					var n = parseInt(String(hex).charAt(0) == '#' ? String(hex).substring(1) : hex, 16);
					return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
				}
				function mix(c1, c2, t) {
					return [Math.round(c1[0] + (c2[0] - c1[0]) * t), Math.round(c1[1] + (c2[1] - c1[1]) * t), Math.round(c1[2] + (c2[2] - c1[2]) * t)];
				}
				function rgba(c, a) { return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')'; }
				var main = hex2rgb(opts.color || '#a868ff');
				var glow = hex2rgb(opts.iconGlow || '#ffdc96');
				var white = [255, 255, 255], black = [0, 0, 0];
				// 开场角色白闪 + 音效
				core.heroFlash();
				if (opts.sound) core.playSound(opts.sound);
				var DUR = 1050;
				var t0 = performance.now();
				var particles = [];
				for (var pi = 0; pi < 12; pi++) {
					var pa = Math.random() * Math.PI * 2;
					particles.push({ a: pa, spd: 26 + Math.random() * 34, dist: 0, size: 1 + Math.random() * 2.2 });
				}
				function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
				function tick(now) {
					if (!cv.parentNode) return;
					var p = Math.min((now - t0) / DUR, 1);
					ctx.clearRect(0, 0, S, S);
					var c = S / 2;
					// 光环半径展开；整体透明度末尾淡出
					var grow = easeOut(p);
					var r = 16 + 36 * grow;
					var alpha = p < 0.82 ? 1 : Math.max(0, 1 - (p - 0.82) / 0.18);
					var ang = p * Math.PI * 1.5;
					// 中央主色光晕
					var glowR = r * 1.35 * (0.9 + 0.1 * Math.sin(p * Math.PI * 4));
					var grad = ctx.createRadialGradient(c, c, 0, c, c, glowR);
					grad.addColorStop(0, rgba(main, 0.35));
					grad.addColorStop(1, rgba(main, 0));
					ctx.fillStyle = grad;
					ctx.globalAlpha = alpha;
					ctx.beginPath(); ctx.arc(c, c, glowR, 0, Math.PI * 2); ctx.fill();
					if (alpha > 0) {
						// 旋转光环：外圈 + 内圈
						ctx.lineWidth = 2.5;
						ctx.strokeStyle = rgba(main, 0.95);
						ctx.beginPath(); ctx.arc(c, c, r, 0, Math.PI * 2); ctx.stroke();
						ctx.lineWidth = 1.2;
						ctx.strokeStyle = rgba(mix(main, black, 0.25), 0.7);
						ctx.beginPath(); ctx.arc(c, c, r * 0.72, 0, Math.PI * 2); ctx.stroke();
						// 符文刻度（随光环旋转）
						var n = 12;
						ctx.lineWidth = 2;
						for (var i = 0; i < n; i++) {
							var a2 = ang + i * Math.PI * 2 / n;
							ctx.strokeStyle = rgba(mix(main, white, 0.35), 0.85 * alpha);
							ctx.beginPath();
							ctx.moveTo(c + Math.cos(a2) * (r - 5), c + Math.sin(a2) * (r - 5));
							ctx.lineTo(c + Math.cos(a2) * (r + 5), c + Math.sin(a2) * (r + 5));
							ctx.stroke();
						}
						// 反向旋转的契约方印（双正方形）
						ctx.save();
						ctx.translate(c, c);
						ctx.rotate(-ang * 0.7);
						ctx.strokeStyle = rgba(mix(main, white, 0.15), 0.65 * alpha);
						ctx.lineWidth = 1.6;
						for (var s = 0; s < 2; s++) {
							ctx.beginPath();
							for (var k = 0; k < 4; k++) {
								var a3 = k * Math.PI / 2 + (s ? Math.PI / 4 : 0);
								var rr = s ? r * 0.42 : r * 0.58;
								if (k == 0) ctx.moveTo(Math.cos(a3) * rr, Math.sin(a3) * rr);
								else ctx.lineTo(Math.cos(a3) * rr, Math.sin(a3) * rr);
							}
							ctx.closePath();
							ctx.stroke();
						}
						ctx.restore();
						// 粒子向外扩散
						particles.forEach(function (pt) {
							pt.dist += pt.spd;
							var pa2 = Math.min(1, pt.dist / 80);
							ctx.fillStyle = rgba(mix(main, white, 0.25), 0.9 * alpha * pa2);
							ctx.beginPath();
							ctx.arc(c + Math.cos(pt.a) * pt.dist, c + Math.sin(pt.a) * pt.dist, pt.size, 0, Math.PI * 2);
							ctx.fill();
						});
					}
					// 道具图标：从法阵中央升起悬停在角色头顶
					var iconP = Math.min(1, p / 0.38);
					if (iconP > 0) {
						var iconScale = 0.55 + 0.5 * (1 - Math.pow(1 - iconP, 3));
						var bob = Math.sin(p * Math.PI * 3) * 3;
						var rise = (1 - iconP) * 18;
						var iconY = c - 34 - rise - bob;
						var iw = 30 * iconScale;
						// 图标背后的光晕
						var igrad = ctx.createRadialGradient(c, iconY, 0, c, iconY, iw * 1.25);
						igrad.addColorStop(0, rgba(glow, 0.55 * alpha * iconP));
						igrad.addColorStop(1, rgba(glow, 0));
						ctx.fillStyle = igrad;
						ctx.globalAlpha = 1;
						ctx.beginPath(); ctx.arc(c, iconY, iw * 1.25, 0, Math.PI * 2); ctx.fill();
						ctx.globalAlpha = alpha * iconP;
						ctx.drawImage(img, 0, ICON_H * icon, 32, 32, c - iw / 2, iconY - iw / 2, iw, iw);
						ctx.globalAlpha = 1;
					}
					if (p < 1) requestAnimationFrame(tick);
					else if (cv.parentNode) cv.parentNode.removeChild(cv);
				}
				requestAnimationFrame(tick);
			};
		// 【星冥线】道具图标浮现动画：只在角色头顶浮现对应道具图标（用于叠加在原有动画之上，如红蓝水晶充能动画）
		// 与 playItemAnim 不同：不带光环旋转，仅图标升起+光晕+淡出
			core.playItemIcon = function(itemId, opts) {
				opts = opts || {};
				var gd = core.dom && core.dom.gameDraw; if (!gd) return;
				var h = core.status && core.status.hero; if (!h || !h.loc) return;
				var img = core.material && core.material.images && core.material.images.items; if (!img) return;
				var icon = (core.material.icons && core.material.icons.items && core.material.icons.items[itemId]);
				if (icon == null) return;
				var TILE = 32, S = 160, ICON_H = 32;
				var ox = core.bigmap ? (core.bigmap.offsetX || 0) : 0;
				var oy = core.bigmap ? (core.bigmap.offsetY || 0) : 0;
				var gs = (core.domStyle && core.domStyle.scale) || 1;
				var cv = document.createElement('canvas');
				cv.width = S; cv.height = S;
				cv.style.cssText = 'position:absolute;z-index:200;pointer-events:none;';
				// 画布中心对齐角色所在格的中心（tile 中心 = tile*32 + 16）
				cv.style.left = Math.round((h.loc.x * TILE + ox + TILE / 2 - S / 2) * gs) + 'px';
				cv.style.top = Math.round((h.loc.y * TILE + oy + TILE / 2 - S / 2) * gs) + 'px';
				cv.style.width = Math.round(S * gs) + 'px';
				cv.style.height = Math.round(S * gs) + 'px';
				gd.appendChild(cv);
				var ctx = cv.getContext('2d');
				function hex2rgb(hex) {
					var n = parseInt(String(hex).charAt(0) == '#' ? String(hex).substring(1) : hex, 16);
					return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
				}
				function rgba(c, a) { return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')'; }
				var glow = hex2rgb(opts.iconGlow || '#ffdc96');
				var DUR = opts.duration || 1250;
				var t0 = performance.now();
				function tick(now) {
					if (!cv.parentNode) return;
					var p = Math.min((now - t0) / DUR, 1);
					ctx.clearRect(0, 0, S, S);
					var c = S / 2;
					// 图标：前30%从法阵中央升起，悬停微浮，末尾淡出
					var riseP = Math.min(1, p / 0.3);
					var iconScale = 0.7 + 0.5 * (1 - Math.pow(1 - riseP, 3));
					var bob = Math.sin(p * Math.PI * 2.5) * 3;
					var rise = (1 - riseP) * 16;
					var iconY = c - 34 - rise - bob;
					var alpha = p < 0.8 ? 1 : Math.max(0, 1 - (p - 0.8) / 0.2);
					var iw = 30 * iconScale;
					// 图标背后的光晕
					var igrad = ctx.createRadialGradient(c, iconY, 0, c, iconY, iw * 1.3);
					igrad.addColorStop(0, rgba(glow, 0.5 * alpha));
					igrad.addColorStop(1, rgba(glow, 0));
					ctx.fillStyle = igrad;
					ctx.globalAlpha = 1;
					ctx.beginPath(); ctx.arc(c, iconY, iw * 1.3, 0, Math.PI * 2); ctx.fill();
					ctx.globalAlpha = alpha;
					ctx.drawImage(img, 0, ICON_H * icon, 32, 32, c - iw / 2, iconY - iw / 2, iw, iw);
					ctx.globalAlpha = 1;
					if (p < 1) requestAnimationFrame(tick);
					else if (cv.parentNode) cv.parentNode.removeChild(cv);
				}
				requestAnimationFrame(tick);
			};
		// 【星冥线】战斗动画播放器 - 在角色位置播放RGM动画spritesheet
			core.playBattleAnim = function(animId, opts) {
				opts = opts || {};
				var gd = core.dom && core.dom.gameDraw; if (!gd) return;
				var h = core.status.hero; if (!h) return;
				var img = core._animImages && core._animImages[animId]; if (!img) { console.log('playBattleAnim: image not found for', animId); return; }
				var fc = (core.animFrameCount || {})['' + animId] || 0;
				if (!fc) { console.log('playBattleAnim: no frame count for', animId); return; }
				var TILE = 32, FRAME_W = 192, FRAME_H = 192;
				var scale = opts.scale || 0.7;
				var drawW = Math.round(FRAME_W * scale), drawH = Math.round(FRAME_H * scale);
				var fps = opts.fps || 15;
				var frameInterval = 1000 / fps;
				// 目标位置(瓦片坐标) — 默认玩家位置，可override
				var tx = opts.tx != null ? opts.tx : h.loc.x;
				var ty = opts.ty != null ? opts.ty : h.loc.y;
				// 转换为游戏像素坐标（考虑视口偏移）
				var ox = core.bigmap ? (core.bigmap.offsetX || 0) : 0;
				var oy = core.bigmap ? (core.bigmap.offsetY || 0) : 0;
				var gs = core.domStyle && core.domStyle.scale || 1;
				var px = Math.round(tx * TILE + ox - (drawW - TILE) / 2);
				var py = Math.round(ty * TILE + oy - (drawH - TILE) / 2);
				// 动画canvas
				var cv = document.createElement('canvas'); cv.width = drawW; cv.height = drawH;
				cv.style.cssText = 'position:absolute;z-index:200;pointer-events:none;';
				cv.style.left = Math.round(px * gs) + 'px';
				cv.style.top = Math.round(py * gs) + 'px';
				cv.style.width = Math.round(drawW * gs) + 'px';
				cv.style.height = Math.round(drawH * gs) + 'px';
				gd.appendChild(cv);
				var ctx = cv.getContext('2d');
				var frameIdx = 0;
				var lastTime = performance.now();
				var done = false;
				var sePlayed = false;
				function tick(now) {
					if (done) return;
					if (now - lastTime >= frameInterval) {
						// 【星冥线】RGM动画timing SE：字符串=第0帧播一次，对象=按帧号播对应SE
						var _se = core.animSe && core.animSe[animId];
						if (_se) {
							if (typeof _se == 'string') {
								if (!sePlayed) { sePlayed = true; core.playSound(_se); }
							} else if (_se[frameIdx]) {
								core.playSound(_se[frameIdx]);
							}
						}
						ctx.clearRect(0, 0, drawW, drawH);
						if (opts.filter) ctx.filter = opts.filter;
						var sx = frameIdx * FRAME_W;
						ctx.drawImage(img, sx, 0, FRAME_W, FRAME_H, 0, 0, drawW, drawH);
						frameIdx++;
						lastTime = now;
						if (frameIdx >= fc) {
							cv.style.transition = 'opacity 0.3s ease';
							cv.style.opacity = '0';
							done = true;
							setTimeout(function(){
								if (cv.parentNode) cv.parentNode.removeChild(cv);
								if (opts.onComplete) opts.onComplete();
							}, 400);
							return;
						}
					}
					requestAnimationFrame(tick);
				}
				requestAnimationFrame(tick);
			};

		// 【星冥线】地格动画播放器 - 在地图坐标播放循环/一次性动画
			core._tileAnims = [];
			core.playTileAnim = function(x, y, animId, opts) {
				opts = opts || {};
				var gd = core.dom && core.dom.gameDraw; if (!gd) return;
				var img = core._animImages && core._animImages['tile_' + animId]; if (!img) { console.log('playTileAnim: no image for', animId); return; }
				var fc = (core.animFrameCount || {})['' + animId] || 0;
				if (!fc) return;
				var TILE = 32;
				var loop = opts.loop !== false; // default true
				var fps = opts.fps || 12;
				var frameInterval = 1000 / fps;
				var cv = document.createElement('canvas'); cv.width = TILE; cv.height = TILE;
				cv.style.cssText = 'position:absolute;pointer-events:none;z-index:35;';
				gd.appendChild(cv);
				var ctx = cv.getContext('2d');
				var frameIdx = 0, lastTime = performance.now(), done = false, sePlayed = false;
				var animObj = {cv:cv, x:x, y:y, done:false};
				core._tileAnims.push(animObj);
				function tick(now) {
					if (done || animObj.done) return;
					// Remove if map changed
					if (!core.status.floorId) { cleanup(); return; }
					// Position at tile coordinates on screen
					var vp = core.bigmap || {};
					var offX = typeof vp.offsetX === 'number' ? vp.offsetX : 0;
					var offY = typeof vp.offsetY === 'number' ? vp.offsetY : 0;
					var scale = core.domStyle && core.domStyle.scale || 1;
					cv.style.left = Math.round((x * TILE + offX) * scale) + 'px';
					cv.style.top = Math.round((y * TILE + offY) * scale) + 'px';
					cv.style.width = Math.round(TILE * scale) + 'px';
					cv.style.height = Math.round(TILE * scale) + 'px';
					if (now - lastTime >= frameInterval) {
						// 【星冥线】地格动画SE：第0帧播一次（RGM timing frame0）
						if (!sePlayed) {
							sePlayed = true;
							var _tse = core.tileAnimSe && core.tileAnimSe[animId];
							if (_tse) core.playSound(_tse);
						}
						ctx.clearRect(0, 0, TILE, TILE);
						var sx = (frameIdx % fc) * TILE;
						ctx.drawImage(img, sx, 0, TILE, TILE, 0, 0, TILE, TILE);
						frameIdx++;
						lastTime = now;
						if (!loop && frameIdx >= fc) {
							cleanup();
							return;
						}
					}
					requestAnimationFrame(tick);
				}
				function cleanup() {
					done = true; animObj.done = true;
					if (cv.parentNode) cv.parentNode.removeChild(cv);
					var idx = core._tileAnims.indexOf(animObj);
					if (idx >= 0) core._tileAnims.splice(idx, 1);
				}
				requestAnimationFrame(tick);
				return animObj;
			};
			// 清除所有地格动画（切换楼层时调用）
			core.clearTileAnims = function() {
				var arr = core._tileAnims || [];
				for (var i = arr.length - 1; i >= 0; i--) {
					var a = arr[i];
					a.done = true;
					if (a.cv && a.cv.parentNode) a.cv.parentNode.removeChild(a.cv);
				}
				core._tileAnims = [];
			};

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
				core.fillText('ui', '攻+' + ab, col1, pos, '#FFCC88', f12);
				core.fillText('ui', '防+' + db, col2, pos, '#88CCFF', f12);
				core.fillText('ui', '盾+' + mb, col3, pos, '#CC88FF', f12);
			// 【星冥线】怪物手册推荐使役（复刻 RGM 088 calculate_best_baby：优秀宝宝名字亮紫标记）
			var __bookDraw = core.ui.drawBook;
			core.ui.drawBook = function(index) {
				if (!core.status.hero) return __bookDraw.call(this, index);
				var floorId = core.floorIds[(core.status.event.ui || {}).index] || core.status.floorId;
				var babyId = core.getFlag('shiyi_enemy_id', 0);
				var hp = core.status.hero.hp;
				var atk = core.getRealStatus('atk'), def = core.getRealStatus('def');
				var key = floorId + '|' + hp + '|' + atk + '|' + def + '|' + babyId;
				if (core._bestBabiesKey !== key) {
					core._bestBabiesKey = key;
					core._bestBabies = core._calcBestBabies(floorId, babyId, hp, atk, def);
				}
				return __bookDraw.call(this, index);
			};
			core._calcBestBabies = function(floorId, babyId, playerHp, playerAtk, playerDef) {
				var res = {};
				if (!core.status.hero || !ENEMY_RMXP_STATS) return res;
				var curSum = 0, curShield = 0;
				if (babyId > 0 && ENEMY_RMXP_STATS[babyId]) {
					curSum = Math.max(ENEMY_RMXP_STATS[babyId].str - 1, 0) + Math.max(ENEMY_RMXP_STATS[babyId].dex - 1, 0);
					curShield = ENEMY_RMXP_STATS[babyId].maxsp;
				}
				var enemys = core.enemys.getCurrentEnemys(floorId);
				var candidates = [];
				for (var i = 0; i < enemys.length; i++) {
					var e = enemys[i];
					var dmg = e.damage;
					if (dmg == null || dmg >= playerHp) continue;
					var eid = e.id;
					if (typeof eid == 'string') eid = parseInt(eid.replace(/[^0-9]/g, ''));
					var s = ENEMY_RMXP_STATS[eid];
					if (!s) continue;
					var atkBuff = Math.max(s.str - 1, 0), defBuff = Math.max(s.dex - 1, 0);
					var sumBuff = atkBuff + defBuff, shieldBuff = s.maxsp;
					if (sumBuff > curSum || (sumBuff == curSum && shieldBuff > curShield))
						candidates.push([sumBuff, shieldBuff, dmg, i, atkBuff, e.id]);
				}
				if (!candidates.length) return res;
				candidates.sort(function(a, b) {
					var r = playerAtk >= playerDef ? b[4] - a[4] : b[0] - a[0];
					if (r == 0) r = b[1] - a[1];
					if (r == 0) r = a[2] - b[2];
					return r;
				});
				var topSum = candidates[0][0], topShield = candidates[0][1], topDmg = candidates[0][2];
				for (var j = 0; j < candidates.length; j++) {
					var c = candidates[j];
					if (c[0] == topSum && c[1] == topShield && c[2] == topDmg) res[c[5]] = true;
				}
				return res;
			};
			var __bookName = core.ui._drawBook_drawName;
			core.ui._drawBook_drawName = function(index, enemy, top, left, width) {
				__bookName.call(this, index, enemy, top, left, width);
				if (core._bestBabies && core._bestBabies[enemy.id]) {
					core.setTextAlign('ui', 'center');
					var f17 = this._buildFont(17, true);
					if (enemy.specialText.length == 0)
						core.fillText('ui', enemy.name, left + width / 2, top + 35, '#C373D7', f17, width);
					else
						core.fillText('ui', enemy.name, left + width / 2, top + 28, '#C373D7', f17, width);
				}
			};

		};

		// 【东方星冥线】禁用双击瞬移（保留行走中重新指定目标）
		control.prototype._setAutomaticRoute_isMoving = function (destX, destY) {
			if (core.status.automaticRoute.autoHeroMove) {
				core.stopAutomaticRoute();
				return true;
			}
			return false;
		};
		// 【东方星冥线】使役捕获光环 — 挂进 drawHero 调用链，移动中与角色同帧同偏移绘制（消除 bgTick 读格坐标导致的滞后）
	(function () {
		var _dh = control.prototype.drawHero;
		control.prototype.drawHero = function (status, offset, frame) {
			_dh.apply(this, arguments);
			try {
				if (!core.isPlaying() || !core.getFlag('shiyi_mode', 0)) return;
				var haloImg = core.material.images.images['shiyi.png'];
				if (!haloImg) return;
				if (!core.dymCanvas.shiyiHalo)
					core.createCanvas('shiyiHalo', 0, 0, core._PX_, core._PY_, 35);
				var hc = core.dymCanvas.shiyiHalo;
				if (!hc) return;
				hc.clearRect(0, 0, core._PX_, core._PY_);
				var x = core.getHeroLoc('x'), y = core.getHeroLoc('y');
				var way = core.utils.scan2[core.getHeroLoc('direction')] || { x: 0, y: 0 };
				var off = typeof offset == 'number' ? offset : (offset && typeof offset.offset == 'number' ? offset.offset : 0);
				hc.drawImage(haloImg, x * 32 - core.bigmap.offsetX + way.x * off - 32, y * 32 - core.bigmap.offsetY + way.y * off - 32);
			} catch (e) {
				console.error('shiyiHalo draw error:', e);
			}
		};
	})();
	// 【东方星冥线】塔层全景滚动+雾效 (复刻 script126/127 配置)
		// 全景: 纵向向上 3/8px/帧 = 15px/s; 雾: 右0.5/8 + 上1/8 px/帧 = 右2.5 + 上5 px/s, 200%放大 25%透明
		var PANO_SPEED_Y = 15, FOG_SPEED_X = 2.5, FOG_SPEED_Y = 5;
		function isTower(fid) { return fid && (fid.indexOf('f1_') === 0 || fid.indexOf('f3_') === 0); }
		function bgTick() {
			requestAnimationFrame(bgTick);
			if (!core.isPlaying() || !core.status.floorId || !core.dymCanvas) return;
			var fid = core.status.floorId;
			// --- 全景滚动层 (bg画布之下) ---
			// 每帧查 core.dymCanvas, 不缓存 (读档时 deleteAllCanvas 会清掉, 缓存引用指向已脱离DOM的旧canvas)
			if (!core.dymCanvas.panoBg) core.createCanvas('panoBg', 0, 0, core._PX_, core._PY_, -1);
			var panoCv = core.dymCanvas.panoBg;
			if (!panoCv) return;
			var panoName = 'pano_' + fid + '.png';
			// 远景精简: 同组楼层共用一张图(烘焙按层复制,内容相同), 重复文件已删除
			if (fid.indexOf('f3_') === 0) panoName = parseInt(fid.split('_')[1], 10) <= 5 ? 'pano_f3_0.png' : 'pano_f3_6.png';
			else if (fid.indexOf('f1_') === 0 && parseInt(fid.split('_')[1], 10) >= 6) panoName = 'pano_f1_6.png';
			var pano = core.material.images.images[panoName];
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
			if (!core.dymCanvas.panoFog) {
				core.createCanvas('panoFog', 0, 0, core._PX_, core._PY_, '');
				var fogEl = document.getElementById('panoFog');
				var dmgEl = document.getElementById('damage');
				if (fogEl && dmgEl && fogEl.parentNode === dmgEl.parentNode)
					dmgEl.parentNode.insertBefore(fogEl, dmgEl);
			}
			var fogCv = core.dymCanvas.panoFog;
			if (!fogCv) return;
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
			// --- 使役捕获光环（静止兜底；移动中由 drawHero 钩子同步绘制，消除慢半拍） ---
			var haloImg = core.material.images.images['shiyi.png'];
			if (core.getFlag('shiyi_mode', 0) && haloImg) {
				if ((core.status.heroMoving || 0) === 0) {
					if (!core.dymCanvas.shiyiHalo) {
						core.createCanvas('shiyiHalo', 0, 0, core._PX_, core._PY_, 35);
					}
					var hc = core.dymCanvas.shiyiHalo;
					if (hc) {
						hc.clearRect(0, 0, core._PX_, core._PY_);
						var hx = core.getHeroLoc('x'), hy = core.getHeroLoc('y');
						hc.drawImage(haloImg, hx * 32 - core.bigmap.offsetX - 32, hy * 32 - core.bigmap.offsetY - 32);
					}
				}
				// heroMoving>0 时不动画布：移动中的每帧由 drawHero 钩子 clear+重绘（同帧同偏移）
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
			// 【修复】v2大地图canvas尺寸修正：_resize_canvas误把所有canvas设成_PX_*scale,
			// 但v2大地图画布内部宽度是_PX_+64, 比例不对会导致勇者和地图偏移。
			// 注意 _resize_canvas 在游戏内是RAF异步设置的，此处也用RAF排在其后执行。
			if (core.bigmap && core.bigmap.v2) {
				var _bw = (core._PX_ + 64) * core.domStyle.scale;
				var _bh = (core._PY_ + 64) * core.domStyle.scale;
				requestAnimationFrame(function() {
					if (!core.bigmap || !core.bigmap.v2) return;
					core.bigmap.canvas.forEach(function(cn) {
						var c = document.getElementById(cn);
						if (c) { c.style.width = _bw + 'px'; c.style.height = _bh + 'px'; }
					});
				});
			}
		}
		// 【东方星冥线】塔层BGM (原版: 庭园=开场, 1塔=二色莲传说~rum, 3塔=妖妖的梦) — 文件名必须ASCII(启动服务.exe对CJK名404)
		// 楼层文件里显式配置的 bgm 优先（如樱塔7F~12F=bgm_youyoumu.mp3），空串/未配置才回退塔默认
		var BGM_OF = function (fid) {
			var fb = null;
			try { fb = fid ? core.floors[fid].bgm : null; } catch (e) { fb = null; }
			if (fid === 'f0_garden') return [fb || 'bgm_garden.mp3', 0.8];
			if (fid && fid.indexOf('f1_') === 0) return [fb || 'bgm_tower1.mp3', 1.0];
			if (fid && fid.indexOf('f3_') === 0) return [fb || 'bgm_tower3.mp3', 0.4];
			return null;
		};
		var lastBgmKey = null;
		function bgmTick() {
			requestAnimationFrame(bgmTick);
			if (!core.isPlaying() || !core.status.floorId) return;
			// 【后台静音】页面隐藏或窗口失焦时不再重播BGM（main.js 的 blur/visibilitychange 负责暂停、focus 恢复）
			if (document.hidden || !document.hasFocus()) return;
			var b = BGM_OF(core.status.floorId);
			if (!b) return;
			var shouldPlay = core.musicStatus.playingBgm !== b[0] && lastBgmKey !== b[0] + core.status.floorId;
			// 即使名字匹配，如果音频被外部暂停（如浏览器音频线程挂起），也要重播
			if (!shouldPlay && core.musicStatus.bgmStatus && core.musicStatus.playingBgm === b[0]) {
				var cur = core.material.bgms[b[0]];
				if (cur && cur.paused) shouldPlay = true;
			}
			if (shouldPlay) {
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
		// 【弹幕战 BGM 恢复】danmaku 地板不在 BGM_OF 楼层分支内（bgmTick 不接管战斗 BGM），
		// 且 lastBgmKey 防重放可能拦截同层恢复；胜利/失败/停止后按楼层规则显式恢复
		core.plugin._restoreFloorBgm = function (fid) {
			var b = null;
			try { b = BGM_OF(fid || core.status.floorId); } catch (e) { b = null; }
			if (!b || !core.material.bgms[b[0]]) return;
			try {
				core.playBgm(b[0]);
				var _h = core.material.bgms[b[0]];
				if (typeof _h.volume === 'function') _h.volume(b[1]); else _h.volume = b[1];
			} catch (e) { /* ignore */ }
		};
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
					sparkleP.push({ x: Math.random() * (core._PX_ + 100) - 50, y: Math.random() * (core._PY_ + 150) - 100, f: Math.floor(Math.random() * 7),
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
							p.x = Math.random() * (core._PX_ + 100) - 50; p.y = Math.random() * (core._PY_ + 150) - 100;
							p.op = 255; p.f = 0;
						}
						cv.globalAlpha = Math.max(0, Math.min(1, p.op / 255));
						cv.drawImage(sparkleImgs[p.f], p.x - 5, p.y - 5, 10, 10);
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
					calCv.fillRect(core._PX_ - 154, 6, 148, 28);
					calCv.strokeStyle = 'rgba(255,215,0,0.71)';
					calCv.lineWidth = 1;
					calCv.strokeRect(core._PX_ - 153.5, 6.5, 147, 27);
					calCv.font = 'bold 14px SimSun, "Microsoft YaHei", sans-serif';
					calCv.textAlign = 'center';
					calCv.fillStyle = 'rgba(0,0,0,0.63)';
					calCv.fillText(cal, core._PX_ - 154 + 74 + 1, 6 + 19 + 1);
					calCv.fillStyle = PHASES[pi][2];
					calCv.fillText(cal, core._PX_ - 154 + 74, 6 + 19);
					calCv.textAlign = 'left';
				}
			}
			requestAnimationFrame(tick);
		})();
	// 【东方星冥线】全屏裸屏: 迷你悬浮HUD(HP/魔塔能量) + 右下圆钮(道具/存档/设置)
	(function () {
		var SYS = 'rgba(192,224,255,0.85)', WHITE = 'rgb(255,255,255)';
		var hudCv = null, hudCtx = null, btnCv = null, btnCtx = null, lastHp = null, scClickCv = null, nightCv = null, nightOp = 0;
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
		// 【星冥线】黑暗特性：黑夜层 + 主角灯光圈（复刻 植物大战魔塔 drawLight 思路：黑底 + destination-out 径向挖洞）
		// 避免整屏黑罩导致地图完全不可见；targetOp 为目标黑度，内部平滑渐入渐出
		function drawNight(targetOp) {
			// 开局/读档 resetGame 会 deleteAllCanvas 清掉动态画布，闭包里的 nightCv 会变成脱离 DOM 的旧引用，
			// 因此每帧校验画布是否仍在文档中，不在则重建
			if (!nightCv || !nightCv.canvas || !nightCv.canvas.parentNode) {
				core.createCanvas('night', 0, 0, core._PX_ || 416, core._PY_ || 416, 100);
				nightCv = core.dymCanvas.night;
				if (!nightCv) return;
			}
			nightOp += (targetOp - nightOp) * 0.18;
			if (nightOp < 0.02) {
				if (nightCv.canvas.style.display !== 'none') nightCv.canvas.style.display = 'none';
				return;
			}
			nightCv.canvas.style.display = 'block';
			var PX = core._PX_ || 416, PY = core._PY_ || 416;
			nightCv.clearRect(0, 0, PX, PY);
			nightCv.fillStyle = 'rgba(0,0,0,' + nightOp.toFixed(3) + ')';
			nightCv.fillRect(0, 0, PX, PY);
			var hero = core.status && core.status.hero;
			if (hero && hero.loc) {
				var ox = (core.bigmap && core.bigmap.offsetX) || 0;
				var oy = (core.bigmap && core.bigmap.offsetY) || 0;
				var hx = hero.loc.x * 32 + 16 - ox;
				var hy = hero.loc.y * 32 + 16 - oy;
				var r = 90;
				nightCv.globalCompositeOperation = 'destination-out';
				var grd = nightCv.createRadialGradient(hx, hy, r * 0.3, hx, hy, r);
				grd.addColorStop(0, 'rgba(0,0,0,1)');
				grd.addColorStop(1, 'rgba(0,0,0,0)');
				nightCv.beginPath();
				nightCv.fillStyle = grd;
				nightCv.arc(hx, hy, r, 0, 2 * Math.PI);
				nightCv.fill();
				nightCv.globalCompositeOperation = 'source-over';
			}
		}

		function tick() {
			requestAnimationFrame(tick);
			var gd = core.dom && core.dom.gameDraw;
			if (!gd) return;
			// 【星冥线】黑暗特性：黑夜层 + 主角灯光圈（渐入渐出）
			var darkNow = core.getFlag('darkSteps', 0) || 0;
			drawNight(darkNow > 0 ? 0.55 : 0);
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
			var bossFight = fid === 'f3_12' || !!core.getFlag('specialAttack');
			if (inTower && !bossFight && !core.getFlag('g_energy_max', 0)) core.setFlag('g_energy_max', 3000);
			if (!bossFight && lastHp != null && hero.hp < lastHp) core.setFlag('g_energy_used', core.getFlag('g_energy_used', 0) + (lastHp - hero.hp));
			// f3_12 试炼层：隐藏楼层名
			if (fid === 'f3_12') { var _fnl = core.dom.floorNameLabel; if (_fnl) _fnl.style.display = 'none'; }
			else { var _fnl2 = core.dom.floorNameLabel; if (_fnl2 && _fnl2.style.display === 'none') _fnl2.style.display = 'block'; }
			lastHp = hero.hp;
			var PX = core._PX_ || 416, PY = core._PY_ || 416;
			if (hudCv.width !== PX) { hudCv.width = PX; hudCv.height = PY; }
			var c = hudCtx;
			c.clearRect(0, 0, PX, PY);
			// 【星冥线】黑暗特性：HP-1 飘字
			if (core.darkPop) {
				var dp = core.darkPop;
				dp.t--;
				var dpx = dp.x * 32 - ((core.bigmap && core.bigmap.offsetX) || 0) + 16;
				var dpy = dp.y * 32 - ((core.bigmap && core.bigmap.offsetY) || 0) - (40 - dp.t) * 0.6;
				c.font = 'bold 16px Verdana';
				c.textAlign = 'center';
				c.lineWidth = 3; c.strokeStyle = 'rgba(0,0,0,0.7)';
				c.strokeText('HP-1', dpx, dpy);
				c.fillStyle = '#FF4444';
				c.fillText('HP-1', dpx, dpy);
				c.textAlign = 'left';
				if (dp.t <= 0) core.darkPop = null;
			}
			// 【星冥线】灼烧特性：HP-X 飘字（橙色）
			if (core.burnPop) {
				var bp = core.burnPop;
				bp.t--;
				var bpx = bp.x * 32 - ((core.bigmap && core.bigmap.offsetX) || 0) + 16;
				var bpy = bp.y * 32 - ((core.bigmap && core.bigmap.offsetY) || 0) - (40 - bp.t) * 0.6;
				c.font = 'bold 16px Verdana';
				c.textAlign = 'center';
				c.lineWidth = 3; c.strokeStyle = 'rgba(0,0,0,0.7)';
				c.strokeText('HP-' + bp.dmg, bpx, bpy);
				c.fillStyle = '#FF6600';
				c.fillText('HP-' + bp.dmg, bpx, bpy);
				c.textAlign = 'left';
				if (bp.t <= 0) core.burnPop = null;
			}
			// HP已由左侧状态栏显示，迷你HUD只保留能量条
			var topY = fid === 'f0_garden' ? 38 : 6;
			// 【星冥线】楼层副标题 + 能量条 → 右下角
			var emax = core.getFlag('g_energy_max', 0);
			if (inTower && emax > 0 && !bossFight) {
				var remain = Math.max(0, emax - core.getFlag('g_energy_used', 0));
				pill(c, PX - 124, PY - 30, 116, 16, remain + '/' + emax, 'rgb(150,140,255)', remain / emax);
				// 能量归零 → 幽幽子试炼（传送到 f3_12 开BOSS战）
				if (remain <= 0 && !core.getFlag('energyBossDone', false) && !core.status.lockControl && !core.status.event.id) {
					core.setFlag('energyBossDone', true);
					setTimeout(function () { if (core.plugin.startEnergyBoss) core.plugin.startEnergyBoss(); }, 400);
				}
			}
			if (inTower && !bossFight) {
				var sub = (core.status.thisMap || {}).subtitle || '';
				if (sub) {
					c.font = 'bold 12px "Microsoft YaHei", sans-serif';
					// 描边文字（右下角）
					c.textAlign = 'right'; c.textBaseline = 'bottom';
					c.fillStyle = '#ccccff';
					c.strokeStyle = '#000'; c.lineWidth = 2;
					c.strokeText(sub, PX - 10, PY - 34);
					c.fillText(sub, PX - 10, PY - 34);
				}
				// 竖屏时左下角显示楼层层数
				if (core.domStyle.isVertical) {
					var floorId = core.status.floorId || '';
					var parts = floorId.split('_');
					var floorNum = '';
					if (parts.length === 2 && /^f\d+$/.test(parts[0])) {
						floorNum = (parseInt(parts[1]) + 1) + 'F';
					} else {
						floorNum = floorId;
					}
					c.font = 'bold 20px "Microsoft YaHei", sans-serif';
					c.textAlign = 'left'; c.textBaseline = 'bottom';
					var tw = c.measureText(floorNum).width;
					// 半透明黑底
					c.fillStyle = 'rgba(0,0,0,0.45)';
					c.fillRect(4, PY - 30, tw + 12, 28);
					// 描边 + 文字
					c.strokeStyle = 'rgba(0,0,0,0.7)'; c.lineWidth = 3;
					c.fillStyle = 'rgba(220,210,255,0.95)';
					c.strokeText(floorNum, 10, PY - 8);
					c.fillText(floorNum, 10, PY - 8);
				}
			}
			// 【星冥线】宝石碎片进度条（仅塔层，顶部中央，符卡图标左侧）
			if (inTower) (function() {
				var imgs = core.material && core.material.images && core.material.images.images;
				function drawIcon(name, x, y, size) {
					var img = imgs && imgs[name];
					if (img) c.drawImage(img, x, y, size, size);
				}
				function drawBar(x, y, w, h, n, fill) {
					c.fillStyle = 'rgba(255,255,255,0.15)';
					c.fillRect(x, y, w, h);
					if (n > 0) {
						c.fillStyle = fill;
						c.fillRect(x, y, w * n / 6, h);
					}
					c.strokeStyle = 'rgba(255,255,255,0.3)';
					c.lineWidth = 1;
					c.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
				}
				var __h = core.status && core.status.hero || {}; var __rs = __h._rShard || 0, __bs = __h._bShard || 0, __gs = __h._gShard || 0;
				if (core.domStyle.isVertical) {
					var __w = 48, __h = 5, __is = 10;
					var __bx = PX / 2 - __w / 2, __ix = __bx - __is - 2;
					drawIcon('icon_rshard.png', __ix, 6, __is);
					drawBar(__bx, 8, __w, __h, __rs, '#ff6666');
					drawIcon('icon_bshard.png', __ix, 18, __is);
					drawBar(__bx, 20, __w, __h, __bs, '#6666ff');
					drawIcon('icon_gshard.png', __ix, 30, __is);
					drawBar(__bx, 32, __w, __h, __gs, '#66cc66');
				} else {
					var __w = 48, __h = 4, __is = 8;
					var __bx = PX / 2 - __w / 2, __ix = __bx - __is - 2;
					drawIcon('icon_rshard.png', __ix, 4, __is);
					drawBar(__bx, 6, __w, __h, __rs, '#ff6666');
					drawIcon('icon_bshard.png', __ix, 16, __is);
					drawBar(__bx, 18, __w, __h, __bs, '#6666ff');
					drawIcon('icon_gshard.png', __ix, 28, __is);
					drawBar(__bx, 30, __w, __h, __gs, '#66cc66');
				}
			})();
			// 【东方星冥线】符卡图标（间隙翻倍，手机不易点错）
			var scImgs = core.material && core.material.images && core.material.images.images;
			if (scImgs && inTower) {
				var scIcons = [{k:'sc_1_avail',on:'sk_on1.png',off:'sk_off1.png'},{k:'sc_2_avail',on:'sk_on2.png',off:'sk_off2.png'},{k:'sc_3_avail',on:'sk_on3.png',off:'sk_off3.png'}];
				var scX = PX - 136, scY = 6, scW = 36, scH = 36, scGap = 12;
				for (var si = 0; si < 3; si++) { var sc = scIcons[si], avail = core.getFlag(sc.k, false), im = scImgs[avail ? sc.on : sc.off], ix = scX + si * (scW + scGap);
					if (im) { c.drawImage(im, ix, scY, scW, scH); } else { c.fillStyle = avail ? 'rgba(100,200,255,0.5)' : 'rgba(60,60,60,0.5)'; c.fillRect(ix, scY, scW, scH); }
					if (si === 0 && core.getFlag('sc_meizhan_active', false)) { var tr = core.getFlag('sc_meizhan_turns', 0); var cx = ix + scW/2, cy = scY + scH/2; c.fillStyle = 'rgba(0,0,0,0.65)'; c.fillRect(cx - 14, cy - 12, 28, 24); c.strokeStyle = '#FFD700'; c.lineWidth = 2; c.strokeRect(cx - 14, cy - 12, 28, 24); c.font = 'bold 16px Verdana'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillStyle = '#FFD700'; c.fillText(tr, cx, cy); }

				}
			}
			// 符卡点击：直接在gameDraw上监听，用PX/PY坐标系，缩放无偏差
			if (!scClickCv && gd) {
				scClickCv = 1; // 标记已初始化
				function spellClick(e) {
					if (!core.isPlaying() || (core.status.event && core.status.event.id)) return;
					var r = gd.getBoundingClientRect(), PX = core._PX_ || 672, PY = core._PY_ || 416;
					var sx = PX / r.width, sy = PY / r.height;
					var cx = e.clientX, cy = e.clientY;
					if (cx == null && e.touches && e.touches[0]) { cx = e.touches[0].clientX; cy = e.touches[0].clientY; }
					var px = (cx - r.left) * sx, py = (cy - r.top) * sy;
					var scX = PX - 136, scY = 6, scW = 36, scH = 36, scGap = 12;
					for (var i = 0; i < 3; i++) { var ix = scX + i * (scW + scGap); if (px >= ix && px <= ix + scW && py >= scY && py <= scY + scH) { e.stopPropagation(); e.preventDefault(); core.useSpellCard(i + 1); return; } }
				}
				gd.addEventListener('mousedown', spellClick, true);
				gd.addEventListener('touchstart', spellClick, {capture: true, passive: false});
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
		core.bigmap.canvas = ["bg2", "fg2", "bg", "bg3", "event", "event2", "fg", "damage"];
		core.initStatus.bg2maps = {};
		core.initStatus.fg2maps = {};
		core.initStatus.bg3maps = {};

		if (main.mode == 'editor') {
			/*插入编辑器的图层 不做此步新增图层无法在编辑器显示*/
			// 编辑器图层覆盖优先级 eui > efg > fg(前景层) > event2(48*32图块的事件层) > event(事件层) > bg(背景层)
			// 背景层2(bg2) 插入事件层(event)之前(即bg与event之间)
			document.getElementById('mapEdit').insertBefore(bg2Canvas, document.getElementById('event'));
			// 背景层3(bg3) 插入事件层(event)之前(即bg2与event之间)
			document.getElementById('mapEdit').insertBefore(bg3Canvas, document.getElementById('event'));
			// 前景层2(fg2) 插入编辑器前景(efg)之前(即fg之后)
			document.getElementById('mapEdit').insertBefore(fg2Canvas, document.getElementById('ebm'));
			// 原本有三个图层 从4开始添加
			var num = 4;
			// 新增图层存入editor.dom中
			editor.dom.bg2c = core.canvas.bg2.canvas;
			editor.dom.bg2Ctx = core.canvas.bg2;
			editor.dom.fg2c = core.canvas.fg2.canvas;
			editor.dom.fg2Ctx = core.canvas.fg2;
			editor.dom.bg3c = core.canvas.bg3.canvas;
			editor.dom.bg3Ctx = core.canvas.bg3;
			editor.dom.maps.push('bg2map', 'fg2map', 'bg3map');
			editor.dom.canvas.push('bg2', 'fg2', 'bg3');

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
			return ["bg2map", "fg2map", "bg3map"].concat(_loadFloor_doNotCopy());
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
			// 锁定竖屏
			try {
				if (screen.orientation && screen.orientation.lock) {
					screen.orientation.lock('portrait').catch(function(){});
				}
			} catch(e) {}
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

		// ========== 宝石血瓶左下角显示数值 ==========
		// 默认开启；core.setFlag('itemDetail', false)可关闭，core.setFlag('itemDetail', true)重开+updateDamage()
		var _itemDetailOn = true;
		var _ignoreItems = ['superPotion', 'redShard', 'blueShard', 'greenShard'];
		var _getItemDetail = function(floorId) {
			floorId = floorId || core.status.floorId;
			// flag=false可关闭，闭包默认true（hero未初始化时setFlag无效）
			if (!core.status.thisMap) return;
			if (core.getFlag('itemDetail') === false) return;
			if (!_itemDetailOn && !core.getFlag('itemDetail')) return;
			var blocks = core.status.maps[floorId].blocks;
			if (!blocks) return;
			var beforeRatio = core.status.thisMap.ratio;
			core.status.thisMap.ratio = core.status.maps[floorId].ratio;
			var diff = {};
			var beforeHero = core.status.hero;
			var hero = core.clone(beforeHero);
			var origFlags = hero.flags;
			var handler = {
				set: function(target, key, v) {
					diff[key] = v - (target[key] || 0);
					if (!diff[key]) diff[key] = void 0;
					return true;
				}
			};
			core.status.hero = new Proxy(hero, handler);
			var blocks = core.status.maps[floorId].blocks;
			for (var i = 0; i < blocks.length; i++) {
				var block = blocks[i];
				if ((block.event.cls !== 'items' && block.event.cls !== 'constants') || block.disable) continue;
				var id = block.event.id;
				if (!id || _ignoreItems.indexOf(id) >= 0) continue;
				var x = block.x, y = block.y;
				// v2优化，只处理视口范围
				if (core.bigmap.v2) {
					if (x < core.bigmap.posX - core.bigmap.extend ||
						x > core.bigmap.posX + core._WIDTH_ + core.bigmap.extend ||
						y < core.bigmap.posY - core.bigmap.extend ||
						y > core.bigmap.posY + core._HEIGHT_ + core.bigmap.extend) {
						continue;
					}
				}
				var item = core.material.items[id];
				if (!item) continue;
				diff = {};
				// 装备：直接读equip.value
				if (item.cls === 'equips' && item.equip) {
					var eqVal = item.equip.value || {};
					var eqPer = item.equip.percentage || {};
					for (var name in eqVal) {
						if (eqVal[name]) diff[name] = eqVal[name];
					}
					for (var name in eqPer) {
						if (eqPer[name]) diff[name + 'per'] = eqPer[name] + '%';
					}
					_drawItemDetail(diff, x, y);
					continue;
				}
				// 普通道具：通过Proxy捕获效果
				if (!item.itemEffect) continue;
				core.setFlag('__statistics__', true);
				try {
					eval(item.itemEffect);
				} catch (e) {}
				core.removeFlag('__statistics__');
				_drawItemDetail(diff, x, y);
			}
			core.status.thisMap.ratio = beforeRatio;
			core.status.hero = beforeHero;
			window.hero = beforeHero;
			// 恢复flags引用
			if (beforeHero) beforeHero.flags = origFlags;
		};
		var _drawItemDetail = function(diff, x, y) {
			var px = 32 * x + 2;
			var py = 32 * y + 30;
			var i = 0;
			for (var name in diff) {
				if (!diff[name]) continue;
				var content = diff[name];
				if (typeof content === 'number') content = core.formatBigNumber(content, true);
				var color = '#fff';
				switch (name) {
						case 'atk': case 'atkper': color = '#FF7A7A'; break;
						case 'def': case 'defper': color = '#00E6F1'; break;
						case 'mdef': case 'mdefper': color = '#6EFF83'; break;
						case 'hp': color = '#A4FF00'; break;
						case 'hpmax': case 'hpmaxper': color = '#F9FF00'; break;
						case 'mana': color = '#c66'; break;
						case 'exp': color = '#C77DFF'; break;
						case 'money': color = '#FFD700'; break;
					}
				core.status.damage.data.push({
					text: content,
					px: px,
					py: py - 10 * i,
					color: color
				});
				i++;
			}
		};
		// 钩子：在_updateDamage_damage之后追加道具详情
		var __orig_damage = control.prototype._updateDamage_damage;
		control.prototype._updateDamage_damage = function(floorId, onMap) {
			__orig_damage.apply(this, arguments);
			_getItemDetail(floorId);
		};
		// 系统设置集成：在"显示设置"中添加 "道具详情" 开关
		var __drawSwitchs_display = ui.prototype._drawSwitchs_display;
		ui.prototype._drawSwitchs_display = function() {
			core.status.event.id = 'switchs-display';
			var choices = [
				" <   放缩：" + Math.max(core.domStyle.scale, 1) + "x   > ",
				"高清画面： " + (core.flags.enableHDCanvas ? "[ON]" : "[OFF]"),
				"定点怪显： " + (core.flags.enableEnemyPoint ? "[ON]" : "[OFF]"),
				"怪物显伤： " + (core.flags.displayEnemyDamage ? "[ON]" : "[OFF]"),
				"临界显伤： " + (core.flags.displayCritical ? "[ON]" : "[OFF]"),
				"领域显伤： " + (core.flags.displayExtraDamage ? "[ON]" : "[OFF]"),
				"领域模式： " + (core.flags.extraDamageType == 2 ? "[最简]" : core.flags.extraDamageType == 1 ? "[半透明]" : "[完整]"),
				"道具详情： " + (_itemDetailOn && core.getFlag('itemDetail') !== false ? "[ON]" : "[OFF]"),
				"自动放缩： " + (core.getLocalStorage('autoScale') ? "[ON]" : "[OFF]"),
				"返回上一级"
			];
			this.drawChoices(null, choices);
		};
		var __clickSwitchs_display = actions.prototype._clickSwitchs_display;
		actions.prototype._clickSwitchs_display = function(x, y) {
			var choices = core.status.event.ui.choices;
			var top = this._getChoicesTopIndex(choices.length);
			var sel = y - top;
			if (sel === 7) {
				if (this._out(x)) return;
				core.status.event.selection = 7;
				core.playSound('确定');
				_itemDetailOn = !_itemDetailOn;
				if (_itemDetailOn) core.setFlag('itemDetail', true);
				else core.setFlag('itemDetail', false);
				core.updateDamage();
				ui.prototype._drawSwitchs_display.call(core.ui);
				return;
			}
			if (sel > 7) y -= 1;
			__clickSwitchs_display.call(this, x, y);
		};
		// ========== 宝石血瓶显示数值 END ==========

		window.Sprite = Sprite;
	},
	"reduceDamageDisplay": function () {
		// ========== 显示减伤（+1攻/+1防收益，复刻RGM按住D键效果） ==========
		// 显示设置 → 显示减伤：地图上每只怪物头顶显示"+1攻收益"与"+1防收益"。
		// 与"临界显伤"互斥（打开一方自动关闭另一方，避免数字重叠）。
		// 持久化：跟随引擎 _init_sys_flags 从 localStorage 读取（读档/新游戏后仍生效）。
		var __initSysFlags = core._init_sys_flags;
		core._init_sys_flags = function () {
			__initSysFlags.apply(this, arguments);
			core.flags.displayReduceDamage = core.getLocalStorage('reduceDamage', false);
		};
		// 显示设置菜单：临界显伤后插入"显示减伤"（临界显伤 → 临界显示 改名）
		var __drawDisp = ui.prototype._drawSwitchs_display;
		ui.prototype._drawSwitchs_display = function () {
			core.status.event.id = 'switchs-display';
			var choices = [
				" <   放缩：" + Math.max(core.domStyle.scale, 1) + "x   > ",
				"高清画面： " + (core.flags.enableHDCanvas ? "[ON]" : "[OFF]"),
				"定点怪显： " + (core.flags.enableEnemyPoint ? "[ON]" : "[OFF]"),
				"怪物显伤： " + (core.flags.displayEnemyDamage ? "[ON]" : "[OFF]"),
				"临界显示： " + (core.flags.displayCritical ? "[ON]" : "[OFF]"),
				"显示减伤： " + (core.flags.displayReduceDamage ? "[ON]" : "[OFF]"),
				"领域显伤： " + (core.flags.displayExtraDamage ? "[ON]" : "[OFF]"),
				"领域模式： " + (core.flags.extraDamageType == 2 ? "[最简]" : core.flags.extraDamageType == 1 ? "[半透明]" : "[完整]"),
				"道具详情： " + (core.getFlag('itemDetail') !== false ? "[ON]" : "[OFF]"),
				"自动放缩： " + (core.getLocalStorage('autoScale') ? "[ON]" : "[OFF]"),
				"返回上一级"
			];
			this.drawChoices(null, choices);
		};
		// 点击处理：sel 5 = 显示减伤（开启时自动关闭临界显伤）；其余索引下移1交给内层链
		var __clickDisp = actions.prototype._clickSwitchs_display;
		actions.prototype._clickSwitchs_display = function (x, y) {
			var choices = core.status.event.ui.choices;
			var top = this._getChoicesTopIndex(choices.length);
			var sel = y - top;
			if (sel === 5) {
				if (this._out(x)) return;
				core.status.event.selection = 5;
				core.playSound('确定');
				core.flags.displayReduceDamage = !core.flags.displayReduceDamage;
				if (core.flags.displayReduceDamage && core.flags.displayCritical) {
					core.flags.displayCritical = false;
					core.setLocalStorage('critical', false);
				}
				core.setLocalStorage('reduceDamage', core.flags.displayReduceDamage);
				core.updateDamage();
				ui.prototype._drawSwitchs_display.call(core.ui);
				return;
			}
			if (sel > 5) y -= 1;
			__clickDisp.call(this, x, y);
		};
		// 反向互斥：打开临界显伤时自动关闭显示减伤
		var __clickCritical = actions.prototype._clickSwitchs_display_critical;
		actions.prototype._clickSwitchs_display_critical = function () {
			if (!core.flags.displayCritical) {
				core.flags.displayReduceDamage = false;
				core.setLocalStorage('reduceDamage', false);
			}
			__clickCritical.apply(this, arguments);
		};
		// 地图渲染：怪物头顶 +1攻收益（粉/灰 y-21）与 +1防收益（青/灰 y-11），伤害数字在 y-1
		var __origDmg = control.prototype._updateDamage_damage;
		control.prototype._updateDamage_damage = function (floorId, onMap) {
			__origDmg.apply(this, arguments);
			if (!core.flags.displayReduceDamage) return;
			core.extractBlocks(floorId);
			var heroAtk = core.status.hero.atk;
			core.status.maps[floorId].blocks.forEach(function (block) {
				var x = block.x, y = block.y;
				if (onMap && core.bigmap.v2) {
					if (x < core.bigmap.posX - core.bigmap.extend || x > core.bigmap.posX + core._WIDTH_ + core.bigmap.extend
						|| y < core.bigmap.posY - core.bigmap.extend || y > core.bigmap.posY + core._HEIGHT_ + core.bigmap.extend) return;
				}
				if (block.disable || block.event.cls.indexOf('enemy') != 0 || block.event.displayDamage === false) return;
				var enemy = block.event.id;
				var now = core.enemys._getDamage(enemy, null, x, y, floorId);
				if (now == null) return;
				var atk1 = core.enemys._getDamage(enemy, { "atk": heroAtk + 1 }, x, y, floorId);
				var def1 = core.enemys.getDefDamage(enemy, 1, x, y, floorId);
				var aB = (atk1 == null) ? -1 : (now - atk1);
				var dB = (typeof def1 == 'number') ? def1 : -1;
				if (aB <= 0 && dB <= 0) return;
				var aC = '#C0C0C0', dC = '#C0C0C0';
				if (aB >= dB) aC = '#FF809B';
				else dC = '#80E4FF';
				if (aB > 0) core.status.damage.data.push({ text: core.formatBigNumber(aB, true), px: 32 * x + 1, py: 32 * (y + 1) - 21, color: aC });
				if (dB > 0) core.status.damage.data.push({ text: core.formatBigNumber(dB, true), px: 32 * x + 1, py: 32 * (y + 1) - 11, color: dC });
			});
		};
		// ========== 显示减伤 END ==========
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
		// 【东方星冥线】夹击光效插件 (betweenAttack)
		core.plugin._betCanvas = document.getElementById('bg3');
		if (core.plugin._betCanvas) {
			core.plugin._betCtx = core.plugin._betCanvas.getContext('2d');
		}
		core.plugin._drawBetweenAttack = function (x, y, pos, frame) {
			var ctx = core.plugin._betCtx;
			if (!ctx) return;
			var ix = x * 32, iy = y * 32;
			// 左右夹击：使用 light1.png（横光束，68宽，每帧63高）
			if (pos[0]) {
				var f = ((frame - 1) % 2); // light1.png 有 2 帧
				ctx.drawImage(core.material.images.images["light1.png"], 0, f * 63, 68, 63, ix - 18, iy - 2, 68, 63);
			}
			// 上下夹击：使用 light.png（竖光束，4帧 32×68）
			if (pos[1]) {
				ctx.drawImage(core.material.images.images["light.png"], 32 * (frame - 1), 0, 32, 68, ix, iy - 18, 32, 68);
			}
		};

		core.registerAnimationFrame("betweenAttack", true, function (timestamp) {
			var ctx = core.plugin._betCtx;
			if (!ctx) return;
			if (!core.flags.betweenAttackData) {
				ctx.clearRect(0, 0, core.__PIXELS__, core.__PIXELS__);
				return;
			}
			var time = core.events._timestamp;
			if (time && timestamp - time < 400) return;
			ctx.clearRect(0, 0, core.__PIXELS__, core.__PIXELS__);
			core.events._timestamp = timestamp;
			var data = core.flags.betweenAttackData || {};
			core.flags._frame = core.flags._frame || 1;
			var frame = core.flags._frame;
			for (var loc in data) {
				var l = loc.split(",");
				var x = parseInt(l[0]), y = parseInt(l[1]);
				core.plugin._drawBetweenAttack(x, y, data[loc], frame);
			}
			core.flags._frame = frame + 1;
			if (core.flags._frame > 4) core.flags._frame = 1;
		});

		var _origin_extraDamage = core.control._updateDamage_extraDamage;
		core.control._updateDamage_extraDamage = function (floorId, onMap) {
			core.flags.betweenAttackData = null;
			if (!core.flags.useBetweenLight) return _origin_extraDamage.call(core.control, floorId, onMap);
			core.status.damage.extraData = [];
			if (!core.flags.displayExtraDamage) return;
			var width = core.floors[floorId].width, height = core.floors[floorId].height;
			var startX = onMap && core.bigmap.v2 ? Math.max(0, core.bigmap.posX - core.bigmap.extend) : 0;
			var endX = onMap && core.bigmap.v2 ? Math.min(width, core.bigmap.posX + core.__SIZE__ + core.bigmap.extend + 1) : width;
			var startY = onMap && core.bigmap.v2 ? Math.max(0, core.bigmap.posY - core.bigmap.extend) : 0;
			var endY = onMap && core.bigmap.v2 ? Math.min(height, core.bigmap.posY + core.__SIZE__ + core.bigmap.extend + 1) : height;
			var find = function (x, y) {
				return core.status.damage.extraData.find(function (d) { return d.x == x && d.y == y; });
			};
			var getEnemy = function (x, y) {
				var id = core.getBlockId(x, y, floorId);
				var e = core.material.enemys[id];
				if (main.mode == "editor") e = core.enemys.enemys[id];
				return e;
			};
			for (var x = startX; x < endX; x++) {
				for (var y = startY; y < endY; y++) {
					var alpha = 1;
					if (core.noPass(x, y, floorId)) {
						if (core.flags.extraDamageType == 2) alpha = 0;
						else if (core.flags.extraDamageType == 1) alpha = 0.6;
					}
					var loc = x + "," + y;
					var damage = core.status.checkBlock.damage[loc] || 0;
					if (damage > 0) {
						damage = isFinite(damage) ? core.formatBigNumber(damage, true) : '???';
						var left = false, top = false;
						var e_left = getEnemy(x - 1, y), e_right = getEnemy(x + 1, y);
						var e_bottom = getEnemy(x, y - 1), e_top = getEnemy(x, y + 1);
						if (core.hasSpecial(e_left, 16) && core.hasSpecial(e_right, 16) && e_left.id == e_right.id)
							left = true;
						if (core.hasSpecial(e_bottom, 16) && core.hasSpecial(e_top, 16) && e_bottom.id == e_top.id)
							top = true;
						core.flags.betweenAttackData = core.flags.betweenAttackData || {};
						if (core.flags.betweenAttackData[x + "," + y]) continue;
						var data = [left, top];
						var px = 32 * x + 16, py = 32 * (y + 1) - 14;
						if (left || top) {
							core.flags.betweenAttackData[x + "," + y] = data;
							// 夹击伤害显示在中间空地
							core.status.damage.extraData.push({ text: damage, px: 32 * x + 16, py: 32 * (y + 1) - 14, color: '#ffaa33', alpha: alpha });
						}
						core.plugin._drawBetweenAttack(x, y, data, 1);
						if (!(left || top)) {
							core.status.damage.extraData.push({ text: damage, px: 32 * x + 16, py: 32 * (y + 1) - 14, color: '#ffaa33', alpha: alpha });
						}
					} else {
						if (core.status.checkBlock.ambush[x + "," + y]) {
							core.status.damage.extraData.push({ text: '!', px: 32 * x + 16, py: 32 * (y + 1) - 14, color: '#ffaa33', alpha: alpha });
						}
					}
				}
			}
		};
		})();
	}
}

// ========== Sprite 插件 (基于canvas的sprite化，摘编整理自万宁魔塔) ==========
// 用法: const s = new Sprite(x, y, w, h, z, 'game', 'mySprite');
//       s.on('click', (px, py) => { ... });
//       s.setCss('box-shadow: 0 0 10px black');
//       s.destroy();

const _sprites = {};

class Sprite {
	constructor(x, y, w, h, z, reference, name) {
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
		this.zIndex = z;
		this.reference = reference;
		this.canvas = null;
		this.context = null;
		this.count = 0;
		this.name = name;
		this._keyListeners = [];
		this.init();
	}

	init() {
		var name = this.name || '_sprite_' + Sprite._count;
		this.name = name;
		if (this.reference === 'window') {
			var canvas = document.createElement('canvas');
			this.canvas = canvas;
			this.context = canvas.getContext('2d');
			canvas.width = this.width;
			canvas.height = this.height;
			canvas.style.width = this.width + 'px';
			canvas.style.height = this.height + 'px';
			canvas.style.position = 'absolute';
			canvas.style.top = this.y + 'px';
			canvas.style.left = this.x + 'px';
			canvas.style.zIndex = String(this.zIndex);
			document.body.appendChild(canvas);
		} else {
			this.context = core.createCanvas(name, this.x, this.y, this.width, this.height, this.zIndex);
			this.canvas = this.context.canvas;
			this.count = Sprite._count;
			this.canvas.style.pointerEvents = 'auto';
		}
		Sprite._count++;
		_sprites[this.name] = this;
	}

	// 设置CSS特效，支持多行
	setCss(css) {
		css = css.replace(/\n/g, ';').replace(/;;+/g, ';');
		var effects = css.split(';');
		var canvas = this.canvas;
		for (var i = 0; i < effects.length; i++) {
			var v = effects[i].trim();
			if (!v) continue;
			var colon = v.indexOf(':');
			if (colon < 0) continue;
			var name = v.substring(0, colon).trim();
			var value = v.substring(colon + 1).trim();
			// CSS属性名转camelCase
			name = name.split('-').reduce(function(pre, curr, idx) {
				if (idx === 0) return curr;
				return pre + curr.charAt(0).toUpperCase() + curr.slice(1);
			}, '');
			if (name in canvas.style)
				canvas.style[name] = value;
		}
		return this;
	}

	move(x, y, isDelta) {
		if (isDelta) {
			if (x !== undefined && x !== null) this.x += x;
			if (y !== undefined && y !== null) this.y += y;
		} else {
			if (x !== undefined && x !== null) this.x = x;
			if (y !== undefined && y !== null) this.y = y;
		}
		if (this.reference === 'window') {
			var ele = this.canvas;
			ele.style.left = this.x + 'px';
			ele.style.top = this.y + 'px';
		} else {
			core.relocateCanvas(this.context, this.x, this.y);
		}
		return this;
	}

	resize(w, h, styleOnly) {
		if (w !== undefined && w !== null) this.width = w;
		if (h !== undefined && h !== null) this.height = h;
		if (this.reference === 'window') {
			var ele = this.canvas;
			ele.style.width = w + 'px';
			ele.style.height = h + 'px';
			if (!styleOnly) {
				ele.width = w;
				ele.height = h;
			}
		} else {
			core.resizeCanvas(this.context, w, h, styleOnly);
		}
		return this;
	}

	rotate(angle, cx, cy) {
		if (this.reference === 'window') {
			var left = this.x, top = this.y;
			this.canvas.style.transformOrigin = (cx - left) + 'px ' + (cy - top) + 'px';
			if (angle === 0) {
				this.canvas.style.transform = '';
			} else {
				this.canvas.style.transform = 'rotate(' + angle + 'deg)';
			}
		} else {
			core.rotateCanvas(this.context, angle, cx, cy);
		}
		return this;
	}

	// 擦除指定区域，不传参数则清空整个画布
	clear(x, y, w, h) {
		if (x === undefined) {
			this.context.clearRect(0, 0, this.width, this.height);
		} else {
			this.context.clearRect(x, y, w || this.width, h || this.height);
		}
		return this;
	}

	destroy() {
		if (this.reference === 'window') {
			if (this.canvas && this.canvas.parentNode)
				document.body.removeChild(this.canvas);
		} else {
			core.deleteCanvas(this.name);
		}
		for (var i = 0; i < this._keyListeners.length; i++) {
			var kv = this._keyListeners[i];
			document.removeEventListener(kv[0], kv[1]);
		}
		_sprites[this.name] = undefined;
	}

	// 事件监听，坐标自动换算为相对sprite左上角
	on(type, handler) {
		if (this.reference !== 'game')
			throw new Error('Sprite.on() 仅支持 reference="game"');
		var mouseEvents = [
			'auxclick', 'click', 'contextmenu', 'dblclick', 'mousedown', 'mouseup',
			'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover'
		];
		var keyEvents = ['keydown', 'keypress', 'keyup'];
		var touchEvents = ['touchstart', 'touchend', 'touchcancel', 'touchmove'];
		var self = this;
		if (mouseEvents.indexOf(type) >= 0) {
			this.addEventListener(type, function(e) {
				var px = e.offsetX / core.domStyle.scale;
				var py = e.offsetY / core.domStyle.scale;
				handler(px, py);
			});
		} else if (type === 'wheel') {
			this.addEventListener('wheel', function(e) {
				handler(e.deltaY, e.deltaX, e.deltaZ);
			});
		} else if (keyEvents.indexOf(type) >= 0) {
			var listener = function(e) {
				handler(e.key, e.keyCode, e.altKey, e.ctrlKey, e.shiftKey);
			};
			this._keyListeners.push([type, listener]);
			document.addEventListener(type, listener);
		} else if (touchEvents.indexOf(type) >= 0) {
			this.addEventListener(type, function(e) {
				var touches = e.touches;
				var locs = [];
				for (var i = 0; i < touches.length; i++) {
					var t = touches[i];
					var loc = core.actions._getClickLoc(t.clientX, t.clientY);
					locs.push([loc.x / core.domStyle.scale, loc.y / core.domStyle.scale]);
				}
				handler.apply(null, locs);
			});
		}
	}

	addEventListener() {
		this.canvas.addEventListener.apply(this.canvas, arguments);
	}

	removeEventListener() {
		this.canvas.removeEventListener.apply(this.canvas, arguments);
	}
}

Sprite._count = 0;

// 全局获取sprite
window.getSprite = function(name) {
	var s = _sprites[name];
	if (!s) throw new Error('Sprite "' + name + '" 不存在');
	return s;
};
window.Sprite = Sprite;

// ==================== 功能函数集 (utils) ====================
// 使用方式：const { has, slide, ofDir } = core.plugin.utils;

var _utilsPluginFn = function () {

// 兜底：如果 core 尚未定义，注册到 plugins 对象延迟执行
if (typeof core === 'undefined') {
    plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1["utils"] = _utilsPluginFn;
    return;
}

/**
 * 滑动数组，使数组元素平移若干项（会修改原数组）
 * @example slide([1, 2, 3], -1); // [2, 3, 1]
 * @param {any[]} arr 需要滑动的数组
 * @param {number} delta 滑动的项数，正负均可
 */
function slide(arr, delta) {
    if (delta === 0) return arr;
    delta %= arr.length;
    if (delta > 0) {
        arr.unshift.apply(arr, arr.splice(arr.length - delta, delta));
        return arr;
    }
    if (delta < 0) {
        arr.push.apply(arr, arr.splice(0, -delta));
        return arr;
    }
}

/**
 * 获取一个方向的反方向
 * @example backDir('up'); // 'down'
 * @param {string} dir 方向
 */
function backDir(dir) {
    var map = {
        up: 'down', down: 'up',
        left: 'right', right: 'left',
        leftup: 'rightdown', leftdown: 'rightup',
        rightdown: 'leftup', rightup: 'leftdown'
    };
    if (!(dir in map)) {
        throw new TypeError('Wrong dir is delivered when getting back direction.');
    }
    return map[dir];
}

/**
 * 判断一个值是否不是 undefined 和 null
 * @example has(0); // true
 * @example has(null); // false
 */
function has(v) {
    return v !== null && v !== void 0;
}

/**
 * 解析 CSS 字符串为对象（camelCase key）
 * @example parseCss('background-color: cyan; cursor: pointer');
 * // { backgroundColor: 'cyan', cursor: 'pointer' }
 */
function parseCss(css) {
    var res = {};
    var styles = css.split(';');
    for (var i = 0; i < styles.length; i++) {
        var one = styles[i];
        var colonIdx = one.indexOf(':');
        if (colonIdx === -1) continue;
        var key = one.slice(0, colonIdx).trim();
        var data = one.slice(colonIdx + 1).trim();
        if (!key) continue;
        var cssKey = key.replace(/-([a-z])/g, function (str, $1) { return $1.toUpperCase(); });
        res[cssKey] = data;
    }
    return res;
}

/**
 * 等待一段时间，需在 async function 中使用
 * @example await sleep(500); // 等待 500 毫秒
 */
async function sleep(time) {
    return new Promise(function (res) { setTimeout(res, time); });
}

/**
 * 在两帧后执行回调
 * @example nextFrame(function () { console.log(1); });
 */
function nextFrame(cb) {
    requestAnimationFrame(function () {
        requestAnimationFrame(cb);
    });
}

/**
 * HSL 转 RGB（内部辅助）
 */
function hslToRgb(h, s, l) {
    if (s === 0) {
        var g = Math.round(l * 255);
        return [g, g, g];
    }
    function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    }
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    return [
        Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
        Math.round(hue2rgb(p, q, h) * 255),
        Math.round(hue2rgb(p, q, h - 1 / 3) * 255)
    ];
}

// CSS 命名颜色表
var cssColors = {
    black: '#000000', silver: '#c0c0c0', gray: '#808080', white: '#ffffff',
    maroon: '#800000', red: '#ff0000', purple: '#800080', fuchsia: '#ff00ff',
    green: '#008000', lime: '#00ff00', olive: '#808000', yellow: '#ffff00',
    navy: '#000080', blue: '#0000ff', teal: '#008080', aqua: '#00ffff',
    orange: '#ffa500', aliceblue: '#f0f8ff', antiquewhite: '#faebd7',
    aquamarine: '#7fffd4', azure: '#f0ffff', beige: '#f5f5dc',
    bisque: '#ffe4c4', blanchedalmond: '#ffebcd', blueviolet: '#8a2be2',
    brown: '#a52a2a', burlywood: '#deb887', cadetblue: '#5f9ea0',
    chartreuse: '#7fff00', chocolate: '#d2691e', coral: '#ff7f50',
    cornflowerblue: '#6495ed', cornsilk: '#fff8dc', crimson: '#dc143c',
    cyan: '#00ffff', darkblue: '#00008b', darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b', darkgray: '#a9a9a9', darkgreen: '#006400',
    darkgrey: '#a9a9a9', darkkhaki: '#bdb76b', darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f', darkorange: '#ff8c00', darkorchid: '#9932cc',
    darkred: '#8b0000', darksalmon: '#e9967a', darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b', darkslategray: '#2f4f4f', darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1', darkviolet: '#9400d3', deeppink: '#ff1493',
    deepskyblue: '#00bfff', dimgray: '#696969', dimgrey: '#696969',
    dodgerblue: '#1e90ff', firebrick: '#b22222', floralwhite: '#fffaf0',
    forestgreen: '#228b22', gainsboro: '#dcdcdc', ghostwhite: '#f8f8ff',
    gold: '#ffd700', goldenrod: '#daa520', greenyellow: '#adff2f',
    grey: '#808080', honeydew: '#f0fff0', hotpink: '#ff69b4',
    indianred: '#cd5c5c', indigo: '#4b0082', ivory: '#fffff0',
    khaki: '#f0e68c', lavender: '#e6e6fa', lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00', lemonchiffon: '#fffacd', lightblue: '#add8e6',
    lightcoral: '#f08080', lightcyan: '#e0ffff', lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3', lightgreen: '#90ee90', lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1', lightsalmon: '#ffa07a', lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa', lightslategray: '#778899', lightslategrey: '#778899',
    lightsteelblue: '#b0c4de', lightyellow: '#ffffe0', limegreen: '#32cd32',
    linen: '#faf0e6', magenta: '#ff00ff', mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd', mediumorchid: '#ba55d3', mediumpurple: '#9370db',
    mediumseagreen: '#3cb371', mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a', mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585', midnightblue: '#191970', mintcream: '#f5fffa',
    mistyrose: '#ffe4e1', moccasin: '#ffe4b5', navajowhite: '#ffdead',
    oldlace: '#fdf5e6', olivedrab: '#6b8e23', orangered: '#ff4500',
    orchid: '#da70d6', palegoldenrod: '#eee8aa', palegreen: '#98fb98',
    paleturquoise: '#afeeee', palevioletred: '#db7093', papayawhip: '#ffefd5',
    peachpuff: '#ffdab9', peru: '#cd853f', pink: '#ffc0cb', plum: '#dda0dd',
    powderblue: '#b0e0e6', rosybrown: '#bc8f8f', royalblue: '#4169e1',
    saddlebrown: '#8b4513', salmon: '#fa8072', sandybrown: '#f4a460',
    seagreen: '#2e8b57', seashell: '#fff5ee', sienna: '#a0522d',
    skyblue: '#87ceeb', slateblue: '#6a5acd', slategray: '#708090',
    slategrey: '#708090', snow: '#fffafa', springgreen: '#00ff7f',
    steelblue: '#4682b4', tan: '#d2b48c', thistle: '#d8bfd8',
    tomato: '#ff6347', turquoise: '#40e0d0', violet: '#ee82ee',
    wheat: '#f5deb3', whitesmoke: '#f5f5f5', yellowgreen: '#9acd32',
    transparent: '#0000'
};

/**
 * 将 CSS 颜色解析为 RGBA 数组 [r, g, b, a?]
 * 支持：#RGB #RGBA #RRGGBB #RRGGBBAA rgb() rgba() hsl() hsla() 命名颜色
 * @example parseColor('#fff'); // [255, 255, 255]
 * @example parseColor('rgba(170,230,13,0.2)'); // [170, 230, 13, 0.2]
 * @example parseColor('cyan'); // [0, 255, 255]
 */
function parseColor(color) {
    if (color.startsWith('rgb')) {
        var l = color.indexOf('a') >= 0;
        var match = color.match(/rgba?\([\d\,\s\.%]+\)/);
        if (!has(match)) throw new Error('Invalid color is delivered!');
        return match[0]
            .slice(l ? 5 : 4, -1)
            .split(',')
            .map(function (v, i) {
                var vv = v.trim();
                if (vv.indexOf('%') >= 0) {
                    if (i === 3) return parseInt(vv, 10) / 100;
                    return (parseInt(vv, 10) * 255) / 100;
                }
                return parseFloat(vv);
            })
            .slice(0, l ? 4 : 3);
    }
    if (color[0] === '#') {
        var content = color.slice(1);
        if ([3, 4, 6, 8].indexOf(content.length) === -1)
            throw new Error('Invalid color is delivered!');
        if (content.length <= 4) {
            var res = content.split('').map(function (v) {
                return parseInt('0x' + v + v, 16);
            });
            if (res.length === 4) res[3] /= 255;
            return res;
        }
        var res = [];
        for (var i = 0; i < content.length; i += 2) {
            res.push(parseInt('0x' + content[i] + content[i + 1], 16));
        }
        if (res.length === 4) res[3] /= 255;
        return res;
    }
    if (color.startsWith('hsl')) {
        var l2 = color.indexOf('a') >= 0;
        var match2 = color.match(/hsla?\([\d\,\s\.%]+\)/);
        if (!has(match2)) throw new Error('Invalid color is delivered!');
        var hsl = match2[0]
            .slice(l2 ? 5 : 4, -1)
            .split(',')
            .map(function (v) {
                var vv = v.trim();
                if (vv.indexOf('%') >= 0) return parseInt(vv, 10) / 100;
                return parseFloat(vv);
            });
        // CSS HSL 色相是度数(0-360)，hslToRgb 期望 0-1
        hsl[0] = (hsl[0] % 360) / 360;
        var rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);
        return l2 ? rgb.concat([hsl[3]]) : rgb;
    }
    // 命名颜色
    var hex = cssColors[color];
    if (!has(hex)) throw new Error('Invalid color is delivered!');
    return parseColor(hex);
}

/**
 * 确保变量是数组，不是则包装为数组
 * @example ensureArray(1); // [1]
 * @example ensureArray([1, 2]); // [1, 2]
 */
function ensureArray(arr) {
    return arr instanceof Array ? arr : [arr];
}

/**
 * 返回坐标 (x, y) 向 dir 方向移动 d 格后的坐标
 * @example ofDir(7, 7, 'left'); // [6, 7]
 * @example ofDir(10, 8, 'leftup', 5); // [5, 3]
 */
function ofDir(x, y, dir, d) {
    if (d === void 0) d = 1;
    var scan = core.utils.scan2[dir];
    return [x + scan.x * d, y + scan.y * d];
}

// 注册到 core.plugin.utils
if (core.plugin.utils) {
    throw new ReferenceError("core.plugin 上已有 'utils' 属性，功能函数插件无法注册！");
}
core.plugin.utils = {
    has: has,
    slide: slide,
    backDir: backDir,
    parseCss: parseCss,
    sleep: sleep,
    nextFrame: nextFrame,
    parseColor: parseColor,
    hslToRgb: hslToRgb,
    ensureArray: ensureArray,
    ofDir: ofDir
};

// ==================== 范围判断 (range) ====================
// 使用方式：const { Range } = core.plugin.range;
// d 统一为边长，d=5 表示 5×5 范围（中心 ± floor(d/2)）

class Range {
    constructor(collection) {
        this.collection = collection;
        this.cache = {};
    }

    /**
     * 扫描 collection 中在范围内的物品
     * @param {string} type 范围类型
     * @param {*} data 范围数据
     * @returns 在范围内的物品列表
     */
    scan(type, data) {
        var t = Range.rangeType[type];
        if (!t) {
            throw new Error("Unknown range type: " + type);
        }
        return t.scan(this, data);
    }

    inRange(type, data, item) {
        var t = Range.rangeType[type];
        if (!t) {
            throw new Error("Unknown range type: " + type);
        }
        return t.inRange(this, data, item);
    }

    clearCache() {
        this.cache = {};
    }
}

Range.rangeType = {};
Range.registerRangeType = function (type, scan, inRange) {
    Range.rangeType[type] = { scan: scan, inRange: inRange };
};

// ----- 默认的范围类型 -----

// 方形区域：d 为边长（如 d=5 → 5×5，半径 = floor(d/2)）
Range.registerRangeType(
    'square',
    function (col, _a) {
        var x = _a.x, y = _a.y, d = _a.d;
        var cache = col.cache.square || (col.cache.square = {});
        var index = x + "," + y + "," + d;
        if (index in cache) return cache[index];
        var list = col.collection.list;
        var r = Math.floor(d / 2);

        return (cache[index] = list.filter(function (v) {
            return (
                has(v.x) &&
                has(v.y) &&
                Math.abs(v.x - x) <= r &&
                Math.abs(v.y - y) <= r
            );
        }));
    },
    function (col, _a, item) {
        var x = _a.x, y = _a.y, d = _a.d;
        var r = Math.floor(d / 2);
        return (
            has(item.x) &&
            has(item.y) &&
            Math.abs(item.x - x) <= r &&
            Math.abs(item.y - y) <= r
        );
    }
);

if ('range' in core.plugin) {
    throw new ReferenceError("core.plugin 上已存在名为 range 的属性！");
}
core.plugin.range = { Range: Range };

};
_utilsPluginFn();

// ==================== 动画插件 (mutate-animate) ====================
// github: https://github.com/unanmed/animate
// npm: mutate-animate
// 提供缓动动画、路径动画、渐变过渡等功能
var _animatePluginFn = function () {

// 兜底：如果 core 尚未定义，注册到 plugins 对象延迟执行
if (typeof core === 'undefined') {
    plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1["animate"] = _animatePluginFn;
    return;
}

if (main.replayChecking) return core.plugin.animate = {};

var M = Object.defineProperty;
var E = (n, i, t) => i in n ? M(n, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[i] = t;
var o = (n, i, t) => (E(n, typeof i != "symbol" ? i + "" : i, t), t);
let w = [];
const k = (n) => {
  for (const i of w)
    if (i.status === "running")
      try {
        for (const t of i.funcs)
          t(n - i.startTime);
      } catch (t) {
        i.destroy(), console.error(t);
      }
  requestAnimationFrame(k);
};
requestAnimationFrame(k);
class I {
  constructor() {
    o(this, "funcs", /* @__PURE__ */ new Set());
    o(this, "status", "stop");
    o(this, "startTime", 0);
    this.status = "running", w.push(this), requestAnimationFrame((i) => this.startTime = i);
  }
  add(i) {
    return this.funcs.add(i), this;
  }
  remove(i) {
    return this.funcs.delete(i), this;
  }
  clear() {
    this.funcs.clear();
  }
  destroy() {
    this.clear(), this.stop();
  }
  stop() {
    this.status = "stop", w = w.filter((i) => i !== this);
  }
}
class F {
  constructor() {
    o(this, "timing");
    o(this, "relation", "absolute");
    o(this, "easeTime", 0);
    o(this, "applying", {});
    o(this, "getTime", Date.now);
    o(this, "ticker", new I());
    o(this, "value", {});
    o(this, "listener", {});
    this.timing = (i) => i;
  }
  async all() {
    if (Object.values(this.applying).every((i) => i === !0))
      throw new ReferenceError("There is no animates to be waited.");
    await new Promise((i) => {
      const t = () => {
        Object.values(this.applying).every((e) => e === !1) && (this.unlisten("end", t), i("all animated."));
      };
      this.listen("end", t);
    });
  }
  async n(i) {
    const t = Object.values(this.applying).filter((s) => s === !0).length;
    if (t < i)
      throw new ReferenceError(
        `You are trying to wait ${i} animate, but there are only ${t} animate animating.`
      );
    let e = 0;
    await new Promise((s) => {
      const r = () => {
        e++, e === i && (this.unlisten("end", r), s(`${i} animated.`));
      };
      this.listen("end", r);
    });
  }
  async w(i) {
    if (this.applying[i] === !1)
      throw new ReferenceError(`The ${i} animate is not animating.`);
    await new Promise((t) => {
      const e = () => {
        this.applying[i] === !1 && (this.unlisten("end", e), t(`${i} animated.`));
      };
      this.listen("end", e);
    });
  }
  listen(i, t) {
    var e, s;
    (s = (e = this.listener)[i]) != null || (e[i] = []), this.listener[i].push(t);
  }
  unlisten(i, t) {
    const e = this.listener[i].findIndex((s) => s === t);
    if (e === -1)
      throw new ReferenceError(
        "You are trying to remove a nonexistent listener."
      );
    this.listener[i].splice(e, 1);
  }
  hook(...i) {
    const t = Object.entries(this.listener).filter(
      (e) => i.includes(e[0])
    );
    for (const [e, s] of t)
      for (const r of s)
        r(this, e);
  }
}
function y(n) {
  return n != null;
}
async function R(n) {
  return new Promise((i) => setTimeout(i, n));
}
class j extends F {
  constructor() {
    super();
    o(this, "shakeTiming");
    o(this, "path");
    o(this, "multiTiming");
    o(this, "value", {});
    o(this, "size", 1);
    o(this, "angle", 0);
    o(this, "targetValue", {
      system: {
        move: [0, 0],
        moveAs: [0, 0],
        resize: 0,
        rotate: 0,
        shake: 0,
        "@@bind": []
      },
      custom: {}
    });
    o(this, "animateFn", {
      system: {
        move: [() => 0, () => 0],
        moveAs: () => 0,
        resize: () => 0,
        rotate: () => 0,
        shake: () => 0,
        "@@bind": () => 0
      },
      custom: {}
    });
    o(this, "ox", 0);
    o(this, "oy", 0);
    o(this, "sx", 0);
    o(this, "sy", 0);
    o(this, "bindInfo", []);
    this.timing = (t) => t, this.shakeTiming = (t) => t, this.multiTiming = (t) => [t, t], this.path = (t) => [t, t], this.applying = {
      move: !1,
      scale: !1,
      rotate: !1,
      shake: !1
    }, this.ticker.add(() => {
      const { running: t } = this.listener;
      if (y(t))
        for (const e of t)
          e(this, "running");
    });
  }
  get x() {
    return this.ox + this.sx;
  }
  get y() {
    return this.oy + this.sy;
  }
  mode(t, e = !1) {
    return typeof t(0) == "number" ? e ? this.shakeTiming = t : this.timing = t : this.multiTiming = t, this;
  }
  time(t) {
    return this.easeTime = t, this;
  }
  relative() {
    return this.relation = "relative", this;
  }
  absolute() {
    return this.relation = "absolute", this;
  }
  bind(...t) {
    return this.applying["@@bind"] === !0 && this.end(!1, "@@bind"), this.bindInfo = t, this;
  }
  unbind() {
    return this.applying["@@bind"] === !0 && this.end(!1, "@@bind"), this.bindInfo = [], this;
  }
  move(t, e) {
    return this.applying.move && this.end(!0, "move"), this.applySys("ox", t, "move"), this.applySys("oy", e, "move"), this;
  }
  rotate(t) {
    return this.applySys("angle", t, "rotate"), this;
  }
  scale(t) {
    return this.applySys("size", t, "resize"), this;
  }
  shake(t, e) {
    this.applying.shake === !0 && this.end(!0, "shake"), this.applying.shake = !0;
    const { easeTime: s, shakeTiming: r } = this, l = this.getTime();
    if (this.hook("start", "shakestart"), s <= 0)
      return this.end(!1, "shake"), this;
    const a = () => {
      const c = this.getTime() - l;
      if (c > s) {
        this.ticker.remove(a), this.applying.shake = !1, this.sx = 0, this.sy = 0, this.hook("end", "shakeend");
        return;
      }
      const h = c / s, m = r(h);
      this.sx = m * t, this.sy = m * e;
    };
    return this.ticker.add(a), this.animateFn.system.shake = a, this;
  }
  moveAs(t) {
    this.applying.moveAs && this.end(!0, "moveAs"), this.applying.moveAs = !0, this.path = t;
    const { easeTime: e, relation: s, timing: r } = this, l = this.getTime(), [a, u] = [this.x, this.y], [c, h] = (() => {
      if (s === "absolute")
        return t(1);
      {
        const [d, f] = t(1);
        return [a + d, u + f];
      }
    })();
    if (this.hook("start", "movestart"), e <= 0)
      return this.end(!1, "moveAs"), this;
    const m = () => {
      const f = this.getTime() - l;
      if (f > e) {
        this.end(!0, "moveAs");
        return;
      }
      const g = f / e, [v, x] = t(r(g));
      s === "absolute" ? (this.ox = v, this.oy = x) : (this.ox = a + v, this.oy = u + x);
    };
    return this.ticker.add(m), this.animateFn.system.moveAs = m, this.targetValue.system.moveAs = [c, h], this;
  }
  register(t, e) {
    if (typeof this.value[t] == "number")
      return this.error(
        `Property ${t} has been regietered twice.`,
        "reregister"
      );
    this.value[t] = e, this.applying[t] = !1;
  }
  apply(t, e) {
    this.applying[t] === !0 && this.end(!1, t), t in this.value || this.error(
      `You are trying to execute nonexistent property ${t}.`
    ), this.applying[t] = !0;
    const s = this.value[t], r = this.getTime(), { timing: l, relation: a, easeTime: u } = this, c = a === "absolute" ? e - s : e;
    if (this.hook("start"), u <= 0)
      return this.end(!1, t), this;
    const h = () => {
      const d = this.getTime() - r;
      if (d > u) {
        this.end(!1, t);
        return;
      }
      const f = d / u, g = l(f);
      this.value[t] = s + g * c;
    };
    return this.ticker.add(h), this.animateFn.custom[t] = h, this.targetValue.custom[t] = c + s, this;
  }
  applyMulti() {
    this.applying["@@bind"] === !0 && this.end(!1, "@@bind"), this.applying["@@bind"] = !0;
    const t = this.bindInfo, e = t.map((h) => this.value[h]), s = this.getTime(), { multiTiming: r, relation: l, easeTime: a } = this, u = r(1);
    if (u.length !== e.length)
      throw new TypeError(
        `The number of binded animate attributes and timing function returns's length does not match. binded: ${t.length}, timing: ${u.length}`
      );
    if (this.hook("start"), a <= 0)
      return this.end(!1, "@@bind"), this;
    const c = () => {
      const m = this.getTime() - s;
      if (m > a) {
        this.end(!1, "@@bind");
        return;
      }
      const d = m / a, f = r(d);
      t.forEach((g, v) => {
        l === "absolute" ? this.value[g] = f[v] : this.value[g] = e[v] + f[v];
      });
    };
    return this.ticker.add(c), this.animateFn.custom["@@bind"] = c, this.targetValue.system["@@bind"] = u, this;
  }
  applySys(t, e, s) {
    s !== "move" && this.applying[s] === !0 && this.end(!0, s), this.applying[s] = !0;
    const r = this[t], l = this.getTime(), a = this.timing, u = this.relation, c = this.easeTime, h = u === "absolute" ? e - r : e;
    if (this.hook("start", `${s}start`), c <= 0)
      return this.end(!0, s);
    const m = () => {
      const f = this.getTime() - l;
      if (f > c) {
        this.end(!0, s);
        return;
      }
      const g = f / c, v = a(g);
      this[t] = r + h * v, t !== "oy" && this.hook(s);
    };
    this.ticker.add(m), t === "ox" ? this.animateFn.system.move[0] = m : t === "oy" ? this.animateFn.system.move[1] = m : this.animateFn.system[s] = m, s === "move" ? (t === "ox" && (this.targetValue.system.move[0] = h + r), t === "oy" && (this.targetValue.system.move[1] = h + r)) : s !== "shake" && (this.targetValue.system[s] = h + r);
  }
  error(t, e) {
    throw e === "repeat" ? new Error(
      `Cannot execute the same animation twice. Info: ${t}`
    ) : e === "reregister" ? new Error(
      `Cannot register an animated property twice. Info: ${t}`
    ) : new Error(t);
  }
  end(t, e) {
    if (t === !0)
      if (this.applying[e] = !1, e === "move" ? (this.ticker.remove(this.animateFn.system.move[0]), this.ticker.remove(this.animateFn.system.move[1])) : e === "moveAs" ? this.ticker.remove(this.animateFn.system.moveAs) : e === "@@bind" ? this.ticker.remove(this.animateFn.system["@@bind"]) : this.ticker.remove(
        this.animateFn.system[e]
      ), e === "move") {
        const [s, r] = this.targetValue.system.move;
        this.ox = s, this.oy = r, this.hook("moveend", "end");
      } else if (e === "moveAs") {
        const [s, r] = this.targetValue.system.moveAs;
        this.ox = s, this.oy = r, this.hook("moveend", "end");
      } else
        e === "rotate" ? (this.angle = this.targetValue.system.rotate, this.hook("rotateend", "end")) : e === "resize" ? (this.size = this.targetValue.system.resize, this.hook("resizeend", "end")) : e === "@@bind" ? this.bindInfo.forEach((r, l) => {
          this.value[r] = this.targetValue.system["@@bind"][l];
        }) : (this.sx = 0, this.sy = 0, this.hook("shakeend", "end"));
    else
      this.applying[e] = !1, this.ticker.remove(this.animateFn.custom[e]), this.value[e] = this.targetValue.custom[e], this.hook("end");
  }
}
class O extends F {
  constructor() {
    super();
    o(this, "now", {});
    o(this, "target", {});
    o(this, "transitionFn", {});
    o(this, "value");
    o(this, "handleSet", (t, e, s) => (this.transition(e, s), !0));
    o(this, "handleGet", (t, e) => this.now[e]);
    this.timing = (t) => t, this.value = new Proxy(this.target, {
      set: this.handleSet,
      get: this.handleGet
    });
  }
  mode(t) {
    return this.timing = t, this;
  }
  time(t) {
    return this.easeTime = t, this;
  }
  relative() {
    return this.relation = "relative", this;
  }
  absolute() {
    return this.relation = "absolute", this;
  }
  transition(t, e) {
    if (e === this.target[t])
      return this;
    if (!y(this.now[t]))
      return this.now[t] = e, this;
    this.applying[t] && this.end(t, !0), this.applying[t] = !0, this.hook("start");
    const s = this.getTime(), r = this.easeTime, l = this.timing, a = this.now[t], u = e + (this.relation === "absolute" ? 0 : a), c = u - a;
    this.target[t] = u;
    const h = () => {
      const d = this.getTime() - s;
      if (d >= r) {
        this.end(t);
        return;
      }
      const f = d / r;
      this.now[t] = l(f) * c + a, this.hook("running");
    };
    return this.transitionFn[t] = h, this.ticker.add(h), r <= 0 ? (this.end(t), this) : this;
  }
  end(t, e = !1) {
    const s = this.transitionFn[t];
    if (!y(s))
      throw new ReferenceError(
        `You are trying to end an ended transition: ${t}`
      );
    this.ticker.remove(this.transitionFn[t]), delete this.transitionFn[t], this.applying[t] = !1, this.hook("end"), e || (this.now[t] = this.target[t]);
  }
}
const T = (...n) => n.reduce((i, t) => i + t, 0), b = (n) => {
  if (n === 0)
    return 1;
  let i = n;
  for (; n > 1; )
    n--, i *= n;
  return i;
}, A = (n, i) => Math.round(b(i) / (b(n) * b(i - n))), p = (n, i, t = (e) => 1 - i(1 - e)) => n === "in" ? i : n === "out" ? t : n === "in-out" ? (e) => e < 0.5 ? i(e * 2) / 2 : 0.5 + t((e - 0.5) * 2) / 2 : (e) => e < 0.5 ? t(e * 2) / 2 : 0.5 + i((e - 0.5) * 2) / 2, $ = Math.cosh(2), z = Math.acosh(2), V = Math.tanh(3), P = Math.atan(5);
function Y() {
  return (n) => n;
}
function q(...n) {
  const i = [0].concat(n);
  i.push(1);
  const t = i.length, e = Array(t).fill(0).map((s, r) => A(r, t - 1));
  return (s) => {
    const r = e.map((l, a) => l * i[a] * (1 - s) ** (t - a - 1) * s ** a);
    return T(...r);
  };
}
function U(n, i) {
  if (n === "sin") {
    const t = (s) => Math.sin(s * Math.PI / 2);
    return p(i, (s) => 1 - t(1 - s), t);
  }
  if (n === "sec") {
    const t = (s) => 1 / Math.cos(s);
    return p(i, (s) => t(s * Math.PI / 3) - 1);
  }
  throw new TypeError(
    "Unexpected parameters are delivered in trigo timing function."
  );
}
function C(n, i) {
  if (!Number.isInteger(n))
    throw new TypeError(
      "The first parameter of power timing function only allow integer."
    );
  return p(i, (e) => e ** n);
}
function G(n, i) {
  if (n === "sin")
    return p(i, (e) => (Math.cosh(e * 2) - 1) / ($ - 1));
  if (n === "tan") {
    const t = (s) => Math.tanh(s * 3) * 1 / V;
    return p(i, (s) => 1 - t(1 - s), t);
  }
  if (n === "sec") {
    const t = (s) => 1 / Math.cosh(s);
    return p(i, (s) => 1 - (t(s * z) - 0.5) * 2);
  }
  throw new TypeError(
    "Unexpected parameters are delivered in hyper timing function."
  );
}
function N(n, i) {
  if (n === "sin") {
    const t = (s) => Math.asin(s) / Math.PI * 2;
    return p(i, (s) => 1 - t(1 - s), t);
  }
  if (n === "tan") {
    const t = (s) => Math.atan(s * 5) / P;
    return p(i, (s) => 1 - t(1 - s), t);
  }
  throw new TypeError(
    "Unexpected parameters are delivered in inverse trigo timing function."
  );
}
function B(n, i = () => 1) {
  let t = -1;
  return (e) => (t *= -1, e < 0.5 ? n * i(e * 2) * t : n * i((1 - e) * 2) * t);
}
function D(n, i = 1, t = [0, 0], e = 0, s = (l) => 1, r = !1) {
  return (l) => {
    const a = i * l * Math.PI * 2 + e * Math.PI / 180, u = Math.cos(a), c = Math.sin(a), h = n * s(s(r ? 1 - l : l));
    return [h * u + t[0], h * c + t[1]];
  };
}
function H(n, i, ...t) {
  const e = [n].concat(t);
  e.push(i);
  const s = e.length, r = Array(s).fill(0).map((l, a) => A(a, s - 1));
  return (l) => {
    const a = r.map((c, h) => c * e[h][0] * (1 - l) ** (s - h - 1) * l ** h), u = r.map((c, h) => c * e[h][1] * (1 - l) ** (s - h - 1) * l ** h);
    return [T(...a), T(...u)];
  };
}
if ('animate' in core.plugin) throw new ReferenceError(`插件中已存在名为animate的属性！`);

core.plugin.animate = {
    Animation: j,
    AnimationBase: F,
    Ticker: I,
    Transition: O,
    bezier: q,
    bezierPath: H,
    circle: D,
    hyper: G,
    linear: Y,
    power: C,
    shake: B,
    sleep: R,
    trigo: U,
    inverseTrigo: N,
}

};
_animatePluginFn();

// ==================== 碎裂特效插件 (frag) ====================
// 依赖: core.plugin.animate, core.plugin.utils
// 打怪后自动碎裂，也可手动调用 applyFragWith(canvas, length, time, config)
var _fragPluginFn = function () {

// 兜底：如果 core 尚未定义，注册到 plugins 对象延迟执行
if (typeof core === 'undefined') {
    plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1["frag"] = _fragPluginFn;
    return;
}

if (main.replayChecking) return core.plugin.frag = {};

// 延迟获取依赖：插件加载时 core.plugin 可能尚未初始化
function _getAnimate() { return core.plugin.animate; }
function _getUtils() { return core.plugin.utils; }

/** 最大移动距离，最终位置距离中心的距离变成原来的几倍 */
const MAX_MOVE_LENGTH = 1.15;
/** 移动距离波动，在最大移动距离的基础上加上多少倍距离的波动距离 */
const MOVE_FLUSH = 0.7;
/** 最大旋转角，单位是弧度，每个碎片都会有自己的旋转程度，是随机的 */
const MAX_ROTATE = 0.5;
/** 碎裂动画的速率曲线函数 */
const FRAG_TIMING = (function() { var a = _getAnimate(); return a ? a.linear() : function(t) { return t; }; })();

/**
 * @param {HTMLCanvasElement} canvas 要执行特效的画布
 * @param {number} length 切分成的碎片的边长，碎片为正方形
 * @param {number} time 特效持续时长
 * @returns 返回一个碎裂特效控制器，是一个对象
 */
function applyFragWith(canvas, length = 4, time = 2000, config = {}) {
    // 先切分图片
    const imgs = splitCanvas(canvas, length);
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    let maxX = 0;
    let maxY = 0;
    const toMove = imgs.map(v => {
        const centerX = v.x + v.canvas.width / 2;
        const centerY = v.y + v.canvas.height / 2;
        const onX = centerX === cx;
        const onY = centerY === cy;
        const mml = config.maxMoveLength ?? MAX_MOVE_LENGTH;
        const mf = config.moveFlush ?? MOVE_FLUSH;
        const rate = mml - 1 + Math.random() ** 3 * mf;
        let endX = onY ? 0 : (centerX - cx) * rate;
        let endY = onX ? 0 : (centerY - cy) * rate;
        const mx = Math.abs(endX + centerX) + Math.abs(v.canvas.width);
        const my = Math.abs(endY + centerY) + Math.abs(v.canvas.height);
        if (mx > maxX) maxX = mx;
        if (my > maxY) maxY = my;
        const r = config.maxRotate ?? MAX_ROTATE;
        const endRad = Math.random() * r * 2 - r;

        return {
            deltaX: endX,
            deltaY: endY,
            endRad,
            x: centerX,
            y: centerY,
            canvas: v.canvas
        };
    });

    // 再执行动画
    const frag = document.createElement('canvas');
    const ctx = frag.getContext('2d');
    const ani = new (_getAnimate().Animation)();
    ani.register('rate', 0);
    const ft = config.fragTiming ?? FRAG_TIMING;
    ani.absolute().time(time).mode(ft).apply('rate', 1);
    frag.width = maxX * 2;
    frag.height = maxY * 2;
    ctx.save();
    const dw = maxX - canvas.width / 2;
    const dh = maxY - canvas.height / 2;

    const fragFn = () => {
        const rate = ani.value.rate;
        const opacity = 1 - rate;
        ctx.globalAlpha = opacity;
        ctx.clearRect(0, 0, frag.width, frag.height);
        toMove.forEach(v => {
            ctx.save();
            const nx = v.deltaX * rate;
            const ny = v.deltaY * rate;
            const rotate = v.endRad * rate;

            ctx.translate(nx + v.x + dw, ny + v.y + dh);
            ctx.rotate(rotate);
            ctx.drawImage(
                v.canvas,
                nx - v.canvas.width / 2,
                ny - v.canvas.height / 2
            );
            ctx.restore();
        });
    };
    const onEnd = () => {};
    ani.ticker.add(fragFn);

    return makeFragManager(frag, ani, time, onEnd);
}

function makeFragManager(canvas, ani, time, onEnd) {
    const promise = _getAnimate().sleep(time + 50);

    return {
        animation: ani,
        onEnd: promise.then(() => {
            ani.ticker.destroy();
            onEnd();
        }),
        canvas
    };
}

function withImage(image, sx, sy, sw, sh) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = sw;
    canvas.height = sh;
    ctx.drawImage(image, sx, sy, sw, sh, 0, 0, sw, sh);
    return { canvas, x: sx, y: sy };
}

/**
 * 切分画布
 * @param canvas 要被切分的画布
 * @param l 切分小块的边长
 */
function splitCanvas(canvas, l) {
    if (canvas.width / l < 2 || canvas.height / l < 2) {
        console.warn('切分画布要求切分边长大于等于画布长宽的一半！');
        return [];
    }
    const w = canvas.width;
    const h = canvas.height;
    const numX = Math.floor(w / l);
    const numY = Math.floor(h / l);
    const rw = (w - numX * l) / 2;
    const rh = (h - numY * l) / 2;

    const res = [];

    if (rw > 0) {
        if (rh > 0) {
            res.push(
                withImage(canvas, 0, 0, rw, rh),
                withImage(canvas, 0, canvas.height - rh, rw, rh),
                withImage(canvas, canvas.width - rw, 0, rw, rh),
                withImage(canvas, canvas.width - rw, canvas.height - rh, rw, rh)
            );
        }
        for (const x of [0, canvas.width - rw]) {
            for (let ny = 0; ny < numY; ny++) {
                res.push(withImage(canvas, x, rh + l * ny, rw, l));
            }
        }
    }
    if (rh > 0) {
        for (const y of [0, canvas.height - rh]) {
            for (let nx = 0; nx < numX; nx++) {
                res.push(withImage(canvas, rw + l * nx, y, l, rh));
            }
        }
    }
    for (let nx = 0; nx < numX; nx++) {
        for (let ny = 0; ny < numY; ny++) {
            res.push(withImage(canvas, rw + l * nx, rh + l * ny, l, l));
        }
    }

    return res;
}

// 延迟安装 afterBattle hook，等 core.events 初始化完成
var _fragHooked = false;
function _ensureFragHooked() {
    if (_fragHooked) return;
    if (!core.events || !core.events.afterBattle) {
        return;
    }
    _fragHooked = true;
    var origin = core.events.afterBattle;
    core.events.afterBattle = function (enemyId, x, y) {
        // 打怪碎裂特效
        try {
            var _has = _getUtils().has;
            if (_has(x) && _has(y)) {
                // 获取怪物图像
                var info = core.getBlockInfo(enemyId);
                if (info && info.image) {
                    var frame = core.status.globalAnimateStatus % 2;
                    var srcCanvas = document.createElement('canvas');
                    srcCanvas.width = 32;
                    srcCanvas.height = info.height || 32;
                    var sctx = srcCanvas.getContext('2d');
                    sctx.drawImage(
                        info.image,
                        32 * ((info.posX || 0) + frame), (info.height || 32) * (info.posY || 0),
                        32, info.height || 32,
                        0, 0,
                        32, info.height || 32
                    );
                    var manager = applyFragWith(srcCanvas);
                    var frag = manager.canvas;
                    frag.style.imageRendering = 'pixelated';
                    frag.style.width = (frag.width * (core.domStyle.scale || 1)) + 'px';
                    frag.style.height = (frag.height * (core.domStyle.scale || 1)) + 'px';
                    var ox = core.bigmap && core.bigmap.offsetX != null ? core.bigmap.offsetX : 0;
                    var oy = core.bigmap && core.bigmap.offsetY != null ? core.bigmap.offsetY : 0;
                    var scl = core.domStyle && core.domStyle.scale ? core.domStyle.scale : 1;
                    var left = (x * 32 + 16 - frag.width / 2 - ox) * scl;
                    var top = (y * 32 + 16 - frag.height / 2 - oy) * scl;
                    frag.style.left = left + 'px';
                    frag.style.top = top + 'px';
                    frag.style.zIndex = '45';
                    frag.style.position = 'absolute';
                    if (core.dom && core.dom.gameDraw) {
                        core.dom.gameDraw.appendChild(frag);
                    }
                    manager.onEnd.then(function () {
                        if (frag.parentNode) frag.remove();
                    });
                }
            } else {
            }
        } catch (e) {
            console.warn('frag plugin error:', e);
        }
        // 【星冥线】击杀动画：根据角色选择不同动画
        var killAnimId = core.getFlag('char_kill_anim', 8); // 默认妖梦短剑8号，幽幽子用3号
        core.playBattleAnim(killAnimId, {tx: x, ty: y, fps: 12, scale: 1.0});
        return origin.apply(this, arguments);
    };
}

if ('frag' in core.plugin) {
    throw new ReferenceError(`core.plugin上已存在名为frag的属性！`);
}
core.plugin.frag = {
    applyFragWith: applyFragWith,
    _ensureFragHooked: _ensureFragHooked
};

// 挂钩到 _afterLoadResources，确保在游戏完全初始化后安装
// 如果 _afterLoadResources 尚未设置，使用 setTimeout 兜底
if (core.plugin._afterLoadResources) {
    var _prevALR = core.plugin._afterLoadResources;
    core.plugin._afterLoadResources = function() {
        if (_prevALR) _prevALR();
        _ensureFragHooked();
    };
} else {
    setTimeout(_ensureFragHooked, 100);
    setTimeout(_ensureFragHooked, 1000);
}

};
_fragPluginFn();// ==================== 自动拾取/清怪 (autoClean) ====================
// 移植自 RGM Script#124「自动拾取系统」
// flags:
//   autoPick: boolean — 自动拾取道具（默认false）
//   autoClear: boolean — 自动清除0伤怪物（默认false）
//   autoPickExcludeFloors: string — 逗号分隔的排除楼层ID（默认""），对应RGM ZiDongShiQulc
//   autoClearSkipEvents: boolean — 跳过有战前/战后事件的0伤怪（默认true）
var _autoCleanPluginFn = function () {

// 兜底：如果 core 尚未定义，注册到 plugins 对象延迟执行
if (typeof core === 'undefined') {
    plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1["autoClean"] = _autoCleanPluginFn;
    return;
}

if (main.replayChecking) return core.plugin.autoClean = {};

// ==================== 动画相关 ====================
var Transition, hyper, Ticker;
function _getAnimate() {
    if (!Transition) {
        var ani = core.plugin.animate;
        Transition = ani.Transition;
        hyper = ani.hyper;
        Ticker = ani.Ticker;
    }
    return core.plugin.animate;
}

// 磁吸动画不再用固定时长（改为逐帧追踪英雄，见 animationItem）
var transitionList = []; // 动画列表（用数组便于清理）

// 动画 Canvas 清理 ticker
var _animTicker = null;
function _ensureAnimTicker() {
    if (_animTicker) return;
    _animTicker = new Ticker();
    _animTicker.add(function () {
        if (!core.isPlaying()) return;
        var ctx = core.getContextByName('_autoItem_');
        if (ctx) core.clearMap(ctx);
    });
}

// ==================== 辅助函数 ====================

// 获取排除楼层列表（从 flag 解析）
function _getExcludeFloors() {
    var raw = core.getFlag('autoPickExcludeFloors', 'f0_garden');
    if (!raw || raw === '') return [];
    return String(raw).split(',').map(function (s) { return s.trim(); });
}

// 当前楼层是否被排除
function _isFloorExcluded(floorId) {
    floorId = floorId || core.status.floorId;
    var exclude = _getExcludeFloors();
    return exclude.indexOf(String(floorId)) >= 0;
}

// 获取当前楼层的地图尺寸
function _getMapSize(floorId) {
    floorId = floorId || core.status.floorId;
    var map = core.status.maps[floorId];
    if (!map) return { w: 13, h: 13 };
    return { w: map.width || 13, h: map.height || 13 };
}

// 当前位置是否可通过（用于BFS判断）
function passThrough(x, y, floorId) {
    floorId = floorId || core.status.floorId;
    var size = _getMapSize(floorId);
    if (x < 0 || y < 0 || x >= size.w || y >= size.h) return false;

    var loc = x + ',' + y;

    // 当前格有阻击/捕捉/地图伤害 → 不可通过
    try {
        var cb = core.status.checkBlock;
        if (cb.repulse && cb.repulse[loc]) return false;
        if (cb.ambush && cb.ambush[loc]) return false;
        if (cb.damage && cb.damage[loc]) return false;
    } catch (e) {}

    var id = core.getBlockId(x, y, floorId);
    if (id === null || id === undefined) return true; // 空地

    var cls = core.getBlockCls(x, y, floorId);
    var block = core.getBlock(x, y, floorId);
    var autoPick = core.getFlag('autoPick', true);
    var autoClear = core.getFlag('autoClear', true);
    var floor = core.floors[floorId];

    // 道具类 → 可自动拾取（无拾取后事件时）
    if (cls === 'items' || cls === 'tools' || cls === 'constants') {
        if (autoPick && floor && floor.afterGetItem && !floor.afterGetItem[loc]) return true;
        return false;
    }

    // 怪物类 → 0伤且无事件时可自动清
    if (cls === 'enemys' || cls === 'enemy48') {
        if (!autoClear) return false;
        var damage = core.enemys.getDamage(id, x, y, floorId);
        if (damage !== 0) return false;
        // 必须是普通战斗触发类型
        if (!block || !block.event || block.event.trigger !== 'battle') return false;
        // 跳过有战前/战后事件的怪物
        var skipEvents = core.getFlag('autoClearSkipEvents', true);
        if (skipEvents) {
            if (floor && floor.afterBattle && floor.afterBattle[loc]) return false;
            if (floor && floor.beforeBattle && floor.beforeBattle[loc]) return false;
            var edata = core.enemys && core.enemys.enemys && core.enemys.enemys[id];
            if (edata && edata.afterBattle) return false;
            if (edata && edata.beforeBattle) return false;
        }
        return true;
    }

    // 地形类
    if (cls === 'terrains') {
        if (id === 'light') return false; // 感叹号不支持
        if (block && block.event && block.event.trigger === 'ski') return false; // 滑冰不支持
        if (block && block.event && !block.event.noPass) return true; // 可穿透地形
        return false;
    }

    return false;
}

// 从目标点(startX,startY)能否返回英雄当前位置（处理单向箭头）
function canReturn(startX, startY) {
    var endX = core.getHeroLoc('x');
    var endY = core.getHeroLoc('y');
    var size = _getMapSize();

    if (startX < 0 || startY < 0 || startX >= size.w || startY >= size.h) return false;
    if (!passThrough(startX, startY) || !passThrough(endX, endY)) return false;

    // 动态大小 visited 数组（修复原版硬编码13×13的bug）
    var visited = [];
    for (var i = 0; i < size.w; i++) {
        visited[i] = [];
        for (var j = 0; j < size.h; j++) {
            visited[i][j] = false;
        }
    }

    var q = [];
    q.push([startX, startY]);
    visited[startX][startY] = true;

    while (q.length > 0) {
        var cur = q.shift();
        var cx = cur[0], cy = cur[1];

        if (cx === endX && cy === endY) return true;

        var dirs = ['up', 'right', 'down', 'left'];
        for (var d = 0; d < dirs.length; d++) {
            var dir = dirs[d];
            var nx = cx + core.utils.scan[dir].x;
            var ny = cy + core.utils.scan[dir].y;

            if (nx >= 0 && ny >= 0 && nx < size.w && ny < size.h &&
                core.canMoveHero(cx, cy, dir) &&
                passThrough(nx, ny) &&
                !visited[nx][ny]) {
                q.push([nx, ny]);
                visited[nx][ny] = true;
            }
        }
    }
    return false;
}

// 磁吸动画：道具飞向英雄
// 正常游玩（非录像）：固定 180ms easeOut 缓动，磁吸感明显；
// 录像高倍速：逐帧追踪英雄当前位置（终点实时更新），速度随倍速缩放，保证永远追得上。
// 旧版固定 120ms 缓动（不分模式）：录像高倍速下英雄瞬移跑出动画范围后，销毁条件
// （道具≈英雄）永不满足，道具图标钉在旧位置每帧重画 → 「角色到处跑、后面跟一堆宝物」的拖尾。
function animationItem(id, sx, sy) {
    _getAnimate();
    _ensureAnimTicker();

    var ox = core.bigmap && core.bigmap.offsetX ? core.bigmap.offsetX : 0;
    var oy = core.bigmap && core.bigmap.offsetY ? core.bigmap.offsetY : 0;

    var spd = (core.status.replay && core.status.replay.speed) || 1;
    if (spd < 1) spd = 1;

    var t = new Transition();
    t.value = { x: sx * 32 - ox, y: sy * 32 - oy };
    t._acLast = null;

    if (spd <= 1) {
        // 【正常游玩】固定 180ms easeOut 缓动：先快后慢，磁吸感明显
        var ex0 = core.status.hero.loc.x * 32 - ox;
        var ey0 = core.status.hero.loc.y * 32 - oy;
        t._acStartX = t.value.x;
        t._acStartY = t.value.y;
        t._acDuration = 180;
        t._acStart = -1;

        t.ticker.add(function () {
            if (!core.isPlaying()) return;
            // 用 Date.now() 现实时间而非 ticker elapsed：回放中事件排队/阻塞时
            // elapsed 不推进会导致 p 永远 <1 → 动画卡住不结束（实测残留数百帧）
            if (t._acStart < 0) t._acStart = Date.now();
            var p = (Date.now() - t._acStart) / t._acDuration;
            if (p >= 1) {
                // 完成：吸附到英雄位置并结束
                t.value.x = ex0;
                t.value.y = ey0;
                core.drawIcon('_autoItem_', id, t.value.x, t.value.y, 32, 32);
                t.ticker.destroy();
                var idx = transitionList.indexOf(t);
                if (idx >= 0) transitionList.splice(idx, 1);
                return;
            }
            // easeOutQuad 缓动
            var e = 1 - (1 - p) * (1 - p);
            t.value.x = t._acStartX + (ex0 - t._acStartX) * e;
            t.value.y = t._acStartY + (ey0 - t._acStartY) * e;
            core.drawIcon('_autoItem_', id, t.value.x, t.value.y, 32, 32);
        });
    } else {
        // 【录像高倍速】直接瞬移吸附（1帧到位，零拖尾）：
        // 录像中英雄持续瞬移，逐帧追踪动画必然追不上（实测 yellowKey 追 5 秒），
        // 磁吸动画在录像高倍速下没有观赏意义，直接画在英雄位置。
        var hx0 = core.status.hero.loc.x;
        var hy0 = core.status.hero.loc.y;
        t.value.x = hx0 * 32 - ox;
        t.value.y = hy0 * 32 - oy;
        core.drawIcon('_autoItem_', id, t.value.x, t.value.y, 32, 32);
        return;
    }

    transitionList.push(t);
}

// BFS 广搜可清理的图块
function bfs(sx, sy, floorId) {
    floorId = floorId || core.status.floorId;
    var size = _getMapSize(floorId);

    if (sx < 0 || sx >= size.w || sy < 0 || sy >= size.h) return;

    var sLoc = sx + ',' + sy;

    // 当前英雄所在点有地图伤害或阻击 → 不清理
    try {
        var cb = core.status.checkBlock;
        if ((cb.repulse && cb.repulse[sLoc]) || (cb.damage && cb.damage[sLoc])) return;
    } catch (e) {}

    // 动态大小队列和已检测数组
    var queue = [];
    var checked = [];
    for (var i = 0; i < size.w; i++) {
        checked[i] = [];
        for (var j = 0; j < size.h; j++) {
            checked[i][j] = false;
        }
    }

    queue.push([sx, sy]);
    checked[sx][sy] = true;

    while (queue.length > 0) {
        var cur = queue.shift();
        var x = cur[0], y = cur[1];
        var loc = x + ',' + y;
        var cls = core.getBlockCls(x, y, floorId);
        var id = core.getBlockId(x, y, floorId);
        var floor = core.floors[floorId];

        if (passThrough(x, y) && canReturn(x, y)) {
            // 道具：拾取 + 动画
            if (cls && (cls === 'items' || cls === 'tools' || cls === 'constants')) {
                var afterGet = floor && floor.afterGetItem && floor.afterGetItem[loc];
                if (!afterGet) {
                    core.setFlag('__forbidSave__', true);
                    core.getItem(id, 1, x, y);
                    core.removeFlag('__forbidSave__');
                    if (!main.replayChecking) animationItem(id, x, y);
                }
            }

            // 怪物：战斗
            if (cls && (cls === 'enemys' || cls === 'enemy48')) {
                core.setFlag('__forbidSave__', true);
                core.battle(id, x, y);
                core.removeFlag('__forbidSave__');
            }

            // 向四个方向扩展BFS
            var dirs = ['up', 'right', 'down', 'left'];
            for (var d = 0; d < dirs.length; d++) {
                var dir = dirs[d];
                var nx = x + core.utils.scan[dir].x;
                var ny = y + core.utils.scan[dir].y;

                if (nx >= 0 && ny >= 0 && nx < size.w && ny < size.h &&
                    core.canMoveHero(x, y, dir) &&
                    passThrough(nx, ny) &&
                    !checked[nx][ny]) {
                    queue.push([nx, ny]);
                    checked[nx][ny] = true;
                }
            }
        }
    }
}

// ==================== 主函数 ====================

// 自动清理入口
function doAutoClean(inActions) {
    // 防止递归：BFS 内的 battle 触发 afterBattle 再调 autoClean
    if (core.hasFlag('__autoCleaning')) return;
    if ((core.getFlag('darkSteps', 0) || 0) > 0) return; // 黑暗期间禁用自动清理
    if ((core.getFlag('burnSteps', 0) || 0) > 0) return; // 灼烧期间禁用自动清理
    var autoPick = core.getFlag('autoPick', true);
    var autoClear = core.getFlag('autoClear', true);
    if (!autoPick && !autoClear) return;

    // 排除楼层
    if (_isFloorExcluded()) return;

    // 如果在事件流中，插入到事件末尾执行
    if (core.status.event && core.status.event.id && !inActions) {
        core.insertAction({
            "type": "function",
            "function": "function(){core.plugin.autoClean.doAutoClean(true)}"
        }, null, null, null, true);
        return;
    }

    // 创建动画 canvas
    var ctx = core.getContextByName('_autoItem_');
    if (!ctx) {
        core.createCanvas('_autoItem_', 0, 0,
            core._PX_ || core.__PIXELS__ || 416,
            core._PY_ || core.__PIXELS__ || 416, 75);
    }

    core.setFlag('__autoCleaning', true);
    bfs(core.status.hero.loc.x, core.status.hero.loc.y, core.status.floorId);
    core.removeFlag('__autoCleaning');

    // 更新所有动画终点到当前英雄位置
    if (!main.replayChecking) {
        transitionList.forEach(function (ani) {
            var hx = core.status.hero.loc.x;
            var hy = core.status.hero.loc.y;
            ani.value.x = hx * 32 - (core.bigmap && core.bigmap.offsetX ? core.bigmap.offsetX : 0);
            ani.value.y = hy * 32 - (core.bigmap && core.bigmap.offsetY ? core.bigmap.offsetY : 0);
        });
    }
}

// ==================== 钩子安装 ====================

function _installHooks() {
    // --- 【星冥线】符卡（HUD 技能）回放：真实游玩时 useSpellCard 会记录 spell: 动作，
    // 回放时消费它调用同一入口，保证位移/破墙等符卡效果可复现（此前 HUD 点击不记录 → 漂移）
    if (core.control && core.control.registerReplayAction) {
        core.control.registerReplayAction("spell", function (action) {
            if (action.indexOf('spell:') != 0) return false;
            var idx = parseInt(action.substring(6));
            if (!idx || !core.useSpellCard) return false;
            core.useSpellCard(idx);
            core.replay();
            return true;
        });
    }
    // --- 【星冥线】孤儿 choices 快速失败 ---
    // 升级加点(攻击/防御/生命)等 choices 动作若未被事件流消费而出现在回放主循环，
    // 说明回放状态与录像录制时不一致（旧版本录像/数据已改动），
    // 立即报错并提示原因，而不是静默跳过导致队列错位后在无关位置爆"录像文件出错"。
    if (core.control && core.control.registerReplayAction) {
        core.control.registerReplayAction("ignoreInput", function (action) {
            if (action.indexOf('input:') == 0 || action.indexOf('input2:') == 0 || action.indexOf('random:') == 0) {
                console.warn('警告！录像播放中出现了未知的 ' + action + '！');
                core.replay();
                return true;
            }
            if (action.indexOf('choices:') == 0) {
                if (action == 'choices:none') {
                    console.warn('警告！录像播放中出现了未知的 ' + action + '！');
                    core.replay();
                    return true;
                }
                console.error('录像与当前游戏数据不一致：choices 动作 ' + action +
                    ' 未被事件消费（升级加点/剧情选项未触发）。请用当前版本重新录制录像。');
                core.control._replay_error(action);
                return true;
            }
            return false;
        });
    }

    // --- afterChangeFloor：切换楼层后清理 ---
    var _origAfterChangeFloor = core.events.afterChangeFloor;
    core.events.afterChangeFloor = function (floorId) {
        if (_origAfterChangeFloor) _origAfterChangeFloor.call(this, floorId);
        if (main.mode !== 'play') return;
        // 标记刚换层：换层事件流收尾时跳过"提前 BFS"（录制时换层收尾的 BFS 因
        // insertAction 静默丢弃未执行，回放中提前 BFS 若执行会多清 0 伤怪触发
        // 升级 choices 弹窗而录像无对应操作 → 卡死）
        core.setFlag('__justChangedFloor__', true);
        if (!core.hasFlag('__fromLoad__')) {
            core.updateCheckBlock(floorId);
            doAutoClean();
        }
        // ★ 双主角跟随：flag 驱动（幽幽子试炼通关回庭园喝茶对话后设置 g_yuyuko_follow）
        if (core.getFlag('g_yuyuko_follow', 0)) {
            var fs = core.status.hero.followers || [], has = false;
            for (var i = 0; i < fs.length; i++) if (fs[i].name === 'char_yuyuko.png') { has = true; break; }
            if (!has) core.events.follow('char_yuyuko.png');
        }
        // ★ 换层/读档后跟随者归位到主角身边
        if (core.status.hero.followers && core.status.hero.followers.length) {
            core.gatherFollowers();
            core.clearMap('hero');
            core.drawHero();
        }
        // ★ 幽幽子跟随后，庭园赏花位 NPC 隐藏（防刷新/换层复活）
        if (core.getFlag('g_yuyuko_follow', 0) && floorId === 'f0_garden') {
            core.setBlock(0, 28, 61);
        }
    };

    // --- afterBattle：战后清理（非强制战斗）---
    var _origAfterBattle = core.events.afterBattle;
    core.events.afterBattle = function (enemyId, x, y, force) {
        var res;
        if (_origAfterBattle) res = _origAfterBattle.call(this, enemyId, x, y, force);
        if (!force && main.mode === 'play') {
            core.updateCheckBlock();
            doAutoClean();
        }
        return res;
    };

    // --- afterOpenDoor：开门后清理 ---
    var _origAfterOpenDoor = core.events.afterOpenDoor;
    core.events.afterOpenDoor = function (doorId, x, y) {
        if (_origAfterOpenDoor) _origAfterOpenDoor.call(this, doorId, x, y);
        if (main.mode === 'play') doAutoClean();
    };

    // --- 事件结束（NPC对话/剧情结束后）清理 ---
    // 2026-08-01 【录像回放自动拾取修复】：
    // 回放中事件流收尾时，原版 _doAction_finishEvents 会同步调用 core.replay() 继续回放，
    // 导致事件结束后的自动拾取（doAutoClean BFS）永远晚于下一步操作执行（录制时真人
    // closePanel 后 BFS 立即跑：f3_0 (3,3) 黄钥匙、f3_2 (11,10) 使役之杖、f3_4 (3,11)
    // 经验书→升级加点 都依赖它）。因此事件流确认结束时**先**执行 doAutoClean(true)
    // 再恢复回放；配合 libs/events.js insertAction 修复（list 空时转新事件流），
    // 升级加点的 choices 能正常入队并被回放消费。
    var _origFinishEvents = core.events._doAction_finishEvents;
    core.events._doAction_finishEvents = function () {
        // 换层事件流收尾：跳过提前 BFS（录制时该 BFS 未执行，见 afterChangeFloor 注释）
        var _justChanged = core.hasFlag('__justChangedFloor__');
        if (_justChanged) core.removeFlag('__justChangedFloor__');
        try {
            var _evd = core.status.event && core.status.event.data;
            if (!_justChanged && core.status.event && core.status.event.id == 'action' && _evd && _evd.list &&
                _evd.list.length == 0 && (!_evd.appendingEvents || _evd.appendingEvents.length == 0) &&
                main.mode === 'play') {
                doAutoClean(true);
            }
        } catch (e) { }
        var done = _origFinishEvents ? _origFinishEvents.call(this) : true;
        if (done && main.mode === 'play') doAutoClean();
        return done;
    };

    // --- _checkBlock_repulse：推开阻击后清理 ---
    if (core.control && core.control._checkBlock_repulse) {
        var _origCheckBlockRepulse = core.control._checkBlock_repulse;
        core.control._checkBlock_repulse = function (repulse) {
            _origCheckBlockRepulse.call(this, repulse);
            if (main.mode === 'play') doAutoClean();
        };
    }

    // --- moveOneStep：走出地图伤害点后清理 ---
    if (core.control && core.control.moveOneStep) {
        var _origMoveOneStep = core.control.moveOneStep;
        core.control.moveOneStep = function (callback) {
            var hadOnZone = core.hasFlag('onZone');
            var res;
            if (_origMoveOneStep) res = _origMoveOneStep.call(this, callback);

            // 【星冥线】黑暗(#55)：每走一步扣1血，归零战败
            var darkSteps = core.getFlag('darkSteps', 0) || 0;
            if (darkSteps > 0 && core.status.hero) {
                core.setFlag('darkSteps', darkSteps - 1);
                core.status.hero.hp -= 1;
                core.updateStatusBar();
                core.drawHeroAnimate('zone');
                core.darkPop = { x: core.status.hero.loc.x, y: core.status.hero.loc.y, t: 40 };
                if (core.status.hero.hp <= 0) {
                    core.status.hero.hp = 0;
                    core.updateStatusBar(false, true);
                    core.events.lose();
                    return res;
                }
            }
            // 【星冥线】灼烧(#42/#69/#70)：每走一步扣当前层数血，层数-5
            var burnSteps = core.getFlag('burnSteps', 0) || 0;
            if (burnSteps > 0 && core.status.hero) {
                core.status.hero.hp -= burnSteps;
                core.setFlag('burnSteps', Math.max(0, burnSteps - 5));
                core.updateStatusBar();
                core.drawHeroAnimate('zone');
                core.burnPop = { x: core.status.hero.loc.x, y: core.status.hero.loc.y, t: 40, dmg: burnSteps };
                if (core.status.hero.hp <= 0) {
                    core.status.hero.hp = 0;
                    core.updateStatusBar(false, true);
                    core.events.lose();
                    return res;
                }
            }

            // 【星冥线】远程(#50)：直线4格内远程怪每步扣血（原版 023 脚本），3格内怪后退
            var heroLocR = core.status.hero.loc;
            var remDirs = [[0,-1],[0,1],[-1,0],[1,0]];
            for (var ri = 0; ri < 4; ri++) {
                for (var rd = 1; rd <= 4; rd++) {
                    var rtx = heroLocR.x + remDirs[ri][0] * rd;
                    var rty = heroLocR.y + remDirs[ri][1] * rd;
                    var rblk = core.getBlock(rtx, rty);
                    if (!rblk || !rblk.event || !rblk.event.id) continue;
                    var ren = core.material.enemys[rblk.event.id];
                    if (ren && core.hasSpecial(ren.special, 50)) {
                        var rharm = ren.atk - core.getRealStatus('def');
                        if (core.hasSpecial(ren.special, 2)) rharm = ren.atk; // 魔攻怪按攻击力
                        if (rharm > 0 && core.status.hero.hp > 0) {
                            core.status.hero.hp -= rharm;
                            core.updateStatusBar();
                            core.burnPop = { x: rtx, y: rty, t: 40, dmg: rharm };
                            if (core.status.hero.hp <= 0) {
                                core.status.hero.hp = 0;
                                core.updateStatusBar(false, true);
                                core.events.lose();
                                return res;
                            }
                        }
                        // 3格内：怪后退一格（引擎 moveBlock 动画，同阻击机制；目标格可通行才退）
                        if (rd <= 3) {
                            var bxx = rtx + remDirs[ri][0], byy = rty + remDirs[ri][1];
                            var bblk = core.getBlock(bxx, byy);
                            var canBack = !bblk || (bblk.number === 0 && !bblk.event.noPass);
                            if (canBack) {
                                var backDir = ri === 0 ? 'up' : ri === 1 ? 'down' : ri === 2 ? 'left' : 'right';
                                core.moveBlock(rtx, rty, [backDir + ':1'], 250, true);
                            }
                        }
                    }
                }
            }

            if (hadOnZone) {
                // 从有地图伤害的点走出 → 清理
                doAutoClean();
                if (core.hasFlag('onZone')) core.removeFlag('onZone');
            } else if (core.hasFlag('ontoZone')) {
                // 刚走入有地图伤害的点
                core.removeFlag('ontoZone');
                core.setFlag('onZone', true);
            }
            return res;
        };
    }

    // --- checkBlock：记录走入地图伤害点 ---
    if (core.control && core.control.checkBlock) {
        var _origCheckBlock = core.control.checkBlock;
        core.control.checkBlock = function () {
            var x = core.getHeroLoc('x');
            var y = core.getHeroLoc('y');
            var loc = x + ',' + y;
            var damage = core.status.checkBlock && core.status.checkBlock.damage ?
                core.status.checkBlock.damage[loc] : null;

            if (damage) {
                core.setFlag('ontoZone', true);
            }

            // 调用原函数
            if (_origCheckBlock) _origCheckBlock.call(this);
        };
    }
}

// ==================== UI 系统设置集成（操作设置）====================

var _uiHooksInstalled = false;
function _installUIHooks() {
    if (_uiHooksInstalled) return;
    if (!ui || !ui.prototype || !ui.prototype._drawSwitchs_action) return;
    if (!actions || !actions.prototype || !actions.prototype._clickSwitchs_action) return;
    _uiHooksInstalled = true;

    // --- 绘制：在操作设置中插入自动拾取/清怪开关 ---
    var _prevDrawAction = ui.prototype._drawSwitchs_action;
    ui.prototype._drawSwitchs_action = function () {
        var self = this;
        var _origDrawChoices = self.drawChoices;
        self.drawChoices = function (align, choices) {
            var idx = choices.indexOf("返回上一级");
            if (idx >= 0) {
                var ap = core.getFlag('autoPick', true);
                var ac = core.getFlag('autoClear', true);
                choices.splice(idx, 0,
                    "自动拾取： " + (ap ? "[ON]" : "[OFF]"),
                    "自动清怪： " + (ac ? "[ON]" : "[OFF]")
                );
            }
            _origDrawChoices.call(self, align, choices);
        };
        _prevDrawAction.call(this);
        self.drawChoices = _origDrawChoices;
    };

    // --- 点击：处理新增开关 ---
    var _prevClickAction = actions.prototype._clickSwitchs_action;
    actions.prototype._clickSwitchs_action = function (x, y) {
        var choices = core.status.event.ui.choices;
        var top = this._getChoicesTopIndex(choices.length);
        var sel = y - top;

        if (sel === 5) {
            if (this._out(x)) return;
            core.playSound('确定');
            core.setFlag('autoPick', !core.getFlag('autoPick', true));
            core.ui._drawSwitchs_action();
            return;
        }
        if (sel === 6) {
            if (this._out(x)) return;
            core.playSound('确定');
            core.setFlag('autoClear', !core.getFlag('autoClear', true));
            core.ui._drawSwitchs_action();
            return;
        }
        if (sel >= 7) {
            y -= 2;
        }
        _prevClickAction.call(this, x, y);
    };
}

// ==================== 安装与导出 ====================

// 延迟安装钩子
var _hooksInstalled = false;
function _ensureHooks() {
    if (_hooksInstalled) return;
    if (!core.events || !core.events.afterBattle) return;
    _hooksInstalled = true;
    _installHooks();
    _installUIHooks();
}

// 挂到 _afterLoadResources
if (core.plugin._afterLoadResources) {
    var _prevALR = core.plugin._afterLoadResources;
    core.plugin._afterLoadResources = function () {
        if (_prevALR) _prevALR();
        _ensureHooks();
    };
} else {
    setTimeout(_ensureHooks, 100);
    setTimeout(_ensureHooks, 1000);
}

// 导出
if (core.plugin.autoClean) {
    console.warn('core.plugin.autoClean already exists, skipping autoClean plugin');
} else {
    core.plugin.autoClean = {
        doAutoClean: doAutoClean,
        passThrough: passThrough,
        canReturn: canReturn,
        bfs: bfs,
        _ensureHooks: _ensureHooks,
        _installUIHooks: _installUIHooks
    };
}

}; // end _autoCleanPluginFn

_autoCleanPluginFn();

// ===== 【东方星冥线】仿东方BOSS战机制（修复版，适配21×15视口）=====
// 测试入口：游戏中按 T 键（清空 9×9 区域后开始 BOSS 战）
var _bossBattlePluginFn = function () {
    if (typeof core === 'undefined') {
        plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1["bossBattle"] = _bossBattlePluginFn;
        return;
    }
    var _self = this;

    // ---------------- 招式（符卡）配置 ----------------
    // type: "battle"=撞BOSS本体后换阶段；"time"=撑过 maxTime 步后换阶段
    this.attack = {
        // ===== 测试用：小小玉 =====
        "f1_1": {
            "name": "符卡一·本体战",
            "type": "battle",
            "action": function () {},
            "beforeAttack": [],
            "afterAttack": [
                { "type": "setBlock", "number": "e1", "loc": [7, 7] },
                { "type": "jumpHero", "loc": [7, 11], "time": 500, "async": true },
                { "type": "jump", "from": [7, 7], "to": [7, 4], "time": 500, "keep": true, "async": true },
                { "type": "waitAsync" },
                { "type": "setBlock", "number": "greenPotion", "loc": [6, 11], "time": 200, "async": true },
                { "type": "setBlock", "number": "greenPotion", "loc": [8, 11], "time": 200, "async": true },
                { "type": "waitAsync" }
            ]
        },
        "f1_2": {
            "name": "符卡二·红玉乱舞",
            "type": "battle",
            "action": function () {},
            "beforeAttack": [{
                "type": "setBlock",
                "number": "e2",
                "loc": [[6, 3], [8, 3], [6, 5], [8, 5]],
                "time": 200,
                "async": true
            }, { "type": "waitAsync" }],
            "afterAttack": []
        },
        "f1_3": {
            "name": "符卡三·时符(撑5步)",
            "type": "time",
            "maxTime": 5,
            "action": function () {
                var sp = core.getFlag('specialAttack');
                if (sp && sp.turn <= 4) {
                    core.setBlock('e2', 3 + sp.turn, 3 + sp.turn);
                }
            },
            "beforeAttack": [],
            "afterAttack": []
        },
        "f1_4": {
            "name": "符卡四·终结",
            "type": "battle",
            "action": function () {},
            "beforeAttack": [
                { "type": "setBlock", "number": "e1", "loc": [7, 7] }
            ],
            "afterAttack": []
        },
        // ===== 正式：幽幽子（能量归零试炼）=====
        "y1": {
            "name": "符卡一·死蝶",
            "type": "battle",
            "action": function () {},
            "beforeAttack": [],
            "afterAttack": [
                { "type": "setBlock", "number": "e403b", "loc": [7, 7] },
                { "type": "jumpHero", "loc": [7, 11], "time": 500, "async": true },
                { "type": "jump", "from": [7, 7], "to": [7, 4], "time": 500, "keep": true, "async": true },
                { "type": "waitAsync" },
                { "type": "setBlock", "number": "greenPotion", "loc": [6, 11], "time": 200, "async": true },
                { "type": "setBlock", "number": "greenPotion", "loc": [8, 11], "time": 200, "async": true },
                { "type": "waitAsync" }
            ]
        },
        "y2": {
            "name": "符卡二·蝶舞",
            "type": "battle",
            "action": function () {},
            "beforeAttack": [{
                "type": "setBlock",
                "number": "e2",
                "loc": [[6, 3], [8, 3], [6, 5], [8, 5]],
                "time": 200,
                "async": true
            }, { "type": "waitAsync" }],
            "afterAttack": []
        },
        "y3": {
            "name": "符卡三·时符(撑5步)",
            "type": "time",
            "maxTime": 5,
            "action": function () {
                var sp = core.getFlag('specialAttack');
                if (sp && sp.turn <= 4) {
                    core.setBlock('e2', 3 + sp.turn, 3 + sp.turn);
                }
            },
            "beforeAttack": [],
            "afterAttack": []
        },
        "y4": {
            "name": "符卡四·反魂蝶",
            "type": "battle",
            "action": function () {},
            "beforeAttack": [
                { "type": "setBlock", "number": "e403b", "loc": [7, 7] }
            ],
            "afterAttack": []
        }
    };

    // ---------------- BOSS 配置 ----------------
    this.boss = {
        "testBoss": {
            "enemyId": "e1",
            "name": "小小玉·试炼",
            "attack": ["f1_1", "f1_2", "f1_3", "f1_4"],
            "beforeBattle": [
                { "type": "setBlock", "number": "e1", "loc": [7, 7] },
                { "type": "setGlobalFlag", "name": "enableMoveDirectly", "value": false },
                { "type": "pauseBgm" },
                { "type": "playBgm", "name": "bgm.mp3", "keep": true }
            ],
            "afterBattle": [
                { "type": "setGlobalFlag", "name": "enableMoveDirectly", "value": true },
                { "type": "pauseBgm" }
            ]
        },
        "yuyuko": {
            "enemyId": "e403b",
            "name": "幽幽子",
            "attack": ["y1", "y2", "y3", "y4"],
            // 撞 e403b 后改为进入通用弹幕战（替代原回合制符卡流程 y1~y4，
            // 原 attack/beforeBattle/afterBattle 流程保留但不再被触发）
            "danmaku": {
                "enemyId": 24,                   // 【简单模式】固定站位+稀疏垂直雨+极慢瞄准弹（case 7 为困难模式，可切回）
                "enemyImage": "char_yuyuko.png", // 幽幽子行走图（与 enemy_e403.png 同图）
                "enemyImgW": 42,                 // 42x42 一帧（168x168 = 4x4 帧）
                "enemyImgH": 42,
                "enemyDrawW": 48,                // 放大到 48x48 绘制
                "enemyDrawH": 48,
                "spellcards": 5,                 // 手感调整：8 → 5 张符卡
                "dynamicHp": true,               // 【2.10.57 任务A】进战时按玩家当前属性实时反推幽幽子实际 HP
                                                 // （公式化非写死；下方静态 enemylife 32000 / cards24 卡5 60000 仅为设计基线，
                                                 //   真实战斗由 danmaku.start 调 _calcYuyuHpModel 覆盖，见第三十八章）
                // 【时长与掉血平衡 2.10.56·纯攻-防公式版（改版）】纯弹幕战伤害按魔塔回合制攻-防公式结算，
                // 用户明确要求"不做任何系数/倍率修正"，K1=K2=1：
                //   自机弹 fire = max(1, round((hero.atk − YUYU_DEF) × K1))：YUYU_DEF = e403b.def = 0、K1=1
                //     → fire = max(1, hero.atk)（魔塔：hero.atk − enemy.def，攻高打得快；典型 f3 属性 atk=50~80 → 50~80）
                //   敌弹 fireback = max(1, round((YUYU_ATK − hero.def) × K2))：YUYU_ATK = e403b.atk = 10、K2=1
                //     → fireback = max(1, 10 − hero.def)（魔塔：enemy.atk − hero.def，防高打得轻；def≥10 时只掉 1 血，
                //       属性碾压就轻松——用户要求；典型 f3 属性 def=25~40 → 1；测试存档 def=3 → 7）
                //   时长模型（实测站桩 DPS 基线 = 20 发/秒 × fire60 = 1200（双列全中；正对单列实测 ≈ 604 ≈ 一半）；
                //     玩家实际命中率系数取 45%（实测跟枪 42~45% 落点，取区间内偏稳值；用户预估 40~60% 内）→ 有效 DPS ≈ 540/秒）：
                //     卡 1~4 击破符 32000/540 ≈ 59.3 秒/卡 ×4 ≈ 237 秒；卡 5 时符 60000/540 ≈ 111 秒 > 60 秒时限 →
                //     按 60 秒超时兜底；合计 ≈ 297 秒 ≈ 4 分 57 秒（300±30 内；命中率 42%~50% 时合计 ≈ 273~320 秒，
                //     全部落在 300±30 内；更强玩家攻高/命中更高则更快结束，符合"攻高打得快"）
                //   掉血期望：D（回合制公式 getDamageInfo，典型 atk60/def30）= (ceil(80/60)−1)×max(10−30,0) − mdef = 0 →
                //     当前进度属性已碾压、战斗无压力（掉血目标按 D=0 并注明；fireback=1 每发只掉 1 血）；
                //     测试存档口径（atk3/def3/mdef8）D=174、fireback=7，正常玩 5 分钟中弹 ~10 发 → 期望 70 ≈ 0.4×D
                //     （测试存档仅参考；真实进度 def≥10 → fireback=1、D≈0，无压力）
                "enemylife": 32000,              // 卡 1~4 击破符血量（卡 5 时符用 cards24 里的 hp:60000，见 _refillCard）
                get fireback() {                 // 攻-防公式（无修正系数）：中弹伤害 = max(1, YUYU_ATK − hero.def)
                    // YUYU_ATK = e403b.atk = 10：def≥10 时只掉 1 血（属性碾压就轻松，用户要求）
                    return Math.max(1, 10 - core.status.hero.def);
                },
                get fire() {                     // 攻-防公式（无修正系数）：自机火力 = max(1, hero.atk − YUYU_DEF)
                    // YUYU_DEF = e403b.def = 0：每发伤害 = 我方攻击力（攻高打得快，魔塔逻辑）
                    return Math.max(1, core.status.hero.atk);
                },
                "playersize": 2,
                "bgm": "bgm_yuyuko.mp3"          // 幽幽子主题曲（TH07 第13曲「幽雅に咲かせ、墨染の桜」SC88Pro 版，用户提供）
            },
            "beforeBattle": [
                { "type": "setBlock", "number": "e403b", "loc": [7, 7] },
                { "type": "setGlobalFlag", "name": "enableMoveDirectly", "value": false },
                { "type": "pauseBgm" },
                { "type": "playBgm", "name": "bgm_youyoumu.mp3", "keep": true }
            ],
            "afterBattle": [
                { "type": "setGlobalFlag", "name": "enableMoveDirectly", "value": true },
                { "type": "pauseBgm" },
                { "type": "function", "function": "function(){ core.setFlag('g_energy_used', 0); core.setFlag('energyBossDone', true); }" },
                { "type": "changeFloor", "floorId": "f0_garden", "loc": [23, 61], "direction": "right", "time": 0 },
                "\\t[幽幽子,face_yuyuko_00.png]哎呀，辛苦了。来，坐下喝杯茶吧。",
                "\\t[妖梦,face_youmu_00.png]……幽幽子大人，我们不是在测试吗？",
                "\\t[幽幽子,face_yuyuko_00.png]可是测试已经结束了呀。你已经通关了我的符卡了。",
                "\\t[妖梦,face_youmu_00.png]只……只要把终符中的您击败，就算是通过了吗？",
                "\\t[幽幽子,face_yuyuko_00.png]当然啦，我是刚才那座魔塔的主人嘛。",
                "\\t[幽幽子,face_yuyuko_00.png]所以，你通过了。",
                "\\t[妖梦,face_youmu_00.png]那……幽幽子大人，您在测试中想传达给我的，到底是什么呢？",
                "\\t[幽幽子,face_yuyuko_00.png]只是想让你记住一件事——无论未来的路多么崎岖，无论你需要面对多少座看不见的高塔……你都不是一个人。你有楼观剑，你有白楼剑，你有你的半灵，你还有我。",
                "\\t[幽幽子,face_yuyuko_00.png]所以，哪怕有一天我不得不离开，你也能独自走下去。",
                "\\t[妖梦,face_youmu_00.png]……谢谢您，幽幽子大人。",
                "\\t[幽幽子,face_yuyuko_00.png]好啦，闲聊的话就说到这里。团子要凉了，茶也要凉了——先吃饱再说吧。之后恐怕还有真正的战斗在等着我们呢。",
                "\\t[妖梦,face_youmu_00.png]嗯！",
                { "type": "function", "function": "function(){ core.setFlag('g_yuyuko_follow', 1); core.events.follow('char_yuyuko.png'); core.removeBlock(28, 61); }" }
            ]
        }
    };

    // ---------------- 开始战斗 ----------------
    this.beginBattle = function (bossId) {
        if (core.getFlag('specialAttack')) return;
        var boss = _self.boss[bossId];
        if (!boss) return;
        // 战斗中禁用自动拾取/清怪（防止把BOSS战打穿）
        core.setFlag('_bossSaveAutoPick', core.getFlag('autoPick', true));
        core.setFlag('_bossSaveAutoClear', core.getFlag('autoClear', true));
        core.setFlag('autoPick', false);
        core.setFlag('autoClear', false);
        core.setFlag("specialAttack", {
            "bossInfo": boss,
            "attackNow": 0,
            "attackInfo": _self.attack[boss.attack[0]],
            "bossDamage": 0,
            "attackDamage": 0,
            "turn": 0
        });
        // 状态栏画布移到游戏区底部（顶部右上角有技能图标）
        core.createCanvas("specialAttack", 0, core._PY_ - 88, core.__PIXELS__, 88, 55);
        core.insertAction(boss.beforeBattle, null, null, _self.drawBattleUI);
    };

    // ---------------- 能量归零触发入口（HUD 调用） ----------------
    this.startEnergyBoss = function () {
        if (core.getFlag('specialAttack')) return;
        // 走事件流换层（直接调 changeFloor 会被换层动画卡住；time:0 跳过动画）
        core.insertAction([
            { "type": "changeFloor", "floorId": "f3_12", "loc": [7, 11], "time": 0 }
        ], null, null, function () {
            setTimeout(function () { _self.beginBattle('yuyuko'); }, 600);
        });
    };

    // ---------------- 绘制战斗 UI ----------------
    this.drawBattleUI = function () {
        var special = core.getFlag('specialAttack');
        if (!special) return;
        if ((special.bossInfo.ui || {}).type == "hide") return;
        _self._drawBattleUI_statusBar(special.bossInfo, special.attackInfo);
    };
    this._drawBattleUI_statusBar = function (boss, attack) {
        var ctx = core.dymCanvas.specialAttack;
        if (!ctx) return;
        var special = core.getFlag('specialAttack');
        var smallFont = core.ui._buildFont(12, false);
        var middleFont = core.ui._buildFont(16, false);
        core.setTextAlign(ctx, "left");
        core.setTextBaseline(ctx, "top");
        core.drawWindowSkin('winskin.png', ctx, 8, 8, 464, 80);
        core.fillText(ctx, boss.name || boss.enemyId, 24, 24, 'white', smallFont);
        core.fillText(ctx, "地图伤害/战斗伤害：" + special.attackDamage + "/" + special.bossDamage, 24, 64, 'white', smallFont);
        core.setTextAlign(ctx, 'right');
        core.fillText(ctx, attack.name || "", 454, 24, 'white', middleFont);
        if (attack.type !== "time") core.fillText(ctx, "本阶段回合数：" + special.turn + "/ --", 454, 64, 'white', smallFont);
        else {
            if (attack.maxTime != null) core.fillText(ctx, "剩余回合数：" + (attack.maxTime - special.turn), 454, 64, 'white', smallFont);
            else console.log("注意，本时符没有限定时间！");
        }
        if (attack.name != null && boss.ui && boss.ui.bg) core.drawImage('specialAttack', boss.ui.bg, 0, 0, 480, 480, 10, 10);
        else core.drawBg();
    };

    // ---------------- 每走一步（时符计时） ----------------
    this.doAttack = function () {
        var special = core.getFlag('specialAttack');
        if (!special) return;
        var attack = special.attackInfo;
        special.turn++;
        attack.action();
        _self.drawBattleUI();
        if (attack.type === "time" && attack.maxTime != null && special.turn > attack.maxTime) _self.changeAttack();
    };

    // ---------------- 战后判定（撞BOSS推进阶段） ----------------
    this.detectBattle = function (enemyId, damage) {
        var special = core.getFlag('specialAttack');
        if (!special) return;
        if (enemyId == special.bossInfo.enemyId) {
            special.bossDamage += damage;
            // 【星冥线】配置了 danmaku 的BOSS（幽幽子）：撞本体后进入弹幕战，
            // 胜利回调走原有 afterBattle 剧情（喝茶对话 / g_yuyuko_follow 等）
            if (special.bossInfo.danmaku) {
                // 弹幕战自带血条/符卡槽，隐藏回合制 UI（overBattle 里 deleteCanvas 幂等）
                core.deleteCanvas("specialAttack");
                core.plugin.danmaku.start(special.bossInfo.danmaku, function () {
                    _self.overBattle();
                });
                return;
            }
            _self.changeAttack();
        } else special.attackDamage += damage;
    };

    // ---------------- 换阶段 ----------------
    this.changeAttack = function () {
        var special = core.getFlag('specialAttack');
        if (!special) return;
        var boss = special.bossInfo, attack = special.attackInfo;
        var attackNext = _self.attack[boss.attack[special.attackNow + 1]];
        // 清除场地
        var todo = [];
        for (var x = 3; x < 12; x++) {
            for (var y = 3; y < 12; y++) {
                if (core.getBlockId(x, y)) {
                    core.push(todo, [{ "type": "hide", "loc": [x, y], "remove": true }]);
                }
            }
        }
        core.push(todo, [{ "type": "waitAsync" }]);
        if (!attackNext) {
            core.insertAction(todo, null, null, _self.overBattle);
            return;
        }
        core.push(todo, attack.afterAttack || []);
        core.push(todo, attackNext.beforeAttack || []);
        core.insertAction(todo);
        // 更新变量和UI
        special.attackNow++;
        special.attackInfo = attackNext;
        special.turn = 0;
        _self.drawBattleUI();
    };

    // ---------------- 结束战斗 ----------------
    this.overBattle = function () {
        var special = core.getFlag('specialAttack');
        if (!special) return;
        core.drawBg();
        core.insertAction(special.bossInfo.afterBattle);
        core.deleteCanvas("specialAttack");
        core.removeFlag("specialAttack");
        // 恢复自动拾取/清怪
        core.setFlag('autoPick', core.getFlag('_bossSaveAutoPick', true));
        core.setFlag('autoClear', core.getFlag('_bossSaveAutoClear', true));
        core.removeFlag('_bossSaveAutoPick');
        core.removeFlag('_bossSaveAutoClear');
    };

    // ---------------- 测试入口：T 键（清场后开战） ----------------
    this.startTestBattle = function () {
        if (core.getFlag('specialAttack')) return;
        var todo = [];
        for (var x = 3; x < 12; x++) {
            for (var y = 3; y < 12; y++) {
                if (core.getBlockId(x, y)) {
                    core.push(todo, [{ "type": "hide", "loc": [x, y], "remove": true }]);
                }
            }
        }
        core.push(todo, [{ "type": "waitAsync" }]);
        core.insertAction(todo, null, null, function () { _self.beginBattle('testBoss'); });
    };

    // ---------------- 钩子安装（战后判定 + 每步计时 + T键） ----------------
    var _installed = false;
    function _installHooks() {
        if (_installed) return;
        if (!core.events || !core.events.afterBattle || !core.control || !core.control.moveOneStep) return;
        _installed = true;
        // 战后：detectBattle
        var _origAB = core.events.afterBattle;
        core.events.afterBattle = function (enemyId, x, y, force) {
            // 【2.10.56 纯弹幕战】配置了 danmaku 的BOSS（幽幽子）：撞本体直接进弹幕战，
            // 不执行回合制结算——原 afterBattle 的扣血/判死/金币经验/死怪计数全部跳过
            // （进战前/后 hp 不变，掉血只发生在弹幕战中弹）；仅等价地清掉地图上的 BOSS 块，
            // 与回合制战后删除一致（避免胜利回城后原地再撞 e403b）。
            var _spAB = core.getFlag('specialAttack');
            if (_spAB && _spAB.bossInfo && _spAB.bossInfo.enemyId == enemyId && _spAB.bossInfo.danmaku) {
                try {
                    if (x != null && y != null && core.getBlock(x, y) != null) core.removeBlock(x, y);
                    core.updateStatusBar();
                    core.plugin.detectBattle(enemyId, 0);
                } catch (e) { console.error('【BOSS战】detectBattle:', e); }
                return undefined;
            }
            var res;
            if (_origAB) res = _origAB.call(this, enemyId, x, y, force);
            try {
                if (core.getFlag('specialAttack')) {
                    var dmg = 0;
                    try { dmg = core.enemys.getDamage(enemyId, x, y, core.status.floorId) || 0; } catch (e) { }
                    core.plugin.detectBattle(enemyId, dmg);
                }
            } catch (e) { console.error('【BOSS战】detectBattle:', e); }
            return res;
        };
        // 每走一步：doAttack（时符计时）
        var _origMOS = core.control.moveOneStep;
        core.control.moveOneStep = function (callback) {
            var res;
            if (_origMOS) res = _origMOS.call(this, callback);
            try {
                if (core.getFlag('specialAttack')) core.plugin.doAttack();
            } catch (e) { console.error('【BOSS战】doAttack:', e); }
            return res;
        };
        // T 键：测试入口（完整幽幽子流程：传送 f3_12 → BOSS战 → 回庭园剧情）
        core.registerAction('onkeyUp', 'bossBattleTest', function (e) {
            if (!core.isPlaying() || core.status.lockControl) return false;
            if (e.keyCode == 84) { core.plugin.startEnergyBoss(); return true; }
            return false;
        }, 60);
    }
    if (core.plugin._afterLoadResources) {
        var _prevALR = core.plugin._afterLoadResources;
        core.plugin._afterLoadResources = function () {
            if (_prevALR) _prevALR();
            _installHooks();
        };
    } else {
        setTimeout(_installHooks, 100);
        setTimeout(_installHooks, 1000);
    }
};

_bossBattlePluginFn();

// ===== 【东方星冥线】通用弹幕战斗系统（移植自 魔塔弹幕风 MT0）=====
// 核心循环见 project/floors/danmaku.js 的 parallelDo（子弹移动、绘制、自机射击、
// 敌机AI switch case 0~23、圆形碰撞、血条/符卡槽、胜利/失败判定，全部原样保留）。
// 用法：core.plugin.danmaku.start(config)
// config 最少需要 enemyId / enemylife / spellcards；可选 enemyImage、fire、fireback、
// bgm、onWin、onLose、playersize、ispeed 等，均有默认值。
var _danmakuPluginFn = function () {
    if (typeof core === 'undefined') {
        plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1["danmaku"] = _danmakuPluginFn;
        return;
    }
    var _self = this;

    // 战斗区域边界（第六轮·放大铺满）：原战斗区 0~224 x 0~352（占 480x480 画布 47%宽 x 73%高，位于左上角）。
    // 放大方案（用户要求：接近全屏、移动范围大）：非等比拉伸铺满——
    //   SX = 480/224 ≈ 2.1429（X 满宽 0~480）；
    //   SY = 448/352 ≈ 1.2727，且战斗区顶部偏移 FIELD_Y=16px（画布上下各留 16px，战斗区 y∈[16,464]，占高 93.3%）；
    // 所有坐标 X'=X*SX、Y'=FIELD_Y+Y*SY；速度/判定半径/子弹视觉尺寸不换算（区域变大天然更稀疏，更好躲）。
    var SX = 480 / 224;              // ≈2.1429
    var SY = 448 / 352;              // ≈1.2727
    var FIELD_W = 480;               // 原 224 → 新战斗区宽（满画布宽）
    var FIELD_H = 448;               // 原 352 → 新战斗区高
    var FIELD_Y = 16;                // 战斗区顶部在画布中的 y 偏移（顶部/底部各留 16px）
    // 第四轮（触屏边界手感）：自机 40x40 绘制半宽=20（parallelDo drawImage 偏移 playerx-20/playery-20），
    // 钳制含半身 → 自机整身不出新战斗区（铺满画布、不出屏）：x∈[20,460]、y∈[36,444]
    //（y 下界 36=FIELD_Y+20，自机不会盖住战斗区顶部的血条/符卡 UI 条）
    var MOVE_MIN = 20;
    var MOVE_MIN_Y = FIELD_Y + 20;   // 36
    var MOVE_MAX_X = FIELD_W - 20;   // 460
    var MOVE_MAX_Y = FIELD_Y + FIELD_H - 20; // 444

    this.danmaku = {};

    // 音效助手：开关（flags.sfx）+ 回放静音（core.isReplaying）+ 同名音最小间隔（Date.now，防爆音）+ 兜底 try/catch
    this.danmaku._sfx = function (name, opts) {
        if (!flags.sfx || core.isReplaying()) return;
        var o = opts || {};
        var gap = o.gap || 0;
        var last = flags.sfxLast || {};
        if (gap && Date.now() - (last[name] || 0) < gap) return;
        last[name] = Date.now();
        flags.sfxLast = last;
        try {
            core.playSound(name);
        } catch (e) {
            console.error('danmaku sfx ' + name, e);
        }
    };

    // 微调轮：音效响度均衡（仅衰减不放大，避免削波；就地缩放已解码 AudioBuffer 采样，
    // 不修改 wav 文件、不改 libs/、不改 core.playSound 调用链；__danmakuGain 幂等标记防二次缩放）
    this.danmaku._applySfxGain = function () {
        var gains = { 'danmaku_damage': 0.4, 'danmaku_declare': 0.7 }; // 其余 1.0 不动
        for (var name in gains) {
            // 运行时 material.sounds 键带文件后缀（loader 按 data.js sounds 列表原样装载，如 'danmaku_damage.wav'），
            // 而 _sfx 调用名无后缀——两种键形都兼容，保证缩放真实命中已解码 AudioBuffer。
            var buf = core.material && core.material.sounds &&
                (core.material.sounds[name] || core.material.sounds[name + '.wav']);
            if (buf && buf.getChannelData && !buf.__danmakuGain) {
                for (var c = 0; c < buf.numberOfChannels; c++) {
                    var d = buf.getChannelData(c);
                    for (var i = 0; i < d.length; i++) d[i] *= gains[name];
                }
                buf.__danmakuGain = true;
            }
        }
    };

    // 【2.10.57 任务A·幽幽子战 HP 动态调整模型】进战时按玩家当前属性实时反推 BOSS 实际 HP（公式化，非写死）：
    //   掉血目标 D = 魔塔回合制公式伤害（e403b 手册值 hp80/atk10/def0、special:[] 无折射/吸血/先攻/破甲/
    //     净化/反击/支援等 → 纯攻-防公式，与 project/functions.js getDamageInfo 同口径，测试双口径核对）：
    //     per_damage = max(0, 10 − def)；hero_per_damage = max(atk − 0, 0)；turn = ceil(80 / hero_per_damage)；
    //     D = max(0, (turn − 1) × per_damage − mdef)
    //   掉血模型：总掉血 = 战斗时长 × 中弹频率 × fireback；中弹频率按魔塔玩家不熟练预估 20~40 秒一弹，
    //     取中值 30 秒（与第三十七章真实跟枪实测自然中弹 ~10 次/5 分钟 ≈ 30 秒/次吻合）→
    //     反推战斗时长 T = D ÷ (中弹频率 × fireback)，夹取保护：下限 180 秒（BGM 体验）、上限 360 秒；
    //   总 HP = 有效DPS × T，有效DPS = 20发/秒 × fire × 命中率45%（第三十七章站桩实测基线 20发/秒，
    //     命中率实测 42~47% 取中值 45%）→ effDPS = 20 × fire × 0.45 = 9 × fire；
    //   每卡分配：卡 1~4 击破符均分（hpBreak）+ 卡 5 时符 60 秒兜底（血量 = min(60000, effDPS×60)，
    //     不高于 60000 基线；攻极高时可在时限前击破，总时长由"总HP预算 − 时符实际占用"自洽兜住）；
    //   边界：D=0（属性碾压）或 D ≥ 玩家 HP（属性不足按魔塔原则打不过）或不可战斗 → 按 5 分钟基线时长
    //     T0 = 297s（第三十七章模型中心 = 4×59.3 + 60）反推 HP：典型 atk60/def30 → 卡1~4 ≈31995≈32000、
    //     卡5 = 60000（与上轮基线一致）；更高 atk 时卡血同比上调以保持 5 分钟时长（若沿用固定 32000/60000，
    //     atk=120 实测仅 ~174s < 180s 下限，违反总时长约束）；属性不足时掉血会高（D 大）但这是玩家属性
    //     问题，不调数值。返回值含诊断字段（进战落盘到 flags.yuyuHpModel，供测试断言，不影响判定/回放）。
    this.danmaku._calcYuyuHpModel = function (fire, fireback) {
        var hero = core.status.hero || {};
        var atk = Math.max(0, hero.atk || 0);
        var def = Math.max(0, hero.def || 0);
        var mdef = Math.max(0, hero.mdef || 0);
        var heroHp = Math.max(0, hero.hp || 0);
        // 回合制伤害 D（e403b 口径，见上注释）
        var perDamage = Math.max(0, 10 - def);          // mon_atk(10) − hero_def
        var heroPerDamage = Math.max(atk, 0);           // hero_atk − mon_def(0)
        var D = 0;
        var unbeatable = heroPerDamage <= 0;            // atk=0 时 hero_per_damage≤0 → getDamageInfo 返回 null 不可战斗
        if (!unbeatable) {
            var turn = Math.ceil(80 / heroPerDamage);   // mon_hp(80) ÷ hero_per_damage 向上取整
            D = Math.max(0, (turn - 1) * perDamage - mdef);
        }
        var effDPS = 20 * fire * 0.45;                  // 20发/秒 × fire × 命中率45%
        var hitInterval = 30;                           // 中弹频率：1 弹 / 30 秒（20~40 秒预估取中值）
        var T0 = 297;                                   // 5 分钟基线时长（秒）= 4×59.3 + 60
        var branch, T, hpCard5;
        if (unbeatable || D <= 0 || D >= heroHp) {
            // D=0（属性碾压）/ D ≥ 玩家HP（属性不足）/ 不可战斗 → 5 分钟基线时长反推（不调数值）
            branch = (unbeatable || D >= heroHp) ? 'underpowered' : 'baseline';
            T = T0;
            hpCard5 = 60000;
        } else {
            // 动态分支：T = D ÷ (中弹频率 × fireback)，夹取 180~360 秒
            branch = 'dynamic';
            T = Math.max(180, Math.min(360, D / (1 / hitInterval) / fireback));
            hpCard5 = Math.min(60000, Math.round(effDPS * 60));
        }
        var T5 = Math.min(60, hpCard5 / effDPS);        // 时符实际占用时长（血高时仍按 60 秒超时兜底）
        var hpBreak = Math.max(1, Math.round(effDPS * (T - T5) / 4)); // 卡 1~4 击破符均分
        return {
            branch: branch,
            D: D, T: T, T5: T5,
            effDPS: Math.round(effDPS * 100) / 100,
            hpBreak: hpBreak, hpCard5: hpCard5,
            fire: fire, fireback: fireback,
            hero: { atk: atk, def: def, mdef: mdef, hp: heroHp }
        };
    };

    // ---------------- 开始弹幕战 ----------------
    this.danmaku.start = function (config, onWin) {
        if (!config) return;
        if (flags.bulletscreen) return; // 已在弹幕战中
        // 浅拷贝配置（不依赖 core.clone）
        var cfg = {};
        for (var k in config) cfg[k] = config[k];
        // 兼容两种调用方式：config.onWin 或第二参数
        if (cfg.onWin == null && onWin != null) cfg.onWin = onWin;
        _self._cfg = cfg;
        // 默认值
        var enemyId = cfg.enemyId != null ? cfg.enemyId : 0;
        var enemylife = cfg.enemylife != null ? cfg.enemylife : 100;
        var spellcards = cfg.spellcards != null ? cfg.spellcards : 1;
        var fire = cfg.fire != null ? cfg.fire : core.status.hero.atk;
        var fireback = cfg.fireback != null ? cfg.fireback : 10;
        var playersize = cfg.playersize != null ? cfg.playersize : 2;
        var ispeed = cfg.ispeed != null ? cfg.ispeed : 3; // 键盘方向键速度固定 3px/帧（第四十七章：按用户反馈由 5px 降为 3px，更好躲弹；触摸拖动为 1:1 位移，不使用 ispeed）
        // 【2.10.57 任务A·幽幽子战HP动态调整】配置了 dynamicHp 的幽幽子（enemyId 24）进战时按玩家当前
        // 属性实时反推 BOSS 实际 HP（见 _calcYuyuHpModel 注释）；静态 enemylife（32000）仅作设计基线，
        // 真实战斗血量由模型覆盖；回放期间自动判胜不计算（不影响路线一致性）
        var _yuyuHpModel = null;
        if (cfg.dynamicHp && cfg.enemyId == 24 && !core.isReplaying()) {
            _yuyuHpModel = _self.danmaku._calcYuyuHpModel(fire, fireback);
            enemylife = _yuyuHpModel.hpBreak; // 卡 1~4 击破符均分血量（卡 1 初始血量）
        }
        // 记录战斗前位置（胜利后返回）
        flags.px = core.status.hero.loc.x;
        flags.py = core.status.hero.loc.y;
        flags.pfloor = core.status.floorId;
        // 初始化弹幕数组（敌弹上限100，自机弹上限10）
        flags.bullet = [];
        flags.bulletx = [];
        flags.bullety = [];
        flags.bulletx1 = [];
        flags.bullety1 = [];
        flags.bulletsize = [];
        flags.bullettype = [];
        flags.bulletframe = [];
        flags.bullettypeid = [];
        flags.bulletwob = [];
        flags.bulletcolor = [];
        flags.selfbullet = [];
        flags.selfbulletx = [];
        flags.selfbullety = [];
        for (var i = 0; i < 100; i++) {
            flags.bullet[i] = 0;
            flags.bulletx[i] = 0;
            flags.bullety[i] = 0;
            flags.bulletx1[i] = 0;
            flags.bullety1[i] = 0;
            flags.bulletsize[i] = 0;
            flags.bullettype[i] = 0;
            flags.bulletframe[i] = 0;
            flags.bullettypeid[i] = 0;
            flags.bulletwob[i] = null;
            flags.bulletcolor[i] = 0;
        }
        for (var j = 0; j < 10; j++) {
            flags.selfbullet[j] = 0;
            flags.selfbulletx[j] = 0;
            flags.selfbullety[j] = 0;
        }
        // 战斗参数
        // 第六轮：出生点按放大换算——自机（下方中央，更好躲）、敌机（上方中央）
        flags.playerx = 112 * SX;                    // 240 = 112*SX
        flags.playery = FIELD_Y + 320 * SY;          // ≈423.3 = 16 + 320*SY
        flags.enemyx = 112 * SX;                     // 240 = 112*SX
        flags.enemyy = FIELD_Y + 48 * SY;            // ≈77.1 = 16 + 48*SY
        flags.time = 0;
        flags.onhit = 0;
        // 第四十四章：每战复位单调帧计数与扩散弹登记（spiral 每战从 angle0 起、burst 无残留；
        // 只写 flags，不影响判定/擦弹/回放——回放自动判胜跳过生成）
        flags.danmakuCycle = 0;
        flags.lastTick = undefined;
        flags.burst = [];
        // 幽幽子目标点随机游走状态（进战重置为 null，case 24 首帧惰性初始化；只写 flags，不影响判定/回放）
        flags.wanderTx = null;
        flags.wanderTy = null;
        flags.wanderTimer = null;
        // 阶段二：符卡每卡时限计时器、弹幕生成空槽接续游标、破卡提示（只写 flags，不影响判定与回放）
        flags.cardTimer = 0;
        flags.n = 0;
        flags.cardBreakFx = null;
        // 中弹全屏闪红计数器（纯视觉：命中置 5，每帧绘制后自减；不影响判定与回放）
        flags.hitFlash = 0;
        // 第四轮：符卡宣言文字（纯视觉 {text, life}）、破卡大闪光计数器（纯视觉）、BOSS 登场下滑帧数（纯视觉计数器）
        flags.cardNameFx = null;
        flags.breakFlash = 0;
        flags.enterFx = 45;
        // 第十一轮：幽幽子旋转光环状态（纯视觉 {life, angle, timer}，进战初始化、战斗结束清理；只写 flags，不影响判定与回放）
        flags.auraFx = { life: 0, angle: 0, timer: 0 };
        // 第五轮（弹幕节奏）：高血段标记（enemylife*2 > enemylifemax 为高血段；破卡回满血时复位）+ 低血段停火提示计数器（纯视觉 + 生成暂停）
        flags.highPhase = 1;
        flags.ceaseFx = null;
        // 音效开关与宣言去重游标（flags.sfx 默认开，后续 UI 可置 0；sfxLast 为 Date.now 时间戳表，防同名爆音）
        flags.sfx = 1;
        flags.lastCardIdx = -1;
        flags.sfxLast = {};
        // 微调轮：进战即做一次音效响度均衡（幂等：__danmakuGain 标记防二次缩放，重复进战无副作用）
        _self.danmaku._applySfxGain();
        // 阶段一：敌弹判定分档系数表（参考 Touhou.js：小弹 75% / 中弹 50% / 大弹 44%，默认 0.5）
        flags.hitk = { 3: 0.75, 6: 0.5, 14: 0.44 };
        // 擦弹计数与每弹去重标记（只写 flags，不写 route/输入，不影响回放）
        flags.graze = 0;
        flags.grazed = [];
        // 命中/擦弹视觉特效（纯视觉数组 {x,y,type,life}，上限约 20，不影响判定与回放）
        flags.fx = [];
        for (var g = 0; g < 100; g++) flags.grazed[g] = 0;
        flags.enemylife = enemylife;
        flags.enemylifemax = enemylife;
        flags.fire = fire;
        flags.fireback = fireback;
        flags.spellcardleft = spellcards;
        // 【2.10.57 动态HP】每卡血量覆盖表（卡 1~4 均分 + 卡 5 时符兜底血量，_refillCard 优先读它；
        // 只写 flags，不影响判定/回放；cards7/无 dynamicHp 时不存在该字段，行为与旧版一致）
        // 模型诊断信息一并落盘（供测试断言 / 交付说明核对，战斗逻辑不读取）
        if (_yuyuHpModel) {
            flags.cardHpOverride = [_yuyuHpModel.hpBreak, _yuyuHpModel.hpBreak, _yuyuHpModel.hpBreak, _yuyuHpModel.hpBreak, _yuyuHpModel.hpCard5];
            flags.yuyuHpModel = _yuyuHpModel;
        }
        flags.enemyId = enemyId;
        flags.playersize = playersize;
        flags.ispeed = ispeed;
        // 【2.10.65 任务三】配色主题化初始化：cards24 每卡 colorOffset（0~3，4 色循环起始偏移）
        // 由 _refillCard 破卡时更新；cards7/其他敌人 colorWaveOff=undefined → 生成器不配色，
        // 弹色与旧版逐字节一致（bulletcolor 全 0）。
        // 【2.10.65 任务一】键盘方向标志初始化为全 0（parallelDo 每帧读取做持续移动）。
        var _c0 = (enemyId == 24 && _self.danmaku.cards24 && _self.danmaku.cards24[0])
            ? _self.danmaku.cards24[0].colorOffset : null;
        flags.colorOffset = (_c0 == null ? 0 : ((_c0 % 4) + 4) % 4);
        flags.colorWave = 0;
        flags.colorWaveOff = (enemyId == 24 ? flags.colorOffset : undefined);
        flags.danmakuKey = { left: 0, right: 0, up: 0, down: 0 };
        // 【2.10.66 任务一】樱花点缀初始化（纯视觉：只写 flags、不写 route，回放安全）。
        // 每战固定 6 朵（稀疏、正作感）；位置/下落速度/摆动相位/飘移全部由序号推导，
        // 不用 core.rand → 不消耗随机种子，不影响生成器/随机游走的确定性序列（见第四十七章实测）。
        // parallelDo 每帧按 vy 下落 + 正弦摆动绘制，出界（y>520）回到顶部（y=-32）。
        flags.sakura = [];
        for (var _sk = 0; _sk < 6; _sk++) {
            flags.sakura.push({
                x: (_sk * 83 + 31) % 480,
                y: (_sk * 131) % 520 - 40,
                vy: 0.3 + ((_sk * 13) % 3) * 0.1,        // 0.3/0.4/0.5 px/帧
                img: _sk % 3,                             // sakura_petal0..2
                size: 36 + ((_sk * 7) % 3) * 8,           // 36/44/52 px（明显可见：用户反馈小尺寸低 alpha 看不见 → 素材 alpha<=160+粉色增强，绘制 36/44/52px）
                ph: (_sk * 41) % 360,                     // 摆动相位
                drift: (_sk % 2 ? 1 : -1) * (0.08 + (_sk % 3) * 0.04) // 斜向漂移 ±0.08~0.16
            });
        }
        // 敌机形象（独立图或 enemys.png 帧；不配置则用 enemys.png 的 enemyId 行）
        flags.enemyImage = cfg.enemyImage || null;
        flags.enemyImgX = cfg.enemyImgX || 0;
        flags.enemyImgY = cfg.enemyImgY || 0;
        flags.enemyImgW = cfg.enemyImgW || 32;
        flags.enemyImgH = cfg.enemyImgH || 32;
        flags.enemyDrawW = cfg.enemyDrawW || 32;
        flags.enemyDrawH = cfg.enemyDrawH || 32;
        // 注册移动控制（战斗结束即注销，避免残留监听）
        _self._registerMove();
        // 隐藏普通主角行走图（弹幕战用 event2 自绘妖梦）
        core.setHeroOpacity(0);
        // 开战
        flags.bulletscreen = 1;
        if (core.isReplaying()) {
            // 回放兼容：回放期间没有真实玩家输入（keyDown 被 _sys_checkReplay 拦截），
            // 直接判定胜利，下一帧 danmaku 地板的 parallelDo 会走胜利分支回城。
            // 弹幕战期间 normal play 只调用 core.rand（不写录像路线），回放跳过也不影响路线一致性。
            flags.enemylife = 0;
            flags.spellcardleft = 0;
            // 回放静音：回放期弹幕战自动判胜，任何 SE 都不该响。
            // 注意 parallelDo 真正执行判胜帧时 core.isReplaying() 可能已因路线耗尽而变 false，
            // 因此不能只靠 _sfx 里的 isReplaying 检查，这里直接关掉 _sfx 开关；
            // 战斗立即结束，且下一次 danmaku.start 会重新置 flags.sfx = 1。
            flags.sfx = 0;
        }
        // BGM（可空，沿用当前音乐；有 cfg.bgm 时仅传名称参数，与其它播放调用一致）。
        // 在换入 danmaku 地板的 changeFloor 回调里播（换层钩子会先按楼层规则播楼层曲，
        // 若在换层前播，bgmTick 会因 lastBgmKey 过期在 f3_12 末帧把战斗 BGM 盖回楼层曲）
        core.insertAction({ "type": "changeFloor", "floorId": "danmaku", "loc": [14, 14], "time": 0 }, null, null, function () {
            if (cfg.bgm) {
                core.playBgm(cfg.bgm);
                // 音量：对齐 f3_ 楼层 BGM 档位 0.4（bgmTick 不接管 danmaku 地板音量，与进入前 f3_12 楼层曲同档）
                var _b = core.material.bgms[cfg.bgm];
                try { if (_b) { if (typeof _b.volume === 'function') _b.volume(0.4); else _b.volume = 0.4; } } catch (e) { /* ignore */ }
            }
        });
    };

    // ---------------- 阶段二：弹幕生成参数化助手（数据层，直接操作 flags.bullet 数组找空槽并写参数） ----------------
    // 参考 th06_3.1 声明式弹幕数组 / Touhou.js shoot_circle：生成器只负责"找空槽 + 写参数"，
    // 与 parallelDo 原手写 for 块同款"接续搜索"（从 n 起找第一个空槽，n 接续推进，避免覆盖已有子弹）。
    // 每个生成器签名 (flags, cx, cy, opts)：cx/cy 为生成锚点（数字或 flags 字段名如 'enemyx'），
    // opts 公共字段：count/speed/size/type/interval/offset/resetN/advanceN 等（详见各生成器注释）。
    var _val = function (v, flags) {
        if (typeof v === 'number') return v;
        if (typeof v === 'string') return flags[v];
        if (typeof v === 'function') return v(flags);
        return v;
    };
    // 弹型 ID 兜底：未配 typeid 时按旧三档映射（3→小玉 / 6→丸弹 / 14→大玉），保证旧生成器/旧 AI case 视觉不变
    var _typeidFor = function (size) {
        return size == 3 ? 'small' : (size == 6 ? 'maru' : (size == 14 ? 'big' : 'small'));
    };
    // 找空槽写入（返回接续 n；找不到空槽则跳过不放，与原 for 循环行为一致）
    // 第四十六章：新增可选 color 参数（0~3 弹色帧偏移；null/未传=不配色，弹色帧与旧版一致）。
    // 只写 flags.bulletcolor[i]（纯视觉，绘制时叠加在 bulletframe 上），判定/尺寸/回放不受影响。
    var _place = function (flags, n, x, y, vx, vy, size, type, advance, typeid, color) {
        for (var i = n; i < 100; i++) {
            if (flags.bullet[i] == 0) {
                flags.bullet[i] = 1;
                flags.bulletx[i] = x;
                flags.bullety[i] = y;
                flags.bulletx1[i] = vx;
                flags.bullety1[i] = vy;
                flags.bulletsize[i] = size;
                flags.bullettype[i] = type;
                flags.bullettypeid[i] = typeid != null ? typeid : _typeidFor(size);
                flags.bulletwob[i] = null;
                flags.bulletcolor[i] = color != null ? ((color % 4) + 4) % 4 : 0;
                return advance !== false ? i + 1 : n;
            }
        }
        return n;
    };
    // 第四十六章：同波多色交替——每颗弹的弹色帧偏移 = (波内序号 j + 当前波起始偏移) % 4；
    // cards24 每波由 _tickCard 写 flags.colorWaveOff（卡 1~4 固定、卡 5 colorAlt 逐波交替），
    // cards7/其他场景 colorWaveOff 为 undefined → 返回 null（不配色，弹色与旧版一致）。
    var _bulletColor = function (j) {
        return flags.colorWaveOff != null ? (j + flags.colorWaveOff) % 4 : null;
    };
    this.danmaku.spawn = {
        // 环形（参考 Touhou.js shoot_circle）：count 颗均布整圆，speed 为线速度（px/帧），
        // angle0 起角（0 = 正右，屏幕 y 向下）、angleSpan 张角（默认整圆 2π）
        ring: function (flags, cx, cy, opts) {
            var o = opts || {};
            var count = o.count != null ? o.count : 8;
            var speed = o.speed != null ? o.speed : 2;
            var a0 = o.angle0 != null ? o.angle0 : 0;
            var span = o.angleSpan != null ? o.angleSpan : Math.PI * 2;
            var x = _val(cx, flags) + (o.x0 || 0);
            var y = _val(cy, flags) + (o.y0 || 0);
            var n = o.resetN === false ? flags.n : 0;
            for (var j = 0; j < count; j++) {
                var a = a0 + span * j / count;
                n = _place(flags, n, x, y, speed * Math.cos(a), speed * Math.sin(a), o.size != null ? o.size : 6, o.type != null ? o.type : 1, true, o.typeid, _bulletColor(j));
            }
            flags.n = n;
        },
        // 扇形：count 颗按 dirs 方向族逐 j 交错发射（保持原手写块的下/上/右/左族插槽顺序）；
        // spread = spread0 + j*spreadStep；配 spreadTimeDiv/spreadTimeBase 时为旋转扫射 spread = (time%100)/div - base
        // 第四十三章（弹幕布局调整·自机狙扇形）：opts.aim=true 时改用"以玩家方向为基准角 + spread 角偏移"的
        //   自机狙扇形（Danmakufu SampleA02 / taisei crystal_rain 式，atan2 玩家-发射点 为基准）：
        //   每颗弹速度统一取 opts.speed（低难度 ≤2px/帧），vx/vy = speed*cos/sin(基准角+spread)；
        //   spread0/spreadStep 在此分支语义为弧度角偏移（与普通扇形的 vx 速度偏移不同，见数据表注释）。
        //   评估结论：采用"偶数向 + 对称 spread"——玩家方向正好落在两股之间（中间一发不正对玩家），
        //   既保留自机狙追位手感，又不破坏 BOSS 正下方中央列安全（奇数向会让中间一发周期性直射站桩玩家，弃用，依据见第四十三章）。
        fan: function (flags, cx, cy, opts) {
            var o = opts || {};
            var count = o.count != null ? o.count : 5;
            var dirs = o.dirs != null ? o.dirs : [{ vx: 'spread', vy: o.vy != null ? o.vy : 2 }];
            var x = _val(cx, flags) + (o.x0 || 0);
            var y = _val(cy, flags) + (o.y0 || 0);
            var n = o.resetN === false ? flags.n : 0;
            if (o.aim) {
                var spd = o.speed != null ? o.speed : 1.2;
                var base = Math.atan2(flags.playery - y, flags.playerx - x);
                for (var j = 0; j < count; j++) {
                    var a = base + (o.spread0 != null ? o.spread0 : 0) + j * (o.spreadStep != null ? o.spreadStep : 0);
                    n = _place(flags, n, x, y, spd * Math.cos(a), spd * Math.sin(a), o.size != null ? o.size : 6, o.type != null ? o.type : 1, true, o.typeid, _bulletColor(j));
                }
                flags.n = n;
                return;
            }
            for (var j = 0; j < count; j++) {
                var s = o.spreadTimeDiv != null
                    ? (flags.time % 100) / o.spreadTimeDiv - (o.spreadTimeBase != null ? o.spreadTimeBase : 0)
                    : (o.spread0 != null ? o.spread0 : 0) + j * (o.spreadStep != null ? o.spreadStep : 0);
                for (var d = 0; d < dirs.length; d++) {
                    var dir = dirs[d];
                    var vx = dir.vx === 'spread' ? s : (dir.vx === '-spread' ? -s : dir.vx);
                    var vy = dir.vy === 'spread' ? s : (dir.vy === '-spread' ? -s : dir.vy);
                    n = _place(flags, n, x, y, vx, vy, o.size != null ? o.size : 6, o.type != null ? o.type : 1, true, o.typeid, _bulletColor(j * dirs.length + d));
                }
            }
            flags.n = n;
        },
        // 自机狙：opts 不配 vx/vy（direction=null 语义）时朝玩家；speed = 弹飞到玩家所需帧数，vx=(playerx-cx)/speed
        aimed: function (flags, cx, cy, opts) {
            var o = opts || {};
            var x = _val(cx, flags) + (o.x0 || 0);
            var y = _val(cy, flags) + (o.y0 || 0);
            var k = o.speed != null ? o.speed : 100;
            var n = o.resetN === false ? flags.n : 0;
            n = _place(flags, n, x, y, (flags.playerx - x) / k, (flags.playery - y) / k, o.size != null ? o.size : 6, o.type != null ? o.type : 1, o.advanceN !== false, o.typeid, _bulletColor(0));
            flags.n = n;
        },
        // 直线雨（一列等距弹，可带随机散布）：x = cx + x0 + j*spacing + rand(jx)，y = cy + y0 + rand(jy)
        // 第六轮：x0/spacing/y0 已由数据表按 SX/SY 换算为新战斗区坐标；jx/jy 抖动在此按 SX/SY
        // floor 换算（与旧版 rand 调用流完全一致，X'=X*SX 偏差<1px，便于逐帧核对换算一致性）
        line: function (flags, cx, cy, opts) {
            var o = opts || {};
            var count = o.count != null ? o.count : 1;
            var x0 = _val(cx, flags);
            var y0 = _val(cy, flags);
            var n = o.resetN === false ? flags.n : 0;
            for (var j = 0; j < count; j++) {
                var x = x0 + (o.x0 || 0) + j * (o.spacing || 0) + (o.jx ? Math.floor(core.rand(o.jx) * SX) : 0);
                var y = y0 + (o.y0 || 0) + (o.jy ? Math.floor(core.rand(o.jy) * SY) : 0);
                n = _place(flags, n, x, y, o.vx != null ? o.vx : 0, o.vy != null ? o.vy : 2, o.size != null ? o.size : 6, o.type != null ? o.type : 1, true, o.typeid, _bulletColor(j));
            }
            flags.n = n;
        },
        // 随机散布（参考 MT0 case 8 的 rand(16)/4 风格速度箱）：vx∈[vxMin..vxMax]、vy∈[vyMin..vyMax]，0.25 步进
        rain: function (flags, cx, cy, opts) {
            var o = opts || {};
            var count = o.count != null ? o.count : 1;
            var x = _val(cx, flags) + (o.x0 || 0);
            var y = _val(cy, flags) + (o.y0 || 0);
            var n = o.resetN === false ? flags.n : 0;
            var vxMin = o.vxMin != null ? o.vxMin : -2, vxMax = o.vxMax != null ? o.vxMax : 2;
            var vyMin = o.vyMin != null ? o.vyMin : 1, vyMax = o.vyMax != null ? o.vyMax : 3;
            var vxSteps = Math.max(1, Math.round((vxMax - vxMin) * 4 + 1));
            var vySteps = Math.max(1, Math.round((vyMax - vyMin) * 4 + 1));
            for (var j = 0; j < count; j++) {
                var vx = vxMin + core.rand(vxSteps) / 4;
                var vy = vyMin + core.rand(vySteps) / 4;
                n = _place(flags, n, x, y, vx, vy, o.size != null ? o.size : 6, o.type != null ? o.type : 1, true, o.typeid, _bulletColor(j));
            }
            flags.n = n;
        },
        // 旋转环（鳞弹旋转用）：与 ring 同构，但 angle0 随时间匀速旋转（spinSpeed 弧度/帧），形成旋转针轮；
        // 速度仍为匀速直线（speed ≤ 2 时低难度），轨迹旋转体现在每波环的朝向逐波偏移
        spin: function (flags, cx, cy, opts) {
            var o = opts || {};
            var count = o.count != null ? o.count : 6;
            var speed = o.speed != null ? o.speed : 1.2;
            var a0 = o.angle0 != null ? o.angle0 : 0;
            var spinSpeed = o.spinSpeed != null ? o.spinSpeed : 0.008;
            var x = _val(cx, flags) + (o.x0 || 0);
            var y = _val(cy, flags) + (o.y0 || 0);
            var n = o.resetN === false ? flags.n : 0;
            var aBase = a0 + flags.time * spinSpeed;
            for (var j = 0; j < count; j++) {
                var a = aBase + Math.PI * 2 * j / count;
                n = _place(flags, n, x, y, speed * Math.cos(a), speed * Math.sin(a), o.size != null ? o.size : 6, o.type != null ? o.type : 1, true, o.typeid, _bulletColor(j));
            }
            flags.n = n;
        },
        // 波浪（环弹波浪用）：一行慢速下落 + x 方向正弦摆动（每弹记录 wob 描述，移动循环按帧更新速度；纯移动，不影响判定/回放）
        wave: function (flags, cx, cy, opts) {
            var o = opts || {};
            var count = o.count != null ? o.count : 4;
            var x0 = _val(cx, flags);
            var y0 = _val(cy, flags);
            var speed = o.speed != null ? o.speed : 1;
            var amp = o.amp != null ? o.amp : 10;
            var freq = o.freq != null ? o.freq : 0.02;
            var n = o.resetN === false ? flags.n : 0;
            for (var j = 0; j < count; j++) {
                var x = x0 + (o.x0 || 0) + j * (o.spacing || 0);
                var y = y0 + (o.y0 || 0) + (o.jy ? Math.floor(core.rand(o.jy) * SY) : 0);
                var n2 = _place(flags, n, x, y, 0, speed, o.size != null ? o.size : 6, o.type != null ? o.type : 1, true, o.typeid, _bulletColor(j));
                if (n2 > n) flags.bulletwob[n2 - 1] = { ax: 0, ay: speed, amp: amp, fq: freq, ph: j * (o.phaseStep != null ? o.phaseStep : 0.5) };
                n = n2;
            }
            flags.n = n;
        },
        // 随机散射（第四十四章新增；taisei rng_dir / Danmakufu ExRumiaSpell01 rand 式）：
        // 极坐标随机——每颗弹随机方向 a = angle0 + rand*angleSpan（0=正右，屏幕 y 向下），
        // 随机速度 speed = speedMin + rand*(speedMax-speedMin)（0.01 步进，默认 1~2px/帧）；
        // 全部只用 core.rand（LCG 确定性种子，不写 route）——回放自动判胜跳过不受影响；
        // downCone（弧度，默认 0）：排除"正下方 ±downCone"圆锥角带（如 downCone=π/6 排除垂直下落 ±30°）。
        //   依据（第四十四章实测）：BOSS 固定居中（enemyx=240）时，能穿过中央列 [200,280]（弹体中心）
        //   的散射角度恰为垂直 ±~10°（|dx|≤40 / dy=223），30° 锥带完全覆盖并留余量——散射本身
        //   对中央列安全零贡献；游离到屏幕边缘的 BOSS 发射的斜向散射仍可能偶发穿过中央列
        //   （用户容错设计下可接受部分随机性），实测逐卡中央列通过数 ≤ 两侧 50% 仍满足（见第四十四章）。
        scatter: function (flags, cx, cy, opts) {
            var o = opts || {};
            var count = o.count != null ? o.count : 4;
            var x = _val(cx, flags) + (o.x0 || 0);
            var y = _val(cy, flags) + (o.y0 || 0);
            var n = o.resetN === false ? flags.n : 0;
            var speedMin = o.speedMin != null ? o.speedMin : 1;
            var speedMax = o.speedMax != null ? o.speedMax : 2;
            var angle0 = o.angle0 != null ? o.angle0 : 0;
            var span = o.angleSpan != null ? o.angleSpan : Math.PI * 2;
            var cone = o.downCone != null ? o.downCone : 0;
            var speedSteps = Math.max(1, Math.round((speedMax - speedMin) * 100) + 1);
            var spanSteps = Math.max(1, Math.round(span * 10000) + 1);
            for (var j = 0; j < count; j++) {
                var a = 0;
                // 有界重试（最多 32 次；重试次数由 core.rand 种子决定，确定性不变）
                for (var k = 0; k < 32; k++) {
                    a = angle0 + core.rand(spanSteps) / 10000;
                    if (cone <= 0) break;
                    var d = Math.abs(a - Math.PI / 2);
                    if (d > cone && d < Math.PI * 2 - cone) break;
                }
                var sp = speedMin + core.rand(speedSteps) / 100;
                n = _place(flags, n, x, y, sp * Math.cos(a), sp * Math.sin(a), o.size != null ? o.size : 6, o.type != null ? o.type : 1, true, o.typeid, _bulletColor(j));
            }
            flags.n = n;
        },
        // 扩散弹（第四十四章新增；Danmakufu ObjShot_AddShotA1 / taisei halation_orb 式）：
        // 母弹（慢速 0.6~1px/帧 直行，默认 0.8）飞行 burstDelay 帧（默认 50）后爆裂成 count 颗
        // 环形扩散子弹，速度 = speed0 * 1.09^k（k=0..count-1，Danmakufu/taisei 递增惯例，speedMax 硬钳）；
        // 母弹与子弹共用 bullet 槽位（母弹占一槽，爆裂时标记清除、子弹入槽），爆裂由 _tickBurst
        // 在 _tickCard 每帧结算（age 计数，不依赖每 300 帧回绕的 flags.time）；
        // 只依赖 flags 状态（本生成器不用随机），确定性、回放自动判胜跳过不受影响。
        burst: function (flags, cx, cy, opts) {
            var o = opts || {};
            var count = o.count != null ? o.count : 6;
            var x = _val(cx, flags) + (o.x0 || 0);
            var y = _val(cy, flags) + (o.y0 || 0);
            var n = o.resetN === false ? flags.n : 0;
            var ms = o.motherSpeed != null ? o.motherSpeed : 0.8;
            var ma = o.motherAngle != null ? o.motherAngle : Math.PI / 2;
            var n2 = _place(flags, n, x, y, ms * Math.cos(ma), ms * Math.sin(ma), o.size != null ? o.size : 6, o.type != null ? o.type : 1, true, o.motherTypeid || o.typeid, _bulletColor(0));
            if (n2 > n) {
                flags.burst = flags.burst || [];
                flags.burst.push({
                    slot: n2 - 1,
                    age: 0,
                    delay: o.burstDelay != null ? o.burstDelay : 50,
                    count: count,
                    angle0: o.angle0 != null ? o.angle0 : 0,
                    span: o.angleSpan != null ? o.angleSpan : Math.PI * 2,
                    sp0: o.speed0 != null ? o.speed0 : 1.0,
                    step: o.speedStep != null ? o.speedStep : 1.09,
                    max: o.speedMax != null ? o.speedMax : 2,
                    size: o.childSize != null ? o.childSize : 3,
                    typeid: o.typeid
                });
                n = n2;
            }
            flags.n = n;
        },
        // 螺旋连发（第四十四章新增；Danmakufu ExRumia01 双螺旋式）：每次发射角度 += spinStep
        // （如 0.35 rad/发），发射间隔 interval；发射次数由单调帧数推导（danmakuCycle*300 + flags.time，
        //   跨 300 帧回绕连续，避免每 5 秒角度跳变）；mirror:true 时同帧再发一颗反向对称弹（-a），
        //   形成双螺旋；只用 flags 与 core.rand（本生成器不用随机），确定性、回放自动判胜跳过不受影响。
        spiral: function (flags, cx, cy, opts) {
            var o = opts || {};
            var x = _val(cx, flags) + (o.x0 || 0);
            var y = _val(cy, flags) + (o.y0 || 0);
            var n = o.resetN === false ? flags.n : 0;
            var speed = o.speed != null ? o.speed : 1.2;
            var spinStep = o.spinStep != null ? o.spinStep : 0.35;
            var a0 = o.angle0 != null ? o.angle0 : 0;
            var interval = o.interval != null ? o.interval : 60;
            var offset = o.offset != null ? o.offset : 0;
            var shotsPerCycle = Math.floor((299 - offset) / interval) + 1;
            var kIn = Math.floor((flags.time - offset) / interval);
            var k = ((flags.danmakuCycle || 0) * shotsPerCycle + kIn);
            var a = a0 + k * spinStep;
            n = _place(flags, n, x, y, speed * Math.cos(a), speed * Math.sin(a), o.size != null ? o.size : 6, o.type != null ? o.type : 1, true, o.typeid, _bulletColor(k));
            if (o.mirror) {
                n = _place(flags, n, x, y, speed * Math.cos(-a), speed * Math.sin(-a), o.size != null ? o.size : 6, o.type != null ? o.type : 1, true, o.typeid, _bulletColor(k + 1));
            }
            flags.n = n;
        }
    };

    // ---------------- 第九轮（弹幕多样化）：TH08 弹型表（视觉映射） ----------------
    // 弹型 ID 只决定视觉：{img, x0, y0, stepX, sw, sh, dw, dh, offX, offY, size}
    //   img = 素材；x0/y0 = 首帧源矩形左上角；stepX = 4 帧颜色变体的列步进（官方同型 sprite 4 个横向排列）；
    //   sw/sh = 源矩形尺寸；dw/dh = 绘制尺寸；offX/offY = 绘制左上角相对判定中心 (bulletx+32, bullety+32) 的偏移；
    //   size = 对应判定档位（仅登记用，判定仍由 bulletsize 决定，公式不变）。
    // 第四十二章（弹幕素材两图整合）：素材统一指向两张帧表 bullet_small.png / bullet_big.png
    //   （永不复还式"行=弹型、列=颜色变体"网格；旧合成图 etama_yuyuko.png 与官方 etama*.png、
    //   enemybullet*.png 已归档至 project/images/_legacy_bullets/，本表矩形按新布局全部重映射）。
    //   全部帧从 etama_yuyuko.png 现有矩形直接裁贴（不许改色），44/44 逐像素一致，生成脚本 .hermes/build_bullet_sheets.py；
    //   判定/尺寸/动画机制不变，只换源矩形。
    // 旧三档默认保留：small/maru/big（未配 typeid 时按 bulletsize 兜底，见 _typeidFor）。
    // 视觉直径 ≥ 判定直径（playersize=2）：small 20≥8.5 / maru 32≥10 / big 48≥16.32 / rice 22≥10 /
    //   chu 40≥10 / scale16 24≥10 / scale32 40≥16.32 / star 24≥10 / ring 96≥10 / laser 16≥10 / chou 44≥10。
    // 新表行布局（行=弹型、列=颜色变体，每弹型 4 色横排）：
    //   bullet_small.png 128x184：small y0=0(8px，stepX=8) / maru y0=8 / rice y0=24 / chou y0=40（旧错误行，已停用）/
    //     chu y0=56(32px，stepX=32) / scale16 y0=88 / star y0=135 / chou 正确行 y0=152（第四十四章追加，
    //     32px，stepX=32；上方 y=151 为 1px 透明守卫行防 Chrome 缩放渗色）；
    //   bullet_big.png 256x599：scale32 y0=104 / big y0=151(64px，stepX=64) / ring y0=215(256px，单帧) /
    //     laser y0=471(16x128 垂直长条，单帧)。
    // 除 chou 外坐标与旧合成图逐字节一致（浏览器 drawImage 缩放采样锚定源矩形绝对坐标，见第四十二章），
    //   保证渲染逐像素一致；ring/laser 官方源仅单帧（TH08 原样，stepX=0，4 帧循环绘制同一帧，与旧行为一致）。
    this.danmaku.bulletTypes = {
        'small':   { img: 'bullet_small.png', x0: 0,  y0: 0,   stepX: 8,  sw: 8,   sh: 8,   dw: 20, dh: 20, offX: 10, offY: 10, size: 3 },
        'maru':    { img: 'bullet_small.png', x0: 0,  y0: 8,   stepX: 16, sw: 16,  sh: 16,  dw: 32, dh: 32, offX: 16, offY: 16, size: 6 },
        'big':     { img: 'bullet_big.png',   x0: 0,  y0: 151, stepX: 64, sw: 64,  sh: 64,  dw: 48, dh: 48, offX: 24, offY: 24, size: 14 },
        'rice':    { img: 'bullet_small.png', x0: 1,  y0: 24,  stepX: 16, sw: 14,  sh: 16,  dw: 22, dh: 24, offX: 11, offY: 12, size: 6 },
        // 蝶弹（第四十四章勘误）：正确素材 = 官方 etama.png y=176 行（ANM sprite 120-127，32x32 帧格 x 8 列，
        //   位于用户所述 y=128~192 区带内；y=128/160 无 sprite，是相邻 32px 行的下半部），带透明翼的蝴蝶形；
        //   旧 y=40 行（源自 etama y=80 排 15x16 抽象蝶形）已停用（该行内容保留但不再映射）。
        //   4 帧 = 紫/蓝/樱粉/白（第三十三章选色精神；新行仅 8 色，无深紫变体，白系取 col7 灰白）；
        //   垂直翻转（头朝上 → 头朝下，下落朝向玩家）；源 32x32 → 绘制 44x44（1.375x 放大仍清晰，
        //   透明翼展更大更易辨识，视觉直径 44 ≥ 判定 10，offX/offY=22 保证视觉中心=判定圆心）。
        'chou':    { img: 'bullet_small.png', x0: 0,  y0: 152, stepX: 32, sw: 32,  sh: 32,  dw: 44, dh: 44, offX: 22, offY: 22, size: 6 },
        'chu':     { img: 'bullet_small.png', x0: 0,  y0: 56,  stepX: 32, sw: 32,  sh: 32,  dw: 40, dh: 40, offX: 20, offY: 20, size: 6 },
        'scale16': { img: 'bullet_small.png', x0: 0,  y0: 88,  stepX: 16, sw: 16,  sh: 16,  dw: 24, dh: 24, offX: 12, offY: 12, size: 6 },
        'scale32': { img: 'bullet_big.png',   x0: 0,  y0: 104, stepX: 32, sw: 32,  sh: 31,  dw: 40, dh: 40, offX: 20, offY: 20, size: 14 },
        'star':    { img: 'bullet_small.png', x0: 0,  y0: 135, stepX: 16, sw: 16,  sh: 16,  dw: 24, dh: 24, offX: 12, offY: 12, size: 6 },
        'ring':    { img: 'bullet_big.png',   x0: 0,  y0: 215, stepX: 0,  sw: 256, sh: 256, dw: 96, dh: 96, offX: 48, offY: 48, size: 6 },
        'laser':   { img: 'bullet_big.png',   x0: 0,  y0: 471, stepX: 0,  sw: 16,  sh: 128, dw: 16, dh: 160, offX: 8, offY: 80, size: 6 }
    };

    // ---------------- 阶段二：符卡数据表 + 每卡时限解释器 ----------------
    // 卡片数据格式：[{ patterns: [{gen, cx, cy, opts}, ...], lowPatterns?: [...], duration? }]
    // duration = 该卡时限帧数（60 帧/秒），仅限时符配置；不配/0/负数 = 击破符（无时限，打空 enemylife 才换卡）；
    // patterns = 高血段（enemylife*2 > enemylifemax 时），
    // lowPatterns = 低血段（不配则沿用 patterns，语义与 case 7 原分支一致）。
    // opts 公共字段：interval=发射周期（帧）、offset=相位（flags.time % interval == offset 时发射）、
    //   resetN=发射前是否把空槽搜索起点 n 归零（与原手写块 n=0 语义一致；aimed 接续弹置 false）、
    //   advanceN=发射后是否推进 n（case 24 瞄准弹原块不推进，置 false）。
    // cards24（简单模式，case 24·第四十三章弹幕布局调整·扇形为主 + 第四十四章新模式）：5 张卡，每卡 3~5 个模式、扇形类 ≥2——
    // 双股下扇（fan，斜向扩散，中央列天然缝隙）/ 自机狙扇形（fan aim:true，玩家方向=缝隙，见 fan 生成器注释）/
    // 瞄准弹（aimed，保留）/ 环形（ring，保留）/ 鳞弹旋转（spin，保留）/ 蝶舞（wave chou，保留）/
    // 激光横扫（laser，保留）/ 星弹散射（rain，全局仅 1 处"边缘雨"，只打左侧、错开 BOSS 正下方列）/
    // 随机散射（scatter，第四十四章新增）/ 扩散弹（burst，第四十四章新增）/ 双螺旋（spiral，第四十四章新增）/
    // 波浪雨（wave 丸弹，第四十四章恢复：卡 2 两列弹体中心 x=140/340，正弦摆动避中央列）；
    // 垂直雨（原 line vx:0 雨幕）保持移除——用户反馈"垂直雨封锁 BOSS 正下方那列，站列里挨打、躲边上打不到"，
    // 恢复的"摇摆雨"用 wave 生成器 + 两侧列位实现同类手感但不封中央列；
    // 扇形以幽幽子位置为发射点向下展开：弹体判定中心=bulletx+32，故扇形 x0:-32 使"弹体中心"对齐 enemyx——
    // spread 取 ±0.4/±1.2（vy 1.4）时两股扇形之间的中央列（弹体中心 x∈[enemyx±40]）为天然缝隙，
    // 玩家可站 BOSS 正下方输出、小幅左右移动躲扇形（实测数据见第四十三章）。
    // 自机狙扇形（fan + aim:true）：以 atan2(玩家-发射点) 为基准角叠加 spread 角偏移（Danmakufu SampleA02 /
    //   taisei crystal_rain 式）；评估后采用"偶数向 + 对称 spread"：玩家方向落在两股之间（中间一发不正对玩家），
    //   保留自机狙追位手感且不破坏中央列安全（奇数向会让中间一发周期性直射站桩玩家，弃用，依据见第四十三章）。
    // 低难度参数（硬性）：弹速 ≤ 2px/帧、瞄准弹 ≤ 1.5px/帧当量（speed 帧数 ≥ 260）、发射间隔 ≥ 50 帧、
    // 单波连发 ≤ 5（环形/旋转环为扩散弹幕惯例的整环波次，每环 ≤ 6、旋转环 ≤ 5）；
    // 破卡机制（第三十一章·击破符为主）：卡 1~4 为击破符（不配 duration = 无时限，enemylife 打空才换卡）；
    // 卡 5 为时符（【时长平衡 2.10.56】duration 3600 帧 = 60 秒，超时自动破卡，spellcardleft==0 时超时直接胜利）。
    // 每卡血量（【时长平衡 2.10.56】新增）：卡可配 hp 字段单独设血（cards24 卡 5 时符 hp:60000——
    //   典型进度下有效 DPS ≤ 960（20 发/秒×atk80×命中率60%）时 60 秒内最多打 ~57600，打不空 → 60 秒超时兜底胜利）；
    //   未配 hp 的卡回满到 enemylifemax（32000）。
    this.danmaku.cards24 = [
        {
            // 卡 1：双股扇形（丸弹）+ 自机狙扇形（米弹）+ 瞄准弹（丸弹，极慢）；击破符（无时限，打空血才换卡）
            // 第四十六章（配色主题化）：colorOffset 0=紫系主色（4 色循环从第 0 帧开始；同波按 (j+offset)%4 交替）
            name: "亡郷「亡我郷」",
            colorOffset: 0,
            patterns: [
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 4, dirs: [{ vx: 'spread', vy: 1.4 }], x0: -32, spread0: -1.2, spreadStep: 0.8, y0: 12 * SY, size: 6, typeid: 'maru', interval: 100, offset: 10, resetN: true } },
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 4, aim: true, x0: -32, spread0: -1.35, spreadStep: 0.9, speed: 1.4, y0: 12 * SY, size: 6, typeid: 'rice', interval: 170, offset: 60, resetN: true } },
                { gen: 'aimed', cx: 'enemyx', cy: 'enemyy', opts: { speed: 260, size: 6, typeid: 'maru', interval: 320, offset: 40, resetN: false, advanceN: false } }
            ],
            lowPatterns: [
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 4, dirs: [{ vx: 'spread', vy: 1.5 }], x0: -32, spread0: -1.2, spreadStep: 0.8, y0: 12 * SY, size: 6, typeid: 'maru', interval: 95, offset: 10, resetN: true } },
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 4, aim: true, x0: -32, spread0: -1.35, spreadStep: 0.9, speed: 1.5, y0: 12 * SY, size: 6, typeid: 'rice', interval: 160, offset: 55, resetN: true } },
                { gen: 'aimed', cx: 'enemyx', cy: 'enemyy', opts: { speed: 260, size: 6, typeid: 'maru', interval: 320, offset: 40, resetN: false, advanceN: false } }
            ]
        },
        {
            // 卡 2：双股扇形（米弹）+ 自机狙扇形（星弹）+ 环形（中玉，斜 60° 双路）+ 瞄准弹（星弹）+
            // 波浪雨（第四十四章恢复：wave 丸弹，两列弹体中心 x=140/340，正弦摆动避开中央列 [200,280]）；击破符（无时限，打空血才换卡）
            // 第四十六章：colorOffset 1=樱粉系主色
            name: "亡舞「生者必滅の理」",
            colorOffset: 1,
            patterns: [
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 4, dirs: [{ vx: 'spread', vy: 1.4 }], x0: -32, spread0: -1.2, spreadStep: 0.8, y0: 12 * SY, size: 6, typeid: 'rice', interval: 110, offset: 15, resetN: true } },
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 4, aim: true, x0: -32, spread0: -1.35, spreadStep: 0.9, speed: 1.5, y0: 12 * SY, size: 6, typeid: 'star', interval: 190, offset: 75, resetN: true } },
                { gen: 'ring', cx: 'enemyx', cy: 'enemyy', opts: { count: 6, speed: 1.0, angle0: 0, angleSpan: Math.PI * 2, size: 6, typeid: 'chu', interval: 300, offset: 30, resetN: true } },
                { gen: 'aimed', cx: 'enemyx', cy: 'enemyy', opts: { speed: 280, size: 6, typeid: 'star', interval: 200, offset: 50, resetN: false, advanceN: false } },
                // 波浪雨：两列 bulletx=108/308 → 弹体中心 x=140/340；正弦摆动漂移上界 ≈ 2/sin(freq/2)×amp
                //   = 2/sin(0.025)×0.2 ≈ 16px → 扫掠 [124,156]/[324,356]，中央列 [200,280] 留 ≥44px 缝隙；
                //   速度 1，最大合速度 √(1²+0.2²)≈1.02 ≤ 2px/帧；间隔 190 ≥ 50、连发 2 ≤ 5
                { gen: 'wave', cx: 108, cy: 16, opts: { count: 2, x0: 0, spacing: 200, y0: 0, speed: 1, amp: 0.2, freq: 0.05, phaseStep: 0.6, size: 6, typeid: 'maru', interval: 190, offset: 90, resetN: true } }
            ],
            lowPatterns: [
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 4, dirs: [{ vx: 'spread', vy: 1.4 }], x0: -32, spread0: -1.2, spreadStep: 0.8, y0: 12 * SY, size: 6, typeid: 'rice', interval: 105, offset: 15, resetN: true } },
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 4, aim: true, x0: -32, spread0: -1.35, spreadStep: 0.9, speed: 1.5, y0: 12 * SY, size: 6, typeid: 'star', interval: 180, offset: 70, resetN: true } },
                { gen: 'ring', cx: 'enemyx', cy: 'enemyy', opts: { count: 6, speed: 1.0, angle0: 0, angleSpan: Math.PI * 2, size: 6, typeid: 'chu', interval: 280, offset: 30, resetN: true } },
                { gen: 'aimed', cx: 'enemyx', cy: 'enemyy', opts: { speed: 260, size: 6, typeid: 'star', interval: 190, offset: 50, resetN: false, advanceN: false } },
                { gen: 'wave', cx: 108, cy: 16, opts: { count: 2, x0: 0, spacing: 200, y0: 0, speed: 1, amp: 0.2, freq: 0.05, phaseStep: 0.6, size: 6, typeid: 'maru', interval: 180, offset: 85, resetN: true } }
            ]
        },
        {
            // 卡 3：双股扇形（中玉）+ 自机狙扇形（蝶弹）+ 瞄准弹（星弹，极慢）+ 边缘雨（星弹，全局唯一 rain，只打左侧、错开中央列）+
            // 环形（丸弹）+ 随机散射（第四十四章新增：scatter 小玉，极坐标随机方向/速度，downCone=π/6
            // 排除正下方 ±30°，保护中央列）；击破符（无时限，打空血才换卡）
            // 第四十六章：colorOffset 2=蓝白系主色
            name: "華霊「ゴーストバタフライ」",
            colorOffset: 2,
            patterns: [
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 4, dirs: [{ vx: 'spread', vy: 1.4 }], x0: -32, spread0: -1.2, spreadStep: 0.8, y0: 12 * SY, size: 6, typeid: 'chu', interval: 120, offset: 10, resetN: true } },
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 4, aim: true, x0: -32, spread0: -1.35, spreadStep: 0.9, speed: 1.3, y0: 12 * SY, size: 6, typeid: 'chou', interval: 180, offset: 70, resetN: true } },
                // 第四十七章：卡 3 补瞄准弹（自机狙>=2）；speed=280 帧 → 弹速=距离/280<=1.4px/帧、间隔 320>=50、单发 1<=5
                { gen: 'aimed', cx: 'enemyx', cy: 'enemyy', opts: { speed: 280, size: 6, typeid: 'star', interval: 320, offset: 150, resetN: false, advanceN: false } },
                // 边缘雨：发射点固定在左上侧（cx 110 / cy 16），vx 0.1~0.2、vy 1.4~1.8 → 弹体中心 x∈[158,183]，
                //   完全避开中央 [200,280]（左侧列带 + 间隙）；速度 max√(0.2²+1.8²)≈1.81 ≤ 2px/帧
                { gen: 'rain', cx: 110, cy: 16, opts: { count: 2, x0: 0, y0: 0, vxMin: 0.1, vxMax: 0.2, vyMin: 1.4, vyMax: 1.8, size: 6, typeid: 'star', interval: 160, offset: 45, resetN: true } },
                { gen: 'ring', cx: 'enemyx', cy: 'enemyy', opts: { count: 6, speed: 1.0, angle0: 0, angleSpan: Math.PI * 2, size: 6, typeid: 'maru', interval: 320, offset: 95, resetN: true } },
                // 随机散射：4 颗 1.0~1.6px/帧、全向随机但排除正下方 ±30°（downCone=π/6）；间隔 200 ≥ 50、连发 4 ≤ 5
                { gen: 'scatter', cx: 'enemyx', cy: 'enemyy', opts: { count: 4, x0: 0, y0: 12 * SY, speedMin: 1.0, speedMax: 1.6, angle0: 0, angleSpan: Math.PI * 2, downCone: Math.PI / 6, size: 6, typeid: 'small', interval: 200, offset: 130, resetN: true } }
            ]
        },
        {
            // 卡 4：双股扇形（鳞弹 16）+ 鳞弹旋转（spin，鳞弹 16）+ 自机狙扇形（鳞弹 32）+
            // 扩散弹（第四十四章新增：burst 母弹 chu 慢速直行 50 帧爆裂成 6 颗小玉，速度 1.0×1.09^k 递增）；
            // 击破符（无时限，打空血才换卡）
            // 第四十六章：colorOffset 3=白系主色（第 4 帧变体起手，卡内整体偏白亮）
            name: "幽曲「リポジトリ・オブ・ヒロイック」",
            colorOffset: 3,
            patterns: [
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 4, dirs: [{ vx: 'spread', vy: 1.4 }], x0: -32, spread0: -1.2, spreadStep: 0.8, y0: 12 * SY, size: 6, typeid: 'scale16', interval: 120, offset: 10, resetN: true } },
                { gen: 'spin', cx: 'enemyx', cy: 'enemyy', opts: { count: 5, speed: 1.2, angle0: Math.PI / 6, spinSpeed: 0.008, size: 6, typeid: 'scale16', interval: 260, offset: 60, resetN: true } },
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 4, aim: true, x0: -32, spread0: -1.35, spreadStep: 0.9, speed: 1.2, y0: 12 * SY, size: 14, typeid: 'scale32', interval: 200, offset: 100, resetN: true } },
                // 扩散弹：母弹 0.8px/帧 直行 50 帧（y≈92→132）爆裂；6 颗环形角距 60°（距正下最近 30°，
                //   从居中母弹位到 y=300 时 |dx|≥97 > 40，不穿中央列）；子弹速度 1.0/1.09/1.19/1.30/1.41/1.54 ≤ 2
                { gen: 'burst', cx: 'enemyx', cy: 'enemyy', opts: { count: 6, x0: 0, y0: 12 * SY, motherSpeed: 0.8, motherAngle: Math.PI / 2, burstDelay: 50, angle0: 0, angleSpan: Math.PI * 2, speed0: 1.0, speedStep: 1.09, speedMax: 2, size: 6, childSize: 3, typeid: 'small', motherTypeid: 'chu', interval: 260, offset: 140, resetN: true } }
            ],
            lowPatterns: [
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 4, dirs: [{ vx: 'spread', vy: 1.4 }], x0: -32, spread0: -1.2, spreadStep: 0.8, y0: 12 * SY, size: 6, typeid: 'scale16', interval: 115, offset: 10, resetN: true } },
                { gen: 'spin', cx: 'enemyx', cy: 'enemyy', opts: { count: 5, speed: 1.2, angle0: 0, spinSpeed: -0.008, size: 6, typeid: 'scale16', interval: 250, offset: 55, resetN: true } },
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 4, aim: true, x0: -32, spread0: -1.35, spreadStep: 0.9, speed: 1.3, y0: 12 * SY, size: 14, typeid: 'scale32', interval: 190, offset: 95, resetN: true } },
                { gen: 'burst', cx: 'enemyx', cy: 'enemyy', opts: { count: 6, x0: 0, y0: 12 * SY, motherSpeed: 0.8, motherAngle: Math.PI / 2, burstDelay: 50, angle0: 0, angleSpan: Math.PI * 2, speed0: 1.0, speedStep: 1.09, speedMax: 2, size: 6, childSize: 3, typeid: 'small', motherTypeid: 'chu', interval: 250, offset: 135, resetN: true } }
            ]
        },
        {
            // 卡 5：激光横扫（激光，慢速）+ 双股扇形（蝶弹）+ 自机狙扇形（鳞弹 32）+ 瞄准弹（丸弹，极慢）+ 蝶舞（wave，蝶弹，慢速摆动）+
            // 双螺旋（第四十四章新增：spiral mirror:true，米弹，每发角度 +0.35 rad，双臂对称）
            // 时符：单独血量 hp 60000（典型进度 60 秒内打不空，靠时限超时破卡）＋限时 3600 帧（60 秒，5 分钟总时长的兜底上限），
            // 超时自动破卡；spellcardleft==0 时超时直接胜利
            duration: 3600,
            hp: 60000,
            time: true, // 宣言后缀"·时符"（_tickCard 读取，纯显示；cards7 不配此字段保持原样）
            // 第四十六章：卡 5 混合配色（colorAlt 逐波起始偏移交替：wave0=0、wave1=1、...循环），
            // 配合同波 (j+offset)%4 交替，整卡多色混排、无单一主色
            colorOffset: 0,
            colorAlt: true,
            name: "死蝶「華胥の永眠」",
            patterns: [
                { gen: 'line', cx: -16, cy: 240, opts: { count: 1, x0: 0, spacing: 0, y0: 0, vx: 1.2, vy: 0, size: 6, typeid: 'laser', interval: 220, offset: 15, resetN: true } },
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 4, dirs: [{ vx: 'spread', vy: 1.4 }], x0: -32, spread0: -1.2, spreadStep: 0.8, y0: 12 * SY, size: 6, typeid: 'chou', interval: 110, offset: 25, resetN: true } },
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 4, aim: true, x0: -32, spread0: -1.35, spreadStep: 0.9, speed: 1.2, y0: 12 * SY, size: 14, typeid: 'scale32', interval: 210, offset: 70, resetN: true } },
                // 第四十七章：卡 5 补瞄准弹（自机狙>=2）；speed=300 帧 → 弹速=距离/300<=1.3px/帧、间隔 340>=50、单发 1<=5
                { gen: 'aimed', cx: 'enemyx', cy: 'enemyy', opts: { speed: 300, size: 6, typeid: 'maru', interval: 340, offset: 155, resetN: false, advanceN: false } },
                // 蝶舞：三列弹体中心 x=52/177/302（列距 125，避开中央 [200,280]）；正弦摆动位置漂移上界
                //   ≈ 2/sin(freq/2)×amp（300 帧时间回绕会切成两段正弦和）——实测 freq 0.015+amp 1.0 摆幅 ±133px、
                //   amp 0.35 仍达 ±25px 会穿中央带，故取 freq 0.05 + amp 0.2 → 漂移上界 ≈16px，
                //   中心列摆幅 [161,193]、右列 [286,318] 均避开中央带；速度 1，最大合速度 √(1²+0.2²)≈1.02 ≤ 2px/帧
                { gen: 'wave', cx: 20, cy: 16, opts: { count: 3, x0: 0, spacing: 125, y0: 0, speed: 1, amp: 0.2, freq: 0.05, phaseStep: 0.6, size: 6, typeid: 'chou', interval: 230, offset: 120, resetN: true } },
                // 双螺旋：每发角度 += 0.35 rad（跨 300 帧回绕由 danmakuCycle 连续），mirror 反向对称双臂；
                //   速度 1.2 ≤ 2、间隔 90 ≥ 50、单发 2 ≤ 5；双臂扫过正下方时每次仅 1 颗短暂穿中央列，
                //   实测逐卡中央列通过数仍 ≤ 两侧 50%（见第四十四章）
                { gen: 'spiral', cx: 'enemyx', cy: 'enemyy', opts: { x0: 0, y0: 12 * SY, speed: 1.2, spinStep: 0.35, angle0: -1.1, mirror: true, interval: 90, offset: 30, resetN: true, size: 6, typeid: 'rice' } }
            ]
        }
    ];

    // cards7（困难模式，case 7）：原 case 7 全部弹幕段逐段等价搬入（spellcardleft 8~0 共 9 个阶段：
    // 8 张符卡 + 破完卡后的最终阶段；各段参数与原手写块逐字节一致，含 n 接续搜索）；
    // 高血段用 patterns、低血段用 lowPatterns（enemylife*2 > enemylifemax 判定，与原分支语义一致）；每卡时限 1500 帧（25 秒）。
    this.danmaku.cards7 = [
        {
            // spellcardleft 8：高血=垂直雨 4 连（192-j*32，size6）；低血=(2-j) 扇形 5 连（size14）
            duration: 1500,
            name: "亡郷「亡我郷 -遼東-」",
            patterns: [
                { gen: 'line', cx: 192 * SX, cy: 'enemyy', opts: { count: 4, spacing: -32 * SX, jx: 32, jy: 24, vx: 0, vy: 2, size: 6, type: 1, interval: 50, offset: 10, resetN: true } }
            ],
            lowPatterns: [
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 5, dirs: [{ vx: 'spread', vy: 2 }], spread0: 2, spreadStep: -1, y0: 12 * SY, size: 14, type: 1, interval: 50, offset: 10, resetN: true } }
            ]
        },
        {
            // spellcardleft 7：高血=垂直雨 4 连；低血=垂直雨 4 连 + 瞄准弹 /100（同帧接续，aimed 不归零 n）
            duration: 1500,
            name: "亡舞「生者必滅の理」",
            patterns: [
                { gen: 'line', cx: 192 * SX, cy: 'enemyy', opts: { count: 4, spacing: -32 * SX, jx: 32, jy: 24, vx: 0, vy: 2, size: 6, type: 1, interval: 50, offset: 10, resetN: true } }
            ],
            lowPatterns: [
                { gen: 'line', cx: 192 * SX, cy: 'enemyy', opts: { count: 4, spacing: -32 * SX, jx: 32, jy: 24, vx: 0, vy: 2, size: 6, type: 1, interval: 50, offset: 10, resetN: true } },
                { gen: 'aimed', cx: 'enemyx', cy: 'enemyy', opts: { speed: 100, size: 14, type: 1, interval: 50, offset: 10, resetN: false } }
            ]
        },
        {
            // spellcardleft 6：高血=大弹 4 连（192-j*64，size14）；低血=大弹 4 连 + 瞄准弹 /100
            duration: 1500,
            name: "華霊「ゴーストバタフライ」",
            patterns: [
                { gen: 'line', cx: 192 * SX, cy: 'enemyy', opts: { count: 4, spacing: -64 * SX, jx: 32, jy: 24, vx: 0, vy: 2, size: 14, type: 1, interval: 50, offset: 10, resetN: true } }
            ],
            lowPatterns: [
                { gen: 'line', cx: 192 * SX, cy: 'enemyy', opts: { count: 4, spacing: -64 * SX, jx: 32, jy: 24, vx: 0, vy: 2, size: 14, type: 1, interval: 50, offset: 10, resetN: true } },
                { gen: 'aimed', cx: 'enemyx', cy: 'enemyy', opts: { speed: 100, size: 14, type: 1, interval: 50, offset: 10, resetN: false } }
            ]
        },
        {
            // spellcardleft 5：高血=大弹 4 连；低血=(2-j) 扇形 5 连
            duration: 1500,
            name: "幽曲「リポジトリ・オブ・ヒロイック」",
            patterns: [
                { gen: 'line', cx: 192 * SX, cy: 'enemyy', opts: { count: 4, spacing: -64 * SX, jx: 32, jy: 24, vx: 0, vy: 2, size: 14, type: 1, interval: 50, offset: 10, resetN: true } }
            ],
            lowPatterns: [
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 5, dirs: [{ vx: 'spread', vy: 2 }], spread0: 2, spreadStep: -1, y0: 12 * SY, size: 14, type: 1, interval: 50, offset: 10, resetN: true } }
            ]
        },
        {
            // spellcardleft 4：高血=大弹 4 连；低血=9 连四向扇形 (j-4)/2（%50==40）+ 瞄准弹 /100（%50==10）
            duration: 1500,
            name: "反魂「蝶の羽風生に還す」",
            patterns: [
                { gen: 'line', cx: 192 * SX, cy: 'enemyy', opts: { count: 4, spacing: -64 * SX, jx: 32, jy: 24, vx: 0, vy: 2, size: 14, type: 1, interval: 50, offset: 10, resetN: true } }
            ],
            lowPatterns: [
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 9, dirs: [{ vx: 'spread', vy: 2 }, { vx: 'spread', vy: -2 }, { vx: 3, vy: 'spread' }, { vx: -3, vy: 'spread' }], spread0: -2, spreadStep: 0.5, size: 3, type: 1, interval: 50, offset: 40, resetN: true } },
                { gen: 'aimed', cx: 'enemyx', cy: 'enemyy', opts: { speed: 100, size: 14, type: 1, interval: 50, offset: 10, resetN: false } }
            ]
        },
        {
            // spellcardleft 3：高血=大弹 4 连；低血=5 连四向扇形 (j*2-4)*3/4
            duration: 1500,
            name: "幽雅「死出の鐚」",
            patterns: [
                { gen: 'line', cx: 192 * SX, cy: 'enemyy', opts: { count: 4, spacing: -64 * SX, jx: 32, jy: 24, vx: 0, vy: 2, size: 14, type: 1, interval: 50, offset: 10, resetN: true } }
            ],
            lowPatterns: [
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 5, dirs: [{ vx: 'spread', vy: 2 }, { vx: 'spread', vy: -2 }, { vx: 3, vy: 'spread' }, { vx: -3, vy: 'spread' }], spread0: -3, spreadStep: 1.5, size: 3, type: 1, interval: 50, offset: 10, resetN: true } }
            ]
        },
        {
            // spellcardleft 2：高血=大弹 4 连；低血=旋转扫射 /15-2（time%8==0）
            duration: 1500,
            name: "彼岸「四丁目迷いの道」",
            patterns: [
                { gen: 'line', cx: 192 * SX, cy: 'enemyy', opts: { count: 4, spacing: -64 * SX, jx: 32, jy: 24, vx: 0, vy: 2, size: 14, type: 1, interval: 50, offset: 10, resetN: true } }
            ],
            lowPatterns: [
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 1, dirs: [{ vx: 'spread', vy: 2 }, { vx: '-spread', vy: -2 }, { vx: 3, vy: '-spread' }, { vx: -3, vy: 'spread' }], spreadTimeDiv: 15, spreadTimeBase: 2, size: 6, type: 1, interval: 8, offset: 0, resetN: true } }
            ]
        },
        {
            // spellcardleft 1：高血=大弹 4 连；低血=旋转扫射 /15-2 + 瞄准弹 /100
            duration: 1500,
            name: "桜符「完全なる桜開花」",
            patterns: [
                { gen: 'line', cx: 192 * SX, cy: 'enemyy', opts: { count: 4, spacing: -64 * SX, jx: 32, jy: 24, vx: 0, vy: 2, size: 14, type: 1, interval: 50, offset: 10, resetN: true } }
            ],
            lowPatterns: [
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 1, dirs: [{ vx: 'spread', vy: 2 }, { vx: '-spread', vy: -2 }, { vx: 3, vy: '-spread' }, { vx: -3, vy: 'spread' }], spreadTimeDiv: 15, spreadTimeBase: 2, size: 6, type: 1, interval: 8, offset: 0, resetN: true } },
                { gen: 'aimed', cx: 'enemyx', cy: 'enemyy', opts: { speed: 100, size: 14, type: 1, interval: 50, offset: 10, resetN: false } }
            ]
        },
        {
            // spellcardleft 0（破完卡后的最终阶段）：高血=大弹 4 连；低血=%100==90 的 9 连扇形 (j-4)/2
            duration: 1500,
            name: "死蝶「華胥の永眠」",
            patterns: [
                { gen: 'line', cx: 192 * SX, cy: 'enemyy', opts: { count: 4, spacing: -64 * SX, jx: 32, jy: 24, vx: 0, vy: 2, size: 14, type: 1, interval: 50, offset: 10, resetN: true } }
            ],
            lowPatterns: [
                { gen: 'fan', cx: 'enemyx', cy: 'enemyy', opts: { count: 9, dirs: [{ vx: 'spread', vy: 2 }, { vx: 'spread', vy: -2 }, { vx: 3, vy: 'spread' }, { vx: -3, vy: 'spread' }], spread0: -2, spreadStep: 0.5, size: 3, type: 1, interval: 100, offset: 90, resetN: true } }
            ]
        }
    ];

    // 取当前卡（cards24：数组顺序=战斗顺序，index = length - spellcardleft；
    // cards7：数组顺序=战斗顺序（spellcardleft 8..0），index = length - 1 - spellcardleft；无卡（如回放自动判胜帧）返回 null）
    this.danmaku._currentCard = function (flags) {
        var table = flags.enemyId == 24 ? _self.danmaku.cards24 : (flags.enemyId == 7 ? _self.danmaku.cards7 : null);
        if (!table) return null;
        var idx = flags.enemyId == 7 ? table.length - 1 - flags.spellcardleft : table.length - flags.spellcardleft;
        if (idx < 0 || idx >= table.length) return null;
        return table[idx];
    };

    // 【时长平衡 2.10.56】破卡回满：按"下一张卡"的血量回满（卡配 hp 字段用卡内 hp，未配回 enemylifemax），
    // 同时同步 enemylifemax（血条满格 + 高/低血段阈值按当前卡血量计算）；cards7 未配 hp → 行为与旧版一致。
    // 注意调用时机：必须在 spellcardleft 已减一（指向下一张卡）之后调用。
    this.danmaku._refillCard = function (flags) {
        var card = _self.danmaku._currentCard(flags);
        var hp = null;
        // 【2.10.57 动态HP】幽幽子（enemyId 24）进战实时计算的每卡血量覆盖表优先（flags.cardHpOverride，
        // 由 danmaku.start 写入，见上）：覆盖 cards24 静态 hp 字段（静态表保留作设计基线）；
        // cards7 / 无 dynamicHp 时无该字段 → 走旧逻辑（卡内 hp 或 enemylifemax），行为与旧版一致
        if (flags.enemyId == 24 && flags.cardHpOverride) {
            var _idx = flags.cardHpOverride.length - flags.spellcardleft;
            if (_idx >= 0 && _idx < flags.cardHpOverride.length) hp = flags.cardHpOverride[_idx];
        }
        if (hp == null) hp = (card && card.hp) || flags.enemylifemax;
        flags.enemylife = hp;
        flags.enemylifemax = hp;
        // 第四十六章（配色主题化）：破卡换卡同步卡级 colorOffset（cards24 专用：卡 1~4 固定
        // 0/1/2/3、卡 5 colorAlt 逐波交替）；cards7 不写 colorWaveOff → 生成器不配色，弹色不变
        if (flags.enemyId == 24) {
            flags.colorOffset = (card && card.colorOffset != null)
                ? (((card.colorOffset % 4) + 4) % 4) : 0;
            flags.colorWave = 0;
            flags.colorWaveOff = flags.colorOffset;
        }
    };

    // 每帧解释器：查表（按 spellcardleft 选卡 + 高血/低血段）+ 按 timer 条件生成 + 生成器调用；
    // 同时结算每卡时限：仅 duration>0 的卡（时符）计时破卡——cardTimer 到 duration 自动破卡
    // （spellcardleft-1、enemylife 回满、timer 归零、破卡提示）；duration 缺失/<=0 的卡为击破符
    // （无时限，只由 parallelDo 伤害路径 enemylife<=0 破卡，cardTimer 继续推进仅作节奏/空窗计数）；
    // spellcardleft==0 时超时直接胜利（置 enemylife=0，走 parallelDo 现有胜利分支回城）。
    this.danmaku._tickCard = function (flags) {
        if (flags.enemyId != 24 && flags.enemyId != 7) return;
        var card = _self.danmaku._currentCard(flags);
        if (!card) return;
        // 第四十四章：单调帧计数（flags.time 每 300 帧回绕；_tickCard 每帧调用，检测回绕递增
        // danmakuCycle → spiral 螺旋角度跨周期连续，避免每 5 秒角度跳变；只依赖 flags，确定性/回放安全）
        if (flags.lastTick == null) flags.lastTick = flags.time;
        if (flags.time < flags.lastTick) flags.danmakuCycle = (flags.danmakuCycle || 0) + 1;
        flags.lastTick = flags.time;
        // 扩散弹爆裂结算（在生成之前跑：母弹 age/爆裂与同帧新生成确定性排序）
        _self.danmaku._tickBurst(flags);
        // 符卡宣言（音效）：卡索引变化且仍有卡时响一次（战斗首帧 lastCardIdx=-1 → 卡 1 即响；高血→低血段切换不算新卡不响）
        // 击破符/时符区分：时符（time:true）卡名后缀"·时符"，击破符不加（纯显示）
        var _cardTable = flags.enemyId == 24 ? _self.danmaku.cards24 : _self.danmaku.cards7;
        var _cardIdx = flags.enemyId == 7 ? _cardTable.length - 1 - flags.spellcardleft : _cardTable.length - flags.spellcardleft;
        if (_cardIdx !== flags.lastCardIdx && flags.spellcardleft > 0) {
            _self.danmaku._sfx('danmaku_declare');
            flags.cardNameFx = { text: (card.name || '') + (card.time ? '·时符' : ''), life: 90 };
            flags.lastCardIdx = _cardIdx;
        }
        flags.cardTimer = (flags.cardTimer || 0) + 1;
        // 击破符（duration 缺失/<=0）不进入超时破卡判定；只有时符（duration>0）才计时破卡
        if (card.duration > 0 && flags.cardTimer >= card.duration) {
            // 时符超时破卡：符卡数减一、敌血回满（按下一张卡血量，见 _refillCard）、计时归零、破卡提示
            flags.spellcardleft -= 1;
            _self.danmaku._sfx('danmaku_cardget');
            _self.danmaku._refillCard(flags);
            flags.cardTimer = 0;
            flags.cardBreakFx = { life: 20 }; // 破卡提示（符卡击破，短暂淡出）
            flags.breakFlash = 5;
            // 第五轮（弹幕节奏）：超时破卡同样清屏（敌弹全清+擦弹标记复位，自机弹保留）+ 回高血段
            for (var i = 0; i < 100; i++) { flags.bullet[i] = 0; flags.grazed[i] = 0; }
            flags.highPhase = 1;
            flags.ceaseFx = null;
            // 已无下一张卡（最后一卡/最终阶段超时）→ 直接胜利：
            // 置 spellcardleft=0 + enemylife=0，走 parallelDo 现有胜利分支（enemylife<=0 且 spellcardleft==0）回城
            if (_self.danmaku._currentCard(flags)) return;
            flags.spellcardleft = 0;
            flags.enemylife = 0;
            return;
        }
        // 第五轮（弹幕节奏）：低血段切换检测——本卡有 lowPatterns 且首次进入低血段时停火 45 帧 + 提示（仅触发一次，破卡回血复位）
        if (flags.ceaseFx && flags.ceaseFx.life > 0) flags.ceaseFx.life -= 1;
        if (card.lowPatterns && flags.highPhase && flags.enemylife * 2 <= flags.enemylifemax) {
            flags.highPhase = 0;
            flags.ceaseFx = { life: 45 };
        }
        // 高血/低血段选择（与 case 7 原分支语义一致）
        var list = (flags.enemylife * 2 > flags.enemylifemax) ? card.patterns : (card.lowPatterns || card.patterns);
        // 第五轮（弹幕节奏）：每卡开始 30 帧空窗（cardTimer<30 不生成）；低血段停火（ceaseFx>0 不生成）
        if (flags.cardTimer >= 30 && !(flags.ceaseFx && flags.ceaseFx.life > 0)) {
            flags.n = 0;
            for (var p = 0; p < list.length; p++) {
                var pat = list[p];
                var o = pat.opts || {};
                if (flags.time % o.interval == o.offset) {
                    var gen = _self.danmaku.spawn[pat.gen];
                    if (gen) {
                        // 第四十六章（配色主题化）：每波起始色偏移——卡 1~4 固定（colorOffset），
                        // 卡 5（colorAlt）逐波 +1 交替（wave0=offset、wave1=offset+1、...），
                        // 形成整卡混合配色；只写 flags.colorWaveOff/colorWave，回放安全
                        // 仅 cards24 启用（cards7 保持 colorWaveOff=undefined → 生成器不配色，case 7 弹色不变）
                        if (flags.enemyId == 24) {
                            var _cBase = ((flags.colorOffset || 0) + (card.colorAlt ? (flags.colorWave || 0) : 0)) % 4;
                            flags.colorWaveOff = _cBase;
                            if (card.colorAlt) flags.colorWave = ((flags.colorWave || 0) + 1) % 4;
                        }
                        // 音效调整：敌方弹幕释放音（每波一次，不是每颗弹；复用 danmaku_shot 素材，自机射击音已移除）
                        _self.danmaku._sfx('danmaku_shot');
                        gen(flags, pat.cx, pat.cy, o);
                    }
                }
            }
        }
    };

    // 扩散弹每帧结算：age 累计，到 burstDelay 爆裂（母弹标记清除、子弹环形入槽）；
    // 母弹被命中/越界清除时（bullet[slot]!=1）同步移除登记，不产生子弹；
    // 子弹入槽沿用 _place 空槽搜索（与 ring 同构）；只依赖 flags，确定性、回放自动判胜跳过不受影响。
    this.danmaku._tickBurst = function (flags) {
        var list = flags.burst;
        if (!list || list.length === 0) return;
        for (var b = list.length - 1; b >= 0; b--) {
            var e = list[b];
            if (flags.bullet[e.slot] != 1) { list.splice(b, 1); continue; }
            e.age += 1;
            if (e.age < e.delay) continue;
            var bx = flags.bulletx[e.slot] + 32; // 母弹判定中心
            var by = flags.bullety[e.slot] + 32;
            flags.bullet[e.slot] = 0; // 母弹标记清除（槽位可复用）
            flags.grazed[e.slot] = 0;
            list.splice(b, 1);
            var n = 0;
            for (var j = 0; j < e.count; j++) {
                var a = e.angle0 + e.span * j / e.count;
                var sp = Math.min(e.max, e.sp0 * Math.pow(e.step, j));
                n = _place(flags, n, bx - 32, by - 32, sp * Math.cos(a), sp * Math.sin(a), e.size, 1, true, e.typeid, _bulletColor(j));
            }
            flags.n = n;
        }
    };

    // ---------------- 胜利（由 danmaku 地板 parallelDo 的回城 changeFloor 完成后回调） ----------------
    this.danmaku._afterWin = function () {
        _self._unregisterMove();
        core.setHeroOpacity(1);
        var cfg = _self._cfg;
        _self._cfg = null;
        flags.bulletscreen = 0;
        flags.auraFx = null;
        // 胜利已回 flags.pfloor：显式恢复楼层 BGM（lastBgmKey 防重放可能拦截 bgmTick 自动恢复）
        _self._restoreFloorBgm(flags.pfloor);
        if (cfg && cfg.onWin) {
            try {
                cfg.onWin();
            } catch (e) {
                console.error('【弹幕战】onWin:', e);
            }
        }
    };

    // ---------------- 失败（由 parallelDo 致死分支调用） ----------------
    this.danmaku._onLose = function () {
        _self._unregisterMove();
        core.setHeroOpacity(1);
        flags.bulletscreen = 0;
        flags.auraFx = null;
        // 失败：恢复进入弹幕战前的楼层 BGM（避免战斗 BGM 残留到失败结算）
        _self._restoreFloorBgm(flags.pfloor);
        _self._cfg = null;
    };

    // ---------------- 立即结束（外部兜底） ----------------
    this.danmaku.stop = function () {
        _self._unregisterMove();
        core.setHeroOpacity(1);
        flags.bulletscreen = 0;
        flags.auraFx = null;
        // 外部立即结束：同样恢复进入弹幕战前的楼层 BGM
        _self._restoreFloorBgm(flags.pfloor);
        _self._cfg = null;
    };

    // ---------------- 移动控制（键盘方向键 + 触摸拖动，战斗开始注册、结束注销） ----------------
    // 第四十五章：操作改造——电脑端仅键盘方向键（鼠标 1:1 跟手无物理限制视为“外挂”，禁用拖动）；
    // 手机端保留触摸拖动（触摸受屏幕/拇指限制，差距可接受，手机玩家最自然手势）。
    // 引擎把 touch/mouse 统一走 core.actions（main.js 的 onmousedown/onmousemove 与
    // ontouchstart/ontouchmove 均触发同一条 ondown/onmove/onup 链路），因此 main.js 在分发时
    // 于 core.dom.data 打标 __danmakuPointerType（'mouse'/'touch'，等价于 pointer 事件类型），
    // 本插件按指针类型分流：mouse → 忽略（不进入拖拽）；touch → 1:1 跟手拖拽（触屏笔记本
    // 触摸可拖、鼠标不可拖；无触摸桌面永不触发 touch，天然只走键盘）。
    // 拖动 1:1 跟手（位移 = 手指位移，越界钳制到战斗区域），点按不改变位置，
    // 触摸拖动 + 自动射击 = 完整玩法，无需额外按键。
    this._registerMove = function () {
        if (flags.insertmove == 1) return;
        flags.insertmove = 1;
        flags.danmakuDown = 0;
        flags.danmakuPx1 = 0;
        flags.danmakuPy1 = 0;
        // 注意：键盘必须注册在 onkeyDown 级别并消费方向键（返回 true 截断 _sys_onkeyDown）。
        // 否则方向键会走 pressKey -> moveHero 的格子移动并被记入录像路线（move:/input:），
        // 而回放期间弹幕战是自动胜利跳过的，多余路线项会导致录像错位。
        // 【2.10.65 任务一】键盘按住持续移动（修复用户反馈"方向键按住 动→停→动"卡顿）：
        // 旧实现只在 keydown 事件里移动一次，按住时依赖 OS 按键重复（有初始 delay），产生停顿。
        // 新实现：keydown 置方向标志 flags.danmakuKey.{left/right/up/down} 并【首次按下立即移动一次】
        // （零延迟响应）；OS 重复 keydown 因标志已置 1 不再重复移动；持续移动由 danmaku 地板
        // parallelDo 每帧按标志推进 flags.ispeed=3px/帧（第四十七章：由 5px 降为 3px，更好躲弹；
        // 无 OS 重复 delay、无停顿帧）。斜向不归一化（左+上 = 两轴各 3px，与第四十五/四十六章一致）；
        // keyup 清标志即停。
        // 只写 flags、不写 route，回放安全；触摸拖拽 1:1 逻辑不受影响。
        core.registerAction('onkeyDown', 'danmaku_move_control', function (e) {
            var keycode = e.keyCode || e.which;
            if (keycode < 37 || keycode > 40) return false;
            var k = flags.danmakuKey || (flags.danmakuKey = { left: 0, right: 0, up: 0, down: 0 });
            var dirs = { 37: 'left', 38: 'up', 39: 'right', 40: 'down' };
            var d = dirs[keycode];
            if (k[d] != 1) {
                k[d] = 1;
                if (d == 'left' && flags.playerx > MOVE_MIN) flags.playerx -= flags.ispeed;
                if (d == 'up' && flags.playery > MOVE_MIN_Y) flags.playery -= flags.ispeed;
                if (d == 'right' && flags.playerx < MOVE_MAX_X) flags.playerx += flags.ispeed;
                if (d == 'down' && flags.playery < MOVE_MAX_Y) flags.playery += flags.ispeed;
            }
            return true;
        }, 100);
        core.registerAction('onkeyUp', 'danmaku_move_control', function (e) {
            var keycode = e.keyCode || e.which;
            if (keycode < 37 || keycode > 40) return false;
            var k = flags.danmakuKey;
            if (k) {
                if (keycode == 37) k.left = 0;
                if (keycode == 38) k.up = 0;
                if (keycode == 39) k.right = 0;
                if (keycode == 40) k.down = 0;
            }
            return true;
        }, 100);
        // 触摸拖动：ondown 记按下点（鼠标事件忽略），onmove 按位移移动自机，onup 释放。
        // 战斗期间消费三类事件（返回 true），防止松开手指时 _sys_onup 触发寻路，
        // 把隐藏的格子英雄移走并污染录像路线。
        core.registerAction('ondown', 'danmaku_touch_control', function (x, y, px, py) {
            if (!flags.bulletscreen) return false;
            // 鼠标按下不进入拖拽（电脑端只允许方向键）；仍消费事件，防止 _sys_ondown 触发寻路
            if (core.dom.data.__danmakuPointerType == 'mouse') return true;
            flags.danmakuDown = 1;
            flags.danmakuPx1 = px;
            flags.danmakuPy1 = py;
            return true;
        }, 100);
        core.registerAction('onmove', 'danmaku_touch_control', function (x, y, px, py) {
            if (!flags.bulletscreen) return false;
            // 鼠标移动不拖动（含触摸拖拽期间的鼠标输入），只处理触摸
            if (core.dom.data.__danmakuPointerType == 'mouse') return true;
            if (flags.danmakuDown == 1) {
                // 1:1 跟手：位移 = 本次指针位移（逻辑画布坐标），越界钳制到战斗区域
                var nx = flags.playerx + (px - flags.danmakuPx1);
                var ny = flags.playery + (py - flags.danmakuPy1);
                if (nx < MOVE_MIN) nx = MOVE_MIN;
                else if (nx > MOVE_MAX_X) nx = MOVE_MAX_X;
                if (ny < MOVE_MIN_Y) ny = MOVE_MIN_Y;
                else if (ny > MOVE_MAX_Y) ny = MOVE_MAX_Y;
                // 锚点只推进实际生效位移，越界部分不累计（拖出边界后往回拖能立刻跟回）
                flags.danmakuPx1 += nx - flags.playerx;
                flags.danmakuPy1 += ny - flags.playery;
                flags.playerx = nx;
                flags.playery = ny;
            }
            return true;
        }, 100);
        // 触摸/鼠标抬起都释放拖拽状态（恢复现场，防止残留 danmakuDown）
        core.registerAction('onup', 'danmaku_touch_control', function (x, y, px, py) {
            if (!flags.bulletscreen) return false;
            flags.danmakuDown = 0;
            return true;
        }, 100);
    };
    this._unregisterMove = function () {
        core.unregisterAction('ondown', 'danmaku_touch_control');
        core.unregisterAction('onmove', 'danmaku_touch_control');
        core.unregisterAction('onup', 'danmaku_touch_control');
        core.unregisterAction('keyDown', 'danmaku_move_control');
        core.unregisterAction('onkeyDown', 'danmaku_move_control');
        core.unregisterAction('onkeyUp', 'danmaku_move_control');
        flags.insertmove = 0;
    };
};

_danmakuPluginFn();
