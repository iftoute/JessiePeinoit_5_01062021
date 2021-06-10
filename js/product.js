// API Fetch pour récupérer les données de l'ID sélectionné par l'utilisateur
fetch ("http://localhost:3000/api/${id}")
        .then(function(response){
            if(response.ok) {
            return response.json()
            }else {
                console.log("Problème de connexion au serveur")
            }
        })
        // Promise pour les éléments reçus par le serveur de l'objet sélectionné
        .then(camera => {
            let product = document.getElementById('product');
            // Insertion d'élements HTML pour l'article sélectionné
            elt.insertAdjacentHTML('beforeend', `<a href="produit.html" class="col col-sm-12 col-md-6 col-lg-4 mb-4">
                                                    <div id= "article" class="text-center">
                                                        <img class="imageCamera shadow mb-3" src="${camera.imageUrl}" width="100%" height="200" alt="image camera">
                                                        <h3 class= "nameCamera">${camera.name}</h3>
                                                        <p id="descriptionCamera" class="col 4">${camera.description}</p>
                                                        <p class="priceCamera">${(camera.price / 100).toFixed(2)}€</p>
                                                        <div class="dropdown">
                                                        <button class="bnt btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Objectifs</button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a class="dropdown-item" href="#">${camera.lenses}</a>
                                                        </div>
                                                        <button type="button" class="btn btn-primary" onclick="addPanier('${camera._id}')">Ajouter au panier</button>
                                                    </div>
                                                </a>
                                                `
            );
            }
            //manque un .catch
        });