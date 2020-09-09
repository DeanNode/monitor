//var public_color_array = ["#2F89CF", "#2F4554", "#27D08A", "#FFEB7B", "#02A6B5", ""];
var public_color_array = ["#6aca1b", "#e31f1f", "#27D08A", "#e3e31f", "#ff7400", ""];

$(function () {
    左1();
    左2();
    左3();
    右1();
    右2();
    右3();


    function 左1() {
        var a = echarts.init(document.getElementById("echart1"));
        var option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                }
            },
            grid: {
                left: "0%",
                top: "10px",
                right: "0%",
                bottom: "4%",
                containLabel: true
            },
            xAxis: [{
                type: "value",
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "12",
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,0.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.1)",
                    }
                }
            }],
            yAxis: [{
                type: "category",
                data: [],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,0.1)",
                        width: 1,
                        type: "solid"
                    },
                },
                axisTick: {
                    show: true,
                },
                axisLabel: {
                    interval: 0,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "12",
                    },
                },

            }],
            series: [{
                type: "bar",
                data: [],
                barWidth: "35%",
                itemStyle: {
                    normal: {
                        color: "#2f89cf",
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            }]
        };
        $.ajax({
            type: "get",
            url: "../api/webapi_baobiao/getCount?projectId=3",
            dataType: "json",
            success: function (dataList) {
                if (dataList.length > 0) {
                    var yAxisArray = ["车辆数", "人员数", "设备数"];
                    $("#li_allCarCount").html(dataList[0]["carNum"] + "(辆)");
                    $("#li_allPeopleCount").html(dataList[0]["personNum"] + "(位)");
                    var seriesArray = [];
                    seriesArray.push(dataList[0]["carNum"]);
                    seriesArray.push(dataList[0]["personNum"]);
                    seriesArray.push(dataList[0]["equipNum"]);
                    option.yAxis[0].data = yAxisArray;
                    option.series[0].data = seriesArray;
                    a.setOption(option);
                }
            }
        })

        window.addEventListener("resize",
            function () {
                a.resize()
            })
    }
    function 左2() {
        var a = echarts.init(document.getElementById("echart2"));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            color: public_color_array,
            legend: {
                orient: 'vertical',
                left: 10,
                data: [],
                textStyle: {
                    color: "#ffffff"
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [

                    ]
                }
            ]
        };

        $.ajax({
            type: "get",
            url: "../api/webapi_baobiao/carNumGroupByKind?projectId=3",
            dataType: "json",
            success: function (dataList) {
                if (dataList.length > 0) {
                    var legendData = [];
                    var seriesArray = [];

                    $.each(dataList, function (i, obj) {

                        legendData.push(obj["kind"]);
                        seriesArray.push({
                            value: obj["totalNum"], name: obj["kind"]
                        });
                    })

                    option.legend.data = legendData;
                    option.series[0].data = seriesArray;
                    a.setOption(option);
                }
            }
        })
        window.addEventListener("resize",
            function () {
                a.resize()
            });
    }
    function 左3() {
        var a = echarts.init(document.getElementById("echart3"));
        var option = {
            tooltip: {
                formatter: "{a} <br/>{c} {b}"
            },
            series: [
                {
                    name: '速度',
                    type: 'gauge',
                    z: 3,
                    min: 0,
                    max: 220,
                    splitNumber: 11,
                    radius: '90%',
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 5
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 15,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 20,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    data: [{ value: 40, name: 'km/h' }]
                },
                {
                    name: '转速',
                    type: 'gauge',
                    center: ['20%', '55%'],    // 默认全局居中
                    radius: '75%',
                    min: 0,
                    max: 7,
                    endAngle: 45,
                    splitNumber: 7,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 8
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 12,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 20,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width: 5
                    },
                    title: {
                        offsetCenter: [0, '-30%'],       // x, y，单位px
                    },
                    detail: {
                        // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder'
                    },
                    data: [{ value: 1.5, name: 'x1000 r/min' }]
                },
                {
                    name: '油表',
                    type: 'gauge',
                    center: ['79%', '50%'],    // 默认全局居中
                    radius: '75%',
                    min: 0,
                    max: 2,
                    startAngle: 135,
                    endAngle: 45,
                    splitNumber: 2,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 8
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        splitNumber: 5,
                        length: 10,        // 属性length控制线长
                        lineStyle: {        // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    axisLabel: {
                        formatter: function (v) {
                            switch (v + '') {
                                case '0': return 'E';
                                case '1': return 'Gas';
                                case '2': return 'F';
                            }
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width: 2
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    data: [{ value: 0.5, name: 'gas' }]
                },
                {
                    name: '水表',
                    type: 'gauge',
                    center: ['79%', '50%'],    // 默认全局居中
                    radius: '75%',
                    min: 0,
                    max: 2,
                    startAngle: 315,
                    endAngle: 225,
                    splitNumber: 2,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 8
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        show: false
                    },
                    axisLabel: {
                        formatter: function (v) {
                            switch (v + '') {
                                case '0': return 'H';
                                case '1': return 'Water';
                                case '2': return 'C';
                            }
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width: 2
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    data: [{ value: 0.5, name: 'gas' }]
                }
            ]
        };

        a.setOption(option);

        window.addEventListener("resize",
            function () {
                a.resize()
            })
    }

    function 右1() {
        var a = echarts.init(document.getElementById("echart4"));
        var option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                }
            },
            grid: {
                left: "0%",
                top: "10px",
                right: "0%",
                bottom: "4%",
                containLabel: true
            },
            xAxis: [{
                type: "value",
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "12",
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,0.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.1)",
                    }
                }
            }],
            yAxis: [{
                type: "category",
                data: [],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,0.1)",
                        width: 1,
                        type: "solid"
                    },
                },
                axisTick: {
                    show: true,
                },
                axisLabel: {
                    interval: 0,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "12",
                    },
                },

            }],
            series: [{
                type: "bar",
                data: [],
                barWidth: "35%",
                itemStyle: {
                    color: "#FFEB7B",
                    opacity: 1,
                    barBorderRadius: 5,
                }
            }]
        };
        $.ajax({
            type: "get",
            url: "../api/webapi_baobiao/personNumGroupByZhiwu?projectId=3",
            dataType: "json",
            success: function (dataList) {
                if (dataList.length > 0) {
                    var yAxisArray = [];
                    var seriesArray = [];
                    $.each(dataList, function (i, obj) {
                        yAxisArray.push(obj["zhiwu"]);
                        seriesArray.push(obj["totalNum"]);
                    })
                    option.yAxis[0].data = yAxisArray;
                    option.series[0].data = seriesArray;
                    a.setOption(option);
                }
            }
        })

        window.addEventListener("resize",
            function () {
                a.resize()
            })
    }
    function 右2() {
        var a = echarts.init(document.getElementById("echart5"));
        var option2 = {
            title: {
                text: '',
                subtext: '',
                left: 'center'
            },
            color: public_color_array,
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['未出勤人数', '出勤人数'],

                textStyle: {
                    color: "#ffffff"
                }
            },
            series: [
                {
                    name: '任务数出勤率',
                    type: 'pie',
                    radius: '70%',
                    center: ['50%', '50%'],
                    data: [
                        //{ value: 335, name: '驭龙之力' },
                        //{ value: 310, name: '禁龙猎' },
                        //{ value: 234, name: '圣猎联盟' },
                        //{ value: 135, name: '视频广告' },
                        //{ value: 1548, name: '搜索引擎' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        $.ajax({
            type: "get",
            url: "../api/webapi_baobiao/personChuqin?projectId=3",
            dataType: "json",
            success: function (data) {
                var array = [];
                array.push({
                    value: data["percent"], name: "未出勤人数"
                });
                array.push({
                    value: data["taskOpened"], name: "出勤人数"
                });
                option2.series[0].data = array;
                a.setOption(option2);
            }
        })

        window.addEventListener("resize",
            function () {
                a.resize()
            })
    }
    function 右3() {
        var a = echarts.init(document.getElementById("echart6"));
        var option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                }
            },
            grid: {
                left: "0%",
                top: "10px",
                right: "0%",
                bottom: "4%",
                containLabel: true
            },
            xAxis: [{
                type: "value",
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "12",
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,0.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.1)",
                    }
                }
            }],
            yAxis: [{
                type: "category",
                data: [],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,0.1)",
                        width: 1,
                        type: "solid"
                    },
                },
                axisTick: {
                    show: true,
                },
                axisLabel: {
                    interval: 0,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "12",
                    },
                },

            }],
            series: [{
                type: "bar",
                data: [],
                barWidth: "35%",
                itemStyle: {
                    color: "#27D08A",
                    opacity: 1,
                    barBorderRadius: 5,
                }
            }]
        };
        $.ajax({
            type: "get",
            url: "../api/webapi_baobiao/equipNumGroupByType?projectId=3",
            dataType: "json",
            success: function (dataList) {
                if (dataList.length > 0) {
                    var yAxisArray = [];
                    var seriesArray = [];
                    $.each(dataList, function (i, obj) {
                        yAxisArray.push(obj["equipTypeName"]);
                        seriesArray.push(obj["totalNum"]);
                    })
                    option.yAxis[0].data = yAxisArray;
                    option.series[0].data = seriesArray;
                    a.setOption(option);
                }
            }
        })
        window.addEventListener("resize",
            function () {
                a.resize()
            })
    }

});

function exitSystem() {
    layui.use(['layer'], function () {
        var layer = layui.layer;
        layer.confirm("确定要退出吗？", function () {
            location.href = "../login/index?r=" + Math.random();
        })
    })
}