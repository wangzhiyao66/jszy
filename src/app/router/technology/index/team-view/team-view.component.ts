import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild
} from '@angular/core';
import { Pulse } from '../../../../animations/pulse.animation';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss'],
  animations: [Pulse]
})
export class TeamViewComponent implements OnInit, OnChanges {
  // 获取本地变量
  @ViewChild('team') team: ElementRef;
  @Input() docuheight: number;
  @Input() clientHeight: number;
  teamfalg = false;

  constructor() {}

  ngOnInit() {
    // console.log('子组件', this.team);
  }

  // 变更检测
  ngOnChanges(): void {
    // console.log('输入属性', this.docuheight);
    // console.log('可视区域', this.clientHeight);
    const target: number = this.docuheight + this.clientHeight * 0.7;
    if (this.team.nativeElement.offsetTop <= target) {
      this.teamfalg = true;
    }
  }
}
