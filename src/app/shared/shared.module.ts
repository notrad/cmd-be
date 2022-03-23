import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LandingScreenComponent } from './components/landing-screen/landing-screen.component';

const COMPONENTS =[
  TopHeaderComponent,
  SidebarComponent,
  LandingScreenComponent
]


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
