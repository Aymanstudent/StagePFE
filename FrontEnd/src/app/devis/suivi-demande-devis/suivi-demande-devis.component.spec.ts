import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviDemandeDevisComponent } from './suivi-demande-devis.component';

describe('SuiviDemandeDevisComponent', () => {
  let component: SuiviDemandeDevisComponent;
  let fixture: ComponentFixture<SuiviDemandeDevisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviDemandeDevisComponent]
    });
    fixture = TestBed.createComponent(SuiviDemandeDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
