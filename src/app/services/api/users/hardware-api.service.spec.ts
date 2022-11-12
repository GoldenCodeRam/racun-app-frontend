import { TestBed } from '@angular/core/testing';

import { HardwareApiService } from './hardware-api.service';

describe('HardwareApiService', () => {
  let service: HardwareApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardwareApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
