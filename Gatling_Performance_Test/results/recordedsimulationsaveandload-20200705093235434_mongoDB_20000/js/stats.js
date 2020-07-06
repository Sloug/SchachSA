var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40000",
        "ok": "34641",
        "ko": "5359"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "11287"
    },
    "maxResponseTime": {
        "total": "62065",
        "ok": "61484",
        "ko": "62065"
    },
    "meanResponseTime": {
        "total": "15292",
        "ok": "8254",
        "ko": "60785"
    },
    "standardDeviation": {
        "total": "21213",
        "ok": "12150",
        "ko": "3839"
    },
    "percentiles1": {
        "total": "2754",
        "ok": "1527",
        "ko": "61130"
    },
    "percentiles2": {
        "total": "20499",
        "ok": "12671",
        "ko": "61296"
    },
    "percentiles3": {
        "total": "61213",
        "ok": "35542",
        "ko": "61591"
    },
    "percentiles4": {
        "total": "61546",
        "ok": "44952",
        "ko": "61928"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14905,
    "percentage": 37
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 919,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 18817,
    "percentage": 47
},
    "group4": {
    "name": "failed",
    "count": 5359,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "563.38",
        "ok": "487.901",
        "ko": "75.479"
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
        "ok": "14641",
        "ko": "5359"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "11287"
    },
    "maxResponseTime": {
        "total": "62065",
        "ok": "61484",
        "ko": "62065"
    },
    "meanResponseTime": {
        "total": "30012",
        "ok": "18749",
        "ko": "60785"
    },
    "standardDeviation": {
        "total": "21575",
        "ok": "12529",
        "ko": "3839"
    },
    "percentiles1": {
        "total": "20495",
        "ok": "16712",
        "ko": "61130"
    },
    "percentiles2": {
        "total": "60577",
        "ok": "30594",
        "ko": "61296"
    },
    "percentiles3": {
        "total": "61335",
        "ok": "40631",
        "ko": "61591"
    },
    "percentiles4": {
        "total": "61671",
        "ok": "48760",
        "ko": "61928"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 24,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 14613,
    "percentage": 73
},
    "group4": {
    "name": "failed",
    "count": 5359,
    "percentage": 27
},
    "meanNumberOfRequestsPerSecond": {
        "total": "281.69",
        "ok": "206.211",
        "ko": "75.479"
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
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7789",
        "ok": "7789",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "571",
        "ok": "571",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1051",
        "ok": "1051",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "percentiles2": {
        "total": "833",
        "ok": "833",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2890",
        "ok": "2890",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4616",
        "ok": "4616",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14901,
    "percentage": 75
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 895,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4204,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "281.69",
        "ok": "281.69",
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
