// Define your Book class here:
class Book {
    constructor(title, author, copyright, ISBN, pages, checkouts, discarded) {
        this.title = title
        this.author = author
        this.copyright = copyright
        this.ISBN = ISBN
        this.pages = pages
        this.checkouts = checkouts
        this.discarded = discarded
    }
}

class Manual extends Book {
    constructor(title, author, copyright, ISBN, pages, checkouts, discarded) {
        super(title, author, copyright, ISBN, pages, checkouts, discarded)
    }
    disposal(currentYear) {
        if(currentYear - this.copyright > 5) {
            this.discarded = 'yes'
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyright, ISBN, pages, checkouts, discarded) {
        super(title, author, copyright, ISBN, pages, checkouts, discarded)
    }
    disposal() {
        if(this.checkouts > 100) {
            this.discarded = 'yes'
        }
    }
}
let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'no' )
let topSecretShuttleBuildingManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, "no")
// Define your Manual and Novel classes here:


// Declare the objects for exercises 2 and 3 here:
prideAndPrejudice.disposal
prideAndPrejudice.discarded
// Code exercises 4 & 5 here: