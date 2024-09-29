import Book from './Book.js';

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        const validEx = ["PDF", "TXT", "DOC"];
        if (typeof value === 'string' && validEx.includes(value)) {
            this._fileFormat = value;
        } else {
            throw new Error('Invalid file format');
        }
    }

    printInfo() {
        super.printInfo();
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, File Format: ${this.fileFormat}`);
    }

    static createFromBook(book, fileFormat) {
        if (book instanceof Book) {
            return new EBook(book.title, book.author, book.year, fileFormat);
        } else {
            throw new Error('Invalid book instance');
        }
    }
}

const ebook1 = new EBook('Зазирни у мої сни', 'M. Kidruk', 2016, 'PDF');
ebook1.printInfo();

const book1 = new Book('Gone with the Wind', 'M. Mitchell', 1939);
const book2 = new Book('1984', 'G. Orwell', 1949);
const book3 = new Book('Colony', 'M. Kidruk', 2022);

const booksArray = [book1, book2, book3, ebook1];

const oldestBook = Book.findOldestBook(booksArray);
console.log('Oldest Book:');
oldestBook.printInfo();

const ebook2 = EBook.createFromBook(book1, 'EPUB');
ebook2.printInfo();