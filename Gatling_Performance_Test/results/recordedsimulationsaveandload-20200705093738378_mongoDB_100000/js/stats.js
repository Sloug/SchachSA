var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200000",
        "ok": "31749",
        "ko": "168251"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "18017"
    },
    "maxResponseTime": {
        "total": "227611",
        "ok": "206588",
        "ko": "227611"
    },
    "meanResponseTime": {
        "total": "103817",
        "ok": "88554",
        "ko": "106697"
    },
    "standardDeviation": {
        "total": "36670",
        "ok": "40616",
        "ko": "35141"
    },
    "percentiles1": {
        "total": "102125",
        "ok": "91558",
        "ko": "108169"
    },
    "percentiles2": {
        "total": "133722",
        "ok": "111768",
        "ko": "134399"
    },
    "percentiles3": {
        "total": "151586",
        "ok": "151668",
        "ko": "151582"
    },
    "percentiles4": {
        "total": "183809",
        "ok": "181921",
        "ko": "184263"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 297,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 31446,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 168251,
    "percentage": 84
},
    "meanNumberOfRequestsPerSecond": {
        "total": "766.284",
        "ok": "121.644",
        "ko": "644.64"
    }
},
contents: {
"req_save-2-a8c39": {
        type: "REQUEST",
        name: "save_2",
path: "save_2",
pathFormatted: "req_save-2-a8c39",
stats: {
    "name": "save_2",
    "numberOfRequests": {
        "total": "100000",
        "ok": "4248",
        "ko": "95752"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "18017"
    },
    "maxResponseTime": {
        "total": "142039",
        "ok": "139509",
        "ko": "142039"
    },
    "meanResponseTime": {
        "total": "107309",
        "ok": "54068",
        "ko": "109671"
    },
    "standardDeviation": {
        "total": "37845",
        "ok": "51785",
        "ko": "35291"
    },
    "percentiles1": {
        "total": "129757",
        "ok": "56543",
        "ko": "130861"
    },
    "percentiles2": {
        "total": "135820",
        "ok": "116335",
        "ko": "135959"
    },
    "percentiles3": {
        "total": "139360",
        "ok": "129800",
        "ko": "139397"
    },
    "percentiles4": {
        "total": "140337",
        "ok": "138135",
        "ko": "140374"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 297,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3945,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 95752,
    "percentage": 96
},
    "meanNumberOfRequestsPerSecond": {
        "total": "383.142",
        "ok": "16.276",
        "ko": "366.866"
    }
}
    },"req_load-4-5986b": {
        type: "REQUEST",
        name: "load_4",
path: "load_4",
pathFormatted: "req_load-4-5986b",
stats: {
    "name": "load_4",
    "numberOfRequests": {
        "total": "100000",
        "ok": "27501",
        "ko": "72499"
    },
    "minResponseTime": {
        "total": "1337",
        "ok": "1337",
        "ko": "29346"
    },
    "maxResponseTime": {
        "total": "227611",
        "ok": "206588",
        "ko": "227611"
    },
    "meanResponseTime": {
        "total": "100325",
        "ok": "93881",
        "ko": "102769"
    },
    "standardDeviation": {
        "total": "35111",
        "ok": "35751",
        "ko": "34552"
    },
    "percentiles1": {
        "total": "96555",
        "ok": "92642",
        "ko": "96942"
    },
    "percentiles2": {
        "total": "116602",
        "ok": "111362",
        "ko": "119600"
    },
    "percentiles3": {
        "total": "167948",
        "ok": "154121",
        "ko": "170533"
    },
    "percentiles4": {
        "total": "194114",
        "ok": "183127",
        "ko": "197532"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 27501,
    "percentage": 28
},
    "group4": {
    "name": "failed",
    "count": 72499,
    "percentage": 72
},
    "meanNumberOfRequestsPerSecond": {
        "total": "383.142",
        "ok": "105.368",
        "ko": "277.774"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
