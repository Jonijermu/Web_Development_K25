'use strict';

// Step 1: Object Destructuring
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Classic"
};

function displayBookInfo(book) {
  const {title, author, year} = book;
  console.log(`Title: ${title}, Author: ${author}, Year: ${year}`);
}

// Step 2: Array Destructuring
const bookList = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction"
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian"
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
    genre: "Adventure"
  }
];

function listBookTitles(bookList) {
  const titles = [];
  for (const book of bookList) {
    const {title} = book;

    titles.push(title);
  }
  return titles;
}

// Step 3: Nested Object Destructuring
const bookWithPublisher = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  year: 1997,
  genre: "Fantasy",
  publisher: {
    name: "Scholastic",
    location: "New York"
  }
};

function displayPublisherLocation(book) {
  const {publisher: {location}} = book;

  console.log(`Publisher Location: ${location}`);
}

// Step 4: Default Values in Destructuring
const incompleteBook = {
  title: "Incomplete Book"
  // author and year properties are missing
};

function fillMissingInfo(book) {
  const {title, author = "Unknown Author", year = "Unknown Year"} = book;

  console.log(`Title: ${title}, Author: ${author}, Year: ${year}`);
}

const swapBook = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Classic"
};

// Step 5: Challenge (Optional)
function swapProperties(book) {
  [book.author, book.title] = [book.title, book.author];
  return (book);
}

// Test the functions
displayBookInfo(book);
console.log(listBookTitles(bookList));
displayPublisherLocation(bookWithPublisher);
fillMissingInfo(incompleteBook);
const swappedBook = swapProperties(swapBook);
console.log(swappedBook);
