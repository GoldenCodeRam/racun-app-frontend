import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHardwareModalComponent } from './select-hardware-modal.component';

describe('SelectHardwareModalComponent', () => {
  let component: SelectHardwareModalComponent;
  let fixture: ComponentFixture<SelectHardwareModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectHardwareModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectHardwareModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
