import { TestBed } from '@angular/core/testing';

import { UrlServiceService } from '../../src/app/url-service.service';

describe('UrlServiceService', () => {
  let service: UrlServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
