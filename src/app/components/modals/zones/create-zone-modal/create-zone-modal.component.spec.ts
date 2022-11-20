import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateZoneModalComponent } from './create-zone-modal.component';

describe('CreateZoneModalComponent', () => {
  let component: CreateZoneModalComponent;
  let fixture: ComponentFixture<CreateZoneModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateZoneModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateZoneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
