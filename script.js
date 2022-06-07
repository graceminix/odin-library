let myLibrary = [];
let headers = ['Title', 'Author', 'Pages', 'Read?'];
let myTable = document.querySelector('#table');

// Define basic Book
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// Adds book to library, creates table
function addBookToLibrary(title, author, pages, read) {
    const added = new Book(title, author, pages, read);
    myLibrary.push(added);
    tableCreate(myLibrary);
}

// Starting books.
addBookToLibrary('Jane Eyre', 'Charlotte Bronte', 592, 'yes');
addBookToLibrary('Prep', 'Curtis Sittenfeld', 448, 'yes');



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

    let i = 0;

// Creating row per book in library
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
        deleter.addEventListener("click", function() {
            deleteBook(this.dataset.test);
        }, false);
        let reader = document.createElement("button");
        reader.innerHTML = "Toggle Read";
        reader.type = "button";
        reader.name = "change";
        reader.dataset.test = i;
        deleter.dataset.test = i;
        reader.addEventListener("click", function() {
            changeStatus(this.dataset.test);
        }, false);
        row.appendChild(reader);
        row.appendChild(deleter);
        table.appendChild(row);
        i += 1;
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

// Function that deletes books from library and recreates table.
function deleteBook(i) {
    myLibrary.splice(i, 1);
    tableCreate(myLibrary);
    
}

// Prototype for changing read status
Book.prototype.change = function () {
    if (this.read == 'no') {
        this.read = 'yes'
    } else {
        this.read = 'no'
    }
}

// Function to change status and recreate table
function changeStatus(i) {
    myLibrary[i].change();
    tableCreate(myLibrary);

}

