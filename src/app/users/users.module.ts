import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PhotoPassComponent } from './photo-pass/photo-pass.component';
import { OneDayPassComponent } from './one-day-pass/one-day-pass.component';
import { UserPhotosComponent } from './user-photos/user-photos.component';
import { PhotoPassInputComponent } from './shared/photo-pass-input/photo-pass-input.component';
import { PhotosContainerComponent } from './shared/photos-container/photos-container.component';
import { SortOrderPipe } from './sort-order.pipe';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    SortOrderPipe,
    UsersComponent,
    UserProfileComponent,
    PhotoPassComponent,
    OneDayPassComponent,
    UserPhotosComponent,
    PhotoPassInputComponent,
    PhotosContainerComponent,
    PhotoGalleryComponent,
  ],
})
export class UsersModule {}
