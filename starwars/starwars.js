/*

Implenter une fonction setupSwapi qui devra:
récuperer la première page des personnages de star wars
les afficher avec cette structure dans le div#content:
<div class="content">
   <h3><nom_du_personnage></h3>
   <h3><nom_du_personnage></h3>
   <h3><nom_du_personnage></h3>
   <h3><nom_du_personnage></h3>
</div>
afficher un bouton de page suivante (next-page-button) seulement si il y a une page suivante
lorsqu'on clique sur le bouton de page suivante, cela vide le div#content et affiche la page suivante

infos:
url api: https://swapi.dev/
endpoint: https://swapi.dev/api/people/?page=1
*/

document.addEventListener('DOMContentLoaded', function () {
   var currentPage = 1;
 
   function getAndDisplayCharacters(page) {
     fetch(`https://swapi.dev/api/people/?page=${page}`)
       .then(response => {
         if (!response.ok) {
           throw new Error(`Erreur`);
         }
         return response.json();
       })
       .then(data => {
         var contentElement = document.getElementById('content');
         contentElement.innerHTML = '';
 
         data.results.forEach(function (character) {
           var h3 = document.createElement('h3');
           h3.textContent = character.name;
           contentElement.appendChild(h3);
         });
 
         var nextPageButton = document.getElementById('next-page-button');
         if (data.next) {
           nextPageButton.style.display = 'block';
         } else {
           nextPageButton.style.display = 'none';
         }
       })
       .catch(error => {
         console.error(error);
       });
   }
 
   document.getElementById('next-page-button').addEventListener('click', function () {
     currentPage++;
     getAndDisplayCharacters(currentPage);
   });
 
   getAndDisplayCharacters(currentPage);
 });