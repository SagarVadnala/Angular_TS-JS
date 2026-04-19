class person {
    personName: string;
    personId: number;

    constructor(name: string, id: number) {
        this.personName = name;
        this.personId = id;
    }

    showInfo():void {
        console.log(`Name: ${this.personName}`);
        console.log(`Id: ${this.personId}`);
    }
}

var p1 = new person('Sagar', 101);
p1.showInfo();