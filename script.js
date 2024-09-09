const library = [];

function Book(author, title, pageCount, haveRead) {
    this.author = author;
    this.title = title;
    this.pageCount = pageCount;
    this.haveRead = haveRead;
}

function addBook() {
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const pageCount = document.getElementById("page_count").value;
    const haveRead = document.getElementById("have_read").value;

    const book = new Book(author, title, pageCount, haveRead);
    library.push(book);
    console.log("Author: " + book.author + " | Title: " + book.title + " | Page Count: " + book.pageCount + " | Have Read: " + haveRead);
}

function testButton() {
    console.log(library[0].haveRead);;
}

function displayLibrary() {
    for (let book in library) {
        for (let prop in book) {
            console.log(prop);
        }
    }
}