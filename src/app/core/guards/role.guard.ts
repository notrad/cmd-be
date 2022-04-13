import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuard } from './auth.guard';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private _authGuard: AuthGuard, private _router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      

    if(!this._authGuard.canActivate(route, state)){
      return false;
    }

      if(localStorage.getItem('user_role') === 'doctor'){
        return true;
      } else {
        this._router.navigate(['/allAppointments']);
        return false;
      }

  }
  
}
