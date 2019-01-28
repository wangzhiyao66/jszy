import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-router',
    templateUrl: './router.component.html',
    styleUrls: ['./router.component.scss']
})
export class RouterComponent implements OnInit {

    constructor(private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit() {
        const viewWidth = document.body.clientWidth;
        if( viewWidth < 1200 ) {
            this.router.navigate(['/login'], { skipLocationChange: true } );
        }
    }

}
