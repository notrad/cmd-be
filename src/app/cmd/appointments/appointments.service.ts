import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  url = 'https://cmd-fe.herokuapp.com/api/view-all-patient-appointments';
  // postArray = [];
 
  constructor(private http:HttpClient) { }

  getAllAppointments() {
    return this.http.get(this.url);
  }
}
