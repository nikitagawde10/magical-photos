import { Component } from '@angular/core';
import { PhotoPassInputComponent } from '../shared/photo-pass-input/photo-pass-input.component';
import { PhotosContainerComponent } from '../shared/photos-container/photos-container.component';
import { PhotosList } from '../user.utils';
import { UserService } from '../user.service';

@Component({
  selector: 'app-photo-pass',
  templateUrl: './photo-pass.component.html',
  styleUrls: ['./photo-pass.component.css'],
  imports: [PhotosContainerComponent, PhotoPassInputComponent],
})
export class PhotoPassComponent {
  photosList: PhotosList[] = [];

  constructor(private userService: UserService) {
    this.userService.getUserPhotos().subscribe((photos: PhotosList[]) => {
      this.photosList = photos;
    });
  }
}
