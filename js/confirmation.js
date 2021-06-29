// - DEFINITION DES VARIABLES -
let totalOrder = document.getElementById("totalOrder");
let idOrder = document.getElementById("idOrder");

let storageTotal = JSON.parse(localStorage.PriceOrder);
let storageidCommande = localStorage.idOfCommand;


// Affichage de la commande
function displayOrder() {
    total.textContent = `Total : ${storageTotal.toFixed(2)} €`;
    idCommande.textContent = `Numéro de commande : ${storageidCommande}`;
}

// - APPEL DES FONCTIONS -
//   *******************

displayCommand()
window.localStorage.clear();