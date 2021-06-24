let contact = 
{
    'firstName': 'string',
    'lastName': 'string',
    'address': 'string',
    'city': 'string',
    'email': 'string',
};
let total = 0;

//on récupère les éléments contenus dans le panier
let basketContent = JSON.parse(localStorage.getItem('basket'));
//console.log(basketContent);

//si le panier est vide
if(basketContent === null){
    let emptyBasket = document.getElementById('eltPanier');
    emptyBasket.insertAdjacentHTML('beforeend', `<div class="col-6">
                                                    <h3 class="text-center my-5">Votre panier est vide</h3>
                                                </div>
                                                `)
//si le panier est n'est pas vide, afficher tous les produits du localStorage
}else {
    for(let camera of basketContent){
    let eltBasket = document.getElementById('eltPanier');
    //VOIR COMMENT AFFICHER LES ELEMENTS DU PRODUIT GRACE A SON ID
    eltBasket.insertAdjacentHTML('beforeend',  ` <div class="col-6">
                                                        <img class="imageCamera shadow mb-3" src="${camera.imageUrl}" width="100" height="100" alt="image camera">
                                                    </div>
                                                    <div class="col-6">
                                                        <h3 class= "nameCamera my-4">${camera.name}</h3>
                                                        <input type="number" id="${camera._id}" min="0" value="${camera.quantite}" onchange="changePrice(id)">
                                                        <p id="total${camera._id}">${(camera.price * camera.quantite / 100).toFixed(2)}€</p>
                                                        <button id="${camera._id}" onclick="deleteProduct(id)">X</button>
                                                    </div>
                                                    `)
        total += (camera.price * camera.quantite / 100);
        console.log(total);
    }
};



