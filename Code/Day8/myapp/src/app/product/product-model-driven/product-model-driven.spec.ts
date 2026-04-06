import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModelDriven } from './product-model-driven';

describe('ProductModelDriven', () => {
  let component: ProductModelDriven;
  let fixture: ComponentFixture<ProductModelDriven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductModelDriven]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductModelDriven);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
