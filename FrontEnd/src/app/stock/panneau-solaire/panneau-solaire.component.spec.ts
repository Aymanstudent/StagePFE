import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanneauSolaireComponent } from './panneau-solaire.component';

describe('PanneauSolaireComponent', () => {
  let component: PanneauSolaireComponent;
  let fixture: ComponentFixture<PanneauSolaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanneauSolaireComponent]
    });
    fixture = TestBed.createComponent(PanneauSolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
