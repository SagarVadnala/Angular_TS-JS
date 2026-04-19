"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let arr = ['red', 'green', 'blue', 23, true, 45.67];
let array = ['red', 'green', 'blue'];
let array1 = ['red', 'green', 'blue'];
let a1 = [1, 2, 3, 4, 5];
let a2 = [1, 2, 3, 4, 5];
let a3 = [...a1, ...a2]; // spread operator :
//   used to expand the elements of an array into individual elements
console.log(a3); // added of a1 and a2
// rest parameter or opeerator :
//  : used to represent an indefinite number of arguments as an array
function add(a, b, ...rest) {
    let result = a + b;
    for (let num of rest) {
        result += num;
    }
    return result;
}
console.log(add(10, 20, 2, 3, 4, 5));
//------------------------------------------------
let book = [{ id: 101, title: "Angular", price: 500 },
    { id: 102, title: "TypeScript", price: 400 },
    { id: 103, title: "JavaScript", price: 300 }];
//nomraly we will access it usinf book[0].id, book[0].title, book[0].price
// destructuring : used to unpack values from arrays or properties from objects into distinct variables
let [b1, b2, b3] = book;
console.log(b1?.id); // 101
