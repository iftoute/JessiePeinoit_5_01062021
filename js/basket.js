//on récupère les éléments contenus dans le panier
let basketContent = JSON.parse(localStorage.getItem('basket'));
//console.log('basketContent:',JSON.parse(basketContent));
//si le panier est vide
if(basketContent === null){
    let emptyBasket = document.getElementById('eltPanier');
    emptyBasket.insertAdjacentHTML('beforeend', `<div class="col-12">
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
            eltBasket.insertAdjacentHTML('beforeend',  ` <div class="eltFromBasket">
                                                            <div class="row text-center">
                                                                <img class="imageCamera col-3 mx-auto shadow-lg mb-3 px-0" src="${camera.imageUrl}" width="100" height="100" alt="image camera">
                                                            </div>
                                                            <div class="row text-center">
                                                                <h4 class="nameCamera my-1">${camera.name}</h4>
                                                                <p id="price" class="mb-5">${(camera.price/100).toFixed(2)}€</p>
                                                            </div>
                                                         </div>
                                                            `)
                total += camera.price/100;
                let totalContent = document.getElementById('total');
                totalContent.innerHTML = "Total de la commande " + total.toFixed(2) + " €";

        
        });
    
}
};

// ENVOYER LA REQUETE DE COMMANDE //
function sendOrder(){
    console.log('send order');
    const name = document.getElementById("lastname").value;
    const firstname = document.getElementById("firstname").value;
    const mail = document.getElementById("email").value;
    const adress = document.getElementById("address").value;
    const city = document.getElementById("city").value;  

    const formInformation = new FormContent (name, firstname, mail, adress, city);
    console.log(formInformation);
    let idOrder = [];
    for (let content of basketContent){
        idOrder.push(content.id);
    }
    const command = new OrderInfo(formInformation, idOrder);

    post("http://localhost:3000/api/cameras/order", command) 

    .then( function(response){
        console.log(response);
        localStorage.setItem("basketContent", JSON.stringify([])); 
        localStorage.setItem("orderConfirmation", response.orderId);
        //window.location.href = "http://127.0.0.1:5500/html/confirmation.html"; // on va à la page de confirmation
    }).catch(function(err){
        console.log(err);
            alert("serveur HS");
    });
}

