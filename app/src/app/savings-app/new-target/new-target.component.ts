import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Target, AccessToken }  from '../../shared/sdk/models';
import { AccountApi, TargetApi }            from '../../shared/sdk/services';

@Component({
  selector: 'app-new-target',
  templateUrl: './new-target.component.html',
  styleUrls: ['./new-target.component.css']
})
export class NewTargetComponent implements OnInit {
    target: Target = new Target();

  constructor(private router: Router, 
              private accountApi: AccountApi, 
              private targetApi: TargetApi
              ) { }

  ngOnInit() {}

  addTarget() {
      this.accountApi.createTargets(this.accountApi.getCurrentId(), this.target).subscribe((target: Target) => this.router.navigate(['/app']));
  }

}
