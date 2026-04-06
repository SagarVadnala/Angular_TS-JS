export class Person {
    protected personId: number | undefined;
    personName: string | undefined | boolean;

    constructor();
    constructor(pid: number);
    constructor(pid: number, pname: string);

    constructor(pid?: number, pname?: string) {
        if (pid == null) {
            console.log('Person:Default constructor');
        }
        else if(pname == null)
        {
            console.log('Person: One parameterized constructor');
        }
        else {
            console.log('Person:Parameterized constructor');
            this.personId = pid;
            this.personName = pname;
        }
    }

    showInfo(): void {
        console.log('Id=' + this.personId);
        console.log('Name=' + this.personName);
    }
}

class Employee extends Person
{
    empId: number|undefined;

    constructor(){
       super();
       console.log('Employee: constructor');
    }
}


//let person = new Person();
//person.showInfo();

let emp = new Employee();
emp.personName = 'test';
emp.showInfo();