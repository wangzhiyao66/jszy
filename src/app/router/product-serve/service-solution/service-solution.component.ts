import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
  selector: 'app-service-solution',
  templateUrl: './service-solution.component.html',
  styleUrls: ['./service-solution.component.scss'],
  animations: [
    Pulse
  ]
})
export class ServiceSolutionComponent implements OnInit , OnChanges{

  // 获取本地变量
  @ViewChild('solution') solution: ElementRef;
  @Input() docuheight: number;
  @Input() clientHeight: number;
  solutionfalg: Boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  // 变更检测
  ngOnChanges(): void {
    const target: number = this.docuheight + this.clientHeight * 0.7;
    if (this.solution.nativeElement.offsetTop <= target) {
      this.solutionfalg = true;
    }
  }

}
