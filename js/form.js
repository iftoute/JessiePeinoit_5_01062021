
//VERIFICATION DU FORMULAIRE
document.querySelector('#form > [type=submit]').addEventListener('click', function(event){  //ON AJOUTE UN EVENEMENT SUR LE SUBMIT DU FORMULAIRE
    for(let input of document.querySelectorAll('#form > input:not([type="submit"])')){ //ON VERIFIE TOUS LES INPUTS SAUF LE SUBMIT
        input.reportValidity(); //VERIFIE LA VALIDITE DES CHAMPS RENSEIGNES PAR L'UTILISATEUR ET AFFICHE UN MESSAGE D'ERREUR SI BESOIN
    }
});