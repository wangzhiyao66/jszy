import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-news',
  templateUrl: './company-news.component.html',
  styleUrls: ['./company-news.component.scss']
})
export class CompanyNewsComponent implements OnInit {

  showlist: { src: string, title: string,}[] = [
    { src: '../../../../assets/images/information/company/1.png', title: '2015年春节习近平总书记视察我公司产品'},
    { src: '../../../../assets/images/information/company/2.png', title: '2015年春节习近平总书记视察我公司产品'},
    { src: '../../../../assets/images/information/company/3.png', title: '2015年春节习近平总书记视察我公司产品'},
    { src: '../../../../assets/images/information/company/4.png', title: '2015年春节习近平总书记视察我公司产品'},
    { src: '../../../../assets/images/information/company/5.png', title: '2015年春节习近平总书记视察我公司产品'},
    { src: '../../../../assets/images/information/company/6.png', title: '2015年春节习近平总书记视察我公司产品'},
    { src: '../../../../assets/images/information/company/7.png', title: '2015年春节习近平总书记视察我公司产品'},
    { src: '../../../../assets/images/information/company/8.png', title: '2015年春节习近平总书记视察我公司产品'},
    { src: '../../../../assets/images/information/company/9.png', title: '2015年春节习近平总书记视察我公司产品'},
    { src: '../../../../assets/images/information/company/10.png', title: '2015年春节习近平总书记视察我公司产品'},
    { src: '../../../../assets/images/information/company/11.png', title: '2015年春节习近平总书记视察我公司产品'},
    { src: '../../../../assets/images/information/company/12.png', title: '2015年春节习近平总书记视察我公司产品'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
