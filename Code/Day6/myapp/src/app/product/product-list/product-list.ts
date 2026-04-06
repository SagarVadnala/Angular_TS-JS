import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [JsonPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  products = signal<Product[]>([]);
  productService = inject(ProductService);

  constructor() {

  }

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(){
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
            alert('Product is deleted');
            this.loadProducts();
          }
        }, error: (err) => {
          console.log(err);
        }
      })
    }
  }

}
