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
  
    getDetails() {
      return `${this.title} - ${this.author} (ISBN: ${this.ISBN})`;
    }
  }
  
  class Novel extends Book {
    constructor(title, author, ISBN, genre) {
      super(title, author, ISBN);
      this.genre = genre;
    }
  
    getDetails() {
      return `${super.getDetails()}, Genre: ${this.genre}`;
    }
  }
  
  class Textbook extends Book {
    constructor(title, author, ISBN, subject) {
      super(title, author, ISBN);
      this.subject = subject;
    }
  
    getEdition() {
      return "Latest Edition"; 
    }
  
    getDetails() {
      return `${super.getDetails()}, Subject: ${this.subject}, Edition: ${this.getEdition()}`;
    }
  }
  
  class Magazine extends Book {
    constructor(title, author, ISBN, issueNumber, monthly) {
      super(title, author, ISBN);
      this.issueNumber = issueNumber;
      this.monthly = monthly;
    }
  
    getDetails() {
      return `${super.getDetails()}, Issue Number: ${this.issueNumber}, Monthly: ${this.monthly}`;
    }
  }
  
  const novel = new Novel("The Great Gatsby", "F. Scott Fitzgerald", "123456789", "Fiction");
  const textbook = new Textbook("Mathematics for Beginners", "John Doe", "987654321", "Mathematics");
  const magazine = new Magazine("Tech Review", "Tech Publications", "555555555", 123, true);
  
  console.log(novel.getDetails());
  console.log(textbook.getDetails());
  console.log(magazine.getDetails());
  console.log(novel.borrowBook()); 
  console.log(novel.returnBook()); 
  
