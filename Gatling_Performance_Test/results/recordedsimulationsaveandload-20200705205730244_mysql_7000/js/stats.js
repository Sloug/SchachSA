var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "14000",
        "ok": "13373",
        "ko": "627"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "60517"
    },
    "maxResponseTime": {
        "total": "61231",
        "ok": "44522",
        "ko": "61231"
    },
    "meanResponseTime": {
        "total": "7866",
        "ok": "5383",
        "ko": "60843"
    },
    "standardDeviation": {
        "total": "14247",
        "ok": "8646",
        "ko": "127"
    },
    "percentiles1": {
        "total": "920",
        "ok": "410",
        "ko": "60835"
    },
    "percentiles2": {
        "total": "9247",
        "ok": "8492",
        "ko": "60932"
    },
    "percentiles3": {
        "total": "44179",
        "ok": "20811",
        "ko": "61057"
    },
    "percentiles4": {
        "total": "60940",
        "ok": "43796",
        "ko": "61191"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6956,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 188,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6229,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "count": 627,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "218.75",
        "ok": "208.953",
        "ko": "9.797"
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
        "total": "7000",
        "ok": "6373",
        "ko": "627"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "60517"
    },
    "maxResponseTime": {
        "total": "61231",
        "ok": "44522",
        "ko": "61231"
    },
    "meanResponseTime": {
        "total": "15660",
        "ok": "11215",
        "ko": "60843"
    },
    "standardDeviation": {
        "total": "16866",
        "ok": "9584",
        "ko": "127"
    },
    "percentiles1": {
        "total": "9249",
        "ok": "8732",
        "ko": "60835"
    },
    "percentiles2": {
        "total": "18372",
        "ok": "16999",
        "ko": "60932"
    },
    "percentiles3": {
        "total": "60817",
        "ok": "33136",
        "ko": "61057"
    },
    "percentiles4": {
        "total": "61002",
        "ok": "44220",
        "ko": "61191"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 140,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6223,
    "percentage": 89
},
    "group4": {
    "name": "failed",
    "count": 627,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "109.375",
        "ok": "99.578",
        "ko": "9.797"
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
        "total": "7000",
        "ok": "7000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1459",
        "ok": "1459",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "percentiles1": {
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "percentiles2": {
        "total": "62",
        "ok": "62",
        "ko": "-"
    },
    "percentiles3": {
        "total": "378",
        "ok": "378",
        "ko": "-"
    },
    "percentiles4": {
        "total": "751",
        "ok": "751",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6946,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 48,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "109.375",
        "ok": "109.375",
        "ko": "-"
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
