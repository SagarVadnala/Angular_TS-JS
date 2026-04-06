import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-template-driven',
  imports: [FormsModule],
  templateUrl: './product-template-driven.html',
  styleUrl: './product-template-driven.css',
})
export class ProductTemplateDriven {
  product!: Product;

  productService = inject(ProductService);

  router = inject(Router);

  constructor() {
    this.product = { price: 0, productCode: "", productId: 0, productName: "" };
  }

  saveProduct(frm: NgForm) {
    if (frm.valid) {
      let observer = {
        next: (response: any) => {
          if (response) {
            alert('Product Saved Successfully');
            this.router.navigate(["product-list"]);
          }
        },
        error: (error: any) => {
          console.log("Error", error);
        },
        complete: () => {
          console.log('Call execution completed');
        }
      }
      this.productService.addProduct(this.product).subscribe(observer)
    }
  }
}

