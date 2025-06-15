import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  imports: [CommonModule, RouterOutlet, RouterModule],
})
export class UsersComponent {
  userHeadingImage: string | null = null;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUserPageHeader().subscribe((blob) => {
      this.userHeadingImage = URL.createObjectURL(blob);
    });
  }
}
