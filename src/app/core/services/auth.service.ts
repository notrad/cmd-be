import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { UserCredentials } from '../../shared/models/UserCredentialsInterface';
import { User } from '../../shared/models/UserInterface';


@Injectable()
export class AuthService {
  private newUser!: User;

  private _loginUrl = environment.loginUrl;
  constructor(private _http: HttpClient, private _router: Router) { }

  loginUser(userCredentials: UserCredentials): Observable<any> {
    return this._http.post<Observable<any>>(this._loginUrl, userCredentials);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logoutUser(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_role');
    localStorage.removeItem('user_profile_image_url');
    this._router.navigate(['/login']);
  }

  get Token(): string | null {
    return localStorage.getItem('token');
  }

  set UserData(jwt_token: string) {
    this.newUser = jwtDecode(jwt_token);
    localStorage.setItem('token',jwt_token);
    localStorage.setItem('user_name', this.newUser.name );
    localStorage.setItem('user_email', this.newUser.email );
    localStorage.setItem('user_role', this.newUser.role );
    localStorage.setItem('user_profile_image_url', this.newUser.profileImageUrl );
  }
}
