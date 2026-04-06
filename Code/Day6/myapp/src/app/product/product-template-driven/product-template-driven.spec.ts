import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTemplateDriven } from './product-template-driven';

describe('ProductTemplateDriven', () => {
  let component: ProductTemplateDriven;
  let fixture: ComponentFixture<ProductTemplateDriven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTemplateDriven]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTemplateDriven);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
