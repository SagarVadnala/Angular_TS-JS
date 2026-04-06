import { Component } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { MypipePipe } from '../customs/mypipe-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipe-sample',
  imports: [CommonModule, MypipePipe, FormsModule],
  templateUrl: './pipe-sample.html',
  styleUrl: './pipe-sample.css',
})
export class PipeSample {
    product:Product;
    DOB: Date;
    names: string[];
    searchText: string = '';

    constructor(){
      this.product = { price: 1000, productCode: 'P002', productId: 101, productName: "Monitor"};
      this.DOB = new Date("1987-10-10");
      this.names = ['pradeep','prakash', 'Perry', 'rajesh'];
    }
}
