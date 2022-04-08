import { Component, OnInit } from '@angular/core';
import { PatientInfoService } from '../../../../services/patientInfo.service';
import { infoList } from './infolist.module';
//import info from '../../../../../../faker.json'; // importing json file

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {

  
infolist: infoList[] = [];
  constructor(private api: PatientInfoService) { }

  ngOnInit(): void {
    this.getPatientInfo();
  }

  getPatientInfo(){
    this.api.getSymptom()
    .subscribe({
      next: (res) => {
        console.log(res);
        this.infolist= res;
      }
    })
  }

}
