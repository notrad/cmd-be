import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  url = 'http://localhost:3000/viewallappointment';
  // postArray = []
 
  constructor(private http:HttpClient) { }

  getAllAppointments() {
    return this.http.get(this.url);
  }
}
