import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Enter} from '../../../animations/advisor.animation';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
  selector: 'app-cooperation-mode',
  templateUrl: './cooperation-mode.component.html',
  styleUrls: ['./cooperation-mode.component.scss'],
  animations: [
    Enter, Pulse
  ]
})
export class CooperationModeComponent implements OnInit {

  list: { src: string, bg_src: string, text: string }[] = [
    {
      src: '../../../../assets/images/productsservice/function/1.png',
      bg_src: '../../../../assets/images/productsservice/function/1-1.png',
      text: '硬件设备销售+云平台服务费'
    },
    {
      src: '../../../../assets/images/productsservice/function/2.png',
      bg_src: '../../../../assets/images/productsservice/function/2-2.png',
      text: '纯服务费模式'
    },
    {
      src: '../../../../assets/images/productsservice/function/3.png',
      bg_src: '../../../../assets/images/productsservice/function/3-3.png',
      text: '设备租赁+云平台服务费'
    },
    {
      src: '../../../../assets/images/productsservice/function/4.png',
      bg_src: '../../../../assets/images/productsservice/function/4-4.png',
      text: '商业模式探索性合作'
    },
    {
      src: '../../../../assets/images/productsservice/function/5.png',
      bg_src: '../../../../assets/images/productsservice/function/5-5.png',
      text: '政府购买服务型合作'
    }
  ];

  // 获取本地变量
  @ViewChild('cooperation') cooperation: ElementRef;
  @Input() docuheight: number;
  @Input() clientHeight: number;
  cooperationfalg: Boolean = false;

  constructor() { }

  ngOnInit() {
  }
  // 变更检测
  ngOnChanges(): void {
    const target: number = this.docuheight + this.clientHeight * 0.7;
    if (this.cooperation.nativeElement.offsetTop <= target) {
      this.cooperationfalg = true;
    }
  }
}
