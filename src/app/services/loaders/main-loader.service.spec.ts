import { TestBed } from '@angular/core/testing';

import { MainLoaderService } from './main-loader.service';

describe('MainLoaderService', () => {
  let service: MainLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
