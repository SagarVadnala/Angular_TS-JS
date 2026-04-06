import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
   productName: string = "Laptop";
   productCode: string = "P03232";
   productSize = signal<string>("Large");

   showAlert(): void{
    alert('Product Name=' + this.productName);
   }
}
