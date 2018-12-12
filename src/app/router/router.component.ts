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
        //
    }

}
