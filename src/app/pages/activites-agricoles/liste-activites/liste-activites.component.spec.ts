import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeActivitesComponent } from './liste-activites.component';

describe('ListeActivitesComponent', () => {
  let component: ListeActivitesComponent;
  let fixture: ComponentFixture<ListeActivitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeActivitesComponent]
    });
    fixture = TestBed.createComponent(ListeActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
