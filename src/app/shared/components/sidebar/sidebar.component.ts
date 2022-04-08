import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userSettingsVisibility: string = '';
  loggedInUserRole: string = '';

  constructor() { }

  ngOnInit(): void {
    this.loggedInUserRole = localStorage['user_role'];
    if(this.loggedInUserRole == 'doctor'){
        this.userSettingsVisibility = 'block';
    } else {
      this.userSettingsVisibility = 'none';
    }
  }

}
