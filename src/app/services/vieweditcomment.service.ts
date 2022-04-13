import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { commentList } from '../cmd/appointments/component/view-appointment/components/view-close-appointment/commentlist.module';

@Injectable({
  providedIn: 'root'
})
export class ViewEditCommentService {
  
 
  constructor(private http: HttpClient) { }
  postComment(data : commentList){
    return this.http.post<commentList>("http://localhost:3000/vieweditcomment/",data)
}
}
