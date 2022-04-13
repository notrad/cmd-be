import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { GiveFeedback } from './feedback.module';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.scss']
})
export class ViewFeedbackComponent implements OnInit {
  
  feedbackForm !: FormGroup;
  feedarray : GiveFeedback = new GiveFeedback();
  feedbackResponse: any;
  @Input() argumentsValue: any;
  constructor(private router: Router, private formbuider: FormBuilder,private api : ApiService) {
    console.log(this.argumentsValue,'argumentsValue');
    
   }

  ngOnInit(): void {
    this.feedbackForm = this.formbuider.group({
      feedback1 : [''],
      feedback2 : [''],
      feedback3 : [''],
      feedback4 : [''],
      comments : ['']
    })
    this.getFeed('9')
    
  }
  onSudmit(){
    console.log(this.onSudmit);
  }
 
  addFeedback(){
   this.feedarray.feedback1 = this.feedbackForm.value.feedback1;
   this.feedarray.feedback2 = this.feedbackForm.value.feedback2;
   this.feedarray.feedback3 = this.feedbackForm.value.feedback3;
   this.feedarray.feedback4 = this.feedbackForm.value.feedback4;
   this.feedarray.comments = this.feedbackForm.value.comments;
   this.api.postFeedback(this.feedarray)
   .subscribe(res => {
     console.log(res);
     this.patchVakyes(res);
     alert("added succesfully");
     
     
   })
  
  }
  patchVakyes(res:any){
    this.feedbackForm.get('feedback1')?.setValue(res.feedback1);
    this.feedbackForm.get('feedback2')?.setValue(res.feedback2);
    this.feedbackForm.get('feedback3')?.setValue(res.feedback3);
    this.feedbackForm.get('feedback4')?.setValue(res.feedback4);
    this.feedbackForm.get('comments')?.setValue(res.comments);
    this.feedbackForm.get('feedback1')?.updateValueAndValidity();
    console.log(this.feedbackForm);
    
  }
  getFeed(id:any){
    let userFeedBack: any =  localStorage.getItem('userData');
    let paressedData = JSON.parse(userFeedBack);
    if(paressedData.feedback === "true") {
      this.api.getFeedback(id).subscribe({
        next:(res:any) => {
          debugger;
          console.log(res);
          this.patchVakyes(res[0])
  
        }
      })
    }
  }

}