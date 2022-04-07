import { Component, OnInit } from '@angular/core';

// import info from './info.json'; // importing json file

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.scss']
})
export class LandingScreenComponent implements OnInit {

  // storing json data into list
  // infolist:{
  //   Name :string,
  //   Contact : number,
  //   Gender : string,
  //   DOB: Date,
  //   Age : number,
  //   Height : number,
  //   BloodGroup : string,
  //   Allergies : string,
  //   ActiveIssues : string,
  //   MedicalProblem : string
  // }[] = info;

  // inf: Info1[] = [
  // {Name :"Peter",
  // Contact :8759659655,
  // Age :36,
  // Height : 167,
  // BloodGroup : "O+",
  // Allergies :  "Penciline",
  // ActiveIssues : "",
  // MedicalProblem : "Asthma, Hand Injury"} 
  // ];

  constructor() { }

  ngOnInit(): void {
  }

  // ImgsrcM = <i class="fa fa-mars" aria-hidden="true"></i>
  // ImgsrcF =  <i class="fa fa-mars" aria-hidden="true"></i>

  // Name :string = "Peter";
  // Contact : number = 8759659655;
  // Age : number = 36;
  // Height : number = 167;
  // BloodGroup : string = "O+";
  // Allergies : string = "Penciline";
  // ActiveIssues : string = "";
  // MedicalProblem : string = "Asthma, Hand Injury";
  

  // Gender added for test
  // Gender : string = "M"
  // DOB: string = new Date(2000,3,20).toLocaleDateString();

  // trackByInfID(index:number, inf:Info1): number{
  //   return inf.Info1Id;
  // }
}
