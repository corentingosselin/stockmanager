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
*/

class Book {
  constructor(title, author, numberOfPages) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
  }
  
  getSummary() {
    console.log("Le livre " + this.title + " a été écrit par " + this.author + " et contient " + String(this.numberOfPages) + " pages.")
  }
}

const LandOfLustrous = new Book("Land of Lustrous", "Haruko Ichikawa", 200)
LandOfLustrous.getSummary()