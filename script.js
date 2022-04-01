let myLibrary = [];
let headers = ['Title', 'Author', 'Pages', 'Read?'];
let myTable = document.querySelector('#table');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    const added = new Book(title, author, pages, read);
    myLibrary.push(added);
    tableCreate(myLibrary);
}

addBookToLibrary('The Hobbit', 'J. R. R. Tolkien', 304, 'no');
addBookToLibrary('Jane Eyre', 'Charlotte Bronte', 592, 'yes')



//Creating table
function tableCreate(library) {
    myTable.innerHTML = '';
    const table = document.createElement('table');
    let headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    library.forEach(book => {
        let row = document.createElement('tr');
        Object.values(book).forEach(text => {
            let cell =
                document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        });
        let deleter = document.createElement("button");
        deleter.innerHTML = "Delete Book";
        deleter.type = "button";
        deleter.name = "delete";
        deleter.addEventListener("click", deleteBook);
        row.appendChild(deleter);
        table.appendChild(row);
    });

    myTable.appendChild(table);
}

var form = document.forms['form'];
function newBook() {
    var title = document.form.title.value;
    var author = document.form.author.value;
    var pages = document.form.pages.value;
    var read = document.form.read.value;
    addBookToLibrary(title, author, pages, read);
}

function deleteBook() {
    
}

