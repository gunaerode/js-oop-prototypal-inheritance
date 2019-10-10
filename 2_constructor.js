// constructor

function book(name) {
  this.name = name;
  this.bookName = function() {
    // It will be in constructor
    return this.name;
  };
}

// instantiate
const b1 = new book("JS");
const b2 = new book("JS - nodeJs");

console.log("b2:", b2);
