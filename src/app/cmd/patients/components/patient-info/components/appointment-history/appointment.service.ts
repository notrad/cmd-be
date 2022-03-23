import { Injectable } from '@angular/core';
import * as data from "./appointmentHistory.json";
import { appointmentModel } from './appointmentModel';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointmentData = data;
  
  constructor() { }

  getAppointmentsHistory():appointmentModel[]{
    return this.appointmentData.appointments;
  }

  getAppointmentYears():string[]{
    return this.appointmentData.appointments.map(appointment=>{
      return appointment.date.substring(6);
    });
  }

  getAppointmentsHistoryOnYear(year: string){
    return this.appointmentData.appointments.filter(appointment=>{
      return appointment.date.substring(6) === year;
    });
  }

}
