import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ɵEmptyOutletComponent } from "@angular/router";
import { Product } from '../models/product';
import { Mydirective } from '../customs/mydirective';

@Component({
  selector: 'app-directive-sample',
  imports: [FormsModule, NgIf, Mydirective],
  templateUrl: './directive-sample.html',
  styleUrl: './directive-sample.css',
})
export class DirectiveSample {

  num1: number = 0;
  colors: string[];
  products: Product[];
  selectedColor: string = 'red';
  private router = inject(Router);

  constructor() {
    this.colors = ['red', 'green', 'blue'];

    this.products = [
      { productId: 101, price: 60000, productName: "LAptop", productCode: "P001" }
      , { productId: 102, price: 6000, productName: "Bag", productCode: "P002" }
      , { productId: 103, price: 20000, productName: "Keyboard", productCode: "P003" }
    ]
  }

  redirect(): void {
    //Pass route parameter
    //this.router.navigate(['pipe',this.num1]);

    //Pass querystring parameter
    this.router.navigate(['pipe', this.num1], {
      queryParams:
        { firstName: "pradeep", lastName: "shet" }
    });
  }

}
