var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "16000",
        "ok": "16000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "57085",
        "ok": "57085",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4620",
        "ok": "4620",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "7721",
        "ok": "7721",
        "ko": "-"
    },
    "percentiles1": {
        "total": "944",
        "ok": "948",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5661",
        "ok": "5662",
        "ko": "-"
    },
    "percentiles3": {
        "total": "18401",
        "ok": "18401",
        "ko": "-"
    },
    "percentiles4": {
        "total": "34911",
        "ok": "34911",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7988,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 52,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7960,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "271.186",
        "ok": "271.186",
        "ko": "-"
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
        "total": "8000",
        "ok": "8000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "399",
        "ok": "399",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "57085",
        "ok": "57085",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "9211",
        "ok": "9211",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8779",
        "ok": "8779",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5661",
        "ok": "5661",
        "ko": "-"
    },
    "percentiles2": {
        "total": "11808",
        "ok": "11820",
        "ko": "-"
    },
    "percentiles3": {
        "total": "34212",
        "ok": "34212",
        "ko": "-"
    },
    "percentiles4": {
        "total": "35174",
        "ok": "35174",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 39,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7959,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "135.593",
        "ok": "135.593",
        "ko": "-"
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
        "total": "8000",
        "ok": "8000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1292",
        "ok": "1292",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "98",
        "ok": "98",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "percentiles2": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "percentiles3": {
        "total": "159",
        "ok": "159",
        "ko": "-"
    },
    "percentiles4": {
        "total": "582",
        "ok": "582",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7986,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 13,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "135.593",
        "ok": "135.593",
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
