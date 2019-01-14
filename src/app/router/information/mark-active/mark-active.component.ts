import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
  selector: 'app-mark-active',
  templateUrl: './mark-active.component.html',
  styleUrls: ['./mark-active.component.scss'],
  animations: [
    Pulse
  ]
})
export class MarkActiveComponent implements OnInit {

  showlist: { src: string, title: string, time: string, desc: string}[] = [
    { src: '../../../../assets/images/information/mark/1.png',
      time: '2018-07-24',
      title: '北京市丰台区 “家医签约，健康E站”项目',
      // tslint:disable-next-line:max-line-length
      desc: '由北京市社区健康促进会牵头组织，联合人保健康北京分公司，在丰台区卫健委的支持下，“家医签约，健康E站”项目在丰台区丰台社区卫生服务中心正式启动，本项目旨在推动基层医疗机构家医签约服务，探索社会购买健康服务的新型健康服务模式。中医可视化智能健康服务系统作为本项目唯一的健康管理工具正式落地丰台社区卫生服务中心，为社区居民和保险公司客户提供服务。北京市基层卫生处、丰台区卫健委、人保北京分公司的领导，太平桥、卢沟桥等社区卫生机构的负责人、全科医生等近四十人参加了启动仪式。'
    },
    { src: '../../../../assets/images/information/mark/2.png',
      time: '2018-06-30',
      title: '北京市门头沟区 “家医签约，健康E站”项目',
      // tslint:disable-next-line:max-line-length
      desc: '由北京市社区健康促进会牵头组织，联合人保健康北京分公司，在丰台区卫健委的支持下，“家医签约，健康E站”项目在丰台区丰台社区卫生服务中心正式启动，本项目旨在推动基层医疗机构家医签约服务，探索社会购买健康服务的新型健康服务模式。中医可视化智能健康服务系统作为本项目唯一的健康管理工具正式落地丰台社区卫生服务中心，为社区居民和保险公司客户提供服务。北京市基层卫生处、丰台区卫健委、人保北京分公司的领导，太平桥、卢沟桥等社区卫生机构的负责人、全科医生等近四十人参加了启动仪式。'
    },
    { src: '../../../../assets/images/information/mark/3.png',
      time: '2018-06-21',
      title: '在深圳向原国家中医管理局副局长李大宁汇报智能中医服务云项目',
      // tslint:disable-next-line:max-line-length
      desc: '2018年11月19日，公司董事长袁云娥、总经理李超、高级顾问吴应杰在深圳向原国家中医管理局副局长李大宁汇报智能中医服务云项目，李副局长对项目给予了充分肯定，鼓励项目团队继续努力，为中医的发展并走向世界做贡献'},
  ];

  // 获取本地变量
  @ViewChild('mark') mark: ElementRef;
  @Input() docuheight: number;
  @Input() clientHeight: number;
  markfalg: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // 变更检测
  ngOnChanges(): void {
    const target: number = this.docuheight + this.clientHeight * 0.7;
    if (this.mark.nativeElement.offsetTop <= target) {
      this.markfalg = true;
    }
  }

}
