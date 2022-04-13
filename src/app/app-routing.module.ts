import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ViewAllPrescriptionComponent } from './cmd/appointments/component/view-appointment/components/view-all-prescription/view-all-prescription.component';
import { AppointmentHistoryComponent } from './cmd/patients/components/patient-info/components/appointment-history/appointment-history.component';
import { LandingScreenComponent } from './shared/components/landing-screen/landing-screen.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ViewEditAccountSettingComponent } from './cmd/settings/components/view-edit-account-setting/view-edit-account-setting.component';
import { DashboardComponent } from './cmd/dashboard/component/dashboard/dashboard.component';
import { ViewSymptonsHistoryComponent } from './cmd/patients/components/patient-info/components/view-symptons-history/view-symptons-history.component';
import { PatientInfoComponent } from './cmd/patients/components/patient-info/patient-info.component';
import { ViewPrescriptionDetailsComponent } from './cmd/patients/components/patient-info/components/prescription-history/components/view-prescription-details/view-prescription-details.component';
import { prescriptionHistory } from './cmd/patients/components/patient-info/components/prescription-history/prescriptionHistory.model';
import { PrescriptionHistoryComponent } from './cmd/patients/components/patient-info/components/prescription-history/prescription-history.component';
import { ViewEditCommentsComponent } from './cmd/appointments/component/view-appointment/components/view-edit-comments/view-edit-comments.component';
import { AddPrescription } from './services/addPrescription.service';
import { AddPrescriptionComponent } from './cmd/chat/components/view-suggest-prescription/components/add-prescription/add-prescription.component';
import { ViewAllAppointmentComponent } from './cmd/appointments/component/view-all-appointment/view-all-appointment.component';
import { ViewFeedbackComponent } from './cmd/appointments/component/view-feedback/view-feedback.component';
import { RoleGuard } from './core/guards/role.guard';
import { ViewAllPatientComponent } from './cmd/patients/components/view-all-patient/view-all-patient.component';
import { ViewAppointmentComponent } from './cmd/appointments/component/view-appointment/view-appointment.component';
import { ViewEditTestComponent } from './cmd/appointments/component/view-appointment/components/view-edit-test/view-edit-test.component';
import { ViewEditVitalsComponent } from './cmd/appointments/component/view-appointment/components/view-edit-vitals/view-edit-vitals.component';
import { ViewEditRecommendationComponent } from './cmd/appointments/component/view-appointment/components/view-edit-recommendation/view-edit-recommendation.component';

const routes: Routes = [
  {
    path:"login",
    component:LandingScreenComponent
  },
  {
    path:"viewfeedback", 
    component: ViewFeedbackComponent
  },
  {
    path:"all-patients",
    component:ViewAllPatientComponent
  },
  {
    path:"account-settings",
    canActivate: [AuthGuard],
    component:ViewEditAccountSettingComponent
  },
  {
    path:"view-edit-comment",
    canActivate: [AuthGuard],
    component:ViewEditCommentsComponent,
    pathMatch: "full"
  },
  {
    path:"view-edit-test",
    canActivate: [AuthGuard],
    component:ViewEditTestComponent,
    pathMatch: "full"
  },
  {
    path:"view-edit-vitals",
    canActivate: [AuthGuard],
    component:ViewEditVitalsComponent,
    pathMatch: "full"
  },
  {
    path:"view-edit-recommand",
    canActivate: [AuthGuard],
    component:ViewEditRecommendationComponent,
    pathMatch: "full"
  },
  {
    path:"view-all-prescription",
    canActivate: [AuthGuard],
    component:ViewAllPrescriptionComponent,
    pathMatch: "full"
  },
  {
    path:"view",
    canActivate: [AuthGuard],
    component:ViewAppointmentComponent,
    pathMatch: "full"
  },
  {
    path:"",
    component:DashboardComponent,
    canActivate: [RoleGuard],
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [RoleGuard],
    pathMatch: "full"
  }, 
  {
    path: "patient-details",
    canActivate: [AuthGuard],
    component: PatientInfoComponent,
    pathMatch: "full"
  }, 
  {
    path:'allAppointments', 
    canActivate: [AuthGuard],
    component:ViewAllAppointmentComponent,
    pathMatch: "full"
  },
  {
    path:"cmd",
    canActivate: [AuthGuard],
    loadChildren: () =>
    import("./cmd/cmd.module").then(
      (m) => m.CmdModule
    ),
  },

  {
    path:"**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
