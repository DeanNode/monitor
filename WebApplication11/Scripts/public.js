var lang = 'ja'; //用来规定显示的语言如果是jp则为日文，zh为中文
var langMaps = {}; //用来保存所有的从配置文件获取到的语言
var langObj = {}; //用来保存和调用的原始方法，可以用来使用对应的占位符的操作
function getCurrentAddDayYMD(dayadd) {

    var a = new Date();
    a = a.valueOf()
    a = a + dayadd * 24 * 60 * 60 * 1000

    var myDate = new Date(a)
    var myY = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    var myM = myDate.getMonth() + 1;       //获取当前月份(0-11,0代表1月)
    var myD = myDate.getDate();        //获取当前日(1-31)
    var tm = myM > 9 ? myM.toString() : "0" + myM.toString();
    var td = myD > 9 ? myD.toString() : "0" + myD.toString();
    var tt = myY + "-" + tm + "-" + td;
    return tt;
}

function getDayAddDayYMD(myDay,dayadd) {

    var a = new Date(myDay);
    a = a.valueOf()
    a = a + dayadd * 24 * 60 * 60 * 1000

    var myDate = new Date(a)
    var myY = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    var myM = myDate.getMonth() + 1;       //获取当前月份(0-11,0代表1月)
    var myD = myDate.getDate();        //获取当前日(1-31)
    var tm = myM > 9 ? myM.toString() : "0" + myM.toString();
    var td = myD > 9 ? myD.toString() : "0" + myD.toString();
    var tt = myY + "-" + tm + "-" + td;
    return tt;
}

function CurentTime() {
    var now = new Date();

    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日

    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    var ss = now.getSeconds();          //分

    var clock = year + "-";

    if (month < 10)
        clock += "0";

    clock += month + "-";

    if (day < 10)
        clock += "0";

    clock += day + " ";

    if (hh < 10)
        clock += "0";

    clock += hh + ":";
    if (mm < 10) clock += '0';
    clock += mm + ":";
    if (ss < 10) clock += '0';
    clock += ss;

    return (clock);
}

function getDateTime(d) {

    var year = d.getFullYear();

    var month = d.getMonth() + 1;

    var date = d.getDate();

    var hour = d.getHours();

    var min = d.getMinutes(); // 获取当前分钟数(0-59)

    var sec = d.getSeconds();

    return year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec;

}



//弹出一个询问框
function confirmFormWithDivID(title,divId, okFun, noFun) {
    layer.open({
        title: title,
        type: 1,
        anim: 1,
        area: ['480px', '600px'],
        skin: 'layui-layer-rim', //加上边框
        content: $(divId),
        btn: ["确定", "取消"],
        yes: okFun,
        btn2: noFun
    });
}

//大尺寸的询问框
function confirmFormWithBigDivID(title, divId, okFun, noFun) {
    layer.open({
        title: title,
        type: 1,
        anim: 1,
        area: ['1400px', '800px'],
        skin: 'layui-layer-rim', //加上边框
        content: $(divId),
        btn: ["确定", "取消"],
        yes: okFun,
        btn2: noFun
    });
}

//大尺寸的询问框
function confirmFormWithMiddleDivID(title, divId, okFun, noFun) {
    layer.open({
        title: title,
        type: 1,
        anim: 1,
        area: ['1400px', '600px'],
        skin: 'layui-layer-rim', //加上边框
        content: $(divId),
        btn: ["确定", "取消"],
        yes: okFun,
        btn2: noFun
    });
}

//短一点的询问框
function confirmFormWithLittleDivID(title, divId, okFun, noFun) {
    layer.open({
        title: title,
        type: 1,
        anim: 1,
        area: ['1100px', '600px'],
        skin: 'layui-layer-rim', //加上边框
        content: $(divId),
        btn: ["确定", "取消"],
        yes: okFun,
        btn2: noFun
    });
}

function ajaxMethod(vUrl,successFun) {
    $.ajax({
        url: vUrl,
        dataType: "json",
        success: successFun
    })
}
function ajaxMethod_asyncoff(vUrl, successFun) {
    $.ajax({
        url: vUrl,
        async: false,
        dataType: "json",
        success: successFun
    })
}
function ajaxMethodWithPassData(vUrl,Passdata, successFun) {
    $.ajax({
        url: vUrl,
        dataType: "json",
        data: Passdata,
        success: successFun
    })
}
function ajaxMethodWithWaiting(vUrl, successFun) {
    $.ajax({
        type:"get",
        url: vUrl,
        dataType: "json",
        beforeSend: function () { layer.load(1); },
        success: successFun
    })
}
function ajaxMethodWithWaiting2(vUrl,passData, successFun) {
    $.ajax({
        type: "post",
        url: vUrl,
        data: passData,
        beforeSend: function () { layer.load(1); },
        success: successFun
    })
}
function ajaxMethodWithWaiting3(vUrl, passData, successFun) {
    $.ajax({
        type: "post",
        url: vUrl,
        data: passData,
        success: successFun
    })
}
//装载 表单的select 注意没有渲染
function loadingFormSelect(selectObj, jsonArray, idKey, valueKey) {
    if (selectObj != null && jsonArray != null && jsonArray.length > 0) {

        var html = "<option value=''>请选择</option>";
        $.each(jsonArray, function (i, json) {
            html += "<option value='" + json[idKey] + "'>" + json[valueKey] + "</option>";
        })
        selectObj.html(html);
    } 
    
}

