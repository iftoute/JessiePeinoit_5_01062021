// Récupération des données de l'API avec la requête GET
fetch('http://localhost:3000/api/cameras')
  .then((response) => response.json())
  .then((cameras) => {
    for (camera of cameras){
      const elt = document.getElementById('articles');
      // Insertion d'élements HTML pour les articles renvoyés par l'API
      elt.insertAdjacentHTML('beforeend', `<div class="col-12 col-md-6 col-xl-4 text-center mb-5">
                                             <div id= "article" class="">
                                                <img class="imageCamera shadow mb-3" src="${camera.imageUrl}" width="100%" height="200" alt="image camera">
                                                <h3 class= "nameCamera">${camera.name}</h3>
                                                <p class="priceCamera fs-7 fw-normal">${(camera.price / 100).toFixed(2)}€</p>
                                                <form method="get" action="../html/product.html"> 
                                                    <button type="submit" class="btn bg-dark bg-gradient text-white" onclick="localId('${camera._id}')" href="#">En savoir plus...</button>
                                                </form>
                                                </div>
                                                </div>`);
    }
  })
  .catch((error) => alert(`Erreur : ${error}`));


// Fonction de stockage de l'ID du produit selectionné par l'utilisateur dans le localStorage
function localId(id) {
  localStorage.setItem('id', id);
}
