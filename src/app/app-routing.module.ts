import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentHistoryComponent } from './cmd/patients/components/patient-info/components/appointment-history/appointment-history.component';
import { LandingScreenComponent } from './shared/components/landing-screen/landing-screen.component';

const routes: Routes = [
  {
    path:"login",
    component:LandingScreenComponent
  },
  {
    path:"",
    component:LandingScreenComponent,
    pathMatch: "full"
  },
  {
    path:"cmd",
    loadChildren: () =>
    import("./cmd/cmd.module").then(
      (m) => m.CmdModule
    ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
