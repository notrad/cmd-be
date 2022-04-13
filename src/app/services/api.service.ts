import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PrescriptionModel } from '../cmd/appointments/component/view-appointment/components/view-all-prescription/component/add-edit-prescription/prescriptionmodule';
import { GiveFeedback } from '../cmd/appointments/component/view-feedback/feedback.module';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
 
  constructor(private http: HttpClient) { }

  postPrescription(data : any){

    return this.http.post<PrescriptionModel>("http://localhost:3000/ViewAllPrescription", data)
    .pipe(map((res: any)=>{
    }))
  }
  getPrescription(){
    return this.http.get<Object>("http://localhost:3000/ViewAllPrescription")
    .pipe(map((res:Object)=>{
      return res;
    }))
  }
  deletePrescription(id:number){
    return this.http.delete<object>("http://localhost:3000/ViewAllPrescription/"+id)
    .pipe(map((res:object)=>{
      return res;
    }))
  }
  editPres(id:string){
    return this.http.get<object>("http://localhost:3000/ViewAllPrescription/"+id)
  }
  updatePrescription(data :object,id: string){
    return this.http.post<any>("http://localhost:3000/ViewAllPrescription"+id,data)
    .pipe(map((res: any)=>{
      return res;
    }))
  }
  
  postFeedback(data:any){
    return this.http.post<any>("http://localhost:3000/feedback/",data)
  }
  getFeedback(id:any){
    return this.http.get<any>("http://localhost:3000/feedback?id="+ id)

  }
}
