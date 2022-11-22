import { TestBed } from '@angular/core/testing';

import { ServicesApiServicee } from './service-api.service';

describe('ServiceApiService', () => {
  let service: ServicesApiServicee;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesApiServicee);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
