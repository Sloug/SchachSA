var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "11759",
        "ko": "241"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "60444"
    },
    "maxResponseTime": {
        "total": "60965",
        "ok": "45027",
        "ko": "60965"
    },
    "meanResponseTime": {
        "total": "6602",
        "ok": "5493",
        "ko": "60719"
    },
    "standardDeviation": {
        "total": "12117",
        "ok": "9411",
        "ko": "121"
    },
    "percentiles1": {
        "total": "655",
        "ok": "361",
        "ko": "60731"
    },
    "percentiles2": {
        "total": "8097",
        "ok": "6813",
        "ko": "60801"
    },
    "percentiles3": {
        "total": "32609",
        "ok": "29891",
        "ko": "60912"
    },
    "percentiles4": {
        "total": "60731",
        "ok": "44105",
        "ko": "60952"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6006,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 344,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5409,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "count": 241,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "187.5",
        "ok": "183.734",
        "ko": "3.766"
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
        "total": "6000",
        "ok": "5759",
        "ko": "241"
    },
    "minResponseTime": {
        "total": "676",
        "ok": "676",
        "ko": "60444"
    },
    "maxResponseTime": {
        "total": "60965",
        "ok": "45027",
        "ko": "60965"
    },
    "meanResponseTime": {
        "total": "13135",
        "ok": "11144",
        "ko": "60719"
    },
    "standardDeviation": {
        "total": "14431",
        "ok": "10875",
        "ko": "121"
    },
    "percentiles1": {
        "total": "8098",
        "ok": "7527",
        "ko": "60731"
    },
    "percentiles2": {
        "total": "18060",
        "ok": "17223",
        "ko": "60801"
    },
    "percentiles3": {
        "total": "44507",
        "ok": "32748",
        "ko": "60912"
    },
    "percentiles4": {
        "total": "60801",
        "ok": "44509",
        "ko": "60952"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 344,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5409,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 241,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "93.75",
        "ok": "89.984",
        "ko": "3.766"
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
        "total": "6000",
        "ok": "6000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "466",
        "ok": "466",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "68",
        "ok": "68",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "97",
        "ok": "97",
        "ko": "-"
    },
    "percentiles1": {
        "total": "20",
        "ok": "20",
        "ko": "-"
    },
    "percentiles2": {
        "total": "80",
        "ok": "80",
        "ko": "-"
    },
    "percentiles3": {
        "total": "294",
        "ok": "295",
        "ko": "-"
    },
    "percentiles4": {
        "total": "403",
        "ok": "403",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6000,
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
        "total": "93.75",
        "ok": "93.75",
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
