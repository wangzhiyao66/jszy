import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    nav1: Array = [
        {title: '导航', link: ''},
        {title: '首页', link: ''},
        {title: '技术概览', link: ''},
        {title: '产品与服务', link: ''},
        {title: '市场运营', link: ''},
        {title: '重要资讯', link: ''},
        {title: '关于我们', link: ''},
    ];
    nav2: Array = [
        {title: '相关产品', link: ''},
        {title: '产品介绍', link: ''},
        {title: '产品优势', link: ''},
        {title: '服务项目', link: ''},
        {title: '解决方案', link: ''},
        {title: '技术介绍', link: ''},
        {title: '研发团队', link: ''},
    ];
    nav3: Array = [
        {title: '共赢', link: ''},
        {title: '市场应用', link: ''},
        {title: '运营方案', link: ''},
        {title: '合作模式', link: ''},
        {title: '售后支持', link: ''},
        {title: 'APP下载', link: ''},
        {title: '网站地图', link: ''},
    ];
    nav4: Array = [
        {title: '关于我们', link: ''},
        {title: '公司介绍', link: ''},
        {title: '组织架构', link: ''},
        {title: '公司荣誉', link: ''},
        {title: '社会评价', link: ''},
        {title: '法律团队', link: ''},
        {title: '联系我们', link: ''},
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
