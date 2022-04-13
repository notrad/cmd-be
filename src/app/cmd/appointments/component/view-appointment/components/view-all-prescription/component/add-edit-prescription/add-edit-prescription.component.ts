import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
// import { AddEditModel } from './add-edit.model';
import { PrescriptionModel } from './prescriptionmodule';
// import { ApiService } from '../../../../../../../../services/api.service';
import { ApiService } from 'src/app/services/api.service';
import { SelectorMatcher } from '@angular/compiler';
import { ViewAllPrescriptionComponent } from '../../view-all-prescription.component';
@Component({
  selector: 'app-add-edit-prescription',
  templateUrl: './add-edit-prescription.component.html',
  styleUrls: ['./add-edit-prescription.component.scss']
})
export class AddEditPrescriptionComponent implements OnInit {
  formValue !: FormGroup;
  action : string = 'Add Medicine';
  showAdd !: boolean;
  showUpdate !: boolean;
  addEditModelObj:PrescriptionModel=new PrescriptionModel();
  prescriptionData !: any;
  constructor(private formbuilber:FormBuilder,
  private api:ApiService,private modalRef:BsModalRef){}
  
  ngOnInit(): void {
      this.formValue=this.formbuilber.group({
       Medicine :[''],
       duration :[''],
       cycle :[''],
       description :['']
      })
      this.getPrescriptionDetail();
    }
postPrescriptionDetails(){
  this.showAdd = true;
  this.showUpdate = false;
this.addEditModelObj.Medicine= this.formValue.value.Medicine;
this.addEditModelObj.duration= this.formValue.value.duration;
this.addEditModelObj.cycle= this.formValue.value.cycle;
this.addEditModelObj.description= this.formValue.value.description;
this.api.postPrescription(this.addEditModelObj)
  .subscribe(res=>{
  console.log(res);
  alert("prescription added");
  this.formValue.reset();
  this.getPrescriptionDetail();
},
err=>{
  console.log(err);
  alert("Something went Wrong");
})
}
getPrescriptionDetail(){
  this.api.getPrescription()
  .subscribe(res=>{
  this.prescriptionData=res;
  })
}

clickAdd(){
  this.formValue.reset();
  this.showAdd = true;
  this.showUpdate = false;
}
onEdit(data:any){
  debugger;
  this.getPrescriptionDetail();
  this.addEditModelObj.id=data.id;
  this.formValue.controls["Medicine"].setValue(data.Medicine);
  this.formValue.controls["duration"].setValue(data.duration);
  this.formValue.controls["cycle"].setValue(data.cycle);
  this.formValue.controls["description"].setValue(data.description);
  console.log(data);

}
updatePrescriptionDetails(){
  debugger;
 this.showAdd = false;
 this.showUpdate = true;
this.addEditModelObj.Medicine= this.formValue.value.Medicine;
this.addEditModelObj.duration= this.formValue.value.duration;
this.addEditModelObj.cycle= this.formValue.value.cycle;
this.addEditModelObj.description= this.formValue.value.description;
this.api.updatePrescription(this.addEditModelObj,this.addEditModelObj.id)
.subscribe(res=>{
alert("Upadeted Successfully");
let ref = document.getElementById('cancel')
ref?.click();
this.formValue.reset();
this.getPrescriptionDetail();

})
}
}