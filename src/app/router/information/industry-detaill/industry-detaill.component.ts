import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InformationService} from '../information-service.service';

@Component({
  selector: 'app-industry-detaill',
  templateUrl: './industry-detaill.component.html',
  styleUrls: ['./industry-detaill.component.scss']
})
export class IndustryDetaillComponent implements OnInit {

  projectId: Number = 0;
  showinfo: any;

  constructor(
      private router: Router,
      private activeRoute: ActivatedRoute,
      private  infoserve: InformationService
  ) {
    // 监听projectId
    this.activeRoute.queryParams.subscribe({
      next: params => {
        this.projectId = Number(params.id);
        console.log('id', this.projectId);
        this.showData();
      }
    });
  }
  ngOnInit() {
  }
  // 查找数据
  showData() {
    const index = this.infoserve.industrylist.findIndex(
        item => Number(item.id) === Number(this.projectId)
    );
    this.showinfo = this.infoserve.industrylist[index];
  }
  // 查看其它文章
  goto(falg: boolean) {
    const params: number = falg
        ? Number(this.projectId) - 1
        : Number(this.projectId) + 1;
    this.router.navigate(['/information/industry-detail'], {
      queryParams: { id: params }
    });
  }
  // 返回
  goback() {
    this.router.navigate(['/information']);
  }
}
