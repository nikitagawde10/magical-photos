import { Component } from '@angular/core';
import { PhotoPassInputComponent } from '../shared/photo-pass-input/photo-pass-input.component';

@Component({
  selector: 'app-one-day-pass',
  templateUrl: './one-day-pass.component.html',
  styleUrls: ['./one-day-pass.component.css'],
  imports: [PhotoPassInputComponent],
})
export class OneDayPassComponent {}
