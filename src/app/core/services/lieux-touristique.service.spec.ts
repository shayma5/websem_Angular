import { TestBed } from '@angular/core/testing';

import { LieuxTouristiqueService } from './lieux-touristique.service';

describe('LieuxTouristiqueService', () => {
  let service: LieuxTouristiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LieuxTouristiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
