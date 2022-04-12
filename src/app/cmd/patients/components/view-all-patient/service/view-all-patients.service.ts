import { Injectable } from '@angular/core';
import { PatientModel } from '../_models/patientModel';
import * as data from "../../../../../../../faker.json";
import { HttpClient } from '@angular/common/http';
import { map, pipe, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ViewAllPatientsService {

  patientData = data;


  getPatURL : string;
  constructor(private http: HttpClient) { 
    this.getPatURL = "http://localhost:3000/patient";
  }

  // getAllPatients():patientModel[]{
  //   return this.patientData.patients;
    
  // }


  getPatient():Observable<PatientModel[]>{
    return this.http.get<PatientModel[]>(this.getPatURL);
  }

    
}