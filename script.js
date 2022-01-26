//Popup changes input submissions display value to pop it up//

const popupButton = document.querySelector('#popupButton')
const inputContainer = document.querySelector('#inputContainer')
const closeBtn = document.querySelector('#closeBtn')
const submitBtn = document.querySelector('#submit')

inputContainer.style.display = 'none' //putting it as none first so that the css can be used to format the flex. Maybe inefficient?

createPopupButton.addEventListener('click', () => {
    inputContainer.style.display = "block"
})

closeBtn.addEventListener('click', () => {
    inputContainer.style.display = "none"
})



/*submitBtn.addEventListener('click', () => {
    inputContainer.style.display = "none"
})
*/





/*
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

*/
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
    readButton.classList.add('coverBtn')

    //remove button//  
    let removeButton = document.createElement('button')
    removeButton.classList.add('coverBtn')

    //Adding classes. Different classes for headers than generated info//
    titleLabelElement.classList.add('labelText')
    bookTitleElement.classList.add('titleText')
    authorLabelElement.classList.add('labelText')
    authorElement.classList.add('bookText')
    pagesLabelElement.classList.add('labelText')
    pagesElement.classList.add('bookText')
    readLabelElement.classList.add('labelText')

    readButton.classList.add('readButton')
    removeButton.classList.add('removeButton')

    //Inserting object text//
    //titleLabelElement.innerText = 'Title'
    bookTitleElement.innerText = this.title;
   // authorLabelElement.innerText = 'Author'
    authorElement.innerText = 'By: ' + this.author;
   // pagesLabelElement.innerText = "Pages"
    pagesElement.innerText = this.pages + ' pages';
   // readLabelElement.innerText = "Read"

    removeButton.innerText = 'Remove'

    //appending//
    bookshelf.append(cover)
    //cover.append(titleLabelElement)
    cover.append(bookTitleElement)
    //cover.append(authorLabelElement)
    cover.append(authorElement)
    //cover.append(pagesLabelElement)
    cover.append(pagesElement)
    //cover.append(readLabelElement)
    //cover.append(readElement)
    cover.append(readButton)
    cover.append(removeButton)

    let readStatus
    let currentReadColor

    function assignReadStatus() {
        if (readStatus == '0') {
            //readElement.innerText = 'No'
            currentReadColor = 'silver'
            readButton.style.backgroundColor = currentReadColor
            readButton.innerText = 'Not Yet Read'
        }
        else if (readStatus == '1') {
           // readElement.innerText = 'Yes'
           currentReadColor = 'seagreen'
            readButton.style.backgroundColor = currentReadColor
            readButton.innerText = 'Read'
        }
    }
    
    if (this.read == '0'){
        readStatus = '0'
        assignReadStatus()
    }
    else {
        readStatus = '1'
        assignReadStatus()
    }


    readButton.addEventListener('click', function () {
        if (readStatus == '1') {
            readStatus = '0';
            myLibrary[cover.id].read = '0' //Changes the read property of the object in the array by calling to the index of the object in the array
            console.log(myLibrary[cover.id])
            readButton.innerText = 'Not Yet Read'
            currentReadColor = 'silver'
            readButton.style.backgroundColor = currentReadColor
            assignReadStatus();
        }
        else if (readStatus == '0') {
            readStatus = '1';
            myLibrary[cover.id].read = '1'
            console.log(myLibrary[cover.id])
            readButton.innerText = 'Read'
            currentReadColor = 'seagreen'
            readButton.style.backgroundColor = currentReadColor
            assignReadStatus();
        }
    })

    readButton.addEventListener('mouseenter', () => {
        readButton.style.backgroundColor = 'yellow'
    })

    readButton.addEventListener('mouseleave', () => {
        readButton.style.backgroundColor = currentReadColor

    })

    removeButton.style.backgroundColor = 'salmon'

        //Remove button event listener//
        removeButton.addEventListener('click', function () {
            bookshelf.removeChild(cover);
            myLibrary.splice(cover.id, 1);
            displayLibrary();
        })

        removeButton.addEventListener('mouseenter', () => {
            removeButton.style.backgroundColor = 'red'
        })
        
         removeButton.addEventListener('mouseleave', () => {
             removeButton.style.backgroundColor = 'salmon'

         })
        
    }

function addBookToLibrary(){
    if (document.querySelector('#title').value == ''||
        document.querySelector('#author').value == '' ||
        document.querySelector('#pages').value == '' ||
        document.querySelector('#readStatus').value == '' ){
            alert('Please ensure all fields are completed')
            return
        }
    let book = new addBook(
        "document.querySelector('#title').value",
        "author: document.querySelector('#author').value",
        "document.querySelector('#pages').value",
        "document.querySelector('#readStatus').value")
    myLibrary.push(book);
    displayLibrary();
    reset();
}

//Submit Button actually puts the stuff on the page//
//submitBtn.addEventListener('click', addBookToLibrary)


//Submit button on popup. Ensures all fields are filled in then gets rid of popup//
submitBtn.addEventListener('click', () => {
if (document.querySelector('#title').value == '' ||
     document.querySelector('#author').value == '' ||
     document.querySelector('#pages').value == '' ||
     document.querySelector('#readStatus').value == '') {
     alert('Please ensure all fields are completed')
     return
    }
addBookToLibrary()
inputContainer.style.display = "none"
})

function reset(){
        document.querySelector('#title').value = ''
        document.querySelector('#author').value = ''
        document.querySelector('#pages').value = ''
        document.querySelector('#readStatus').value = ''
        n=0
    
}



/* const book1 = new addBook2(
    'The Hobbit',
    'JRR Tolkein',
    '255',
    '1')
*/
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
