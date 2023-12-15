$(window).ready(function () {
    var school = [24.838298538785217, 121.00369361036967]
    var map = L.map('map').setView(school,18);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
            attribution: '義民高中校車路線查詢器'
    }).addTo(map);
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
            let sc2 = $("#sc2").children()
            let sc1_v = $("#sc1").val();
            if(sc2.length!=1)
            {
                $("#sc2").empty();;
                $("#sc2").html('<option></option>');;
            }
            if (sc1_v) 
            {  
                for (let i = 0;i <data.routename[sc1_v].length; i++) 
                {
                    $('#sc2').append("<option>"+data.routename[sc1_v][i]+"</option>");
                }
            }
            else
            {
                $("#sc2").empty();;
                $("#sc2").html('<option></option>');;
            }
        })
        $("#sc2").change(function () { 
            let a =""
            let sc1_v = $("#sc1").val();
            let sc2_v = $("#sc2").val();
            for (let i = 0; i < data.coordinate[sc1_v][sc2_v].length; i++) {
                a += data.coordinate[sc1_v][sc2_v][i][0]+"\n"
            }     
            alert(a)            
        });
    }})
})
