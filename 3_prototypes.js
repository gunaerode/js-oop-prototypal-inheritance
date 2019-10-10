// constructor

function book(name) {
  this.name = name;
}

// prototype
book.prototype.bookName = function() {
  this.funCall = true;
};

// instantiate
const b1 = new book("JS");
const b2 = new book("JS - nodeJs");

console.log("b1:", b1);
console.log("b2:", b2); // When you click the object on console it will update as funCall = true
setTimeout(function() {
  console.log("b2:", b2.funCall);
});
b2.bookName();
console.log("b2 after funCall:", b2);
