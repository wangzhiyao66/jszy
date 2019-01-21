import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-news',
  templateUrl: './company-news.component.html',
  styleUrls: ['./company-news.component.scss']
})
export class CompanyNewsComponent implements OnInit {

  datalist: { src: string, title: string,}[] = [
    { src: '../../../../assets/images/information/company/1.png', title: '2015年春节习近平总书记视察我公司产品'},
    { src: '../../../../assets/images/information/company/2.png', title: '我公司便捷式红外影像设备'},
    { src: '../../../../assets/images/information/company/10.png', title: '我公司入选中关村科技园组织的高新科技项目'},
    // { src: '../../../../assets/images/information/company/3.png', title: '陕西省委书记参观科技成果'},
    { src: '../../../../assets/images/information/company/4.png', title: '王国强部长参观科技成果'},
    { src: '../../../../assets/images/information/company/5.png', title: '2013年人民日报内参进行专题报道'},
    { src: '../../../../assets/images/information/company/6.png', title: '中国健康促进基金会'},
    { src: '../../../../assets/images/information/company/7.png', title: '斯里兰卡国家经济委员会代表团访问'},
    { src: '../../../../assets/images/information/company/8.png', title: '2018年全国首届自然医学与老年保健高峰论坛'},
    { src: '../../../../assets/images/information/company/9.png', title: '中国老年保健医学研究会高会长，301医院原苏副院长，卫健委食品司张副司长参观我公司展台'},
    { src: '../../../../assets/images/information/company/11.png', title: '《医学数字红外热成像技术概论》再版印刷'},
    { src: '../../../../assets/images/information/company/12.png', title: '江山中医可视化科技股份有限公司荣誉'},
    { src: '../../../../assets/images/information/company/13.png', title: '江山智能中医服务云亮相第20届高交会'},
  ];
  showfalg = false;
  showlist = [];

  constructor() { }

  ngOnInit() {
    this.showlist = this.datalist.slice(0, 9);
  }
  // 展示
  addshow() {
    this.showfalg = !this.showfalg;
    if (this.showfalg) {
      this.showlist = this.datalist;
    } else {
      this.showlist = this.datalist.slice(0, 9);
    }
  }
}
