//Create a class with out a fix type and it will provided at instance creation

type ItemType = number | string;

class Store<T extends ItemType> {
    private list: T[];

    constructor(){
        this.list = [];
    }

    Additem(item: T): void{
        this.list.push(item);
        console.log("Item added successfully");
    }


    removeItem(): void{
        this.list.shift();
        console.log("Item removed successfully");
    }

    PrintItems(): void{
        for(let item of this.list){
            console.log(`Item : ${item}`);
        }
    }

}

let store = new Store<number>();
store.Additem(120);
store.Additem(10);
store.Additem(20);


store.removeItem();
store.PrintItems();