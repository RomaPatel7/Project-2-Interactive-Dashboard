(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=12)})({12:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(13);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},13:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.Lhuntse.1.06-18-2019 09:36:33
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Lhuntse",revision:1,creditLabel:false,standaloneInit:false,baseWidth:546,baseHeight:600,baseScaleFactor:10,firstEntity:"BT.LH.GZ",entities:{"BT.LH.GZ":{outlines:[[M,3404,2063,Q,3407,2082,3394,2110,3382,2138,3386,2163,3389,2178,3385,2185,3383,2190,3376,2191,3366,2191,3363,2193,3358,2194,3354,2213,3349,2235,3344,2242,3339,2249,3338,2265,3338,2282,3335,2286,3329,2294,3319,2295,3309,2297,3300,2311,3287,2329,3272,2330,3257,2330,3234,2330,3210,2329,3198,2331,3186,2333,3176,2335,3165,2335,3156,2338,3145,2341,3145,2345,3141,2360,3121,2367,3105,2373,3089,2371,3082,2371,3072,2375,3062,2381,3057,2383,3056,2383,3042,2384,3032,2385,3029,2391,3027,2394,3024,2427,3021,2449,3009,2457,3007,2457,3006,2458,L,2950,2458,Q,2945,2464,2939,2481,2934,2493,2928,2497,2902,2512,2897,2525,2895,2530,2893,2543,2890,2555,2877,2556,2862,2554,2854,2555,2839,2555,2835,2571,L,2804,2571,Q,2798,2553,2786,2553,2778,2553,2778,2554,2776,2559,2771,2567,2769,2570,2751,2569,2726,2587,2716,2593,2705,2598,2696,2600,2692,2601,2689,2606,2686,2612,2682,2613,2667,2614,2649,2615,2626,2615,2626,2613,2589,2613,2579,2611,2564,2609,2546,2599,2541,2596,2529,2592,2512,2588,2509,2586,2499,2582,2495,2571,2492,2558,2491,2556,2483,2540,2463,2523,2447,2509,2447,2497,L,2447,2419,Q,2448,2407,2448,2401,2449,2389,2446,2383,2441,2373,2431,2368,2419,2363,2414,2360,2406,2355,2381,2345,2361,2337,2355,2329,2334,2303,2284,2298,2274,2297,2200,2297,L,2200,2297,Q,2199,2297,2198,2297,L,2199,2297,Q,2193,2292,2132,2297,2115,2297,2108,2297,2097,2298,2092,2303,2088,2307,2074,2307,2063,2307,2058,2319,2049,2336,2046,2338,2044,2339,2026,2339,2003,2339,1962,2315,1916,2288,1897,2279,1861,2261,1839,2250,1800,2231,1780,2225,1706,2227,1682,2226,1672,2225,1635,2214,1603,2204,1582,2207,1568,2209,1545,2198,1519,2186,1500,2186,1437,2183,1395,2183,1386,2183,1382,2186,1378,2188,1366,2197,1363,2199,1353,2199,1343,2199,1338,2201,1323,2207,1308,2219,1299,2226,1283,2226,1271,2226,1259,2221,1246,2217,1231,2217,L,1167,2217,Q,1114,2217,1096,2215,1085,2215,1081,2215,1073,2214,1069,2210,1058,2197,1048,2197,1031,2196,1023,2189,1018,2185,1007,2166,1003,2159,962,2117,944,2092,929,2077,904,2051,881,2051,866,2051,849,2060,833,2069,808,2069,779,2066,768,2067,752,2068,737,2084,737,2084,738,2085,744,2090,759,2109,767,2117,771,2127,772,2131,775,2147,785,2201,793,2216,805,2240,808,2249,813,2264,840,2277,851,2282,859,2282,867,2284,885,2284,904,2283,909,2284,916,2285,927,2291,932,2294,944,2296,956,2299,964,2299,980,2299,984,2300,987,2301,998,2312,1016,2326,1024,2335,1035,2345,1048,2365,1055,2376,1076,2385,L,1112,2396,Q,1117,2397,1130,2396,1141,2397,1142,2404,1142,2409,1145,2444,1145,2474,1150,2485,1150,2487,1150,2505,1150,2517,1159,2524,1169,2531,1184,2540,1194,2547,1198,2555,1198,2556,1213,2571,1215,2573,1214,2593,1215,2605,1213,2638,1211,2669,1217,2685,1228,2718,1233,2725,1246,2743,1246,2762,L,1246,2763,Q,1248,2767,1256,2778,1266,2791,1270,2799,1272,2803,1282,2821,1292,2839,1292,2845,1292,2859,1288,2865,1286,2867,1268,2884,1262,2888,1249,2894,1243,2897,1233,2898,1225,2900,1223,2900,1217,2902,1216,2909,1213,2918,1208,2923,1198,2933,1198,2945,1198,2948,1192,2956,1187,2964,1187,2969,L,1187,2998,Q,1187,2999,1187,3028,1187,3034,1194,3037,1207,3042,1210,3044,1216,3049,1222,3054,1228,3059,1233,3059,1239,3059,1256,3059,1270,3058,1270,3059,L,1319,3059,Q,1337,3058,1353,3059,1370,3060,1378,3059,1385,3059,1413,3059,1440,3058,1464,3080,1489,3101,1540,3151,1592,3201,1649,3268,1704,3335,1708,3342,1712,3349,1719,3404,1721,3414,1721,3437,1721,3465,1709,3488,1698,3512,1698,3561,1698,3620,1699,3634,1700,3644,1719,3657,1740,3672,1745,3688,1750,3703,1763,3760,1777,3820,1777,3828,1777,3850,1747,3888,1721,3921,1720,3952,1719,3956,1720,3959,1719,3964,1719,3972,1718,3985,1713,3991,1701,4005,1693,4014,L,1705,4014,Q,1727,4019,1746,4019,1757,4019,1782,4018,1790,4018,1801,4018,1809,4019,1823,4026,1832,4031,1844,4032,1858,4035,1864,4037,1866,4037,1874,4042,1882,4047,1887,4048,1899,4048,1905,4053,1914,4060,1945,4080,1953,4085,1963,4091,1970,4095,1976,4104,1978,4106,1988,4118,1991,4121,1992,4127,1994,4132,1999,4132,2022,4131,2094,4133,2112,4133,2117,4128,2131,4116,2145,4108,2153,4104,2173,4104,2183,4104,2205,4105,L,2238,4105,Q,2244,4105,2250,4111,2254,4114,2259,4120,2266,4125,2280,4145,2289,4158,2302,4158,2311,4158,2315,4152,2318,4146,2332,4143,2338,4142,2348,4134,2359,4123,2363,4121,2371,4113,2376,4111,2384,4105,2396,4105,L,2439,4105,Q,2461,4106,2507,4100,2507,4092,2510,4082,2510,4080,2515,4075,2519,4071,2520,4067,2519,4051,2519,4044,2519,4032,2528,4028,2541,4022,2566,4004,2572,3999,2581,3987,2588,3978,2594,3975,2600,3972,2626,3948,2645,3931,2661,3933,2682,3936,2711,3933,2714,3932,2722,3926,2724,3923,2727,3921,2740,3907,2741,3906,L,2888,3906,Q,2897,3903,2905,3895,2914,3885,2916,3883,2925,3875,2931,3875,L,2949,3875,Q,2950,3875,2951,3874,L,2951,3875,Q,2968,3875,2971,3878,2973,3880,2988,3897,2992,3900,3e3,3900,3005,3900,3015,3900,3018,3900,3024,3904,3026,3907,3032,3911,3041,3918,3057,3918,3067,3918,3087,3918,3103,3917,3114,3923,3125,3929,3134,3929,3134,3928,3151,3928,3153,3928,3158,3919,3160,3912,3173,3900,3187,3890,3195,3885,3195,3870,3195,3860,3195,3841,3204,3840,3206,3839,3216,3837,3225,3834,3228,3830,3234,3817,3239,3811,3262,3781,3271,3772,3295,3747,3315,3746,3320,3746,3335,3737,3343,3733,3358,3728,3368,3724,3371,3709,3371,3691,3371,3682,L,3371,3617,3382,3613,Q,3389,3609,3399,3598,3391,3593,3390,3592,3383,3589,3373,3588,3369,3587,3365,3584,3358,3581,3357,3580,L,3337,3574,3320,3565,Q,3310,3560,3303,3561,3292,3561,3292,3551,3294,3541,3294,3535,3293,3533,3293,3533,3292,3523,3285,3514,3275,3501,3270,3491,3266,3485,3252,3487,3234,3488,3227,3487,3216,3484,3190,3465,3189,3464,3171,3459,3166,3457,3166,3447,L,3167,3438,Q,3167,3420,3168,3418,3178,3414,3191,3406,3201,3399,3232,3381,3235,3379,3254,3361,3267,3348,3275,3344,3284,3340,3284,3320,3282,3303,3282,3297,L,3282,3120,Q,3282,3110,3277,3103,3277,3102,3267,3090,3260,3080,3256,3075,3249,3067,3244,3062,3228,3049,3210,3045,3196,3042,3195,3031,3196,3020,3195,3014,3195,3005,3188,2997,3183,2992,3183,2981,3183,2971,3194,2969,3206,2968,3209,2958,3211,2949,3211,2935,3210,2919,3210,2911,3208,2901,3219,2895,3232,2889,3233,2882,L,3234,2845,Q,3234,2842,3234,2839,3232,2826,3234,2819,3237,2801,3252,2792,3265,2783,3276,2766,3282,2758,3301,2758,L,3328,2760,Q,3335,2760,3365,2743,3382,2738,3386,2734,3387,2733,3391,2726,3395,2721,3400,2718,3409,2713,3410,2702,3411,2687,3411,2680,3411,2673,3416,2663,3422,2651,3424,2644,3422,2635,3429,2629,3433,2626,3446,2619,L,3475,2592,Q,3480,2587,3486,2579,3492,2572,3500,2566,3501,2565,3528,2544,3528,2543,3529,2541,3531,2536,3541,2530,3554,2523,3554,2510,L,3555,2411,Q,3555,2407,3566,2390,3567,2387,3568,2380,3569,2373,3571,2370,3579,2355,3582,2351,3589,2343,3599,2338,3600,2338,3606,2333,3610,2329,3616,2329,L,3641,2326,Q,3657,2325,3656,2294,3655,2269,3655,2256,3655,2255,3655,2254,3653,2218,3655,2184,3657,2140,3658,2127,3659,2120,3665,2111,3655,2109,3644,2110,3639,2110,3637,2114,3634,2120,3630,2122,3622,2127,3592,2127,L,3569,2127,Q,3563,2127,3560,2122,3555,2117,3551,2115,3541,2110,3540,2092,3540,2073,3539,2069,3520,2069,3518,2069,3509,2069,3502,2064,3486,2053,3467,2053,3454,2053,3435,2058,Q,3416,2063,3404,2063,Z]],label:"Gangzur Gewog",shortLabel:"GZ",labelPosition:[228.9,323.6],labelAlignment:[CEN,MID],nextId:"BT.LH.JR"},"BT.LH.JR":{outlines:[[M,2996,4855,L,2996,4880,Q,2996,4880,2991,4898,2990,4902,2981,4917,2975,4932,2976,4938,2976,4944,2968,4951,2963,4956,2953,4966,2943,4976,2933,4996,2923,5016,2920,5038,2920,5048,2907,5053,2902,5055,2898,5059,2893,5064,2888,5066,2882,5069,2874,5078,2868,5085,2862,5088,2839,5093,2809,5093,2804,5093,2801,5088,L,2795,5080,Q,2781,5073,2776,5065,2767,5048,2763,5044,2758,5037,2743,5037,2734,5037,2733,5037,2732,5037,2722,5044,2719,5045,2710,5048,2704,5050,2701,5053,2695,5060,2655,5060,2629,5060,2626,5057,2621,5053,2601,5053,2599,5053,2598,5053,2598,5053,2600,5053,L,2601,5053,Q,2598,5050,2587,5051,2573,5053,2564,5063,2562,5065,2556,5075,2550,5085,2543,5084,2527,5083,2504,5086,2477,5089,2468,5096,2459,5102,2433,5121,2423,5122,2416,5124,2403,5125,2398,5130,2391,5139,2386,5139,2369,5140,2365,5140,L,2342,5168,Q,2339,5176,2331,5181,2323,5186,2320,5192,2315,5202,2311,5206,2304,5212,2292,5212,2285,5212,2279,5203,2272,5195,2260,5194,2253,5194,2249,5194,2241,5194,2239,5192,2231,5182,2225,5182,L,2208,5182,Q,2201,5161,2196,5156,2184,5142,2180,5137,2172,5129,2163,5129,2155,5127,2143,5128,2130,5129,2124,5129,2117,5129,2105,5124,2093,5121,2087,5120,2055,5121,2042,5120,2036,5119,2032,5113,2027,5106,2024,5107,2006,5107,1999,5107,1998,5107,1997,5107,1996,5107,1996,5107,1976,5106,1963,5107,1958,5107,1952,5117,L,1943,5124,Q,1939,5127,1933,5146,1928,5163,1917,5169,1917,5170,1917,5172,1917,5174,1879,5218,1839,5266,1826,5301,1814,5336,1763,5436,1735,5511,1680,5536,1659,5547,1651,5559,1640,5577,1640,5623,1640,5644,1645,5653,1650,5663,1673,5678,1682,5684,1697,5698,1711,5709,1725,5718,1749,5732,1761,5773,1768,5795,1775,5834,1777,5838,1783,5842,1791,5848,1791,5853,1791,5861,1793,5876,1808,5875,1828,5875,1843,5875,1912,5884,1925,5886,1951,5885,1975,5886,1992,5896,2023,5916,2061,5932,2064,5934,2077,5944,2088,5954,2096,5955,2110,5957,2145,5957,L,2190,5957,Q,2188,5918,2197,5891,2209,5850,2241,5853,2271,5855,2300,5835,2316,5823,2348,5788,2381,5752,2443,5693,2516,5624,2534,5607,2535,5605,2537,5604,2586,5557,2618,5534,2624,5529,2634,5511,2641,5498,2657,5493,2673,5488,2706,5491,2733,5491,2736,5492,2748,5494,2772,5501,2793,5504,2834,5503,2845,5503,2863,5511,2880,5518,2895,5517,2950,5514,2974,5523,3017,5539,3045,5536,3063,5535,3082,5541,3093,5544,3110,5549,3120,5552,3128,5556,3128,5540,3133,5517,3139,5493,3139,5478,L,3139,5397,Q,3140,5352,3150,5319,3153,5307,3153,5242,3159,5234,3199,5220,3229,5207,3223,5177,3223,5171,3229,5164,3236,5154,3237,5152,3238,5146,3238,5137,3238,5122,3238,5119,L,3237,4967,3223,4937,Q,3213,4916,3208,4905,3203,4903,3199,4891,3196,4880,3197,4873,3199,4865,3191,4855,3183,4845,3183,4842,3181,4832,3181,4820,3138,4822,3113,4822,L,3100,4822,3092,4820,Q,3087,4817,3085,4813,3084,4807,3082,4804,3079,4797,3077,4783,3075,4772,3071,4766,L,3066,4766,Q,3062,4792,3062,4799,3054,4804,3046,4804,3033,4803,3029,4804,3017,4802,3010,4804,2997,4806,2998,4820,Q,2998,4828,2996,4855,Z]],label:"Jaray Gewog",shortLabel:"JR",labelPosition:[243.9,536.1],labelAlignment:[CEN,MID],nextId:"BT.LH.KM"},"BT.LH.KM":{outlines:[[M,4413,180,Q,4366,167,4353,141,4313,117,4216,83,4191,73,4136,68,4090,63,4046,63,4014,63,3956,69,3898,75,3884,75,3819,75,3771,58,3723,42,3690,42,3652,42,3619,56,3578,73,3578,102,3578,110,3582,146,3586,182,3586,210,3586,294,3577,321,3574,329,3568,339,3572,339,3581,341,3589,342,3592,344,3596,345,3604,351,3610,355,3614,355,3623,357,3642,357,3659,360,3673,367,3738,403,3757,435,3771,459,3800,485,3817,500,3847,525,3853,531,3869,550,3883,566,3893,567,3903,569,3918,577,3938,588,3937,591,3941,595,3946,602,3952,608,3953,613,3955,616,3940,638,3923,660,3915,664,3903,669,3894,684,3885,701,3885,719,3882,740,3881,788,3877,831,3854,849,3841,865,3826,874,3801,879,3795,884,3789,887,3785,897,3781,905,3781,912,3781,920,3774,927,3767,934,3764,937,3753,946,3748,950,3741,955,3738,962,3737,967,3738,979,3738,988,3731,995,3703,1018,3698,1049,3697,1052,3697,1054,3695,1070,3700,1087,3710,1115,3711,1131,3714,1157,3728,1173,3740,1186,3740,1208,3740,1226,3731,1231,3715,1240,3705,1254,3690,1274,3666,1303,L,3666,1336,Q,3682,1332,3688,1340,3699,1352,3703,1353,3708,1355,3715,1355,3721,1356,3725,1364,L,3734,1385,Q,3737,1392,3749,1397,3763,1403,3770,1410,3776,1416,3786,1428,3796,1438,3804,1437,L,3805,1437,Q,3821,1435,3834,1440,3842,1443,3853,1449,3855,1450,3877,1455,3889,1458,3893,1469,3905,1514,3913,1532,3915,1537,3915,1573,3915,1585,3910,1646,3910,1652,3915,1664,3919,1677,3919,1680,L,3876,1742,Q,3867,1764,3862,1775,3854,1796,3839,1797,L,3796,1798,Q,3788,1798,3776,1803,3765,1808,3758,1807,3721,1803,3709,1847,3708,1873,3721,1900,3723,1905,3724,1924,3725,1934,3729,1935,3734,1937,3734,1943,3734,1951,3715,1969,3695,1988,3695,2006,3695,2021,3710,2030,3724,2039,3724,2049,3724,2049,3692,2081,3674,2099,3665,2111,3659,2120,3658,2127,3657,2140,3655,2184,3653,2218,3655,2254,3655,2255,3655,2256,3655,2269,3656,2294,3657,2325,3641,2326,L,3616,2329,Q,3610,2329,3606,2333,3600,2338,3599,2338,3589,2343,3582,2351,3579,2355,3571,2370,3569,2373,3568,2380,3567,2387,3566,2390,3555,2407,3555,2411,L,3554,2510,Q,3554,2523,3541,2530,3531,2536,3529,2541,3528,2543,3528,2544,3501,2565,3500,2566,3492,2572,3486,2579,3480,2587,3475,2592,L,3446,2619,Q,3433,2626,3429,2629,3422,2635,3424,2644,3422,2651,3416,2663,3411,2673,3411,2680,3411,2687,3410,2702,3409,2713,3400,2718,3395,2721,3391,2726,3387,2733,3386,2734,3382,2738,3365,2743,3335,2760,3328,2760,L,3301,2758,Q,3282,2758,3276,2766,3265,2783,3252,2792,3237,2801,3234,2819,3232,2826,3234,2839,3234,2842,3234,2845,L,3233,2882,Q,3232,2889,3219,2895,3208,2901,3210,2911,3210,2919,3211,2935,3211,2949,3209,2958,3206,2968,3194,2969,3183,2971,3183,2981,3183,2992,3188,2997,3195,3005,3195,3014,3196,3020,3195,3031,3196,3042,3210,3045,3228,3049,3244,3062,3249,3067,3256,3075,3260,3080,3267,3090,3277,3102,3277,3103,3282,3110,3282,3120,L,3282,3297,Q,3282,3303,3284,3320,3284,3340,3275,3344,3267,3348,3254,3361,3235,3379,3232,3381,3201,3399,3191,3406,3178,3414,3168,3418,3167,3420,3167,3438,L,3166,3447,Q,3166,3457,3171,3459,3189,3464,3190,3465,3216,3484,3227,3487,3234,3488,3252,3487,3266,3485,3270,3491,3275,3501,3285,3514,3292,3523,3293,3533,3293,3533,3294,3535,3294,3541,3292,3551,3292,3561,3303,3561,3310,3560,3320,3565,L,3337,3574,3357,3580,Q,3358,3581,3365,3584,3369,3587,3373,3588,3383,3589,3390,3592,3391,3593,3399,3598,3401,3599,3405,3601,3414,3607,3419,3616,3427,3616,3437,3621,3451,3627,3454,3628,3460,3629,3472,3638,3483,3646,3490,3645,3517,3641,3524,3659,3524,3660,3536,3672,3549,3686,3552,3686,3561,3686,3601,3683,3632,3683,3635,3683,3640,3684,3679,3687,3706,3688,3718,3689,3727,3690,3741,3695,3753,3700,3761,3700,3786,3700,3809,3710,3823,3717,3849,3734,L,3886,3759,Q,3895,3764,3899,3779,3903,3796,3907,3799,3915,3807,3920,3819,3922,3827,3926,3845,3928,3852,3958,3873,3979,3893,3996,3903,4027,3924,4032,3928,4032,3928,4070,3956,4095,3976,4110,3985,4118,3990,4133,3989,4146,3988,4155,3992,4180,4006,4199,4006,L,4242,4006,Q,4250,4006,4255,4009,4257,4012,4263,4017,4265,4018,4276,4019,4286,4020,4289,4020,L,4331,4019,Q,4334,4019,4345,4012,4349,4008,4364,4008,4379,4008,4384,4009,4385,3994,4392,3983,4394,3979,4399,3975,4401,3971,4400,3964,4399,3944,4399,3943,4399,3930,4403,3926,4417,3914,4424,3904,4446,3874,4451,3866,4471,3832,4483,3819,4485,3814,4485,3784,4485,3762,4483,3753,4480,3742,4468,3722,4465,3716,4462,3708,4458,3698,4455,3691,4445,3685,4444,3676,L,4444,3667,Q,4444,3665,4444,3662,4444,3650,4453,3644,4457,3641,4460,3636,4462,3633,4465,3625,4471,3614,4471,3601,L,4471,3574,Q,4472,3548,4472,3541,4471,3531,4468,3510,4455,3468,4455,3444,4456,3425,4456,3416,4456,3401,4450,3386,4447,3380,4445,3354,4445,3330,4444,3324,4444,3323,4444,3323,L,4445,3310,Q,4445,3282,4437,3275,4430,3267,4430,3247,4430,3231,4435,3229,4440,3225,4442,3224,4443,3222,4448,3214,4451,3207,4460,3201,4465,3196,4479,3186,4494,3173,4497,3154,4500,3134,4500,3113,4501,3091,4503,3087,4503,3083,4500,3070,4497,3057,4488,3039,4484,3033,4470,3015,4454,2994,4451,2989,4440,2973,4430,2941,4427,2933,4427,2891,L,4427,2836,Q,4428,2797,4427,2779,4425,2764,4435,2751,4440,2745,4450,2737,4455,2725,4480,2687,4497,2658,4508,2629,4516,2619,4518,2615,4522,2607,4528,2599,L,4541,2572,Q,4544,2565,4544,2558,4553,2548,4555,2544,4559,2535,4559,2528,4559,2520,4559,2513,4559,2495,4554,2489,4546,2475,4542,2459,L,4534,2431,Q,4531,2414,4529,2406,4528,2403,4529,2402,L,4529,2398,Q,4528,2393,4523,2386,4517,2380,4516,2378,4514,2375,4514,2360,4514,2344,4523,2330,4537,2307,4544,2288,4549,2275,4557,2257,4570,2230,4571,2226,4571,2219,4578,2207,4585,2194,4586,2191,4584,2186,4597,2158,4602,2147,4601,2120,4600,2092,4600,2082,4600,2080,4602,2064,4604,2047,4597,2018,4589,1988,4587,1974,4584,1959,4579,1937,4574,1920,4574,1908,L,4574,1840,Q,4574,1829,4576,1824,4581,1814,4584,1806,4591,1771,4592,1770,4592,1769,4610,1736,4620,1718,4617,1621,4617,1619,4617,1616,4617,1611,4617,1597,4616,1585,4619,1575,4619,1570,4625,1563,4632,1555,4632,1554,L,4632,1528,Q,4634,1515,4638,1500,4642,1484,4643,1477,4645,1459,4652,1449,4660,1439,4660,1431,4660,1423,4652,1416,4643,1407,4641,1401,4635,1384,4629,1372,4622,1347,4615,1340,4605,1329,4604,1327,4602,1323,4602,1316,4602,1309,4602,1307,4603,1304,4609,1300,4614,1297,4619,1287,4622,1283,4629,1271,4635,1266,4638,1262,4639,1259,4640,1257,4655,1231,4686,1233,4710,1235,4720,1230,4740,1219,4756,1223,4772,1227,4785,1218,4787,1216,4802,1199,4806,1193,4821,1180,4838,1164,4848,1152,4947,1042,5015,946,5016,944,5017,942,5029,929,5058,889,5078,863,5086,864,5096,864,5103,857,5109,851,5119,851,5126,851,5136,857,5147,863,5156,863,5162,862,5172,869,5177,872,5185,879,5187,879,5198,887,5206,892,5212,892,5222,892,5228,896,5235,899,5240,899,5243,899,5265,892,5271,892,5280,887,5287,884,5289,881,5298,871,5313,861,5333,848,5338,843,5344,838,5357,821,5368,808,5374,803,5379,800,5395,788,5410,776,5410,767,5402,767,5388,762,5376,760,5370,760,5337,760,5325,752,5298,740,5287,734,5273,727,5270,713,5270,711,5270,709,5270,707,5270,704,5271,672,5286,649,5303,623,5303,599,5303,536,5207,543,5172,545,5139,510,5103,471,5094,469,5056,461,4954,464,4876,466,4840,442,4827,434,4777,387,4734,347,4716,341,4670,329,4647,323,4607,313,4596,299,4571,258,4557,236,4532,199,4495,192,Q,4415,180,4413,180,Z]],label:"Khoma Gewog",shortLabel:"KM",labelPosition:[384.3,300.3],labelAlignment:[CEN,MID],nextId:"BT.LH.KT"},"BT.LH.KT":{outlines:[[M,3568,339,Q,3549,371,3501,411,3458,447,3443,497,3432,534,3435,584,3436,590,3437,595,3447,679,3386,716,3338,744,3323,751,3313,756,3285,778,3272,787,3244,787,3210,787,3203,779,3202,778,3183,737,3147,680,3143,672,3132,655,3082,613,3029,567,3012,567,2989,567,2976,591,2971,602,2959,644,2937,721,2884,721,2857,721,2826,696,2793,672,2758,672,2716,672,2669,684,2621,696,2578,696,2505,696,2444,673,2401,656,2313,603,L,2297,603,Q,2297,611,2300,664,2300,713,2251,717,2203,719,2191,716,2178,712,2173,704,2167,696,2153,667,2137,636,2130,611,2122,585,2096,565,2083,555,2045,534,2012,516,1950,494,1869,466,1821,466,1755,466,1722,495,1701,514,1686,560,1669,609,1659,623,1636,652,1588,652,1540,652,1485,582,1446,533,1421,477,1406,438,1399,420,1387,388,1366,370,1337,337,1319,320,1289,291,1254,291,1213,291,1192,319,1185,327,1161,381,1141,425,1117,436,1102,441,1053,441,1016,441,1010,439,994,433,994,400,994,395,1001,367,1008,339,1008,334,1008,300,940,282,916,276,865,270,861,269,858,268,816,258,737,221,658,181,658,181,656,181,578,225,498,270,476,274,391,289,289,289,284,316,280,358,275,390,254,413,253,415,252,417,248,424,242,436,238,443,238,460,238,489,241,496,244,504,263,535,277,562,284,569,303,588,303,606,303,620,292,628,277,639,274,646,270,654,259,671,251,686,251,696,251,710,258,721,269,738,271,744,282,770,284,778,285,783,285,810,285,843,284,851,283,851,272,869,272,881,268,889,263,895,250,900,236,907,233,909,L,218,918,Q,211,920,196,922,180,931,155,943,142,951,119,969,88,988,84,996,75,1016,75,1036,75,1049,84,1058,94,1069,97,1081,104,1109,72,1144,48,1168,44,1183,41,1192,41,1223,41,1259,43,1265,46,1276,67,1312,L,106,1365,Q,111,1370,127,1398,139,1419,156,1429,170,1437,188,1439,197,1439,205,1444,205,1445,210,1449,217,1454,223,1454,235,1456,256,1461,272,1466,289,1466,296,1468,311,1475,327,1481,341,1479,345,1478,355,1483,360,1485,367,1489,L,391,1493,Q,412,1495,414,1497,422,1507,436,1507,441,1507,442,1515,442,1520,442,1529,L,442,1558,Q,443,1569,441,1586,441,1601,448,1612,459,1633,480,1659,L,499,1681,Q,500,1682,507,1692,513,1699,519,1704,526,1710,533,1722,L,538,1727,Q,542,1730,542,1733,L,543,1740,Q,542,1742,543,1746,543,1751,546,1758,550,1768,554,1774,558,1780,559,1795,560,1811,561,1813,568,1829,570,1834,572,1842,572,1853,571,1857,578,1873,585,1889,585,1893,585,1902,580,1911,572,1923,569,1935,566,1941,561,1957,555,1973,555,1979,555,1988,555,1990,556,1992,562,2002,565,2007,575,2010,585,2013,588,2016,599,2026,615,2026,625,2027,646,2026,653,2027,661,2026,667,2026,674,2033,688,2047,692,2051,701,2059,714,2070,725,2079,737,2084,752,2068,768,2067,779,2066,808,2069,833,2069,849,2060,866,2051,881,2051,904,2051,929,2077,944,2092,962,2117,1003,2159,1007,2166,1018,2185,1023,2189,1031,2196,1048,2197,1058,2197,1069,2210,1073,2214,1081,2215,1085,2215,1096,2215,1114,2217,1167,2217,L,1231,2217,Q,1246,2217,1259,2221,1271,2226,1283,2226,1299,2226,1308,2219,1323,2207,1338,2201,1343,2199,1353,2199,1363,2199,1366,2197,1378,2188,1382,2186,1386,2183,1395,2183,1437,2183,1500,2186,1519,2186,1545,2198,1568,2209,1582,2207,1603,2204,1635,2214,1672,2225,1682,2226,1706,2227,1780,2225,1800,2231,1839,2250,1861,2261,1897,2279,1916,2288,1962,2315,2003,2339,2026,2339,2044,2339,2046,2338,2049,2336,2058,2319,2063,2307,2074,2307,2088,2307,2092,2303,2097,2298,2108,2297,2115,2297,2132,2297,2195,2292,2199,2297,L,2200,2297,Q,2274,2297,2284,2298,2334,2303,2355,2329,2361,2337,2381,2345,2406,2355,2414,2360,2419,2363,2431,2368,2441,2373,2446,2383,2449,2389,2448,2401,2448,2407,2447,2419,L,2447,2497,Q,2447,2509,2463,2523,2483,2540,2491,2556,2492,2558,2495,2571,2499,2582,2509,2586,2512,2588,2529,2592,2541,2596,2546,2599,2564,2609,2579,2611,2589,2613,2626,2613,L,2626,2611,Q,2626,2613,2628,2613,2627,2613,2626,2613,2626,2615,2649,2615,2667,2614,2682,2613,2686,2612,2689,2606,2692,2601,2696,2600,2705,2598,2716,2593,2726,2587,2751,2569,2769,2570,2771,2567,2776,2559,2778,2554,2778,2553,2786,2553,2798,2553,2804,2571,L,2835,2571,Q,2839,2555,2854,2555,2862,2554,2877,2556,2890,2555,2893,2543,2895,2530,2897,2525,2902,2512,2928,2497,2934,2493,2939,2481,2945,2464,2950,2458,L,3006,2458,Q,3007,2457,3009,2457,3021,2449,3024,2427,3027,2394,3029,2391,3032,2385,3042,2384,3056,2383,3057,2383,3062,2381,3072,2375,3082,2371,3089,2371,3105,2373,3121,2367,3141,2360,3145,2345,3145,2341,3156,2338,3165,2335,3176,2335,3186,2333,3198,2331,3210,2329,3234,2330,3257,2330,3272,2330,3287,2329,3300,2311,3309,2297,3319,2295,3329,2294,3335,2286,3338,2282,3338,2265,3339,2249,3344,2242,3349,2235,3354,2213,3358,2194,3363,2193,3366,2191,3376,2191,3383,2190,3385,2185,3389,2178,3386,2163,3382,2138,3394,2110,3407,2082,3404,2063,3416,2063,3435,2058,3454,2053,3467,2053,3486,2053,3502,2064,3509,2069,3518,2069,3520,2069,3539,2069,3540,2073,3540,2092,3541,2110,3551,2115,3555,2117,3560,2122,3563,2127,3569,2127,L,3592,2127,Q,3622,2127,3630,2122,3634,2120,3637,2114,3639,2110,3644,2110,3655,2109,3665,2111,3674,2099,3692,2081,3724,2049,3724,2049,3724,2039,3710,2030,3695,2021,3695,2006,3695,1988,3715,1969,3734,1951,3734,1943,3734,1937,3729,1935,3725,1934,3724,1924,3723,1905,3721,1900,3708,1873,3709,1847,3721,1803,3758,1807,3765,1808,3776,1803,3788,1798,3796,1798,L,3839,1797,Q,3854,1796,3862,1775,3867,1764,3876,1742,L,3919,1680,Q,3919,1677,3915,1664,3910,1652,3910,1646,3915,1585,3915,1573,3915,1537,3913,1532,3905,1514,3893,1469,3889,1458,3877,1455,3855,1450,3853,1449,3842,1443,3834,1440,3821,1435,3805,1437,L,3804,1437,Q,3796,1438,3786,1428,3776,1416,3770,1410,3763,1403,3749,1397,3737,1392,3734,1385,L,3725,1364,Q,3721,1356,3715,1355,3708,1355,3703,1353,3699,1352,3688,1340,3682,1332,3666,1336,L,3666,1303,Q,3690,1274,3705,1254,3715,1240,3731,1231,3740,1226,3740,1208,3740,1186,3728,1173,3714,1157,3711,1131,3710,1115,3700,1087,3695,1070,3697,1054,3697,1052,3698,1049,3703,1018,3731,995,3738,988,3738,979,3737,967,3738,962,3741,955,3748,950,3753,946,3764,937,3767,934,3774,927,3781,920,3781,912,3781,905,3785,897,3789,887,3795,884,3801,879,3826,874,3841,865,3854,849,3877,831,3881,788,3882,740,3885,719,3885,701,3894,684,3903,669,3915,664,3923,660,3940,638,3955,616,3953,613,3952,608,3946,602,3941,595,3937,591,3938,588,3918,577,3903,569,3893,567,3883,566,3869,550,3853,531,3847,525,3817,500,3800,485,3771,459,3757,435,3738,403,3673,367,3659,360,3642,357,3623,357,3614,355,3610,355,3604,351,3596,345,3592,344,3589,342,3581,341,Q,3572,339,3568,339,Z]],label:"Kurtoe Gewog",shortLabel:"KT",labelPosition:[199.7,139.8],labelAlignment:[CEN,MID],nextId:"BT.LH.MB"},"BT.LH.MB":{outlines:[[M,3382,3613,L,3371,3617,3371,3682,Q,3371,3691,3371,3709,3368,3724,3358,3728,3343,3733,3335,3737,3320,3746,3315,3746,3295,3747,3271,3772,3262,3781,3239,3811,3234,3817,3228,3830,3225,3834,3216,3837,3206,3839,3204,3840,3195,3841,3195,3860,3195,3870,3195,3885,3187,3890,3173,3900,3160,3912,3158,3919,3153,3928,3151,3928,3134,3928,3134,3929,3125,3929,3114,3923,3103,3917,3087,3918,3067,3918,3057,3918,3041,3918,3032,3911,3026,3907,3024,3904,3018,3900,3015,3900,3005,3900,3e3,3900,2992,3900,2988,3897,2973,3880,2971,3878,2968,3875,2951,3875,L,2931,3875,Q,2925,3875,2916,3883,2914,3885,2905,3895,2897,3903,2888,3906,L,2741,3906,Q,2740,3907,2727,3921,2724,3923,2722,3926,L,2721,3987,Q,2721,3996,2733,4011,2735,4016,2735,4022,L,2735,4258,Q,2735,4270,2743,4276,2763,4290,2778,4311,2783,4316,2794,4320,2811,4326,2814,4327,2819,4330,2831,4336,2843,4341,2852,4346,2867,4356,2887,4378,2910,4402,2916,4408,2918,4409,2933,4419,2942,4425,2948,4435,2949,4437,2950,4443,2952,4449,2954,4451,2958,4454,2963,4457,2967,4460,2968,4464,2973,4469,2981,4481,2988,4493,2990,4501,2990,4506,2992,4513,2994,4522,2998,4524,3011,4530,3011,4545,3010,4556,3011,4559,3014,4562,3021,4564,3026,4564,3032,4570,3039,4577,3042,4578,3052,4582,3084,4602,3088,4604,3095,4604,3102,4605,3105,4607,3106,4607,3114,4615,3120,4620,3125,4621,3128,4621,3150,4620,3166,4620,3175,4622,3184,4624,3193,4640,3198,4649,3205,4663,3206,4664,3210,4672,3215,4678,3224,4678,L,3247,4680,Q,3249,4679,3250,4679,3257,4679,3275,4679,3280,4678,3292,4679,3295,4678,3297,4678,3301,4675,3300,4668,3299,4663,3300,4648,3313,4635,3315,4632,3323,4610,3335,4603,3358,4591,3366,4584,3377,4578,3381,4570,3386,4561,3384,4540,3385,4511,3385,4494,L,3386,4439,Q,3386,4431,3389,4412,3392,4393,3392,4389,3395,4384,3397,4376,3399,4370,3402,4366,3412,4357,3412,4347,3411,4315,3415,4298,3419,4263,3421,4253,3422,4247,3427,4245,3436,4240,3437,4240,3439,4237,3439,4218,L,3439,4197,Q,3439,4193,3442,4188,3444,4179,3445,4177,3450,4158,3450,4128,3450,4054,3452,4025,3451,3948,3454,3928,3456,3920,3464,3910,3479,3894,3480,3893,3483,3888,3482,3877,3482,3866,3482,3860,3481,3857,3481,3856,L,3481,3705,Q,3470,3706,3461,3703,3451,3698,3444,3695,3439,3693,3438,3688,3438,3681,3437,3675,3435,3671,3432,3669,3427,3667,3426,3665,3423,3660,3422,3648,3423,3634,3422,3629,3422,3622,3419,3616,3414,3607,3405,3601,3401,3599,3399,3598,Q,3389,3609,3382,3613,Z]],label:"Menbi Gewog",shortLabel:"MB",labelPosition:[310.2,413.9],labelAlignment:[CEN,MID],nextId:"BT.LH.MT"},"BT.LH.MT":{outlines:[[M,2528,4028,Q,2519,4032,2519,4044,2519,4051,2520,4067,2519,4071,2515,4075,2510,4080,2510,4082,2507,4092,2507,4100,2461,4106,2439,4105,L,2396,4105,Q,2384,4105,2376,4111,2371,4113,2363,4121,2359,4123,2348,4134,2338,4142,2332,4143,2318,4146,2315,4152,2311,4158,2302,4158,2289,4158,2280,4145,2266,4125,2259,4120,2254,4114,2250,4111,2244,4105,2238,4105,L,2205,4105,Q,2183,4104,2173,4104,2153,4104,2145,4108,2131,4116,2117,4128,2112,4133,2094,4133,2022,4131,1999,4132,1994,4132,1992,4127,1991,4121,1988,4118,1978,4106,1976,4104,1970,4095,1963,4091,1953,4085,1945,4080,1914,4060,1905,4053,1899,4048,1887,4048,1882,4047,1874,4042,1866,4037,1864,4037,1858,4035,1844,4032,1832,4031,1823,4026,1809,4019,1801,4018,1790,4018,1782,4018,1757,4019,1746,4019,1727,4019,1705,4014,L,1693,4014,Q,1687,4022,1684,4027,1683,4029,1657,4066,1631,4104,1631,4109,1631,4124,1648,4144,1664,4164,1664,4183,1664,4208,1659,4219,1652,4232,1627,4252,1608,4266,1594,4286,1578,4309,1578,4327,1578,4333,1582,4338,1587,4346,1590,4359,1618,4404,1648,4463,1689,4544,1689,4560,1689,4569,1686,4576,1679,4588,1677,4597,L,1677,4636,Q,1677,4680,1682,4687,1683,4689,1694,4708,1706,4728,1706,4731,1706,4740,1702,4742,1694,4745,1684,4749,1681,4749,1672,4759,1664,4766,1659,4768,1641,4774,1626,4802,1622,4809,1619,4826,1617,4840,1617,4848,1617,4871,1628,4903,1640,4934,1656,4955,1674,4976,1704,4982,1756,4991,1761,4993,1764,4994,1777,5001,1788,5007,1794,5008,1798,5009,1806,5008,1812,5010,1818,5017,1831,5034,1848,5060,1858,5074,1878,5108,1897,5141,1904,5152,1906,5156,1914,5163,1916,5165,1917,5169,1928,5163,1933,5146,1939,5127,1943,5124,L,1952,5117,Q,1958,5107,1963,5107,1976,5106,1996,5107,1996,5107,1997,5107,L,1998,5106,Q,1999,5106,1999,5107,2006,5107,2024,5107,2027,5106,2032,5113,2036,5119,2042,5120,2055,5121,2087,5120,2093,5121,2105,5124,2117,5129,2124,5129,2130,5129,2143,5128,2155,5127,2163,5129,2172,5129,2180,5137,2184,5142,2196,5156,2201,5161,2208,5182,L,2225,5182,Q,2231,5182,2239,5192,2241,5194,2249,5194,2253,5194,2260,5194,2272,5195,2279,5203,2285,5212,2292,5212,2304,5212,2311,5206,2315,5202,2320,5192,2323,5186,2331,5181,2339,5176,2342,5168,L,2365,5140,Q,2369,5140,2386,5139,2391,5139,2398,5130,2403,5125,2416,5124,2423,5122,2433,5121,2459,5102,2468,5096,2477,5089,2504,5086,2527,5083,2543,5084,2550,5085,2556,5075,2562,5065,2564,5063,2573,5053,2587,5051,2598,5050,2601,5053,L,2601,5053,Q,2621,5053,2626,5057,2629,5060,2655,5060,2695,5060,2701,5053,2704,5050,2710,5048,2719,5045,2722,5044,2732,5037,2733,5037,2734,5037,2743,5037,2758,5037,2763,5044,2767,5048,2776,5065,2781,5073,2795,5080,L,2801,5088,Q,2804,5093,2809,5093,2839,5093,2862,5088,2868,5085,2874,5078,2882,5069,2888,5066,2893,5064,2898,5059,2902,5055,2907,5053,2920,5048,2920,5038,2923,5016,2933,4996,2943,4976,2953,4966,2963,4956,2968,4951,2976,4944,2976,4938,2975,4932,2981,4917,2990,4902,2991,4898,2996,4880,2996,4880,L,2996,4855,Q,2998,4828,2998,4820,2997,4806,3010,4804,3017,4802,3029,4804,3033,4803,3046,4804,3054,4804,3062,4799,3062,4792,3066,4766,L,3071,4766,Q,3075,4772,3077,4783,3079,4797,3082,4804,3084,4807,3085,4813,3087,4817,3092,4820,L,3100,4822,3112,4822,Q,3113,4822,3113,4821,L,3113,4822,Q,3138,4822,3181,4820,3179,4797,3179,4766,L,3179,4745,Q,3179,4739,3189,4736,3194,4734,3205,4732,3213,4728,3213,4714,3211,4704,3221,4698,L,3234,4688,Q,3239,4681,3247,4680,L,3224,4678,Q,3215,4678,3210,4672,3206,4664,3205,4663,3198,4649,3193,4640,3184,4624,3175,4622,3166,4620,3150,4620,3128,4621,3125,4621,3120,4620,3114,4615,3106,4607,3105,4607,3102,4605,3095,4604,3088,4604,3084,4602,3052,4582,3042,4578,3039,4577,3032,4570,3026,4564,3021,4564,3014,4562,3011,4559,3010,4556,3011,4545,3011,4530,2998,4524,2994,4522,2992,4513,2990,4506,2990,4501,2988,4493,2981,4481,2973,4469,2968,4464,2967,4460,2963,4457,2958,4454,2954,4451,2952,4449,2950,4443,2949,4437,2948,4435,2942,4425,2933,4419,2918,4409,2916,4408,2910,4402,2887,4378,2867,4356,2852,4346,2843,4341,2831,4336,2819,4330,2814,4327,2811,4326,2794,4320,2783,4316,2778,4311,2763,4290,2743,4276,2735,4270,2735,4258,L,2735,4022,Q,2735,4016,2733,4011,2721,3996,2721,3987,L,2722,3926,Q,2714,3932,2711,3933,2682,3936,2661,3933,2645,3931,2626,3948,2600,3972,2594,3975,2588,3978,2581,3987,2572,3999,2566,4004,Q,2541,4022,2528,4028,Z]],label:"Metsho Gewog",shortLabel:"MT",labelPosition:[241.2,456.9],labelAlignment:[CEN,MID],nextId:"BT.LH.MJ"},"BT.LH.MJ":{outlines:[[M,3996,3903,Q,3979,3893,3958,3873,3928,3852,3926,3845,3922,3827,3920,3819,3915,3807,3907,3799,3903,3796,3899,3779,3895,3764,3886,3759,L,3849,3734,Q,3823,3717,3809,3710,3786,3700,3761,3700,3753,3700,3741,3695,3727,3690,3718,3689,3706,3688,3679,3687,3640,3684,3635,3683,3632,3683,3601,3683,3561,3686,3552,3686,3549,3686,3536,3672,3524,3660,3524,3659,3517,3641,3490,3645,3483,3646,3472,3638,3460,3629,3454,3628,3451,3627,3437,3621,3427,3616,3419,3616,3422,3622,3422,3629,3423,3634,3422,3648,3423,3660,3426,3665,3427,3667,3432,3669,3435,3671,3437,3675,3438,3681,3438,3688,3439,3693,3444,3695,3451,3698,3461,3703,3470,3706,3481,3705,L,3481,3856,Q,3481,3857,3482,3860,3482,3866,3482,3877,3483,3888,3480,3893,3479,3894,3464,3910,3456,3920,3454,3928,3451,3948,3452,4025,3450,4054,3450,4128,3450,4158,3445,4177,3444,4179,3442,4188,3439,4193,3439,4197,L,3439,4218,Q,3439,4237,3437,4240,3436,4240,3427,4245,3422,4247,3421,4253,3419,4263,3415,4298,3411,4315,3412,4347,3412,4357,3402,4366,3399,4370,3397,4376,3395,4384,3392,4389,3392,4393,3389,4412,3386,4431,3386,4439,L,3385,4494,Q,3385,4511,3384,4540,3386,4561,3381,4570,3377,4578,3366,4584,3358,4591,3335,4603,3323,4610,3315,4632,3313,4635,3300,4648,3299,4663,3300,4668,3301,4675,3297,4678,L,3304,4678,Q,3318,4679,3343,4684,L,3378,4685,3394,4693,3409,4696,Q,3414,4696,3427,4698,3438,4701,3439,4711,3439,4721,3448,4738,3454,4749,3470,4762,3471,4763,3474,4766,3477,4770,3481,4770,L,3500,4770,Q,3519,4770,3535,4772,3539,4773,3545,4774,3550,4774,3557,4774,3563,4773,3571,4769,3578,4764,3590,4766,3604,4766,3631,4762,3643,4760,3665,4736,3670,4728,3672,4726,3675,4721,3679,4721,L,3698,4721,3699,4721,Q,3703,4722,3725,4721,L,3736,4736,Q,3737,4737,3751,4751,3762,4762,3766,4770,3771,4779,3792,4804,3796,4810,3804,4818,3808,4822,3831,4820,3869,4820,3939,4817,3940,4807,3948,4793,3949,4791,3949,4781,3949,4772,3953,4766,3957,4761,3973,4750,3977,4744,3980,4740,3984,4734,3991,4735,4009,4735,4017,4727,4021,4723,4029,4721,4036,4719,4040,4715,4046,4707,4059,4706,4060,4706,4062,4706,4067,4705,4070,4701,4075,4693,4075,4693,4080,4688,4085,4674,4085,4670,4090,4665,4096,4658,4098,4654,4102,4636,4106,4632,4109,4628,4117,4611,4123,4597,4132,4591,4135,4589,4141,4588,4148,4587,4151,4586,4165,4577,4171,4575,4176,4571,4181,4569,4191,4563,4194,4564,4207,4564,4217,4557,4219,4555,4227,4552,4235,4549,4239,4546,4242,4544,4251,4540,4260,4536,4263,4536,4275,4536,4287,4528,4296,4521,4300,4516,4312,4506,4312,4495,4311,4484,4314,4476,4314,4475,4314,4473,4315,4462,4315,4443,4315,4417,4314,4413,4312,4405,4298,4381,4294,4376,4275,4354,4270,4348,4260,4342,4257,4341,4257,4328,4257,4316,4260,4313,L,4265,4309,Q,4268,4307,4269,4302,4269,4295,4274,4289,4280,4280,4280,4278,4283,4272,4285,4265,L,4294,4252,Q,4298,4248,4300,4237,4300,4232,4301,4228,4302,4226,4303,4225,4311,4206,4314,4194,4316,4192,4342,4192,4370,4192,4376,4197,4382,4202,4429,4202,4449,4202,4471,4200,4493,4199,4505,4199,4493,4183,4470,4170,4450,4158,4435,4141,4422,4124,4399,4108,4395,4105,4394,4098,L,4394,4088,Q,4394,4086,4390,4080,4386,4075,4385,4060,4384,4047,4384,4024,4384,4022,4384,4019,4384,4014,4384,4009,4379,4008,4364,4008,4349,4008,4345,4012,4334,4019,4331,4019,L,4289,4020,Q,4286,4020,4276,4019,4265,4018,4263,4017,4257,4012,4255,4009,4250,4006,4242,4006,L,4199,4006,Q,4180,4006,4155,3992,4146,3988,4133,3989,4118,3990,4110,3985,4095,3976,4070,3956,4032,3928,4032,3928,Q,4027,3924,3996,3903,Z]],label:"Minjay Gewog",shortLabel:"MJ",labelPosition:[390.1,421.8],labelAlignment:[CEN,MID],nextId:"BT.LH.TS"},"BT.LH.TS":{outlines:[[M,3631,4762,Q,3604,4766,3590,4766,3578,4764,3571,4769,3563,4773,3557,4774,3550,4774,3545,4774,3539,4773,3535,4772,3519,4770,3500,4770,L,3481,4770,Q,3477,4770,3474,4766,3471,4763,3470,4762,3454,4749,3448,4738,3439,4721,3439,4711,3438,4701,3427,4698,3414,4696,3409,4696,L,3394,4693,3378,4685,3343,4684,Q,3318,4679,3304,4678,L,3297,4678,Q,3295,4678,3292,4679,3280,4678,3275,4679,3257,4679,3250,4679,3249,4679,3247,4680,3239,4681,3234,4688,L,3221,4698,Q,3211,4704,3213,4714,3213,4728,3205,4732,3194,4734,3189,4736,3179,4739,3179,4745,L,3179,4766,Q,3179,4797,3181,4820,3181,4832,3183,4842,3183,4845,3191,4855,3199,4865,3197,4873,3196,4880,3199,4891,3203,4903,3208,4905,3213,4916,3223,4937,L,3237,4967,3238,5119,Q,3238,5122,3238,5137,3238,5146,3237,5152,3236,5154,3229,5164,3223,5171,3223,5177,3229,5207,3199,5220,3159,5234,3153,5242,3153,5307,3150,5319,3140,5352,3139,5397,L,3139,5478,Q,3139,5493,3133,5517,3128,5540,3128,5556,3133,5559,3137,5562,3145,5568,3161,5582,3170,5590,3170,5607,3170,5616,3169,5634,3166,5676,3171,5698,3178,5724,3202,5755,3206,5760,3242,5816,3280,5870,3296,5870,3309,5870,3317,5850,3323,5829,3325,5825,3328,5816,3340,5801,3357,5781,3360,5777,3366,5766,3389,5766,3400,5766,3423,5767,3436,5766,3454,5767,3464,5767,3484,5767,L,3533,5712,Q,3542,5698,3551,5690,3558,5683,3573,5675,3574,5674,3600,5657,3619,5645,3628,5642,L,3661,5638,Q,3683,5635,3690,5623,L,3714,5623,Q,3715,5622,3723,5623,3734,5624,3738,5623,3743,5622,3753,5615,3756,5613,3776,5607,3783,5605,3784,5600,L,3782,5591,Q,3781,5585,3787,5582,3794,5579,3794,5577,3794,5565,3796,5559,3796,5550,3814,5551,3823,5551,3844,5552,3856,5551,3900,5552,3936,5552,3941,5548,3941,5533,3941,5525,3941,5513,3944,5504,3945,5501,3950,5496,3954,5491,3955,5488,L,3954,5433,Q,3954,5426,3962,5415,3969,5405,3968,5399,3966,5390,3973,5380,3985,5365,3986,5363,3991,5349,4008,5335,4038,5308,4045,5276,4045,5273,4050,5261,4055,5251,4055,5244,L,4055,5212,Q,4055,5210,4056,5208,4058,5190,4065,5182,4072,5173,4072,5159,4072,5151,4070,5145,4068,5140,4070,5125,4070,5113,4065,5105,4057,5096,4055,5092,4019,5038,4013,5032,L,3985,5003,Q,3979,4998,3975,4994,3968,4986,3969,4978,3969,4968,3958,4949,3951,4934,3953,4921,3953,4918,3953,4917,3951,4911,3946,4903,3939,4891,3939,4886,3939,4850,3939,4849,L,3939,4820,Q,3939,4819,3939,4817,3869,4820,3831,4820,3808,4822,3804,4818,3796,4810,3792,4804,3771,4779,3766,4770,3762,4762,3751,4751,3737,4737,3736,4736,L,3725,4721,Q,3703,4722,3699,4721,L,3698,4721,3679,4721,Q,3675,4721,3672,4726,3670,4728,3665,4736,Q,3643,4760,3631,4762,Z]],label:"Tsenkhar Gewog",shortLabel:"TS",labelPosition:[360,527.4],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"lhuntse",type:"maps"}}})});