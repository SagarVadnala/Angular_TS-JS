import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../services/message';

@Component({
  selector: 'app-product-template-driven',
  imports: [FormsModule],
  templateUrl: './product-template-driven.html',
  styleUrl: './product-template-driven.css'
})
export class ProductTemplateDriven implements OnInit {
  product!: Product;
  productService = inject(ProductService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  enableEditMode: boolean = false;
  messageService = inject(MessageService);
  cdr = inject(ChangeDetectorRef);


  constructor() {
    this.product = { price: 0, productCode: "", productId: 0, productName: "" };
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      let productId = data['pid'];

      if (productId) {
        this.productService.getProductById(productId).subscribe({
          next: (resp) => {
            this.product = resp;
            this.enableEditMode = true;
            this.cdr.detectChanges();
          }
        });
      }
    })
  }

  saveProduct(frm: NgForm) {
    if (frm.valid) {
      let observer = {
        next: (response: any) => {
          if (response) {
            this.messageService.notify('Product Saved Successfully');
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

