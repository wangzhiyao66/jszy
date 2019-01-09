import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Enter} from '../../../animations/advisor.animation';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
  selector: 'app-after-serive',
  templateUrl: './after-serive.component.html',
  styleUrls: ['./after-serive.component.scss'],
  animations: [
    Enter, Pulse
  ]
})
export class AfterSeriveComponent implements OnInit , OnChanges{

  showlist: { src: string, title: string, text: string, falg: boolean}[] = [
    {
      src: '../../../../assets/images/market/after/1.png', title: '保修服务', falg: false,
      text: '设备免费保修一年，终身维护。'
    },
    {
      src: '../../../../assets/images/market/after/2.png', title: '培训服务', falg: false,
      text: '提供操作使用、报告解读的技术培训。'
    },
    {
      src: '../../../../assets/images/market/after/3.png', title: '远程支持', falg: false,
      text: '提供远程评估服务'
    },
  ];
  // 获取本地变量
  @ViewChild('afterview') afterview: ElementRef;
  @Input() docuheight: number;
  @Input() clientHeight: number;
  afterviewfalg: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // 变更检测
  ngOnChanges(): void {
    const target: number = this.docuheight + this.clientHeight * 0.7;
    if (this.afterview.nativeElement.offsetTop <= target) {
      this.afterviewfalg = true;
    }
  }
}
