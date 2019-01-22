import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-news',
  templateUrl: './company-news.component.html',
  styleUrls: ['./company-news.component.scss']
})
export class CompanyNewsComponent implements OnInit {

  datalist: { id: number, src: string, title: string,}[] = [
    { id: 1, src: '../../../../assets/images/information/company/1.png', title: '习近平总书记到西安视察,鼓励发展红外医学影像技术'},
    { id: 2, src: '../../../../assets/images/information/company/2.png', title: '我公司便捷式红外影像设备'},
    { id: 3, src: '../../../../assets/images/information/company/10.png', title: '江山智能中医服务云亮相第20届高交会'},
    { id: 4, src: '../../../../assets/images/information/company/4.png', title: '国家卫生部王国强副部长在首届中医诊疗设备论坛展示会现场视察并听取汇报'},
    { id: 5, src: '../../../../assets/images/information/company/5.png', title: '人民日报内参评论'},
    { id: 6, src: '../../../../assets/images/information/company/6.png', title: '中国健康促进基金会成立红外医学专项基金'},
    { id: 7, src: '../../../../assets/images/information/company/7.png', title: '斯里兰卡国家经济委员会代表团考察访问北京江山中医可视化科技股份有限公司'},
    { id: 8, src: '../../../../assets/images/information/company/8.png', title: '“中医可视化智能健康服务系统”荣获全国首届自然医学与老年保健高峰论坛评选活动优胜奖'},
    { id: 10, src: '../../../../assets/images/information/company/11.png', title: '《医学数字红外热成像技术概论》再版印刷'},
    { id: 11, src: '../../../../assets/images/information/company/12.png', title: '公司荣誉'},
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
