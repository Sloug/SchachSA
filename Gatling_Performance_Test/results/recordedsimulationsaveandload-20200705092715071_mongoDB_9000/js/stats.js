var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "18000",
        "ok": "17337",
        "ko": "663"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "60226"
    },
    "maxResponseTime": {
        "total": "60921",
        "ok": "43667",
        "ko": "60921"
    },
    "meanResponseTime": {
        "total": "6483",
        "ok": "4413",
        "ko": "60611"
    },
    "standardDeviation": {
        "total": "13106",
        "ok": "7874",
        "ko": "118"
    },
    "percentiles1": {
        "total": "676",
        "ok": "345",
        "ko": "60599"
    },
    "percentiles2": {
        "total": "5988",
        "ok": "4801",
        "ko": "60684"
    },
    "percentiles3": {
        "total": "34049",
        "ok": "19655",
        "ko": "60805"
    },
    "percentiles4": {
        "total": "60673",
        "ok": "34249",
        "ko": "60894"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9089,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 262,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7986,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "count": 663,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "281.25",
        "ok": "270.891",
        "ko": "10.359"
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
        "ok": "8337",
        "ko": "663"
    },
    "minResponseTime": {
        "total": "82",
        "ok": "82",
        "ko": "60226"
    },
    "maxResponseTime": {
        "total": "60921",
        "ok": "43667",
        "ko": "60921"
    },
    "meanResponseTime": {
        "total": "12928",
        "ok": "9136",
        "ko": "60611"
    },
    "standardDeviation": {
        "total": "16138",
        "ok": "9271",
        "ko": "118"
    },
    "percentiles1": {
        "total": "5990",
        "ok": "5202",
        "ko": "60599"
    },
    "percentiles2": {
        "total": "16618",
        "ok": "11683",
        "ko": "60684"
    },
    "percentiles3": {
        "total": "60562",
        "ok": "33636",
        "ko": "60805"
    },
    "percentiles4": {
        "total": "60737",
        "ok": "34518",
        "ko": "60894"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 114,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 237,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7986,
    "percentage": 89
},
    "group4": {
    "name": "failed",
    "count": 663,
    "percentage": 7
},
    "meanNumberOfRequestsPerSecond": {
        "total": "140.625",
        "ok": "130.266",
        "ko": "10.359"
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
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1037",
        "ok": "1037",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "37",
        "ok": "37",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "116",
        "ok": "116",
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
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "percentiles4": {
        "total": "620",
        "ok": "620",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8975,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 25,
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
