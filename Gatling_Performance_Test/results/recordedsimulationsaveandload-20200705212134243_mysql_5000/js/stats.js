var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "9917",
        "ko": "83"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "60714"
    },
    "maxResponseTime": {
        "total": "61167",
        "ok": "34564",
        "ko": "61167"
    },
    "meanResponseTime": {
        "total": "4839",
        "ok": "4369",
        "ko": "60984"
    },
    "standardDeviation": {
        "total": "9194",
        "ok": "7657",
        "ko": "89"
    },
    "percentiles1": {
        "total": "870",
        "ok": "807",
        "ko": "61009"
    },
    "percentiles2": {
        "total": "5224",
        "ok": "5155",
        "ko": "61048"
    },
    "percentiles3": {
        "total": "18868",
        "ok": "18397",
        "ko": "61086"
    },
    "percentiles4": {
        "total": "34275",
        "ok": "33873",
        "ko": "61103"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4952,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 217,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4748,
    "percentage": 47
},
    "group4": {
    "name": "failed",
    "count": 83,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "156.25",
        "ok": "154.953",
        "ko": "1.297"
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
        "total": "5000",
        "ok": "4917",
        "ko": "83"
    },
    "minResponseTime": {
        "total": "342",
        "ok": "342",
        "ko": "60714"
    },
    "maxResponseTime": {
        "total": "61167",
        "ok": "34564",
        "ko": "61167"
    },
    "meanResponseTime": {
        "total": "9594",
        "ok": "8726",
        "ko": "60984"
    },
    "standardDeviation": {
        "total": "11127",
        "ok": "8976",
        "ko": "89"
    },
    "percentiles1": {
        "total": "5228",
        "ok": "5175",
        "ko": "61009"
    },
    "percentiles2": {
        "total": "9175",
        "ok": "9095",
        "ko": "61048"
    },
    "percentiles3": {
        "total": "33603",
        "ok": "33443",
        "ko": "61086"
    },
    "percentiles4": {
        "total": "60997",
        "ok": "34036",
        "ko": "61103"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 45,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 125,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4747,
    "percentage": 95
},
    "group4": {
    "name": "failed",
    "count": 83,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "78.125",
        "ok": "76.828",
        "ko": "1.297"
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
        "total": "5000",
        "ok": "5000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1270",
        "ok": "1270",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "83",
        "ok": "83",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "percentiles1": {
        "total": "20",
        "ok": "20",
        "ko": "-"
    },
    "percentiles2": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    },
    "percentiles3": {
        "total": "461",
        "ok": "461",
        "ko": "-"
    },
    "percentiles4": {
        "total": "865",
        "ok": "865",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4907,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 92,
    "percentage": 2
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
        "total": "78.125",
        "ok": "78.125",
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
