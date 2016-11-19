import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-savings',
  templateUrl: './add-savings.component.html',
  styleUrls: ['./add-savings.component.css']
})
export class AddSavingsComponent implements OnInit {
    id: number;
    private sub: any;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
      this.sub = this.activeRoute.params.subscribe(params => {
             this.id = +params['id']; // (+) converts string 'id' to a number
      });
  }

}
