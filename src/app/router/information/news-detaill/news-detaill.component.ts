import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InformationService} from '../information-service.service';

@Component({
  selector: 'app-news-detaill',
  templateUrl: './news-detaill.component.html',
  styleUrls: ['./news-detaill.component.scss']
})
export class NewsDetaillComponent implements OnInit {

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
    const index = this.infoserve.companyNews.findIndex(
        item => Number(item.id) === Number(this.projectId)
    );
    this.showinfo = this.infoserve.companyNews[index];
  }
  // 查看其它文章
  goto(falg: boolean) {
    const params: number = falg
        ? Number(this.projectId) - 1
        : Number(this.projectId) + 1;
    this.router.navigate(['/information/news-detail'], {
      queryParams: { id: params }
    });
  }
  // 返回
  goback() {
    this.router.navigate(['/information']);
  }

}
