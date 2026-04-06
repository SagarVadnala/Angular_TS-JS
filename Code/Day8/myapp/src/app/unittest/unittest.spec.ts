import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Unittest } from './unittest';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { ProductService } from "../services/product-service";
import { of } from "rxjs";


//Test suite
describe('Test unittest component', () => {

  let fixture: ComponentFixture<Unittest>;
  let component: Unittest;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Unittest]
    }).compileComponents();
    fixture = TestBed.createComponent(Unittest);
    component = fixture.componentInstance;



  })

  //Test spec
  it('Pass num1>0 num2>0 return result>0', () => {
    //Arrangement
    component.num1.set("1");
    component.num2.set("2");

    //Act
    component.add();

    //Assert
    expect(component.result()).toEqual(3);

  })

  it('Pass num1>0 num2>0 return result>0', () => {
    //Arrangement
    component.num1.set("-1");
    component.num2.set("-2");

    //Act
    component.add();

    //Assert
    expect(component.result()).toEqual(-3);

  })

  it('Pass num1>0, num2>0 return h4 tag with result', async () => {
    //Arrangement
    let de: DebugElement = fixture.debugElement.query(By.css('h4.abc'));
    let ele: HTMLElement = de.nativeElement;
    component.num1.set("1");
    component.num2.set("5");

    //Act
    component.add();
    await fixture.whenStable();

    //Assert
    expect(ele.textContent).toEqual("Total= 6");
  })

  it('should load products', async () => {
    // Arrangement
    const datastub = of([
      { productId: 1, productName: 'test1', productCode: 'p1', price: 123 },
      { productId: 2, productName: 'test2', productCode: 'p2', price: 234 }
    ]);
    const productService = fixture.debugElement.injector.get(ProductService);
    vi.spyOn(productService, 'getProducts').mockReturnValue(datastub);

    // Act
    component.loadProduct();
    fixture.detectChanges();
    await fixture.whenStable();

    // Assert
    expect(component.products().length).toEqual(2);
    expect(component.products().at(0)?.productId).toEqual(1);

  })

  it('Test form validation for valid case', () => {
    component.myform.controls['productId'].setValue(123);
    component.myform.controls['productName'].setValue("abc");

    expect(component.myform.valid).toBeTruthy();
  })

  it('Test form validation for invalid case', () => {
    component.myform.controls['productId'].setValue(null);
    component.myform.controls['productName'].setValue("abc");

    expect(component.myform.valid).toBeFalsy();
  })

  it('should trigger saveChanges method on submit click', async () => {
    await fixture.whenStable();
    vi.spyOn(component, "saveChanges");
    let de: DebugElement = fixture.debugElement.query(By.css('input[type=submit]'));
    let ele: HTMLElement = de.nativeElement;

    ele.click();

    expect(component.saveChanges).toHaveBeenCalledTimes(1);
  })

})