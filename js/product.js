// Variable qui récupère l'Id séléctionnée par l'utilisateur dans la localStorage
const id = localStorage.id;

// Variable pour l'URL de la route GET/:_id
const url = "http://localhost:3000/api/cameras/" + localStorage.id;

// API Fetch pour récupérer les données de l'ID sélectionné par l'utilisateur
fetch(url)
  .then((response) => response.json())
  .then((camera) => {
    const product = document.getElementById('product');

    // Insertion d'élements HTML pour l'article sélectionné
    product.insertAdjacentHTML('beforeend', `   <div class="col-12 col-md-6">
                                                    <img class="imageCamera shadow mb-3" src="${camera.imageUrl}" width="100%" height="400" alt="image camera">
                                                    </div>
                                                <div class="col-12 col-md-6" id="cameraIdContent">
                                                     <h2 class= "nameCamera my-4">${camera.name}</h2>
                                                    <p id="descriptionCamera" class="col text-justify">${camera.description}</p>
                                                    <p class="priceCamera fs-4 fw-bold">${(camera.price / 100).toFixed(2)}€</p>
                                                    <form class="form-group" id="form">
                                                        <label for="selectLens" class="col-4 my-3">Objectif</label>
                                                        <select name="productLens" class="col-7" id="selectLens"></select>
                                                        <button type="submit" id="addBasket" onclick="addToBasket('${camera._id}')" class="btn bg-dark bg-gradient mx-auto text-white mt-5" >Ajouter au panier</button>
                                                    </form>
                                                </div>
                                                `);

    // Boucle de récupération des options du produit séléctionné
    for (let lens of camera.lenses) {
      const selector = document.getElementById("selectLens");
      selector.insertAdjacentHTML('beforeend', `<option>${lens}</option>`);
    }
  })
  .catch((error) => alert(`Erreur : ${error}`));

// Vérification du panier
function checkBasket() {
  const basket = localStorage.getItem('basket');
  if (basket != null) {
    return JSON.parse(basket);
  } else {
    return [];
  }
}

// Stockage du produit sélectionné dans le localStorage
function saveBasket(basket) {
  localStorage.setItem('basket', JSON.stringify(basket));
}

// Ajout d'un élément au panier
function addToBasket(product){
  const basket = checkBasket();
  basket.push(product);
  saveBasket(basket);
}
