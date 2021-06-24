let contact = 
{
    'firstName': 'string',
    'lastName': 'string',
    'address': 'string',
    'city': 'string',
    'email': 'string',
};

//on récupère les éléments contenus dans le panier
let basketContent = JSON.parse(localStorage.getItem('basket'));
console.log(basketContent);
//console.log('basketContent:',JSON.parse(basketContent));
//si le panier est vide
if(basketContent === null){
    let emptyBasket = document.getElementById('eltPanier');
    emptyBasket.insertAdjacentHTML('beforeend', `<div class="col-6">
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
            //VOIR COMMENT AFFICHER LES ELEMENTS DU PRODUIT GRACE A SON ID
            eltBasket.insertAdjacentHTML('beforeend',  ` <div class="col-6">
                                                                <img class="imageCamera shadow mb-3" src="${camera.imageUrl}" width="100" height="100" alt="image camera">
                                                            </div>
                                                            <div class="col-6">
                                                                <h3 class= "nameCamera my-4">${camera.name}</h3>
                                                                <p>${camera.quantite}</p>
                                                                <p id="price">${camera.price}€</p>
                                                                <button id="delete">X</button>
                                                            </div>
                                                            `)
                total += camera.price;
                console.log(total); 
                let totalContent = document.getElementById('total');
                totalContent.innerHTML = total + "€";

        
        });
    //console.log('camera :', JSON.parse(camera));
    
}
};



