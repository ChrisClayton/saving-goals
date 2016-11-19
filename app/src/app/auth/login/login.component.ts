import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Account, AccessToken }  from '../../shared/sdk/models';
import { AccountApi }            from '../../shared/sdk/services';
import { AppState }            from '../../shared/state.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    private account: Account = new Account();

    constructor(private accountApi: AccountApi, private router: Router, private appState: AppState) { }

    private signin(): void {
        this.accountApi.login(this.account).subscribe((token: AccessToken) => this.addData(token));
     }

    addData(token) {
        this.appState.set('token', token);
        console.log(this.appState.state);
        this.router.navigate(['/app']);
    }
}
