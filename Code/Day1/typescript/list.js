var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr = ['red', 'green', 'blue', 43];
//foreach
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var a = arr_1[_i];
    console.log(a);
}
//forin
for (var indx in arr) {
    console.log(arr[indx]);
}
//rest operator
function addition(x, y) {
    var nums = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        nums[_i - 2] = arguments[_i];
    }
    var total = x + y;
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var n = nums_1[_a];
        total = total + n;
    }
    console.log("Total= ".concat(total));
}
addition(2, 3, 4, 5, 6, 7, 8, 9, 6, 4, 3, 4, 44, 3);
var a1 = [1, 2, 3];
var a2 = ['a', 'b', 'c'];
//spread operator
var a3 = __spreadArray(__spreadArray([], a1, true), a2, true);
console.log(a3);
//Destructuring
var books = [{ bid: 1, bname: 'Angular' }, { bid: 2, bname: 'ReactJs Learning' }];
books.push({ bid: 3, bname: '.Net' });
var angularbook = books[0], reactbook = books[1], restbooks = books.slice(2);
console.log(angularbook.bname);
console.log(reactbook.bname);
for (var _a = 0, restbooks_1 = restbooks; _a < restbooks_1.length; _a++) {
    var book = restbooks_1[_a];
    console.log(book.bname);
}
