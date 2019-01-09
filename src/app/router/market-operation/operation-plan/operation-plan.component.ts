import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Enter} from '../../../animations/advisor.animation';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
  selector: 'app-operation-plan',
  templateUrl: './operation-plan.component.html',
  styleUrls: ['./operation-plan.component.scss'],
  animations: [
    Enter, Pulse
  ]
})
export class OperationPlanComponent implements OnInit , OnChanges{

  showlist: { src: string, label: string, text: string}[] = [
    {
      label: '1、诊所运营方案' ,
      src: '../../../../assets/images/market/plan/1.png',
      text: '根据中医诊所的特点与面临的实际问题，应用中医可视化智能健康服务系统从技术与市场运营层面的应用环节、模式、操作流程等方面提出相应的解决办法'
    },
    {
      label: '2、社区健康服务站运营方案' ,
      src: '../../../../assets/images/market/plan/2.png',
      text: '以社区为核心，建立基于中医可视化技术的社区居民健康大数据及数字化的个人健康档案，开展科学健康养生保健普查，集预防、调理、保健、康复以及指导健康生活方式为服务内容的解决方案。'
    },
    {
      label: '3、体检机构运营方案' ,
      src: '../../../../assets/images/market/plan/3.png',
      text: '现有体检机构以西医检查为主，导入中医可视化智能健康服务系统，从中医检测到调理，为体检机构提供差异化增值服务，增强体检机构的行业竞争力。'
    },
    {
      label: '4、足疗行业运营方案' ,
      src: '../../../../assets/images/market/plan/4.png',
      text: '针对足疗行业的现状与问题，从提升行业竞争力与美誉度的角度出发，应用中医可视化智能健康服务系统使传统足疗与智能大健康结合，积累大数据，促进行业转型升级，实现增值服务和经济效益。具体的操作办法和合作方式另行提供。'
    },
  ];

  // 获取本地变量
  @ViewChild('planview') planview: ElementRef;
  @Input() docuheight: number;
  @Input() clientHeight: number;
  planviewfalg: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // 变更检测
  ngOnChanges(): void {
    const target: number = this.docuheight + this.clientHeight * 0.7;
    if (this.planview.nativeElement.offsetTop <= target) {
      this.planviewfalg = true;
    }
  }
}
