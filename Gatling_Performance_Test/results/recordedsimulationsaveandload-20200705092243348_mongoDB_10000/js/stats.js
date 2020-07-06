var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "19665",
        "ko": "335"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "14702"
    },
    "maxResponseTime": {
        "total": "62293",
        "ok": "56174",
        "ko": "62293"
    },
    "meanResponseTime": {
        "total": "7021",
        "ok": "6110",
        "ko": "60540"
    },
    "standardDeviation": {
        "total": "11699",
        "ok": "9441",
        "ko": "5047"
    },
    "percentiles1": {
        "total": "1236",
        "ok": "1154",
        "ko": "61042"
    },
    "percentiles2": {
        "total": "9269",
        "ok": "8958",
        "ko": "61274"
    },
    "percentiles3": {
        "total": "34520",
        "ok": "33097",
        "ko": "61645"
    },
    "percentiles4": {
        "total": "61023",
        "ok": "35497",
        "ko": "61835"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9428,
    "percentage": 47
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 460,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 9777,
    "percentage": 49
},
    "group4": {
    "name": "failed",
    "count": 335,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "303.03",
        "ok": "297.955",
        "ko": "5.076"
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
        "total": "10000",
        "ok": "9665",
        "ko": "335"
    },
    "minResponseTime": {
        "total": "602",
        "ok": "602",
        "ko": "14702"
    },
    "maxResponseTime": {
        "total": "62293",
        "ok": "56174",
        "ko": "62293"
    },
    "meanResponseTime": {
        "total": "13961",
        "ok": "12347",
        "ko": "60540"
    },
    "standardDeviation": {
        "total": "13317",
        "ok": "10237",
        "ko": "5047"
    },
    "percentiles1": {
        "total": "9269",
        "ok": "9094",
        "ko": "61042"
    },
    "percentiles2": {
        "total": "17855",
        "ok": "17645",
        "ko": "61274"
    },
    "percentiles3": {
        "total": "35630",
        "ok": "34939",
        "ko": "61645"
    },
    "percentiles4": {
        "total": "61244",
        "ok": "36419",
        "ko": "61835"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 30,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 9634,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "count": 335,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "151.515",
        "ok": "146.439",
        "ko": "5.076"
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
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1802",
        "ok": "1802",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "81",
        "ok": "81",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "265",
        "ok": "265",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "percentiles2": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "percentiles3": {
        "total": "890",
        "ok": "890",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1268",
        "ok": "1268",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9427,
    "percentage": 94
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 430,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 143,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "151.515",
        "ok": "151.515",
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
