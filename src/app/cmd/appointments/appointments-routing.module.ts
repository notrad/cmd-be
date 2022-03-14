import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllAppointmentComponent } from './component/view-all-appointment/view-all-appointment.component';

const routes: Routes = [{
  path:"viewappointment",
  component: ViewAllAppointmentComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
