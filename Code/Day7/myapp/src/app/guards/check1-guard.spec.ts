import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { check1Guard } from './check1-guard';

describe('check1Guard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => check1Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
