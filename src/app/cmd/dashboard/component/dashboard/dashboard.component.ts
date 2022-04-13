import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardDoctorAppointmentsService } from 'src/app/core/services/dashboard-doctor-appointments.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  patinentsAppointmentList: any[] = [];
  selectedValue: string = '';
  imageurl='https://www.unwomen.org/sites/default/files/Headquarters/Images/Sections/Partnerships/GoodwillAmbassadors/Emma-Watson-headshot-2016_300pxTall.jpg?la=en';
  employeeDataObserver: Subscription = new Subscription;
  public options =[{'label':'All',value:'All'},{'label':'Confirmed',value:'status-1'},{'label':'Cancelled',value:'status-2'},{'label':'Closed',value:'status-3'}]
  selectStatus:any
    

  constructor(private _doctorAppointmentsList: DashboardDoctorAppointmentsService, private _titleService: Title) { 
    this.filteredTests = this.testsCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allTests.slice())),
    );
  }

  separatorKeysCodes: number[] = [ENTER, COMMA];

  testsCtrl = new FormControl();
  filteredTests: Observable<string[]>;
  tests: string[] = ['Ecg','Exercise Stress test'];
  allTests: string[] = ['Ecg','Exercise Stress test'];

  @ViewChild('testInput')
  testInput!: ElementRef<HTMLInputElement>;
  
  
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tests.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.testsCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.tests.indexOf(fruit);

    if (index >= 0) {
      this.tests.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tests.push(event.option.viewValue);
    this.testInput.nativeElement.value = '';
    this.testsCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTests.filter(test => test.toLowerCase().includes(filterValue));
  }


  userData:any=[
    {PatientName:"Emma Watson(31)",
     Injury:"Heart related issues",
      Date:"12/06/2019",
      Time:"10:30",
    }
  ];


  ngOnInit(): void {
    this._titleService.setTitle('Dashboard | CMD');
    this.fetchappointmentRecords('All')
  }
  cancelledNumber=0;
  acceptednumber=0;
  totalnumber=0;
 conformBtn(){
   this.acceptednumber=this.acceptednumber+1;
   this.totalnumber=this.acceptednumber+this.cancelledNumber;
 }
 cancelledBtn(){
   this.cancelledNumber=this.cancelledNumber+1;
   this.totalnumber=this.cancelledNumber+this.acceptednumber;
 }

changeMethod(option:any){
 // const filterTasks = (taskArray, obj) => taskArray.filter( task => Object.keys(task).some( key => obj[key] && obj[key]==task[key]));
console.log(option)
console.log(this.selectStatus)
this.filterarr(this.selectStatus)

}

filterarr(data:any){
   //const filterTasks = (taskArray:any, obj:any) => taskArray.filter( (task:any) => Object.keys(task).some( key => obj[key] && obj[key]==task[key]));
   this.fetchappointmentRecords(data)
   
}
fetchappointmentRecords(isfilter?:any){

  this.employeeDataObserver = this._doctorAppointmentsList.getDoctorAppointmentList().subscribe(
    {
      next: (response) => {
        if(isfilter=="All"){
          this.patinentsAppointmentList = response;
         
   
        }else{
          this.patinentsAppointmentList = response.filter((e:any)=>e.status===isfilter);
        }
      
      },

      error: (error) => {
        console.log(error);
      }
    }

  );
}

}
