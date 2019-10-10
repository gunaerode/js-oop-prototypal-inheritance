// constructor

function book(name) {
  this.name = name;
}

// prototype
book.prototype.bookName = function() {
  this.funCall = true;
  return this.name;
};

// instantiate
const b1 = new book("JS");
const b2 = new book("JS - nodeJs");

console.log("b1:", b1, "b2:", b2);

// --------- Way 1
// table constructor
function table(name, tableName) {
  book.call(this, name);
  this.tableName = tableName;
}

// with call or apply and use below
table.prototype = Object.create(book.prototype);

// Instantiate
const t1 = new table("table", "t1");

// To change constructor
// table.prototype.constructor = table;

console.log("t1:", t1);
// ---------------

// --------- Way 2
// table constructor
// function table(tableName) {
//   this.tableName = tableName;
// }

//  without call or apply
// table.prototype = new book("table");

// Instantiate
// const t1 = new table("t1");

// To change constructor
// //table.prototype.constructor = table;

// console.log("t1:", t1);
// ---------------
