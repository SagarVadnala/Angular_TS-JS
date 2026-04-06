import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableSample } from './observable-sample';

describe('ObservableSample', () => {
  let component: ObservableSample;
  let fixture: ComponentFixture<ObservableSample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableSample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableSample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
