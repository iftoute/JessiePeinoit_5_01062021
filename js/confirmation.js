//Confirmation de la commade 
function addConfirmation(){
    const confirmationId = localStorage.getItem("orderConfirmation"); // récuperation de l'ID dans le local storage
    const totalPrice = localStorage.getItem("totalPriceConfirmationPage"); //récuperation du prix dans le local storage
    const messageConfirmation = document.getElementById('idOrder');
    const confirmationPrice = document.getElementById('totalOrder');
    messageConfirmation.innerHTML = "Nous vous remercions pour votre commande n° "+ confirmationId;
    confirmationPrice.innerHTML = "Prix total de votre commande: "+ totalPrice + "€";
}

addConfirmation();