import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-apply-range',
    templateUrl: './apply-range.component.html',
    styleUrls: ['./apply-range.component.scss'],
})
export class ApplyRangeComponent implements OnInit {

    showlist: { src: string, title: string, text: string, falg: boolean}[] = [
        {
            src: '../../../../assets/images/market/range/1.png', title: '亚健康', falg: false,
            text: '对现代社会广大亚健康群体的检测快速、整体、全面、安全、经济，适合现代人工作快节奏、高效率，只需几分钟，就可以全面了解人体的健康基本状况。'
        },
        {
            src: '../../../../assets/images/market/range/2.png', title: '心脑血管、肿瘤评估', falg: false,
            text: '对女性乳腺疾病及心脑血管疾病、肿瘤的评估方面有较深入的研究，能够早期发现，并能快速检测及早期干预，是女性乳腺癌、心脑血管疾病筛查的首选。'
        },
        {
            src: '../../../../assets/images/market/range/3.png', title: '早期筛查', falg: false,
            text: '可广泛应用在呼吸、消化、神经、心脑血管、各系统疾病的早期快速筛查和监测。'
        },
        {
            src: '../../../../assets/images/market/range/4.png', title: '中医健康养生', falg: false,
            text: '在中医药学领域应用前景广阔，对中医证候和脏腑经络的实质研究能提供全新的影像学手段，目前已开发出中医面部红外全息检诊、脏腑、经络热态矩阵自动化分析软件。'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

    /**
     * 下标
     * index
     */
    esein(index) {
        this.showlist[index].falg = false;
    }

    eseout(index) {
        this.showlist[index].falg = true;
    }
}
