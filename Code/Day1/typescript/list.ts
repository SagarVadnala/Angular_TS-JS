let arr: Array<string | number> = ['red', 'green', 'blue', 43];

//foreach
for (let a of arr) {
    console.log(a);
}

//forin
for (let indx in arr) {
    console.log(arr[indx]);
}

//rest operator
function addition(x: number, y: number, ...nums: number[]): void {
    let total = x + y;
    for (let n of nums) {
        total = total + n;
    }
    console.log(`Total= ${total}`);
}

addition(2, 3, 4, 5, 6, 7, 8, 9, 6, 4, 3, 4, 44, 3);


let a1 = [1, 2, 3];
let a2 = ['a', 'b', 'c'];

//spread operator
let a3 = [...a1, ...a2];
console.log(a3);


//Destructuring
let books = [{ bid: 1, bname: 'Angular' }, { bid: 2, bname: 'ReactJs Learning' }];
books.push({ bid: 3, bname: '.Net' });
let [angularbook, reactbook, ...restbooks] = books;
console.log(angularbook.bname);
console.log(reactbook.bname);
for (let book of restbooks) {
    console.log(book.bname);

}