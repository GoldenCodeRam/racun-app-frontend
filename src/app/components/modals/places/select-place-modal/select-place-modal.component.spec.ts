import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPlaceModalComponent } from './select-place-modal.component';

describe('SelectPlaceModalComponent', () => {
  let component: SelectPlaceModalComponent;
  let fixture: ComponentFixture<SelectPlaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPlaceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPlaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
