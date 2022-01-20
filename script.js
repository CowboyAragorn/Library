
/*const book = {
    title: "The Hobbit",
    pages: 255,
    read: "Not Yet Read"
}
*/

//console.log(book.title, book.pages, book.read)//




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


addBook.prototype.sayBook = function(){
    console.log(this.title, this.author, this.pages, this.read)
}


function addBookToLibrary(){
    //e.preventDefault();
/*
    let book = {
        title: document.querySelector('#title').value,
        author: document.querySelector('#author').value,
        pages: document.querySelector('#pages').value,
        read: document.querySelector('#readStatus').value
    }
*/
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



function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].sayBook())
    }
}


//myLibrary.forEach(function(item, index){
    //console.log(item, index)
//}


displayLibrary()

//const book2 = new addBook('Curious George', 'HA Rey', '15', 'Not Read')
//book1.sayBook()
//book2.sayBook()

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
