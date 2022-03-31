import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LandingScreenComponent } from './components/landing-screen/landing-screen.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";

const COMPONENTS =[
  TopHeaderComponent,
  SidebarComponent,
  LandingScreenComponent,
  NotFoundComponent
]


@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
