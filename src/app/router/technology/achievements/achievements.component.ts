import {Component, OnInit} from '@angular/core';
import {OriginData} from '../../../interface/responses-data';

@Component({
    selector: 'app-achievements',
    templateUrl: './achievements.component.html',
    styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

    storylist: ({ id: number; url: string; title: string })[] = [
        {
            id: 1, url: '../../../../assets/images/overview/parget/exclusive1.png',
            title: '实用新型专利证书'
        },
        {
            id: 2, url: '../../../../assets/images/overview/parget/exclusive2.png',
            title: '外观设计专利证书1'
        },
        {
            id: 3, url: '../../../../assets/images/overview/parget/exclusive3.png',
            title: '外观设计专利证书1'
        },
        {
            id: 4, url: '../../../../assets/images/overview/parget/exclusive4.png',
            title: '外观设计专利证书1'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
