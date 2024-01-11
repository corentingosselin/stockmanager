class Book {
    constructor(title, author, ISBN) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
      this.available = true;
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
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBook(ISBN) {
      return this.books.find(book => book.ISBN === ISBN);
    }
  
    borrowOrReturnBook(ISBN, action) {
      const book = this.findBook(ISBN);
  
      if (book) {
        const successMessage = `Le livre "${book.title}" a été ${action === 'borrow' ? 'emprunté' : 'retourné'} avec succès.`;
        const unavailableMessage = `Désolé, le livre "${book.title}" n'est pas disponible pour l'emprunt.`;
  
        return book[action + 'Book']() ? successMessage : unavailableMessage;
      }
  
      return "Livre introuvable dans la bibliothèque.";
    }
  
    borrowBook(ISBN) {
      return this.borrowOrReturnBook(ISBN, 'borrow');
    }
  
    returnBook(ISBN) {
      return this.borrowOrReturnBook(ISBN, 'return');
    }
  }
  
  const book1 = new Book("Harry Potter", "J.K. Rowling", "1234567890");
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "0987654321");
  const library = new Library("Bibliothèque Centrale");
  
  library.addBook(book1);
  library.addBook(book2);
  
  console.log(library.borrowBook("1234567890"));
  console.log(library.borrowBook("1234567890"));
  console.log(library.returnBook("1234567890"));
  console.log(library.borrowBook("1234567890"));
  