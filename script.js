
/*const book = {
    title: "The Hobbit",
    pages: 255,
    read: "Not Yet Read"
}
*/

//console.log(book.title, book.pages, book.read)//


function addBook(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

addBook.prototype.sayBook = function(){
    console.log(this.title, this.author, this.pages, this.read)
}

const book1 = new addBook('The Hobbit','JRR Tolkein', '255','Read')
const book2 = new addBook('Curious George', 'HA Rey', '15', 'Not Read')



book1.sayBook()
book2.sayBook()