import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../users/user.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { User } from '../users/user.utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, RouterModule],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // State properties
  isAuthenticated = false;
  currentUser: User | null = null;
  logo: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to authentication state
    this.userService.isAuthenticated$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
      });

    // Subscribe to current user
    this.userService.currentUser$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        this.currentUser = user;
      });

    this.loadLogo();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadLogo(): void {
    this.logo = 'https://picsum.photos/id/237/200/60';
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }

  // navigateToProfile(): void {
  //   if (this.isAuthenticated) {
  //     this.router.navigate(['/users']);
  //   }
  // }

  get userDisplayName(): string {
    return this.currentUser?.name || 'User';
  }
}
