import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-edit-recommendation',
  templateUrl: './view-edit-recommendation.component.html',
  styleUrls: ['./view-edit-recommendation.component.scss']
})
export class ViewEditRecommendationComponent implements OnInit {
  patientIssueList: string[] = [];
  Issues: string[];
  index = 0
  DeleteIssue = "";
  pageNo: string = '1';
  patientSelected: string = "";
  patientIssueSelected: string = "";
  page1Heading: string = "Select a patient to book Appointment/Consultation";
  constructor() { 
    this.Issues =
      [
        "Dr. Susan",
        "Dr. Thomas",
        "Dr. Roger"
      ]
   }

  ngOnInit(): void {
  }
  changePage(): void {
    this.pageNo = '2';
  }

  prevPage(): void {
    this.pageNo = '1';
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