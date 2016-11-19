import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SDKModule } from './shared/sdk/index';
import {AppState} from './shared/state.service';

import { AppRouter, AppRouterProviders } from './app.routes';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SavingsAppModule } from './savings-app/savings-app.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter,
    SDKModule.forRoot(),
    AuthModule,
    SavingsAppModule,
    
  ],
  providers: [AppState, AppRouterProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
