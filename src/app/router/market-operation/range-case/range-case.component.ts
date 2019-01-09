import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Enter} from '../../../animations/advisor.animation';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
  selector: 'app-range-case',
  templateUrl: './range-case.component.html',
  styleUrls: ['./range-case.component.scss'],
  animations: [
    Enter, Pulse
  ]
})
export class RangeCaseComponent implements OnInit , OnChanges{

  storylist: {id: number, url: string, title: string }[] = [
    {id: 1, url: '../../../../assets/images/market/case/1.png',
      // tslint:disable-next-line:max-line-length
      title: '北大医疗健康管理中心：中医体检+保险模式'},

    {id: 2, url: '../../../../assets/images/market/case/2.png',
      // tslint:disable-next-line:max-line-length
      title: '宣武中医医院：专科专病模式'},
    {id: 3, url: '../../../../assets/images/market/case/3.png',
      // tslint:disable-next-line:max-line-length
      title: '北京社区健康促进会：家庭医生签约服务模式'},
  ];
  // 获取本地变量
  @ViewChild('range') range: ElementRef;
  @Input() docuheight: number;
  @Input() clientHeight: number;
  rangefalg: Boolean = false;

  constructor() { }

  ngOnInit() {
  }
  // 变更检测
  ngOnChanges(): void {
    const target: number = this.docuheight + this.clientHeight * 0.7;
    if (this.range.nativeElement.offsetTop <= target) {
      this.rangefalg = true;
    }
  }
}
