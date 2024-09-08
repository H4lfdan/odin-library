const myLibrary = [];

function Book() {
    this.author = document.getElementById("author").value;
    this.title = document.getElementById("title").value;
    this.pageCount = document.getElementById("page_count").value;
    this.haveRead = document.getElementById("have_read").value;
}

function addBook() {
    const book = new Book();
    myLibrary.push(book);
    console.log(book.title);
}

function testButton() {
    console.log("This button works! Yay!");
}

function displayLibrary() {
    console.log(myLibrary[0].haveRead);
}