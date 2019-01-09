import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cooperation-mode',
  templateUrl: './cooperation-mode.component.html',
  styleUrls: ['./cooperation-mode.component.scss']
})
export class CooperationModeComponent implements OnInit {

  list: { src: string, bg_src: string, text: string }[] = [
    {
      src: '../../../../assets/images/productsservice/function/1.png',
      bg_src: '../../../../assets/images/productsservice/function/1-1.png',
      text: '个人-健康评估服务；'
    },
    {
      src: '../../../../assets/images/productsservice/function/2.png',
      bg_src: '../../../../assets/images/productsservice/function/2-2.png',
      text: '家庭-新婚期、围产期、婴幼生长期、学龄期、工作压力期、空巢期、终老期健康服务；'
    },
    {
      src: '../../../../assets/images/productsservice/function/3.png',
      bg_src: '../../../../assets/images/productsservice/function/3-3.png',
      text: '中小医院和社区乡镇社保网卫生站-提供远程健康管理、检查、会诊、疗效监测评价等资源整合优化配置服务；'
    },
    {
      src: '../../../../assets/images/productsservice/function/4.png',
      bg_src: '../../../../assets/images/productsservice/function/4-4.png',
      text: '基层中医诊所、私人执业医师-精细入微的个性化服务：'
    },
    {
      src: '../../../../assets/images/productsservice/function/5.png',
      bg_src: '../../../../assets/images/productsservice/function/5-5.png',
      text: '个人-健康评估服务；'
    },
    {
      src: '../../../../assets/images/productsservice/function/6.png',
      bg_src: '../../../../assets/images/productsservice/function/6-6.png',
      text: '健康管理服务机构-健康保健品养生效果评估服务；'
    },
    {
      src: '../../../../assets/images/productsservice/function/7.png',
      bg_src: '../../../../assets/images/productsservice/function/7-7.png',
      text: '家庭及个人健康养生的调理、培训与知识传播。'
    },
  ];

  constructor() { }

  ngOnInit() {
  }
  /**
   * 提炼数据
   */
  get func_list() {
    return this.list;
  }
}
