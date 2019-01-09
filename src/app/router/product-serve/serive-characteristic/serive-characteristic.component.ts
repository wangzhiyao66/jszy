import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
    selector: 'app-serive-characteristic',
    templateUrl: './serive-characteristic.component.html',
    styleUrls: ['./serive-characteristic.component.scss'],
    animations: [
        Pulse
    ]
})
export class SeriveCharacteristicComponent implements OnInit , OnChanges{

    speciallist: { code: number, title: string }[] = [
        {code: 1, title: '能够提高中医诊断的客观化、精准化'},
        {code: 2, title: '能够协助指导中医诊疗用药'},
        {code: 3, title: '能够观测记录中医药经络、穴位、气血、能量的变化'},
        {code: 4, title: '能够观测中医调理和康养健康管理的效果评价'},
        {code: 5, title: '能够对某些疑难杂症起到引导、启发、探索、评估作用'},
        {code: 6, title: '能够对各种非传染性慢病进行早早期、早期预警和中医治未病干预调理'},
    ];

    // 获取本地变量
    @ViewChild('special') special: ElementRef;
    @Input() docuheight: number;
    @Input() clientHeight: number;
    specialfalg: Boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    // 变更检测
    ngOnChanges(): void {
        const target: number = this.docuheight + this.clientHeight * 0.7;
        if (this.special.nativeElement.offsetTop <= target) {
            this.specialfalg = true;
        }
    }

}
