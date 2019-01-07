import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {fiterPagel} from '../../../animations/fiterPagel.animation';

@Component({
  selector: 'app-serive-function',
  templateUrl: './serive-function.component.html',
  styleUrls: ['./serive-function.component.scss'],
  animations: [
    fiterPagel
  ]
})
export class SeriveFunctionComponent implements OnInit , OnChanges {

  // 获取本地变量
  @ViewChild('functions') functions: ElementRef;
  @Input() docuheight: number;
  @Input() clientHeight: number;
  functionfalg: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // 变更检测
  ngOnChanges(): void {
    console.log('clientHeight', this.functionfalg);
    const target: number = this.docuheight + this.clientHeight * 0.7;
    if (this.functions.nativeElement.offsetTop <= target) {
      this.functionfalg = true;
    }
  }

}
