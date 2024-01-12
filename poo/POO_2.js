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

    L'ISBN, ou International Standard Book Number (Numéro International Normalisé du Livre),
    est un identifiant unique pour les livres

    L'ISBN est composé de 10 chiffres

    Tests et Validation :

        Créer des instances de livres.
        Ajouter ces livres à une instance de Library.
        Tester les méthodes d'emprunt et de retour des livres.

*/
