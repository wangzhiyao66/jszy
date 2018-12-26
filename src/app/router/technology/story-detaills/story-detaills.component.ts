import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnologyServiceService } from '../technology-service.service';

@Component({
  selector: 'app-story-detaills',
  templateUrl: './story-detaills.component.html',
  styleUrls: ['./story-detaills.component.scss']
})
export class StoryDetaillsComponent implements OnInit {
  detaillId = 0;
  list: any[] = this.service.storylist;
  showinfo: any;

  constructor(
    private router: Router,
    private service: TechnologyServiceService,
    private activeRoute: ActivatedRoute
  ) {
    // 监听projectId
    this.activeRoute.queryParams.subscribe({
      next: params => {
        this.detaillId = params.id;
        this.showData();
        console.log('id', this.detaillId);
      }
    });
  }

  ngOnInit() {}

  // 查找数据
  showData() {
    const index = this.list.findIndex(
      item => Number(item.id) === Number(this.detaillId)
    );
    this.showinfo = this.list[index];
  }
  // 查看其它文章
  goto(falg: boolean) {
    const params: number = falg
      ? Number(this.detaillId) - 1
      : Number(this.detaillId) + 1;
    this.router.navigate(['/technology/story-detaills'], {
      queryParams: { id: params }
    });
  }
  // 返回
  goback() {
    this.router.navigate(['/technology']);
  }
}
