import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AddEditPrescriptionComponent } from './component/add-edit-prescription/add-edit-prescription.component';
import { PrescriptionModel} from './component/add-edit-prescription/prescriptionmodule';
import{MatDialog} from '@angular/material/dialog';
import{BsModalService,BsModalRef} from 'ngx-bootstrap/modal';
import { FormBuilder,FormGroup} from '@angular/forms';

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
  formValue !: FormGroup;
  action : string = 'Add Medicine';
  showAdd !: boolean;
  showUpdate !: boolean;
   view:boolean=false
   visible:boolean=false
   addEditModelObj : PrescriptionModel = new PrescriptionModel();
  prescriptionData!:any;
  dailog: any;
  modal: any;
  // formValue: any;
  
  // constructor(private api:ApiService,private modalService:BsModalService,private formbuilber:FormBuilder) { }
  constructor(private api:ApiService,private modalService:BsModalService,private formbuilber:FormBuilder) { }
  modalRef:BsModalRef | undefined;
  openModal(){
    this.modalRef=this.modalService.show(AddEditPrescriptionComponent);
  }
  ngOnInit(): void {
    this.formValue=this.formbuilber.group({
      Medicine :[''],
      duration :[''],
      cycle :[''],
      description :['']
     })

    this.getpres();
 
  }

//  pre:PresDetails[]=data;
// to get the prescription 
// postPrescriptionDetails(){
//   this.addEditModelObj.Medicine= this.formValue.value.Medicine;
//   this.addEditModelObj.duration= this.formValue.value.duration;
//   this.addEditModelObj.cycle= this.formValue.value.cycle;
//   this.addEditModelObj.description= this.formValue.value.description;
//   this.api.postPrescription(this.addEditModelObj)
//     .subscribe(res=>{
//     console.log(res);
//     alert("prescription added");
//     this.formValue.reset();
//     this.getpres();
//   },
//   err=>{
//     console.log(err);
//     alert("Something went Wrong");
//   })
//   }
  getpres(){
   this.api.getPrescription()
   .subscribe(res =>{
     this.prescriptionData=res;
   }) 
 }
 //delete the prescription
 deletePres(data:any){
  //  debugger;
   this.api.deletePrescription(data.id)
   .subscribe(res=>{this.getpres()})
   this.getpres();
 }
//  onEdit(data:any){
//   this.modalRef=this.modalService.show(AddEditPrescriptionComponent,{
//     data1:data,
//     panelClass:"dailog-responsive"
//   }).subscribe((val: string)=>{
//     if(val=='update'){
//       this.getpres();
//     }
//   })
// onEdit(id:any){
// debugger;
// this.modalRef=this.modalService.show(AddEditPrescriptionComponent)
// // this.addEditModelObj.id=data.id;
// //   this.formValue.controls["Medicine"].setValue(data.Medicine);
// //   this.formValue.controls["duration"].setValue(data.duration);
// //   this.formValue.controls["cycle"].setValue(data.cycle);
// //   this.formValue.controls["description"].setValue(data.description);
//   this.api.editPres(id).subscribe(res=>{
//     this.prescriptionData=res;
//     console.log(res);
//   })

// }
  
}




