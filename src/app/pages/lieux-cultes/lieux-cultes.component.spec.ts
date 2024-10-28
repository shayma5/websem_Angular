import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuxCultesComponent } from './lieux-cultes.component';

describe('LieuxCultesComponent', () => {
  let component: LieuxCultesComponent;
  let fixture: ComponentFixture<LieuxCultesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LieuxCultesComponent]
    });
    fixture = TestBed.createComponent(LieuxCultesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
