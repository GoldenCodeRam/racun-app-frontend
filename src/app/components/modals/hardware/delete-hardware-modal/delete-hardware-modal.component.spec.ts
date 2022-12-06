import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHardwareModalComponent } from './delete-hardware-modal.component';

describe('DeleteHardwareModalComponent', () => {
  let component: DeleteHardwareModalComponent;
  let fixture: ComponentFixture<DeleteHardwareModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHardwareModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteHardwareModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
