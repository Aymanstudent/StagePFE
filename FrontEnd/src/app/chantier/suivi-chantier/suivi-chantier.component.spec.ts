import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviChantierComponent } from './suivi-chantier.component';

describe('SuiviChantierComponent', () => {
  let component: SuiviChantierComponent;
  let fixture: ComponentFixture<SuiviChantierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviChantierComponent]
    });
    fixture = TestBed.createComponent(SuiviChantierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
