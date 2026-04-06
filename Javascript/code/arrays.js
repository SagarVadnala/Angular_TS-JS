 //array

 const myArr = [1,2,3,4,5 ]
const myFrnds = ["a","s","r"]


const myarr2 = new Array(1,2,3,4);

 console.log(myArr[1]);

 // methods of arrays

//  myArr.push(6); // will add an elemet at end 
//  myArr.push(10);
//  console.log(myArr) 


//  myArr.pop(); // delets last element

//  myArr.unshift(9); // insert infront of array as element 0
//  myArr.shift(); // delets one element from the start 0 index


console.log(myArr.includes(9));
console.log(myArr.indexOf(2));

const newArr = myArr.join() // change tyope to string

console.log(myArr);
console.log(newArr); 




const SliceArr = myArr.slice(1,3) // just shows the op as elsments at index 1,2 only 
console.log("Slice",SliceArr); 
console.log("Orignal array: ",myArr);

const SpliceArr = myArr.splice(1,3) // remove the elements from orignal array and 
                                    //removes elements index at 1,2,3 elements removed from orig array 
console.log("Splice",SpliceArr); 
console.log("Orignal array: ",myArr);

 

