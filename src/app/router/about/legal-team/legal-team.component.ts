import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
  selector: 'app-legal-team',
  templateUrl: './legal-team.component.html',
  styleUrls: ['./legal-team.component.scss'],
  animations: [
    Pulse
  ]
})
export class LegalTeamComponent implements OnInit , OnChanges  {

  // 获取本地变量
  @ViewChild('team') team: ElementRef;
  @Input() docuheight: number;
  @Input() clientHeight: number;
  teamfalg: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // 变更检测
  ngOnChanges(): void {
    const target: number = this.docuheight + this.clientHeight * 0.7;
    if (this.team.nativeElement.offsetTop <= target) {
      this.teamfalg = true;
    }
  }

}
