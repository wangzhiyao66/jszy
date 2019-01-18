import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computed-honor',
  templateUrl: './computed-honor.component.html',
  styleUrls: ['./computed-honor.component.scss']
})
export class ComputedHonorComponent implements OnInit {
  datalist: { src: string, title: string}[] = [
    { src: '../../../assets/images/about/3.png', title: '俞梦孙院士关注可视化技术'},
    { src: '../../../assets/images/about/4.png', title: '江西中医大学授予 "创新实践基地"'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
