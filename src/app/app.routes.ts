import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { UserPhotosComponent } from './users/user-photos/user-photos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'gallery', component: UserPhotosComponent },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
  },
];
