import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.scss']
})
export class ViewFeedbackComponent implements OnInit {
  form = new FormGroup({});
 

  constructor() { }

  ngOnInit(): void {
    
  }
  onSudmit(){
    console.log(this.onSudmit);
  }
}