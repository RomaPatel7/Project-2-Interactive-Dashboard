(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=198)})({198:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(199);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},199:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.NorthCentral.1.03-12-2018 01:54:11
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"NorthCentral",revision:1,creditLabel:false,standaloneInit:false,baseWidth:529,baseHeight:600,baseScaleFactor:10,firstEntity:"VN.NC.HT",entities:{"VN.NC.HT":{outlines:[[M,2491,2811,Q,2477,2799,2477,2781,2477,2737,2471,2716,2463,2688,2430,2657,2393,2622,2388,2611,2385,2604,2373,2568,2341,2579,2332,2583,2317,2589,2304,2602,2299,2608,2282,2635,2264,2660,2241,2662,2187,2665,2171,2694,2156,2722,2111,2722,2089,2722,2049,2695,2008,2669,1981,2669,1976,2669,1954,2694,1932,2717,1908,2717,1881,2717,1859,2691,1839,2664,1807,2665,1774,2666,1737,2657,1694,2647,1680,2632,L,1655,2632,1655,2645,Q,1648,2660,1623,2687,1604,2708,1598,2731,1592,2763,1571,2777,1553,2788,1553,2829,1553,2858,1568,2882,1573,2890,1598,2919,1638,2964,1629,3024,1651,3059,1687,3077,1707,3087,1750,3106,1781,3125,1811,3173,1827,3197,1838,3217,1861,3217,1874,3196,1886,3175,1935,3175,1962,3175,1972,3179,1990,3184,1999,3202,2002,3208,2021,3231,2041,3253,2055,3280,2066,3300,2113,3337,2149,3367,2154,3408,2158,3446,2175,3498,2177,3505,2179,3511,2204,3511,2216,3507,2236,3501,2248,3481,2264,3454,2291,3445,2305,3440,2330,3436,2383,3415,2421,3377,2444,3354,2508,3354,2576,3354,2614,3385,2634,3401,2701,3489,2756,3561,2817,3578,2846,3586,2943,3586,3026,3586,3039,3580,3065,3567,3112,3485,L,3247,3485,Q,3247,3485,3247,3484,3225,3445,3224,3444,3223,3440,3220,3418,3219,3407,3206,3400,3195,3392,3193,3391,3187,3383,3183,3360,3178,3333,3147,3325,3113,3323,3104,3322,3076,3318,3053,3303,3038,3293,3017,3271,2996,3248,2946,3199,2890,3144,2871,3125,2861,3114,2824,3100,2781,3083,2770,3077,2752,3065,2714,3047,2674,3027,2668,3025,2615,2956,2596,2916,2588,2896,2558,2865,2533,2839,2516,2826,Q,2499,2817,2491,2811,Z]],label:"Hà Tĩnh",shortLabel:"HT",labelPosition:[223.5,307.7],labelAlignment:[CEN,MID],nextId:"VN.NC.NA"},"VN.NC.NA":{outlines:[[M,1554,976,Q,1481,952,1478,949,1465,941,1430,900,1395,858,1385,837,1357,864,1294,896,1212,937,1152,953,L,1152,968,Q,1157,968,1157,971,1193,976,1220,1067,1220,1090,1216,1096,1202,1116,1197,1125,1195,1131,1190,1150,1184,1168,1171,1177,1145,1193,1095,1192,1054,1190,1041,1215,1041,1267,974,1337,911,1402,884,1402,859,1402,824,1363,787,1320,760,1315,734,1311,705,1283,678,1260,634,1260,609,1260,594,1290,580,1319,570,1319,541,1296,512,1271,454,1222,446,1222,431,1222,429,1232,427,1239,423,1270,405,1261,387,1278,367,1297,362,1297,360,1297,292,1267,221,1236,203,1233,209,1246,207,1273,210,1297,240,1308,265,1318,262,1336,258,1358,273,1371,296,1390,301,1393,304,1395,315,1402,333,1414,333,1435,333,1484,295,1543,278,1569,229,1626,211,1648,126,1662,49,1674,49,1689,49,1698,71,1734,94,1772,109,1783,120,1790,160,1804,203,1820,224,1831,272,1825,315,1851,341,1867,394,1906,405,1913,422,1947,435,1972,468,1972,495,1972,521,1986,529,1990,558,2010,623,2054,656,2064,673,2069,688,2109,701,2145,726,2145,780,2145,820,2188,845,2214,878,2280,908,2336,949,2351,967,2357,1015,2363,1050,2368,1069,2384,1101,2409,1190,2406,1279,2403,1293,2414,1313,2430,1339,2441,1355,2450,1389,2462,1402,2467,1435,2489,1458,2505,1481,2503,1523,2500,1574,2546,1629,2597,1655,2599,L,1655,2632,1680,2632,Q,1694,2647,1737,2657,1774,2666,1807,2665,1839,2664,1859,2691,1881,2717,1908,2717,1932,2717,1954,2694,1976,2669,1981,2669,2008,2669,2049,2695,2089,2722,2111,2722,2156,2722,2171,2694,2187,2665,2241,2662,2264,2660,2282,2635,2299,2608,2304,2602,2317,2589,2332,2583,2341,2579,2373,2568,2370,2558,2366,2546,2355,2510,2325,2476,2310,2460,2291,2414,2272,2366,2262,2354,2236,2335,2215,2319,2175,2289,2171,2267,2166,2220,2156,2199,2148,2184,2148,2151,2148,2091,2194,2062,2222,2046,2236,2037,2262,2021,2276,2001,2295,1977,2328,1905,2343,1873,2360,1851,L,2384,1825,2395,1795,Q,2395,1794,2396,1792,2397,1789,2399,1786,2328,1791,2294,1787,2234,1780,2181,1708,2165,1686,2079,1602,1998,1522,1996,1522,1984,1522,1974,1546,1964,1570,1939,1570,1912,1570,1872,1523,1830,1474,1822,1473,1774,1461,1740,1448,1676,1421,1676,1394,1676,1387,1702,1373,1728,1359,1728,1328,1728,1300,1713,1293,1704,1290,1678,1292,1622,1297,1608,1252,1603,1231,1603,1204,1604,1191,1590,1177,1561,1150,1555,1137,1553,1131,1553,1108,1553,1068,1579,1051,1605,1034,1605,1015,Q,1605,994,1554,976,Z]],label:"Nghệ An",shortLabel:"NA",labelPosition:[144.4,188.9],labelAlignment:[CEN,MID],nextId:"VN.NC.QB"},"VN.NC.QB":{outlines:[[M,3248,3487,Q,3247,3485,3247,3485,L,3112,3485,Q,3065,3567,3039,3580,3026,3586,2943,3586,2846,3586,2817,3578,2756,3561,2701,3489,2634,3401,2614,3385,2576,3354,2508,3354,2444,3354,2421,3377,2383,3415,2330,3436,2305,3440,2291,3445,2264,3454,2248,3481,2236,3501,2216,3507,2204,3511,2179,3511,2190,3548,2190,3579,2190,3610,2213,3666,2237,3719,2262,3752,2271,3764,2278,3787,2282,3801,2289,3824,2298,3838,2331,3842,2368,3848,2375,3854,2399,3871,2447,3902,2490,3931,2513,3964,2519,3972,2574,4038,2614,4088,2627,4120,2638,4148,2674,4194,2707,4235,2721,4251,2722,4252,2723,4254,2724,4255,2725,4257,2730,4272,2744,4318,2753,4349,2790,4347,2833,4344,2848,4369,2864,4394,2897,4394,2920,4394,2931,4367,2942,4341,2961,4341,2972,4341,2978,4346,2982,4349,2999,4367,3003,4372,3021,4382,3032,4388,3035,4397,3037,4401,3041,4445,3044,4472,3063,4481,3078,4489,3095,4533,3104,4556,3116,4592,3122,4603,3158,4629,3189,4652,3189,4670,3189,4709,3191,4732,3194,4749,3203,4786,L,3218,4786,Q,3227,4779,3236,4764,3240,4756,3256,4756,3284,4756,3299,4776,3301,4780,3304,4785,3317,4785,3345,4772,3374,4759,3383,4759,3409,4759,3442,4791,3475,4822,3508,4822,3573,4822,3706,4675,3828,4524,3840,4517,3832,4512,3827,4506,3802,4473,3746,4439,3676,4396,3639,4362,L,3600,4323,Q,3596,4319,3577,4312,3560,4306,3556,4302,3545,4290,3527,4258,3508,4224,3497,4209,3496,4206,3495,4205,3481,4178,3444,4143,3398,4099,3391,4089,3388,4084,3350,4007,3322,3951,3290,3925,3243,3888,3204,3799,3164,3707,3164,3632,3164,3607,3166,3599,3173,3577,3200,3572,3245,3564,3247,3563,3265,3556,3265,3535,Q,3265,3517,3248,3487,Z]],label:"Quảng Bình",shortLabel:"QB",labelPosition:[289.9,392.3],labelAlignment:[CEN,MID],nextId:"VN.NC.QT"},"VN.NC.QT":{outlines:[[M,3840,4517,Q,3828,4524,3706,4675,3573,4822,3508,4822,3475,4822,3442,4791,3409,4759,3383,4759,3374,4759,3345,4772,3317,4785,3304,4785,3310,4797,3317,4813,3322,4823,3347,4846,3364,4862,3364,4895,3364,4949,3336,4963,3307,4978,3307,5023,3307,5039,3336,5059,3364,5079,3364,5107,3364,5146,3365,5152,3370,5181,3395,5207,3415,5231,3438,5252,3451,5269,3451,5303,3451,5310,3445,5354,3445,5354,3447,5373,3450,5389,3463,5397,3466,5399,3469,5400,3482,5410,3488,5421,3493,5427,3496,5468,3497,5492,3529,5492,3618,5463,3625,5459,L,3625,5423,Q,3620,5423,3615,5418,3610,5414,3610,5412,3610,5408,3613,5398,3616,5389,3616,5384,3642,5386,3662,5364,3682,5342,3684,5309,L,3702,5309,Q,3717,5321,3721,5349,3726,5383,3729,5388,3734,5396,3750,5411,3763,5427,3762,5444,3762,5454,3759,5483,3759,5508,3774,5516,3793,5526,3816,5533,3844,5541,3854,5546,3866,5550,3871,5573,3877,5596,3908,5609,3915,5611,3922,5614,3930,5608,3958,5578,3989,5544,4018,5529,4057,5508,4092,5436,4092,5426,4053,5404,4013,5382,4013,5344,4013,5332,4047,5290,4080,5249,4089,5249,4111,5249,4125,5281,4139,5313,4166,5313,4209,5313,4232,5296,4253,5279,4278,5230,4289,5193,4321,5159,4354,5125,4370,5088,4356,5078,4349,5069,4342,5054,4338,5049,4333,5041,4306,5008,4280,4977,4270,4959,4243,4913,4191,4882,4129,4850,4096,4831,4067,4815,4050,4733,4030,4641,4013,4619,3996,4597,3974,4583,3944,4564,3932,4553,3916,4539,3878,4531,Q,3854,4526,3840,4517,Z]],label:"Quảng Trị",shortLabel:"QT",labelPosition:[383.7,506.5],labelAlignment:[CEN,MID],nextId:"VN.NC.TH"},"VN.NC.TH":{outlines:[[M,2042,407,Q,2014,398,1973,374,1912,340,1912,339,1905,336,1829,310,1767,289,1759,277,1743,252,1702,231,1652,205,1642,199,1624,166,1606,143,1572,97,1544,97,1516,97,1499,129,1481,161,1452,161,L,1351,97,Q,1336,87,1308,57,1294,41,1257,41,1218,41,1173,92,1128,142,1122,142,1102,142,1089,125,1072,106,1055,101,1053,101,1023,76,995,52,984,52,888,52,881,127,879,146,878,178,874,202,853,202,847,202,832,179,817,157,801,157,783,157,772,171,760,187,753,192,738,199,706,210,682,218,682,251,682,262,686,302,708,297,723,280,736,265,754,265,760,265,782,271,804,277,820,277,886,277,952,302,1041,337,1041,399,1041,432,1024,453,1007,475,1007,477,1007,495,1022,509,1039,524,1041,541,1045,585,1050,591,1053,594,1077,594,1106,594,1124,573,1140,552,1188,552,1251,552,1262,556,1296,566,1321,616,1335,643,1374,703,1407,759,1407,798,1407,816,1385,837,1395,858,1430,900,1465,941,1478,949,1481,952,1554,976,1605,994,1605,1015,1605,1034,1579,1051,1553,1068,1553,1108,1553,1131,1555,1137,1561,1150,1590,1177,1604,1191,1603,1204,1603,1231,1608,1252,1622,1297,1678,1292,1704,1290,1713,1293,1728,1300,1728,1328,1728,1359,1702,1373,1676,1387,1676,1394,1676,1421,1740,1448,1774,1461,1822,1473,1830,1474,1872,1523,1912,1570,1939,1570,1964,1570,1974,1546,1984,1522,1996,1522,1998,1522,2079,1602,2165,1686,2181,1708,2234,1780,2294,1787,2328,1791,2399,1786,2406,1769,2406,1764,2406,1752,2391,1695,2375,1637,2375,1629,2375,1617,2406,1599,2435,1582,2435,1546,2435,1519,2403,1494,2371,1469,2371,1430,2371,1393,2403,1356,2445,1308,2457,1274,2473,1233,2507,1192,2527,1169,2562,1128,2562,1064,2566,1039,2568,1024,2588,1006,2611,987,2618,968,2634,924,2660,897,2674,881,2674,835,2674,789,2650,782,2611,770,2589,739,2572,717,2526,708,2469,697,2443,680,2419,665,2363,648,2314,634,2286,609,2262,588,2224,563,2188,538,2162,515,2126,475,2108,454,Q,2074,417,2042,407,Z]],label:"Thanh Hóa",shortLabel:"TH",labelPosition:[200.8,97],labelAlignment:[CEN,MID],nextId:"VN.NC.TT"},"VN.NC.TT":{outlines:[[M,4476,5141,Q,4475,5106,4443,5106,4395,5101,4380,5094,4375,5091,4370,5088,4354,5125,4321,5159,4289,5193,4278,5230,4253,5279,4232,5296,4209,5313,4166,5313,4139,5313,4125,5281,4111,5249,4089,5249,4080,5249,4047,5290,4013,5332,4013,5344,4013,5382,4053,5404,4092,5426,4092,5436,4057,5508,4018,5529,3989,5544,3958,5578,3930,5608,3922,5614,3951,5627,3968,5641,3970,5643,4042,5682,4087,5707,4087,5735,4087,5751,4087,5752,4087,5754,4082,5761,L,4082,5788,Q,4107,5787,4126,5806,4150,5832,4154,5833,4161,5836,4194,5841,4226,5846,4240,5854,4258,5863,4299,5909,4332,5946,4363,5946,4375,5946,4380,5927,4385,5908,4412,5908,4439,5908,4448,5914,4452,5916,4457,5927,4465,5946,4535,5946,4553,5946,4598,5948,4636,5948,4650,5937,4656,5932,4660,5921,4666,5902,4668,5898,4678,5878,4694,5873,4699,5871,4718,5871,4736,5871,4760,5909,4772,5930,4790,5958,L,4842,5958,Q,4839,5917,4857,5906,4867,5898,4897,5900,4929,5903,4942,5897,4965,5886,4970,5848,4972,5828,4992,5809,5013,5788,5017,5770,5020,5754,5027,5742,5029,5738,5038,5726,5052,5706,5072,5702,5090,5699,5090,5707,5091,5707,5092,5707,5124,5707,5141,5718,5158,5728,5177,5728,5194,5728,5210,5722,5220,5719,5250,5707,5242,5683,5215,5670,5183,5655,5179,5647,5151,5603,5144,5598,5139,5593,5106,5593,5071,5593,5065,5596,5057,5602,5030,5644,L,4933,5644,4933,5611,Q,4944,5593,4923,5565,4897,5535,4892,5528,4884,5515,4872,5487,4861,5461,4853,5450,4825,5414,4792,5392,4752,5366,4735,5352,4734,5349,4732,5347,4723,5333,4695,5325,4658,5314,4650,5303,4637,5288,4610,5287,4576,5284,4557,5273,4546,5267,4522,5231,4497,5195,4485,5187,Q,4478,5182,4476,5141,Z]],label:"Thừa Thiên–Huế",shortLabel:"TT",labelPosition:[442.1,552.3],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"northcentral",type:"maps"}}})});