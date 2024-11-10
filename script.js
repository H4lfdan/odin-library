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
    const table = document.getElementById("display");

    for(let i = 0, row; row = table.rows[i]; i++) {
        if (i > 0) {
            table.deleteRow(i);
        }
    }

    library.forEach((book, index) => {
        let currentRow = table.insertRow(index + 1);
        let numCell = currentRow.insertCell(-1);
        let authorCell = currentRow.insertCell(-1);
        let titleCell = currentRow.insertCell(-1);
        let pageCell = currentRow.insertCell(-1);
        let readCell = currentRow.insertCell(-1);

        numCell.innerHTML = `Book ${index + 1}:`;
        authorCell.innerHTML = book.author;
        titleCell.innerHTML = book.title;
        pageCell.innerHTML = book.pageCount;
        // if (haveRead) {
        //     readCell.innerHTML = "yes";
        // } else if (!haveRead) {
        //     readCell.innerHTML = "no";
        // }

        console.log(`Book ${index + 1}:`);
        console.log(`Author: ${book.author}`);
        console.log(`Title: ${book.title}`);
        console.log(`Page Count: ${book.pageCount}`);
        console.log(`Have Read: ${book.haveRead}`);
    })
}