import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  imports: [ReactiveFormsModule],
})
export class UserProfileComponent {
  onCancel() {
    this.profileForm.reset();
  }
  onProfileEdited() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }
  profileForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      subscriptionCheck: [false, Validators.required],
    });
    this.passwordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }

  passwordForm!: FormGroup;
  onPasswordChanged() {
    if (this.passwordForm.valid) {
      console.log(this.passwordForm.value);
    }
  }
}
