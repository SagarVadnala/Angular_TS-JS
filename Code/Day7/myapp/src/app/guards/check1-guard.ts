import { CanDeactivateFn } from '@angular/router';
import { ProductModelDriven } from '../product/product-model-driven/product-model-driven';

export const check1Guard: CanDeactivateFn<ProductModelDriven> = (component, currentRoute, currentState, nextState) => {

  if (component.frm.valid) {
    let confirmLeave = confirm('Do you really wish to leave the page?');
    if (confirmLeave) {
      component.saveProduct();
    }
    return confirmLeave;
  }
  return true;

};
