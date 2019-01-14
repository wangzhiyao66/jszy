import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
  selector: 'app-industry-news',
  templateUrl: './industry-news.component.html',
  styleUrls: ['./industry-news.component.scss'],
  animations: [
    Pulse
  ]
})
export class IndustryNewsComponent implements OnInit , OnChanges{

  // 获取本地变量
  @ViewChild('industry') industry: ElementRef;
  @Input() docuheight: number;
  @Input() clientHeight: number;
  industryfalg: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // 变更检测
  ngOnChanges(): void {
    const target: number = this.docuheight + this.clientHeight * 0.7;
    if (this.industry.nativeElement.offsetTop <= target) {
      this.industryfalg = true;
    }
  }

}
