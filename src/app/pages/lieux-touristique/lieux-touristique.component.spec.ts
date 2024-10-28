import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuxTouristiqueComponent } from './lieux-touristique.component';

describe('LieuxTouristiqueComponent', () => {
  let component: LieuxTouristiqueComponent;
  let fixture: ComponentFixture<LieuxTouristiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LieuxTouristiqueComponent]
    });
    fixture = TestBed.createComponent(LieuxTouristiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
