// Reuse existing instances when working with identical objects

// Lets say that we want to add books to our app, if we add several
// copies of a single book we would just want to create multiple instances
// of the Book constructor

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

const books = new Map();

const createBook = (title, author, isbn) => {
  const existingBook = book.has(isbn);

  if (existingBook) {
    return books.get(isbn);
  }

  const book = new Book(title, author, isbn);
  books.set(isbn, book);

  return book;
}

const bookList = [];
const addBook = (title, author, isbn, availability, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    sales,
    availability,
    isbn
  }

  bookList.push(book);
  return book;
}
