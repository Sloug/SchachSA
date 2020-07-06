var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200000",
        "ok": "34409",
        "ko": "165591"
    },
    "minResponseTime": {
        "total": "32",
        "ok": "32",
        "ko": "19857"
    },
    "maxResponseTime": {
        "total": "229098",
        "ok": "206062",
        "ko": "229098"
    },
    "meanResponseTime": {
        "total": "105243",
        "ok": "84386",
        "ko": "109577"
    },
    "standardDeviation": {
        "total": "37340",
        "ok": "40279",
        "ko": "35181"
    },
    "percentiles1": {
        "total": "109048",
        "ok": "90217",
        "ko": "111631"
    },
    "percentiles2": {
        "total": "133164",
        "ok": "107221",
        "ko": "133928"
    },
    "percentiles3": {
        "total": "153044",
        "ok": "146625",
        "ko": "154627"
    },
    "percentiles4": {
        "total": "189186",
        "ok": "170894",
        "ko": "191866"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 29,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 347,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 34033,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 165591,
    "percentage": 83
},
    "meanNumberOfRequestsPerSecond": {
        "total": "787.402",
        "ok": "135.469",
        "ko": "651.933"
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
        "total": "100000",
        "ok": "4612",
        "ko": "95388"
    },
    "minResponseTime": {
        "total": "32",
        "ok": "32",
        "ko": "19857"
    },
    "maxResponseTime": {
        "total": "141293",
        "ok": "135499",
        "ko": "141293"
    },
    "meanResponseTime": {
        "total": "105884",
        "ok": "44068",
        "ko": "108873"
    },
    "standardDeviation": {
        "total": "38072",
        "ok": "45395",
        "ko": "35018"
    },
    "percentiles1": {
        "total": "130327",
        "ok": "28751",
        "ko": "131006"
    },
    "percentiles2": {
        "total": "134162",
        "ok": "92543",
        "ko": "134360"
    },
    "percentiles3": {
        "total": "137992",
        "ok": "129041",
        "ko": "138060"
    },
    "percentiles4": {
        "total": "139485",
        "ok": "132178",
        "ko": "139512"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 292,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4309,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 95388,
    "percentage": 95
},
    "meanNumberOfRequestsPerSecond": {
        "total": "393.701",
        "ok": "18.157",
        "ko": "375.543"
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
        "total": "100000",
        "ok": "29797",
        "ko": "70203"
    },
    "minResponseTime": {
        "total": "547",
        "ok": "547",
        "ko": "28263"
    },
    "maxResponseTime": {
        "total": "229098",
        "ok": "206062",
        "ko": "229098"
    },
    "meanResponseTime": {
        "total": "104602",
        "ok": "90627",
        "ko": "110534"
    },
    "standardDeviation": {
        "total": "36582",
        "ok": "35553",
        "ko": "35380"
    },
    "percentiles1": {
        "total": "107984",
        "ok": "92683",
        "ko": "108634"
    },
    "percentiles2": {
        "total": "116983",
        "ok": "108369",
        "ko": "125061"
    },
    "percentiles3": {
        "total": "170208",
        "ok": "149942",
        "ko": "175534"
    },
    "percentiles4": {
        "total": "199424",
        "ok": "173305",
        "ko": "204635"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 55,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 29724,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 70203,
    "percentage": 70
},
    "meanNumberOfRequestsPerSecond": {
        "total": "393.701",
        "ok": "117.311",
        "ko": "276.39"
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
