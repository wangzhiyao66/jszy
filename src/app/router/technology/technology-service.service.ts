import { Injectable } from '@angular/core';
import { OriginData } from '../../interface/responses-data';


@Injectable()
export class TechnologyServiceService {

  public advisordata: OriginData[] = [
      { id: 1 , name: '白书忠' , url : '../../../../assets/images/overview/advissor/1.png' ,
          description : '中国健康促进基金会理事长、中华医学会前副会长、中华医学会健康管理学分会名誉主任委员、总后卫生部原部长。' },
      { id: 2 , name: '胡永昇' , url : '../../../../assets/images/overview/advissor/2.png' ,
          description : '原北京大学临床肿瘤学院防癌普查科及影像科主任，教授。中国百万妇女乳腺普查工程首席专家，我国开展乳癌筛查最早开创人之一。'},
      { id: 3 , name: '程天民' , url : '../../../../assets/images/overview/advissor/3.png' ,
          description : '中国工程院院士，我国著名防原医学与病理学专家。曾任第三军医大学校长、中华医学会创伤学会主任委员、国务院学位委员会公共卫生与预防医学学科评议组召集人。'},
      { id: 4 , name: '张绍祥' , url : '../../../../assets/images/overview/advissor/4.png' ,
          description : '现任第三军医大学副校长、人体解剖学教授、博士生导师、重庆市数字医学研究所所长。' },
      { id: 5 , name: '王省良' , url : '../../../../assets/images/overview/advissor/5.png' ,
          description : '广州中医药大学校长、教授。' },
      { id: 6 , name: '章文春' , url : '../../../../assets/images/overview/advissor/6.png' ,
          description : '江西中医药大学基础学院院长、教授、博士生导师。' },
      { id: 7 , name: '张雪亮' , url : '../../../../assets/images/overview/advissor/7.png' ,
          description : '中国中医科学院中医博物馆馆长，主任医师，研究员' },
      { id: 8 , name: '马暁彤' , url : '../../../../assets/images/overview/advissor/8.png' ,
          description : '中医信息学博士，研究员，中国中医科学院基础医学研究所科技处处长，信息工程研究室主任' },
      { id: 9 , name: '赵芯平' , url : '../../../../assets/images/overview/advissor/9.png' ,
          description : '北京航空航天大学计算机模拟国家实验室主任，工程院院士' },
      { id: 10 , name: '吴永浩' , url : '../../../../assets/images/overview/advissor/10.png' ,
          description : '主任医师，北京市全科医师协会会长' },
      { id: 11 , name: '范丽' , url : '../../../../assets/images/overview/advissor/11.png' ,
          description : '中国老年医学学会会长，原解放军总医院副院长，少将，主任医师、教授' },
      { id: 12 , name: '陈运琦' , url : '../../../../assets/images/overview/advissor/12.png' ,
          description : '中国老年医学学会常务副会长，中国卫生信息学会健康医疗大数据老年保健专委会主任，原解放军总医院医务部副主任、教授' },
      { id: 13 , name: '李德玉' , url : '../../../../assets/images/overview/advissor/13.png' ,
          description : '北京航空航天大学研究生院副院长、生物与医学工程学院教授。' },
      { id: 14 , name: '陆华' , url : '../../../../assets/images/overview/advissor/14.png' ,
          description : '中医学博士，成都中医药大学第一附属医院院长、主任医师、教授' },
      { id: 15 , name: '武文斌' , url : '../../../../assets/images/overview/advissor/15.png' ,
          description : '中科院西安光学精密机械研究所研究员' },
      { id: 16 , name: '姚晨' , url : '../../../../assets/images/overview/advissor/16.png' ,
          description : '北京大学医学部教授，大数据库研究专家' },
      { id: 17 , name: '赵卫' , url : '../../../../assets/images/overview/advissor/17.png' ,
          description : '中科院西安分院院长、中科院西安光学精密机械研究所所长、研究员。' },

  ];

  constructor() { }
}
