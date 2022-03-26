import { Component, OnInit } from '@angular/core'; 
import { AuthService } from 'src/app/core/services/auth.service';
import AppointmentList from '../../../../../assets/mockData/appointmentList.json';

@Component({
  selector: 'app-view-all-appointment',
  templateUrl: './view-all-appointment.component.html',
  styleUrls: ['./view-all-appointment.component.scss']
})
export class ViewAllAppointmentComponent implements OnInit {
  patinentsAppointmentList =AppointmentList;
  constructor(public _auth: AuthService) { }

  ngOnInit(): void {  }

}
