import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHardwareOnZoneModalComponent } from './delete-hardware-on-zone-modal.component';

describe('DeleteHardwareOnZoneModalComponent', () => {
  let component: DeleteHardwareOnZoneModalComponent;
  let fixture: ComponentFixture<DeleteHardwareOnZoneModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHardwareOnZoneModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteHardwareOnZoneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
