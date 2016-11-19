import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavingsAppComponent } from './savings-app.component';
import { NewTargetComponent } from './new-target/new-target.component';
import { MainComponent } from './main/main.component';
import { AddSavingsComponent } from './add-savings/add-savings.component';

import { AuthGuard }             from '../shared/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '', 
    component: SavingsAppComponent, 
    canActivate: [ AuthGuard ],
    children: [
      {path: '', component: MainComponent},
      {path: 'new', component: NewTargetComponent},
      {path: 'add/:id', component: AddSavingsComponent},
    ]
  }
];

export const SavingsAppRouter: ModuleWithProviders = RouterModule.forChild(AppRoutes);
