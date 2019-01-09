import { Component, OnInit } from '@angular/core';
import {Enter} from '../../../animations/advisor.animation';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
  selector: 'app-market-apply',
  templateUrl: './market-apply.component.html',
  styleUrls: ['./market-apply.component.scss'],
  animations: [
    Enter, Pulse
  ]
})
export class MarketApplyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
