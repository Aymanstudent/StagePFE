import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChantierComponent } from './liste-chantier.component';

describe('ListeChantierComponent', () => {
  let component: ListeChantierComponent;
  let fixture: ComponentFixture<ListeChantierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeChantierComponent]
    });
    fixture = TestBed.createComponent(ListeChantierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
