import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHardwareComponent } from './show-hardware.component';

describe('ShowHardwareComponent', () => {
  let component: ShowHardwareComponent;
  let fixture: ComponentFixture<ShowHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
