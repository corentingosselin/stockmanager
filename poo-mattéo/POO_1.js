function createBook(title, author, numberOfPages) {
    let book = {};
  
    book.title = title;
    book.author = author;
    book.numberOfPages = numberOfPages;
  
    book.getSummary = function () {
      return `Le livre ${this.title} a été écrit par ${this.author} et contient ${this.numberOfPages} pages.`;
    };
  
    return book;
  }
  
  let myBook = createBook("Le Monde", "Paul Dubois", 500);
  
  console.log(myBook.getSummary());