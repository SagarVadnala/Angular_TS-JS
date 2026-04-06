import { TestBed } from '@angular/core/testing';

import { Newlogger } from './newlogger';

describe('Newlogger', () => {
  let service: Newlogger;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Newlogger);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
