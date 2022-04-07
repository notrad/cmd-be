import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  loggedInUserProfileImageUrl: string = '';
  loggedInUserName: string = '';
  loggedInUserRole: string = '';
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this.loggedInUserProfileImageUrl = localStorage['user_profile_image_url'];
    this.loggedInUserRole = localStorage['user_role'];
    if(this.loggedInUserRole == 'doctor'){
      this.loggedInUserName = 'Dr. ' + localStorage['user_name'];
    } else {
      this.loggedInUserName = localStorage['user_name'];
    }

  }

  onLogoutButtonClick() {
    this._authService.logoutUser();
  }
}
