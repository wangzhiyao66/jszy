import { Component, OnInit } from '@angular/core';
import {Enter} from '../../../animations/advisor.animation';

@Component({
  selector: 'app-market-view',
  templateUrl: './market-view.component.html',
  styleUrls: ['./market-view.component.scss'],
  animations: [
    Enter
  ]
})
export class MarketViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
