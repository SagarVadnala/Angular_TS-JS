import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product';
import { Mydirective } from '../customs/mydirective';
@Component({
  selector: 'app-directive-sample',
  imports: [
    FormsModule,
    NgIf,
    Mydirective
  ],
  templateUrl: './directive-sample.html',
  styleUrl: './directive-sample.css',
})
export class DirectiveSample {
  constructor(){
  this.colors =['red','aqua','green']

  this.products = [
    {productId : 101, productname : "Mouse", ProductCode:'razer#1234',price : 3899 },

    {productId : 102, productname : 'keyboard', ProductCode:'Cosmic#1234',price : 2000 },

    {productId : 103, productname : 'Laptop', ProductCode:'LOQ',price : 75000 },
  ]
}
  num1 : number = 0;

  colors: String[];

  products : Product[];

  selectedColor : string = "red";



}
