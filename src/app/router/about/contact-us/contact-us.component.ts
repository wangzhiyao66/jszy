import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  animations: [
    Pulse
  ]
})
export class ContactUsComponent implements OnInit , OnChanges{

  // 获取本地变量
  @ViewChild('contact') contact: ElementRef;
  @Input() docuheight: number;
  @Input() clientHeight: number;
  contactfalg: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // 变更检测
  ngOnChanges(): void {
    const target: number = this.docuheight + this.clientHeight * 0.7;
    if (this.contact.nativeElement.offsetTop <= target) {
      this.contactfalg = true;
    }
  }

}
