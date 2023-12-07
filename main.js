var sc1 = document.getElementById('sc1')
var sc2 = document.getElementById('sc2')

async function myFunction() {
    const response = await fetch("main.json")
    const data = await response.json()
    let routes = data.routename      
    let classa = data.Classification    
    for (let  i = 0; i < classa.length; i++) 
    {
        sc1.innerHTML +="<option>"+classa[i]+"</option>"
    }    
    sc1.addEventListener('change',()=>{
        if (sc2.length!=1) {
            sc2.innerHTML = '<option></option>'
        }
        for (let i = 0; i < routes.length; i++) 
        {
            for (let j = 0; j < routes[i][sc1.value].length; j++) {
                sc2.innerHTML +="<option>"+ routes[i][sc1.value][j]+"</option>"
            }
       }
   })
}

  