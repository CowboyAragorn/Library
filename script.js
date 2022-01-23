//Constructor for books, addbook2 is simply for display test, to be removed after//
function addBook2(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

addBook2.prototype.sayBook = function () {

//Creation of Dom elements//
    console.log(this.title, this.author, this.pages, this.read)
    let cover = document.createElement('div')
    cover.id = n
    n = n+1
    cover.classList.add("cover")
    let titleLabelElement = document.createElement('p') //labels are not the imported user inputs. Putting them separately for aesthetic stacking.
    let bookTitleElement = document.createElement('p')
    
    let authorLabelElement = document.createElement('p')
    let authorElement = document.createElement('p')
   
    let pagesLabelElement = document.createElement('p')
    let pagesElement = document.createElement('p')
    
    let readLabelElement = document.createElement('p')
    let readElement = document.createElement('p')

    readElement.classList.add('readCheckClass')

//Change Read Status//
    let readButton = document.createElement('button')
   
//remove button//  
    let removeButton = document.createElement('button')

//Adding classes. Different classes for headers than generated info//
    titleLabelElement.classList.add('labelText')
    bookTitleElement.classList.add('bookText')
    authorLabelElement.classList.add('labelText')
    authorElement.classList.add('bookText')
    pagesLabelElement.classList.add('labelText')
    pagesElement.classList.add('bookText')
    readLabelElement.classList.add('labelText')

    readButton.classList.add('readButton')
    removeButton.classList.add('removeButton')

//Inserting object text//
    titleLabelElement.innerText = 'Title'
    bookTitleElement.innerText = this.title;
    authorLabelElement.innerText = 'Author'
    authorElement.innerText = this.author;
    pagesLabelElement.innerText = "Pages"
    pagesElement.innerText = this.pages;
    readLabelElement.innerText = "Read"

    let readStatus
    if (this.read == 1) {
        readStatus = true
        changeReadStatus(); //Checkbox default unchecked value is zero
    }
    else {
        readStatus = false
        changeReadStatus();
    }
    readButton.innerText = 'Read?'
    removeButton.innerText = 'Remove'

//appending//
    bookshelf.append(cover)
    cover.append(titleLabelElement)
    cover.append(bookTitleElement)
    cover.append(authorLabelElement)
    cover.append(authorElement)
    cover.append(pagesLabelElement)
    cover.append(pagesElement)
    cover.append(readLabelElement)
    cover.append(readElement)
    cover.append(readButton)
    cover.append(removeButton)

    readButton.addEventListener('click', function () {
        if (readStatus === true) {
            readStatus = false
            this.read = '0'
            changeReadStatus();
        }
        else if (readStatus === false) {
            readStatus = true
            this.read = '1'
            changeReadStatus();
        }
    })

    function changeReadStatus() {
        if (readStatus === false) {
            readElement.innerText = 'No'
        }
        else if (readStatus === true) {
            readElement.innerText = 'Yes'
        }


//Remove button event listener//
removeButton.addEventListener('click', function(){
    bookshelf.removeChild(cover);
    myLibrary.splice(cover.id,1);
    displayLibrary();
} )
}

}


//Remove above addbook2 when completed//


function addBook() {
    this.title = document.querySelector('#title').value,
    this.author = document.querySelector('#author').value,
    this.pages = document.querySelector('#pages').value,
    this.read = document.querySelector('#readStatus').value
}

let n = 0

addBook.prototype.sayBook = function(){
    //Creation of Dom elements//
    console.log(this.title, this.author, this.pages, this.read)
    let cover = document.createElement('div')
    cover.id = n
    n = n + 1
    cover.classList.add("cover")
    let titleLabelElement = document.createElement('p') //labels are not the imported user inputs. Putting them separately for aesthetic stacking.
    let bookTitleElement = document.createElement('p')

    let authorLabelElement = document.createElement('p')
    let authorElement = document.createElement('p')

    let pagesLabelElement = document.createElement('p')
    let pagesElement = document.createElement('p')

    let readLabelElement = document.createElement('p')
    let readElement = document.createElement('p')

    readElement.classList.add('readCheckClass')

    //Change Read Status//
    let readButton = document.createElement('button')

    //remove button//  
    let removeButton = document.createElement('button')

    //Adding classes. Different classes for headers than generated info//
    titleLabelElement.classList.add('labelText')
    bookTitleElement.classList.add('bookText')
    authorLabelElement.classList.add('labelText')
    authorElement.classList.add('bookText')
    pagesLabelElement.classList.add('labelText')
    pagesElement.classList.add('bookText')
    readLabelElement.classList.add('labelText')

    readButton.classList.add('readButton')
    removeButton.classList.add('removeButton')

    //Inserting object text//
    titleLabelElement.innerText = 'Title'
    bookTitleElement.innerText = this.title;
    authorLabelElement.innerText = 'Author'
    authorElement.innerText = this.author;
    pagesLabelElement.innerText = "Pages"
    pagesElement.innerText = this.pages;
    readLabelElement.innerText = "Read"

    readButton.innerText = 'Read?'
    removeButton.innerText = 'Remove'

    //appending//
    bookshelf.append(cover)
    cover.append(titleLabelElement)
    cover.append(bookTitleElement)
    cover.append(authorLabelElement)
    cover.append(authorElement)
    cover.append(pagesLabelElement)
    cover.append(pagesElement)
    cover.append(readLabelElement)
    cover.append(readElement)
    cover.append(readButton)
    cover.append(removeButton)

    let readStatus

    function assignReadStatus() {
        if (readStatus == '1') {
            readElement.innerText = 'Yes'
        }
        else {
            readElement.innerText = 'No'
        }
    }
    
    if (this.read == 'y'){
        readStatus = '1'
        assignReadStatus()
    }
    else {
        readStatus = '0'
        assignReadStatus()
    }


    readButton.addEventListener('click', function (){
    if (readStatus == '1'){
        readStatus = '0';
        myLibrary[cover.id].read = 'n' //Changes the read property of the object in the array by calling to the index of the object in the array
        console.log(myLibrary[cover.id]) 
        assignReadStatus();
    }
    else if (readStatus == '0'){
        readStatus = '1';
        myLibrary[cover.id].read = 'y'
        console.log(myLibrary[cover.id])
        assignReadStatus();
    }


    })
        //Remove button event listener//
        removeButton.addEventListener('click', function () {
            bookshelf.removeChild(cover);
            myLibrary.splice(cover.id, 1);
            displayLibrary();
        })
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
        n=0
    
}

const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', addBookToLibrary)

const book1 = new addBook2(
    'The Hobbit',
    'JRR Tolkein',
    '255',
    '1')

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
    n = 0;
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
