//console.log(localStorage.getItem('id'))
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
        product.insertAdjacentHTML('beforeend', `   <div class="col-12 col-md-6">
                                                        <img class="imageCamera shadow mb-3" src="${camera.imageUrl}" width="100%" height="400" alt="image camera">
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <h2 class= "nameCamera my-4">${camera.name}</h2>
                                                        <p id="descriptionCamera" class="col text-justify">${camera.description}</p>
                                                        <p class="priceCamera fs-4 fw-bold">${(camera.price / 100).toFixed(2)}€</p>
                                                        <form class="form-group" id="form">
                                                            <label for="selectLens" class="col-4 my-3">Objectif</label>
                                                            <select name="productLens" class="col-7" id="selectLens"></select>
                                                            <button type="submit" id="addBasket" class="btn bg-dark bg-gradient text-white mt-5" onclick="addToBasket('${camera._id}')">Ajouter au panier</button>
                                                        </form>
                                                    </div>
                                                    `
        );
        //console.log(camera);

        for (let lens of camera.lenses) {
            let selector = document.getElementById("selectLens");
            selector.insertAdjacentHTML('beforeend', `<option>${lens}</option>`)
        };
    })
//manque un .catch
//});

//VERIFICATION DU PANIER
function checkBasket() {
    let basket = localStorage.getItem('basket');
    console.log(basket);
    if (basket != null) {
        return JSON.parse(basket);
    } else {
        return [];
    }
};
//console.log(localStorage);

//AJOUT D'ELEMENT AU PANIER
function addToBasket(product){
    let basket = checkBasket();
    console.log(JSON.stringify(product));
    basket.push(product);
    console.log(product);
    saveBasket(basket);
}

function saveBasket(basket){
    localStorage.setItem('basket',JSON.stringify(basket));
}

//TEST GESTION DES QUANTITES
let app = document.getElementById('addBasket');

/*for(let [i]; i < product.length; i++){
    app[i].addEventlistener('click', () => {
    console.log('ok')  
    })
}*///ne fonctionne pas

function number(){
    let productNumber = localStorage.getItem('number');
    number = parseInt(number);
    if(productNumber){
        localStorage.setItem('number', productNumber + 1);
    } else {
        localStorage.setItem('number', 1);
    }
}
