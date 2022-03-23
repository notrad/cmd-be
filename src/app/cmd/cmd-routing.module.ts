import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentHistoryComponent } from './patients/components/patient-info/components/appointment-history/appointment-history.component';

<<<<<<< HEAD
const routes: Routes = [
];
=======
const routes: Routes = [{
  path:"appoitment",
  loadChildren: () =>
  import("./appointments/appointments.module").then(
    (m) => m.AppointmentsModule
  ),
}];
>>>>>>> 1733199bbf8a0cc27507e62623e75acad0803650

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmdRoutingModule { }
