import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { PatientInfoService } from 'src/app/services/patientInfo.service';
import { commentList } from './commentlist.module';

@Component({
  selector: 'app-view-edit-comments',
  templateUrl: './view-edit-comments.component.html',
  styleUrls: ['./view-edit-comments.component.scss']
})
export class ViewEditCommentsComponent implements OnInit {

  commentValue!: FormGroup;
  commentObj !: commentList;

 
  
  constructor( private api : PatientInfoService, private formbuilder : FormBuilder ) { }

  ngOnInit(): void {
    this.commentValue=this.formbuilder.group({
      Comment : ['']
    })
  }
  

  postComment(){
    
    console.log(this.commentValue);
     this.commentObj.Comment = this.commentValue.value.Comment;
  }

}
