import { Pipe, PipeTransform } from '@angular/core';
import { PhotosList } from './user.utils';

@Pipe({
  name: 'sortOrder',
  standalone: true,
})
export class SortOrderPipe implements PipeTransform {
  transform(photosList: PhotosList[]): PhotosList[] {
    if (!photosList) return [];

    return [...photosList].sort((a, b) => {
      // Sort by date (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }
}
