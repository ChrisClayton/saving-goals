import { ModuleWithProviders }  from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const AuthRoutes: Routes = [
  {path: 'auth', component: AuthComponent, 
      children: [
        {path: 'register', component: SignupComponent},
        {path: 'login', component: LoginComponent}
      ]
  }
];

export const AuthRouter: ModuleWithProviders = RouterModule.forChild(AuthRoutes);
