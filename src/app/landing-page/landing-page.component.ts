import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LandingPageService } from './landing-page.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  landingPageHeader: string | null = null;
  constructor(
    private router: Router,
    private landingPageService: LandingPageService
  ) {}
  login() {
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    this.landingPageService.getLandingPageHeader().subscribe((blob) => {
      this.landingPageHeader = URL.createObjectURL(blob);
    });
  }
}
