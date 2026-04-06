import { Component, inject } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { MypipePipe } from '../customs/mypipe-pipe';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { Logger } from '../services/logger';

@Component({
  selector: 'app-pipe-sample',
  imports: [CommonModule,
    MypipePipe,
    FormsModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink],
  //providers: [Logger],
  templateUrl: './pipe-sample.html',
  styleUrl: './pipe-sample.css',
})
export class PipeSample {
  product: Product;
  DOB: Date;
  names: string[];
  searchText: string = '';
  private activatedRoute = inject(ActivatedRoute);
  pId: string = '';
  firstName: string = '';
  lastName: string = '';

  constructor() {
    this.product = { price: 1000, productCode: 'P002', productId: 101, productName: "Monitor" };
    this.DOB = new Date("1987-10-10");
    this.names = ['pradeep', 'prakash', 'Perry', 'rajesh'];

    //To read the route parameter
    this.activatedRoute.params.subscribe(data => {
      this.pId = data['id'];
    })

    this.activatedRoute.queryParams.subscribe(data => {
      this.firstName = data['firstName'];
      this.lastName = data['lastName'];
    })
  }
}
