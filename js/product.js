//
//console.log(localStorage.getItem('id'))
//var url = "http://localhost:3000/api/cameras/"
//console.log(url)
var id = localStorage.id;

var url = "http://localhost:3000/api/cameras/" + localStorage.id;
//console.log(url)

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
        .then(cameras  => {
            let product = document.getElementById('product');
            // Insertion d'élements HTML pour l'article sélectionné
            product.insertAdjacentHTML('beforeend', ` <div class="col-6">
                                                        <img class="imageCamera shadow mb-3" src="${camera.imageUrl}" width="100%" height="400" alt="image camera">
                                                    </div>
                                                    <div class="col-6">
                                                        <h2 class= "nameCamera my-4">${camera.name}</h2>
                                                        <p id="descriptionCamera" class="col text-justify">${camera.description}</p>
                                                        <p class="priceCamera fs-4 fw-bold">${(camera.price / 100).toFixed(2)}€</p>
                                                        <form class="form-group" id="form">
                                                            <label for="selectLens" class="col-4 my-3">Objectif</label>
                                                            <select name="productLens" class="col-7" id="selectLens"></select>
                                                            <label for="quantité" class="col-4 mb-5">Quantité</label>
                                                            <input type="number" name="howmuch" step="1" class="col-1 text-center" id="quantité" min="1" value="1">
                                                            <button type="button" class="btn bg-dark bg-gradient text-white" onclick="addPanier('${camera._id}')">Ajouter au panier</button>
                                                        </form>
                                                    </div>
                                                    `
            );
            for (let lens of camera.lenses) {
                let container = document.getElementById("selectLens");
                container.insertAdjacentHTML('beforeend', `<option>${lens}</option>
                `)};
            })
            //console.log(id)
            //manque un .catch
        //});