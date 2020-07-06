var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "14000",
        "ok": "14000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "59151",
        "ok": "59151",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4159",
        "ok": "4159",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "7412",
        "ok": "7412",
        "ko": "-"
    },
    "percentiles1": {
        "total": "700",
        "ok": "620",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4612",
        "ok": "4612",
        "ko": "-"
    },
    "percentiles3": {
        "total": "19897",
        "ok": "19897",
        "ko": "-"
    },
    "percentiles4": {
        "total": "33115",
        "ok": "33115",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7008,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 256,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6736,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "218.75",
        "ok": "218.75",
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
        "total": "7000",
        "ok": "7000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "44124",
        "ok": "44124",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "8286",
        "ok": "8286",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8650",
        "ok": "8650",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4612",
        "ok": "4611",
        "ko": "-"
    },
    "percentiles2": {
        "total": "9464",
        "ok": "9417",
        "ko": "-"
    },
    "percentiles3": {
        "total": "32763",
        "ok": "32763",
        "ko": "-"
    },
    "percentiles4": {
        "total": "33359",
        "ok": "33359",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 256,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6734,
    "percentage": 96
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
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "59151",
        "ok": "59151",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1001",
        "ok": "1001",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles3": {
        "total": "55",
        "ok": "55",
        "ko": "-"
    },
    "percentiles4": {
        "total": "316",
        "ok": "316",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6998,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
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
