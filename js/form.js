
//VERIFICATION DU FORMULAIRE
//ON AJOUTE UN EVENEMENT SUR LE SUBMIT DU FORMULAIRE
document.querySelector('#form > [type=submit]').addEventListener('click', function(event){  
    //ON VERIFIE TOUS LES INPUTS SAUF LE SUBMIT
    for(let input of document.querySelectorAll('#form > input:not([type="submit"])')){ 
        //VERIFIE LA VALIDITE DES CHAMPS RENSEIGNES PAR L'UTILISATEUR ET AFFICHE UN MESSAGE D'ERREUR SI BESOIN
        input.reportValidity(); 
    }
});