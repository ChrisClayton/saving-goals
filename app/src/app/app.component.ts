import { Component } from '@angular/core';

import { LoopBackConfig } from './shared/sdk/index';
import { Account, AccessToken }  from './shared/sdk/models';
import { AccountApi }            from './shared/sdk/services';

import { AppState } from './shared/state.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app root!';

  constructor(private accountApi: AccountApi, public appState: AppState) {
    LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
    LoopBackConfig.setApiVersion('api');
  }

  ngOnInit() {
      console.log('Initial App State', this.appState.state);
  }
}
