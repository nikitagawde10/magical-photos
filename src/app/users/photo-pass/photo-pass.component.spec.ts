import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPassComponent } from './photo-pass.component';

describe('PhotoPassComponent', () => {
  let component: PhotoPassComponent;
  let fixture: ComponentFixture<PhotoPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoPassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
