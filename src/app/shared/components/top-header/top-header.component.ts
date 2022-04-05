import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  profileImageUrl: string = '';
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this.profileImageUrl = localStorage['user_profile_image_url'];
  }

  onLogoutButtonClick() {
    this._authService.logoutUser();
  }
}
