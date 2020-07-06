var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40000",
        "ok": "34992",
        "ko": "5008"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "9456"
    },
    "maxResponseTime": {
        "total": "62210",
        "ok": "60902",
        "ko": "62210"
    },
    "meanResponseTime": {
        "total": "16520",
        "ok": "10140",
        "ko": "61099"
    },
    "standardDeviation": {
        "total": "21361",
        "ok": "13963",
        "ko": "3228"
    },
    "percentiles1": {
        "total": "3730",
        "ok": "1717",
        "ko": "61383"
    },
    "percentiles2": {
        "total": "28720",
        "ok": "17921",
        "ko": "61664"
    },
    "percentiles3": {
        "total": "61494",
        "ok": "39223",
        "ko": "61968"
    },
    "percentiles4": {
        "total": "61927",
        "ok": "49404",
        "ko": "62110"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15832,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 746,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 18414,
    "percentage": 46
},
    "group4": {
    "name": "failed",
    "count": 5008,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "555.556",
        "ok": "486",
        "ko": "69.556"
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
        "total": "20000",
        "ok": "14992",
        "ko": "5008"
    },
    "minResponseTime": {
        "total": "64",
        "ok": "64",
        "ko": "9456"
    },
    "maxResponseTime": {
        "total": "62210",
        "ok": "60902",
        "ko": "62210"
    },
    "meanResponseTime": {
        "total": "32347",
        "ok": "22742",
        "ko": "61099"
    },
    "standardDeviation": {
        "total": "20227",
        "ok": "13187",
        "ko": "3228"
    },
    "percentiles1": {
        "total": "30173",
        "ok": "19582",
        "ko": "61383"
    },
    "percentiles2": {
        "total": "60363",
        "ok": "35151",
        "ko": "61664"
    },
    "percentiles3": {
        "total": "61715",
        "ok": "45291",
        "ko": "61968"
    },
    "percentiles4": {
        "total": "61979",
        "ok": "58154",
        "ko": "62110"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 16,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 14971,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "count": 5008,
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "277.778",
        "ok": "208.222",
        "ko": "69.556"
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
        "total": "20000",
        "ok": "20000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8384",
        "ok": "8384",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "694",
        "ok": "694",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1570",
        "ok": "1570",
        "ko": "-"
    },
    "percentiles1": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "percentiles2": {
        "total": "232",
        "ok": "232",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4295",
        "ok": "4295",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7319",
        "ok": "7319",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15827,
    "percentage": 79
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 730,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3443,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "277.778",
        "ok": "277.778",
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
