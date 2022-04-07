import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { SymptomService } from '../../../../../../services/symptom.service';
import { AddEditSymptonHistoryComponent } from './components/add-edit-sympton-history/add-edit-sympton-history.component';
import { SymptomsHistory } from './components/add-edit-sympton-history/symptoms.model';

@Component({
  selector: 'app-view-symptons-history',
  templateUrl: './view-symptons-history.component.html',
  styleUrls: ['./view-symptons-history.component.scss']
})
export class ViewSymptonsHistoryComponent implements OnInit {

  symptomDetails : SymptomsHistory[] = [];
  bool: boolean = true;

  public hideRuleContent:boolean[] = [];
public buttonName:any = 'Expand';
trackSymptomsH(index: number,row: { id: number; }){
  return row ? row.id : undefined;
}

  // patientDetails: string[] = [];
 
toggle(index: any) {
// toggle based on index
this.hideRuleContent[index] = !this.hideRuleContent[index];
}
  

   //displayedColumns: string[] = ['symptomName', 'value', 'doctorName'];
  // dataSource !: MatTableDataSource<any>;
  constructor( private dialog: MatDialog, private api : SymptomService) { }

  ngOnInit(): void {
    this.getSymptoms();
  }

  // openDialog() {
  //   this.dialog.open(AddEditSymptonHistoryComponent, {
  //     width:'35%', 
      
  //   });
  // }
  editSymp(row:any){
    this.dialog.open(AddEditSymptonHistoryComponent,
      {
        width:'26%',
        data:row,
        panelClass: "dialog-responsive"
      }).afterClosed().subscribe(val => {
        if(val === 'update'){
          this.getSymptoms();
        }
      })
    
  }
  getSymptoms(){
    this.api.getSymptom()
    .subscribe({
      next : (res) =>{
        //console.log(res);
        // for(var i=0; i< res.length;i++){
        //   this.symptomDetails.push(res[i]);
        // }
        this.bool = false;
        
        const responseData = JSON.stringify(res); 
        this.symptomDetails = JSON.parse(responseData);
      } 
    })
  }

  // getSymptoms(){
  //   this.api.getSymptom()
  //   .pipe(map((res) => {
      
  //   }),
  //   )}



  add(){
    this.dialog.open(AddEditSymptonHistoryComponent,{
      width:'25%'
    })
  }
  // getDetails(){
  //   this.api.getSymptom()
  //   .subscribe(res => {
  //     // this.symptomDetails = res;
  //     console.log(res);
  //   })
  // }
  delete( id:number){
    this.api.deleteSymptom(id)
    .subscribe({
      next:(res) =>{
        alert("deleted successfully");
        this.getSymptoms();
      }
    })
  }


}
