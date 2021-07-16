// fonction de confirmation de la commade

function addConfirmation() {
  const confirmationId = localStorage.getItem('orderId');// récuperation de l'ID de la commande dans le local storage
  const totalPrice = localStorage.getItem('totalOrder');// récuperation du total du panier
  const messageConfirmation = document.getElementById('idOrder');
  const confirmationPrice = document.getElementById('totalOrder');
  messageConfirmation.innerHTML = `Nous vous remercions pour votre commande n° ${confirmationId}`;
  confirmationPrice.innerHTML = `Prix total de votre commande:  ${totalPrice} €`;
  localStorage.removeItem('basket');
}

addConfirmation();
