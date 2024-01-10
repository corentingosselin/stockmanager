/*

   temps: 30mn
    3. Héritage

    Classe de Base Book :

        Utilisez la classe Book de l'exercice précédent.
        Créer des Sous-Classes de Book :

        Novel (Roman) : Ajoutez une propriété genre (string).
        Textbook (Manuel) : Ajoutez une propriété subject (string) et une méthode getEdition() qui retourne l'édition du livre.
        Magazine : Ajoutez des propriétés issueNumber (number) et monthly (boolean).

    Méthodes Spécifiques aux Sous-Classes :

        Chaque sous-classe doit avoir une méthode getDetails() 
        qui renvoie une chaîne de caractères décrivant les détails spécifiques du livre.

        Tests et Validation :

            Créez des instances de chaque sous-classe et testez leurs méthodes spécifiques, ainsi que les méthodes héritées de Book.

        
*/



class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }

    setAvailable(available) {
        this.available = available;
    }

    getDetails() {
        return `${this.title}, écrit par ${this.author}.`;
    }
}

class Novel extends Book {
    constructor(title, author, ISBN, genre) {
        super(title, author, ISBN);
        this.genre = genre;
    }

    getDetails() {
        return `${this.title}, un roman ${this.genre}, écrit par ${this.author}.`;
    }
}

class Textbook extends Book {
    constructor(title, author, ISBN, subject) {
        super(title, author, ISBN);
        this.subject = subject;
    }

    getDetails() {
        return `${this.title} est un manuel de ${this.subject}, écrit par ${this.author}.`;
    }
}

class Magazine extends Book {
    constructor(title, author, ISBN, issueNumber, monthly) {
        super(title, author, ISBN);
        this.issueNumber = issueNumber;
        this.monthly = monthly;
    }

    getDetails() {
        return `${this.title} est un magazine ${this.monthly ? 'mensuel' : 'annuel'}, numéro ${this.issueNumber}.`;
    }
}

// Exemple d'utilisation
const novel = new Novel("Les Misérables", "Victor Hugo", "12345-678", "Historique");
console.log(novel.getDetails());

const textbook = new Textbook("Mathématiques Avancées", "Claude Dupont", "98765-432", "Mathématiques");
console.log(textbook.getDetails());

const magazine = new Magazine("Science Aujourd'hui", "Marie Curie", "56473-891", 10, true);
console.log(magazine.getDetails());
