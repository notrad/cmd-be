import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { View_Vitals } from '../cmd/appointments/component/view-appointment/components/view-edit-vitals/vitals.model';
@Injectable({
  providedIn: 'root'
})
export class ApiVitals {
 
  constructor(private http: HttpClient) { }
  postVitals(data:any){
    return this.http.post<View_Vitals>("http://localhost:3000/View-vitals/",data)
    .pipe(map((res:View_Vitals)=>{
      return res;
    }))
  }

}