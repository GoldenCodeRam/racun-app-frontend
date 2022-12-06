import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHardwareModalComponent } from './create-hardware-modal.component';

describe('CreateHardwareModalComponent', () => {
  let component: CreateHardwareModalComponent;
  let fixture: ComponentFixture<CreateHardwareModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHardwareModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHardwareModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
