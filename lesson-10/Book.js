export default class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    set title(value) {
        if (typeof value === 'string' && value.length > 0) {
            this._title = value;
        } else {
            throw new Error('Invalid title');
        }
    }

    set author(value) {
        if (typeof value === 'string' && value.length > 0) {
            this._author = value;
        } else {
            throw new Error('Invalid author');
        }
    }

    set year(value) {
        if (typeof value === 'number' && value > 0) {
            this._year = value;
        } else {
            throw new Error('Invalid year');
        }
    }

    static findOldestBook(books) {
        if (books.length === 0) {
            throw new Error('The array of books is empty.');
        }
        return books.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        });
}
}

const book1 = new Book('Gone with the Wind', 'M. Mitchell', 1939);
const book2 = new Book('1984', 'G. Orwell', 1949);
const book3 = new Book('Colony', 'M. Kidruk', 2022);

book1.printInfo();
book2.printInfo();
book3.printInfo();