import * as st from "./istudent";
import { Person } from "./person";

class Student implements st.IStudent {
    studentId: number;

    constructor(sid: number) {
        this.studentId = sid;
        let person = new Person();

        st.callMe();
    }

    showData(): void {
        console.log(`StudentId=${this.studentId}`);
    }
}