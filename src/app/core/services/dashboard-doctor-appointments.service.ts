import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardDoctorAppointmentsService {

  constructor(private _http: HttpClient) { }

  getDoctorAppointmentList(): Observable<any> {

    return this._http.get(environment.doctorAppointmentList).pipe(

      retry(3),

      catchError(

        error => {

          return throwError(() => error);

        }

      )

    );

  }
}
