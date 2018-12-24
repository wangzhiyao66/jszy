import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-story-detaills',
  templateUrl: './story-detaills.component.html',
  styleUrls: ['./story-detaills.component.scss']
})
export class StoryDetaillsComponent implements OnInit {

  constructor(private router: Router,
              private activeRoute: ActivatedRoute) {
      // this.activeRoute.queryParams.subscribe({
      //     next: (data: { id: string }) => {
      //         console.log(data);
      //     }
      // });
      // 监听projectId
      this.activeRoute.queryParams.subscribe(params => {
          console.log('id', params );
      });
  }

  ngOnInit() {
  }

}
