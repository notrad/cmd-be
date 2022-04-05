import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/core/services/auth.service';

import { LandingScreenComponent } from './landing-screen.component';

describe('Landing-Screen Component', () => {
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
});

describe('Login Form', () => {
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

  it('getter for email FormControl Object', () => {
    expect(component.email).toBeTruthy();
    expect(component.email?.value).toBeNull();
    
  });

  it('getter for role FormControl Object', () => {
    expect(component.role).toBeTruthy();
    expect(component.role?.value).toBe('doctor');
  });

  it('getter for password FormControl Object', () => {
    expect(component.password).toBeTruthy();
    expect(component.password?.value).toBeNull();

  });

  it('empty form should be invalid',() => {
    expect(component.loginForm.invalid).toBe(true);
  });

  it('entering invalid credentials in loginForm should return FormGroup Invalid to be false', () => {
    component.loginForm.setValue({
      email: 'hkljadsf2@fff',
      password: 'jfhsjfif',
      role: 'fasd'
    });
    expect(component.loginForm.valid).toBe(false);
    
  });

  it('entering valid credentials in loginForm should return FormGroup Valid to be true', () => {
    component.loginForm.setValue({
      email: 'email@domain.com',
      password: 'User@passw0rd',
      role: 'doctor'
    });
    expect(component.loginForm.valid).toBe(true);
    
  });

  it('loginForm submission function is created', () => {
    expect(component.loginFormSubmission).toBeTruthy();
  });
});