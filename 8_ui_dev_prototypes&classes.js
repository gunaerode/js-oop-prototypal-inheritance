// let object = {};
// object.name = 'Guna';
// object.age = 26;

// object.getYear = function () {
//     console.log(this.age);
//     example();
// }

// object.showName = () => {
//     console.log(this.name);
// }

// function example() {
//     console.log(this);
// }

// object.getYear();
// object.showName();

// =============================

// let functionObject = {
//     getYear: function () {
//         return this.age;
//     },
//     showName() {
//         return this.name;
//     }
// }
// function createObject(name, age) {
// //     let object = {};
//     let object = Object.create(functionObject);
//     object.name = name;
//     object.age = age;

// //     object.showName = functionObject.showName;
// //     object.getYear = functionObject.getYear;

//     return object;
// }

// =========================================

// Use of prototype
let functionObject = {
    getYear: function () {
        return this.age;
    },
    showName() {
        return this.name;
    }
}
function createObject(name, age) {
//     let object = {};
    let object = Object.create(createObject.prototype);
    object.name = name;
    object.age = age;

//     object.showName = functionObject.showName;
//     object.getYear = functionObject.getYear;

    return object;
}

createObject.prototype.getYear = function () {
    return this.age;
}
createObject.prototype.showName = function () {
    return this.name;
}

let gunaObject = createObject("Guna", 26);
let collegeObject = createObject("GCEB", 26);

console.log(`gunaObject: ${gunaObject.showName()}`);
console.log(`collegeObject: ${collegeObject.showName()}`);

// with new keyword

function createObjectWithNew(name, age) {
//     let object = {};
// or
//     let object = Object.create(createObject.prototype);
    this.name = name;
    this.age = age;

//     object.showName = functionObject.showName;
//     object.getYear = functionObject.getYear;

//     return object;
// implicit return in new keyword
}

createObjectWithNew.prototype.getYear = function() {
    return this.age;
}

createObjectWithNew.prototype.showName = function() {
    return this.name;
}

let gunaObjectWithNew = new createObjectWithNew("GunaNew", 100);
let collegeObjectWithNew = new createObjectWithNew("CollegeNew", 99999999);

console.log(`gunaObjectWithNew: ${gunaObject.showName()}`);
console.log(`collegeObjectWithNew: ${collegeObject.showName()}`);


// with Class

class createObjectWithClass {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    showName() {
        return this.name;
    }
    showAge() {
        return this.age;
    }
}

let gunaObjectWithClass = new createObjectWithClass("GunaNewClass", 100);
let collegeObjectWithClass = new createObjectWithClass("CollegeNewClass", 99999999);

console.log(gunaObjectWithClass.showName());

for (let key in gunaObjectWithClass) {
    console.log(`${key} and ${gunaObjectWithClass[key]}`);
}

for (let key in gunaObjectWithNew) {
    if (gunaObjectWithNew.hasOwnProperty(key)) {
        console.log(`${key} and ${gunaObjectWithNew[key]}`);   
    }
}

console.log(`Instance check: ${gunaObjectWithNew instanceof createObjectWithNew}`);



// Doubts

// 1. why this is working in normal function but not in ReactJs class (why we need to use bind(this))
// 2. In property loop modern class not allowing to access 
//    the function but in normal class bassed contructor allow to iterate the prototype(that means function in class) 
