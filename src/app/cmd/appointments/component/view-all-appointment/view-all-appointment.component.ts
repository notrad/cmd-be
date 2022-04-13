import { Component, OnInit } from '@angular/core'; 
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/core/services/auth.service';
import AppointmentList from '../../../../../assets/mockData/appointmentList.json';
import { AppointmentsService } from '../../appointments.service';

@Component({
  selector: 'app-view-all-appointment',
  templateUrl: './view-all-appointment.component.html',
  styleUrls: ['./view-all-appointment.component.scss']
})
export class ViewAllAppointmentComponent implements OnInit {
  patinentsAppointmentList :any;

  constructor(private appoinmentService:AppointmentsService, private _titleService: Title) { }

  ngOnInit(): void {
    this._titleService.setTitle('Dashboard | CMD');
    this.appoinmentService.getAllAppointments().subscribe(response=>{
      console.log(response);
      this.patinentsAppointmentList=response;
    });
  }

}
