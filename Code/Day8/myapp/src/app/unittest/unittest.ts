import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../services/product-service';
import { Product } from '../models/product';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-unittest',
  imports: [ReactiveFormsModule],
  templateUrl: './unittest.html',
  styleUrl: './unittest.css',
})
export class Unittest implements OnInit {



  num1 = signal<string>("");
  num2 = signal<string>("");
  result = signal<number>(0);
  productService = inject(ProductService);
  products = signal<Product[]>([]);

  myform: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myform = this.fb.group({
      productId: this.fb.control('', [Validators.required]),
      productName: this.fb.control('')
    })
  }

  add() {
    this.result.set(Number(this.num1()) + Number(this.num2()));
  }

  loadProduct() {
    this.productService.getProducts().subscribe({
      next: (resp) => {
        this.products.set(resp);
      }
    })
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  saveChanges() {
    if (this.myform.valid) {
      alert('Product saved successsfully');
    }
  }

}
