var a = 45;
console.log(`print variable "a" whn its number ${a} `);
var a= "Sagar"; 
console.log(`print variable "a" whn its string ${a} `);
// VAR is  global scoped and can be changes  it will be same in a block also

let letA = 45
console.log(`Outer of block variable value of LetA is : ${letA}`);
{

    let letA = "inblock"
console.log(`Inblock variable value of LetA is : ${letA}`);
// block scoped and the value can be reassigned 
/*
eg:
let a = 45
a= 'strinf' or num 

but let a = 45;
let a = 50 ; // will not work

*/
}


//const

const auther = 'sagar';

console.log("Const value is global scoped and cant be changed or assigned ");