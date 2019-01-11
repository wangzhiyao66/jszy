import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mark-active',
  templateUrl: './mark-active.component.html',
  styleUrls: ['./mark-active.component.scss']
})
export class MarkActiveComponent implements OnInit {

  showlist: { src: string, title: string, time: string}[] = [
    { src: '../../../../assets/images/information/mark/1.png',
      time: '2018-07-24',
      title: '2015年春节习近平总书记视察我公司产品'},
    { src: '../../../../assets/images/information/mark/2.png',
      time: '2018-06-30',
      title: '2015年春节习近平总书记视察我公司产品'},
    { src: '../../../../assets/images/information/mark/3.png',
      time: '2018-06-21',
      title: '2015年春节习近平总书记视察我公司产品'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
