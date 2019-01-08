import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-range',
  templateUrl: './apply-range.component.html',
  styleUrls: ['./apply-range.component.scss']
})
export class ApplyRangeComponent implements OnInit {

  showlist: { code: string, text: string}[] = [
    { code: '01' , text: '坚实的中医理论基础，并集光学、工程学、物理学、系统论、红外影像学为一体的创新技术'},
    { code: '02' , text: '先进的红外医学影像技术在中医领域的成功运用'},
    { code: '03' , text: '基础临床数据夯实'},
    { code: '04' , text: '完全自主的知识产权'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
