// ES6 type constructor and inheritence using classes

class book {
  constructor(name) {
    this.name = name;
  }

  bookName() {
    return this.name;
  }

  // For static method no need to instantiate the object you can access with class name
  static getString() {
    return `Hi buddy today date is ${new Date()}`;
  }
}

console.log(book.getString()); // Note: throws an error when you try to access with object created for book like b1.getString()

const b1 = new book("Js");

console.log("b1:", b1);
