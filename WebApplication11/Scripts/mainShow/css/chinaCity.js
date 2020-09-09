﻿// 数据
var provinces = ['shanghai', 'hebei', 'shan1xi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shan3xi', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'hongkong', 'macau'];

var provincesText = ['上海', '河北省', '山西省', '内蒙古', '辽宁省', '吉林省', '黑龙江省', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西省', '海南省', '四川省', '贵州省', '云南省', '西藏', '陕西省', '甘肃省', '青海省', '宁夏省', '新疆', '北京', '天津', '重庆', '香港', '澳门'];


var proviceArrayInfo = [ 

 { name: '北京', value: [ '116.3979471', '39.9081726', 78 ] },

 { name: '上海', value: [ '121.4692688', '31.2381763', 75 ] },

 { name: '天津', value: [ '117.2523808', '39.1038561', 95 ] },

 { name: '重庆', value: [ '106.548425', '29.5549144', 78 ] },

    { name: '河北省', value: [ '114.4897766', '38.0451279', 42 ] },

 { name: '山西省', value: [ '112.5223053', '37.8357424', 90 ] },

    { name: '辽宁省', value: [ '123.4116821', '41.7966156', 96 ] },

    { name: '吉林省', value: [ '125.3154297', '43.8925629', 46 ] },

    { name: '黑龙江省', value: [ '126.6433411', '45.7414932', 97 ] },

    { name: '浙江省', value: [ '120.1592484', '30.265995', 32 ] },

    { name: '福建省', value: [ '119.2978134', '26.0785904', 2 ] },

    { name: '山东省', value: [ '117.0056', '36.6670723', 32 ] },

    { name: '河南省', value: [ '113.6500473', '34.7570343', 23 ] },

    { name: '湖北省', value: [ '114.2919388', '30.5675144', 76 ] },

    { name: '湖南省', value: [ '112.9812698', '28.2008247', 71 ] },

    { name: '广东省', value: [ '113.2614288', '23.1189117', 6 ] },

    { name: '海南省', value: [ '110.3465118', '20.0317936', 64 ] },

 { name: '四川省', value: [ '104.0817566', '30.6610565', 54 ] },

    { name: '贵州省', value: [ '106.7113724', '26.5768738', 1 ] },

    { name: '云南省', value: [ '102.704567', '25.0438442', 78 ] },

    { name: '江西省', value: [ '115.8999176', '28.6759911', 16 ] },

    { name: '陕西省', value: [ '108.949028', '34.2616844', 14 ] },

    { name: '青海省', value: [ '101.7874527', '36.6094475', 22 ] },

    { name: '甘肃省', value: [ '103.7500534', '36.0680389', 37 ] },

    { name: '广西省', value: [ '108.3117676', '22.8065434', 52 ] },

 { name: '新疆', value: [ '87.6061172', '43.7909393', 11 ] },

 { name: '内蒙古', value: [ '111.6632996', '40.8209419', 56 ] },

 { name: '西藏', value: [ '91.1320496', '29.657589', 6 ] },

 { name: '宁夏', value: [ '106.2719421', '38.4680099', 64 ] },

 { name: '台湾', value: [ '120.9581316', '23.8516062', 49 ] },

 { name: '香港', value: [ '114.139452', '22.391577', 49 ] },

 { name: '澳门', value: [ '113.5678411', '22.167654', 36 ] },

    { name: '安徽省', value: [ '117.2757034', '31.8632545', 78 ] },

    { name: '江苏省', value: [ '118.7727814', '32.0476151', 98 ] } 

];