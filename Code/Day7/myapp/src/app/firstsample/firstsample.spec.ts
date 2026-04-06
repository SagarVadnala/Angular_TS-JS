import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Firstsample } from './firstsample';

describe('Firstsample', () => {
  let component: Firstsample;
  let fixture: ComponentFixture<Firstsample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Firstsample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Firstsample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
