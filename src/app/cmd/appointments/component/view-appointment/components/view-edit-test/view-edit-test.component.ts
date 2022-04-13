import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-edit-test',
  templateUrl: './view-edit-test.component.html',
  styleUrls: ['./view-edit-test.component.scss']
})
export class ViewEditTestComponent implements OnInit {
  patientIssueList: string[] = [];
  Issues: string[];
  index = 0
  DeleteIssue = "";
  patientSelected: string = "";
  patientIssueSelected: string = "";
 
  constructor() { 
    this.Issues =
      [
        "Electrocardiogram",
        "Exercise Stress Test ",
        "Creatine Kinase (CK)"
      ]
   }

  ngOnInit(): void {
  }
  AddIssueList(value: string): void {
    if (this.patientIssueList.indexOf(value) >= 0 || value == "") {
      return;
    }
    else {
      this.patientIssueList.push(value);
    }

  }
  erase() {
    //this.Issues = '';
  }
  deleteIssue(i: number) {
    //  delete this.patientIssueList[i];
    this.patientIssueList.splice(i, 1)
    console.log(this.patientIssueList)

  }

}

