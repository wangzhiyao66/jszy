import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Enter} from '../../../animations/advisor.animation';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
    selector: 'app-introduce-view',
    templateUrl: './introduce-view.component.html',
    styleUrls: ['./introduce-view.component.scss'],
    animations: [
        Pulse
    ]
})
export class IntroduceViewComponent implements OnInit , OnChanges {

    // 获取本地变量
    @ViewChild('introduce') introduce: ElementRef;
    @Input() docuheight: number;
    @Input() clientHeight: number;

    imageUrl: object[] = [
        {url: '../../../../assets/images/overview/introduce/1.png'},
        {url: '../../../../assets/images/overview/introduce/2.png'},
        {url: '../../../../assets/images/overview/introduce/3.png'},
        {url: '../../../../assets/images/overview/introduce/4.png'},
        {url: '../../../../assets/images/overview/introduce/5.png'},
        {url: '../../../../assets/images/overview/introduce/6.png'},
        {url: '../../../../assets/images/overview/introduce/7.png'},
    ];
    introducefalg = false;
    constructor() {
    }

    ngOnInit() {
        console.log('子组件', this.introduce );
    }

    // 变更检测
    ngOnChanges(): void {
        // console.log('子组件高度', this.introduce.nativeElement.offsetTop);
        // console.log('输入属性', this.docuheight);
        // console.log('可视区域', this.clientHeight);
        const target: number = this.docuheight + this.clientHeight * 0.7;
        if (this.introduce.nativeElement.offsetTop <= target) {
            this.introducefalg = true;
        }
    }

}
