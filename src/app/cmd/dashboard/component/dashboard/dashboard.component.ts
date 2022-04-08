import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardDoctorAppointmentsService } from 'src/app/core/services/dashboard-doctor-appointments.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  patinentsAppointmentList: any[] = [];
  selectedValue: string = '';
  imageurl='https://www.unwomen.org/sites/default/files/Headquarters/Images/Sections/Partnerships/GoodwillAmbassadors/Emma-Watson-headshot-2016_300pxTall.jpg?la=en';
  employeeDataObserver: Subscription = new Subscription;

 
    

  constructor(private _doctorAppointmentsList: DashboardDoctorAppointmentsService) { }

  ngOnInit(): void {
    this.employeeDataObserver = this._doctorAppointmentsList.getDoctorAppointmentList().subscribe(
      {
        next: (response) => {
          this.patinentsAppointmentList = response;
        },

        error: (error) => {
          console.log(error);
        }
      }

    );
  }
  cancelledNumber=0;
  acceptednumber=0;
  totalnumber=0;
 conformBtn(){
   this.acceptednumber=this.acceptednumber+1;
   this.totalnumber=this.acceptednumber+this.cancelledNumber;
 }
 cancelledBtn(){
   this.cancelledNumber=this.cancelledNumber+1;
   this.totalnumber=this.cancelledNumber+this.acceptednumber;
 }
}
