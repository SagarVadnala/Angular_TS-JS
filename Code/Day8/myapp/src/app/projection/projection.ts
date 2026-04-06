import { Component } from '@angular/core';
import { Article } from "./article/article";
import { CustomerAdd } from '../customer/customer-add/customer-add';

@Component({
  selector: 'app-projection',
  imports: [Article],
  templateUrl: './projection.html',
  styleUrl: './projection.css',
})
export class Projection {

}
