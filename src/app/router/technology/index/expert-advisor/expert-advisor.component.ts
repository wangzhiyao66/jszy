import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import { TechnologyServiceService } from '../../technology-service.service';
import {Enter} from '../../../../animations/advisor.animation';
import {Pulse} from '../../../../animations/pulse.animation';

@Component({
    selector: 'app-expert-advisor',
    templateUrl: './expert-advisor.component.html',
    styleUrls: ['./expert-advisor.component.scss'],
    animations: [
        Enter, Pulse
    ]
})
export class ExpertAdvisorComponent implements OnInit , OnChanges {

    proplelist: any[] = [];
    morelist: any[] = [];
    showlist: Boolean = false;
    // 获取本地变量
    @ViewChild('advissor') advissor: ElementRef;
    @Input() docuheight: number;
    @Input() clientHeight: number;
    expertfalg: Boolean = false;

    constructor(private advisor: TechnologyServiceService) {
    }

    ngOnInit() {
        this.proplelist = this.advisor.advisordata.slice( 0 , 12);
        this.morelist = this.advisor.advisordata.slice(-5);

    }

    // 变更检测
    ngOnChanges(): void {
        const target: number = this.docuheight + this.clientHeight * 0.7;
        if (this.advissor.nativeElement.offsetTop <= target) {
            this.expertfalg = true;
        }
    }

    addshow() {
        this.showlist = !this.showlist ;
    }

}
