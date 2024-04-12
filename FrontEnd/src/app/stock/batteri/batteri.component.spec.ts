import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteriComponent } from './batteri.component';

describe('BatteriComponent', () => {
  let component: BatteriComponent;
  let fixture: ComponentFixture<BatteriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatteriComponent]
    });
    fixture = TestBed.createComponent(BatteriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
