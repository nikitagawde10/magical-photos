import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPassInputComponent } from './photo-pass-input.component';

describe('PhotoPassInputComponent', () => {
  let component: PhotoPassInputComponent;
  let fixture: ComponentFixture<PhotoPassInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoPassInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoPassInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
