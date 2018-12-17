import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-technology',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './technology.component.html',
    styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        this.notify();
    }

    notify(): void {
        console.log('notify');
    }

}
