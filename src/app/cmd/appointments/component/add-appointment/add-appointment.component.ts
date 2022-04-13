import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {


  selected !: Date;
  //progressbar
  steps: number[] = [1, 2, 3, 4];
  compleatedSteps: number[] = [];
  currentStep: number = 1;
  page1Heading: string = "Select a patient to book Appointment/Consultation";
  page2Heading: string = "Choose reason / Type reason for Appointment/Consultation";
   page3Heading: string = "Select a patient to book Appointment/Consultation";
   page4Heading: string = "Select a patient to book Appointment/Consultation";



  //patientList = appointmentList;
  Names: string[];
  patientIssueList: string[] = [];
  Issues: string[];
  index = 0
  DeleteIssue = "";
  pageNo: string = '1';
  patientSelected: string = "";
  patientIssueSelected: string = "";

  // page2Heading!: string;
 listValue !: string;

  constructor() {
    this.Names =
      [
        "Mukesh",
        "Mukalal",
        "Mukeil",
        "name4",
      ];
    this.Issues =
      [
        "HandInjury",
        "LegFracture",
        "Hamstring"
      ]


  }
  ngOnInit(): void {

  }
 getValue(val:any)
 {
  //  console.log(val);
   this.listValue = val;
 }
  // changePage(): void {
  //   this.pageNo = '2';
  // }

  // prevPage(): void {
  //   this.pageNo = '1';
  // }


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

  // onEvent(){
  //   this.page1Heading = "Choose reason / Type reason for Appointment/Con..";
  // }


  //progressbar
  goToStep(step: number) {
    //can only move to the previous step
    if (this.compleatedSteps.includes(step)) {
      this.compleatedSteps = this.compleatedSteps.slice(0, step);
      this.currentStep = step;
      this.updateProgressBar();
    }
  }

  nextStep() {
    if (this.currentStep !== 4) {
      this.compleatedSteps.push(this.currentStep);
      this.currentStep++;
      this.updateProgressBar();
      // console.log(this.currentStep)
    }
  }

  previousStep() {
    if (this.currentStep !== 1) {
      this.compleatedSteps.pop();
      this.currentStep--;
      this.updateProgressBar();
    }
  }

  updateProgressBar() {
    //filling the progressbar
    const progress = document.getElementById("progress");
    progress?.style.setProperty("width", this.currentStep * 25 + "%");
  }


}



  // constructor() { }

  // ngOnInit(): void {
  // }