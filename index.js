fetch ("http://localhost:3000/api/cameras")
        .then(function(response){
            return response.json()
        })
        .then(cameras => {
            for(camera of cameras){
            let elt = document.getElementById('articles');
            elt.insertAdjacentHTML('beforeend', `<a href="produit.html" class="col col-sm-12 col-md-6 col-lg-4 mb-4">
                                                    <div id= "article" class="text-center">
                                                        <img class="imageCamera shadow mb-3" src="${camera.imageUrl}" width="100%" height="200" alt="image camera">
                                                        <h3 class= "nameCamera">${camera.name}</h3>
                                                        <p id="descriptionCamera" class="col 4">${camera.description}</p>
                                                        <button type="button" class="btn bg-dark bg-gradient text-white" onclick="showProduct('${camera._id}')">En savoir plus...</button>
                                                    </div>
                                                </a>
                                                `
            );
            }
        });