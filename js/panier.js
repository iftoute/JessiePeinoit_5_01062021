let contact = 
{
    'firstName': 'string',
    'lastName': 'string',
    'address': 'string',
    'city': 'string',
    'email': 'string',
};
let total = 0;

//INITIALISATION DU PANIER
function initPanier(){
    let panier = localStorage.getItem('panier');
    if(panier != null){
        return JSON.parse(panier);
    }else{
        return [];
    }
};

//FONCTION AJOUTER AU PANIER / GESTION DES QUANTITES DE PRODUITS
function addPanier(product){
    let panier = initPanier();
    let product = panier.find(product => product.id == id); //on récupère le produit
    if(product > 0){   // si le produit est déjà présent dans le panier, ajouter 1 à la quantité
        product.quantité +=
    }else{
        //sinon créer un nouveau produit avec une quantité à 1
    }
    panier.push(product);
    savePanier(panier);
}


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




//VERIFICATION DU FORMULAIRE
document.querySelector('#form > [type=submit]').addEventListener('click', function(event){  //ON AJOUTE UN EVENEMENT SUR LE SUBMIT DU FORMULAIRE
    for(let input of document.querySelectorAll('#form > input:not([type="submit"])')){ //ON VERIFIE TOUS LES INPUTS SAUF LE SUBMIT
        input.reportValidity(); //VERIFIE LA VALIDITE DES CHAMPS RENSEIGNES PAR L'UTILISATEUR ET AFFICHE UN MESSAGE D'ERREUR SI BESOIN
    }
});