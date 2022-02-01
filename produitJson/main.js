
      var tbody = document.getElementsByTagName("tbody")[0];
      var DATA;
//Créer un fichier produits.json qui contient une dizaine de produits
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
// Barre de recherche permet de filtrer les données selon la valeur saisie par l'utilisateur
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
//L'option de tri ascendant et descendant sur toutes les colonnes.
        $(function() {
          $("#table").on('click', function() {
              var rows = $("#table tbody  tr").get();
              rows.sort(sortTable);
              $.each(rows, function(index, row) {
                  $("#table ").children("tbody").append(row);
              });
              if (ascending) {
                  ascending = false;
              } else {
                  ascending = true;
              }
          });
      });
      
      var ascending = false;
      
      function sortTable(a, b) {
          var A = parseInt($(a).children('td').eq(0).text(), 10);
          var B = parseInt($(b).children('td').eq(0).text(), 10);
      
      
          if (ascending) {
              if (A > B) return 1;
              if (A < B) return -1;
          } else {
              if (A > B) return -1;
              if (A < B) return 1;
          }
          return 0;
      }
