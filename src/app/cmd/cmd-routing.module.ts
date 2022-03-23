import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:"appoitment",
  loadChildren: () =>
  import("./appointments/appointments.module").then(
    (m) => m.AppointmentsModule
  ),
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmdRoutingModule { }
