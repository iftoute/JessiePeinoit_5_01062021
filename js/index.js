
// Récupération des données de l'API
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
            elt.insertAdjacentHTML('beforeend', `<div class="col-12 col-md-6 col-xl-4 text-center mb-5">
                                                    <div id= "article" class="">
                                                        <img class="imageCamera shadow mb-3" src="${camera.imageUrl}" width="100%" height="200" alt="image camera">
                                                        <h3 class= "nameCamera">${camera.name}</h3>
                                                        <p class="priceCamera fs-7 fw-normal">${(camera.price / 100).toFixed(2)}€</p>
                                                        <form method="get" action="../html/product.html"> 
                                                        <button type="submit" class="btn bg-dark bg-gradient text-white" onclick="localId('${camera._id}')" href="#">En savoir plus...</button>
                                                        </form>
                                                        
                                                    </div>
                                                </div>
                                                `
            );
        };
    })
        

// Fonction de stockage de l'ID du produit selectionné par l'utilisateur dans le localStorage 
    function localId(id) {
    //localStorage.clear();
    localStorage.setItem('id', id);
    }
    