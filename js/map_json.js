$(window).ready(function () {
  var school = [24.838298538785217, 121.00369361036967]
  var map = L.map('map').setView([51.505, -0.09],18);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '義民高中校車路線查詢器'
  }).addTo(map)
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
        let sc2 = $("#sc2").children();
        let sc1_v = $("#sc1").val();
        if(sc2.length!=1) 
        {
          $("#sc2").empty();
          $("#sc2").html('<option></option>');
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
    });
    $("#sc2").change(function () 
    {
        let a = [];
        let sc1_v = $("#sc1").val();
        let sc2_v = $("#sc2").val();
        if (sc2_v) {
            for (let i = 0; i < data.coordinate[sc1_v][sc2_v].length; i++) 
            {
                a[i] = data.coordinate[sc1_v][sc2_v][i];
            }
            map.setView([a[0][1],a[0][2]],a[0][0]);
            let markers = [];
            for (let i = 1; i < a.length; i++) 
            {
                for (let j = 1; j < a[i].length; j++) 
                {
                if (j==1) 
                {
                markers[i] = L.marker([a[i][j], a[i][j+1]]).addTo(map);
                }
                }
            }
            for (let i = 1; i < markers.length; i++) 
            {
                markers[i].bindPopup(a[i][0])
            }
        }
    });
}
});
});
