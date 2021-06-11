// API Fetch pour récupérer les données
fetch ("http://localhost:3000/api/cameras")
        .then(function(response){
            if(response.ok) {
            return response.json()
            }else {
                console.log("Problème de connexion au serveur")
            }
        })
        // Promise pour les éléments reçus par le serveur
        .then(cameras => {
            for(camera of cameras){
            let elt = document.getElementById('articles');
            // Insertion d'élements HTML pour les articles
            elt.insertAdjacentHTML('beforeend', `<a href="produit.html" class="col col-sm-12 col-md-6 col-lg-4 mb-4">
                                                    <div id= "article" class="text-center">
                                                        <img class="imageCamera shadow mb-3" src="${camera.imageUrl}" width="100%" height="200" alt="image camera">
                                                        <h3 class= "nameCamera">${camera.name}</h3>
                                                        <p id="descriptionCamera" class="col 4">${camera.description}</p>
                                                        <button type="button" class="btn bg-dark bg-gradient text-white" onclick="localId('${camera._id}')" href="#">En savoir plus...</button>
                                                        
                                                    </div>
                                                </a>
                                                `
            );
            }
            //manque un .catch
        });

// Fonction de stockage de l'ID du produit selectionné par l'utilisateur dans le localStorage 
    function localId(id) {
    localStorage.setItem('id', id );
    }
        