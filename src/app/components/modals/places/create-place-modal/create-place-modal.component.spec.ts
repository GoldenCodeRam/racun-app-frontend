import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlaceModalComponent } from './create-place-modal.component';

describe('CreatePlaceModalComponent', () => {
  let component: CreatePlaceModalComponent;
  let fixture: ComponentFixture<CreatePlaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePlaceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
