const s1 = "Hello";
console.log(typeof s1);

// If we use any function with string it will convert as object
const s2 = new String(s1);
console.log(typeof s2);

const book1 = {
  name: "js",
  bookName: function() {
    return this.name;
  }
};

console.log("book1:", book1);

const book2 = {
  name: "js - node.js",
  bookName: function() {
    return this.name;
  }
};

console.log("book2:", book2);
