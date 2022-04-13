import { Component, OnInit } from '@angular/core';
import { PatientModel } from './_models/patientModel';
import { ViewAllPatientsService } from './service/view-all-patients.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-view-all-patient',
  templateUrl: './view-all-patient.component.html',
  styleUrls: ['./view-all-patient.component.scss']
})
export class ViewAllPatientComponent implements OnInit {

  p:number = 1;

  obj:PatientModel=new PatientModel();
  
  
  patientForm !: FormGroup;
   patients: PatientModel[]=[];
  pdata!:any;
  
    filterString: string = '';
  
    constructor(private formBuilder : FormBuilder, private service : ViewAllPatientsService, private _titleService: Title) { }
  


  ngOnInit(): void {
    this._titleService.setTitle("Patients | CMD");
    this.getpres();
    this.patientForm = this.formBuilder.group({
      id: [''],

      name: [''],
      
      country: [''],
      
      phone: [''],
  
      img: ['']
    })


  }
  getpres(){

    this.service. getPatient()
 
    .subscribe(res =>{
 
      this.pdata=res;
 
    })
  
}


}
