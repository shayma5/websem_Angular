import { TestBed } from '@angular/core/testing';

import { ActiviteAgricoleService } from './activites-agricoles.service';

describe('ActiviteAgricoleService', () => {
  let service: ActiviteAgricoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiviteAgricoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
