import { TestBed } from '@angular/core/testing';

import { SearchFunctionService } from './search-function.service';

describe('SearchFunctionService', () => {
  let service: SearchFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
