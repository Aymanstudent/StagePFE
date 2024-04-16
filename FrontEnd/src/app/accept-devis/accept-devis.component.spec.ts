import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptDevisComponent } from './accept-devis.component';

describe('AcceptDevisComponent', () => {
  let component: AcceptDevisComponent;
  let fixture: ComponentFixture<AcceptDevisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptDevisComponent]
    });
    fixture = TestBed.createComponent(AcceptDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
