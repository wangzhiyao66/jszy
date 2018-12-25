import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-story-detaills',
    templateUrl: './story-detaills.component.html',
    styleUrls: ['./story-detaills.component.scss']
})
export class StoryDetaillsComponent implements OnInit {
    detaillId = null;

    constructor(private router: Router,
                private activeRoute: ActivatedRoute) {
        // 监听projectId
        this.activeRoute.queryParams.subscribe({
            next: params => {
                this.detaillId = params.id;
                console.log(this.detaillId);
            }
        });
    }

    ngOnInit() {
    }

}
