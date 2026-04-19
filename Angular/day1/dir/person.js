"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
class person {
    personName;
    personID;
    constructor(pid, pname) {
        if (pid == undefined) {
            console.log(" defaultconstructor called");
        }
        else {
            console.log("parameter constructor called");
            this.personName = pname;
            this.personID = pid;
        }
    }
    // showInfo():void ;
    showInfo(personID, personName) {
        console.log("person name is " + this.personName);
        console.log("person id is " + this.personID);
    }
}
exports.person = person;
// let p1 = new person();
// let p2 = new person(101, "John");
// p2.showInfo();
//inheritance :  take over all properties and methods of parent class
class employee extends person {
    empID;
    constructor() {
        super(); // call parent class constructor  
        //empty calles default cobnstructor of parent class
        console.log("employee class constructor called");
    }
}
let emp1 = new employee();
emp1.personID = 201;
emp1.personName = "Smith";
emp1.empID = 301;
emp1.showInfo();
//proteted and provate diff:
//protected : can be accessed in the class and its child
//               class but not outside of the class
//private : can be accessed only in the class where 
//       it is defined, not in child class and not outside of the class
