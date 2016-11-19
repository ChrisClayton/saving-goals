import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  {
    path: 'app',
    loadChildren: 'app/savings-app/savings-app.module#SavingsAppModule'
  }
];

export const AppRouterProviders: any[] = [
  AuthGuard
];

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);