// Object protos
const book = {
  bookName: function() {
    return this.name;
  }
};

console.log("book:", book); // Note: object doesn't have prototype like book.prototype will throw error

// ----------- way 1
// const b1 = Object.create(book);
// b1.name = "JS";
// ------------------

// ----------- way 2
const b1 = Object.create(book, {
  name: { value: "JS - nodeJs" }
});
// ------------------

console.log("b1:", b1);
