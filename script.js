




//Constructor for books, addbook2 is simply for display test, to be removed after//
function addBook2(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

addBook2.prototype.sayBook = function () {
    console.log(this.title, this.author, this.pages, this.read)
    let cover = document.createElement('div')
    cover.classList.add("cover")
    let titleLabelElement = document.createElement('p') //labels are not the imported user inputs. Putting them separately for aesthetic stacking.
    let bookTitleElement = document.createElement('p')
    bookTitleElement.id = n
    n = n + 1
    let authorLabelElement = document.createElement('p')
    let authorElement = document.createElement('p')
    authorElement.id = n
    n = n + 1
    let pagesLabelElement = document.createElement('p')
    let pagesElement = document.createElement('p')
    pagesElement.id = n
    n = n + 1
    let readLabelElement = document.createElement('p')
    let readElement = document.createElement('p')
    readElement.id = n
    readElement.classList.add('readCheckClass')
    n = n + 1


    titleLabelElement.classList.add('labelText')
    bookTitleElement.classList.add('bookText')
    authorLabelElement.classList.add('labelText')
    authorElement.classList.add('bookText')
    pagesLabelElement.classList.add('labelText')
    pagesElement.classList.add('bookText')
    readLabelElement.classList.add('labelText')


    titleLabelElement.innerText = 'Title'
    bookTitleElement.innerText = this.title;
    authorLabelElement.innerText = 'Author'
    authorElement.innerText = this.author;
    pagesLabelElement.innerText = "Pages"
    pagesElement.innerText = this.pages;
    readLabelElement.innerText = "Read"
    readElement.innerText = this.read;


    bookshelf.append(cover)
    cover.append(titleLabelElement)
    cover.append(bookTitleElement)
    cover.append(authorLabelElement)
    cover.append(authorElement)
    cover.append(pagesLabelElement)
    cover.append(pagesElement)
    cover.append(readLabelElement)
    cover.append(readElement)
}

//Remove above addbook2 when completed//

function addBook() {
    this.title = document.querySelector('#title').value,
    this.author = document.querySelector('#author').value,
    this.pages = document.querySelector('#pages').value,
    this.read = document.querySelector('#readStatus').value
}


let n =1

addBook.prototype.sayBook = function(){
    console.log(this.title, this.author, this.pages, this.read)
    let cover = document.createElement('div')
    cover.classList.add("cover")
        let titleLabelElement = document.createElement('p') //labels are not the imported user inputs. Putting them separately for aesthetic stacking.
        let bookTitleElement = document.createElement('p')
            bookTitleElement.id = n
            n = n+1
        let authorLabelElement = document.createElement('p')
        let authorElement = document.createElement('p')
            authorElement.id = n
            n = n + 1
        let pagesLabelElement = document.createElement('p')   
        let pagesElement = document.createElement('p')
            pagesElement.id = n
            n = n+1
        let readLabelElement = document.createElement('p')
        let readElement = document.createElement('p')
            readElement.id = n
            readElement.classList.add('readCheckClass')
            n = n+1


    titleLabelElement.classList.add('labelText')
    bookTitleElement.classList.add('bookText')
    authorLabelElement.classList.add('labelText')
    authorElement.classList.add('bookText')
    pagesLabelElement.classList.add('labelText')
    pagesElement.classList.add('bookText')
    readLabelElement.classList.add('labelText')


    titleLabelElement.innerText = 'Title'
    bookTitleElement.innerText = this.title; 
    authorLabelElement.innerText = 'Author'
    authorElement.innerText = this.author;
    pagesLabelElement.innerText = "Pages"
    pagesElement.innerText =this.pages;
    readLabelElement.innerText = "Read"
    readElement.innerText = this.read;


    bookshelf.append(cover)
    cover.append(titleLabelElement)
    cover.append(bookTitleElement)
    cover.append(authorLabelElement)
    cover.append(authorElement)
    cover.append(pagesLabelElement)
    cover.append(pagesElement)
    cover.append(readLabelElement)
    cover.append(readElement)
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


const book1 = new addBook2(
    'The Hobbit',
    'JRR Tolkein',
    '255',
    'Read')

let myLibrary = [book1];
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
