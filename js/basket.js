//on récupère les éléments contenus dans le panier
let basketContent = JSON.parse(localStorage.getItem('basket'));
//console.log('basketContent:',JSON.parse(basketContent));
//si le panier est vide
if(basketContent === null){
    let emptyBasket = document.getElementById('eltPanier');
    emptyBasket.insertAdjacentHTML('beforeend', `<div class="col-12">
                                                    <h3 class="text-center my-5">Votre panier est vide</h3>
                                                </div>
                                                `);
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
        })
        .catch(function(err){
            console.log(err);
        })
};



const contact = "";
const command = "";

//Fonction qui récupère tous le contenu du panier et le place dans le tableau
function getElementForm() {
    //On récupère les éléments du formulaire
const lastName = document.getElementById("lastName").value;
const firstName = document.getElementById("firstName").value;
const email = document.getElementById("email").value;
const address = document.getElementById("address").value;
const city = document.getElementById("city").value;
console.log('ok');

//On stocke dans une variable les éléménts du formulaire
class FormContact {
    constructor(lastName, firstName, email, address, city) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.address = address;
        this.city = city;
    }
};

const contact = new FormContact (lastName, firstName, email, address, city);

class OrderInfo {
    constructor(contact, products) {
        this.contact = contact;
        this.products = products;
    }
};

const command = new OrderInfo (contact, basketContent);

console.log(command);

}

//Variable contenant les informations de la commande à retourner à l'API

const response = "";

function sendOrder () {
    const url = 'http://localhost:3000/api/cameras/order';
    const options = {
            method: 'POST',
            body: command,
            headers: {
                //'Accept': 'application/json', 
                'Content-Type': 'application/json'    }
        }
    fetch(url, options)
        .then(res => res.json())
        .then(res => response = res)
        .catch(err => {
            console.error('Error: ', err);
        });
        console.log(response);
}
        

//Fonction qui vérifié la validité des éléments du formulaire et envoie la comm nde à l'API
function submitOrder() {
        for(let input of document.querySelectorAll('#form > input:not([type="submit"])')){ 
            input.reportValidity();
        }
        console.log('ok');

        getElementForm();
        sendOrder();
    }
}

