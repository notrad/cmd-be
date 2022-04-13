import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCloseAppointmentComponent } from './view-close-appointment.component';

describe('ViewCloseAppointmentComponent', () => {
  let component: ViewCloseAppointmentComponent;
  let fixture: ComponentFixture<ViewCloseAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCloseAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCloseAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
