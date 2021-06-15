//
//console.log(localStorage.getItem('id'))
//var url = "http://localhost:3000/api/cameras/"
//console.log(url)
var id = localStorage.id;

var url = "http://localhost:3000/api/cameras/" + localStorage.id;
console.log(url)

// API Fetch pour récupérer les données de l'ID sélectionné par l'utilisateur
fetch (url)
        .then(function(response){
            if(response.ok) {
            return response.json()
            }else {
                console.log("Problème de connexion au serveur")
            }
        })
        // Promise pour les éléments reçus par le serveur de l'objet sélectionné
        .then(cameramais  => {
            let product = document.getElementById('product');
            // Insertion d'élements HTML pour l'article sélectionné
            product.insertAdjacentHTML('beforeend', `<a href="produit.html" class="col col-sm-12 col-md-6 col-lg-4 mb-4">
                                                    <div id= "article" class="text-center">
                                                        <img class="imageCamera shadow mb-3" src="${id.imageUrl}" width="100%" height="200" alt="image camera">
                                                        <h3 class= "nameCamera">${id.name}</h3>
                                                        <p id="descriptionCamera" class="col 4">${id.description}</p>
                                                        <p class="priceCamera">${(id.price / 100).toFixed(2)}€</p>
                                                        </a>`
            );
           
            })
            //console.log(id)
            //manque un .catch
        //});