import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AddPrescription {
  constructor(private http: HttpClient) { }
  postData(data:any){
    return this.http.post<any>("http://localhost:3000/add-prescription",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getData(){
    return this.http.get<any>("http://localhost:3000/add-prescription")
    .pipe(map((res:Object)=>{
      return res;
    }))
  }
  deleteData(id:number){
    return this.http.delete<any>("http://localhost:3000/add-prescription/"+id)
    .pipe(map((res:object)=>{
      return res;
    }))
  }
}