
      var tbody = document.getElementsByTagName("tbody")[0];
      var DATA;
        $.ajax({
            url:"produits.json",
            success:function(data){
            DATA = data;
            console.log(data);
            fill(data);
            }
        })
        function fill(dt){
            for(var i=0; i< dt.length; i++){
                tbody.innerHTML += `<tr> 
                    <td>${dt[i].Id}</td>
                    <td>${dt[i].Désignation}</td>
                    <td>${dt[i].Prix}</td>
                    <td>${dt[i].Catégorie}</td>
                    <td>${dt[i].Disponibilité}</td>
                    <td>${dt[i].Fournisseur}</td>
                    </tr>`
            }
        }

        var inp = document.getElementById("inp");
        $("#inp").on("keyup",function(){
          var list = [];
          DATA.forEach(element =>{
            if(element["Désignation"].includes(inp.value)){
              list.push(element);
            }
          })
            $("tbody").html("");
            fill(list);
        })
