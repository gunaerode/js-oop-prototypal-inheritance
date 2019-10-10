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

//   console.log(book.getString()); // Note: throws an error when you try to access with object created for book like b1.getString()

//   const b1 = new book("Js");

//   console.log("b1:", b1);

// subclass
class table extends book {
  constructor(name, tableName) {
    super(name); // In prototype inheriten we use call, bind and apply
    this.tableName = tableName;
  }
}

const t1 = new table("table", "t1");

console.log("t1:", t1);
console.log("t1:", t1.bookName()); // In prototype inheritence throws error unless we have to add 1. table.prototype = Object.create(book.prototype); or table.prototype = new book("table"); before object creation
