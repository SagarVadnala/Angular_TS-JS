import { Person } from "./person";
class Student {
    constructor(sid) {
        this.studentId = sid;
        let person = new Person();
    }
    showData() {
        console.log(`StudentId=${this.studentId}`);
    }
}
