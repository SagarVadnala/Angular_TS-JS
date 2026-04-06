import { Component, ElementRef, Output, signal, viewChild } from '@angular/core';
import { CustomerList } from "../customer-list/customer-list";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-customer-add',
  imports: [CustomerList, JsonPipe],
  templateUrl: './customer-add.html',
  styleUrl: './customer-add.css',
})
export class CustomerAdd {

  customerName = signal<string>("");
  customerList = signal<string[]>([]);
  customerListComp = viewChild<CustomerList>("clist");

  divAlert = viewChild<ElementRef|undefined>("divAlert");

  constructor() {
  }

  addCustomer() {
    //this.customerList.update(current => [...current, this.customerName()])
    //alert('New Customer Added');
    this.customerListComp()?.customers()?.push(this.customerName());
  
    //this.divAlert()?.nativeElement.innerText = "New Customer Added";
    
  }

  readValues(data: string) {
    this.customerName.set(data);
  }

}
