import { TestBed } from '@angular/core/testing';

import { BillHtppService } from './bill-htpp.service';

describe('BillHtppService', () => {
  let service: BillHtppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillHtppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
