import { Component, OnInit, OnDestroy } from '@angular/core';
import { Photo, PhotosList } from '../../user.utils';
import { CommonModule } from '@angular/common';
import { SortOrderPipe } from '../../sort-order.pipe';
import { UserService } from '../../user.service';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos-container',
  templateUrl: './photos-container.component.html',
  styleUrls: ['./photos-container.component.css'],
  imports: [CommonModule, SortOrderPipe],
})
export class PhotosContainerComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // State properties
  photosList: PhotosList[] = [];
  isLoading = false;
  isAuthenticated = false;
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    // Check authentication status
    this.userService.isAuthenticated$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
        if (!isAuthenticated) {
          // Redirect to login if not authenticated
          this.router.navigate(['/login']);
        } else {
          // Load user photos when authenticated
          this.loadUserPhotos();
        }
      });

    // Subscribe to current user changes to reload photos
    this.userService.currentUser$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        if (user) {
          this.photosList = user.masterPhotosList || [];
        } else {
          this.photosList = [];
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  trackByPhotoList(index: number, item: PhotosList): string {
    return item.id;
  }

  trackByPhoto(index: number, item: Photo): string {
    return item.id;
  }

  private loadUserPhotos(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.userService
      .getUserPhotos()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (photos) => {
          this.photosList = photos;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading photos:', error);
          this.errorMessage = 'Failed to load photos. Please try again.';
          this.isLoading = false;
        },
      });
  }

  // Updated method to navigate to gallery
  openPhotosList(photoListId: string): void {
    const currentUser = this.userService.getCurrentUser();
    if (currentUser) {
      // Navigate to the photo gallery with userId and photoListId
      this.router.navigate(['/users', currentUser.id, 'photos', photoListId]);
    } else {
      this.errorMessage = 'Please log in to view photos';
    }
  }

  deletePhotoSelection(photoId: string): void {
    if (!photoId) return;

    if (confirm('Are you sure you want to delete this photo collection?')) {
      const user = this.userService.getCurrentUser();

      if (!user) {
        this.errorMessage = 'No user logged in. Please log in again.';
        this.router.navigate(['/login']);
        return;
      }

      console.log('Deleting photos list with id ->', photoId);

      this.userService
        .removePhotoCollection(photoId)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (success) => {
            if (success) {
              console.log('Photo collection deleted successfully');
              this.loadUserPhotos();
            }
          },
          error: (error) => {
            console.error('Error deleting photo collection:', error);
            this.errorMessage =
              'Failed to delete photo collection. Please try again.';
          },
        });
    }
  }

  retryLoadPhotos(): void {
    this.loadUserPhotos();
  }

  get hasPhotos(): boolean {
    return this.photosList && this.photosList.length > 0;
  }

  get totalPhotosCount(): number {
    return this.photosList.reduce(
      (total, list) => total + list.photosList.length,
      0
    );
  }
}
