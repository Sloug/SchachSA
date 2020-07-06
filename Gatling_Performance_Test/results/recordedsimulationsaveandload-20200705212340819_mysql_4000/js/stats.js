var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8000",
        "ok": "7988",
        "ko": "12"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "60299"
    },
    "maxResponseTime": {
        "total": "61011",
        "ok": "57482",
        "ko": "61011"
    },
    "meanResponseTime": {
        "total": "3995",
        "ok": "3910",
        "ko": "60626"
    },
    "standardDeviation": {
        "total": "8369",
        "ok": "8082",
        "ko": "218"
    },
    "percentiles1": {
        "total": "603",
        "ok": "524",
        "ko": "60615"
    },
    "percentiles2": {
        "total": "4364",
        "ok": "4351",
        "ko": "60784"
    },
    "percentiles3": {
        "total": "16840",
        "ok": "16802",
        "ko": "60944"
    },
    "percentiles4": {
        "total": "57235",
        "ok": "57100",
        "ko": "60998"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4007,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 235,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3746,
    "percentage": 47
},
    "group4": {
    "name": "failed",
    "count": 12,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "126.984",
        "ok": "126.794",
        "ko": "0.19"
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
        "total": "4000",
        "ok": "3988",
        "ko": "12"
    },
    "minResponseTime": {
        "total": "640",
        "ok": "640",
        "ko": "60299"
    },
    "maxResponseTime": {
        "total": "61011",
        "ok": "57482",
        "ko": "61011"
    },
    "meanResponseTime": {
        "total": "7916",
        "ok": "7758",
        "ko": "60626"
    },
    "standardDeviation": {
        "total": "10456",
        "ok": "10063",
        "ko": "218"
    },
    "percentiles1": {
        "total": "4367",
        "ok": "4361",
        "ko": "60615"
    },
    "percentiles2": {
        "total": "9257",
        "ok": "9240",
        "ko": "60784"
    },
    "percentiles3": {
        "total": "30804",
        "ok": "30746",
        "ko": "60944"
    },
    "percentiles4": {
        "total": "57417",
        "ok": "57331",
        "ko": "60998"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 235,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3746,
    "percentage": 94
},
    "group4": {
    "name": "failed",
    "count": 12,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "63.492",
        "ok": "63.302",
        "ko": "0.19"
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
        "total": "4000",
        "ok": "4000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "584",
        "ok": "584",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "percentiles1": {
        "total": "30",
        "ok": "30",
        "ko": "-"
    },
    "percentiles2": {
        "total": "82",
        "ok": "82",
        "ko": "-"
    },
    "percentiles3": {
        "total": "309",
        "ok": "309",
        "ko": "-"
    },
    "percentiles4": {
        "total": "456",
        "ok": "456",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4000,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "63.492",
        "ok": "63.492",
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
