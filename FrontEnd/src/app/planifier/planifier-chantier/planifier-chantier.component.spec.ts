import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanifierChantierComponent } from './planifier-chantier.component';

describe('PlanifierChantierComponent', () => {
  let component: PlanifierChantierComponent;
  let fixture: ComponentFixture<PlanifierChantierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanifierChantierComponent]
    });
    fixture = TestBed.createComponent(PlanifierChantierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
