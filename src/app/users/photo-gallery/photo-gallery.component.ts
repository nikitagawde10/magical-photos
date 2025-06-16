import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from '../user.service';
import { User, PhotosList, Photo } from '../user.utils';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css'],
  imports: [CommonModule],
})
export class PhotoGalleryComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // Route parameters
  userId: string = '';
  photoListId: string = '';

  // State properties
  currentUser: User | null = null;
  photoCollection: PhotosList | null = null;
  photos: Photo[] = [];
  isLoading = false;
  errorMessage = '';

  // Gallery state
  selectedPhotos = new Set<string>();
  isSelectMode = false;
  currentImageIndex = 0;
  showCarousel = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Get route parameters
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.userId = params['userId'];
      this.photoListId = params['photoListId'];
      this.loadPhotoCollection();
    });

    // Subscribe to current user
    this.userService.currentUser$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        this.currentUser = user;
        if (!user) {
          this.router.navigate(['/login']);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected loadPhotoCollection(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.userService
      .getUserPhotos()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (photosList) => {
          this.photoCollection =
            photosList.find((p) => p.id === this.photoListId) || null;

          if (this.photoCollection) {
            this.photos = this.photoCollection.photosList;
          } else {
            this.errorMessage = 'Photo collection not found';
          }

          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading photo collection:', error);
          this.errorMessage = 'Failed to load photo collection';
          this.isLoading = false;
        },
      });
  }

  // Gallery navigation methods
  goBack(): void {
    this.router.navigate(['/users/photo-pass']);
  }

  // Selection methods
  toggleSelectMode(): void {
    this.isSelectMode = !this.isSelectMode;
    if (!this.isSelectMode) {
      this.selectedPhotos.clear();
    }
  }

  togglePhotoSelection(photoId: string): void {
    if (this.selectedPhotos.has(photoId)) {
      this.selectedPhotos.delete(photoId);
    } else {
      this.selectedPhotos.add(photoId);
    }
  }

  selectAllPhotos(): void {
    this.isSelectMode = true;
    this.photos.forEach((photo) => this.selectedPhotos.add(photo.id));
  }

  clearAllPhotos(): void {
    this.selectedPhotos.clear();
  }

  // Carousel methods
  openCarousel(index: number): void {
    if (!this.isSelectMode) {
      this.currentImageIndex = index;
      this.showCarousel = true;
    }
  }

  closeCarousel(): void {
    this.showCarousel = false;
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.photos.length;
  }

  previousImage(): void {
    this.currentImageIndex =
      this.currentImageIndex === 0
        ? this.photos.length - 1
        : this.currentImageIndex - 1;
  }

  // Utility methods
  get countOfSelectedPictures(): number {
    return this.selectedPhotos.size;
  }

  get currentPhoto(): Photo | null {
    return this.photos[this.currentImageIndex] || null;
  }

  trackByPhoto(index: number, item: Photo): string {
    return item.id;
  }
}
