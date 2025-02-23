
function configMapSearch(map, searchObj, zoom) {

	var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
		{
			"input": "suggestId"
			, "location": map
		});

	ac.addEventListener("onhighlight", function (e) {  //鼠标放在下拉列表上的事件
		var str = "";
		var _value = e.fromitem.value;
		var value = "";
		if (e.fromitem.index > -1) {
			value = _value.province + _value.city + _value.district + _value.street + _value.business;
		}
		str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

		value = "";
		if (e.toitem.index > -1) {
			_value = e.toitem.value;
			value = _value.province + _value.city + _value.district + _value.street + _value.business;
		}
		str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
		searchObj.innerHTML = str;
	});

	var myValue;
	ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
		var _value = e.item.value;
		myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
		searchObj.innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

		setPlace();
	});

	function setPlace() {
		function myFun() {
			var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
			map.centerAndZoom(pp, zoom);
			//map.addOverlay(new BMap.Marker(pp));    //添加标注
		}
		var local = new BMap.LocalSearch(map, { //智能搜索
			onSearchComplete: myFun
		});
		local.search(myValue);
	}
}


function configMapLocation(map) {
	// 添加定位控件
	var geolocationControl = new BMap.GeolocationControl();
	geolocationControl.addEventListener("locationSuccess", function (e) {
		// 定位成功事件
	});
	geolocationControl.addEventListener("locationError", function (e) {
		// 定位失败事件
		alert(e.message);
	});
	map.addControl(geolocationControl);
}

function configMapType(map) {
	map.addControl(new BMap.MapTypeControl({
		mapTypes: [
			BMAP_NORMAL_MAP,
			BMAP_HYBRID_MAP
		],
		// 靠左上角位置
		anchor: BMAP_ANCHOR_TOP_RIGHT,
	}));
}