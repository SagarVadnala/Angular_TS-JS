import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { MessageService } from '../../services/message';

@Component({
  selector: 'app-product-list',
  imports: [JsonPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  products = signal<Product[]>([]);
  productService = inject(ProductService);
  router = inject(Router);
  messageService =inject(MessageService);

  constructor() {

  }

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts() {
    this.productService.getProducts().subscribe({
      next: (response) => {
        console.log(response);
        this.products.set(response);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  deleteProduct(productToDelete: Product) {
    let confirmDelete = confirm(`Do you wish to delete ${productToDelete.productName}?`);

    if (confirmDelete) {
      this.productService.deleteProduct(productToDelete.productId ?? 0).subscribe({
        next: (resp) => {
          if (resp) {
            this.messageService.notify('Product is deleted');
            this.loadProducts();
          }
        }, error: (err) => {
          console.log(err);
        }
      })
    }
  }

  editProduct(productToEdit: Product) {
    this.router.navigate(['templatedriven'], {
      queryParams: {
        pid: productToEdit.productId
      }
    });
  }

}
