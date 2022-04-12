import { Component, OnInit } from '@angular/core';
import { PatientModel } from './_models/patientModel';
import { ViewAllPatientsService } from './service/view-all-patients.service';
import { FormBuilder, FormGroup } from '@angular/forms';


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
  
    constructor(private formBuilder : FormBuilder, private service : ViewAllPatientsService) { }
  


  ngOnInit(): void {
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
