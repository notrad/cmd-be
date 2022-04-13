import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { comment } from "src/app/cmd/appointments/component/view-appointment/components/view-edit-comments/comment.model";

Injectable({
    providedIn: 'root'
})

export class Apicomment {
     
    constructor(private http: HttpClient){}
    putcomment(data:any){
        return this.http.post<comment>(" http://localhost:3000/add-comment",data)
        .pipe(map((res:comment)=>{

        } ))
       
    }
}