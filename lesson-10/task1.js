import Book from "./Book.js";
import EBook from "./EBook.js";

const ebook1 = new EBook("Зазирни у мої сни", "M. Kidruk", 2016, "PDF");
ebook1.printInfo();

const book1 = new Book("Gone with the Wind", "M. Mitchell", 1939);
const book2 = new Book("1984", "G. Orwell", 1949);
const book3 = new Book("Colony", "M. Kidruk", 2022);

const booksArray = [book1, book2, book3, ebook1];

const oldestBook = Book.findOldestBook(booksArray);
console.log("Oldest Book:");
oldestBook.printInfo();

const ebook2 = EBook.createFromBook(book1, "EPUB");
ebook2.printInfo();
