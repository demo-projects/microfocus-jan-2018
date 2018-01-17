import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { pickBy, isEmpty } from 'lodash';
import { passwordValidator } from '../../validators/password.validator';

const ERRORS = {
  required: () => 'This field is required',
  email: () => 'This is not a valid email',
  minlength: ({ requiredLength }) => `Should be at least ${requiredLength} characters`,
  password: (errorMsg) => errorMsg
};

@Component({
  selector: 'mf-login',
  template: `
    <form [formGroup]="authForm" (submit)="login()">
      <div class="field">
        <label>Email</label>
        <input
          type="email"
          name="email"
          formControlName="email"/>
      </div>
      <div class="error">
        {{ getErrorsFor('email') }}
      </div>
      <div class="field">
        <label>Password</label>
        <input
          type="password"
          name="password"
          formControlName="password"/>
      </div>
      <div class="error">
        {{ getErrorsFor('password') }}
      </div>
      <div class="actions">
        <button [disabled]="isSubmitting" type="button" (click)="reset()">Reset</button>
        <button [disabled]="isSubmitting">Go</button>
      </div>
    </form>
  `,
  styles: [
    `:host {
      margin: 100px auto;
      display: flex;
      justify-content: center;
    }`,
    `form {
      width: 300px;
      display: flex;
      flex-direction: column;
    }`,
    `input.invalid {
      box-shadow: inset 0 0 1px 1px rgba(255,0,0,0.5);
    }`,
    `.field {
      display: flex;
      flex-direction: row;
      align-items: center;
    }`,
    `input {
      flex-grow: 1;
      padding: 7px;
      border-radius: 3px;
      box-shadow: inset 0 0 1px 1px rgba(0,0,0,0.5);
      border: none;
      outline: none;
    }`,
    `button {
      margin-top: 10px;
      padding: 7px;
      border-radius: 3px;
      min-width: 60px;
      margin-left: 5px;
    }`,
    `label {
      flex-basis: 80px;
      flex-shrink: 0;
      color: chocolate;
    }`,
    `.error {
      font-size: 10px;
      color: red;
      margin-left: 80px;
      margin-bottom: 15px;
    }`,
    `.actions {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-self: flex-end;
    }`
  ]
})
export class LoginComponent implements OnInit {
  isSubmitted: boolean;
  isSubmitting = false;
  authForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), passwordValidator])
    });

    // this.authForm = fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(8), passwordValidator]]
    // });

    this.authForm.valueChanges.subscribe((value) => console.log(value));
    this.authForm.statusChanges.subscribe((status) => console.log(status));

    this.reset();
  }

  ngOnInit() {
  }

  login() {
    this.isSubmitted = true;

    if (this.authForm.valid) {
      this.isSubmitting = true;
      setTimeout(() => {
        this.router.navigate(['editor']);
      }, 1000);
    } else {
      console.log('errors', this.authForm.controls.password.errors);
    }
  }

  reset() {
    this.authForm.setValue({
      email: 'you@example.com',
      password: ''
    });
    this.isSubmitted = false;
  }

  getErrorsFor(controlName) {
    const control: FormControl = <FormControl>this.authForm.controls[controlName];

    if (!control || !this.isSubmitted) {
      return ;
    }

    const errors = pickBy(control.errors, (value, key) => value);

    if (isEmpty(errors)) {
      return ;
    }
    const errorKey = Object.keys(errors)[0];
    const errorValue = errors[errorKey];

    return ERRORS[errorKey](errorValue);
  }
}
