import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoopBackConfig } from '../shared/sdk/index';
import { Account, AccessToken }  from '../shared/sdk/models';
import { AccountApi }            from '../shared/sdk/services';

import { Target }  from '../shared/sdk/models';
import { TargetApi }            from '../shared/sdk/services';

@Component({
  selector: 'app-savings-app',
  templateUrl: './savings-app.component.html',
  styleUrls: ['./savings-app.component.css']
})
export class SavingsAppComponent {
  title = 'savings app!';
  isAuthenticated = this.accountApi.isAuthenticated();
 
  // target1 = ;
  // this.targetApi

  constructor(private accountApi: AccountApi, private router: Router) {
    LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
    LoopBackConfig.setApiVersion('api');
    // let isAuthenticated = this.accountApi.isAuthenticated());
  }

  private logout(event): void {
      this.accountApi.logout().subscribe(() => this.router.navigate(['/auth/login']));
  }
  openNewGoalModal():void {
    console.log("open modal");
  }
}