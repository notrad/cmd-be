import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  navAppointmentVisibility: string = '';
  loggedInUserProfileImageUrl: string = '';
  loggedInUserName: string = '';
  loggedInUserRole: string = '';
  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.loggedInUserProfileImageUrl = localStorage['user_profile_image_url'];
    this.loggedInUserRole = localStorage['user_role'];
    if(this.loggedInUserRole == 'doctor'){
      this.loggedInUserName = 'Dr. ' + localStorage['user_name'];
      if (this._router.url == '/' || this._router.url == '/dashboard') {
        this.navAppointmentVisibility = 'visible';
      } else {
        this.navAppointmentVisibility = 'hidden';
      }
    } else {
      this.loggedInUserName = localStorage['user_name'];
      this.navAppointmentVisibility = 'hidden';
    }

  }

  onLogoutButtonClick() {
    this._authService.logoutUser();
  }
}
