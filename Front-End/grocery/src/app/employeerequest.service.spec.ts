import { TestBed } from '@angular/core/testing';

import { EmployeerequestService } from './employeerequest.service';

describe('EmployeerequestService', () => {
  let service: EmployeerequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeerequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
