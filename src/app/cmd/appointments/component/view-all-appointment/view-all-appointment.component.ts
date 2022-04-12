import { Component, OnInit } from '@angular/core'; 
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
  showGiveFeedback=false;
  
  constructor(private appoinmentService:AppointmentsService) { }
  ngOnInit(): void {
    this.appoinmentService.getAllAppointments().subscribe(response=>{
      console.log(response);
      this.patinentsAppointmentList=response;
    });
  }

}
