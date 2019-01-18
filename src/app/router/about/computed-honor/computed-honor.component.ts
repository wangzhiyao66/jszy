import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
  selector: 'app-computed-honor',
  templateUrl: './computed-honor.component.html',
  styleUrls: ['./computed-honor.component.scss'],
  animations: [
    Pulse
  ]
})
export class ComputedHonorComponent implements OnInit , OnChanges{
  datalist: { src: string, title: string}[] = [
    { src: '../../../assets/images/about/3.png', title: '俞梦孙院士关注可视化技术'},
    { src: '../../../assets/images/about/4.png', title: '江西中医大学授予 "创新实践基地"'},
  ];

  // 获取本地变量
  @ViewChild('honor') honor: ElementRef;
  @Input() docuheight: number;
  @Input() clientHeight: number;
  honorfalg: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // 变更检测
  ngOnChanges(): void {
    const target: number = this.docuheight + this.clientHeight * 0.7;
    if (this.honor.nativeElement.offsetTop <= target) {
      this.honorfalg = true;
    }
  }
}
