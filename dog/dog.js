/**
 
    créer une fonction setupDogPic
    la fonction devra:

    ajouter un eventListener sur le bouton#ex_02_btn 
    a chaque click, il change l'image #ex_02_img avec les données de l'api mentionné dans la section infos
    infos:
    url api: https://dog.ceo/dog-api/
Ò
 */

function setupDogPic() {
    const button = document.getElementById('ex_02_btn');
    const dogImage = document.getElementById('ex_02_img');

    button.addEventListener('click', function () {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                dogImage.src = data.message;
            })
            .catch(error => {
                console.error('Erreur lors de la récupération de l\'image du chien:', error);
            });
    });
}

window.onload = setupDogPic;