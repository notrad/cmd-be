import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { prescriptionHistory } from '../cmd/patients/components/patient-info/components/prescription-history/prescriptionHistory.model';

@Injectable({
  providedIn: 'root'
})
export class prescriptionApi {
 
  constructor(private http: HttpClient) { }
  getPrescription(){
    return this.http.get<prescriptionHistory[]>("http://localhost:3000/prescription-history")
    .pipe(map((res:prescriptionHistory[])=>{
      return res;
    }))
  }
//   deletePrescription(id:number){
//     return this.http.delete<prescriptionHistory>("http://localhost:3000/prescription-history/"+id)
//     .pipe(map((res:prescriptionHistory)=>{
//       return res;
//     }))
//   }
}
