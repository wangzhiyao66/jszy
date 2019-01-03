import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serive-advantage',
  templateUrl: './serive-advantage.component.html',
  styleUrls: ['./serive-advantage.component.scss']
})
export class SeriveAdvantageComponent implements OnInit {

  showlist: { code: string, text: string}[] = [
    { code: '01' , text: '坚实的中医理论基础，并集光学、工程学、物理学、系统论、红外影像学为一体的创新技术'},
    { code: '02' , text: '先进的红外医学影像技术在中医领域的成功运用'},
    { code: '03' , text: '基础临床数据夯实'},
    { code: '04' , text: '完全自主的知识产权'},
    { code: '05' , text: '多年的科研实践的积累'},
    { code: '06' , text: '产品形式种类可以满足不同层次需求'},
    { code: '07' , text: '兼容并蓄的开放式系统'},
    { code: '08' , text: '技术先进，智能化程度高，保密性能好的云平台'},
    { code: '09' , text: '日常健康调理，生活化、经常化的必备工具'},
    { code: '10' , text: '检测无辐射、无介入，安全快捷'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
