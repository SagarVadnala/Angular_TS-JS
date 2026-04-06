class Store {
    constructor() {
        this.list = [];
    }
    addIteminStore(item) {
        this.list.push('3232');
        console.log('New item stored');
    }
    removeItem() {
        this.list.shift();
        console.log('Item removed');
    }
    showAllItems() {
        console.log('--Show list---');
        for (let item of this.list) {
            console.log(`Item=${item}`);
        }
    }
}
let store = new Store();
store.addIteminStore(100);
store.addIteminStore(120);
store.addIteminStore(140);
store.addIteminStore(150);
store.removeItem();
store.showAllItems();
