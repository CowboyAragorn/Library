




//Constructor for books//
/*function addBook(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
*/



function addBook() {
    this.title = document.querySelector('#title').value,
    this.author = document.querySelector('#author').value,
    this.pages = document.querySelector('#pages').value,
    this.read = document.querySelector('#readStatus').value
}


let n =1

addBook.prototype.sayBook = function(){
    console.log(this.title, this.author, this.pages, this.read)
    let titleElement = document.createElement('p')
        titleElement.id = n
        n = n+1
    let authorElement = document.createElement('p')
        authorElement.id = n
        n = n + 1
    let pagesElement = document.createElement('p')
        pagesElement.id = n
        n = n+1
    let readElement = document.createElement('p')
        readElement.id = n
        n = n+1
    titleElement.innerText ="Title: " + this.title; 
    authorElement.innerText ="Author: " + this.author;
    pagesElement.innerText ="Pages: " + this.pages; 
    readElement.innerText ="Read?: " + this.read;

    bookshelf.append(titleElement)
    bookshelf.append(authorElement)
    bookshelf.append(pagesElement)
    bookshelf.append(readElement)
}




function addBookToLibrary(){
    let book = new addBook(
        "document.querySelector('#title').value",
        "author: document.querySelector('#author').value",
        "document.querySelector('#pages').value",
        "document.querySelector('#readStatus').value")
    myLibrary.push(book);
    displayLibrary();
    reset();
}


function reset(){
        document.querySelector('#title').value = ''
        document.querySelector('#author').value = ''
        document.querySelector('#pages').value = ''
        document.querySelector('#readStatus').value = ''
    
}

const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', addBookToLibrary)




let myLibrary = [];
let indexDisplay
let libraryNumber

const bookshelf = document.querySelector('#bookshelf')

function displayLibrary() {
    removeBooks()
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].sayBook())
        
    }
}

function removeBooks() {
    n = 1;
    for (let i = 0; i < myLibrary.length; i++){
        while (bookshelf.firstChild){
            bookshelf.removeChild(bookshelf.firstChild)
        }
    }


}



displayLibrary()


const book1 = new addBook(
    'The Hobbit',
    'JRR Tolkein',
    '255',
    'Read')


const book2 = new addBook(
    'Catch 22',
    'Joseph Heller',
    '255',
    'Read')

const book3 = new addBook(
    'Shogun',
    'James Clavell',
    '1100',
    'Reading')
