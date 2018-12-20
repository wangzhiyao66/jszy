import {Component, OnInit} from '@angular/core';
import {OriginData} from '../../../interface/responses-data';

@Component({
    selector: 'app-active',
    templateUrl: './active.component.html',
    styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {

    activelist: ({ id: number; url: string; title: string })[] = [
        {
            id: 1, url: '../../../../assets/images/overview/active/laonan.png',
            title: '老年重大慢病防控技术组合方案研讨会'
        },
        {
            id: 2, url: '../../../../assets/images/overview/active/qinghua.png',
            title: '清华大学专家级学术交流研讨会'
        },
        {
            id: 3, url: '../../../../assets/images/overview/active/dier.png',
            title: '2018中国传承与创新学术研讨会现场'
        },
        {
            id: 4, url: '../../../../assets/images/overview/active/xinnao.png',
            title: '心脑血管疾病防控工作研讨会'
        },
        {
            id: 4, url: '../../../../assets/images/overview/active/duizhong.png',
            title: '对中医药治疗艾滋病疗效的评价'
        },
        {
            id: 4, url: '../../../../assets/images/overview/active/zhongke.png',
            title: '中科院讲座'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
