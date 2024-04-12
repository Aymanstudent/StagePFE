import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemeFixationComponent } from './systeme-fixation.component';

describe('SystemeFixationComponent', () => {
  let component: SystemeFixationComponent;
  let fixture: ComponentFixture<SystemeFixationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemeFixationComponent]
    });
    fixture = TestBed.createComponent(SystemeFixationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
