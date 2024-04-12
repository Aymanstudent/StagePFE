import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotovoltaiqueComponent } from './photovoltaique.component';

describe('PhotovoltaiqueComponent', () => {
  let component: PhotovoltaiqueComponent;
  let fixture: ComponentFixture<PhotovoltaiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotovoltaiqueComponent]
    });
    fixture = TestBed.createComponent(PhotovoltaiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
