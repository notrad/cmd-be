import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
 
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
// import { ApiService } from 'src/app/services/api.service';
import { SymptomService } from '../../../../../../../../services/symptom.service';

@Component({
  selector: 'app-add-edit-sympton-history',
  templateUrl: './add-edit-sympton-history.component.html',
  styleUrls: ['./add-edit-sympton-history.component.scss']
})
export class AddEditSymptonHistoryComponent implements OnInit {

  addSymptom!: FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editSymptom: any,
    private dialogRef: MatDialogRef<AddEditSymptonHistoryComponent>,
    private api: SymptomService
  ) {}

  ngOnInit(): void {
    this.addSymptom = this.formBuilder.group({
      symptomName: ['', Validators.required],
      value: ['', Validators.required],
      doctorName: ['', Validators.required],
    });
    if (this.editSymptom) {
      this.addSymptom.controls['symptomName'].setValue(
        this.editSymptom.symptomName
      );
      this.addSymptom.controls['value'].setValue(this.editSymptom.value);
      this.addSymptom.controls['doctorName'].setValue(
        this.editSymptom.doctorName
      );
    }
    this.getD();
  }

  addSymptoms() {
    if (!this.editSymptom) {
      if (this.addSymptom.valid) {
        this.api.postSymptom(this.addSymptom.value).subscribe({
          next: (res) => {
            alert('product added successfully');
            this.addSymptom.reset();
            this.dialogRef.close();
            console.log(res);
            this.getD();
          },
          error: () => {
            alert('error to add symptoms');
          },
        });
      }
    } else {
      this.updateSymptom();
    }
  }

  getD() {
    this.api.getSymptom().subscribe({
      next: (res) => {},
    });
  }

  closeSymptom() {
    this.dialogRef.close();
  }

  updateSymptom() {
    this.api.update(this.addSymptom.value, this.editSymptom.id)
    .subscribe({
      next: (res) => {
        alert('updated successfully');
        this.addSymptom.reset();
        this.dialogRef.close('update');
      },
    });
  }

}
