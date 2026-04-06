var a: string = 'pradeep';
var b: number = 120.5;
var c: boolean = true;
var d: any = 'sdfsd';
d = 122;


console.log(a);
console.log(b);
console.log(c);

let i = 10;
var j = 20;
if (true) {
    let i = 100;
    var j = 200;
    console.log(i);
    console.log(j);
}
console.log(i);
console.log(j);


function add(x:number, y:number): number{
    return x+y;
}
console.log("Named function =" +add(1,2));

let add1 = function(x:number, y:number): number {
    return x+y;
}
console.log("Anonymous function =" +add1(1,2));

let add2 = (x:number, y:number): number => x+y;
console.log("Arrow function =" +add2(1,2));
