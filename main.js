import Map from './ol/Map.js';
import OSM from './ol/source/OSM.js';
import TileLayer from './ol/layer/Tile.js';
import View from './ol/View.js';
import * as proj from './ol/proj.js'
var lat =25.033671
var long = 121.564427
var sc1 = document.getElementById('sc1')
var sc2 = document.getElementById('sc2')

sc2.innerHTML='<option value="0" id="o1"></option>' 
var sc1_V = sc1.value
var sc2_V = sc2.value
alert("非正式版\n增加功能:區域畫分下拉式選單")  

var ol = document.getElementById('o1')
var map = new Map
function view_a() 
{
  var h1 = document.getElementById('h12')
  sc1.style.visibility ='visible'
  h1.innerText = ""
  ol.innerText = "請選擇校車路線"
}

var map = new Map({
  target: 'map',
  layers:
  [
    new TileLayer
    ({
      source: new OSM(),
    }),
  ],
  view: new View
  ({
    center:proj.fromLonLat([long,lat]),
    zoom: 10,
  }),
});

view_a()
function link (long_in,lat_in,zoom_i){
  var long_o = long_in 
  var lat_o = lat_in
  var zoom_o = zoom_i
  map.getView().setCenter(proj.fromLonLat([long_o,lat_o]))
  map.getView().setZoom(zoom_o)
  map.render()
}
sc2.onchange = function()
{
  sc2_V=sc2.value
  if (sc2_V=='0')
  {
    link(long,lat,10)
  }
  else
  {
    var zoom= 19
    if (sc2_V=='義民中學')
    {
      var lat_s = 24.83871439290991
      var long_s =  121.00394288581761
      link(long_s,lat_s,zoom) 
    }
  }
}
sc1.onchange = function()
{
  sc1_V=sc1.value
  if (sc1_V == '0')
  { 
      link(long,lat,10)
      sc2.style.visibility = 'hidden'
      sc2.innerHTML = '<option value="0" id="o1">請選擇校車路線</option>'
  }
  else
    {
      if (sc1_V == '竹北')
      {
      sc2.style.visibility = 'visible'
      sc2.innerHTML += '<option value="義民中學">義民中學</option>'
    }
  }
}
