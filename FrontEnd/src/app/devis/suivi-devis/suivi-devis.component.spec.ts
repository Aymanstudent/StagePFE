import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviDevisComponent } from './suivi-devis.component';

describe('SuiviDevisComponent', () => {
  let component: SuiviDevisComponent;
  let fixture: ComponentFixture<SuiviDevisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviDevisComponent]
    });
    fixture = TestBed.createComponent(SuiviDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
