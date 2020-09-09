
function configMapSearch(map, searchObj, zoom) {

	var ac = new BMap.Autocomplete(    //����һ���Զ���ɵĶ���
		{
			"input": "suggestId"
			, "location": map
		});

	ac.addEventListener("onhighlight", function (e) {  //�����������б��ϵ��¼�
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
	ac.addEventListener("onconfirm", function (e) {    //����������б����¼�
		var _value = e.item.value;
		myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
		searchObj.innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

		setPlace();
	});

	function setPlace() {
		function myFun() {
			var pp = local.getResults().getPoi(0).point;    //��ȡ��һ�����������Ľ��
			map.centerAndZoom(pp, zoom);
			//map.addOverlay(new BMap.Marker(pp));    //��ӱ�ע
		}
		var local = new BMap.LocalSearch(map, { //��������
			onSearchComplete: myFun
		});
		local.search(myValue);
	}
}


function configMapLocation(map) {
	// ��Ӷ�λ�ؼ�
	var geolocationControl = new BMap.GeolocationControl();
	geolocationControl.addEventListener("locationSuccess", function (e) {
		// ��λ�ɹ��¼�
	});
	geolocationControl.addEventListener("locationError", function (e) {
		// ��λʧ���¼�
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
		// �����Ͻ�λ��
		anchor: BMAP_ANCHOR_TOP_RIGHT,
	}));
}