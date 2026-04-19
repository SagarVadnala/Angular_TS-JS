"use strict";
class person {
    personName;
    personId;
    constructor(name, id) {
        this.personName = name;
        this.personId = id;
    }
    showInfo() {
        console.log(`Name: ${this.personName}`);
        console.log(`Id: ${this.personId}`);
    }
}
var p1 = new person('Sagar', 101);
p1.showInfo();
