/*
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

class Novel extends Book{
    constructor(title, author, ISBN, available, genre) {
        super(title, author, ISBN, available);
        this.genre = genre;
    }

    getDetails() {
        return "C'est un roman de genre " + this.genre + " nommé " + this.tiltle + ", publié par " + this.author + ".";
    }
}

class Textbook extends Book{
    constructor(title, author, ISBN, available, subject, version) {
        super(title, author, ISBN, available);
        this.subject = subject;
        this.version = version;
    }

    getEdition() {
        return this.version;
    }

    getDetails() {
        return "C'est l'édition " + this.version + " du livre " + this.tiltle + " traitant le sujet de " + this.subject + ", publié par " + this.author + ".";
    }
}

class Magazine extends Book{
    constructor(title, author, ISBN, available, issueNumber, monthly) {
        super(title, author, ISBN, available);
        this.issueNumber = issueNumber;
        this.monthly = monthly;
    }

    getDetails() {
        if (this.monthly) {
            return "C'est la magazine " + this.title + " du mois " + this.issueNumber + ", publié par " + this.author + ".";}
        return "C'est la magazine " + this.title + " de la version " + this.issueNumber + ", publié par " + this.author + ".";
    }
}

const ICO = new Novel("ICO", "Miyuki Miyabe", "3462792523", true, "fantaisie")
const Math_tuto = new Textbook("Math lesson book", "unknown", "4264778509", true, "théories mathématiques", "3.01")
const Jump = new Magazine("Jump", "entreprise Syuuei", "5535685321", true, 67, false)

console.log(ICO.getDetails())
console.log(Math_tuto.getEdition())
console.log(Math_tuto.getDetails())
console.log(Jump.getDetails())