import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        redirectTo: 'photo-pass',
        pathMatch: 'full',
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./user-profile/user-profile.component').then(
            (m) => m.UserProfileComponent
          ),
      },
      {
        path: 'photo-pass',
        loadComponent: () =>
          import('./photo-pass/photo-pass.component').then(
            (m) => m.PhotoPassComponent
          ),
      },
      {
        path: 'one-day-pass',
        loadComponent: () =>
          import('./one-day-pass/one-day-pass.component').then(
            (m) => m.OneDayPassComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
