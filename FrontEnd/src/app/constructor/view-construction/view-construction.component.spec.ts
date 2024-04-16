import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConstructionComponent } from './view-construction.component';

describe('ViewConstructionComponent', () => {
  let component: ViewConstructionComponent;
  let fixture: ComponentFixture<ViewConstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewConstructionComponent]
    });
    fixture = TestBed.createComponent(ViewConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
