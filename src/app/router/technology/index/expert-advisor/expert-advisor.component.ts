import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {TechnologyServiceService} from '../../technology-service.service';
import {Pulse} from '../../../../animations/pulse.animation';
import {NzModalService} from 'ng-zorro-antd';
import {Enter} from '../../../../animations/advisor.animation';

@Component({
    selector: 'app-expert-advisor',
    templateUrl: './expert-advisor.component.html',
    styleUrls: ['./expert-advisor.component.scss'],
    animations: [
        Enter, Pulse
    ]
})
export class ExpertAdvisorComponent implements OnInit, OnChanges {

    proplelist: any[] = [];
    morelist: any[] = [];
    showlist = false;
    // 获取本地变量
    @ViewChild('advissor') advissor: ElementRef;
    @Input() docuheight: number;
    @Input() clientHeight: number;
    // 是否开始执行动画
    expertfalg = false;
    // 弹出框
    isVisible = false;
    // 这展示具体专家数据
    propleshowdata: any = {};

    constructor(private advisor: TechnologyServiceService,
                private modalService: NzModalService) {
    }

    ngOnInit() {
        this.proplelist = this.advisor.advisordata.slice(0, 12);
        this.morelist = this.advisor.advisordata.slice(-5);

    }

    seedata(item: object): void {
        console.log(item);
        this.propleshowdata = item;
        this.isVisible = !this.isVisible;
    }

    handleOk(): void {
        this.isVisible = false;
    }

    handleCancel(): void {
        this.isVisible = false;
    }

    // 变更检测
    ngOnChanges(): void {
        const target: number = this.docuheight + this.clientHeight * 0.7;
        if (this.advissor.nativeElement.offsetTop <= target) {
            this.expertfalg = true;
        }
    }

    addshow() {
        this.showlist = !this.showlist;
    }

}
