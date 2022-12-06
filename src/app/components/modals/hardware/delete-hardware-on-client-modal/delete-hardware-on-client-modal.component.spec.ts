import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHardwareOnClientModalComponent } from './delete-hardware-on-client-modal.component';

describe('DeleteHardwareOnClientModalComponent', () => {
  let component: DeleteHardwareOnClientModalComponent;
  let fixture: ComponentFixture<DeleteHardwareOnClientModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHardwareOnClientModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteHardwareOnClientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
