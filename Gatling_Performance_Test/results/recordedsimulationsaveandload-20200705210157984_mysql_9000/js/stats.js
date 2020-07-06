var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "18000",
        "ok": "17095",
        "ko": "905"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "60532"
    },
    "maxResponseTime": {
        "total": "61420",
        "ok": "48599",
        "ko": "61420"
    },
    "meanResponseTime": {
        "total": "8981",
        "ok": "6233",
        "ko": "60893"
    },
    "standardDeviation": {
        "total": "15849",
        "ok": "10690",
        "ko": "217"
    },
    "percentiles1": {
        "total": "1008",
        "ok": "711",
        "ko": "60868"
    },
    "percentiles2": {
        "total": "9016",
        "ok": "7292",
        "ko": "61021"
    },
    "percentiles3": {
        "total": "60547",
        "ok": "35131",
        "ko": "61315"
    },
    "percentiles4": {
        "total": "61107",
        "ok": "38411",
        "ko": "61395"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8669,
    "percentage": 48
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 644,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7782,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 905,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "281.25",
        "ok": "267.109",
        "ko": "14.141"
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
        "total": "9000",
        "ok": "8095",
        "ko": "905"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "60532"
    },
    "maxResponseTime": {
        "total": "61420",
        "ok": "48599",
        "ko": "61420"
    },
    "meanResponseTime": {
        "total": "17846",
        "ok": "13033",
        "ko": "60893"
    },
    "standardDeviation": {
        "total": "18579",
        "ok": "12387",
        "ko": "217"
    },
    "percentiles1": {
        "total": "9006",
        "ok": "8252",
        "ko": "60868"
    },
    "percentiles2": {
        "total": "33733",
        "ok": "17583",
        "ko": "61021"
    },
    "percentiles3": {
        "total": "60869",
        "ok": "36805",
        "ko": "61315"
    },
    "percentiles4": {
        "total": "61234",
        "ok": "41472",
        "ko": "61395"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 144,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 211,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7740,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "count": 905,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "140.625",
        "ok": "126.484",
        "ko": "14.141"
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
        "total": "9000",
        "ok": "9000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1565",
        "ok": "1565",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "117",
        "ok": "117",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "240",
        "ok": "240",
        "ko": "-"
    },
    "percentiles1": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "percentiles2": {
        "total": "108",
        "ok": "108",
        "ko": "-"
    },
    "percentiles3": {
        "total": "825",
        "ok": "825",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1064",
        "ok": "1064",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8525,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 433,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 42,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "140.625",
        "ok": "140.625",
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
