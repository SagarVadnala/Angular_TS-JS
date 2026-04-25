import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  productname : string = 'Angular';
ProductCode:string = 'ANG-001';
productSize = signal<string>("large");

  ShowAlert(): void {
    alert('product name is ' + this.productname);
  }
}

