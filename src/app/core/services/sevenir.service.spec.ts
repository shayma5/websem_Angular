import { TestBed } from '@angular/core/testing';

import { SevenirService } from './sevenir.service';

describe('SevenirService', () => {
  let service: SevenirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SevenirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
