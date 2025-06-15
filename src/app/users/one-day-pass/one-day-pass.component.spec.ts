import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDayPassComponent } from './one-day-pass.component';

describe('OneDayPassComponent', () => {
  let component: OneDayPassComponent;
  let fixture: ComponentFixture<OneDayPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneDayPassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneDayPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
