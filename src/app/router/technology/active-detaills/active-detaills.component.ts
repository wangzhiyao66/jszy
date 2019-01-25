import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TechnologyServiceService} from '../technology-service.service';
import {InformationService} from '../../information/information-service.service';

@Component({
  selector: 'app-active-detaills',
  templateUrl: './active-detaills.component.html',
  styleUrls: ['./active-detaills.component.scss']
})
export class ActiveDetaillsComponent implements OnInit {

  projectId: Number = 0;
  showinfo: any;

  constructor(
      private router: Router,
      private service: TechnologyServiceService,
      private activeRoute: ActivatedRoute
  ) {
    // 监听projectId
    this.activeRoute.queryParams.subscribe({
      next: params => {
        this.projectId =  Number(params.id);
        this.showData();
        console.log('id', typeof this.projectId);
      }
    });
  }

  ngOnInit() {
  }
  // 查找数据
  showData() {
    const index = this.service.activelist.findIndex(
        item => Number(item.id) === Number(this.projectId)
    );
    this.showinfo = this.service.activelist[index];
  }
  // 查看其它文章
  goto(falg: boolean) {
    const params: number = falg
        ? Number(this.projectId) - 1
        : Number(this.projectId) + 1;
    this.router.navigate(['/technology/active-detaills'], {
      queryParams: { id: params }
    });
  }
  // 返回
  goback() {
    this.router.navigate(['/technology']);
  }


}
