import {Injectable} from '@angular/core';

@Injectable()
export class InformationService {
    public showNewslist: any[] = [
        {
            id: 1,
            title: '北京市丰台区 “家医签约，健康E站”项目启动会在丰台社区卫生服务中心召开',
            time: '2018-12-24 11:00',
            source: '来源： 江山中医可视化',
            text1: '由北京市社区健康促进会牵头组织，联合人保健康北京分公司，在丰台区卫健委的支持下，“家医签约，健康E站”项目在丰台区丰台社区卫生服务中心正式启动，本项目旨在推动基层医疗机构家医签约服务，探索社会购买健康服务的新型健康服务模式。',
            // tslint:disable-next-line:max-line-length
            text2: '中医可视化智能健康服务系统作为本项目唯一的健康管理工具正式落地丰台社区卫生服务中心，为社区居民和保险公司客户提供服务。北京市基层卫生处、丰台区卫健委、人保北京分公司的领导，太平桥、卢沟桥等社区卫生机构的负责人、全科医生等近四十人参加了启动仪式。',
            src: [
                '../../../../assets/images/information/list/1.png',
                '../../../../assets/images/information/list/2.png',
                '../../../../assets/images/information/list/3.png',
                '../../../../assets/images/information/list/4.png',
                '../../../../assets/images/information/list/5.png'
            ],
        },
        {
            id: 2,
            title: '北京市门头沟区 “家医签约，健康E站”项目启动会在东辛房社区卫生服务中心召开',
            time: '2018-11-26 10:30',
            source: '来源： 江山中医可视化',
            text1: '由北京市社区健康促进会牵头组织，联合人保健康北京分公司，在门头沟区卫健委的支持下，“家医签约，健康E站”项目在门头沟区东辛房社区卫生服务中心正式启动，本项目旨在推动基层医疗机构家医签约服务，探索社会购买健康服务的新型健康服务模式。',
            // tslint:disable-next-line:max-line-length
            text2: '中医可视化智能健康服务系统作为本项目唯一的健康管理工具正式落地社区卫生服务中心，为社区居民和保险公司客户提供服务。北京市基层卫生处、门头沟区卫健委、人保北京分公司的领导，东新房、永定镇等社区卫生机构的负责人、全科医生等近四十人参加了启动仪式。',
            src: [
                '../../../../assets/images/information/list/21.png',
                '../../../../assets/images/information/list/22.png',
                '../../../../assets/images/information/list/23.png',
                '../../../../assets/images/information/list/24.png',
            ],
        },
        {
            id: 3,
            title: '在深圳向原国家中医管理局副局长李大宁汇报智能中医服务云项目',
            time: '2018-12-24 11:00',
            source: '来源： 江山中医可视化',
            text1: '2018年11月19日，公司董事长袁云娥、总经理李超、高级顾问吴应杰在深圳向原国家中医管理局副局长李大宁汇报智能中医服务云项目，李副局长对项目给予了充分肯定，鼓励项目团队继续努力，为中医的发展并走向世界做贡献。',
            text2: '',
            src: [
                '../../../../assets/images/information/list/31.png',
                '../../../../assets/images/information/list/32.png',
                '../../../../assets/images/information/list/33.png'
            ],
        },
    ];

    constructor() {
    }
}
