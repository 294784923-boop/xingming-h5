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
						core.ui.drawStatusBar();
					};

		}
			// 【东方星冥线】符卡系统 — 妖梦3张符卡
			core.setFlag('sc_1_avail', true); core.setFlag('sc_2_avail', true); core.setFlag('sc_3_avail', true);
			core.setFlag('sc_meizhan_active', false); core.setFlag('sc_meizhan_turns', 0);
			core._SC_FULL = ['瞑斩「楼观赋予我能斩断弹幕的心之眼」','断迷剑「迷津慈航斩」','魂符「二重的苦轮」'];
			// 瞑斩回合递减
			var __sc_ab = core.events.afterBattle;
			core.events.afterBattle = function(enemy, x, y, callback) {
				if (core.getFlag('sc_meizhan_active', false)) { var tr = core.getFlag('sc_meizhan_turns',0)-1; if (tr<=0) { core.setFlag('sc_meizhan_active',false); core.setFlag('sc_meizhan_turns',0); core.drawTip('瞑斩效果结束'); } else { core.setFlag('sc_meizhan_turns',tr); } }
				if (__sc_ab) __sc_ab.call(this, enemy, x, y, callback);
				core.ui.drawStatusBar();
			};
			// 符卡总入口
			core.useSpellCard = function(idx) { if (!core.isPlaying()||(core.status.event&&core.status.event.id)) return; if (!core.getFlag('sc_'+idx+'_avail',false)) { core.drawTip('该符卡已使用'); return; } if (idx===1) core._sc1(); else if (idx===2) core._sc2(); else if (idx===3) core._sc3(); };
			// 瞑斩: 攻击+1持续6回合
			core._sc1 = function() { var _sc=this; core._showSkillImage('youmuskill1.png', function(){ core.playSound('zone'); core.setFlag('sc_1_avail',false); core.setFlag('sc_meizhan_active',true); core.setFlag('sc_meizhan_turns',6); core.playBattleAnim(12,{fps:12}); core.updateDamage(); core.drawTip(core._SC_FULL[0]); core.ui.drawStatusBar(); }); };
			// 断迷剑: 斩断面前一堵墙
			core._sc2 = function() { var h=core.status.hero; if(!h)return; var d=h.loc&&h.loc.direction,dx=0,dy=0; if(d==='up')dy=-1;else if(d==='down')dy=1;else if(d==='left')dx=-1;else if(d==='right')dx=1; var tx=h.loc.x+dx,ty=h.loc.y+dy; var block=core.getBlock(tx,ty); if(!block||!block.event||!block.event.noPass||block.event.cls!=='tileset'){core.drawTip('必须面对一堵墙方能使用');return;} core._showSkillImage('youmuskill2.png', function(){ core.playSound('pickaxe'); core.setFlag('sc_2_avail',false); core.setBlock(0,tx,ty); core.playBattleAnim(5,{tx:tx,ty:ty,fps:12}); core.drawTip(core._SC_FULL[1]); core.ui.drawStatusBar(); }); };
			// 魂符: 镜像+传送
			core._sc3 = function() { var h=core.status.hero; if(!h)return; var toX=core.bigmap.width-1-h.loc.x,toY=core.bigmap.height-1-h.loc.y; if(toX<0||toX>=core.bigmap.width||toY<0||toY>=core.bigmap.height){core.drawTip('无法位移至该位置');return;} var blk=core.getBlock(toX,toY); if(blk&&blk.event&&blk.event.noPass){core.drawTip('无法位移至该位置');return;} core._showSkillImage('youmuskill3.png', function(){ core.playSound('centerFly'); core.setFlag('sc_3_avail',false); core.clearMap('hero'); core.setHeroLoc('x',toX); core.setHeroLoc('y',toY); core.drawHero(); core.playBattleAnim(6,{fps:12}); core.drawTip(core._SC_FULL[2]); core.ui.drawStatusBar(); }); };
		// 【星冥线】技能插图：画面中央显示，1.5秒后消失
			core._showSkillImage = function(imgName, onDone) {
				var gd = core.dom && core.dom.gameDraw; if (!gd) return;
				var imgs = core.material && core.material.images && core.material.images.images; if (!imgs) return;
				var img = imgs[imgName]; if (!img) return;
				var SIZE = 416;
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
				var gdW = gd.getBoundingClientRect().width;
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
				function tick(now) {
					if (done) return;
					if (now - lastTime >= frameInterval) {
						ctx.clearRect(0, 0, drawW, drawH);
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
				var frameIdx = 0, lastTime = performance.now(), done = false;
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
		var hudCv = null, hudCtx = null, btnCv = null, btnCtx = null, lastHp = null, scClickCv = null;
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
			// 【星冥线】楼层副标题 + 能量条 → 右下角
			var emax = core.getFlag('g_energy_max', 0);
			if (inTower && emax > 0) {
				var remain = Math.max(0, emax - core.getFlag('g_energy_used', 0));
				pill(c, PX - 124, PY - 30, 116, 16, remain + '/' + emax, 'rgb(150,140,255)', remain / emax);
			}
			if (inTower) {
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

var transitionTime = 120; // 磁吸动画时长（毫秒）
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

// 磁吸动画：道具飞到英雄位置
function animationItem(id, sx, sy) {
    _getAnimate();
    _ensureAnimTicker();

    var px = sx * 32 - (core.bigmap && core.bigmap.offsetX ? core.bigmap.offsetX : 0);
    var py = sy * 32 - (core.bigmap && core.bigmap.offsetY ? core.bigmap.offsetY : 0);

    var t = new Transition();
    t.mode(hyper('sin', 'out'))
        .time(transitionTime)
        .absolute()
        .transition('x', px)
        .transition('y', py);

    var hx = core.status.hero.loc.x;
    var hy = core.status.hero.loc.y;
    t.value.x = hx * 32 - (core.bigmap && core.bigmap.offsetX ? core.bigmap.offsetX : 0);
    t.value.y = hy * 32 - (core.bigmap && core.bigmap.offsetY ? core.bigmap.offsetY : 0);
    t._acEndLoc = { x: hx, y: hy };

    // 动画中英雄移动时更新终点
    t.listen('running', function (ani) {
        var ex = core.status.hero.loc.x;
        var ey = core.status.hero.loc.y;
        if (ex !== ani._acEndLoc.x || ey !== ani._acEndLoc.y) {
            ani.value.x = ex * 32 - (core.bigmap && core.bigmap.offsetX ? core.bigmap.offsetX : 0);
            ani.value.y = ey * 32 - (core.bigmap && core.bigmap.offsetY ? core.bigmap.offsetY : 0);
            ani._acEndLoc = { x: ex, y: ey };
        }
    });

    transitionList.push(t);

    t.ticker.add(function () {
        core.drawIcon('_autoItem_', id, t.value.x, t.value.y, 32, 32);
        var hx2 = core.status.hero.loc.x;
        var hy2 = core.status.hero.loc.y;
        var ox = core.bigmap && core.bigmap.offsetX ? core.bigmap.offsetX : 0;
        var oy = core.bigmap && core.bigmap.offsetY ? core.bigmap.offsetY : 0;
        if (Math.abs(t.value.x - hx2 * 32 + ox) < 0.05 &&
            Math.abs(t.value.y - hy2 * 32 + oy) < 0.05) {
            t.ticker.destroy();
            var idx = transitionList.indexOf(t);
            if (idx >= 0) transitionList.splice(idx, 1);
        }
    });
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
    // --- afterChangeFloor：切换楼层后清理 ---
    var _origAfterChangeFloor = core.events.afterChangeFloor;
    core.events.afterChangeFloor = function (floorId) {
        if (_origAfterChangeFloor) _origAfterChangeFloor.call(this, floorId);
        if (main.mode !== 'play') return;
        if (!core.hasFlag('__fromLoad__')) {
            core.updateCheckBlock(floorId);
            doAutoClean();
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
