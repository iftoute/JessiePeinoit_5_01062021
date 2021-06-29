let contact = 
{
    'firstName': 'string',
    'lastName': 'string',
    'address': 'string',
    'city': 'string',
    'email': 'string',
};

let products = [];

//on récupère les éléments contenus dans le panier
let basketContent = JSON.parse(localStorage.getItem('basket'));
//console.log('basketContent:',JSON.parse(basketContent));
//si le panier est vide
if(basketContent === null){
    let emptyBasket = document.getElementById('eltPanier');
    emptyBasket.insertAdjacentHTML('beforeend', `<div class="col-12">
                                                    <h3 class="text-center my-5">Votre panier est vide</h3>
                                                </div>
                                                `)
//si le panier est n'est pas vide, afficher tous les produits du localStorage
}else {
    var total = 0;
    for(let cameraId of basketContent){
        let url = "http://localhost:3000/api/cameras/" + cameraId;
        fetch (url)
        .then(function (response) {
            if (response.ok) {
                return response.json()
            } else {
                console.log("Problème de connexion au serveur")
            }
        })
        .then(camera => {
            let eltBasket = document.getElementById('eltPanier');
            eltBasket.insertAdjacentHTML('beforeend',  ` <div class="eltFromBasket">
                                                            <div class="row text-center">
                                                                <img class="imageCamera col-3 mx-auto shadow-lg mb-3 px-0" src="${camera.imageUrl}" width="100" height="100" alt="image camera">
                                                            </div>
                                                            <div class="row text-center">
                                                                <h4 class="nameCamera my-1">${camera.name}</h4>
                                                                <p id="price" class="mb-5">${(camera.price/100).toFixed(2)}€</p>
                                                            </div>
                                                         </div>
                                                            `)
                total += camera.price/100;
                let totalContent = document.getElementById('total');
                totalContent.innerHTML = "Total de la commande " + total.toFixed(2) + " €";

        
        });
    
}
};
console.log('commande');


// Soumission du formulaire
// Fonction appelée à la soummission du formulaire
let submit = document.getElementById('btnOrder');
submit.addEventListener("submit", function (e) {
    e.preventDefault();
    contact.lastName = lastName.value;
    contact.firstName = firstName.value;
    contact.address = address.value;
    contact.city = city.value;
    contact.email = email.value;
    addProductArray()
    postOrder()

});

// Ajout de chaque élément du panier dans l'array "products" qui va être envoyé à l'API
function addProductArray() {
    for (let element of basketContent) {
        if (element.quantite > 0) {
            for (let i = element.quantite; i > 0; i--) {
                products.push(element._id)
            }
        }
    }
}

// Envoi le formulaire et les produit à l'API, puis elle va retourner l'id de commande
function postOrder() {
    fetch('http://localhost:3000/api/cameras/order', {
        method: "POST",
        body: JSON.stringify(commande),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(json => {
            localStorage.setItem("idOrder", json.orderId);
            localStorage.setItem("PriceOrder", total);

            window.location.href = "http://127.0.0.1:5500/html/confirmation.html";

        })
        .catch(err => alert('Request Failed', err));
}