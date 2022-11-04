import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowZoneComponent } from './show-zone.component';

describe('ShowZoneComponent', () => {
  let component: ShowZoneComponent;
  let fixture: ComponentFixture<ShowZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
