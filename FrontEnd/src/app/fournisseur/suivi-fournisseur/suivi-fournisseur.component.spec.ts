import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviFournisseurComponent } from './suivi-fournisseur.component';

describe('SuiviFournisseurComponent', () => {
  let component: SuiviFournisseurComponent;
  let fixture: ComponentFixture<SuiviFournisseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviFournisseurComponent]
    });
    fixture = TestBed.createComponent(SuiviFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
