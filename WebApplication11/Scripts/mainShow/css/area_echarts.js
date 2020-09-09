$(function () {
    var public_color_array = ["#3092FF", "#4C6683", "#002752", "#ffffff", "#C0DEFF", "#ffffff"];
    var colors = ["#5FAEEA", "#309FFF", "#AACEEA"];
    // 3x11T--sHXlOE
    var bodyHeight = $("body").height();

    $("#divBackToChinaMap").click(function () {
        showMap_shengfen(public_province_data);
        $(this).hide();
    })
    _updateTimer = null;//界面数据更新timer
    _upSOSWarnTimer = null;//用于刷新sos预警的timer
    var _warnlist = [];//预警列表
    var _warnSelLength = 0;//预警item选中数量

    var _zuo1 = null
    var _zuo2 = null
    var _zuo3 = null
    var _you1 = null
    var _you2 = null
    var _you3 = null

    //清除默认数据
    //window.localStorage.removeItem("projectId");
    //window.localStorage.removeItem("projectName");
    //window.localStorage.removeItem("projectCity");
    //window.localStorage.removeItem("geoCoord");

    //获取已经保存的项目ID
    var tempProjectId = window.localStorage.getItem("projectId");
    if (undefined != tempProjectId) {
        _projectId = tempProjectId
    }


    //获取已经保存的项目名称
    var tempProjectCity = window.localStorage.getItem("projectCity");
    if (undefined != tempProjectCity && tempProjectCity != null) {
        _projectCity = tempProjectCity
        $("#center-title").html(tempProjectCity + "明基智慧环卫平台");
    }

    //更新计时器
    updateData()
    updateSosWarn()

    /**
     * 点击预警模块的“进入项目”
     **/
    $("#warngopro").on("click", function () {
        if (_projectId == null) {
            layer.msg("<span style='color:white'>未选择项目</span>");
            return
        }
        //获取已经保存的项目名称
        tempProjectCity = window.localStorage.getItem("projectCity");
        window.location.href = "../main/index_pro?projectId=" + _projectId
            + "&projectName=" + tempProjectCity + "&r=" + Math.random();
    })

    /**
     * 点击预警模块的“处理”
     **/
    $("#warnhandle").click(function () {
        event.stopPropagation();
        $(".cmask").show();
        $(".cmask").css("display", "flex");
        queryMoreWarn();
    })

    /**
     *  关闭预警列表弹出层 
     **/
    $(".warn-close").on("click", function (event) {
        event.stopPropagation();
        $(".cmask").hide();
        中间();
        querySosWarn();
    })

    /**
     * 点击“数据中心”
     * */
    $("#data-center").click(function () {
        if (_projectId == null) {
            layer.msg("<span style='color:white'>未选择项目</span>");
            return
        }
        window.location.href = 'index_shuju?projectId=' + _projectId + "&projectCity=" + encodeURI(_projectCity)
    })

    /**
     *  SOS预警点击处理
     **/
    $("#soswarnn").click(function (event) {
        event.stopPropagation();
        $(".cmask").show();
        $(".cmask").css("display", "flex");
        queryMoreWarn();
    })

    /**
     * 预警列表 对数据的处理
     */
    $(".warn-submit").click(function (event) {
        //未处理：1 已处理：2 忽略：3
        var target = event.target || event.srcElement; // 获得事件源
        var dealStateId = parseInt(target.getAttribute('submittype'));
        var iWaiting = 0;
        var id = ""
        //判断哪些数据被选中了，找出来
        for (var i = 0; i < _warnlist.length; i++) {
            var item = _warnlist[i]
            var obj = $(".cmask .mark-list .warnlist.warnlist-corn .witem:nth-child(" + (i + 1) + ") .wicon-check img");
            var display = obj.css('display');
            if (display == "none") {
            } else {
                if (id.length != 0) {
                    id = id + ","
                }
                id = id + item.id
            }
        }

        if (id.length == 0) {
            layer.msg("<span style='color:white'>未选择需要处理的预警</span>");
            return
        }

        var params = {
            id: id,
            dealStateId: dealStateId,
            remarks: ""
        }

        $.ajax({
            type: "post",
            url: "../api/webapi_warn/warnDealBatch",
            beforeSend: function () {
                iWaiting = layer.load(1);
            },
            data: params,
            success: function (data) {
                layer.close(iWaiting);//关闭等待的
                if (data.code == 100) {
                    layer.msg("<span style='color:white'>处理成功！</span>");
                    //更新列表
                    _warnlist = []
                    _warnSelLength = 0
                    queryMoreWarn()
                    中间();
                    querySosWarn()
                }
                else {
                    layer.msg("<span style='color:white'>" + "处理失败！" + data.msg+"</span>");
                }
            }

        })
    })

    
    var public_project_data = [];//获取的项目元数据
    var public_province_data = [];//获取的省份整合数据

    layui.use(['layer'], function () {
        var layer = layui.layer;
        queryMapInfo();
        block();
    })

    function block() {
        获取总数();
        左1();
        左2();
        左3();
        右1();
        右2();
        右3();
        中间();
    }

    /**
     *  设置更新计时器 
     **/
    function updateData() {
        if (_updateTimer != null) {
            clearInterval(_updateTimer)
        }
        _updateTimer = setInterval(function () {
            block()
        }, 30000)

        block();
    }

    /**
     * 设置sos预警更新计时器
     * */
    function updateSosWarn() {
        if (_upSOSWarnTimer != null) {
            clearInterval(_upSOSWarnTimer)
        }
        _upSOSWarnTimer = setInterval(function () {
            querySosWarn()
        }, 10000)

        querySosWarn();
    }

    /**
     * 查询核心大地图的数据
     * */
    function queryMapInfo() {

        var vprojectId = public_projectId;
        if (public_isEmploee == "0") {
            vprojectId = "";
        }
        $.ajax({
            url: "../api/webapiMain/getFirstPage_MapInfo",
            data: { role_id: public_role_id, projectId: vprojectId },
            success: function (dataArray) {

                public_project_data = dataArray;//保存元数据

                if (dataArray.length > 0) {
                    //数据二次处理， 去除省份重复项,合并车辆数量
                    var tempDataArray = [];//新的项目数组
                    var tempCarMap = {};//车与省份名的键值对
                    for (var i = 0; i < dataArray.length; i++) {
                        var item = dataArray[i]
                        var item_carnum = item.carNum
                        var item_province = item.province
                        if (undefined != tempCarMap[item_province] && tempCarMap[item_province] != null) {
                            var mapnum = parseInt(tempCarMap[item_province])
                            tempCarMap[item_province] = mapnum + item_carnum + ""
                        } else {
                            tempCarMap[item_province] = item_carnum + ""
                            var arr_item = {
                                province: item_province,
                                carNum: 0,
                                projectId: item.projectId,
                                projectName: item.projectName,
                                name:item.city
                            }
                            tempDataArray.push(arr_item)
                        }
                    }

                    for (var i = 0; i < tempDataArray.length; i++) {
                        var item = tempDataArray[i]
                        item.carNum = tempCarMap[item.province]
                    }

                    public_province_data = tempDataArray//保存省份项目


                    showMap_shengfen(public_province_data);
                }
                else {
                    showMap_shengfen([]);
                }
            }
        })
    }

    /**
     *  查询sos预警
     * */
    function querySosWarn() {

        if (_projectId == null) {
            return
        }

        var passJson = {};
        passJson.centerSearchArray = [
            {
                op: "equal",
                fieldName: "warnTypeName",
                fieldValue: "SOS预警"
            },
            {
                op: "equal",
                fieldName: "dealStateName",
                fieldValue: "未处理"
            },
        ]
        passJson.projectId = _projectId
        $.ajax({
            type: "post",
            url: "../api/webapi_warn/getWarn",
            data: passJson,
            beforeSend: function () { },
            success: function (JsonArray) {
                if (typeof JsonArray == "string") {
                    $(".warn-badge").hide();
                    $(".warnn").hide();
                    return;
                }
                var length = JsonArray.length
                if (length == 0) {
                    $(".warn-badge").hide()
                    $(".warnn").hide()
                } else {
                    $(".warn-badge").html(length)
                    $(".warn-badge").show()
                    $(".warnn").show()
                }
            }
        })
    }

    /**
     * 查询99条预警信息进行显示
     **/
    function queryMoreWarn() {
        var passJson = {};
        passJson.projectId = ""

        var par = {}
        par.op = "equal"
        par.fieldName = "dealStateName"
        par.fieldValue = "未处理"

        passJson.centerSearchArray = [par]

        if (_projectId != null) {
            passJson.projectId = _projectId;
        } else {
            return
        }
        passJson.topLength = 99; //设置显示的最大的行数。

        $(".wicon-check").off("click");
        $(".wicon-check img").hide();

        $.ajax({
            url: "../api/webapi_warn/getWarnTopSql",
            data: passJson,
            method: "post",
            dataType: "json",
            success: function (res) {
                var ul = ""
                //生成列表内容
                for (var i = 0; i < res.length; i++) {

                    var item = res[i]
                    item.selected = false

                    if (item.location == null) {
                        item.location = ""
                    }

                    var x = item.location.indexOf("市")
                    if (x != -1) {
                        item.location = item.location.substring(x+1); 
                    }

                    var bgcolor = ""
                    if (item.warnTypeId == 5) {
                        bgcolor = "background-color: red;"
                    }

                    var li = '<div class="witem" style="' + bgcolor +'">\
                        <div class="wicon wicon-sel wicon-b"> <div class="wicon-check"  seltype="sub" selindex="'+ i + '"><img src="/image/checkbox-check.png" style="display:none;"></div></div>\
                            <div class="wicon">'+ item.mubiaoName + '</div>\
                            <div class="wicon">'+ item.location +'</div>\
                            <div class="wicon">'+ item.warnTime + '</div>\
                            <div class="wicon">'+ item.warnText + '</div>\
                    </div >'

                    ul = ul + li
                }

                _warnlist = res
                //加载列表
                $(".cmask .mark-list .warnlist.warnlist-corn").html(ul)
                //移除之前的点击事件
                $(".wicon-check").off("click");
                //设置全新的checkbox点击事件
                $(".wicon-check").on("click", function (event) {
                    var target = event.target || event.srcElement; // 获得事件源

                    var selType = target.getAttribute('seltype');
                    var selIndex = parseInt(target.getAttribute('selindex'));

                    if (selType == "all") {
                        if (_warnSelLength == _warnlist.length) {//如果已经全选了
                            $(".cmask .mark-list .warnlist .wicon-check img").hide()
                            _warnSelLength = 0
                        } else {//没有全选
                            $(".cmask .mark-list .warnlist .wicon-check img").show()
                            _warnSelLength = _warnlist.length
                        }

                    }
                    if (selType == "sub") {
                        var obj = $(".cmask .mark-list .warnlist.warnlist-corn .witem:nth-child(" + (selIndex + 1) + ") .wicon-check img");
                        var display = obj.css('display');
                        if (display == "none") {
                            obj.show()
                            _warnSelLength += 1
                            if (_warnSelLength == _warnlist.length) {
                                $("#wlist-checkbox-img").show()
                            }
                        } else {
                            obj.hide()
                            _warnSelLength -= 1
                            $("#wlist-checkbox-img").hide()
                        }
                    }

                })

            }
        })
    }

    var myChart = null;
    ///type= 0 表示 省份 
    ///type =10 表示 
    function showMap_shengfen(dataArray) {
        myChart = echarts.init(document.getElementById("map_1"));

        //alert(proviceArrayInfo);

        var data = [
            //{ name: '烟台', value: 573,projectId:1 },
            //{ name: '武汉', value: 273, projectId: 1 },
            //{ name: '大庆', value: 279, projectId: 1 }
        ];

        //先处理一下
        var shenfeng_Data = [];
        var curr_shenfen = "";
        var last_shenfen = "";
        $.each(dataArray, function (i, obj) {
            curr_shenfen = obj["province"];
            if (curr_shenfen != last_shenfen) {
                shenfeng_Data.push(obj);
            }
            last_shenfen = curr_shenfen;
        })

        $.each(shenfeng_Data, function (i, obj) {
            if (_projectId == null) {
                if (i == 0) {
                    data.push({
                        name: obj["province"],
                        value: obj["carNum"],
                        projectId: obj["projectId"],
                        projectName: obj["projectName"],
                        selected: false
                    });
                    //window.localStorage.setItem("projectId", obj["projectId"]);//默认第一个
                }
                else {
                    data.push({
                        name: obj["province"],
                        value: obj["carNum"],
                        projectId: obj["projectId"],
                        projectName: obj["projectName"],
                        selected: false
                    });
                }
            }
            else {
                if (_projectId == obj["projectId"]) {
                    data.push({
                        name: obj["province"],
                        value: obj["carNum"],
                        projectId: obj["projectId"],
                        projectName: obj["projectName"],
                        selected: true
                    });
                    window.localStorage.setItem("projectId", obj["projectId"]);//我对应的
                }
                else {
                    data.push({
                        name: obj["province"],
                        value: obj["carNum"],
                        projectId: obj["projectId"],
                        projectName: obj["projectName"],
                        selected: false
                    });
                }
            }
        })

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var item = data[i]
                var name = item.name;
                for (var j = 0; j < proviceArrayInfo.length; j++) {
                    var json_provice = proviceArrayInfo[j];
                    if (name == json_provice["name"]) {
                        item.geoCoord = [json_provice["value"][0], json_provice["value"][1]];
                        break;
                    }
                }
                var geoCoord = item.geoCoord;
                if (geoCoord) {
                    if (item.selected == true) {
                        res.push({
                            name: item.name,
                            value: geoCoord.concat(data[i].value),
                            itemStyle: {
                                color: "#ffeb7b"
                            }
                        });
                        window.localStorage.setItem("geoCoord", geoCoord);
                    }
                    else {
                        res.push({
                            name: item.name,
                            value: geoCoord.concat(data[i].value),
                        });
                    }
                }
            }
            return res;
        };

        option = {
            grid: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 0
            },
            tooltip: {
                trigger: "item",
                formatter: function (c) {
                    if (typeof (c.value)[2] == "undefined") {
                        return c.name
                        //return c.name + " : " + c.value
                    } else {
                        return c.name
                        //return c.name + " : " + c.value[2]
                    }
                }
            },
            geo: {
                map: "china",
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: "#4c60ff",
                        borderColor: "#002097"
                    },
                    emphasis: {
                        areaColor: "#ffeb7b"
                    }
                }
            },
            series: [{
                name: "项目位置",
                type: "effectScatter",
                coordinateSystem: "geo",
                hoverAnimation: true,
                showEffectOn: 'render',
                data: convertData(data),
                symbolSize: function (c) {
                    if (c[2] == 0) {
                        return 20;
                    }
                    else {
                        //return c[2] / 2;
                        return 20;
                    }

                },
                label: {
                    normal: {
                        formatter: "{b}",
                        position: "right",
                        show: true
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: public_color_array[3]
                    }
                },

            }]
        };
        myChart.setOption(option);
        myChart.off('click');
        myChart.on('click', function (params) {
            if (params["componentSubType"] == "effectScatter") {
                for (var i = 0; i < provincesText.length; i++) {
                    if (params.name === provincesText[i]) {
                        showProvince(provinces[i], provincesText[i]);
                        $("#divBackToChinaMap").show(200);
                        break;
                    }
                }
            }
        });
        window.addEventListener("resize",
            function () {
                myChart.resize()
            })
    }
    /**
     * 返回当前登录人的projectId
     * */
    function getNowLoginObjectInfo() {
        $.get('../api/webapiMain/getNowLoginObejct', function (result) {
            if (result.code == 100) {
                var projectId = result.data.projectId;
                if (projectId != null) {
                    window.localStorage.setItem("projectId", projectId);//默认第一个
                }
            }
        });
    }
    getNowLoginObjectInfo();
    //显示对应的省份
    function showProvince(provinceJp, provinceName) {
        $.get('../Scripts/mainShow/css/mapjson/' + provinceJp + '.json?r=' + Math.random(), function (geoJson) {

            //为所有数据加入地理位置数据
            $.each(public_project_data, function (i, obj) {
                var features = geoJson.features
                for (var j = 0; j < features.length; j++) {
                    var json_shi = features[j];
                    if (obj.projectName == json_shi["properties"]["name"]) {
                        obj.geoCoord = json_shi["properties"]["cp"];
                        break;
                    }
                }
            })

            var data = [];
            $.each(public_project_data, function (i, obj) {
                if (_projectId == null) {
                    if (i == 0) {
                        if (obj["province"] == provinceName) {
                            data.push({
                                name: obj["projectName"],
                                value: obj["carNum"],
                                projectId: obj["projectId"],
                                projectName: obj["projectName"],
                                geoCoord: obj["geoCoord"],
                                selected: false
                            });
                         //window.localStorage.setItem("projectId", obj["projectId"]);//默认第一个
                        }
                        
                    }
                    else {
                        if (obj["province"] == provinceName) {
                            data.push({
                                name: obj["projectName"],
                                value: obj["carNum"],
                                projectId: obj["projectId"],
                                projectName: obj["projectName"],
                                geoCoord: obj["geoCoord"],
                                selected: false
                            });
                        }
                        
                    }
                }
                else {
                    if (_projectId == obj["projectId"]) {
                        if (obj["province"] == provinceName) {
                            data.push({
                                name: obj["projectName"],
                                value: obj["carNum"],
                                projectId: obj["projectId"],
                                projectName: obj["projectName"],
                                geoCoord: obj["geoCoord"],
                                selected: true
                            });
                            window.localStorage.setItem("projectId", obj["projectId"]);//我对应的
                        }
                        
                    }
                    else {
                        if (obj["province"] == provinceName) {
                            data.push({
                                name: obj["projectName"],
                                value: obj["carNum"],
                                projectId: obj["projectId"],
                                projectName: obj["projectName"],
                                geoCoord: obj["geoCoord"],
                                selected: false
                            });
                        }
                        
                    }
                }
            })

            var convertData = function (data) {
                console.log(data);
                var res = [];
                for (var i = 0; i < data.length; i++) {

                    var item = data[i]
                    var geoCoord = item.geoCoord;
                    if (geoCoord) {
                        if (item.selected == true) {
                            res.push({
                                name: item.name,
                                value: geoCoord.concat(data[i].value),
                                itemStyle: {
                                    color: "#ffb800"
                                }
                            });
                            window.localStorage.setItem("geoCoord", geoCoord);
                        }
                        else {
                            res.push({
                                name: item.name,
                                value: geoCoord.concat(data[i].value),
                                itemStyle: {
                                    color: "#FFFFFF"
                                }

                            });
                        }

                    }
                }
                return res;
            };

            ///要渲染的数据
            var xuanranData = convertData(data);

            //alert(1);

            myChart.hideLoading();
            echarts.registerMap(provinceName, geoJson);
            myChart.clear();

            option = {
                grid: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 0
                },
                tooltip: {
                    trigger: "item",
                    formatter: function (c) {
                        if (typeof (c.value)[2] == "undefined") {
                            return c.name
                            // return c.name + " : " + c.value
                        } else {
                            return c.name
                            //return c.name + " : " + c.value[2]
                        }
                    }
                },
                geo: {
                    map: provinceName,
                    mapType: provinceName,
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: false,
                    itemStyle: {
                        normal: {
                            areaColor: "#4c60ff",
                            borderColor: "#002097"
                        },
                        emphasis: {
                            areaColor: "#ffeb7b"
                        }
                    }
                },
                series: [{
                    name: "项目位置",
                    type: "effectScatter",
                    coordinateSystem: "geo",
                    hoverAnimation: true,
                    showEffectOn: 'render',
                    data: xuanranData,
                    symbolSize: function (c) {
                        if (c[2] == 0) {
                            return 20;
                        }
                        else {
                            //return c[2] / 2;
                            return 20;
                        }

                    },
                    label: {
                        normal: {
                            formatter: "{b}",
                            position: "right",
                            show: true
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: public_color_array[3]
                        }
                    },

                }]
            };

            myChart.setOption(option);

            myChart.off('click');
            myChart.on('click', function (params) {
                console.log(params);
                if (params["componentSubType"] == "effectScatter") {
                    var name = params["name"];
                    var projectId = 0;
                    var projectName = "";
                    var projectGeoCoord = [];
                    //通过name反查询 projectId
                    for (var i = 0; i < public_project_data.length; i++) {
                        if (public_project_data[i]["projectName"] == name) {
                            projectId = public_project_data[i]["projectId"];
                            projectName = public_project_data[i]["projectName"];
                            projectGeoCoord = public_project_data[i]["geoCoord"];
                            break;
                        }
                    }

                    if (projectId) {
                        var msg = "你正在选择的是【" + params["name"] + "】项目，您需要？";
                        layer.confirm(msg
                            , {
                                btn: ['查看数据', '进入该项目', '取消']
                                , btn1: function (index) {
                                    layer.close(index);
                                    _projectId = projectId
                                    _projectName = projectName
                                    _projectCity = params["name"]
                                    //保存项目信息
                                    window.localStorage.setItem("projectId", projectId);
                                    window.localStorage.setItem("geoCoord", projectGeoCoord);
                                    window.localStorage.setItem("projectName", _projectName);
                                    window.localStorage.setItem("projectCity", params["name"]);

                                    updateData();
                                    var oldOption = option
                                    console.log(oldOption);
                                    console.log(_projectCity);
                                    for (var i = 0; i < xuanranData.length; i++) {
                                        xuanranData[i].itemStyle = {};
                                        if (xuanranData[i].name == _projectCity) {
                                            xuanranData[i].itemStyle = {
                                                color: "#ffeb7b"
                                            };
                                        }
                                    }
                                    myChart.setOption(option);
                                    //console.log(showMap_shengfen());
                                    $("#center-title").html(params["name"] + "明基智慧环卫平台");

                                }
                                , btn2: function (index) {
                                    layer.close(index);

                                    //保存项目信息
                                    window.localStorage.setItem("projectId", projectId);
                                    window.localStorage.setItem("geoCoord", projectGeoCoord);
                                    window.localStorage.setItem("projectName", _projectName);
                                    window.localStorage.setItem("projectCity", params["name"]);

                                    window.location.href = "../main/index_pro?projectId=" + projectId
                                        + "&projectName=" + projectName + "&r=" + Math.random();
                                }
                            }
                        );
                    }
                    else {
                        layer.alert("请重新选择！没有发现有效项目id");
                    }
                }
            });
        });
    }


    function 中间() {

        var passJson = {};
        passJson.projectId = ""

        var par = {}
        par.op = "equal"
        par.fieldName = "dealStateName"
        par.fieldValue = "未处理"

        passJson.centerSearchArray = [par]

        if (_projectId != null) {
            passJson.projectId = _projectId;
            passJson.topLength = 5; //设置显示的最大的行数。
        } else {
            return
        }

        $.ajax({
            url: "../api/webapi_warn/getWarnTopSql",
            data: passJson,
            method: "post",
            dataType: "json",
            success: function (res) {
                for (var i = 0; i < 4; i++) {
                   
                    var obj = $("#warnlist-preview .witem:nth-child(" + (i + 2) + ")")
                    if (i < res.length) {
                        var item = res[i]

                        if (item.location == null) {
                            item.location = ""
                        }

                        if (item.warnTypeId == 5) {
                            obj.css("background-color", "red");
                        } else {
                            obj.css("background-color", "");
                        }

                        var x = item.location.indexOf("市")
                        if (x != -1) {
                            item.location = item.location.substring(x + 1);
                        }

                        obj.children("div").eq(0).html(item.mubiaoName)
                        obj.children("div").eq(1).html(item.location)
                        obj.children("div").eq(2).html(item.warnTime)
                        obj.children("div").eq(3).html(item.warnText)
                    } else {
                        obj.children("div").eq(0).html("")
                        obj.children("div").eq(1).html("")
                        obj.children("div").eq(2).html("")
                        obj.children("div").eq(3).html("")
                    }
                }
            }
        })
       
        //var a = echarts.init(document.getElementById("echart7"));
        //var option = {
        //    color: public_color_array,
        //    tooltip: {
        //        trigger: "axis",
        //        axisPointer: {
        //            type: "shadow"
        //        }
        //    },
        //    grid: {
        //        left: "3%",
        //        top: "35px",
        //        right: "3%",
        //        bottom: "10%",
        //    },
        //    legend: {
        //        data: ['任务打卡数', '总任务数'],
        //        left: "5px",
        //        textStyle: {
        //            color: "#FFFFFF"
        //        }
        //    },
        //    xAxis: [{
        //        type: 'category',
        //        axisLabel: {
        //            show: true,
        //            textStyle: {
        //                color: "rgba(255,255,255,0.6)",
        //                fontSize: "12",
        //            },
        //        },
        //        axisTick: {
        //            show: false,
        //        },
        //        axisLine: {
        //            show: true,
        //            lineStyle: {
        //                color: "rgba(255,255,255,0.1)",
        //                width: 0,
        //                type: "dotted"
        //            },
        //        },
        //        splitLine: {
        //            show: false,
        //            lineStyle: {
        //                color: "rgba(255,255,255,0.1)",
        //            }
        //        }
        //    }],
        //    yAxis: [{
        //        type: "value",
        //        data: [],
        //        axisLine: {
        //            show: true,
        //            lineStyle: {
        //                color: "rgba(255,255,255,0.1)",
        //                width: 1,
        //                type: "dotted"
        //            },
        //        },
        //        axisTick: {
        //            show: false,
        //        },
        //        axisLabel: {
        //            interval: 0,
        //            show: true,
        //            splitNumber: 1,
        //            textStyle: {
        //                color: "rgba(255,255,255,0.6)",
        //                fontSize: "12",
        //            },
        //        },
        //        splitLine: {
        //            show: true,
        //            lineStyle: {
        //                color: "rgba(255,255,255,0.1)",
        //                width: 1,
        //                type: 'solid'
        //            }
        //        }
        //    }],
        //    series: [{
        //        type: "line",
        //        data: [],
        //        barWidth: "35%",
        //        itemStyle: {
        //            normal: {
        //                color: "#2f89cf",
        //                opacity: 1,
        //                barBorderRadius: 5,
        //            }
        //        }
        //    }]
        //};
        //var index = 0;
        //$.ajax({
        //    url: "../api/webapi_baobiao/getTaskStatics?projectId=3&type=day",
        //    dataType: "json",
        //    success: function (dataArray) {
        //        var xAxisData = [];
        //        var seriesData1 = [];
        //        var seriesData2 = [];
        //        $.each(dataArray, function (i, obj) {
        //            xAxisData.push(obj["date"]);
        //            seriesData1.push(obj["taskClockedCount"]);
        //            seriesData2.push(obj["taskCount"]);
        //        });
        //        var seriesData = [];
        //        seriesData.push({
        //            name: "任务打卡数", type: "bar", data: seriesData1
        //        });
        //        seriesData.push({
        //            name: "总任务数", type: "bar", data: seriesData2
        //        });

        //        option.xAxis[0].data = xAxisData;
        //        option.series = seriesData;
        //        a.clear();
        //        a.setOption(option);

        //    }
        //})



    }


    function 获取总数() {
        var url = "../api/webapi_baobiao/getCount?projectId="
        if (_projectId != null) {
            url = url + _projectId
        }
        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (dataList) {
                if (dataList.length > 0) {

                    var carNum = dataList[0]["carNum"];
                    var personNum = dataList[0]["personNum"];
                    $("#li_allCarCount").html(carNum + "(辆)");
                    $("#li_allCarCount").css("color", "#ffeb7b")
                    $("#li_allPeopleCount").html(personNum+ "(位)");
                    $("#li_allPeopleCount").css("color","#ffeb7b")
                    
                }
            }
        })
    }


    function 左1() {


        var a = _zuo1;
        if (a == null) {
            a = echarts.init(document.getElementById("echart1"));
            _zuo1 = a
        }

        var option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                }
            },
            grid: {
                left: "2%",
                top: "10px",
                right: "2%",
                bottom: "4%",
                containLabel: true
            },
            xAxis: [{
                type: "value",
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12",
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            yAxis: [{
                type: "category",
                data: [],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
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
                        color: "rgba(255,255,255,.6)",
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
                        color: public_color_array[0],
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            }]
        };

        var url = "../api/webapi_baobiao/carNumGroupByKind?projectId="
        if (_projectId != null) {
            url = url + _projectId
        }

        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (dataList) {
                if (dataList.length > 0) {
                    //var yAxisArray = ["车辆数", "人员数", "设备数"];
                    //$("#li_allCarCount").html(dataList[0]["carNum"] + "(辆)");
                    //$("#li_allCarCount").css("color", public_color_array[3])
                    //$("#li_allPeopleCount").html(dataList[0]["personNum"] + "(位)");
                    //$("#li_allPeopleCount").css("color", public_color_array[3])
                    //var seriesArray = [];
                    //seriesArray.push(dataList[0]["carNum"]);
                    //seriesArray.push(dataList[0]["personNum"]);
                    //seriesArray.push(dataList[0]["equipNum"]);
                    //alert(JSON.stringify(dataList));

                    var yAxisArray = [];
                    var seriesArray = [];
                    $.each(dataList, function (i, obj) {
                        yAxisArray.push(obj["kind"]);
                        seriesArray.push(obj["totalNum"]);
                    })

                    option.yAxis[0].data = yAxisArray;
                    option.series[0].data = seriesArray;

                } else {
                    option.yAxis[0].data = [];
                    option.series[0].data = [];

                }

                a.clear();
                a.setOption(option);
            }
        })

        window.addEventListener("resize",
            function () {
                a.resize()
            })
    }
    function 左2() {

        var a = _zuo2;
        if (a == null) {
            a = echarts.init(document.getElementById("echart2"));
            _zuo2 = a
        }

        var option = {
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
                data: [],

                textStyle: {
                    color: "#ffffff"
                }
            },
            series: [
                {
                    name: '车辆出勤率',
                    type: 'pie',
                    radius: '70%',
                    center: ['50%', '50%'],
                    data: [
                        //{ value: 335, name: '驭龙之力' },
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

        var url = "../api/webapi_baobiao/carChuqin?projectId="
        if (_projectId != null) {
            url = url + _projectId
        }

        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (dataList) {
                if (dataList.length > 0) {
                    var legendData = [];
                    var array = [];

                    $.each(dataList, function (i, obj) {
                        legendData.push(obj["status"]);
                        array.push({
                            value: obj["count"], name: obj["status"],
                            itemStyle: {
                                color: colors[i]
                            }
                        });
                    })

                    option.legend.data = legendData;
                    option.series[0].data = array;

                } else {
                    option.legend.data = [];
                    option.series[0].data = [];
                }

                a.clear();
                a.setOption(option);
            }
        })
        window.addEventListener("resize",
            function () {
                a.resize()
            });
    }

    function 左3() {

        //$(".cheatstotal>div").css("background-color",);

        var url = "../api/webapi_baobiao/carDataToday?projectId="
        if (_projectId != null) {
            url = url + _projectId;
        } 

        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (list) {
                var youhao = 0;
                var licheng = 0;
                if (list.length > 0) {
                    for (var i = 0; i < list.length; i++) {
                        var item = list[i];
                        youhao = youhao + item.youhao;
                        licheng = licheng + item.licheng;
                    }
                }
                var obj = $(".cheatstotal [name='showValue']");

                var showYouhao = Math.abs(youhao).toFixed(0)
                var showLicheng = licheng.toFixed(0)

                if (youhao > 1000) {
                    showYouhao = parseFloat(youhao.toFixed(0) / 1000).toFixed(0) + "K"
                }

                if (licheng > 1000) {
                    showLicheng = parseFloat(licheng.toFixed(0) / 1000).toFixed(0) + "K"
                }

                $(obj[0]).html(showLicheng);
                $(obj[1]).html(showYouhao);
                //$(".cheatstotal>div:last-child>div:last-child>text").html(parseInt(youhao));
            }
        })
    }

    function 右1() {

        var a = _you1;
        if (a == null) {
            a = echarts.init(document.getElementById("echart4"));
            _you1 = a
        }

        var option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                }
            },
            grid: {
                left: "2%",
                top: "10px",
                right: "2%",
                bottom: "4%",
                containLabel: true
            },
            xAxis: [{
                type: "value",
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12",
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            yAxis: [{
                type: "category",
                data: [],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
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
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12",
                    },
                },

            }],
            series: [{
                type: "bar",
                data: [],
                barWidth: "35%",
                itemStyle: {
                    color: public_color_array[0],
                    opacity: 1,
                    barBorderRadius: 5,
                }
            }]
        };

        var url = "../api/webapi_baobiao/personNumGroupByZhiwu?projectId="
        if (_projectId != null) {
            url = url + _projectId
        }

        $.ajax({
            type: "get",
            url:url,
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
                    
                } else {
                    option.yAxis[0].data = [];
                    option.series[0].data = [];
                }

                a.clear();
                a.setOption(option);
            }
        })

        window.addEventListener("resize",
            function () {
                a.resize()
            })
    }
    function 右2() {

        var a = _you2;
        if (a == null) {
            a = echarts.init(document.getElementById("echart5"));
            _you2 = a
        }

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
                data: [],

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

        var url = "../api/webapi_baobiao/personChuqin?projectId="
        if (_projectId != null) {
            url = url + _projectId
        }

        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (dataList) {
                var array = [];
                var legendData = [];
                $.each(dataList, function (i, obj) {
                    legendData.push(obj["status"]);
                    array.push({
                        value: obj["count"], name: obj["status"],
                        itemStyle: {
                            color: colors[i]
                        }
                    });
                });
                option2.legend.data = legendData;
                option2.series[0].data = array;
                a.clear();
                a.setOption(option2);
            }
        })

        window.addEventListener("resize",
            function () {
                a.resize()
            })
    }
    function 右3() {

        var a = _you3;
        if (a == null) {
            a = echarts.init(document.getElementById("echart6"));
            _you3 = a
        }

        var option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                }
            },
            grid: {
                left: "2%",
                top: "10px",
                right: "2%",
                bottom: "2%",
                containLabel: true
            },
            xAxis: [{
                type: "value",
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12",
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        width: 1,
                        color: "rgba(255,255,255,.05)",
                    }
                }
            }],
            yAxis: [{
                type: "category",
                data: [],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
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
                        color: "rgba(255,255,255,.6)",
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
                    width: 10,
                }
            }]
        };

        var url = "../api/webapi_baobiao/equipNumGroupByType?projectId="
        if (_projectId != null) {
            url = url + _projectId
        }


        $.ajax({
            type: "get",
            url: url,
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

                } else {
                    option.yAxis[0].data = [];
                    option.series[0].data = [];
                }

                a.clear();
                a.setOption(option);
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

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}