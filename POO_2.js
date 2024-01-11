/*


    2. intéraction entre les classes

    Définir la Classe Book :

        Propriétés : title (string), author (string), ISBN (string), available (boolean).
        Méthodes :
        borrowBook() : Si le livre est disponible (available), le marque comme emprunté et retourne vrai. Sinon, retourne faux.
        returnBook() : Marque le livre comme disponible.


    Définir la Classe Library :

        Propriétés : name (string), books (array de Book).
        Méthodes :
        addBook(book) : Ajoute un nouveau livre à la bibliothèque.
        findBook(ISBN) : Retourne un livre basé sur l'ISBN.
        borrowBook(ISBN) : Tente d'emprunter un livre. Retourne un message de succès ou d'échec.
        returnBook(ISBN) : Retourne un livre à la bibliothèque.

    L'ISBN, ou International Standard Book Number (Numéro International Normalisé du Livre),
    est un identifiant unique pour les livres

    L'ISBN est composé de 10 chiffres

    Tests et Validation :

        Créer des instances de livres.
        Ajouter ces livres à une instance de Library.
        Tester les méthodes d'emprunt et de retour des livres.

*/

class Book{
    constructor(title, author, ISBN, available) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.available = available;
    }

    borrowBook() {
        if (this.available) {
            this.available = false;
            return true;
        } 
        return false;
    }

    returnBook() {
        this.available = true;
    }
}

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        this.books.push(book);
    }

    findBook(ISBN) {
        let found = null
        this.books.forEach(book => {
            if(book.ISBN === ISBN){
                 found = book;
            }
        });
        if (found != null) {
            return found;
        }
        console.log("Le livre n'a pas été trouvé.")
    }
        
    borrowBook(ISBN) {
        const book = this.findBook(ISBN);
        if(book != null && book.borrowBook()) {
            console.log("Prenez le livre : " + book.title + ".");
        }
        else {
            console.log("Le livre n'est pas disponible.")
        }
    }
        
    returnBook(ISBN) {
        this.findBook(ISBN).returnBook();
    }

}

const LandOfLustrous = new Book("Land of Lustrous", "Haruko Ichikawa", "1048295039", true);
const BLAME = new Book("BLAME!", "Tsutomu Nihei", "8402944721", true);
const Kino = new Book("KINO'S JOURNEY", "Keiichi Shigusawa", "8430520534", true);

const CDI = new Library("CDI", [LandOfLustrous, BLAME, Kino]);

console.log(CDI.findBook("1048295039"));
CDI.findBook("0");
console.log("\n");

CDI.borrowBook("8430520534");
CDI.borrowBook("8430520534");
CDI.borrowBook("0");
console.log("\n");

CDI.returnBook("8430520534");
CDI.borrowBook("8430520534");