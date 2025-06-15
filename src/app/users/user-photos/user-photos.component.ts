import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { PhotosList, Photo } from '../user.utils';
import { CommonModule } from '@angular/common';
import { SortOrderPipe } from '../sort-order.pipe';

@Component({
  selector: 'app-user-photos',
  templateUrl: './user-photos.component.html',
  styleUrls: ['./user-photos.component.css'],
  imports: [SortOrderPipe, CommonModule],
})
export class UserPhotosComponent implements OnInit {
  private userService = inject(UserService);
  photosMasterList$!: Observable<PhotosList[]>;
  countOfPictures: number = 0;
  isSelectMode = false;
  selectedPhotos = new Set<string>();
  allPhotosFlat: Photo[] = [];
  loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.photosMasterList$ = this.userService.getUserPhotos();
    this.photosMasterList$.subscribe(() => (this.loading = false));
  }

  toggleSelectMode(photoGroups: PhotosList[]) {
    this.isSelectMode = !this.isSelectMode;
    this.selectedPhotos.clear();
    this.countOfPictures = 0;
    this.allPhotosFlat = photoGroups.flatMap((group) => group.photosList);
  }

  togglePhotoSelection(photoId: string) {
    if (this.selectedPhotos.has(photoId)) {
      this.selectedPhotos.delete(photoId);
    } else {
      this.selectedPhotos.add(photoId);
      this.countOfPictures++;
    }
  }

  selectAllPhotos() {
    this.allPhotosFlat.forEach((photo) => this.selectedPhotos.add(photo.id));
    this.countOfPictures = this.selectedPhotos.size;
  }

  clearAllPhotos() {
    this.selectedPhotos.clear();
    this.countOfPictures = 0;
  }
}
