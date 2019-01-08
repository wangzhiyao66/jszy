import {Component, ElementRef, HostBinding, OnInit, ViewChild} from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {fromEvent, Subscription} from 'rxjs';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    animations: [
        trigger('pageAnimations', [
            transition(':enter', [
                query('.art', [
                    style({opacity: 0, transform: 'translateY(-100px)'}),
                    stagger(-30, [
                        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'none'}))
                    ])
                ])
            ])
        ]),
        trigger('filterAnimation', [
            transition(':enter, * => 0, * => -1', []),
            transition(':increment', [
                query(':enter', [
                    style({opacity: 0, width: '0px'}),
                    stagger(500, [
                        animate('300ms ease-out', style({opacity: 1, width: '*'})),
                    ]),
                ], {optional: true})
            ]),
            transition(':decrement', [
                query(':leave', [
                    stagger(500, [
                        animate('300ms ease-out', style({opacity: 0, width: '0px'})),
                    ]),
                ])
            ]),
        ]),
    ]
})
export class UserComponent implements OnInit {

    @HostBinding('@pageAnimations')
    public animatePage = true;

    list = [];
    heroTotal = null;
    /**
     * 提炼数据
     */
    get func_list() {
        return this.list;
    }
    // 订阅事件
    subscription: Subscription;
    // 获取本地变量
    @ViewChild('art') art: ElementRef;
    // 滚动高度
    docuHeight = 0;
    // 可视区域高度
    clientHeight = 0;
    isfalg = true;

    ngOnInit() {

        this.list  = [
            {
                src: '../../../../assets/images/productsservice/function/1.png',
                bg_src: '../../../../assets/images/productsservice/function/1-1.png',
                text: '个人-健康评估服务；'
            },
            {
                src: '../../../../assets/images/productsservice/function/2.png',
                bg_src: '../../../../assets/images/productsservice/function/2-2.png',
                text: '家庭-新婚期、围产期、婴幼生长期、学龄期、工作压力期、空巢期、终老期健康服务；'
            },
            {
                src: '../../../../assets/images/productsservice/function/3.png',
                bg_src: '../../../../assets/images/productsservice/function/3-3.png',
                text: '中小医院和社区乡镇社保网卫生站-提供远程健康管理、检查、会诊、疗效监测评价等资源整合优化配置服务；'
            },
            {
                src: '../../../../assets/images/productsservice/function/4.png',
                bg_src: '../../../../assets/images/productsservice/function/4-4.png',
                text: '基层中医诊所、私人执业医师-精细入微的个性化服务：'
            },
            {
                src: '../../../../assets/images/productsservice/function/5.png',
                bg_src: '../../../../assets/images/productsservice/function/5-5.png',
                text: '个人-健康评估服务；'
            },
            {
                src: '../../../../assets/images/productsservice/function/6.png',
                bg_src: '../../../../assets/images/productsservice/function/6-6.png',
                text: '健康管理服务机构-健康保健品养生效果评估服务；'
            },
            {
                src: '../../../../assets/images/productsservice/function/7.png',
                bg_src: '../../../../assets/images/productsservice/function/7-7.png',
                text: '家庭及个人健康养生的调理、培训与知识传播。'
            },
        ];

        // 页面监听  响应式
        this.subscription = fromEvent(window, 'scroll')
            .subscribe((event) => {
                // console.log('event', event);
                let target;
                // 在IE/Opera中 兼容  event;
                target = event.target || window.event.target;
                // IE 中兼容  获取滚动高度问题
                this.docuHeight = target.defaultView.scrollY || document.documentElement.scrollTop;
                // IE 中兼容  获取可视区域高度问题
                this.clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
                console.log('docuHeight', this.docuHeight);
                console.log('clientHeight', this.clientHeight);

            });
    }
    /*
    * 1222
    * */
    ischange() {
        this.isfalg = !this.isfalg;
    }

}
