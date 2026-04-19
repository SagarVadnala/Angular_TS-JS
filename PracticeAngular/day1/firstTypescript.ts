var i : number = 10;
var j : string = 'Sagar';
var isValid : boolean = true;

var x : any = 100;
console.log(i);
console.log(j);
console.log(isValid);
console.log(x);


//named function
function add(a : number, b : number) : number {
    return a + b;
}

//anonymous function
var sub = function(a : number, b : number) : number {
    return a - b;
}

//arrow function
var addArrow = (a : number, b : number) : number =>  a + b;

var a:number = 10; //global
let C :number = 20; // block scope
const R :number = 30; //block constant

{
    var a : number = 100; //global
    
}