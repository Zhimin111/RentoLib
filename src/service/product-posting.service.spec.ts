import { TestBed } from '@angular/core/testing';

import { ProductPostingService } from './product-posting.service';

describe('ProductPostingService', () => {
  let service: ProductPostingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductPostingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
