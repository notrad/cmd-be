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

const routes: Routes = [
  {
    path:"login",
    component:LandingScreenComponent
  },
  {
    path:"account-settings",
    canActivate: [AuthGuard],
    component:ViewEditAccountSettingComponent
  },
  {
    path:"",
    component:DashboardComponent,
    canActivate: [AuthGuard],
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    pathMatch: "full"
  }, 
  {
    path: "patient-details",
    canActivate: [AuthGuard],
    component: PatientInfoComponent,

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
