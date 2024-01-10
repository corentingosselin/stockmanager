/**
 *
 *  1. POO (temps 10mn)
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

class Book {

  constructor(title, author, numberOfPages) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
  }

  getSummary() {
    return `Le livre ${this.title} a été écrit par ${this.author} et contient ${this.numberOfPages} pages.`;
  }
}

// Exemple d'utilisation
const myBook = new Book("Influence & Manipulation", "Robert", 96);
console.log(myBook.getSummary());
