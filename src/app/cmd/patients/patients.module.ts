import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { ViewAllPatientComponent } from './components/view-all-patient/view-all-patient.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { ViewSymptonsHistoryComponent } from './components/patient-info/components/view-symptons-history/view-symptons-history.component';
import { AddEditSymptonHistoryComponent } from './components/patient-info/components/view-symptons-history/components/add-edit-sympton-history/add-edit-sympton-history.component';
import { AppointmentHistoryComponent } from './components/patient-info/components/appointment-history/appointment-history.component';
import { PrescriptionHistoryComponent } from './components/patient-info/components/prescription-history/prescription-history.component';
import { AddPrescriptionComponent } from './components/patient-info/components/prescription-history/components/add-prescription/add-prescription.component';
import { ViewPrescriptionDetailsComponent } from './components/patient-info/components/prescription-history/components/view-prescription-details/view-prescription-details.component';
import { AppointmentTileComponent } from './components/patient-info/components/appointment-history/appointment-tile/appointment-tile.component';


import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewAllPatientComponent,
    PatientInfoComponent,
    ViewSymptonsHistoryComponent,
    AddEditSymptonHistoryComponent,
    AppointmentHistoryComponent,
    PrescriptionHistoryComponent,
    AddPrescriptionComponent,
    ViewPrescriptionDetailsComponent,
    AppointmentTileComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatInputModule,
    MatDialogModule,
    FormsModule
  ]
})
export class PatientsModule { }
