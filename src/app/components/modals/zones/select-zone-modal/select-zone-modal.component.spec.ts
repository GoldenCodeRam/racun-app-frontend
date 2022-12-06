import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectZoneModalComponent } from './select-zone-modal.component';

describe('SelectZoneModalComponent', () => {
  let component: SelectZoneModalComponent;
  let fixture: ComponentFixture<SelectZoneModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectZoneModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectZoneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
