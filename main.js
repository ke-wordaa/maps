//橫山 竹東 北埔
let a0 = 
[
    '橫山 下公館 竹東水泥廠',
    '五穀宮 伍聯社台灣銀行',
    '竹東高中 竹東麥當勞',  
    '北埔 東芝湖 榮華火車'
]
//新竹 雙溪竹師
let a1 = 
[
    '光武國中 建中一信',
    '湳雅街',
    '南寮 磐石 空軍',
    '雙溪竹師'
]
//竹北
let a2 = 
[
    '文興線',
    '芎林 東海 健身房',
    '嘉豐北 高鐵 興隆',
    '六家豐米 嘉興路 台新',
    '十興 勝利七街',
    '六家郵局 喜來登',
    '體育館 福興公園',
    '稅捐處'
]
//關西 新埔
let a3=
[
    '關西 石光寶石線',
    '新埔 力成科技',
    '照門新埔 中正東路'
]
//新豐
let a4=
[
    '小叮噹 明新科大(高中)',
    '11股站 埔和 白地',
    '泰安街7-11 正隆紙廠',
    '榮華新村 華南銀行',
    '新崙 新庄子'
]
//湖口 工業區 仰德路口
let a5=
[
    '中國科大 湖口 陸橋',
    '佳佳 湖口中學',
    '信勢國小 仰德路口 濟生生活館',
    '工業區'
]
//取得元素
var sc1 = document.getElementById('sc1')
sc1.addEventListener('change',edit)
var sc2 = document.getElementById('sc2')
function edit() {
    if (sc1.value=='橫山、竹東、北埔') 
    {
        if (sc2.length!=1) {
            sc2.innerHTML='<option>請選擇路線</option>'
        }
        for (let i = 0; i < a0.length; i++) 
        {
            sc2.innerHTML+='<option>'+a0[i]+'</option>'
        }
    }
    else if (sc1.value=='新竹市') 
    {
        if (sc2.length!=1) {
            sc2.innerHTML='<option>請選擇路線</option>'
        }
        for (let i = 0; i < a1.length; i++) 
        {
            sc2.innerHTML+='<option>'+a1[i]+'</option>'
        }
    }
    else if (sc1.value=='新竹、雙溪竹師') 
    {
        if (sc2.length!=1) {
            sc2.innerHTML='<option>請選擇路線</option>'
        }
        for (let i = 0; i < a1.length; i++) 
        {
            sc2.innerHTML+='<option>'+a1[i]+'</option>'
        }
    }
    else if (sc1.value=='竹北') 
    {
        if (sc2.length!=1) {
            sc2.innerHTML='<option>請選擇路線</option>'
        }
        for (let i = 0; i < a2.length; i++) 
        {
            sc2.innerHTML+='<option>'+a2[i]+'</option>'
        }
    }
    else if (sc1.value=='關西、新埔') 
    {
        if (sc2.length!=1) {
            sc2.innerHTML='<option>請選擇路線</option>'
        }
        for (let i = 0; i < a3.length; i++) 
        {
            sc2.innerHTML+='<option>'+a3[i]+'</option>'
        }
    }
    else if (sc1.value=='新豐') 
    {
        if (sc2.length!=1) {
            sc2.innerHTML='<option>請選擇路線</option>'
        }
        for (let i = 0; i < a4.length; i++) 
        {
            sc2.innerHTML+='<option>'+a4[i]+'</option>'
        }
    }
    else if (sc1.value=='湖口、工業區、仰德路口') 
    {
        if (sc2.length!=1) {
            sc2.innerHTML='<option>請選擇路線</option>'
        }
        for (let i = 0; i < a5.length; i++) 
        {
            sc2.innerHTML+='<option>'+a5[i]+'</option>'
        }
    }
    else
    {
        sc2.innerHTML='<option>請選擇路線</option>'
    }
}
//地圖本體
var location_0 = [24.83840105447053, 121.0037989629379]
var location_1 = [25.035355944918575, 121.56444359244189]
var map = L.map('map').setView(location_1,8);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom:20,
    detectRetina:true
}).addTo(map)