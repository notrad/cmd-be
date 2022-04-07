import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoList } from '../cmd/patients/components/patient-info/infolist.module';

@Injectable({
  providedIn: 'root'
})
export class PatientInfoService {
 
  constructor(private http: HttpClient) { }
  postComment(data : infoList){
    return this.http.post<infoList>("http://localhost:3000/patientinfolist/",data)
}
getSymptom(){
  return this.http.get<infoList[]>("http://localhost:3000/patientinfolist/")
}

deleteSymptom(id:number){
  return this.http.delete<infoList>("http://localhost:3000/patientinfolist/"+id);
}




}
