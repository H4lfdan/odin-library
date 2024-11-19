let library = [];
const table = document.getElementById("display");

function Book(bookNum, author, title, pageCount, haveRead) {
    this.bookNum = bookNum;
    this.author = author;
    this.title = title;
    this.pageCount = pageCount;
    this.haveRead = haveRead;
}

function addBook() {
    let bookNum = library.length + 1;
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const pageCount = document.getElementById("page_count").value;
    const haveRead = document.getElementById("have_read").checked;

    const book = new Book(bookNum, author, title, pageCount, haveRead);
    library.push(book);
    console.log("Author: " + book.author + " | Title: " + book.title + " | Page Count: " + book.pageCount + " | Have Read: " + haveRead);

    let currentRow = table.insertRow(-1);
        let numCell = currentRow.insertCell(-1);
        let authorCell = currentRow.insertCell(-1);
        let titleCell = currentRow.insertCell(-1);
        let pageCell = currentRow.insertCell(-1);
        let readCell = currentRow.insertCell(-1);
        let remCell = currentRow.insertCell(-1);

        numCell.innerHTML = `Book ${bookNum}:`;
        authorCell.innerHTML = author;
        titleCell.innerHTML = title;
        pageCell.innerHTML = pageCount;
        readCell.innerHTML = `<input type="checkbox" id="have_read${bookNum}">`;
        let readCheck = document.getElementById(`have_read${bookNum}`);
        if (haveRead) {
            readCheck.checked = true;
        } else if (!haveRead) {
            readCheck.checked = false;
        }
        remCell.innerHTML = `<button onclick="testButton(${bookNum})">Remove</button>`;
}

function testButton(remNum) {
    library.splice(remNum - 1, 1);
    table.deleteRow(remNum);

    library.forEach((book, index) => {
        book.bookNum = index + 1;
        let currentRow = table.rows[book.bookNum];
        let numCell = currentRow.cells[0];
        let remCell = currentRow.cells[5];
        numCell.innerHTML = `Book ${book.bookNum}:`;
        remCell.innerHTML = `<button onclick="testButton(${book.bookNum})">Remove</button>`;
    })
}

function displayLibrary() {

    library.forEach((book) => {
        console.log(`Book ${book.bookNum} Author: ${book.author}`);
    })
}