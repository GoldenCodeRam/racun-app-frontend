import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserHardwareComponent } from './show-user-hardware.component';

describe('ShowUserHardwareComponent', () => {
  let component: ShowUserHardwareComponent;
  let fixture: ComponentFixture<ShowUserHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUserHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowUserHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
