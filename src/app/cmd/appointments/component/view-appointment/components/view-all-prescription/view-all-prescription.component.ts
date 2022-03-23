import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
// import { prependListener } from 'process';
// import data from '../../../../../../../assets/xyz/pre.json';
import { PrescriptionModel} from './component/add-edit-prescription/prescriptionmodule';
// interface PresDetails{
//   duration:string,
//   Medicine:string,
//   cycle:string,
//   description:string;
// }

@Component({
  selector: 'app-view-all-prescription',
  templateUrl: './view-all-prescription.component.html',
  styleUrls: ['./view-all-prescription.component.scss']
})

export class ViewAllPrescriptionComponent implements OnInit {
   view:boolean=false
   visible:boolean=false
  prescriptionModelObj : PrescriptionModel = new PrescriptionModel();
  prescriptionData!:any;
  constructor(private api:ApiService) { }
  
  ngOnInit(): void {

    // this.prescriptionData();
  }

//  pre:PresDetails[]=data;
  getpres(){
   this.api.getPrescription()
   .subscribe(res =>{
     this.prescriptionData=res;
   }) 
 }
 deletePres(data:any){
  //  debugger;
   this.api.deletePrescription(data.id)
   .subscribe(res=>{this.getpres()})
   this.getpres();
 }
}
