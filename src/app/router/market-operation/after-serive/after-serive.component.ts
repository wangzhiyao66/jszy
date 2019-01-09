import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-serive',
  templateUrl: './after-serive.component.html',
  styleUrls: ['./after-serive.component.scss']
})
export class AfterSeriveComponent implements OnInit {

  showlist: { src: string, title: string, text: string, falg: boolean}[] = [
    {
      src: '../../../../assets/images/market/after/1.png', title: '保修服务', falg: false,
      text: '设备免费保修一年，终身维护。'
    },
    {
      src: '../../../../assets/images/market/after/2.png', title: '培训服务', falg: false,
      text: '提供操作使用、报告解读的技术培训。'
    },
    {
      src: '../../../../assets/images/market/after/3.png', title: '远程支持', falg: false,
      text: '提供远程评估服务'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
