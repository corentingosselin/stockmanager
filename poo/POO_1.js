/**
 * 
 *  1. POO
 * 
 *   Créer un objet Book avec les propriétés suivantes :
 *   
 *   - title (string)
 *   - author (string)
 *   - numberOfPages (number)
 *  
 *  une méthode getSummary() qui retourne un résumé du livre sous la forme suivante :
 * 
 *     "Le livre <title> a été écrit par <author> et contient <numberOfPages> pages."
 * 
 * 
 */

const book = {
    title: "Titre",
    author: "Auteur",
    numberOfPages: 150
}

function getSummary() {
    console.log(`Le livre ${book.title} a été écrit par ${book.author} et contient ${book.numberOfPages} pages.`)
}

book.title = "'Titre test'";
book.author = "'Auteur test'";
book.numberOfPages = 300

getSummary()