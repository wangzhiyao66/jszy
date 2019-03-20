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
