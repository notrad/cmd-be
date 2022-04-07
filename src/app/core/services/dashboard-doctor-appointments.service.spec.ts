import { TestBed } from '@angular/core/testing';

import { DashboardDoctorAppointmentsService } from './dashboard-doctor-appointments.service';

describe('DashboardDoctorAppointmentsService', () => {
  let service: DashboardDoctorAppointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardDoctorAppointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
