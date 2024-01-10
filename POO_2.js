/*

Temps estimé 40mn

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


    Important: on ne peut pas emprunter un livre déjà emprunté.

    L'ISBN, ou International Standard Book Number (Numéro International Normalisé du Livre),
    est un identifiant unique pour les livres

    L'ISBN est composé de 10 chiffres

    Tests et Validation :

        Créer des instances de livres.
        Ajouter ces livres à une instance de Library.
        Tester les méthodes d'emprunt et de retour des livres.

*/


class Book {

    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.available = true;
    }

    setAvailable(available) {
        this.available = available;
    }
}

class Library {

    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    findBook(ISBN) {
        return this.books.find((book) => book.ISBN === ISBN);
    }

    borrowBook(ISBN) {
        const book = this.findBook(ISBN);
        if (!book) {
            return "Book not found";
        }
        if (!book.available) {
            return "Book not available";
        }
        book.setAvailable(false);
        return "Book borrowed";
    }

    returnBook(ISBN) {
        const book = this.findBook(ISBN);
        if (!book) {
            return "Book not found";
        }
        book.setAvailable(true);
        return "Book returned";
    }

    displayBooks() {
        this.books.forEach((book) => {
            console.log(book);
        });
    }

    displayBookInfo(ISBN) {
        const book = this.findBook(ISBN);
        if (!book) {
            return "Book not found";
        }
        console.log(book);
    }
}

// Exemple d'utilisation
const myBook = new Book("Influence & Manipulation", "Robert", "1234567890");
const myBook2 = new Book("Influence & Manipulation", "Robert", "1234567891");
const myBook3 = new Book("Influence & Manipulation", "Robert", "1234567892");
const myBook4 = new Book("Influence & Manipulation", "Robert", "1234567893");

const myLibrary = new Library("Bibliothèque de Paris");
myLibrary.addBook(myBook);
myLibrary.addBook(myBook2);
myLibrary.addBook(myBook3);
myLibrary.addBook(myBook4);

console.log(myLibrary.borrowBook("1234567890"));
console.log(myLibrary.borrowBook("1234567890"));

console.log(myLibrary.returnBook("1234567890"));

myLibrary.displayBooks();

