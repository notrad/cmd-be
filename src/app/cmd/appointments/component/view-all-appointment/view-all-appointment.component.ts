import { Component, OnInit } from '@angular/core'; 
import { Title } from '@angular/platform-browser';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import AppointmentList from '../../../../../assets/mockData/appointmentList.json';
import { AppointmentsService } from '../../appointments.service';
import { ViewFeedbackComponent } from '../view-feedback/view-feedback.component';

@Component({
  selector: 'app-view-all-appointment',
  templateUrl: './view-all-appointment.component.html',
  styleUrls: ['./view-all-appointment.component.scss']
})
export class ViewAllAppointmentComponent implements OnInit {
  
  patinentsAppointmentList :any;

  constructor(private appoinmentService:AppointmentsService, private _titleService: Title, private modalService: BsModalService, private api : ApiService) { }
  modelRef: BsModalRef | undefined;
  ngOnInit(): void {
    this._titleService.setTitle('Dashboard | CMD');
    this.appoinmentService.getAllAppointments().subscribe(response=>{
      console.log(response);
      this.patinentsAppointmentList=response;
    });
  }
  checkFeed(userData: any){
    
    let data = {feedback:userData.feedbackGiven}
    let stringFyData = JSON.stringify(data)
    localStorage.setItem('userData',stringFyData)
    this.modelRef = this.modalService.show(ViewFeedbackComponent);
    

    // this.api.getFeedback(id).subscribe({
    //   next:(res) => {
    //     console.log(res);
    //     this.modelRef = this.modalService.show(ViewFeedbackComponent,{});
    //   }
    // })
  }

}
