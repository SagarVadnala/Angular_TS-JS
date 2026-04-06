import { Component, signal } from '@angular/core';
import { form, FormField, pattern, required } from '@angular/forms/signals';

interface IProduct {
   productId: string,
   productName: string,
   productCode: string,
   price: string
}

@Component({
  selector: 'app-signal-form',
  imports: [FormField],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {

  productModel = signal<IProduct>({
    productCode: "",
    price: "",
    productId: "",
    productName: ""
  });
  productForm = form(this.productModel, (schema)=> {
    required(schema.productId, { message: "Product Id is mandatory"});
    required(schema.productName, { message: "Product Name is mandatory"});
    pattern(schema.productName, /^[a-zA-Z0-9 ]+$/, {message: "Product Name is invalid"});
  });

  saveProduct(){
    if(this.productForm().valid()){
      alert('Product saved successfully' + JSON.stringify(this.productForm().value()));
    }
  }

}
