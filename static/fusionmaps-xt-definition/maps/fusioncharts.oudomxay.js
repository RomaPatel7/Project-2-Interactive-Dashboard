(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=18)})({18:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(19);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},19:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.Oudomxay.1.06-19-2019 10:37:58
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Oudomxay",revision:1,creditLabel:false,standaloneInit:false,baseWidth:600,baseHeight:541,baseScaleFactor:10,firstEntity:"LA.OU.XA",entities:{"LA.OU.XA":{outlines:[[M,4344,878,Q,4343,885,4330,885,4320,885,4307,879,4295,874,4290,874,4270,874,4269,914,4266,959,4262,964,4254,971,4239,980,4223,991,4217,996,4195,1011,4190,1012,4185,1014,4182,1035,4180,1056,4188,1073,4196,1090,4211,1108,4229,1130,4233,1139,4241,1154,4240,1176,4240,1177,4240,1179,4238,1214,4237,1239,4236,1264,4236,1288,4236,1350,4253,1387,4270,1425,4270,1454,4270,1486,4269,1493,4266,1508,4256,1517,4245,1526,4143,1572,4111,1586,4047,1603,3977,1622,3946,1622,3922,1622,3900,1610,3878,1599,3862,1599,3846,1599,3835,1610,3824,1623,3824,1642,3824,1661,3833,1698,3833,1700,3834,1701,3833,1722,3841,1748,3850,1779,3850,1797,3850,1814,3838,1828,3817,1851,3815,1855,3810,1863,3808,1898,3806,1931,3795,1941,3772,1963,3764,1970,3753,1980,3739,1991,3719,2005,3705,2010,3691,2014,3677,2016,3661,2019,3659,2017,3659,2016,3659,2016,3613,2016,3572,1994,3531,1972,3494,1972,3451,1972,3432,1978,3420,1982,3403,1996,3356,2034,3254,2062,3212,2073,3122,2089,3103,2093,3073,2128,3061,2145,3055,2152,3044,2166,3035,2172,3037,2180,3041,2190,L,3042,2190,Q,3039,2253,3049,2281,3056,2301,3074,2310,3095,2321,3102,2332,3115,2354,3115,2409,3115,2461,3084,2485,3056,2507,2999,2510,L,2999,2541,Q,3007,2559,3045,2584,3081,2606,3081,2611,3081,2642,3077,2668,3077,2672,3075,2679,3094,2682,3106,2681,3126,2679,3144,2668,3176,2648,3197,2640,3214,2634,3231,2634,3254,2634,3279,2650,3303,2666,3320,2666,3329,2666,3340,2662,3369,2652,3369,2657,3377,2658,3383,2661,3386,2662,3397,2671,3419,2689,3420,2698,3421,2710,3420,2734,3419,2759,3420,2769,3421,2792,3426,2808,3431,2824,3444,2843,3446,2845,3457,2874,3471,2901,3485,2901,3503,2901,3520,2895,3536,2890,3544,2881,3574,2879,3584,2840,3595,2794,3613,2784,3649,2764,3671,2750,3677,2746,3693,2738,3707,2733,3715,2725,3736,2705,3759,2678,3784,2647,3790,2631,3797,2609,3820,2589,3844,2570,3872,2564,3919,2554,3990,2553,4029,2552,4102,2552,4118,2551,4129,2543,4131,2542,4149,2524,4153,2520,4174,2505,4193,2491,4197,2485,4209,2469,4235,2462,4259,2456,4300,2456,4335,2456,4351,2462,4365,2467,4391,2489,4407,2503,4433,2517,4435,2518,4481,2541,4534,2568,4566,2594,4572,2599,4587,2605,4601,2611,4604,2614,4609,2617,4633,2651,4635,2654,4639,2657,4656,2675,4690,2713,4731,2753,4783,2769,4868,2795,4889,2799,4923,2806,4981,2806,5072,2806,5144,2768,5186,2745,5196,2742,5225,2730,5257,2730,5271,2730,5293,2732,5313,2735,5332,2735,5334,2726,5334,2716,5334,2683,5326,2650,5317,2616,5317,2604,5317,2586,5334,2558,5335,2556,5336,2555,5342,2539,5358,2499,5376,2455,5383,2432,5388,2420,5400,2395,5410,2372,5415,2365,5421,2354,5425,2324,5429,2293,5432,2288,5454,2245,5527,2240,5569,2236,5652,2235,5683,2229,5705,2196,5717,2177,5736,2141,5751,2118,5786,2102,5836,2079,5847,2070,5872,2052,5870,2013,5869,1959,5874,1944,5882,1920,5891,1901,5878,1893,5854,1881,5832,1869,5813,1857,L,5748,1798,Q,5728,1787,5703,1779,5677,1772,5663,1774,5644,1778,5627,1771,5613,1766,5587,1749,5538,1719,5514,1704,5473,1678,5445,1656,5408,1627,5373,1617,5364,1614,5347,1610,5333,1607,5329,1606,5306,1596,5292,1590,5249,1562,5233,1532,5225,1517,5211,1507,5192,1494,5167,1494,5154,1494,5108,1507,5096,1509,5089,1524,5079,1541,5077,1542,5039,1561,5023,1571,4997,1589,4997,1625,4997,1647,5010,1672,5022,1698,5022,1710,5022,1732,4985,1732,4968,1732,4958,1728,4948,1723,4932,1723,4900,1723,4839,1757,4778,1790,4769,1790,4740,1786,4736,1783,4731,1779,4724,1769,4719,1761,4712,1759,4705,1755,4699,1744,4693,1732,4693,1721,4693,1706,4708,1687,4720,1672,4734,1664,4752,1652,4757,1640,4759,1634,4759,1615,4759,1599,4750,1584,4745,1574,4725,1549,4691,1505,4686,1490,4674,1458,4667,1419,4661,1372,4653,1335,4653,1334,4653,1333,4640,1287,4598,1229,4545,1164,4523,1135,4512,1122,4484,1079,4457,1037,4449,1023,4444,1015,4436,991,4429,971,4427,961,4423,946,4419,932,4416,919,4413,904,4413,904,4410,888,4408,872,4406,865,4403,858,4388,858,4372,858,4365,867,Q,4359,875,4344,878,Z]],label:"Xay District",shortLabel:"XA",labelPosition:[433.5,201.7],labelAlignment:[CEN,MID],nextId:"LA.OU.LA"},"LA.OU.LA":{outlines:[[M,5087,769,Q,5001,734,4983,718,4966,703,4952,670,4936,632,4926,613,4913,586,4880,574,4848,562,4840,541,4834,527,4827,471,4822,429,4802,409,4789,396,4759,378,4728,360,4712,345,4700,335,4660,323,4626,313,4617,292,4602,258,4587,251,4579,247,4544,247,4491,247,4467,289,4452,314,4450,317,4439,330,4421,330,4380,330,4363,307,4363,320,4364,343,4365,369,4363,387,4359,413,4370,441,4381,471,4380,482,4378,499,4378,527,4378,543,4380,577,4380,594,4386,634,4392,673,4392,684,4392,703,4389,710,4387,716,4380,739,4379,741,4379,742,4376,753,4360,774,4347,790,4344,794,4339,797,4338,811,4337,826,4340,840,4344,855,4344,875,4344,877,4344,878,4359,875,4365,867,4372,858,4388,858,4403,858,4406,865,4408,872,4410,888,4413,904,4413,904,4416,919,4419,932,4423,946,4427,961,4429,971,4436,991,4444,1015,4449,1023,4457,1037,4484,1079,4512,1122,4523,1135,4545,1164,4598,1229,4640,1287,4653,1333,4653,1334,4653,1335,4661,1372,4667,1419,4674,1458,4686,1490,4691,1505,4725,1549,4745,1574,4750,1584,4759,1599,4759,1615,4759,1634,4757,1640,4752,1652,4734,1664,4720,1672,4708,1687,4693,1706,4693,1721,4693,1732,4699,1744,4705,1755,4712,1759,4719,1761,4724,1769,4731,1779,4736,1783,4740,1786,4769,1790,4778,1790,4839,1757,4900,1723,4932,1723,4948,1723,4958,1728,4968,1732,4985,1732,5022,1732,5022,1710,5022,1698,5010,1672,4997,1647,4997,1625,4997,1589,5023,1571,5039,1561,5077,1542,5079,1541,5089,1524,5096,1509,5108,1507,5154,1494,5167,1494,5192,1494,5211,1507,5225,1517,5233,1532,5249,1562,5292,1590,5306,1596,5329,1606,5333,1607,5347,1610,5364,1614,5373,1617,5408,1627,5445,1656,5473,1678,5514,1704,5538,1719,5587,1749,5613,1766,5627,1771,5644,1778,5663,1774,5677,1772,5703,1779,5728,1787,5748,1798,L,5813,1857,Q,5832,1869,5854,1881,5878,1893,5891,1901,5900,1883,5909,1870,5919,1856,5919,1823,5919,1785,5872,1778,5848,1774,5840,1769,5825,1760,5825,1738,5825,1721,5848,1691,5871,1662,5871,1625,5871,1616,5869,1601,5866,1586,5869,1577,5872,1567,5873,1563,5874,1558,5883,1549,5915,1474,5938,1453,5960,1432,5960,1410,5960,1367,5883,1301,5795,1234,5771,1216,5754,1203,5748,1168,5740,1120,5737,1114,5728,1091,5696,1068,5669,1048,5669,1027,5669,1002,5681,984,5692,966,5692,946,5692,910,5606,878,5562,861,5511,850,5493,846,5406,807,5334,775,5300,775,5292,775,5258,790,5224,805,5191,805,Q,5172,805,5087,769,Z]],label:"La District",shortLabel:"LA",labelPosition:[498.4,112.9],labelAlignment:[CEN,MID],nextId:"LA.OU.NA"},"LA.OU.NA":{outlines:[[M,3867,126,L,3867,194,Q,3867,243,3860,298,3856,328,3854,374,3851,389,3845,427,3838,466,3831,483,3820,508,3820,554,3819,600,3816,608,3806,634,3719,667,3637,698,3637,719,3637,743,3653,774,3669,805,3669,822,3669,852,3619,850,3544,848,3539,849,3480,866,3464,878,3452,887,3423,907,3396,924,3391,929,3379,941,3368,963,3368,964,3354,996,3352,999,3345,1038,3341,1060,3322,1069,3312,1073,3237,1080,3185,1086,3180,1117,L,3180,1127,3185,1127,Q,3184,1136,3184,1148,3184,1164,3187,1176,3190,1185,3203,1194,3211,1199,3223,1207,3229,1212,3274,1234,3290,1242,3290,1277,3290,1328,3168,1345,3114,1351,2997,1351,2953,1350,2940,1350,2920,1350,2913,1355,2907,1358,2867,1438,2844,1483,2790,1507,2764,1517,2756,1520,2741,1526,2741,1532,2741,1544,2750,1562,2758,1580,2758,1619,2758,1690,2727,1727,2704,1755,2659,1769,2608,1782,2590,1790,2559,1805,2559,1837,2559,1848,2566,1867,2573,1886,2573,1896,2573,1907,2568,1917,2568,1928,2575,1935,2585,1944,2607,1944,2630,1944,2666,1930,2702,1915,2722,1915,2738,1915,2785,1962,2836,2012,2840,2043,2843,2065,2859,2078,2868,2086,2893,2105,2904,2115,2923,2137,2940,2154,2959,2154,2965,2154,2980,2145,2994,2137,3003,2137,3019,2137,3028,2156,3031,2163,3035,2172,3044,2166,3055,2152,3061,2145,3073,2128,3103,2093,3122,2089,3212,2073,3254,2062,3356,2034,3403,1996,3420,1982,3432,1978,3451,1972,3494,1972,3531,1972,3572,1994,3613,2016,3659,2016,3659,2016,3659,2017,3661,2019,3677,2016,3691,2014,3705,2010,3719,2005,3739,1991,3753,1980,3764,1970,3772,1963,3795,1941,3806,1931,3808,1898,3810,1863,3815,1855,3817,1851,3838,1828,3850,1814,3850,1797,3850,1779,3841,1748,3833,1722,3834,1701,3833,1700,3833,1698,3824,1661,3824,1642,3824,1623,3835,1610,3846,1599,3862,1599,3878,1599,3900,1610,3922,1622,3946,1622,3977,1622,4047,1603,4111,1586,4143,1572,4245,1526,4256,1517,4266,1508,4269,1493,4270,1486,4270,1454,4270,1425,4253,1387,4236,1350,4236,1288,4236,1264,4237,1239,4238,1214,4240,1179,4240,1177,4240,1176,4241,1154,4233,1139,4229,1130,4211,1108,4196,1090,4188,1073,4180,1056,4182,1035,4185,1014,4190,1012,4195,1011,4217,996,4223,991,4239,980,4254,971,4262,964,4266,959,4269,914,4270,874,4290,874,4295,874,4307,879,4320,885,4330,885,4343,885,4344,878,4344,877,4344,875,4344,855,4340,840,4337,826,4338,811,4339,797,4344,794,4347,790,4360,774,4376,753,4379,742,4379,741,4380,739,4387,716,4389,710,4392,703,4392,684,4392,673,4386,634,4380,594,4380,577,4378,543,4378,527,4378,499,4380,482,4381,471,4370,441,4359,413,4363,387,4365,369,4364,343,4363,320,4363,307,4362,306,4361,305,4351,289,4347,249,4344,205,4336,190,4323,161,4286,156,4269,154,4226,155,4185,156,4161,153,4144,124,4126,96,4089,40,4069,40,4037,40,4013,59,3988,77,3952,77,3932,77,3906,60,3879,43,3876,43,3867,43,3852,59,3837,74,3837,86,3837,96,3849,106,Q,3864,119,3867,126,Z]],label:"Namo District",shortLabel:"NA",labelPosition:[369.5,116.1],labelAlignment:[CEN,MID],nextId:"LA.OU.NG"},"LA.OU.NG":{outlines:[[M,4639,2657,Q,4527,2801,4513,2844,4499,2888,4496,2916,4492,2944,4478,2992,4465,3041,4466,3066,4466,3108,4460,3194,4452,3279,4452,3309,4452,3312,4452,3314,4454,3432,4453,3447,4452,3463,4434,3479,4416,3495,4386,3511,4355,3526,4340,3531,4326,3536,4270,3581,4241,3637,4223,3662,4210,3681,4172,3719,4131,3759,4108,3790,L,4080,3831,Q,4063,3856,4053,3868,4043,3880,4019,3903,3994,3927,3988,3934,3986,3935,3986,3936,3967,3960,3889,4045,3832,4108,3797,4161,3794,4165,3790,4170,3776,4188,3749,4215,3715,4247,3698,4277,3689,4292,3655,4331,3627,4362,3618,4382,3617,4384,3616,4386,3446,4628,3438,4638,3428,4648,3402,4669,3374,4691,3356,4711,3338,4730,3301,4760,3265,4790,3236,4825,3207,4861,3190,4906,3174,4952,3173,4996,3171,5040,3172,5114,3176,5135,3193,5150,3218,5170,3222,5176,3235,5161,3286,5143,3367,5115,3382,5101,3431,5063,3456,5043,3499,5007,3507,4982,3513,4975,3536,4953,3558,4931,3569,4924,3580,4918,3632,4918,3672,4918,3717,4926,3761,4933,3794,4933,3833,4933,3893,4902,3952,4870,3976,4870,3981,4870,4003,4873,4024,4877,4029,4877,4051,4877,4104,4841,4173,4794,4180,4791,4242,4761,4300,4737,4330,4722,4345,4690,4377,4625,4470,4544,4561,4465,4600,4465,4626,4465,4678,4478,4731,4491,4759,4491,4814,4491,4879,4458,4915,4439,4979,4398,5001,4385,5038,4378,5059,4374,5100,4367,5167,4351,5166,4289,5165,4262,5170,4245,5175,4225,5188,4210,5204,4194,5231,4167,5254,4144,5267,4128,5283,4107,5335,4059,5379,4011,5379,3957,5379,3922,5366,3906,5358,3895,5335,3885,5279,3860,5255,3798,5229,3729,5184,3703,5165,3692,5160,3683,5151,3668,5151,3633,5151,3588,5158,3557,5167,3514,5192,3484,5201,3473,5252,3432,5291,3392,5269,3356,5264,3351,5243,3313,5232,3291,5202,3288,5165,3288,5149,3286,5122,3282,5122,3262,5122,3245,5155,3217,5189,3188,5189,3161,5189,3138,5181,3105,5172,3071,5172,3050,5172,3011,5204,2958,5235,2907,5233,2859,5242,2816,5291,2785,5323,2764,5332,2735,5313,2735,5293,2732,5271,2730,5257,2730,5225,2730,5196,2742,5186,2745,5144,2768,5072,2806,4981,2806,4923,2806,4889,2799,4868,2795,4783,2769,4731,2753,4690,2713,Q,4656,2675,4639,2657,Z]],label:"Nga District",shortLabel:"NG",labelPosition:[463.3,383.4],labelAlignment:[CEN,MID],nextId:"LA.OU.BE"},"LA.OU.BE":{outlines:[[M,4300,2456,Q,4259,2456,4235,2462,4209,2469,4197,2485,4193,2491,4174,2505,4153,2520,4149,2524,4131,2542,4129,2543,4118,2551,4102,2552,4029,2552,3990,2553,3919,2554,3872,2564,3844,2570,3820,2589,3797,2609,3790,2631,3784,2647,3759,2678,3736,2705,3715,2725,3707,2733,3693,2738,3677,2746,3671,2750,3649,2764,3613,2784,3595,2794,3584,2840,3574,2879,3544,2881,3536,2890,3520,2895,3503,2901,3485,2901,3471,2901,3457,2874,3446,2845,3444,2843,3431,2824,3426,2808,3421,2792,3420,2769,3419,2759,3420,2734,3421,2710,3420,2698,3419,2689,3397,2671,3386,2662,3383,2661,3377,2658,3369,2657,L,3369,2658,Q,3369,2657,3368,2657,3369,2657,3369,2657,3369,2652,3340,2662,3329,2666,3320,2666,3303,2666,3279,2650,3254,2634,3231,2634,3214,2634,3197,2640,3176,2648,3144,2668,3126,2679,3106,2681,3094,2682,3075,2679,3073,2693,3067,2722,3060,2754,3047,2775,3033,2795,3009,2808,2982,2823,2978,2854,2974,2886,2952,2902,2931,2916,2882,2925,2843,2932,2843,2944,2843,2958,2858,2982,2874,3006,2874,3018,2874,3035,2831,3100,2789,3166,2792,3166,2766,3206,2739,3263,2715,3301,2674,3301,2668,3346,2711,3365,2736,3377,2800,3392,2810,3395,2839,3406,2860,3414,2876,3419,2907,3428,2915,3442,2921,3451,2920,3478,L,2920,3523,Q,2920,3537,2892,3547,2876,3551,2849,3565,2824,3578,2812,3580,2734,3595,2724,3600,2684,3617,2684,3666,2684,3707,2717,3712,2733,3713,2750,3712,2777,3712,2822,3699,2863,3687,2894,3686,2894,3688,2907,3687,2923,3686,2929,3686,2934,3687,2940,3690,2943,3692,2949,3696,2959,3702,2994,3717,3e3,3719,3036,3732,3063,3742,3084,3753,3096,3758,3095,3773,3095,3782,3094,3796,3095,3805,3095,3818,3095,3825,3094,3839,L,3094,3921,Q,3095,3923,3095,3926,3095,3933,3094,3945,3094,3961,3102,3970,3127,3998,3139,4007,3178,4035,3247,4035,3266,4035,3312,4034,3351,4035,3368,4044,3375,4048,3417,4075,3459,4099,3474,4099,3478,4099,3492,4088,3507,4076,3521,4076,3538,4076,3541,4095,3542,4106,3542,4121,3546,4130,3562,4141,3582,4156,3599,4156,3609,4156,3645,4127,3680,4097,3709,4097,3726,4097,3757,4131,3773,4149,3790,4170,3794,4165,3797,4161,3832,4108,3889,4045,3967,3960,3986,3936,3986,3935,3988,3934,3994,3927,4019,3903,4043,3880,4053,3868,4063,3856,4080,3831,L,4108,3790,Q,4131,3759,4172,3719,4210,3681,4223,3662,4241,3637,4270,3581,4326,3536,4340,3531,4355,3526,4386,3511,4416,3495,4434,3479,4452,3463,4453,3447,4454,3432,4452,3314,4452,3312,4452,3309,4452,3279,4460,3194,4466,3108,4466,3066,4465,3041,4478,2992,4492,2944,4496,2916,4499,2888,4513,2844,4527,2801,4639,2657,4635,2654,4633,2651,4609,2617,4604,2614,4601,2611,4587,2605,4572,2599,4566,2594,4534,2568,4481,2541,4435,2518,4433,2517,4407,2503,4391,2489,4365,2467,4351,2462,Q,4335,2456,4300,2456,Z]],label:"Beng District",shortLabel:"BE",labelPosition:[365.6,331.3],labelAlignment:[CEN,MID],nextId:"LA.OU.HO"},"LA.OU.HO":{outlines:[[M,2592,3283,Q,2569,3283,2540,3312,2507,3345,2496,3349,2460,3362,2432,3363,2395,3362,2365,3362,2320,3362,2301,3363,2269,3363,2245,3368,2233,3371,2194,3395,2158,3416,2128,3416,1939,3415,1939,3407,1938,3407,1938,3407,1913,3407,1906,3409,1895,3413,1883,3430,1877,3438,1852,3456,1834,3470,1834,3484,1834,3485,1875,3589,1916,3692,1916,3709,1916,3728,1890,3749,1864,3770,1864,3780,1864,3797,1878,3805,1885,3809,1909,3815,1953,3827,1953,3864,1953,3866,1945,3929,1937,3987,1935,4010,1935,4014,1935,4017,1930,4069,1930,4070,1922,4106,1897,4119,1882,4121,1870,4124,1847,4129,1840,4140,1826,4160,1815,4188,1810,4204,1808,4251,1801,4294,1767,4305,1715,4325,1699,4330,1676,4338,1641,4338,1623,4338,1607,4335,1608,4347,1609,4409,1610,4450,1633,4484,1639,4492,1686,4545,1713,4577,1720,4601,1721,4604,1721,4607,1745,4714,1749,4753,1752,4780,1788,4818,1799,4830,1813,4847,1827,4866,1839,4879,1885,4932,1976,4947,2026,4956,2128,4967,2204,4982,2279,5036,2381,5112,2402,5122,2419,5131,2472,5155,2520,5179,2538,5197,2569,5228,2581,5268,2585,5282,2592,5336,2607,5334,2620,5333,L,2620,5333,Q,2630,5329,2651,5332,2671,5333,2710,5350,2741,5364,2742,5364,2748,5365,2782,5365,2804,5367,2830,5365,2854,5364,2879,5346,2904,5328,2910,5326,2917,5323,2940,5323,2967,5323,2989,5334,3010,5344,3063,5344,3098,5344,3181,5308,3271,5269,3271,5243,3271,5226,3245,5209,3218,5191,3218,5185,3218,5181,3222,5176,3218,5170,3193,5150,3176,5135,3172,5114,3171,5040,3173,4996,3174,4952,3190,4906,3207,4861,3236,4825,3265,4790,3301,4760,3338,4730,3356,4711,3374,4691,3402,4669,3428,4648,3438,4638,3446,4628,3616,4386,3617,4384,3618,4382,3627,4362,3655,4331,3689,4292,3698,4277,3715,4247,3749,4215,3776,4188,3790,4170,3773,4149,3757,4131,3726,4097,3709,4097,3680,4097,3645,4127,3609,4156,3599,4156,3582,4156,3562,4141,3546,4130,3542,4121,3542,4106,3541,4095,3538,4076,3521,4076,3507,4076,3492,4088,3478,4099,3474,4099,3459,4099,3417,4075,3375,4048,3368,4044,3351,4035,3312,4034,3266,4035,3247,4035,3178,4035,3139,4007,3127,3998,3102,3970,3094,3961,3094,3945,3095,3933,3095,3926,3095,3923,3094,3921,L,3094,3839,Q,3095,3825,3095,3818,3095,3805,3094,3796,3095,3782,3095,3773,3096,3758,3084,3753,3063,3742,3036,3732,3e3,3719,2994,3717,2959,3702,2949,3696,2943,3692,2940,3690,2934,3687,2929,3686,2923,3686,2907,3687,2894,3688,2894,3686,2863,3687,2822,3699,2777,3712,2750,3712,2733,3713,2717,3712,2684,3707,2684,3666,2684,3617,2724,3600,2734,3595,2812,3580,2824,3578,2849,3565,2876,3551,2892,3547,2920,3537,2920,3523,L,2920,3478,Q,2921,3451,2915,3442,2907,3428,2876,3419,2860,3414,2839,3406,2810,3395,2800,3392,2736,3377,2711,3365,2668,3346,2674,3301,L,2674,3301,Q,2661,3301,2639,3292,Q,2616,3283,2592,3283,Z]],label:"Houne District",shortLabel:"HO",labelPosition:[258.8,432.4],labelAlignment:[CEN,MID],nextId:"LA.OU.PA"},"LA.OU.PA":{outlines:[[M,1267,4127,Q,1158,4127,1109,4185,1102,4194,1086,4230,1070,4265,1053,4284,1051,4285,1009,4324,993,4339,993,4358,993,4375,1021,4399,1050,4422,1050,4428,1050,4454,1e3,4464,941,4475,932,4485,920,4499,887,4544,854,4581,827,4581,819,4581,800,4569,782,4557,775,4557,770,4557,744,4603,717,4651,704,4656,669,4672,651,4676,630,4681,581,4681,528,4681,463,4675,397,4668,363,4668,347,4668,317,4677,287,4686,267,4686,260,4686,236,4675,211,4665,202,4665,188,4665,162,4705,130,4755,127,4758,113,4772,66,4797,40,4810,40,4844,40,4901,86,4917,99,4922,127,4930,152,4939,167,4953,178,4965,178,4993,177,5024,188,5041,198,5058,217,5069,238,5083,264,5083,275,5083,293,5078,310,5074,321,5074,335,5074,399,5105,463,5136,488,5136,504,5136,549,5132,595,5128,614,5128,697,5128,727,5137,765,5147,850,5200,853,5202,857,5205,886,5223,934,5250,1013,5293,1028,5293,1047,5293,1069,5269,1090,5245,1093,5245,1094,5245,1128,5262,1165,5279,1181,5279,1212,5279,1247,5250,1263,5237,1309,5187,1395,5095,1464,5095,1466,5095,1494,5107,1508,5113,1522,5119,1536,5127,1554,5151,1575,5178,1576,5179,1602,5205,1637,5228,1659,5242,1696,5263,1781,5311,1842,5356,1880,5378,1978,5378,2013,5378,2069,5352,2126,5327,2170,5327,2215,5327,2263,5343,2311,5359,2349,5360,2388,5361,2396,5360,2403,5358,2484,5348,2545,5341,2592,5336,2585,5282,2581,5268,2569,5228,2538,5197,2520,5179,2472,5155,2419,5131,2402,5122,2381,5112,2279,5036,2204,4982,2128,4967,2026,4956,1976,4947,1885,4932,1839,4879,1827,4866,1813,4847,1799,4830,1788,4818,1752,4780,1749,4753,1745,4714,1721,4607,1721,4604,1720,4601,1713,4577,1686,4545,1639,4492,1633,4484,1610,4450,1609,4409,1608,4347,1607,4335,1575,4329,1553,4311,1508,4274,1443,4257,1391,4243,1349,4182,1330,4154,1317,4144,Q,1297,4127,1267,4127,Z]],label:"Pakbeng District",shortLabel:"PA",labelPosition:[115.1,475.2],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"oudomxay",type:"maps"}}})});