import { Component, OnInit } from '@angular/core';
import { Enter } from 'src/app/animations/advisor.animation';

@Component({
  selector: 'app-serive-view',
  templateUrl: './serive-view.component.html',
  styleUrls: ['./serive-view.component.scss'],
  animations: [
    Enter
]
})
export class SeriveViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
