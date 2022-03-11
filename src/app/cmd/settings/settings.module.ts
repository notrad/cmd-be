import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingDashboardComponent } from './components/setting-dashboard/setting-dashboard.component';
import { ViewAvailibiltySettingComponent } from './components/view-availibilty-setting/view-availibilty-setting.component';


@NgModule({
  declarations: [
    SettingDashboardComponent,
    ViewAvailibiltySettingComponent,

  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
