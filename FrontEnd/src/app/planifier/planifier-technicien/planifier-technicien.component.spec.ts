import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanifierTechnicienComponent } from './planifier-technicien.component';

describe('PlanifierTechnicienComponent', () => {
  let component: PlanifierTechnicienComponent;
  let fixture: ComponentFixture<PlanifierTechnicienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanifierTechnicienComponent]
    });
    fixture = TestBed.createComponent(PlanifierTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
