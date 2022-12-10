import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInvoiceDateModalComponent } from './edit-invoice-date-modal.component';

describe('EditInvoiceDateModalComponent', () => {
  let component: EditInvoiceDateModalComponent;
  let fixture: ComponentFixture<EditInvoiceDateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInvoiceDateModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInvoiceDateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
