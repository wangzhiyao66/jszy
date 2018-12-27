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
        { anchorname : '产品介绍' , url: '../../../assets/images/two/06.png' , link : '/technology' , params : 'introduce'},
        { anchorname : '云平台服务' , url: '../../../assets/images/two/07.png' , link : '/technology' , params : 'team'},
        { anchorname : '产品功能' , url: '../../../assets/images/two/08.png' , link : '/technology' , params : 'course'},
        { anchorname : '产品优势' , url: '../../../assets/images/two/09.png' , link : '/technology' , params : 'Achievements'},
        { anchorname : '服务项目' , url: '../../../assets/images/two/10.png' , link : '/technology' , params : 'active'},
        { anchorname : '解决方案' , url: '../../../assets/images/two/11.png' , link : '/technology' , params : 'story'}
        ]
    },
    {
      title: '市场运营',
      link: '/market-operation',
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
      title: '用户中心',
      link: '/user',
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
      title: '重要资讯',
      link: '/information',
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
