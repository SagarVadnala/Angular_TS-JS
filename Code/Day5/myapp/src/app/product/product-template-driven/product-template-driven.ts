import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-template-driven',
  imports: [FormsModule],
  templateUrl: './product-template-driven.html',
  styleUrl: './product-template-driven.css',
})
export class ProductTemplateDriven {
  product!: Product;

  constructor(){
    this.product = {price:0, productCode: "",productId:0, productName:""};
  }

  saveProduct(frm: NgForm){
    if(frm.valid){
      alert('Product Saved Successfully');
    }
  }
}

