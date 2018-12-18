import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-introduce-view',
    templateUrl: './introduce-view.component.html',
    styleUrls: ['./introduce-view.component.scss']
})
export class IntroduceViewComponent implements OnInit {

    imageUrl: object[] = [
        {url: '../../../../assets/images/overview/introduce/1.png'},
        {url: '../../../../assets/images/overview/introduce/2.png'},
        {url: '../../../../assets/images/overview/introduce/3.png'},
        {url: '../../../../assets/images/overview/introduce/4.png'},
        {url: '../../../../assets/images/overview/introduce/5.png'},
        {url: '../../../../assets/images/overview/introduce/6.png'},
        {url: '../../../../assets/images/overview/introduce/7.png'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
