import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
  selector: 'app-social-concern',
  templateUrl: './social-concern.component.html',
  styleUrls: ['./social-concern.component.scss'],
  animations: [
    Pulse
  ]
})
export class SocialConcernComponent implements OnInit , OnChanges{

  storylist: { src: string, title: string }[] = [
    { src: '../../../assets/images/about/1.png', title: '2015年春节习近平总书记视察我公司产品'},
    { src: '../../../assets/images/about/2.png', title: '我公司便捷式红外影像设备'},
    { src: '../../../assets/images/about/3.png', title: '我公司便捷式红外影像设备'},
  ];

  // 获取本地变量
  @ViewChild('social') social: ElementRef;
  @Input() docuheight: number;
  @Input() clientHeight: number;
  socialfalg: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // 变更检测
  ngOnChanges(): void {
    const target: number = this.docuheight + this.clientHeight * 0.7;
    if (this.social.nativeElement.offsetTop <= target) {
      this.socialfalg = true;
    }
  }

}
