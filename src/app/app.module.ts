import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentHistoryComponent } from './cmd/patients/components/patient-info/components/appointment-history/appointment-history.component';
import { AppointmentTileComponent } from './cmd/patients/components/patient-info/components/appointment-history/appointment-tile/appointment-tile.component';

import {AppointmentsModule} from '../app/cmd/appointments/appointments.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CmdModule } from './cmd/cmd.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentHistoryComponent,
    AppointmentTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    NgbModule,
=======
    AppointmentsModule,
    NgbModule,
    SharedModule,
    CmdModule,
<<<<<<< HEAD
    HttpClientModule,
    ReactiveFormsModule,
=======
    ReactiveFormsModule,
>>>>>>> 1733199bbf8a0cc27507e62623e75acad0803650
>>>>>>> 93e62c7486888caaaa32d42369e712d75b36154b
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
