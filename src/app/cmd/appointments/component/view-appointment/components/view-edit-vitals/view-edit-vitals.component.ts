import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiVitals } from '../../../../../../services/vitals.service';
import Vitals from '../../../../../../../../faker.json';
// import { View_Vitals } from './vitals.model';
@Component({
  selector: 'app-view-edit-vitals',
  templateUrl: './view-edit-vitals.component.html',
  styleUrls: ['./view-edit-vitals.component.scss']
})
export class ViewEditVitalsComponent implements OnInit {
 
  addVitals !: FormGroup
  constructor(private api : ApiVitals, private formBuilder: FormBuilder) { }
  editing = 0;

  isreadonly = true;
  save(itemId:number){
    console.log('Save Content', itemId);
    this.isreadonly = !this.isreadonly;
    this.editing=0;
  }    
  edit(itemId2:number){
    console.log('Edit Content', itemId2);
    this.isreadonly = !this.isreadonly;
    this.editing=1;
  }
 
  ngOnInit(): void {
    this.addVitals = this.formBuilder.group({
    ECG : [''],
    Tempreture : [''],
    Diabetes : [''],
    Respiration_rate : ['']
      
    });
  }

  addVital(){

    this.api.postVitals(this.addVitals.value)
    .subscribe({
      next: (res) => {
      

        console.log(res);

      },
      error :() => {
        alert('Error to add vitals');
      },
    });
  }

}

