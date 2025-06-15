import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../users/user.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  private destroy$ = new Subject<void>();

  // State properties
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.loginForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {
    // Clear any previous errors when component loads
    this.userService.clearAuthError();

    // Subscribe to loading state
    this.userService.isLoading$
      .pipe(takeUntil(this.destroy$))
      .subscribe((loading) => {
        this.isLoading = loading;
      });

    // Subscribe to auth errors
    this.userService.authError$
      .pipe(takeUntil(this.destroy$))
      .subscribe((error) => {
        this.errorMessage = error || '';
      });

    // Check if user is already authenticated
    this.userService.isAuthenticated$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigate(['/users']);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  login(): void {
    if (this.loginForm.valid) {
      const mobileNumber = Number(this.loginForm.get('mobileNumber')?.value);
      const password = this.loginForm.get('password')?.value;

      console.log('Attempting login with:', mobileNumber, password);

      this.userService
        .loginUser(mobileNumber, password)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (success) => {
            if (success) {
              console.log('Login successful, navigating to users page');
              this.loginForm.reset();
              this.router.navigate(['/users']);
            }
            // Error handling is done through the auth error observable
          },
          error: (error) => {
            console.error('Login error:', error);
            this.errorMessage =
              'An error occurred during login. Please try again.';
          },
        });
    } else {
      // Mark all fields as touched to show validation errors
      this.markFormGroupTouched();
    }
  }

  registerUser(): void {
    this.router.navigate(['/register']);
  }

  onCancel(): void {
    this.loginForm.reset();
    this.errorMessage = '';
    this.userService.clearAuthError();
  }

  private markFormGroupTouched(): void {
    Object.keys(this.loginForm.controls).forEach((key) => {
      const control = this.loginForm.get(key);
      control?.markAsTouched();
    });
  }

  // Getter methods for template
  get mobileNumber() {
    return this.loginForm.get('mobileNumber');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
