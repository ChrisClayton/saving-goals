import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SDKModule } from '../shared/sdk/index';
import { FormsModule } from '@angular/forms';

import { AuthRouter } from './auth.routes';

import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    AuthRouter,
    SDKModule.forRoot(),
    FormsModule
  ],
  declarations: [
    AuthComponent,
    SignupComponent,
    LoginComponent
  ]
})
export class AuthModule { }
