import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
  constructor(private api: PatientInfoService, private _titleService: Title) { }

  ngOnInit(): void {
    this._titleService.setTitle('Patient Details | CMD');
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
