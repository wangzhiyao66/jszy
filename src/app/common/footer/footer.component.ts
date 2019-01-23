import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    nav1 = [
        {title: '导航', link: '/home',  params: ''},
        {title: '首页', link: '/home',  params: ''},
        {title: '技术概览', link: '/technology',  params: ''},
        {title: '产品与服务', link: '/product-serve',  params: ''},
        {title: '市场运营', link: '/market-operation',  params: ''},
        {title: '新闻资讯', link: '/information',  params: ''},
        {title: '关于我们', link: '/about',  params: ''},
    ];
    nav2 = [
        {title: '相关产品', link: '', params: ''},
        {title: '产品介绍', link: '/product-serve',  params: ''},
        {title: '产品优势', link: '/product-serve', params: 'advantage'},
        {title: '服务项目', link: '/product-serve', params: 'project'},
        {title: '解决方案', link: '/product-serve', params: 'soletion'},
        {title: '技术介绍', link: '/technology',  params: ''},
        {title: '研发团队', link: '/technology', params: 'team'},
    ];
    nav3 = [
        {title: '共赢', link: '',  params: ''},
        {title: '市场应用', link: '/market-operation',  params: 'market_apply'},
        {title: '运营方案', link: '/market-operation',  params: 'operation'},
        {title: '合作模式', link: '/market-operation',  params: 'cooperation'},
        {title: '售后支持', link: '/market-operation',  params: 'atfer'},
        {title: 'APP下载', link: '/about',  params: 'contact_us'},
        {title: '网站地图', link: '/about',  params: 'contact_us'},
    ];
    nav4 = [
        {title: '关于我们', link: '/about',  params: ''},
        {title: '公司介绍', link: '/about',  params: 'company_profile'},
        {title: '组织架构', link: '/about',  params: 'organization'},
        {title: '公司荣誉', link: '/about',  params: 'concern'},
        {title: '社会评价', link: '/about',  params: 'honor'},
        {title: '法律团队', link: '/about',  params: 'legal_team'},
        {title: '联系我们', link: '/about',  params: 'contact_us'},
    ];

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    goto(val) {
        this.router.navigate([val.link], { fragment: val.params });
    }

}