//得到查询div中的额查询数据
function getJsonListSearchForm(form) {
    if (!form) return null;
    var jsonArray = []; // {fieldName:"jt_name",fieldValue:"11",isNeed:"1",placeholder:"名称",isIdentity:0,checkcf:1};
    var vStr = "";
    $(":input", form).not(":button, [disabled]")
        .each(function () {
            if (!this.name) return;
            if ($(this).val() == null || $(this).val() == "") return;
            var placeholder = $(this).attr("placeholder"); //标题
            var value = $(this).val(); //填写的值
            var name = this.name; //控件名称
            var op = $(this).attr("op") || "equal";

            var json = {};
            json.op = op;
            json.fieldName = name;
            json.fieldValue = value;

            jsonArray.push(json);
        });

    return jsonArray;
}


//得到 弹出框 中控件 中所有的值
function getJsonListOpenForm(form) {
    if (!form) return null;
    var jsonArray = []; // {fieldName:"jt_name",fieldValue:"11",isNeed:"1",placeholder:"名称",isIdentity:0,checkcf:1};
    var vStr = "";
    $(":input", form).not(":submit, :reset, :image,:button, [disabled],:checkbox")
        .each(function () {
            if (!this.name) return;

            var isSumit = $(this).attr("isSumit") || "1"; //是否提交默认是
            if (isSumit == 0) return;
            var isNeed = $(this).attr("isNeed") || "0"; //是否必填
            var placeholder = $(this).attr("placeholder") || "未填写"; //标题
            var value = $(this).val(); //填写的值
            var name = this.name; //控件名称
            var json = {};

            json.fieldName = name;
            json.fieldValue = value;
            json.isSumit = isSumit;
            json.isNeed = isNeed;
            json.placeholder = placeholder;
            jsonArray.push(json);


        });

    return jsonArray;
}
//得到 弹出框 中控件 中所有控件 
function getJsonListOpenFormClearObject(form) {
    if (!form) return [];
    var jsonArray = []; // {fieldName:"jt_name",fieldValue:"11",isNeed:"1",placeholder:"名称",isIdentity:0,checkcf:1};
    $(":input", form).not(":submit, :reset, :image,:button, [disabled],:checkbox")
        .each(function () {
            if (!this.name) return;
            jsonArray.push(this);
        });
    return jsonArray;
}
/**
 * 兼容的时间字符串转换为日期的方法 日期字符出格式为 YYYY-MM-DD hh24:mi:ss
 * @param {any} dateStr 需要转换的日期的字符串
 * @param {any} separator  日期的分隔符
 * @param {any} separatorTime 时间的分隔符   
 */
function strFormatDate(dateStr, separator, separatorTime) {
    if (!separator) {
        separator = "-";
    }
    if (!separatorTime) {
        separatorTime = ":";
    }
    var dateArr = dateStr.split(separator);
    var year = parseInt(dateArr[0]);
    var month
    if (dateArr[1].indexOf("0") == 0) {
        month = parseInt(dateArr[1].substring(1));
    } else {
        month = parseInt(dateArr[1]);
    }
    var day = parseInt(dateArr[2].substring(0, 2));
    var Time = dateStr.split(" ")[1].split(separatorTime);
    var houser = Time[0];
    var minutes = Time[1];
    var sounds = Time[2];
    var data = new Date(year, month - 1, day, houser, minutes, sounds);
    return data;
}

function showConsoleLog(vText) {
    var isDeug = true;//只需要这里修改成 false就可以
    if (isDeug) {
        console.log(vText);
    }
}
function showMsg(vText) {
    layer.msg(vText);
}
/**
 * 限制输入框只能输入整数和长度
 * 使用方法在input上加上 ： oninput="if(value.length>3)value=value.slice(0,3)" onkeyup="inputInteger(this.value)" onafterpaste="inputInteger(this.value)" 前面在配合一个限制长度的用法  前者执行粘贴之后后者是执行键盘按下之后 就可以使用，只限使用 type=number的input
 * @param 需要验证的输入值
 */
function inputInteger(value) {
    return value.replace(/\D/g, '');
}
/**
 * 过滤掉所有的非英文字母、数字下划线的内容
 * @param 
 */
function replaceAllW(value) {
    return value.replace(/\W/g, '');
}

//打开一个选择框的弹出框
function openASelectForm(divId, title, okFun) {
    layer.open({
        title: title,
        type: 1,
        anim: 1,
        area: ['500px', '400px'],
        skin: 'layui-layer-rim', //加上边框
        content: $(divId),
        btn: ["确定", "取消"],
        yes: okFun
    });
}

/**
 * 执行国际化汉字变化，对应哪个data-lang= 配置文件的当中配置项，这样就能拿到对应的
 * 配置项后面的文字。并将所有的文字结果集保存到langMaps中，方便更改单个集合或者内容信息
 * @param {any} callback 需要执行回调，返回$.i18n方法
 * https://github.com/jquery-i18n-properties/jquery-i18n-properties
 */
function internationalize(backFun) { 
    //lang = lang == 'zh' ? 'jp' : 'zh';
    $.i18n.properties({
        name: 'lang', //调用国际化的文件名
        path: '/lib/i18n/', //调用国家话的路径
        language: lang, //对应的语言 zh中文,ja日文
        cache: true,        
        mode: 'map',  //map 为键值对，both干啥的布吉岛 
        callback: function () {
            for (var i in $.i18n.map) {
                $('[data-lang=\'' + i + '\']').text($.i18n.map[i]);
            }
            langMaps = $.i18n.map;
            langObj = $.i18n;
            //调用回调返回对应的对象估计会废弃
            if (backFun) {
                backFun($.i18n);
            }
        }
    })
}