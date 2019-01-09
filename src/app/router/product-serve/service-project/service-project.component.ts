import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
  selector: 'app-service-project',
  templateUrl: './service-project.component.html',
  styleUrls: ['./service-project.component.scss'],
  animations: [
    Pulse
  ]
})
export class ServiceProjectComponent implements OnInit , OnChanges{

  // 获取本地变量
  @ViewChild('project') project: ElementRef;
  @Input() docuheight: number;
  @Input() clientHeight: number;
  projectfalg: Boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  // 变更检测
  ngOnChanges(): void {
    const target: number = this.docuheight + this.clientHeight * 0.7;
    if (this.project.nativeElement.offsetTop <= target) {
      this.projectfalg = true;
    }
  }

}
