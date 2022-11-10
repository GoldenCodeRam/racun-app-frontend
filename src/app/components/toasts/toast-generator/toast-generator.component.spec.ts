import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastGeneratorComponent } from './toast-generator.component';

describe('ToastGeneratorComponent', () => {
  let component: ToastGeneratorComponent;
  let fixture: ComponentFixture<ToastGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
