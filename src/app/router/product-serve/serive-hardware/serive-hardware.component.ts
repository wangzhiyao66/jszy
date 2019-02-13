import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {transverse} from '../../../animations/tabs.anmation';
import {Enter} from '../../../animations/advisor.animation';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
    selector: 'app-serive-hardware',
    templateUrl: './serive-hardware.component.html',
    styleUrls: ['./serive-hardware.component.scss'],
    animations: [
        transverse,
        Pulse
    ]
})
export class SeriveHardwareComponent implements OnInit , OnChanges{

    // 获取本地变量
    @ViewChild('hardware') hardware: ElementRef;
    @Input() docuheight: number;
    @Input() clientHeight: number;
    hardwarefalg: Boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    // 变更检测
    ngOnChanges(): void {
        const target: number = this.docuheight + this.clientHeight * 0.7;
        if (this.hardware.nativeElement.offsetTop <= target) {
            this.hardwarefalg = true;
        }
    }

}
