import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdmComponent } from './adm/adm.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'adm', component: AdmComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
