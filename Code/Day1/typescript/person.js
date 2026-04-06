export class Person {
    constructor(pid, pname) {
        if (pid == null) {
            console.log('Person:Default constructor');
        }
        else if (pname == null) {
            console.log('Person: One parameterized constructor');
        }
        else {
            console.log('Person:Parameterized constructor');
            this.personId = pid;
            this.personName = pname;
        }
    }
    showInfo() {
        console.log('Id=' + this.personId);
        console.log('Name=' + this.personName);
    }
}
class Employee extends Person {
    constructor() {
        super();
        console.log('Employee: constructor');
    }
}
//let person = new Person();
//person.showInfo();
let emp = new Employee();
emp.personName = 'test';
emp.showInfo();
