import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
    selector: 'app-serive-platform',
    templateUrl: './serive-platform.component.html',
    styleUrls: ['./serive-platform.component.scss'],
    animations: [
        Pulse
    ]
})
export class SerivePlatformComponent implements OnInit, OnChanges {

    // 获取本地变量
    @ViewChild('platform') platform: ElementRef;
    @Input() docuheight: number;
    @Input() clientHeight: number;
    platformfalg: Boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    // 变更检测
    ngOnChanges(): void {
        const target: number = this.docuheight + this.clientHeight * 0.7;
        if (this.platform.nativeElement.offsetTop <= target) {
            this.platformfalg = true;
        }
    }
}
