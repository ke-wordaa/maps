import Map from './ol/Map.js';
import OSM from './ol/source/OSM.js';
import TileLayer from './ol/layer/Tile.js';
import View from './ol/View.js';
import * as proj from './ol/proj.js'
var sc1_1 = document.getElementById('sc1')
var ol = document.getElementById('o1')
var lat =25.033671
var long = 121.564427
var map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center:proj.fromLonLat([long,lat]),
    zoom: 10,
  }),
});
var h1 = document.getElementById('h12')
h1.innerText=""
ol.innerText="請選擇校車路線"
function link (long_in,lat_in,zoom_i){
  var long_o = long_in 
  var lat_o = lat_in
  var zoom_o = zoom_i
  map.getView().setCenter(proj.fromLonLat([long_o,lat_o]))
  map.getView().setZoom(zoom_o)
  map.render()
}
sc1_1.onchange = function(){
  let sc1 = document.getElementById('sc1').value
  if (sc1=='0') {
       link(121.564427,25.033671,10)
    }
    else{
      var zoom= 18.5
      if (sc1=='義民中學') {
          var lat_s = 24.83916811708179
          var long_s = 121.0029220390707
          link(long_s,lat_s,zoom)
      }
    }
}
