import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  imports: [],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList {

  //passing data from parent to child
  //customers = input<string[]>();
  customers = signal<string[]>([]);

  //passing data from child to parent
  onSelection = output<string>();



  constructor(){
    
  }

  selectCustomer(customer:string){
    this.onSelection.emit(customer);
  }

  callMe(){
    
  }

}
