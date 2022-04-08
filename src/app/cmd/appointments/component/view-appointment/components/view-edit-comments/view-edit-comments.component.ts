import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { PatientInfoService } from 'src/app/services/patientInfo.service';
import { SymptomService } from 'src/app/services/symptom.service';
import { ViewEditCommentService } from 'src/app/services/vieweditcomment.service';
import { commentList } from './commentlist.module';

@Component({
  selector: 'app-view-edit-comments',
  templateUrl: './view-edit-comments.component.html',
  styleUrls: ['./view-edit-comments.component.scss']
})
export class ViewEditCommentsComponent implements OnInit {

  addComments !: FormGroup
  constructor(private api :  ViewEditCommentService ,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addComments = this.formBuilder.group({
      comments: ['']
      
    });
  }
addComment() {
  
      this.api.postComment(this.addComments.value).subscribe({
        next: (res) => {
          alert('product added successfully');
          
          console.log(res);
          
        },
        error: () => {
          alert('error to add symptoms');
        },
      });
    }
}
