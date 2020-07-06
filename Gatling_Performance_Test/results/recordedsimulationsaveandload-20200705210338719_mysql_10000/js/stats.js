var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "17826",
        "ko": "2174"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "60247"
    },
    "maxResponseTime": {
        "total": "61472",
        "ok": "59134",
        "ko": "61472"
    },
    "meanResponseTime": {
        "total": "11364",
        "ok": "5312",
        "ko": "60984"
    },
    "standardDeviation": {
        "total": "19347",
        "ok": "9113",
        "ko": "253"
    },
    "percentiles1": {
        "total": "1415",
        "ok": "1050",
        "ko": "61036"
    },
    "percentiles2": {
        "total": "10805",
        "ok": "6517",
        "ko": "61158"
    },
    "percentiles3": {
        "total": "61047",
        "ok": "33067",
        "ko": "61357"
    },
    "percentiles4": {
        "total": "61296",
        "ok": "40594",
        "ko": "61414"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8394,
    "percentage": 42
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1124,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8308,
    "percentage": 42
},
    "group4": {
    "name": "failed",
    "count": 2174,
    "percentage": 11
},
    "meanNumberOfRequestsPerSecond": {
        "total": "281.69",
        "ok": "251.07",
        "ko": "30.62"
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
        "ok": "7826",
        "ko": "2174"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "60247"
    },
    "maxResponseTime": {
        "total": "61472",
        "ok": "48035",
        "ko": "61472"
    },
    "meanResponseTime": {
        "total": "22464",
        "ok": "11764",
        "ko": "60984"
    },
    "standardDeviation": {
        "total": "22395",
        "ok": "10686",
        "ko": "253"
    },
    "percentiles1": {
        "total": "10800",
        "ok": "9046",
        "ko": "61036"
    },
    "percentiles2": {
        "total": "35452",
        "ok": "16812",
        "ko": "61158"
    },
    "percentiles3": {
        "total": "61169",
        "ok": "35211",
        "ko": "61357"
    },
    "percentiles4": {
        "total": "61358",
        "ok": "46892",
        "ko": "61414"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 68,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7750,
    "percentage": 78
},
    "group4": {
    "name": "failed",
    "count": 2174,
    "percentage": 22
},
    "meanNumberOfRequestsPerSecond": {
        "total": "140.845",
        "ok": "110.225",
        "ko": "30.62"
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
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "59134",
        "ok": "59134",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "264",
        "ok": "264",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "778",
        "ok": "778",
        "ko": "-"
    },
    "percentiles1": {
        "total": "20",
        "ok": "20",
        "ko": "-"
    },
    "percentiles2": {
        "total": "179",
        "ok": "179",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1236",
        "ok": "1237",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1865",
        "ok": "1865",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8386,
    "percentage": 84
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1056,
    "percentage": 11
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 558,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "140.845",
        "ok": "140.845",
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
