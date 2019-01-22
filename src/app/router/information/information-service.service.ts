import {Injectable} from '@angular/core';

@Injectable()
export class InformationService {
    public showNewslist: any[] = [
        {
            id: 1,
            title: '北京市丰台区 “家医签约，健康E站”项目启动会在丰台社区卫生服务中心召开',
            time: '2018-12-24 11:00',
            source: '来源： 江山中医可视化',
            text1: '由北京市社区健康促进会牵头组织，联合人保健康北京分公司，在丰台区卫健委的支持下，“家医签约，健康E站”项目在丰台区丰台社区卫生服务中心正式启动，本项目旨在推动基层医疗机构家医签约服务，探索社会购买健康服务的新型健康服务模式。',
            // tslint:disable-next-line:max-line-length
            text2: '中医可视化智能健康服务系统作为本项目唯一的健康管理工具正式落地丰台社区卫生服务中心，为社区居民和保险公司客户提供服务。北京市基层卫生处、丰台区卫健委、人保北京分公司的领导，太平桥、卢沟桥等社区卫生机构的负责人、全科医生等近四十人参加了启动仪式。',
            src: [
                '../../../../assets/images/information/list/1.png',
                '../../../../assets/images/information/list/2.png',
                '../../../../assets/images/information/list/3.png',
                '../../../../assets/images/information/list/4.png',
                '../../../../assets/images/information/list/5.png'
            ],
        },
        {
            id: 2,
            title: '北京市门头沟区 “家医签约，健康E站”项目启动会在东辛房社区卫生服务中心召开',
            time: '2018-11-26 10:30',
            source: '来源： 江山中医可视化',
            text1: '由北京市社区健康促进会牵头组织，联合人保健康北京分公司，在门头沟区卫健委的支持下，“家医签约，健康E站”项目在门头沟区东辛房社区卫生服务中心正式启动，本项目旨在推动基层医疗机构家医签约服务，探索社会购买健康服务的新型健康服务模式。',
            // tslint:disable-next-line:max-line-length
            text2: '中医可视化智能健康服务系统作为本项目唯一的健康管理工具正式落地社区卫生服务中心，为社区居民和保险公司客户提供服务。北京市基层卫生处、门头沟区卫健委、人保北京分公司的领导，东新房、永定镇等社区卫生机构的负责人、全科医生等近四十人参加了启动仪式。',
            src: [
                '../../../../assets/images/information/list/21.png',
                '../../../../assets/images/information/list/22.png',
                '../../../../assets/images/information/list/23.png',
                '../../../../assets/images/information/list/24.png',
            ],
        },
        {
            id: 3,
            title: '在深圳向原国家中医管理局副局长李大宁汇报智能中医服务云项目',
            time: '2018-12-24 11:00',
            source: '来源： 江山中医可视化',
            text1: '2018年11月19日，公司董事长袁云娥、总经理李超、高级顾问吴应杰在深圳向原国家中医管理局副局长李大宁汇报智能中医服务云项目，李副局长对项目给予了充分肯定，鼓励项目团队继续努力，为中医的发展并走向世界做贡献。',
            text2: '',
            src: [
                '../../../../assets/images/information/list/31.png',
                '../../../../assets/images/information/list/32.png',
                '../../../../assets/images/information/list/33.png'
            ],
        },
    ];
    public companyNews: any[] = [
        {
            id: 1 ,
            title: '习近平总书记到西安视察,鼓励发展红外医学影像技术',
            time: '2015年',
            source: '来源： 江山中医可视化',
            text: [
                '2015春节，习近平总书记到西安视察，对红外影像技术进行了极大的肯定，鼓励发展红外医学影像技术，弘扬祖国中医，造福人民。'
            ],
            src: [
                '../../../../assets/images/information/companynews/4/xijinping.png',
            ],
        },
        {
            id: 2 ,
            title: '我公司便捷式红外影像设备',
            time: '2015年',
            source: '来源： 江山中医可视化',
            text: [
                '2015春节，习近平总书记到西安视察，对红外影像技术进行了极大的肯定，鼓励发展红外医学影像技术，弘扬祖国中医，造福人民。'
            ],
            src: [
                '../../../../assets/images/information/companynews/4/xijinping.png',
            ],
        },
        {
            id: 3 ,
            title: '江山智能中医服务云亮相第20届高交会',
            time: '2018-11-14',
            source: '来源： 江山中医可视化',
            text: [
                // tslint:disable-next-line:max-line-length
                '第二十届中国国际高新技术成果交易会以“坚持新发展理念，推动高质量发展”为主题，展会总面积达14万平方米，共有3356家展商参展，展示的高新技术达到11322项，涵盖了汽车、物联网、智能制造、人工智能等领域。其中，有1746项新产品和585项新技术是首次亮相，比去年增加近百项；80家企业举办了专门的新产品新技术发布会活动。',
                '高交会作为中国科技第一展，代表了国内高科技的最高水平，作为中关村推荐企业参展，江山智能中医服务云受到了广泛关注，用"AI+中医"赋能人类健康！',
                // tslint:disable-next-line:max-line-length
                '大健康产业背景下，北京江山中医可视化科技股份有限公司以传统中医特色为服务，集合人工智能、大数据分析以及云计算等国内顶尖科研成果，在国内首次开拓性的提出“智能中医云服务”行业新名词，并与国内诸多品牌企业，合作开发信息交互生态测试基站，为人类大健康持续赋能！',
                // tslint:disable-next-line:max-line-length
                '11月14日下午，北京市中关村科技园管委会翟主任亲临展馆现场指导视察，对“中医可视化+智能中医服务云”提出高度赞许，深入交流这二十年研发背后的点点滴滴，并现场作出指令：要加快跟社区康养中心的合作，在基层社区卫生服务中心广覆盖建立智慧中医服务云平台基站，作为全国基层诊疗的样板工程，为基层的全科医生培训，以及扶贫慈善下农村，响应医疗脱贫为导向，为老百姓谋健康，谋福利，谋发展，切实加快全国基站的铺放与落地。与此同时，坚持“一带一路协同发展”，将中医中药走出国门，让世界各地的华人用了中医可视化和智能中医服务云，更直观更深入的学习了解中华文明博大精深的智慧，让全世界人同享中华医药的福祉。',
                // tslint:disable-next-line:max-line-length
                '此番展会，我们为了让每一位嘉宾更直观的了解智能中医服务云，特别新展示了最新研发的中医可视化面部全息筛查，结合千百年来老祖宗的经验智慧，以中医经典为理论依据，利用面部全息影像技术和大数据云算法分析，短短二三秒钟就完成面部初筛，一分钟出具系统的中医可视化面部全息报告，内容会提示您现阶段最该注意哪些系统问题，比如三焦系统功能预警，中医脏腑辨证提示，以及从“穴位—饮食—运动（导引）”的个性化定制健康生活方式干预方案和指导建议，从“看得见”到“怎么办”全方位全生命周期的为人类大健康不断赋能。',
                // tslint:disable-next-line:max-line-length
                '江山智能中医服务云本次参加第二十届高交会，引起了相关领导、政府单位、投资机构、合作伙伴及专业人士的普遍关注，获得了多方肯定的评价，达到了预期效果。本届展会期间，公司展台平均每天接待参观体验人数300多人，也有大批意向客户，选择合作建立生态测试基站，并参加了项目对接洽谈会，和五家投资机构进行了洽谈。举办了智能中医服务云新技术新产品发布会，获得了包括广州中医药大学校长王省良校长等业内专家的高度认可与好评。'
            ],
            src: [
                '../../../../assets/images/information/companynews/2/1.png',
                '../../../../assets/images/information/companynews/2/2.png',
                '../../../../assets/images/information/companynews/2/3.png',
                '../../../../assets/images/information/companynews/2/4.png',
                '../../../../assets/images/information/companynews/2/5.png',
            ],
        },
        {
            id:  4,
            title: '国家卫生部王国强副部长在首届中医诊疗设备论坛展示会现场视察并听取汇报',
            time: '2008-10',
            source: '来源： 江山中医可视化',
            text: [
                '2008年10月国家卫生部王国强副部长在首届中医诊疗设备论坛展示会现场视察并听取汇报'
            ],
            src: [
                '../../../../assets/images/information/companynews/1/wangguoqiang.png',
            ],
        },
        {
            id:  5,
            title: '人民日报内参评论',
            time: '2013-8-30',
            source: '来源： 江山中医可视化',
            text: [
                // tslint:disable-next-line:max-line-length
                '2013年8月30日，人民日报内参第1352期发表评论，由解放军总医院基础医学研究所原所长袁云娥教授带领的科研团队，经过十余年探索研发的医学数字红外热成像自动分析系统，在中医发展史上具有里程碑意义，为中医走向世界奠定了基础。称数字红外成像技术打开中医理论“黑箱”。'
            ],
            src: [
                '../../../../assets/images/information/companynews/3/renminribao.png',
            ],
        },
        {
            id:  6,
            title: '中国健康促进基金会成立红外医学专项基金',
            time: '2015-5',
            source: '来源： 江山中医可视化',
            text: [
                // tslint:disable-next-line:max-line-length
                '2015年5月，中国健康促进基金会成立红外医学专项基金。总后卫生部原部长、中国健康促进基金会理事长白书忠为名誉主任，北京江山中医可视化科技股份有限公司董事长袁云娥任红外医学发展专项基金管理委员会主任委员。'
            ],
            src: [
                '../../../../assets/images/information/companynews/6/jijinhui.png',
            ],
        },
        {
            id:  7,
            title: '斯里兰卡国家经济委员会代表团考察访问北京江山中医可视化科技股份有限公司',
            time: '2013年',
            source: '来源： 江山中医可视化',
            text: [
                // tslint:disable-next-line:max-line-length
                '由秘书长萨马拉孔率领的斯里兰卡国家经济委员会（国经委）代表团于2018年3月29日抵达北京，进行为期五天的工作访问。期间应邀于4月2日到北京江山中医可视化科技股份有限公司进行考察访问。',
                // tslint:disable-next-line:max-line-length
                '访问过程中，北京江山中医可视化科技股份有限公司袁云娥董事长为来宾介绍了公司发展历程，详细阐述了红外数字热态分析技术与中医相结合，将高精尖的现代科技与源远流长的传统文化融为一体、造福人民的初衷与研究成果。代表团人员在听取介绍后参观、体验了红外检测产品。来宾无不感叹成像之精准，测评之快捷，表现出对该项技术和产品的浓厚兴趣，并深深赞叹中医文化的博大精深。'
            ],
            src: [
                '../../../../assets/images/information/companynews/5/2.png',
                '../../../../assets/images/information/companynews/5/1.png',
            ],
        },
        {
            id:  8,
            title: '“中医可视化智能健康服务系统”荣获全国首届自然医学与老年保健高峰论坛评选活动优胜奖',
            time: '2015-5',
            source: '来源： 江山中医可视化',
            text: [
                // tslint:disable-next-line:max-line-length
                '北京江山中医可视化科技股份有限公司于2018年11月10日至11日参加了第三届中国老年保健高峰论坛，“中医可视化智能健康服务系统” 在《全国首届自然医学与老年保健高峰论坛》会展评选活动中荣获优胜奖。',
                // tslint:disable-next-line:max-line-length
                '第十一届全国政协副主席、中老年保健医学研究会总顾问李金华，中国工程院院士、中老年保健医学研究会名誉顾问王陇德，中国工程院院士董家鸿，国家卫健委及省市有关部门领导出席会议并现场观摩了“中医可视化智能健康服务系统”，对此系统给予了高度肯定。',
            ],
            src: [
                '../../../../assets/images/information/companynews/7/1.png',
                '../../../../assets/images/information/companynews/7/2.png',
                '../../../../assets/images/information/companynews/7/3.png',
            ],
        },
        {
            id:  9,
            title: '《医学数字红外热成像技术概论》再版印刷',
            time: '2008-10',
            source: '来源： 江山中医可视化',
            text: [
                // tslint:disable-next-line:max-line-length
                '由北京江山中医可视化科技股份有限公司董事长、解放军总医院基础研究所原所长袁云娥所著的《医学数字红外热成像技术概论》，曾于2013年6月出版。此书是介绍有关数字红外热成像技术在医学领域研究和应用的学术专著。该书全面系统阐述了数字红外热成像技术在医学的应用与发展、红外热成像基本原理等内容，自出版以来深受广大数字红外热成像技术研究及应用人员的喜爱，供不应求，为满足市场及广大爱好者的需求，此书已于2018年8月再版印制。'
            ],
            src: [
                '../../../../assets/images/information/companynews/8/2.png',
            ],
        },
        {
            id:  10,
            title: '公司荣誉',
            time: '2008-08',
            source: '来源： 江山中医可视化',
            text: [
                // tslint:disable-next-line:max-line-length
                '2018年，北京江山中医可视化科技股份有限公司收获了 "高新技术企业证书"、 "中关村高新技术企业证书"、"中国健康促进基金会授予“有社会责任感企业”" ，三大项特殊荣誉'
            ],
            src: [
                '../../../../assets/images/information/companynews/9/3.png',
                '../../../../assets/images/information/companynews/9/4.png',
                '../../../../assets/images/information/companynews/9/5.png',
            ],
        },
    ]

    constructor() {
    }
}
