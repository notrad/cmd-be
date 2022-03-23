import { Component, OnInit } from '@angular/core';
import { appointmentModel } from './appointmentModel';
import { AppointmentService } from './appointment.service';


@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.scss']
})
export class AppointmentHistoryComponent implements OnInit {

  constructor(private service: AppointmentService) { }
   appointments!: appointmentModel[];
   appointmentYears!: string[];
   filterYear:string = "";

  ngOnInit(): void {
    this.appointmentYears = this.service.getAppointmentYears();
    this.appointmentYears.sort(function(a:any, b:any){return b-a});
    this.appointments= this.service.getAppointmentsHistory();
  }

  filterOnYear(){
    // this.appointments = this.appointments.filter(appointment=>{
    //   return appointment.date.substring(6) === this.filterYear;
    // });
    this.appointments = this.service.getAppointmentsHistoryOnYear(this.filterYear);
  }

}
