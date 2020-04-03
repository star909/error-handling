import { TestBed } from '@angular/core/testing';

import { HandlingApiService } from './handling-api.service';

describe('HandlingApiService', () => {
  let service: HandlingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandlingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
