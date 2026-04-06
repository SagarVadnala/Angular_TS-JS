
class Store<T>{

    private list: T[];

    constructor(){
        this.list = [];
    }

    addIteminStore(item: T){
        this.list.push(item);
        console.log('New item stored');
    }

    removeItem(){
        this.list.shift();
        console.log('Item removed');
    }

    showAllItems(){
        console.log('--Show list---');
        for(let item of this.list){
            console.log(`Item=${item}`);
        }
    }
}

let store = new Store<number>();
store.addIteminStore(100);
store.addIteminStore(120);
store.addIteminStore(140);
store.addIteminStore(150);

store.removeItem();

store.showAllItems();


class Store1{

    print<T>(message: T){
        console.log('Message=' + message);
    }
}

let store1= new Store1();
store1.print<string>("fdsfdsfgsfdsfsffdsf");