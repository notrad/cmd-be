import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({

  providedIn: 'root'

})

export class ApiService {

 

  constructor(private http: HttpClient) { }

  getPrescription(){

    return this.http.get<Object>("http://localhost:3000/posts")

    .pipe(map((res:Object)=>{

      return res;

    }))

  }

  deletePrescription(id:number){

    return this.http.delete<object>("http://localhost:3000/posts/"+id)

    .pipe(map((res:object)=>{

      return res;

    }))

  }

}