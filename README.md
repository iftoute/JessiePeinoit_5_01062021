# Orinoco

Voici le projet 5 réalisé dans le cadre de mon parcours "Développeur Web" avec OpenClassrooms

Il s'agit de la création de la partie frontend d'un site e-commerce en Javascript en utilisant une API préalablement fournie [<a href="https://github.com/OpenClassrooms-Student-Center/JWDP5.git">API</a>].

Retrouvez les <a href="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P5/P5_Spe%CC%81cifications+fonctionnelles+Orinoco.pdf">spécifications fonctionnelles et techniques ici</a>

Il s'agit là d'un MVP, aucune réelle gestion des transaction n'est effectuée.

Aucune maquette n'est fournie.

## Technologies utilisées pour le projet
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>

## Prérequis

Vous aurez besoin d'avoir Node et npm installés localement sur votre machine

## Installation

1 - Clôner le repo back-end https://github.com/OpenClassrooms-Student-Center/JWDP5

2 - À partir du dossier du projet, exécutez npm install.

3 - Éxécuter ensuite le serveur avec la commande node server.

Le serveur doit s'exécuter sur localhost avec le port par défaut 3000.

## Architecture générale
L’application web est composée de 4 pages :
* une page de vue sous forme de liste, montrant tous les articles disponibles
à la vente ;
* une page “produit”, qui affiche de manière dynamique l'élément
sélectionné par l'utilisateur et lui permet de personnaliser le produit et de
l'ajouter à son panier ;
* une page “panier” contenant un résumé des produits dans le panier, le prix
total et un formulaire permettant de passer une commande. Les données
du formulaire doivent être correctes et bien formatées avant d'être
renvoyées au back-end. Par exemple, pas de texte dans les champs date ;
* une page de confirmation de commande, remerciant l'utilisateur pour sa
commande, et indiquant le prix total et l'identifiant de commande envoyé
par le serveur.
