import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyValidator } from '../../customs/my-validator';

@Component({
  selector: 'app-product-model-driven',
  imports: [ReactiveFormsModule],
  templateUrl: './product-model-driven.html',
  styleUrl: './product-model-driven.css',
})
export class ProductModelDriven {

  frm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frm = this.fb.group({
      productId: this.fb.control('', [Validators.required]),
      productCode: this.fb.control('', [MyValidator.codeValidator]),
      productName: this.fb.control('', [Validators.required]),
      price: this.fb.control('', [Validators.pattern('^[0-9]+$')]),
      description: this.fb.group({
        shortDesc: this.fb.control(''),
        fullDesc: this.fb.control('')
      }),
      colors: this.fb.array([
        this.fb.control(''), this.fb.control('')
      ])
    })

    // this.frm = new FormGroup({
    //   productId: new FormControl()
    // })

  }

  saveProduct() {
    if (this.frm.valid) {
      let data = JSON.stringify(this.frm.value);
      alert('Product saved successfully' + data);
    }
  }


  enableValidation() {
    //find the control
    let productNameCtrl = this.frm.get('productName');
    //add new validation
    productNameCtrl?.addValidators(Validators.pattern('^[a-zA-Z0-9 ]+$'));
    //update UI
    productNameCtrl?.updateValueAndValidity();

  }

  get getColors(): FormArray {
    return this.frm.get('colors') as FormArray;
  }

  addMoreColor() {
    let newColorCtrl = this.fb.control('');
    this.getColors.push(newColorCtrl);
  }

  // removeColor(idx: number){
  //   this.getColors.removeAt(idx);
  // }

  reset() {
    this.frm.reset({
      productId: 0, productName: "test"
    })
  }

  update() {
    let product = {
      productId: 101,
      productName: 'test',
      description: {
        shortDesc: "short desc"
      }, colors: ['red', 'green', 'blue','black']
    };

    this.frm.patchValue(product);
  }



}
