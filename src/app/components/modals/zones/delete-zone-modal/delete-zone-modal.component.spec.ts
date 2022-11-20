import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteZoneModalComponent } from './delete-zone-modal.component';

describe('DeleteZoneModalComponent', () => {
  let component: DeleteZoneModalComponent;
  let fixture: ComponentFixture<DeleteZoneModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteZoneModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteZoneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
