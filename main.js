var location_0 = [24.83840105447053, 121.0037989629379]
var location_1 = [25.035355944918575, 121.56444359244189]
var map = L.map('map').setView(location_1,8);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom:20,
    detectRetina:true
}).addTo(map)