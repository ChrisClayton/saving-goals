import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import { BASE_URL, API_VERSION } from '../shared'; 
// import { LoopBackConfig }        from '../shared/sdk';
import { Account, AccessToken }  from '../../shared/sdk/models';
import { AccountApi }            from '../../shared/sdk/services';


@Component({
  selector: 'auth-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  private account: Account = new Account();

  constructor(private accountApi: AccountApi, private router: Router) { }

  private signup(event): void {
      this.accountApi.create(this.account).subscribe((account: Account) => this.router.navigate(['/auth/login']));
  }

}
