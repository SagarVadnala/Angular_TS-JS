import { IStudent, callMe } from "./IStudent";
import { person } from "./person";

class Student implements IStudent {
    studentId: number | undefined;

    constructor(){
        
        callMe();
        let p = new person();
    }

    ShowData(): void {
        console.log(`Student ID: ${this.studentId}`); 
    }
    
}

let s = new Student();
s.studentId = 101;
s.ShowData();