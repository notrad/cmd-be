import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentTilesComponent } from './component/appointment-tiles/appointment-tiles.component';
import { ViewAllAppointmentComponent } from './component/view-all-appointment/view-all-appointment.component';
import { ViewAppointmentComponent } from './component/view-appointment/view-appointment.component';
import { ViewPatientComponent } from './component/view-appointment/components/view-patient/view-patient.component';
import { ViewDoctorComponent } from './component/view-appointment/components/view-doctor/view-doctor.component';
import { ViewEditCommentsComponent } from './component/view-appointment/components/view-edit-comments/view-edit-comments.component';
import { ViewEditRecommendationComponent } from './component/view-appointment/components/view-edit-recommendation/view-edit-recommendation.component';
import { ViewEditVitalsComponent } from './component/view-appointment/components/view-edit-vitals/view-edit-vitals.component';
import { ViewAllPrescriptionComponent } from './component/view-appointment/components/view-all-prescription/view-all-prescription.component';
import { AddEditPrescriptionComponent } from './component/view-appointment/components/view-all-prescription/component/add-edit-prescription/add-edit-prescription.component';
import { ViewEditTestComponent } from './component/view-appointment/components/view-edit-test/view-edit-test.component';
import { AddAppointmentComponent } from './component/add-appointment/add-appointment.component';
import { AppointmentSchudleComponent } from './component/add-appointment/components/appointment-schudle/appointment-schudle.component';
import { AppointmentConfirmationComponent } from './component/add-appointment/components/appointment-confirmation/appointment-confirmation.component';
import { ViewFeedbackComponent } from './component/view-feedback/view-feedback.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



const COMPONENT = [
  AppointmentTilesComponent,
  ViewAllAppointmentComponent,
  ViewAppointmentComponent,
  ViewPatientComponent,
  ViewDoctorComponent,
  ViewEditCommentsComponent,
  ViewEditRecommendationComponent,
  ViewEditVitalsComponent,
  ViewAllPrescriptionComponent,
  AddEditPrescriptionComponent,
  ViewEditTestComponent,
  AddAppointmentComponent,
  AppointmentSchudleComponent,
  AppointmentConfirmationComponent,
  ViewFeedbackComponent,
  
];

@NgModule({
  declarations: [
    ...COMPONENT
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports:[
    ViewAllAppointmentComponent
  ]
})
export class AppointmentsModule {}
