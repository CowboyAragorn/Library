//Popup changes input submissions display value to pop it up//
const popupButton = document.querySelector('#popupButton')
const inputContainer = document.querySelector('#inputContainer')
const closeBtn = document.querySelector('#closeBtn')
const submitBtn = document.querySelector('#submit')

//Makes the popup visible and then invisible when disabled//
createPopupButton.addEventListener('click', () => {
    inputContainer.style.display = "block"
})

closeBtn.addEventListener('click', () => {
    inputContainer.style.display = "none"
})


//Object constructor for the books. This thing is so powerful, whack//
function addBook() {
    this.title = document.querySelector('#title').value,
    this.author = document.querySelector('#author').value,
    this.pages = document.querySelector('#pages').value,
    this.read = document.querySelector('#readStatus').value
}

//n is here to assign id's to each book, increases by 1 for each book added//
let n = 0


//This big guy creates all dom elements, pins them to a cover, and has the functions/event listeners for each cover's buttons//
addBook.prototype.sayBook = function(){
    //Creation of Dom elements//
    console.log(this.title, this.author, this.pages, this.read)
    let cover = document.createElement('div')
    cover.id = n
    n = n + 1
    cover.classList.add("cover")
    
    let bookTitleElement = document.createElement('p')
    let authorElement = document.createElement('p')
    let pagesElement = document.createElement('p')
    let readElement = document.createElement('p')

    readElement.classList.add('readCheckClass')

    //Change Read Status//
    let readButton = document.createElement('button')
    readButton.classList.add('coverBtn')

    //remove button//  
    let removeButton = document.createElement('button')
    removeButton.classList.add('coverBtn')

    //Adding classes. Different classes for headers than generated info//
    bookTitleElement.classList.add('titleText')
    authorElement.classList.add('bookText')
    pagesElement.classList.add('bookText')

    readButton.classList.add('readButton')
    removeButton.classList.add('removeButton')

    //Inserting object text//
    bookTitleElement.innerText = this.title;
    authorElement.innerText = 'By: ' + this.author;
    pagesElement.innerText = this.pages + ' pages';
    removeButton.innerText = 'Remove'

    //appending//
    bookshelf.append(cover)
    cover.append(bookTitleElement)
    cover.append(authorElement)
    cover.append(pagesElement)
    cover.append(readButton)
    cover.append(removeButton)

    let readStatus
    let currentReadColor

//Readstatus assigned based on user input from popup//
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
    
//This.read assigns readstatus for use as variable in various assignments//
    if (this.read == '0'){
        readStatus = '0'
        assignReadStatus()
    }
    else {
        readStatus = '1'
        assignReadStatus()
    }

//Switches read status back and forth when click//
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

//Hovering changing colors for UI//
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
//Prototype done! Probably too long!//  
    }


//Object constructor inside function. Builds object, then pushes it to the array. Displays it and resets all the inputs//
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

//Resets inputs//
function reset(){
        document.querySelector('#title').value = ''
        document.querySelector('#author').value = ''
        document.querySelector('#pages').value = ''
        document.querySelector('#readStatus').value = ''
        n=0
    
}


//array declaration//
let myLibrary = [];
let indexDisplay
let libraryNumber

const bookshelf = document.querySelector('#bookshelf')

//Clears the screen, then loops through the array and calls the prototype//
function displayLibrary() {
    removeBooks()
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].sayBook())
        
    }
}

//clears all books to be replaced afterward//
function removeBooks() {
    n = 0;
    for (let i = 0; i < myLibrary.length; i++){
        while (bookshelf.firstChild){
            bookshelf.removeChild(bookshelf.firstChild)
        }
    }


}
