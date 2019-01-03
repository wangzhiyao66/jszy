import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-serive-characteristic',
    templateUrl: './serive-characteristic.component.html',
    styleUrls: ['./serive-characteristic.component.scss']
})
export class SeriveCharacteristicComponent implements OnInit {

    speciallist: { code: number, title: string }[] = [
        { code: 1, title: '能够提高中医诊断的客观化、精准化' },
        { code: 2, title: '能够协助指导中医诊疗用药' },
        { code: 3, title: '能够观测记录中医药经络、穴位、气血、能量的变化' },
        { code: 4, title: '能够观测中医调理和康养健康管理的效果评价' },
        { code: 5, title: '能够对某些疑难杂症起到引导、启发、探索、评估作用' },
        { code: 6, title: '能够对各种非传染性慢病进行早早期、早期预警和中医治未病干预调理' },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
