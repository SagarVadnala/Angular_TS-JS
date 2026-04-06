import { Component, Output, signal } from '@angular/core';
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

  constructor() {
  }

  addCustomer() {
    this.customerList.update(current => [...current, this.customerName()])
    alert('New Customer Added');
  }

  readValues(data: string) {
    this.customerName.set(data);
  }

}
