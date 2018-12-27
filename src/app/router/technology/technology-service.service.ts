import { Injectable } from '@angular/core';
import { OriginData } from '../../interface/responses-data';


@Injectable()
export class TechnologyServiceService {

  public advisordata: OriginData[] = [
      { id: 1 , name: '白书忠' , url : '../../../../../assets/images/overview/advissor/1.png' ,
          description : '中国健康促进基金会理事长、中华医学会前副会长、中华医学会健康管理学分会名誉主任委员、总后卫生部原部长。' },
      { id: 2 , name: '胡永昇' , url : '../../../../../assets/images/overview/advissor/2.png' ,
          description : '原北京大学临床肿瘤学院防癌普查科及影像科主任，教授。中国百万妇女乳腺普查工程首席专家，我国开展乳癌筛查最早开创人之一。'},
      { id: 3 , name: '程天民' , url : '../../../../../assets/images/overview/advissor/3.png' ,
          description : '中国工程院院士，我国著名防原医学与病理学专家。曾任第三军医大学校长、中华医学会创伤学会主任委员、国务院学位委员会公共卫生与预防医学学科评议组召集人。'},
      { id: 4 , name: '张绍祥' , url : '../../../../../assets/images/overview/advissor/4.png' ,
          description : '现任第三军医大学副校长、人体解剖学教授、博士生导师、重庆市数字医学研究所所长。' },
      { id: 5 , name: '王省良' , url : '../../../../../assets/images/overview/advissor/5.png' ,
          description : '广州中医药大学校长、教授。' },
      { id: 6 , name: '章文春' , url : '../../../../../assets/images/overview/advissor/6.png' ,
          description : '江西中医药大学基础学院院长、教授、博士生导师。' },
      { id: 7 , name: '张雪亮' , url : '../../../../../assets/images/overview/advissor/7.png' ,
          description : '中国中医科学院中医博物馆馆长，主任医师，研究员' },
      { id: 8 , name: '马暁彤' , url : '../../../../../assets/images/overview/advissor/8.png' ,
          description : '中医信息学博士，研究员，中国中医科学院基础医学研究所科技处处长，信息工程研究室主任' },
      { id: 9 , name: '赵芯平' , url : '../../../../../assets/images/overview/advissor/9.png' ,
          description : '北京航空航天大学计算机模拟国家实验室主任，工程院院士' },
      { id: 10 , name: '吴永浩' , url : '../../../../../assets/images/overview/advissor/10.png' ,
          description : '主任医师，北京市全科医师协会会长' },
      { id: 11 , name: '范丽' , url : '../../../../../assets/images/overview/advissor/11.png' ,
          description : '中国老年医学学会会长，原解放军总医院副院长，少将，主任医师、教授' },
      { id: 12 , name: '陈运琦' , url : '../../../../../assets/images/overview/advissor/12.png' ,
          description : '中国老年医学学会常务副会长，中国卫生信息学会健康医疗大数据老年保健专委会主任，原解放军总医院医务部副主任、教授' },
      { id: 13 , name: '李德玉' , url : '../../../../../assets/images/overview/advissor/13.png' ,
          description : '北京航空航天大学研究生院副院长、生物与医学工程学院教授。' },
      { id: 14 , name: '陆华' , url : '../../../../../assets/images/overview/advissor/14.png' ,
          description : '中医学博士，成都中医药大学第一附属医院院长、主任医师、教授' },
      { id: 15 , name: '武文斌' , url : '../../../../../assets/images/overview/advissor/15.png' ,
          description : '中科院西安光学精密机械研究所研究员' },
      { id: 16 , name: '姚晨' , url : '../../../../../assets/images/overview/advissor/16.png' ,
          description : '北京大学医学部教授，大数据库研究专家' },
      { id: 17 , name: '赵卫' , url : '../../../../../assets/images/overview/advissor/17.png' ,
          description : '中科院西安分院院长、中科院西安光学精密机械研究所所长、研究员。' },

  ];
   // @ts-ignore
    public storylist = [
        {id: 1, url: '../../../../../assets/images/overview/story/yang.png',
            // tslint:disable-next-line:max-line-length
            title: '杨某某(一个市)生物工程协会的会长，也是在研究红外成像技术的历程中我们从相识到相知成为忘年之交。记得他是在2001年的5月25日被邀参加了在某市（上海）举行的红外热成像临床应用学术会议，期间他体验红外影像检查，结果发现是那样的突然，红外影像检查他的肝投影区有孤立异常密实点团状热态分布，提示肝区病变不可忽视，不能排除肝癌，建议尽快到医院做相关检查和治疗。这是不可能的事情，自己的身体状况很好，没有任何不良感觉，检查结果可靠吗? 由于工作繁忙,直到6月10日才去医院经B超、MRI 、CT检查， 证实肝脏有10·5X10·05CM大小孤立的肿块，11日住进了医院，第二天在放射科做了介入治疗.十年过去了，肝肿瘤没有复发转移，但却对红外影像技术有了“缘分”，在他学校的工作室引进了一台红外成像设备，专注研究红外的物理学基础理论，支持我们的临床应用研究。'},

        {id: 2, url: '../../../../../assets/images/overview/story/wang.png',
            // tslint:disable-next-line:max-line-length
            title: '王某某，河北的病人，男，23岁，2010年在外打工时发现右手没有力气，大小伙子，提不起20斤重的物体，干不了重活了.在县医院及省会、北京等大医院做CT检查三次、核磁共振检查2次，提示额骨骨板增厚，考虑为骨纤维异常增生症，双侧额窦炎；做血同型半胱氨酸、抗新磷脂抗体等血生化检查正常，排除先天性遗传与风湿免疫性疾病。2011年11月初到北京就医,做红外影像检查，发现很有意思的热成像图:他的颅骨和颈胸投影区热态分布异常-热偏离，与上述CT、MRI的检查提示一致，提示额骨比正常人增厚，颈胸椎也有增生趋势；他的肾投影区和膀胱投影区的热态异常分布-出现凉偏离，中医认为肾与膀胱相表里，说明有肾气虚、肾阳虚的存在，同时导致膀胱寒湿。中医“肾主骨”的立论可以明确显示，肾虚导致的骨骼病变的影响不可忽视，并与西医生理钙代谢相关联。我请来了中医师朋友，共同对着红外影像图进行分析和通过四诊对患者的辨证论治，开了中药方剂30剂，以温阳补肾为主，嘱他一个月后来京复查换方。元旦前夕，父子俩是高高兴兴而来，说孩子好像换了一个人似的，自信心增强了，在家抢着干活呢，右手能够提40斤的东西了。\n'},
        {id: 3, url: '../../../../../assets/images/overview/story/dong.png',
            // tslint:disable-next-line:max-line-length
            title: '东北某大学医学院附属医院的高级专业技术人员，她在肿瘤内科工作近20年了,感觉压力大.我们用红外影像技术能够测量出来而且可以定标，要测量双侧颌下、锁骨上窝、腋下、腹股沟热态分布对称、上、中、下焦热态分布差值是否平衡，热态分布序列发生变化了，机体五脏六腑的功能就可能失衡，这两方面的热态分布在正常范围内，没有大的问题，但心理和生理的疲劳问题应该引起重视，你的头顶部有异常热态分布，好比一顶白帽子戴在头上，喉颈部有一团块状低热态分布区，中医称之为“梅核气”，这是压力大、情绪焦虑形成的，肝区也有异常高热态分布，还有轻度脂肪肝，肝气瘀滞不能排除，现在需要在心理上自我调整，比如在工作和事业上要量力而行，张弛有度，该放松时就要彻底放松，不要跟自己过不去啊，或者用中医药调理，恢复心理疲劳要更快一些。她四肢远端热态分布不均匀，有散在密实点状异常高热态分布，说明血粘度增高趋势，血脂异常，影响远端微循环，血脂高于正常值多少就不是红外影像检测的范畴了，她告诉我不久前做了血脂检查高于正常值。她很赞同我的意见，应用红外影像技术，将中医和西医的特点结合起来，显现出整体评价被检者的健康状态的优势，就目前拥有的影像设备技术，还没有与它相媲呢！\n'},
    ];

  constructor() { }
}
