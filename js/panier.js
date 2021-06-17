let contact = 
{
    'firstName': 'string',
    'lastName': 'string',
    'address': 'string',
    'city': 'string',
    'email': 'string',
};
let total = 0;




//FONCTION AFFICHER LE PANIER
function affichePanier() {
    for (let element of storagePanier) {
        if (element.quantite > 0) {
            let contentPanier = document.getElementById("eltPanier");
            contentPanier.insertAdjacentHTML('beforeend', `<div class="col-6">
                                                            <img class="imageCamera shadow mb-3" src="${camera.imageUrl}" width="100" height="100" alt="image camera">
                                                        </div>
                                                        <div class="col-6">
                                                            <h3 class= "nameCamera my-4">${camera.name}</h3>
                                                            <input type="number" id="${camera._id}" min="0" value="${camera.quantite}" onchange="changePrice(id)">
                                                            <p id="total${camera._id}">${(camera.price * camera.quantite / 100).toFixed(2)}€</p>
                                                            <button id="${camera._id}" onclick="deleteProduct(id)">X</button>
                                                        </div>
                                                                `)

            //total += (camera.price * camera.quantite / 100);
        }
    }
};
/////////////////////////////////////////////////////////////////
function savePanier(panier){
    localStorage.setItem('panier', JSON.stringify(panier));
}
//////////////////////////////////////////////////////////////////
function removePanier(product){

}



