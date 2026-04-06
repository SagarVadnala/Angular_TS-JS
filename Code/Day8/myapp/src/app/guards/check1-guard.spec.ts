import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { check1Guard } from './check1-guard';
import { ProductModelDriven } from '../product/product-model-driven/product-model-driven';

describe('check1Guard', () => {
  const executeGuard: CanDeactivateFn<ProductModelDriven> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => check1Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
