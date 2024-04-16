import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListConstructionComponent } from './view-list-construction.component';

describe('ViewListConstructionComponent', () => {
  let component: ViewListConstructionComponent;
  let fixture: ComponentFixture<ViewListConstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewListConstructionComponent]
    });
    fixture = TestBed.createComponent(ViewListConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
