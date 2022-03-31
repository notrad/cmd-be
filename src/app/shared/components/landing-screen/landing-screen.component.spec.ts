import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/core/services/auth.service';

import { LandingScreenComponent } from './landing-screen.component';

describe('LandingScreenComponent', () => {
  let component: LandingScreenComponent;
  let fixture: ComponentFixture<LandingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingScreenComponent ],
      providers: [ FormBuilder, AuthService ],
      imports: [ HttpClientModule, RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getter for email', () => {
    expect(component.email).toBeTruthy();
  });

  it('getter for role', () => {
    expect(component.role).toBeTruthy();
  });

  it('getter for password', () => {
    expect(component.password).toBeTruthy();
  });

  it('loginForm submission', () => {
    expect(component.loginFormSubmission).toBeTruthy();
  });
});
