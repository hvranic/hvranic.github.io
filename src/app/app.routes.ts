import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { User } from './user/user';

export const routes: Routes = [
  {
    path: 'home',
    title: 'App Home Page',
    component: Home,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: User,
  },
    {
    path: 'login',
    title: 'App Login Page',
    component: Login,
  },
  {
    path: '',
    title: 'App Login Page',
    component: Login,
  },
];
