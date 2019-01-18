import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
  animations: [
    Pulse
  ]
})
export class OrganizationComponent implements OnInit , OnChanges {

  // 获取本地变量
  @ViewChild('organization') organization: ElementRef;
  @Input() docuheight: number;
  @Input() clientHeight: number;
  organizationfalg: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // 变更检测
  ngOnChanges(): void {
    const target: number = this.docuheight + this.clientHeight * 0.7;
    if (this.organization.nativeElement.offsetTop <= target) {
      this.organizationfalg = true;
    }
  }

}
