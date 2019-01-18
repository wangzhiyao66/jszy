import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-concern',
  templateUrl: './social-concern.component.html',
  styleUrls: ['./social-concern.component.scss']
})
export class SocialConcernComponent implements OnInit {

  storylist: { src: string, title: string }[] = [
    { src: '../../../assets/images/about/1.png', title: '2015年春节习近平总书记视察我公司产品'},
    { src: '../../../assets/images/about/2.png', title: '我公司便捷式红外影像设备'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
