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


@NgModule({
  declarations: [
    ViewAllPatientComponent,
    PatientInfoComponent,
    ViewSymptonsHistoryComponent,
    AddEditSymptonHistoryComponent,
    AppointmentHistoryComponent,
    PrescriptionHistoryComponent,
    AddPrescriptionComponent,
    ViewPrescriptionDetailsComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
