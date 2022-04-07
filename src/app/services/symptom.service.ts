import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SymptomsHistory } from '../cmd/patients/components/patient-info/components/view-symptons-history/components/add-edit-sympton-history/symptoms.model';
@Injectable({
  providedIn: 'root'
})
export class SymptomService {
 
  constructor(private http: HttpClient) { }
  postSymptom(data : SymptomsHistory){
    return this.http.post<SymptomsHistory>("http://localhost:3000/editSymptoms/",data)
}
getSymptom(){
  return this.http.get<SymptomsHistory[]>("http://localhost:3000/editSymptoms/")
}

deleteSymptom(id:number){
  return this.http.delete<SymptomsHistory>("http://localhost:3000/editSymptoms/"+id);
}

update(data: SymptomsHistory, id: number){
  return this.http.put<SymptomsHistory>("http://localhost:3000/editSymptoms/"+id,data)
}


}
