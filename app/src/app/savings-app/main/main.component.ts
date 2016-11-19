import { Component, OnInit } from '@angular/core';

import { Target, AccessToken }  from '../../shared/sdk/models';
import { AccountApi }            from '../../shared/sdk/services';

import { AppState }            from '../../shared/state.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  targets: Array<Target>;

  constructor(private accountApi: AccountApi, private appState: AppState) { }

  ngOnInit() {
    this.accountApi.getTargets(this.accountApi.getCurrentId()).subscribe((targets: Array<Target>) => this.targets = targets);
    // this.targets = [
    //   {
    //     title: 'Weekend In Paris',
    //     image: 'http://www.airport-orly.com/images/paris-tour-eiffel-at-night.jpg',
    //     date: '19',
    //     totalValue: '1250',
    //     description: 'Contributing 10pd, 2.5 remaining'
    //   },
    //   {
    //     title: 'New Bicycle',
    //     image: 'http://www.fervency.co.uk/designstore/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/1/m13205600_martone_cycling_gramercy_red_bike_fervency_uk_1.jpg',
    //     date: '12',
    //     totalValue: '250',
    //     description: 'my red bike'
    //   }
    // ];
  }

}
