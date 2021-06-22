//
console.log(localStorage.getItem('id'))
var id = localStorage.id;

var url = "http://localhost:3000/api/cameras/" + localStorage.id;
//console.log(url)

// API Fetch pour récupérer les données de l'ID sélectionné par l'utilisateur
fetch(url)
    .then(function (response) {
        if (response.ok) {
            return response.json()
        } else {
            console.log("Problème de connexion au serveur")
        }
    })
    // Promise pour les éléments reçus par le serveur de l'objet sélectionné
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
                                                            <label for="quantité" class="col-4 mb-5">Quantité</label>
                                                            <input type="number" name="howmuch" step="1" class="col-1 text-center" id="quantité" min="1" value="1">
                                                            <button type="submit" class="btn bg-dark bg-gradient text-white" onclick="addPanier('${camera._id}')" href="#">Ajouter au panier</button>
                                                        </form>
                                                    </div>
                                                    `
        );
        console.log(camera);

        for (let lens of camera.lenses) {
            let selector = document.getElementById("selectLens");
            selector.insertAdjacentHTML('beforeend', `<option>${lens}</option>`)
        };
    })
//manque un .catch
//});


//INITIALISATION DU PANIER
function initPanier() {
    let panier = localStorage.getItem('panier');
    if (panier != null) {
        return JSON.parse(panier);
    } else {
        return [];
    }
};

//FONCTION AJOUTER AU PANIER / GESTION DES QUANTITES DE PRODUITS
function addPanier(item) {
    console.log(item, 'addpanier');
    localStorage.setItem('article', item._id)
    let panier = initPanier();
    let product = panier.find(item => item.id == id); //on récupère le produit
    if (product > 0) {   // si le produit est déjà présent dans le panier, ajouter 1 à la quantité
        //product.quantité += 
    } else {
        //sinon créer un nouveau produit avec une quantité à 1
    }
    panier.push(product);
    savePanier(panier);
}
