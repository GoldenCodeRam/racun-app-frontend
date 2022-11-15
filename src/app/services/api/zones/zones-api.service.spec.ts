import { TestBed } from '@angular/core/testing';

import { ZonesApiService } from './zones-api.service';

describe('ZonesApiService', () => {
  let service: ZonesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZonesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
