import { Component, OnInit } from '@angular/core';
import  prescription from '../../../../../../../../faker.json';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { prescriptionHistory } from './prescriptionHistory.model';
import { prescriptionApi } from 'src/app/services/prescriptionHistory.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditSymptonHistoryComponent } from '../view-symptons-history/components/add-edit-sympton-history/add-edit-sympton-history.component';
import { AddPrescriptionComponent } from './components/add-prescription/add-prescription.component';

// interface PresDetails{​​​​​​  sym: string, date:string, time:string, sym1:string, sym2:string, sym3:string}​​​​​​

@Component({
  selector: 'app-prescription-history',
  templateUrl: './prescription-history.component.html',
  styleUrls: ['./prescription-history.component.scss',]
  
})
export class PrescriptionHistoryComponent implements OnInit {

  constructor(private dialog: MatDialog,private api:prescriptionApi) { }

  ngOnInit(): void {
    this.api.getPrescription()

    .subscribe({
  
      next : (res) =>{
  
    this.pre=res;
        
  
      }
  
    })
  }
pre:prescriptionHistory[]=[]

add(){
  this.dialog.open(AddPrescriptionComponent,{
    
  })
}

public hideRuleContent:boolean[] = [];
// public buttonName:any = 'Expand';


toggle(index: number) {
// toggle based on index
this.hideRuleContent[index] = !this.hideRuleContent[index];

}
}



