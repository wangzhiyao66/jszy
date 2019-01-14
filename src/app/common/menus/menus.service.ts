import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  public menus: any[] = [
    {
      title: '首页',
      link: '/home',
      hidden: false,
      animationfalg: false,
      showchildren: false,
      children: []
    },
    {
      title: '技术概览',
      link: '/technology',
      hidden: false,
      animationfalg: false,
      showchildren: false,
      children: [
        { anchorname : '技术介绍' , url: '../../../assets/images/two/01.png' , link : '/technology' , params : 'introduce'},
        { anchorname : '研发团队' , url: '../../../assets/images/two/02.png' , link : '/technology' , params : 'team'},
        { anchorname : '研发历程' , url: '../../../assets/images/two/03.png' , link : '/technology' , params : 'course'},
        { anchorname : '研发成果' , url: '../../../assets/images/two/04.png' , link : '/technology' , params : 'Achievements'},
        { anchorname : '科研活动' , url: '../../../assets/images/two/05.png' , link : '/technology' , params : 'active'},
        { anchorname : '红外故事' , url: '../../../assets/images/two/06.png' , link : '/technology' , params : 'story'}
        ]
    },
    {
      title: '产品与服务',
      link: '/product-serve',
      hidden: false,
      animationfalg: false,
      showchildren: false,
      children: [
        { anchorname : '产品介绍' , url: '../../../assets/images/two/21.png' , link : '/product-serve' , params : 'product_introduce'},
        { anchorname : '云平台服务' , url: '../../../assets/images/two/22.png' , link : '/product-serve' , params : 'platform'},
        { anchorname : '产品功能' , url: '../../../assets/images/two/23.png' , link : '/product-serve' , params : 'function'},
        { anchorname : '产品优势' , url: '../../../assets/images/two/24.png' , link : '/product-serve' , params : 'advantage'},
        { anchorname : '服务项目' , url: '../../../assets/images/two/25.png' , link : '/product-serve' , params : 'project'},
        { anchorname : '解决方案' , url: '../../../assets/images/two/26.png' , link : '/product-serve' , params : 'soletion'},
        ]
    },
    {
      title: '市场运营',
      link: '/market-operation',
      hidden: false,
      animationfalg: false,
      showchildren: false,
      children: [
        { anchorname : '市场应用' , url: '../../../assets/images/two/31.png' , link : '/market-operation' , params : 'market_apply'},
        { anchorname : '应用范围' , url: '../../../assets/images/two/32.png' , link : '/market-operation' , params : 'apply_range'},
        { anchorname : '应用案例' , url: '../../../assets/images/two/33.png' , link : '/market-operation' , params : 'range_case'},
        { anchorname : '运营方案' , url: '../../../assets/images/two/34.png' , link : '/market-operation' , params : 'operation'},
        { anchorname : '合作模式' , url: '../../../assets/images/two/35.png' , link : '/market-operation' , params : 'cooperation'},
        { anchorname : '售后支持' , url: '../../../assets/images/two/36.png' , link : '/market-operation' , params : 'atfer'}
        ]
    },
    {
      title: '用户中心',
      link: '/user',
      hidden: true,
      animationfalg: false,
      showchildren: false,
      children: [
        { anchorname : '技术介绍' , url: '../../../assets/images/two/01.png' , link : '/technology' , params : 'introduce'},
        { anchorname : '研发团队' , url: '../../../assets/images/two/02.png' , link : '/technology' , params : 'team'},
        { anchorname : '研发历程' , url: '../../../assets/images/two/03.png' , link : '/technology' , params : 'course'},
        { anchorname : '研发成果' , url: '../../../assets/images/two/04.png' , link : '/technology' , params : 'Achievements'},
        { anchorname : '科研活动' , url: '../../../assets/images/two/05.png' , link : '/technology' , params : 'active'},
        { anchorname : '红外故事' , url: '../../../assets/images/two/06.png' , link : '/technology' , params : 'story'}
        ]
    },
    {
      title: '新闻资讯',
      link: '/information',
      hidden: false,
      animationfalg: false,
      showchildren: false,
      children: [
        // { anchorname : '技术介绍' , url: '../../../assets/images/two/01.png' , link : '/technology' , params : 'introduce'},
        // { anchorname : '研发团队' , url: '../../../assets/images/two/02.png' , link : '/technology' , params : 'team'},
        // { anchorname : '研发历程' , url: '../../../assets/images/two/03.png' , link : '/technology' , params : 'course'},
        // { anchorname : '研发成果' , url: '../../../assets/images/two/04.png' , link : '/technology' , params : 'Achievements'},
        // { anchorname : '科研活动' , url: '../../../assets/images/two/05.png' , link : '/technology' , params : 'active'},
        // { anchorname : '红外故事' , url: '../../../assets/images/two/06.png' , link : '/technology' , params : 'story'}
        ]
    },
    {
      title: '关于我们',
      link: '/about',
      hidden: false,
      animationfalg: false,
      showchildren: false,
      children: [
        { anchorname : '技术介绍' , url: '../../../assets/images/two/01.png' , link : '/technology' , params : 'introduce'},
        { anchorname : '研发团队' , url: '../../../assets/images/two/02.png' , link : '/technology' , params : 'team'},
        { anchorname : '研发历程' , url: '../../../assets/images/two/03.png' , link : '/technology' , params : 'course'},
        { anchorname : '研发成果' , url: '../../../assets/images/two/04.png' , link : '/technology' , params : 'Achievements'},
        { anchorname : '科研活动' , url: '../../../assets/images/two/05.png' , link : '/technology' , params : 'active'},
        { anchorname : '红外故事' , url: '../../../assets/images/two/06.png' , link : '/technology' , params : 'story'}
        ]
    }
  ];
  constructor() {}
}
