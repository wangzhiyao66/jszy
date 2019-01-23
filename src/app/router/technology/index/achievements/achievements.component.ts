import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {OriginData} from '../../../../interface/responses-data';
import {Pulse} from '../../../../animations/pulse.animation';

@Component({
    selector: 'app-achievements',
    templateUrl: './achievements.component.html',
    styleUrls: ['./achievements.component.scss'],
    animations: [
        Pulse
    ]
})
export class AchievementsComponent implements OnInit, OnChanges {

    storylist: ({ id: number; url: string; title: string })[] = [
        {
            id: 1, url: '../../../../assets/images/overview/parget/exclusive1.png',
            title: '实用新型专利证书'
        },
        {
            id: 2, url: '../../../../assets/images/overview/parget/exclusive2.png',
            title: '外观设计专利证书2'
        },
        {
            id: 3, url: '../../../../assets/images/overview/parget/exclusive3.png',
            title: '外观设计专利证书3'
        },
        {
            id: 4, url: '../../../../assets/images/overview/parget/exclusive4.png',
            title: '外观设计专利证书1'
        },
    ];
    // 获取本地变量
    @ViewChild('achievements') achievements: ElementRef;
    @Input() docuheight: number;
    @Input() clientHeight: number;
    achievementsfalg: Boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    // 变更检测
    ngOnChanges(): void {
        const target: number = this.docuheight + this.clientHeight * 0.7;
        if (this.achievements.nativeElement.offsetTop <= target) {
            this.achievementsfalg = true;
        }
    }

}
