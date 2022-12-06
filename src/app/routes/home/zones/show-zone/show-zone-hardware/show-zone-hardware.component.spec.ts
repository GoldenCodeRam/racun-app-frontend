import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowZoneHardwareComponent } from './show-zone-hardware.component';

describe('ShowZoneHardwareComponent', () => {
  let component: ShowZoneHardwareComponent;
  let fixture: ComponentFixture<ShowZoneHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowZoneHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowZoneHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
