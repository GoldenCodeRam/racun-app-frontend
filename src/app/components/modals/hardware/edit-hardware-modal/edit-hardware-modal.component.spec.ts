import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHardwareModalComponent } from './edit-hardware-modal.component';

describe('EditHardwareModalComponent', () => {
  let component: EditHardwareModalComponent;
  let fixture: ComponentFixture<EditHardwareModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHardwareModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHardwareModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
