"use strict";
//Create a class with out a fix type and it will provided at instance creation
Object.defineProperty(exports, "__esModule", { value: true });
class Store {
    list;
    constructor() {
        this.list = [];
    }
    Additem(item) {
        this.list.push(item);
        console.log("Item added successfully");
    }
    removeItem() {
        this.list.shift();
        console.log("Item removed successfully");
    }
    PrintItems() {
        for (let item of this.list) {
            console.log(`Item : ${item}`);
        }
    }
}
let store = new Store();
store.Additem(120);
store.Additem(10);
store.Additem(20);
store.removeItem();
store.PrintItems();
