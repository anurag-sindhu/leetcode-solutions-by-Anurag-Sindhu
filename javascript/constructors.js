function Book(name, year) {
  console.log(this);
  this.name = name;
  this.year = year;
}

var myBook = Book("js book", 2014);
console.log(myBook instanceof Book);
console.log(window.name, window.year);

var myBook = new Book("js book", 2014);
console.log(myBook instanceof Book);
console.log(myBook.name, myBook.year);
