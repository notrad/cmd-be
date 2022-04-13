import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { doctorlist } from '../cmd/appointments/component/view-appointment/viewAppointmentDr.model';
import { patientlist } from '../cmd/appointments/component/view-appointment/viewAppointmentPat.model';




@Injectable({

    providedIn: 'root'

})

export class viewAppointmentsApi {



    constructor(private http: HttpClient) { }

    getPatientlist() {

        return this.http.get<patientlist[]>("http://localhost:3000/patientlist")

            .pipe(map((pat: patientlist[]) => {

                return pat;

            }))

    }
    getdoctorlist() {

        return this.http.get<doctorlist[]>("http://localhost:3000/doctorlist")

            .pipe(map((doc: doctorlist[]) => {

                return doc;

            }))

    }


}