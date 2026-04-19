"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IStudent_1 = require("./IStudent");
const person_1 = require("./person");
class Student {
    studentId;
    constructor() {
        (0, IStudent_1.callMe)();
        let p = new person_1.person();
    }
    ShowData() {
        console.log(`Student ID: ${this.studentId}`);
    }
}
let s = new Student();
s.studentId = 101;
s.ShowData();
