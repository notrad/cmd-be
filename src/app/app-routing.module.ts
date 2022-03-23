import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllPrescriptionComponent } from './cmd/appointments/component/view-appointment/components/view-all-prescription/view-all-prescription.component';
import { LandingScreenComponent } from './shared/components/landing-screen/landing-screen.component';

const routes: Routes = [
  {
    path:"login",
    component:LandingScreenComponent
  },
  {
    path:"",
    component:ViewAllPrescriptionComponent,
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
