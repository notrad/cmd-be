import { Component, OnInit } from '@angular/core';
//import patient from './patient.json';
//import doctor from './doctor.json'
import { viewAppointmentsApi } from '../../../../services/viewAppointments.service';
import { doctorlist } from './viewAppointmentDr.model';
import { patientlist} from './viewAppointmentPat.model';


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.scss']
})
// export class ViewAppointmentComponent implements OnInit {
//   patientlist: {
//     Name: string,
//     Contact: number,
//     Gender: string,
//     Age: string,
//     Email: string,
//     DOB: string,
//     BloodGroup: string,
//   }[] = patient;
//   doctorlist: {
//     Name: string,
//     Contact: number,
//     Email: string,
//     Speciality: string,
//     Npino: number,
//     PracticeLocation: string
//   }[] = doctor;
//   constructor() { }

//   ngOnInit(): void {
//   }

export class ViewAppointmentComponent implements OnInit {
  constructor(private api: viewAppointmentsApi) { }
  ngOnInit(): void {
    this.api.getPatientlist()
      .subscribe({
        next: (pat) => {
         this.patientlist=pat;
        }
      })

    this.api.getdoctorlist()
      .subscribe({
        next: (doc) => {
         this.doctorlist=doc;
        }
      })

  }
  patientlist:patientlist[]=[];
  doctorlist: doctorlist[]=[];


}
