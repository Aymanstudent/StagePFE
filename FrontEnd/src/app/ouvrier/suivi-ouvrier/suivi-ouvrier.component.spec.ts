import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviOuvrierComponent } from './suivi-ouvrier.component';

describe('SuiviOuvrierComponent', () => {
  let component: SuiviOuvrierComponent;
  let fixture: ComponentFixture<SuiviOuvrierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviOuvrierComponent]
    });
    fixture = TestBed.createComponent(SuiviOuvrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
