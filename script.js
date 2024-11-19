let library = [];

function Book(bookNum, author, title, pageCount, haveRead) {
    this.bookNum = bookNum;
    this.author = author;
    this.title = title;
    this.pageCount = pageCount;
    this.haveRead = haveRead;
}

function addBook() {
    const table = document.getElementById("display");
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
        if (haveRead) {
            readCell.innerHTML = "yes";
        } else if (!haveRead) {
            readCell.innerHTML = "no";
        }
        remCell.innerHTML = `<button onclick="testButton(${bookNum})">Remove Book ${bookNum}</button>`;
}

function testButton(remNum) {
    const table = document.getElementById("display");
    
    library.splice(remNum - 1, 1);

    table.deleteRow(remNum);

    library.forEach((book, index) => {
        book.bookNum = index + 1;
        let currentRow = table.rows[book.bookNum];
        let numCell = currentRow.cells[0];
        // let authorCell = currentRow.insertCell(-1);
        // let titleCell = currentRow.insertCell(-1);
        // let pageCell = currentRow.insertCell(-1);
        // let readCell = currentRow.insertCell(-1);
        let remCell = currentRow.cells[5];

        numCell.innerHTML = `Book ${book.bookNum}:`;
        // authorCell.innerHTML = book.author;
        // titleCell.innerHTML = book.title;
        // pageCell.innerHTML = book.pageCount;
        // if (book.haveRead) {
        //     readCell.innerHTML = "yes";
        // } else if (!book.haveRead) {
        //     readCell.innerHTML = "no";
        // }
        remCell.innerHTML = `<button onclick="testButton(${book.bookNum})">Remove Book ${book.bookNum}</button>`;
    })
}

function displayLibrary() {
    const table = document.getElementById("display");

    library.forEach((book, index) => {
        console.log(`Book ${book.bookNum} Author: ${book.author}`);
    })
}