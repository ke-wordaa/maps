var location_0 = [24.83840105447053, 121.0037989629379]
var location_1 = [25.035355944918575, 121.56444359244189]
let a0 = [
    '橫山 下公館 竹東水泥廠',
    '五穀宮 伍聯社',
    '竹東高中 竹東麥當勞',  
    '北埔 東芝湖 榮華火車'
];

let a1 = [
    '光武國中 建中一信',
    '湳雅街',
    '南寮 磐石 空軍',
    '雙溪竹師'
];

let a2 = [
    '文興線',
    '芎林 東海 健身房',
    '嘉豐北 高鐵 興隆',
    '六家豐米 嘉興路 台新',
    '十興 勝利七街',
    '六家郵局 喜來登',
    '體育館 福興公園',
    '稅捐處 台灣銀行'
];

let a3 = [
    '關西 石光寶石線',
    '新埔 力成科技',
    '照門新埔 中正東路'
];

let a4 = [
    '小叮噹 明新科大(高中)',
    '11股站 埔和 白地',
    '泰安街7-11 正隆紙廠',
    '榮華新村 華南銀行',
    '新崙 新庄子'
];

let a5 = [
    '中國科大 湖口 陸橋',
    '佳佳 湖口中學',
    '信勢國小 仰德路口 濟生生活館',
    '工業區'
];

// 定義路線對象
var routes = {
    '橫山、竹東、北埔': a0,
    '新竹市': a1,
    '新竹、雙溪竹師': a1,
    '竹北': a2,
    '關西、新埔': a3,
    '新豐': a4,
    '湖口、工業區、仰德路口': a5
    // 可以添加更多的路線
};

// 獲取所需的 select 元素
var sc1 = document.getElementById('sc1');
var sc2 = document.getElementById('sc2');

// 監聽 sc1 的變化事件
sc1.addEventListener('change', updateRoutes);

// 初始化
updateRoutes();

// 函數：更新 sc2 的選項
function updateRoutes() 
{
    var selectedValue = sc1.value;
    var selectedRoutes = routes[selectedValue] || [];

    if (sc2.length != 1) {
        sc2.innerHTML = '<option>請選擇路線</option>';
    }

    for (let i = 0; i < selectedRoutes.length; i++) {
        sc2.innerHTML += '<option>' + selectedRoutes[i] + '</option>';
    }

    sc2.style.visibility = selectedRoutes.length > 0 ? 'visible' : 'hidden';
}

function move(locations)
{
    map.setView(locations[0].loc, 15);
    for (let i = 1; i < locations.length; i++) {
        var marker = L.marker(locations[i].loc).addTo(map);
        marker.bindTooltip(locations[i].text).openTooltip();
        markers.push(marker);
    }
    console.log(markers);
}
function clearMarkers()
{
    for (var i = 0; i < markers.length; i++) {
        map.removeLayer(markers[i]);
    }
    markers = [];
}
function edit() 
{
    clearMarkers()
    clearSelectOptions();
    var selectedRoutes = routes[sc1.value] || [];
    for (let i = 0; i < selectedRoutes.length; i++) 
    {
        sc2.innerHTML += '<option>' + selectedRoutes[i] + '</option>';
    }
    sc2.style.visibility = selectedRoutes.length > 0 ? 'visible' : 'hidden';
}

function edit_2() 
{
    clearMarkers()
    map.setView([24.868914777821455, 120.99613626468131], 15);
    var selectedValue = sc2.value;
    if (selectedValue == '榮華新村 華南銀行') 
    {
        var locations = [
            { loc: [24.87981596543937, 120.99400357923871] },
            { text: '榮華新村口', loc: [24.88316090299999, 120.99394451427828] },
            { text: '華南銀行', loc: [24.874768185467357, 120.99425785922794] }
        ];
        move(locations);
    } 
    else 
    {
        clearMarkers();
    }
}

function clearSelectOptions()
{
    if (sc2.length != 1) {
        sc2.innerHTML = '<option>請選擇路線</option>';
    }
    sc2.style.visibility = 'visible';
}
//取得元素
var markers = [];
var sc1 = document.getElementById('sc1')
sc1.addEventListener('change',edit)
var sc2 = document.getElementById('sc2')
sc2.addEventListener('change',edit_2)
sc2.style.visibility='hidden'
//地圖本體

var map = L.map('map').setView(location_1,8);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '',
    maxZoom:25,
    detectRetina:false,
    prefercanvas:true   
}).addTo(map)

