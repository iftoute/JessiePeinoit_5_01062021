// Variable qui va stocker les éléments contenus dans le panier
const basketContent = JSON.parse(localStorage.getItem('basket'));

// création de la variable qui va stocker le total du panier
let total = 0;

// si le panier est vide
if (basketContent === null) {
  const emptyBasket = document.getElementById('eltPanier');
  emptyBasket.insertAdjacentHTML('beforeend', `<div class="col-12">
                                                    <h3 class="text-center my-5">Votre panier est vide</h3>
                                                </div>`);

// si le panier est n'est pas vide, afficher tous les produits du localStorage
} else {
  for (let cameraId of basketContent) {
    const url = `http://localhost:3000/api/cameras/${cameraId}`;
    // API Fetch pour récupérer les produits sélectionnés par l'utilisateur
    fetch(url)
      .then((response) => response.json())
      .then(camera => {
        const eltBasket = document.getElementById('eltPanier');
        // Insertion des éléments html pour les articles contenus dans le panier
        eltBasket.insertAdjacentHTML('beforeend', `<div class="eltFromBasket">
                                                      <div class="row text-center">
                                                        <img class="imageCamera col-3 mx-auto shadow-lg mb-3 px-0" src="${camera.imageUrl}" width="100" height="100" alt="image camera">
                                                      </div>
                                                      <div class="row text-center">
                                                        <h4 class="nameCamera my-1">${camera.name}</h4>
                                                        <p id="price" class="mb-5">${(camera.price / 100).toFixed(2)}€</p>
                                                      </div>
                                                    </div>`);
        // calcul du total
        total += camera.price / 100;
        const totalContent = document.getElementById('total');
        totalContent.innerHTML = `Total de la commande : ${total.toFixed(2)} €`;

        // Ajout du total au localStorage
        localStorage.setItem('totalOrder', total);
      })
      .catch((error) => alert(`Erreur : ${error}`));
  }

  // Stockage des produits du panier dans la variable products attendue par l'API
  const products = basketContent;

  // Création de la class concernant les informations du formulaire
  class FormContact {
    constructor(lastName, firstName, email, address, city) {
      this.lastName = lastName;
      this.firstName = firstName;
      this.email = email;
      this.address = address;
      this.city = city;
    }
  }

  // Ajout des informations du formulaire à la variable contact
  const contact = new FormContact(lastName, firstName, email, address, city);

  // Fonction qui vérifié la validité des éléments du formulaire et envoie la commande à l'API
  function submitOrder() {
    for (let input of document.querySelectorAll('#form > input:not([type="submit"])')) { 
      input.reportValidity();
    }
  }

  // Création de la variable qui va stocker les éléments de la commande (contact + products)
  const order = {
    contact,
    products,
  };

  // fonction POST de la commande à l'API
function sendOrder () {
    const url = 'http://localhost:3000/api/cameras/order';
    const options = {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem('orderId', json.orderId);
        // redirection vers la page de confirmation de commande
        window.location.href = 'http://127.0.0.1:5500/html/confirmation.html';
      })
      .catch((error) => alert(`Erreur : ${error}`));
  }

  // Fonction appelée à la soummission du formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault();
    contact.lastName = lastName.value;
    contact.firstName = firstName.value;
    contact.address = address.value;
    contact.city = city.value;
    contact.email = email.value;
    submitOrder();
    sendOrder();
  });
}
