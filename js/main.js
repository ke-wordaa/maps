var school = [24.838298538785217, 121.00369361036967]
var map = L.map('map').setView(school,18);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '義民高中校車路線查詢器'
}).addTo(map);
