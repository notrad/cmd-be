import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';



import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
// import { PrescriptionModule } from './Prescriptionmodule';
import { PrescriptionModel} from './PresscriptionModule'
import { AddPrescription } from 'src/app/services/addPrescription.service';
interface prescription{
  medicine:string, 
  discription:string,
  
}
@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.scss']
})
export class AddPrescriptionComponent implements OnInit {
  formValue!:FormGroup;
  prescriptionModuleObj:PrescriptionModel=new PrescriptionModel();
  prescriptionData!:any;

  constructor(private formbuilder:FormBuilder,
    private api:AddPrescription ){}

  ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  this.formValue=this.formbuilder.group(
    {
      medicine:[''],
      duration:[''],
      cycle:[''],
      description:['']
    }
    )
  }
    // pre:prescription[]=data;
    // postPrescriptionData({
    //   // 
      
    //   this.prescriptionModuleObj.duration=this.formValue.value.duration;
    //   this.prescriptionModuleObj.cycle=this.formValue.value.cycle;
    //   this.prescriptionModuleObj.description=this.formValue.value.description;
    // })

    postPrescriptionData(){
      this.prescriptionModuleObj.medicine = this.formValue.value.medicine;
      this.prescriptionModuleObj.duration=this.formValue.value.duration;
      this.prescriptionModuleObj.cycle=this.formValue.value.cycle;
      this.prescriptionModuleObj.description=this.formValue.value.description;
      this.api.postData(this.prescriptionModuleObj)
      .subscribe(res=>{console.log(res);
      })
    }

getpres(){this.api.getData().subscribe(res =>{this.prescriptionData=res;
}) 




 
}
  
  
}
