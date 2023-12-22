$(window).ready(function () {
  var school = [24.838298538785217, 121.00369361036967]
  var map = L.map('map').setView(school,18);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '義民高中校車路線查詢器',
    maxZoom:19
  }).addTo(map)
  var markersLayer = L.layerGroup().addTo(map);
$.ajax
({
    url: "json/main.json",
    success: function(data) 
    {
    for (let i = 0; i < data.Classification.length; i++) 
    {
      $("#sc1").append("<option>"+data.Classification[i]+"</option>");
    }
    $("#sc1").change(function () 
    {
      map.setView(school,18)
      let sc2 = $("#sc2").children()
      let sc1_v = $("#sc1").val()
      if(sc2.length!=1) 
      {
        $("#sc2").empty();
        $("#sc2").html('<option></option>')
      }
      if (sc1_v) 
      {
        for (let i = 0; i <data.routename[sc1_v].length; i++) {
          $('#sc2').append("<option>"+data.routename[sc1_v][i]+"</option>");
        }
      }
      else 
      {
        $("#sc2").empty();
        $("#sc2").html('<option></option>');
      }
    })
    $("#sc2").change(function () 
    {
        markersLayer.clearLayers()
        let sc1_v = $("#sc1").val()
        let sc2_v = $("#sc2").val()
        if (sc2_v)
        {
          map.setView(school)
          let a = []
          for (let i = 0; i < data.coordinate[sc1_v][sc2_v].length; i++) 
          {
              a[i] = data.coordinate[sc1_v][sc2_v][i]
          }
          console.log('a:',[a[0][1],a[0][2]],a[0][0])
          map.setView([a[0][1],a[0][2]],a[0][0])
          a.splice(0,1)   
          const popups = []
          const markers = []
          
          for (let i = 0; i < a.length; i++) 
          {
            for (let j = 0; j < 1; j++) 
            {
              const latLng = [a[i][j + 1], a[i][j + 2]];   
              const marker = L.marker(latLng,{
                icon:L.icon({
                  iconUrl: 'bus_2_fill.png',
                  iconSize: [50 , 50],
                }),
              });
              const popup = L.popup({
                  // closeOnClick: false,
                  // autoClose: false,
                  // closeButton : false
                })
                .setLatLng(latLng)
                .setContent(a[i][0])
              marker.bindPopup(popup)
              popups.push(popup)
              markers.push(marker)
              // popup.openOn(map)
            }
          }
          // L.layerGroup(popups).addTo(markersLayer)
          L.layerGroup(markers).addTo(markersLayer)
        }
        else
        {
          map.setView(school,18)
        }
    });
}
});
});
