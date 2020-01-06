(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=264)})({264:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(265);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},265:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.Daqahliya.18.08-08-2012 10:22:18
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Daqahliya",revision:18,standaloneInit:true,baseWidth:537,baseHeight:594,baseScaleFactor:10,entities:{"01":{outlines:[[M,3458,1062,Q,3458,1067,3446,1069,3442,1070,3442,1088,L,3442,1105,Q,3450,1113,3450,1114,L,3450,1175,Q,3451,1185,3455,1188,3459,1192,3459,1199,3459,1206,3450,1209,3447,1209,3439,1218,3439,1231,3466,1230,3493,1229,3493,1241,L,3509,1241,3509,1233,3518,1233,Q,3517,1218,3517,1210,3517,1196,3527,1198,3527,1187,3527,1181,3527,1169,3534,1170,L,3534,1152,Q,3540,1152,3553,1151,3553,1151,3559,1160,3567,1160,3570,1161,3567,1167,3572,1170,3581,1174,3582,1175,L,3582,1182,Q,3570,1181,3573,1190,L,3561,1190,3561,1209,Q,3550,1205,3550,1226,L,3550,1242,Q,3550,1245,3561,1252,L,3561,1260,Q,3537,1260,3536,1261,3522,1272,3522,1276,3516,1277,3513,1278,3507,1280,3509,1285,3502,1284,3502,1291,3502,1301,3510,1302,3515,1312,3521,1313,3531,1313,3538,1322,3553,1325,3553,1330,3563,1332,3566,1337,3569,1341,3578,1341,3596,1343,3596,1331,L,3604,1331,3604,1345,3612,1345,3612,1359,3555,1359,Q,3555,1356,3552,1351,L,3533,1351,Q,3536,1361,3510,1361,L,3510,1369,Q,3501,1367,3501,1379,3501,1399,3509,1407,3511,1422,3512,1422,3521,1424,3521,1432,3528,1429,3533,1441,3533,1442,3547,1444,3555,1445,3564,1444,3569,1445,3569,1457,L,3568,1481,Q,3551,1478,3556,1489,L,3545,1490,Q,3537,1490,3535,1475,3511,1474,3509,1470,3501,1457,3489,1459,3491,1453,3481,1452,3468,1451,3465,1439,L,3435,1439,Q,3431,1446,3402,1450,3377,1453,3377,1468,L,3377,1477,Q,3388,1475,3389,1493,3390,1503,3390,1521,3390,1530,3390,1549,3390,1555,3397,1569,3397,1609,3405,1615,3410,1619,3410,1634,3410,1662,3411,1664,L,3411,1672,Q,3413,1678,3422,1684,3429,1689,3430,1697,3430,1706,3437,1714,3443,1720,3440,1731,3444,1731,3450,1733,3449,1743,3460,1743,3466,1743,3479,1741,3508,1742,3509,1752,L,3509,1759,Q,3499,1760,3499,1771,3502,1782,3488,1781,3485,1792,3484,1796,3480,1808,3480,1812,3480,1825,3490,1824,L,3490,1837,Q,3477,1834,3467,1843,3456,1852,3447,1851,3445,1855,3445,1858,3444,1858,3425,1867,3409,1868,3402,1869,3376,1885,3365,1882,3369,1893,3348,1893,3354,1910,3386,1936,3396,1948,3410,1958,3413,1961,3418,1972,3421,1979,3428,1981,L,3428,1989,Q,3421,1989,3416,1990,3408,1991,3410,1997,3404,1998,3361,2015,3350,2014,3346,2016,3338,2023,3335,2026,3317,2034,3313,2039,3296,2048,3291,2053,3283,2060,3254,2060,3238,2060,3232,2064,3223,2068,3221,2069,L,3135,2068,Q,3121,2068,3108,2075,3095,2082,3086,2082,3049,2078,3036,2085,3036,2090,3028,2091,L,3016,2091,Q,2998,2091,2989,2092,L,2920,2092,Q,2923,2077,2913,2075,2900,2075,2893,2073,2893,2064,2882,2056,2871,2048,2870,2042,L,2864,2042,Q,2863,2038,2852,2018,2844,2017,2838,2023,2832,2029,2829,2032,2815,2047,2815,2049,2814,2053,2804,2057,2803,2057,2800,2068,2774,2070,2766,2071,2765,2075,2763,2082,L,2751,2082,Q,2755,2106,2732,2118,2722,2123,2715,2129,2712,2135,2711,2138,2708,2143,2699,2141,L,2699,2150,2672,2150,2672,2173,Q,2664,2174,2663,2181,2663,2185,2662,2191,L,2654,2191,2654,2202,2636,2202,Q,2630,2201,2619,2201,L,2619,2193,2596,2193,Q,2594,2199,2593,2212,2593,2213,2579,2222,2578,2245,2564,2250,L,2563,2257,Q,2554,2253,2554,2268,L,2545,2268,2545,2283,Q,2535,2279,2531,2287,2529,2293,2530,2300,2532,2307,2525,2309,2514,2310,2509,2311,2499,2324,2486,2321,2473,2318,2474,2345,2462,2345,2462,2345,2461,2346,2461,2355,2461,2369,2470,2372,L,2469,2380,2461,2381,Q,2392,2381,2380,2378,2369,2375,2369,2365,2371,2352,2370,2346,2368,2318,2361,2315,L,2361,2305,2370,2305,2370,2291,Q,2353,2275,2353,2272,2340,2269,2342,2260,2321,2260,2321,2248,2319,2249,2309,2243,L,2309,2238,Q,2318,2236,2321,2236,2321,2230,2327,2226,2332,2221,2332,2217,2341,2220,2342,2202,2359,2200,2354,2189,2355,2189,2369,2184,2373,2181,2385,2175,2387,2167,2395,2166,2403,2164,2411,2159,2421,2157,2425,2151,2428,2145,2438,2143,2448,2141,2452,2132,2461,2128,2462,2127,2469,2117,2484,2114,2484,2112,2499,2108,2505,2107,2517,2100,2527,2100,2531,2098,2535,2096,2535,2089,2536,2088,2546,2086,2549,2084,2550,2081,2564,2074,2591,2060,2596,2055,2605,2043,2616,2037,2616,2021,2616,2004,2614,2e3,2611,1990,2595,1989,2592,1989,2588,1982,L,2578,1982,Q,2567,1972,2553,1969,2538,1965,2517,1945,2496,1925,2487,1925,L,2487,1909,2479,1909,2479,1896,2487,1896,Q,2487,1878,2489,1876,2493,1873,2497,1872,2500,1870,2501,1863,2506,1858,2513,1848,2514,1848,2523,1845,2529,1844,2530,1840,2549,1846,2552,1849,2555,1852,2568,1855,2573,1860,2577,1861,2614,1870,2628,1882,2643,1883,2673,1883,L,2702,1883,Q,2716,1883,2716,1873,2725,1869,2734,1867,2736,1865,2754,1865,2761,1865,2771,1858,2781,1852,2791,1852,2804,1852,2811,1847,2819,1842,2831,1842,2831,1827,2843,1833,2845,1821,2855,1813,2866,1804,2868,1797,2870,1791,2883,1792,2892,1785,2892,1781,2893,1774,2893,1753,L,2900,1753,2900,1742,Q,2894,1738,2892,1729,2891,1719,2889,1718,2879,1713,2870,1700,2866,1695,2860,1693,2847,1690,2846,1690,2814,1689,2811,1689,2785,1689,2777,1690,2779,1694,2771,1700,2763,1707,2763,1712,2762,1715,2755,1722,2753,1728,2750,1733,2740,1734,2738,1738,2737,1745,2732,1749,2724,1750,2716,1744,2710,1739,2701,1742,2701,1734,2692,1732,2687,1731,2687,1721,L,2674,1721,Q,2672,1711,2656,1711,2653,1711,2638,1701,2630,1678,2611,1681,2612,1675,2607,1673,2600,1672,2599,1670,2592,1657,2580,1659,2575,1660,2571,1657,2565,1652,2564,1652,2557,1650,2555,1650,2552,1649,2551,1643,2542,1636,2542,1632,2541,1618,2542,1611,2543,1600,2540,1590,2536,1578,2536,1570,2531,1570,2528,1567,2527,1560,2521,1560,2510,1559,2504,1550,2504,1550,2488,1542,2480,1538,2471,1539,2470,1535,2464,1532,2459,1529,2458,1526,2457,1514,2453,1510,2440,1503,2440,1499,2440,1490,2437,1481,L,2428,1481,Q,2427,1484,2417,1496,2410,1505,2410,1515,2410,1520,2410,1533,2408,1544,2398,1546,2386,1537,2382,1531,2363,1515,2335,1482,2324,1470,2310,1458,2307,1447,2300,1442,2290,1444,2286,1436,2281,1428,2265,1412,2253,1395,2247,1388,2218,1357,2205,1340,L,2190,1340,Q,2189,1345,2189,1354,2187,1362,2180,1368,2168,1391,2161,1391,2143,1390,2132,1401,2121,1416,2112,1422,L,2103,1422,Q,2104,1416,2098,1410,2092,1404,2092,1402,2100,1394,2100,1387,2100,1370,2082,1329,2073,1322,2071,1320,2068,1308,2066,1306,2052,1296,2052,1283,2052,1276,2060,1277,2059,1268,2060,1264,2060,1258,2068,1259,L,2070,1250,Q,2077,1251,2080,1243,2081,1240,2092,1237,2096,1236,2104,1231,2113,1227,2123,1228,2135,1229,2150,1221,2153,1221,2159,1213,2164,1206,2171,1209,2171,1204,2171,1201,2172,1194,2178,1197,L,2178,1190,Q,2189,1193,2189,1180,2200,1180,2200,1175,2200,1169,2194,1169,2185,1170,2180,1170,2174,1169,2169,1164,2165,1160,2160,1161,2066,1162,2044,1156,2021,1150,1999,1148,1976,1147,1965,1147,L,1935,1147,Q,1928,1146,1917,1144,1906,1141,1901,1157,1895,1172,1898,1180,L,1847,1180,Q,1836,1185,1827,1187,L,1808,1191,1783,1191,1783,1181,1776,1181,Q,1775,1184,1774,1189,L,1762,1189,Q,1761,1187,1761,1181,1754,1183,1745,1177,1734,1170,1731,1170,1713,1159,1695,1162,1686,1163,1678,1157,1669,1151,1664,1151,1638,1152,1631,1142,L,1631,1123,1640,1123,1640,1111,1651,1111,1651,1103,Q,1671,1103,1669,1093,L,1678,1093,Q,1675,1084,1682,1083,1691,1080,1692,1080,1696,1075,1699,1063,1712,1057,1716,1052,1726,1039,1728,1037,1730,1036,1740,1034,1741,1028,1744,1025,1745,1025,1758,1009,1769,995,1776,989,1784,982,1804,965,1823,948,1828,936,1830,930,1841,927,1844,917,1852,911,L,1860,908,Q,1861,906,1863,901,1867,896,1876,889,L,1905,889,Q,1918,889,1932,881,1943,879,1964,879,1966,878,1973,859,L,1980,859,Q,1984,845,2028,851,2032,850,2046,843,2062,843,2060,829,2074,829,2073,811,2072,790,2077,786,2079,784,2079,776,2080,768,2083,766,2095,759,2093,748,2100,752,2102,743,2104,732,2107,731,2112,729,2112,706,2112,687,2119,682,2122,679,2123,673,2124,667,2130,662,L,2130,642,Q,2128,640,2102,640,2093,639,2087,635,2079,630,2075,629,2051,632,2043,625,2018,622,2012,621,1994,611,1981,612,1970,612,1957,600,1951,595,1929,596,1908,598,1902,591,L,1883,591,Q,1873,585,1870,584,1854,585,1853,582,1850,570,1844,571,1839,571,1831,562,1816,561,1814,560,1808,549,1803,549,L,1782,550,Q,1778,550,1774,545,1769,539,1768,539,1753,539,1747,538,1744,531,1739,531,L,1730,531,Q,1714,531,1712,530,1697,520,1694,520,1691,520,1678,512,1670,512,1662,505,1656,499,1651,498,1645,497,1642,496,1625,487,1619,484,1612,482,1603,479,1593,476,1581,467,1574,462,1553,456,1533,451,1523,443,1512,435,1498,430,1483,424,1482,419,1460,417,1451,411,1436,402,1427,398,1426,398,1408,384,1395,379,1385,372,1376,359,1368,357,1344,351,1339,346,1333,342,1314,337,1294,331,1277,325,1268,313,1258,306,1244,301,1236,291,1230,292,1215,283,1207,281,1204,279,L,1196,271,Q,1192,271,1173,264,1163,253,1158,251,1146,250,1145,248,1142,245,1135,242,1127,234,1117,231,1107,221,1095,221,1086,214,1079,214,1073,213,1050,202,1027,190,1008,184,989,178,981,172,975,167,958,163,941,160,934,154,922,150,914,139,903,126,892,128,891,120,883,118,870,114,868,112,847,110,836,103,823,102,820,98,820,98,805,90,785,74,777,70,L,749,70,Q,752,62,745,62,736,62,732,62,736,50,712,47,712,41,706,40,697,41,691,39,L,690,28,682,28,Q,661,25,658,32,654,40,632,51,624,53,622,53,618,61,611,62,601,61,596,61,588,62,593,71,L,588,71,Q,559,74,558,75,553,79,543,80,532,82,528,84,504,88,497,90,485,99,471,99,466,99,423,120,L,409,127,Q,404,135,403,136,384,145,383,151,375,151,371,155,367,161,364,163,356,164,352,166,343,169,343,178,334,175,330,181,323,190,320,192,310,196,309,197,297,198,294,200,283,211,274,219,266,222,263,226,L,263,242,251,242,251,257,244,257,Q,247,277,229,274,231,287,223,292,215,297,219,306,218,308,213,309,209,310,209,316,209,322,203,330,196,337,198,344,190,349,188,357,186,362,178,372,178,387,170,385,172,389,162,405,160,413,157,415,152,418,150,420,L,150,430,164,430,Q,166,438,179,444,193,450,193,458,195,457,208,466,214,471,225,474,245,486,256,494,285,515,286,516,305,535,321,531,321,538,325,547,329,556,327,568,326,574,327,587,327,592,337,603,340,614,339,640,340,642,344,646,348,649,349,658,L,349,677,Q,349,704,356,713,358,716,362,754,363,775,369,793,369,813,380,822,L,380,858,Q,391,868,392,874,393,886,392,898,390,909,396,919,402,930,402,939,L,402,963,Q,402,966,409,984,414,996,416,1026,420,1033,422,1072,422,1078,427,1091,431,1102,429,1114,428,1124,434,1139,441,1154,439,1165,437,1185,450,1207,L,450,1245,Q,461,1251,460,1279,459,1308,466,1315,469,1318,471,1354,471,1364,477,1369,480,1371,480,1386,480,1401,471,1412,462,1423,462,1447,462,1465,469,1464,L,469,1480,Q,459,1487,452,1487,445,1499,440,1500,436,1501,436,1507,437,1514,434,1516,427,1521,427,1534,427,1547,428,1549,429,1551,438,1556,440,1556,439,1566,439,1575,448,1578,L,448,1590,437,1590,Q,438,1591,439,1595,L,439,1603,431,1603,431,1613,Q,443,1608,440,1622,450,1619,460,1631,L,460,1644,Q,462,1651,462,1658,L,469,1658,469,1670,483,1670,Q,494,1692,505,1696,511,1698,511,1719,511,1725,509,1725,501,1724,497,1726,L,497,1732,508,1732,508,1740,524,1740,Q,521,1745,526,1746,528,1747,533,1749,536,1756,541,1762,543,1765,543,1776,543,1785,536,1786,528,1786,529,1805,529,1813,523,1819,519,1825,522,1834,519,1833,516,1835,513,1837,513,1841,L,521,1840,Q,526,1843,533,1843,547,1843,547,1859,547,1870,546,1872,544,1876,533,1877,534,1887,526,1890,519,1892,520,1898,519,1904,519,1914,518,1922,509,1920,L,506,1931,Q,499,1930,496,1933,493,1936,487,1935,L,461,1935,461,1954,Q,464,1959,473,1966,480,1970,480,1981,480,1989,472,2001,464,2013,463,2022,L,442,2022,Q,442,2040,438,2043,430,2048,431,2060,L,431,2081,Q,428,2088,418,2091,417,2092,413,2099,411,2100,405,2101,403,2102,403,2109,399,2110,392,2112,384,2121,376,2121,L,349,2121,Q,349,2130,338,2132,337,2140,332,2142,327,2143,327,2147,327,2165,369,2216,L,369,2229,393,2248,Q,401,2251,409,2271,412,2273,420,2284,425,2290,431,2291,438,2291,440,2298,441,2300,455,2300,475,2300,472,2292,L,496,2292,Q,496,2283,498,2282,506,2281,509,2280,L,513,2280,Q,529,2312,532,2320,534,2328,549,2332,L,573,2332,573,2357,Q,575,2360,585,2361,593,2362,593,2368,601,2368,603,2369,L,603,2409,591,2409,591,2424,Q,592,2424,603,2428,L,603,2442,613,2442,613,2459,609,2459,Q,596,2457,592,2457,584,2451,584,2440,584,2426,572,2429,570,2414,570,2408,554,2407,548,2407,544,2400,541,2400,L,527,2400,Q,531,2391,516,2391,512,2391,499,2381,481,2379,477,2378,475,2368,464,2368,457,2368,454,2373,450,2381,448,2383,440,2390,440,2404,442,2409,437,2413,431,2418,431,2425,L,431,2458,424,2458,424,2469,Q,402,2469,401,2479,398,2481,383,2481,371,2482,369,2489,362,2487,355,2493,346,2499,341,2499,L,309,2499,309,2522,300,2522,300,2561,272,2561,Q,271,2556,271,2544,249,2541,247,2538,242,2531,236,2531,227,2532,220,2530,208,2520,205,2520,L,180,2520,Q,173,2510,173,2510,L,160,2510,Q,160,2522,159,2529,L,159,2535,169,2540,169,2554,Q,162,2552,161,2556,161,2558,161,2564,149,2564,149,2573,140,2573,140,2578,140,2587,170,2606,169,2616,171,2620,171,2621,166,2625,161,2630,161,2640,161,2651,158,2653,154,2654,154,2662,154,2669,157,2682,188,2682,204,2683,209,2695,209,2709,209,2728,205,2728,201,2727,201,2746,201,2755,205,2760,209,2764,209,2769,209,2776,208,2777,207,2778,197,2778,196,2782,196,2794,193,2803,179,2799,L,178,2808,170,2808,Q,169,2826,158,2822,159,2831,141,2831,116,2831,97,2827,L,89,2827,89,2885,Q,102,2891,103,2893,104,2895,104,2903,104,2917,92,2923,91,2925,84,2930,78,2934,78,2944,L,63,2944,63,2953,48,2953,Q,47,2975,47,2995,47,2997,40,3009,33,3020,30,3022,49,3030,51,3052,L,138,3052,Q,143,3040,176,3040,188,3040,189,3050,190,3056,190,3072,193,3073,204,3071,213,3071,211,3079,214,3078,227,3085,L,241,3093,Q,249,3099,259,3100,266,3100,285,3101,L,324,3101,Q,329,3100,329,3088,328,3074,328,3071,333,3067,337,3061,338,3049,341,3046,342,3044,355,3042,364,3040,361,3030,L,374,3029,Q,376,3029,380,3036,384,3044,396,3044,411,3044,411,3032,L,429,3031,Q,435,3031,447,3044,466,3044,468,3051,473,3051,481,3047,486,3046,487,3043,488,3037,488,3036,490,3033,498,3030,505,3028,509,3021,518,3001,522,3e3,543,2990,540,2979,545,2979,557,2978,561,2978,565,2984,568,2990,572,2990,L,600,2990,600,3009,610,3009,610,3022,Q,607,3023,601,3023,601,3031,600,3034,L,594,3034,Q,597,3049,582,3058,566,3068,568,3080,566,3082,556,3087,553,3094,552,3099,551,3099,550,3114,548,3116,538,3121,540,3124,547,3130,554,3137,552,3144,569,3141,580,3152,586,3158,600,3173,600,3183,610,3191,616,3196,618,3211,620,3215,622,3222,624,3229,629,3230,628,3237,632,3240,639,3244,641,3247,L,641,3269,Q,646,3273,650,3273,653,3275,653,3282,653,3288,646,3289,637,3289,633,3301,625,3299,622,3307,618,3319,616,3320,611,3323,609,3333,601,3341,600,3348,L,600,3365,Q,601,3375,593,3380,590,3382,590,3395,590,3401,584,3411,585,3419,579,3425,572,3433,571,3438,569,3458,547,3459,530,3469,509,3469,494,3477,470,3477,459,3477,439,3485,435,3487,424,3490,415,3496,409,3496,401,3495,395,3501,388,3508,383,3508,375,3507,367,3515,365,3517,350,3520,339,3525,335,3527,332,3528,320,3531,311,3540,298,3554,279,3568,276,3575,273,3580,263,3586,256,3591,259,3598,255,3598,249,3600,L,249,3610,Q,240,3605,240,3621,240,3630,265,3664,285,3690,288,3713,290,3726,304,3734,308,3740,318,3740,320,3740,328,3750,341,3763,350,3770,351,3773,351,3806,351,3809,351,3836,352,3844,347,3848,343,3852,345,3857,337,3857,334,3869,317,3867,319,3877,312,3881,303,3886,299,3890,288,3891,276,3900,274,3900,266,3900,242,3915,236,3917,226,3918,219,3925,209,3924,209,3941,196,3940,194,3949,189,3950,180,3952,178,3952,L,181,3978,Q,191,3978,197,3979,L,198,3992,223,3992,Q,219,4003,228,4004,232,4004,242,4002,239,4010,248,4011,252,4011,261,4011,L,261,4017,Q,260,4019,260,4022,L,271,4022,271,4055,Q,267,4059,261,4059,261,4069,249,4069,235,4068,231,4075,224,4087,192,4079,L,192,4090,185,4090,185,4104,Q,196,4110,223,4114,231,4119,240,4123,246,4129,260,4130,264,4139,271,4144,273,4155,274,4156,282,4164,282,4166,281,4174,292,4185,292,4201,299,4207,L,299,4288,Q,292,4286,291,4292,291,4294,290,4299,286,4303,271,4304,260,4316,222,4311,193,4312,183,4311,178,4302,173,4302,L,156,4302,Q,137,4302,132,4309,129,4312,119,4314,117,4315,111,4324,100,4335,91,4342,89,4344,89,4355,86,4363,83,4369,83,4375,88,4378,94,4382,95,4392,96,4415,100,4417,L,99,4451,Q,99,4464,100,4466,101,4471,111,4471,112,4475,112,4486,114,4487,121,4487,L,121,4501,131,4501,Q,128,4511,136,4519,144,4527,150,4532,151,4538,152,4547,154,4553,162,4552,L,171,4564,Q,175,4573,178,4577,181,4581,180,4587,179,4593,187,4600,193,4607,191,4620,190,4628,196,4633,202,4638,201,4649,L,201,4683,Q,201,4692,203,4708,202,4723,192,4727,L,192,4739,183,4739,183,4751,169,4751,Q,172,4760,165,4768,156,4776,156,4780,155,4789,145,4792,138,4793,143,4804,135,4804,133,4805,L,133,4832,141,4832,141,4839,147,4839,Q,148,4842,148,4850,165,4850,179,4857,181,4868,181,4871,L,191,4871,Q,190,4881,199,4888,204,4893,216,4900,225,4908,236,4910,247,4912,251,4916,256,4922,272,4922,282,4922,286,4933,308,4943,308,4960,L,308,5e3,Q,308,5009,302,5014,301,5015,301,5031,L,291,5031,293,5044,Q,293,5055,280,5054,L,280,5068,Q,292,5068,292,5077,292,5083,301,5093,303,5095,315,5099,323,5101,319,5112,L,332,5112,Q,333,5117,340,5124,342,5134,352,5136,349,5143,354,5146,361,5151,362,5155,365,5171,369,5177,369,5184,380,5195,389,5204,384,5223,395,5220,399,5245,405,5252,409,5269,L,409,5290,Q,416,5292,417,5303,418,5317,420,5320,420,5321,425,5323,429,5325,428,5330,L,428,5349,Q,439,5351,440,5359,441,5365,440,5379,L,440,5496,Q,432,5495,432,5516,L,420,5536,Q,419,5537,416,5562,413,5582,398,5581,398,5603,396,5608,394,5613,386,5627,385,5643,380,5646,375,5648,375,5669,375,5673,366,5674,357,5676,359,5682,358,5687,359,5696,358,5702,351,5703,L,351,5770,362,5770,362,5781,366,5781,Q,381,5780,411,5780,412,5761,413,5754,L,456,5754,Q,457,5755,460,5755,L,460,5797,Q,451,5798,451,5819,451,5820,451,5830,451,5840,459,5842,L,459,5872,Q,463,5873,471,5873,472,5885,472,5910,L,499,5910,506,5901,522,5901,Q,528,5894,537,5893,553,5894,555,5889,560,5876,563,5870,566,5861,571,5860,L,640,5860,Q,656,5860,668,5855,680,5850,689,5850,L,689,5835,696,5835,Q,695,5818,695,5810,696,5794,707,5793,L,708,5777,Q,712,5779,726,5771,740,5770,743,5766,759,5763,762,5760,763,5760,767,5751,769,5746,775,5749,778,5740,778,5732,L,809,5732,811,5744,811,5759,Q,803,5762,803,5764,L,804,5769,817,5769,820,5782,Q,859,5776,854,5806,L,854,5817,Q,841,5823,841,5827,841,5838,847,5841,853,5843,855,5851,L,861,5851,Q,862,5846,862,5832,L,887,5832,887,5795,893,5782,893,5766,Q,893,5746,882,5747,883,5743,879,5741,873,5738,872,5736,869,5727,871,5717,875,5696,850,5700,L,850,5681,Q,854,5680,863,5680,873,5680,874,5681,878,5683,880,5688,889,5688,890,5679,892,5670,898,5670,L,898,5661,905,5661,Q,906,5673,923,5673,927,5676,931,5682,939,5684,940,5689,L,979,5690,Q,988,5690,989,5681,988,5665,990,5651,1001,5651,1007,5650,L,1034,5650,Q,1033,5658,1040,5670,L,1058,5670,1059,5675,1072,5675,Q,1072,5674,1076,5674,L,1076,5666,1081,5666,1081,5631,Q,1070,5629,1065,5629,L,1059,5594,1059,5569,1009,5569,1009,5554,Q,1002,5550,1002,5546,L,1002,5476,Q,1004,5471,1011,5471,1015,5471,1025,5471,1086,5477,1086,5464,1079,5457,1079,5446,1079,5424,1078,5420,1072,5417,1072,5413,L,1072,5396,Q,1071,5378,1066,5375,1058,5369,1062,5355,1063,5349,1059,5344,L,1053,5336,Q,1031,5317,1031,5306,1031,5301,1033,5299,1039,5296,1042,5294,L,1042,5282,Q,1031,5274,1018,5277,L,1018,5264,Q,1031,5262,1033,5257,1034,5252,1040,5252,L,1050,5252,1050,5239,Q,1042,5235,1042,5226,1042,5219,1050,5218,L,1050,5208,Q,1045,5206,1041,5203,1035,5198,1038,5190,1030,5190,1020,5182,1009,5173,1002,5170,1001,5170,1001,5170,999,5170,999,5171,L,969,5171,Q,970,5162,958,5162,L,958,5156,978,5156,979,5149,1014,5150,Q,1025,5150,1032,5145,1045,5143,1049,5142,L,1049,5088,1022,5088,Q,1014,5090,1012,5087,1010,5082,1005,5081,1001,5080,999,5062,995,5040,995,5040,981,5039,977,5008,978,4989,978,4978,978,4958,969,4964,L,969,4955,945,4955,941,4958,911,4958,Q,913,4946,905,4939,897,4933,896,4930,902,4899,888,4899,L,888,4892,Q,892,4889,901,4889,L,901,4882,965,4882,Q,965,4872,973,4872,L,973,4858,960,4853,961,4848,Q,962,4824,962,4811,962,4785,949,4787,L,949,4776,Q,940,4777,940,4768,940,4754,938,4752,938,4751,932,4748,930,4747,931,4740,L,931,4705,Q,945,4699,941,4688,941,4678,956,4679,965,4679,978,4680,L,980,4669,Q,993,4670,993,4659,L,992,4640,Q,1002,4640,1003,4637,L,1028,4637,1031,4645,1034,4645,1034,4630,Q,1032,4628,1e3,4627,L,1e3,4590,Q,1017,4583,1019,4582,1020,4581,1020,4568,1020,4555,1011,4550,1001,4545,1001,4535,1001,4531,1007,4524,1008,4521,1008,4513,L,1015,4513,1015,4502,1029,4502,Q,1032,4511,1054,4513,1067,4514,1099,4513,1112,4513,1129,4509,1129,4497,1133,4491,1136,4485,1136,4473,L,1147,4473,Q,1149,4476,1152,4490,1155,4500,1163,4501,L,1163,4511,Q,1169,4511,1179,4513,1179,4524,1182,4552,1197,4546,1193,4568,L,1200,4568,1200,4578,1208,4578,Q,1211,4553,1211,4542,L,1219,4542,Q,1216,4529,1231,4530,L,1231,4518,1242,4518,Q,1238,4508,1252,4508,1260,4507,1273,4509,L,1273,4500,Q,1280,4500,1290,4501,1301,4500,1300,4489,L,1300,4441,1314,4441,Q,1312,4457,1327,4457,1335,4457,1351,4455,1354,4455,1369,4460,1371,4460,1378,4459,1385,4459,1387,4467,1402,4467,1408,4468,L,1409,4483,1439,4483,1439,4463,Q,1446,4463,1449,4458,1452,4453,1467,4453,1482,4453,1486,4449,1488,4447,1516,4437,1519,4423,1540,4423,1547,4423,1548,4426,1549,4430,1557,4432,1560,4433,1566,4433,1572,4433,1574,4439,1577,4446,1586,4455,1587,4458,1593,4461,1600,4465,1604,4463,1605,4468,1606,4490,1607,4495,1615,4501,1622,4506,1621,4511,L,1650,4511,Q,1645,4501,1657,4496,1669,4491,1663,4477,1674,4477,1674,4463,1674,4448,1686,4448,1696,4448,1700,4458,1705,4459,1718,4460,L,1718,4485,1710,4485,1710,4500,Q,1714,4504,1728,4502,1728,4504,1729,4509,1734,4508,1735,4500,L,1740,4500,Q,1736,4485,1749,4490,1749,4473,1763,4478,1777,4469,1772,4456,L,1782,4456,Q,1781,4468,1814,4468,1836,4468,1838,4466,1839,4455,1847,4437,L,1854,4437,Q,1867,4440,1883,4442,1891,4444,1894,4447,1899,4452,1907,4451,1908,4460,1911,4480,L,1931,4480,Q,1935,4479,1943,4471,L,1979,4471,Q,1978,4462,1988,4461,1994,4461,2007,4461,2013,4461,2021,4452,L,2038,4452,Q,2060,4452,2066,4463,2068,4467,2074,4501,L,2127,4501,Q,2138,4490,2143,4490,2165,4490,2168,4488,2172,4483,2190,4483,2208,4482,2211,4478,2217,4472,2235,4472,2252,4472,2256,4464,2260,4458,2273,4457,2290,4455,2297,4452,L,2297,4440,Q,2290,4436,2289,4415,2288,4394,2283,4386,2281,4383,2281,4360,2269,4346,2269,4340,2278,4335,2279,4332,2279,4327,2287,4324,2308,4315,2312,4315,2326,4315,2330,4322,2335,4329,2351,4329,2367,4329,2380,4325,2389,4325,2392,4319,2394,4314,2398,4314,2412,4314,2420,4302,2427,4292,2445,4298,2445,4290,2454,4290,2450,4277,2468,4277,2474,4277,2477,4282,2479,4287,2485,4287,2494,4287,2499,4280,2500,4277,2506,4276,2511,4275,2512,4271,2508,4252,2519,4239,2532,4232,2533,4231,2540,4223,2544,4222,2549,4220,2553,4211,2555,4205,2563,4207,L,2561,4190,Q,2530,4189,2530,4181,L,2530,4171,Q,2540,4171,2539,4160,L,2548,4160,Q,2546,4149,2557,4149,2563,4149,2574,4150,L,2575,4141,2583,4141,2583,4130,Q,2572,4132,2570,4124,2569,4111,2565,4108,2560,4104,2560,4096,2560,4092,2553,4083,2552,4082,2549,4067,2546,4066,2538,4056,2537,4056,2524,4045,2519,4041,2520,4031,2506,4031,2509,4021,2497,4023,2492,4017,2487,4008,2482,4004,2471,3996,2460,3980,2449,3979,2448,3978,2447,3978,2447,3969,2447,3964,2457,3951,2467,3938,2467,3927,2467,3909,2468,3900,2476,3902,2478,3896,2479,3887,2480,3882,2487,3880,2494,3871,2502,3861,2499,3850,L,2506,3850,Q,2507,3841,2518,3840,2525,3840,2530,3840,2533,3844,2533,3851,2541,3851,2541,3861,L,2558,3861,Q,2561,3852,2560,3850,2570,3850,2584,3849,2590,3849,2600,3870,2609,3883,2619,3892,2655,3890,2658,3887,2662,3882,2680,3882,2681,3882,2681,3882,2702,3880,2704,3889,2714,3891,2730,3891,2736,3891,2739,3888,2742,3884,2754,3884,2770,3884,2767,3872,2784,3872,2789,3860,2791,3853,2795,3848,2804,3847,2809,3843,2821,3831,2831,3824,2832,3822,2844,3820,2851,3819,2847,3810,2853,3811,2859,3802,2864,3795,2872,3798,2872,3797,2880,3786,L,2880,3721,Q,2883,3702,2884,3687,2885,3656,2873,3647,2868,3643,2866,3635,2865,3624,2864,3622,2863,3612,2860,3610,2854,3606,2854,3601,L,2854,3589,Q,2869,3587,2886,3565,2896,3550,2897,3548,2904,3539,2905,3539,2906,3538,2917,3540,2929,3540,2940,3528,2947,3525,2948,3518,2949,3510,2952,3508,2965,3492,2968,3491,2986,3484,2990,3478,2990,3466,2993,3464,3002,3457,3001,3455,3003,3431,3003,3430,3021,3428,3031,3423,3052,3425,3058,3419,3075,3402,3104,3397,3113,3395,3136,3361,3137,3346,3146,3339,3162,3326,3162,3320,3162,3315,3170,3310,3171,3309,3176,3302,3180,3301,3190,3301,3194,3299,3200,3295,3201,3286,3205,3282,3206,3273,3208,3269,3221,3267,3221,3266,3230,3257,3231,3256,3236,3255,3252,3243,3266,3232,3276,3232,3275,3225,3288,3219,3291,3217,3291,3201,3291,3194,3286,3192,3281,3190,3281,3179,3281,3163,3272,3161,L,3272,3152,Q,3282,3154,3281,3142,3280,3130,3290,3132,3287,3122,3297,3115,3303,3110,3310,3101,3317,3094,3325,3087,3335,3081,3338,3077,3346,3067,3382,3069,3387,3069,3400,3062,3410,3055,3422,3059,3422,3050,3423,3046,L,3431,3046,3431,3040,Q,3422,3035,3420,3035,L,3420,3028,3421,3026,Q,3432,3026,3431,3013,3448,3013,3451,3007,3451,2988,3453,2987,3464,2977,3465,2974,3474,2969,3474,2959,3491,2961,3490,2949,3512,2952,3530,2941,L,3577,2940,Q,3581,2950,3600,2950,3611,2950,3635,2949,3656,2951,3660,2955,3664,2957,3679,2957,3682,2957,3698,2951,3700,2951,3709,2951,3715,2951,3718,2946,3722,2938,3737,2939,3744,2939,3755,2941,L,3780,2941,Q,3791,2941,3795,2945,3810,2945,3813,2942,3815,2940,3825,2927,3832,2919,3844,2920,3846,2918,3848,2913,3850,2909,3857,2911,3857,2908,3863,2904,3868,2900,3873,2901,L,3883,2912,Q,3890,2906,3902,2912,3924,2925,3956,2934,3976,2939,3982,2940,3987,2940,4005,2950,4013,2950,4013,2945,4013,2939,4028,2940,4030,2940,4036,2932,4041,2925,4047,2928,4047,2918,4053,2918,4061,2918,4064,2913,4066,2909,4075,2908,4086,2908,4088,2905,4094,2898,4114,2898,4124,2898,4146,2899,4155,2898,4176,2899,4187,2897,4201,2890,4244,2889,4253,2883,L,4295,2883,Q,4306,2884,4311,2880,L,4321,2873,Q,4338,2866,4408,2870,4412,2870,4425,2866,4437,2862,4444,2860,4451,2858,4480,2852,4508,2845,4533,2845,4541,2845,4560,2835,4571,2832,4572,2816,4577,2815,4581,2808,4584,2801,4587,2801,4599,2801,4609,2792,4613,2788,4630,2782,4647,2776,4648,2767,4648,2766,4656,2758,4659,2755,4657,2745,4658,2742,4666,2741,4672,2739,4670,2730,L,4685,2730,Q,4687,2721,4691,2721,4696,2720,4706,2720,4710,2717,4716,2711,4736,2713,4765,2707,4773,2703,4785,2709,4788,2710,4805,2710,4821,2710,4854,2706,4886,2701,4925,2700,4964,2699,4966,2701,4968,2703,4999,2696,5030,2688,5040,2668,5053,2643,5061,2637,5070,2630,5124,2572,5140,2554,5181,2510,5184,2507,5189,2499,5194,2491,5201,2480,5209,2470,5228,2454,5245,2438,5279,2401,5284,2396,5291,2387,5298,2378,5306,2371,5327,2348,5332,2345,L,5332,2332,5343,2332,Q,5343,2324,5348,2324,5345,2296,5343,2297,5340,2297,5336,2294,5332,2290,5332,2282,5332,2275,5322,2264,5312,2252,5311,2245,5300,2221,5293,2206,5283,2183,5279,2165,5270,2156,5270,2147,5260,2134,5259,2130,5247,2094,5247,2086,5239,2075,5240,2066,L,5240,2040,Q,5240,2018,5232,2004,5232,2002,5232,2e3,5232,1909,5229,1892,5220,1875,5220,1869,L,5220,1842,Q,5220,1803,5216,1790,5212,1777,5211,1741,5210,1708,5202,1689,5198,1679,5197,1637,5197,1596,5191,1586,L,5191,1581,Q,5191,1554,5186,1519,5180,1483,5180,1458,5172,1418,5171,1397,5172,1369,5172,1356,5171,1331,5162,1323,5150,1311,5157,1253,5159,1229,5137,1229,5109,1234,5098,1233,5047,1229,5034,1224,5032,1223,4997,1223,4979,1216,4970,1217,L,4774,1217,Q,4758,1218,4753,1219,4747,1220,4738,1216,4729,1211,4683,1210,4637,1209,4604,1206,4571,1202,4545,1201,4518,1199,4486,1200,4454,1200,4434,1198,4414,1196,4385,1193,4357,1189,4299,1189,4240,1188,4215,1189,4190,1189,4148,1181,L,4017,1182,Q,3996,1183,3988,1184,3975,1185,3966,1180,3946,1169,3929,1170,L,3820,1170,Q,3792,1162,3779,1163,3748,1166,3739,1162,3724,1157,3708,1142,3691,1125,3691,1111,3691,1103,3696,1101,3701,1099,3701,1091,3701,1084,3700,1079,L,3665,1079,Q,3654,1073,3649,1073,L,3612,1070,3612,1079,3605,1079,Q,3593,1079,3586,1082,3579,1084,3571,1073,3571,1064,3566,1062,3558,1056,3557,1051,3556,1047,3534,1041,3515,1036,3523,1021,L,3512,1021,3509,1009,3481,1009,Q,3479,1025,3476,1026,3474,1027,3474,1039,Q,3474,1070,3458,1062,Z]],label:"Daqahliya",shortLabel:"DA",labelPosition:[160.8,331],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"daqahliya",type:"maps"}}})});