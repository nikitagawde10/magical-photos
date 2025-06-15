import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  onCancel() {
    this.registrationForm.reset();
  }
  registerUser() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm);
      this.registrationForm.reset();
    }
  }
  registrationForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      mobileNumber: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      verificationCode: ['', Validators.required],
      policyCheck: [false, Validators.requiredTrue],
    });
  }
}
