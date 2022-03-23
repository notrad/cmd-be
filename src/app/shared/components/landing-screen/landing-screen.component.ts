import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserCredentials } from '../../models/UserCredentialsInterface';


@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.scss']
})
export class LandingScreenComponent implements OnInit {

  readonly welcomeHeadingDoctor: string = 'Welcome to CMD';
  readonly welcomeHeadingPatient: string = 'Welcome to KKD';
  emailPlaceholder: string = 'Username';
  passwordPlaceholder: string = 'Password';
  loginForm!: FormGroup;
  formSubmitted: boolean = false;
  userCredentials!: UserCredentials;
  loginObserver: Subscription = new Subscription;
  credentialError: boolean = false;
  credentialErrorMessage: string = '';

  constructor(
    private _formBuilder: FormBuilder, 
    private _authService: AuthService, 
    private _router: Router) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: [null, [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9.\-_]+@[a-zA-Z.-]+[.][a-zA-Z]{2,}$")
      ]],
      password: [null, Validators.required],
      role: ['doctor', Validators.required]
    });
  }

  get email(): AbstractControl | null {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  get role() : AbstractControl | null {
    return this.loginForm.get('role');
  }

  loginFormSubmission(form: FormGroup): void {
    this.formSubmitted = true;

    if (form.invalid) {
      this.emailPlaceholder = 'Email is required';
      this.passwordPlaceholder = 'Password is required';
      return;
    }

    this.userCredentials = form.value;
    this.loginObserver = this._authService.loginUser(this.userCredentials).subscribe(
      {
        next: (res) => {
          
          this._authService.UserData = res;

          //clear form and reset the values after submission
          form.reset();
          this.formSubmitted = false;
          this.emailPlaceholder = 'Username';
          this.passwordPlaceholder = 'Password';
          this.loginForm.setValue({ email: null, password: null, role: 'doctor' });

          // reroute base on user role
          this._router.navigate(['/cmd/appoitment/viewappointment']);
        },
        error: (err) => {
          this.credentialError = true;
          this.credentialErrorMessage = err.error.errorMessage;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.loginObserver.unsubscribe();
  }
}

