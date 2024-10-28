import { TestBed } from '@angular/core/testing';

import { LieuxCulteService } from './lieux-culte.service';

describe('LieuxCulteService', () => {
  let service: LieuxCulteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LieuxCulteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
