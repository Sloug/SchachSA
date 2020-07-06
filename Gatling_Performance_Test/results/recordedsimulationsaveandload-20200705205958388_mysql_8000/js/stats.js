var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "16000",
        "ok": "15820",
        "ko": "180"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "60617"
    },
    "maxResponseTime": {
        "total": "61834",
        "ok": "61537",
        "ko": "61834"
    },
    "meanResponseTime": {
        "total": "7746",
        "ok": "7134",
        "ko": "61510"
    },
    "standardDeviation": {
        "total": "12956",
        "ok": "11684",
        "ko": "335"
    },
    "percentiles1": {
        "total": "1257",
        "ok": "1141",
        "ko": "61627"
    },
    "percentiles2": {
        "total": "9800",
        "ok": "9589",
        "ko": "61755"
    },
    "percentiles3": {
        "total": "37036",
        "ok": "36171",
        "ko": "61808"
    },
    "percentiles4": {
        "total": "61133",
        "ok": "42226",
        "ko": "61826"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7617,
    "percentage": 48
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 338,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7865,
    "percentage": 49
},
    "group4": {
    "name": "failed",
    "count": 180,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "246.154",
        "ok": "243.385",
        "ko": "2.769"
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
        "ok": "7820",
        "ko": "180"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "60617"
    },
    "maxResponseTime": {
        "total": "61834",
        "ok": "61537",
        "ko": "61834"
    },
    "meanResponseTime": {
        "total": "15370",
        "ok": "14308",
        "ko": "61510"
    },
    "standardDeviation": {
        "total": "14811",
        "ok": "13202",
        "ko": "335"
    },
    "percentiles1": {
        "total": "9799",
        "ok": "9660",
        "ko": "61627"
    },
    "percentiles2": {
        "total": "18370",
        "ok": "18029",
        "ko": "61755"
    },
    "percentiles3": {
        "total": "41859",
        "ok": "38805",
        "ko": "61808"
    },
    "percentiles4": {
        "total": "61736",
        "ok": "47489",
        "ko": "61826"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 130,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7680,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "count": 180,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "123.077",
        "ok": "120.308",
        "ko": "2.769"
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
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1787",
        "ok": "1787",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "121",
        "ok": "121",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "280",
        "ok": "280",
        "ko": "-"
    },
    "percentiles1": {
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "percentiles2": {
        "total": "56",
        "ok": "56",
        "ko": "-"
    },
    "percentiles3": {
        "total": "774",
        "ok": "774",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1369",
        "ok": "1369",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7607,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 208,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 185,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "123.077",
        "ok": "123.077",
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
