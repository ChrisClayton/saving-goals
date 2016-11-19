import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SavingsAppComponent } from './savings-app.component';
import { SavingsAppRouter } from './savings-app.routes';
import { NewTargetComponent } from './new-target/new-target.component';
import { MainComponent } from './main/main.component';
import { AddSavingsComponent } from './add-savings/add-savings.component';

@NgModule({
  imports: [
    CommonModule,
    SavingsAppRouter,
    FormsModule
  ],
  declarations: [
    SavingsAppComponent,
    NewTargetComponent,
    MainComponent,
    AddSavingsComponent
  ]
})
export class SavingsAppModule { }
