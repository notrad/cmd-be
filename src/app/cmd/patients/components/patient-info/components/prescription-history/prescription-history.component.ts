import { Component, OnInit } from '@angular/core';
import  prescription from '../../../../../../../../faker.json';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { prescriptionHistory } from './prescriptionHistory.model';
import { prescriptionApi } from 'src/app/services/prescriptionHistory.service';

// interface PresDetails{​​​​​​  sym: string, date:string, time:string, sym1:string, sym2:string, sym3:string}​​​​​​

@Component({
  selector: 'app-prescription-history',
  templateUrl: './prescription-history.component.html',
  styleUrls: ['./prescription-history.component.scss',]
  
})
export class PrescriptionHistoryComponent implements OnInit {

  constructor(private api:prescriptionApi) { }

  ngOnInit(): void {
    this.api.getPrescription()

    .subscribe({
  
      next : (res) =>{
  
    this.pre=res;
        
  
      }
  
    })
  }
pre:prescriptionHistory[]=[]


public hideRuleContent:boolean[] = [];
// public buttonName:any = 'Expand';


toggle(index: number) {
// toggle based on index
this.hideRuleContent[index] = !this.hideRuleContent[index];

}
}



