import {Component, OnInit} from '@angular/core';
import {transverse} from '../../../animations/tabs.anmation';

@Component({
    selector: 'app-serive-hardware',
    templateUrl: './serive-hardware.component.html',
    styleUrls: ['./serive-hardware.component.scss'],
    animations: [ transverse ]
})
export class SeriveHardwareComponent implements OnInit {

    hardwarelist = [
        {falg: true},
        {falg: false},
        {falg: false},
    ];

    constructor() {
    }

    ngOnInit() {
    }

    showimg(num: number) {
        this.hardwarelist.forEach(el => el.falg = false );
        this.hardwarelist[num].falg = true;
    }

}
