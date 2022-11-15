import { TestBed } from '@angular/core/testing';

import { AuditApiService } from './actions-api.service';

describe('AuditApiService', () => {
  let service: AuditApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
