//variable de stockage de l'ID du produit séléctionné
var id = localStorage.id;

//variable de l'URL+ID
var url = "http://localhost:3000/api/cameras/" + localStorage.id;

//Requête Fetch pour récupérer les données du produit de l'ID sélectionné par l'utilisateur
fetch(url)
    .then(function (response) {
        if (response.ok) {
            return response.json()
        } else {
            console.log("Problème de connexion au serveur")
        }
    })
    // Promise pour les éléments reçus  de l'objet sélectionné
    .then(camera => {
        let product = document.getElementById('product');

        // Insertion d'élements HTML pour l'article sélectionné
        product.insertAdjacentHTML('beforeend', `   <div class="col-6">
                                                        <img class="imageCamera shadow mb-3" src="${camera.imageUrl}" width="100%" height="400" alt="image camera">
                                                    </div>
                                                    <div class="col-6">
                                                        <h2 class= "nameCamera my-4">${camera.name}</h2>
                                                        <p id="descriptionCamera" class="col text-justify">${camera.description}</p>
                                                        <p class="priceCamera fs-4 fw-bold">${(camera.price / 100).toFixed(2)}€</p>
                                                        <form class="form-group" id="form">
                                                            <label for="selectLens" class="col-4 my-3">Objectif</label>
                                                            <select name="productLens" class="col-7" id="selectLens"></select>
                                                            <label for="quantité" class="col-4 mb-5" value="1">Quantité</label>
                                                            <input type="number" name="howmuch" step="1" class="col-1 text-center" id="quantité" min="1" value="1">
                                                            <button type="submit" id="addBasket" class="btn bg-dark bg-gradient text-white" onclick="addToBasket('${camera._id}')">Ajouter au panier</button>
                                                        </form>
                                                    </div>
                                                    `);
        //Boucle de récupération des différents objectifs proposé pour chaque produit
        for (let lens of camera.lenses) {
            let selector = document.getElementById("selectLens");
            selector.insertAdjacentHTML('beforeend', `<option>${lens}</option>`)
        };
    })
    .catch(error => alert("Erreur : " + error));


//Fonction de vérification du panier
function checkBasket() {
    //Variable qui récupère les éléments du panier dans le localStorage
    let basket = localStorage.getItem('basket');
    console.log(basket);
    //Si le panier n'est pas vide, retourne l'objet sinon retourne un tableau vide
    if (basket != null) {
        return JSON.parse(basket);
    } else {
        return [];
    }
};

//fonction qui ajoute un élément au panier
function addToBasket(product){
    let basket = checkBasket();
    console.log(JSON.stringify(product));
    //Ajoute les éléments au panier dans le localStorage
    basket.push(product);
    console.log(product);
    saveBasket(basket);
}

//Fonction d'ajout des produits dans le localStorage
function saveBasket(basket){
    localStorage.setItem('basket',JSON.stringify(basket));
}

