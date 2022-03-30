let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    const added = new Book(title, author, pages, read);
    myLibrary.push(added);
}

addBookToLibrary('The Hobbit', 'JRR', 253, 'yes');
addBookToLibrary('Jane Eyre', 'Charlotte Bronte', 293, 'yes')
addBookToLibrary('Harry Potter', 'JK Rowling', 695, 'yes');

let headers = ['Title', 'Author', 'Pages', 'Read?'];
let myTable = document.querySelector('#table');

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
        table.appendChild(row);
    });

    myTable.appendChild(table);
}







