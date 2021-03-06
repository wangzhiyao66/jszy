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
    public industrylist: any[] = [
        {
            id: 1,
            title: '国务院关于印发中医药发展战略规划纲要(2016—2030年）的通知',
            time: '2018-12-24 11:00',
            source: '来源： 江山中医可视化',
            // tslint:disable-next-line:max-line-length
            text: [
                '各省、自治区、直辖市人民政府，国务院各部委、各直属机构：\n' +
                '　　现将《中医药发展战略规划纲要（2016—2030年）》印发给你们，请认真贯彻执行。\n' +
                '　　　 国务院　2016年2月22日（此件公开发布）\n' ,
                '中医药发展战略规划纲要\n' +
                '（2016—2030年）\n' +
                '中医药作为我国独特的卫生资源、潜力巨大的经济资源、具有原创优势的科技资源、优秀的文化资源和重要的生态资源，在经济社会发展中发挥着重要作用。随着我国新型工业化、信息化、城镇化、农业现代化深入发展，人口老龄化进程加快，健康服务业蓬勃发展，人民群众对中医药服务的需求越来越旺盛，迫切需要继承、发展、利用好中医药，充分发挥中医药在深化医药卫生体制改革中的作用，造福人类健康。为明确未来十五年我国中医药发展方向和工作重点，促进中医药事业健康发展，制定本规划纲要。\n',
                '一、基本形势',
                '新中国成立后特别是改革开放以来，党中央、国务院高度重视中医药工作，制定了一系列政策措施，推动中医药事业发展取得了显著成就。中医药总体规模不断扩大，发展水平和服务能力逐步提高，初步形成了医疗、保健、科研、教育、产业、文化整体发展新格局，对经济社会发展贡献度明显提升。截至2014年底，全国共有中医类医院（包括中医、中西医结合、民族医医院，下同）3732所，中医类医院床位75.5万张，中医类执业（助理）医师39.8万人，2014年中医类医院总诊疗人次5.31亿。中医药在常见病、多发病、慢性病及疑难病症、重大传染病防治中的作用得到进一步彰显，得到国际社会广泛认可。2014年中药生产企业达到3813家，中药工业总产值7302亿元。中医药已经传播到183个国家和地区。\n' +
                '另一方面，我国中医药资源总量仍然不足，中医药服务领域出现萎缩现象，基层中医药服务能力薄弱，发展规模和水平还不能满足人民群众健康需求；中医药高层次人才缺乏，继承不足、创新不够；中药产业集中度低，野生中药材资源破坏严重，部分中药材品质下降，影响中医药可持续发展；适应中医药发展规律的法律政策体系有待健全；中医药走向世界面临制约和壁垒，国际竞争力有待进一步提升；中医药治理体系和治理能力现代化水平亟待提高，迫切需要加强顶层设计和统筹规划。\n' +
                '当前，我国进入全面建成小康社会决胜阶段，满足人民群众对简便验廉的中医药服务需求，迫切需要大力发展健康服务业，拓宽中医药服务领域。深化医药卫生体制改革，加快推进健康中国建设，迫切需要在构建中国特色基本医疗制度中发挥中医药独特作用。适应未来医学从疾病医学向健康医学转变、医学模式从生物医学向生物—心理—社会模式转变的发展趋势，迫切需要继承和发展中医药的绿色健康理念、天人合一的整体观念、辨证施治和综合施治的诊疗模式、运用自然的防治手段和全生命周期的健康服务。促进经济转型升级，培育新的经济增长动能，迫切需要加大对中医药的扶持力度，进一步激发中医药原创优势，促进中医药产业提质增效。传承和弘扬中华优秀传统文化，迫切需要进一步普及和宣传中医药文化知识。实施“走出去”战略，推进“一带一路”建设，迫切需要推动中医药海外创新发展。各地区、各有关部门要正确认识形势，把握机遇，扎实推进中医药事业持续健康发展。\n' +
                '二、指导思想、基本原则和发展目标',
                '（一）指导思想。\n' +
                '认真落实党的十八大和十八届二中、三中、四中、五中全会精神，深入贯彻习近平总书记系列重要讲话精神，紧紧围绕“四个全面”战略布局和党中央、国务院决策部署，牢固树立创新、协调、绿色、开放、共享发展理念，坚持中西医并重，从思想认识、法律地位、学术发展与实践运用上落实中医药与西医药的平等地位，充分遵循中医药自身发展规律，以推进继承创新为主题，以提高中医药发展水平为中心，以完善符合中医药特点的管理体制和政策机制为重点，以增进和维护人民群众健康为目标，拓展中医药服务领域，促进中西医结合，发挥中医药在促进卫生、经济、科技、文化和生态文明发展中的独特作用，统筹推进中医药事业振兴发展，为深化医药卫生体制改革、推进健康中国建设、全面建成小康社会和实现“两个一百年”奋斗目标作出贡献。',
                '(二）基本原则。\n' +
                '坚持以人为本、服务惠民。以满足人民群众中医药健康需求为出发点和落脚点，坚持中医药发展为了人民、中医药成果惠及人民，增进人民健康福祉，保证人民享有安全、有效、方便的中医药服务。\n' +
                '坚持继承创新、突出特色。把继承创新贯穿中医药发展一切工作，正确把握好继承和创新的关系，坚持和发扬中医药特色优势，坚持中医药原创思维，充分利用现代科学技术和方法，推动中医药理论与实践不断发展，推进中医药现代化，在创新中不断形成新特色、新优势，永葆中医药薪火相传。\n' +
                '坚持深化改革、激发活力。改革完善中医药发展体制机制，充分发挥市场在资源配置中的决定性作用，拉动投资消费，推进产业结构调整，更好发挥政府在制定规划、出台政策、引导投入、规范市场等方面的作用，积极营造平等参与、公平竞争的市场环境，不断激发中医药发展的潜力和活力。\n' +
                '坚持统筹兼顾、协调发展。坚持中医与西医相互取长补短，发挥各自优势，促进中西医结合，在开放中发展中医药。统筹兼顾中医药发展各领域、各环节，注重城乡、区域、国内国际中医药发展，促进中医药医疗、保健、科研、教育、产业、文化全面发展，促进中医中药协调发展，不断增强中医药发展的整体性和系统性。\n' +
                '（三）发展目标。\n' +
                '到2020年，实现人人基本享有中医药服务，中医医疗、保健、科研、教育、产业、文化各领域得到全面协调发展，中医药标准化、信息化、产业化、现代化水平不断提高。中医药健康服务能力明显增强，服务领域进一步拓宽，中医医疗服务体系进一步完善，每千人口公立中医类医院床位数达到0.55张，中医药服务可得性、可及性明显改善，有效减轻群众医疗负担，进一步放大医改惠民效果；中医基础理论研究及重大疾病攻关取得明显进展，中医药防治水平大幅度提高；中医药人才教育培养体系基本建立，凝聚一批学术领先、医术精湛、医德高尚的中医药人才，每千人口卫生机构中医执业类（助理）医师数达到0.4人；中医药产业现代化水平显著提高，中药工业总产值占医药工业总产值30%以上，中医药产业成为国民经济重要支柱之一；中医药对外交流合作更加广泛；符合中医药发展规律的法律体系、标准体系、监督体系和政策体系基本建立，中医药管理体制更加健全。\n' +
                '到2030年，中医药治理体系和治理能力现代化水平显著提升，中医药服务领域实现全覆盖，中医药健康服务能力显著增强，在治未病中的主导作用、在重大疾病治疗中的协同作用、在疾病康复中的核心作用得到充分发挥；中医药科技水平显著提高，基本形成一支由百名国医大师、万名中医名师、百万中医师、千万职业技能人员组成的中医药人才队伍；公民中医健康文化素养大幅度提升；中医药工业智能化水平迈上新台阶，对经济社会发展的贡献率进一步增强，我国在世界传统医药发展中的引领地位更加巩固，实现中医药继承创新发展、统筹协调发展、生态绿色发展、包容开放发展和人民共享发展，为健康中国建设奠定坚实基础。',
                '三、重点任务',
                '（一）切实提高中医医疗服务能力。\n' +
                '1.完善覆盖城乡的中医医疗服务网络。全面建成以中医类医院为主体、综合医院等其他类别医院中医药科室为骨干、基层医疗卫生机构为基础、中医门诊部和诊所为补充、覆盖城乡的中医医疗服务网络。县级以上地方人民政府要在区域卫生规划中合理配置中医医疗资源，原则上在每个地市级区域、县级区域设置1个市办中医类医院、1个县办中医类医院，在综合医院、妇幼保健机构等非中医类医疗机构设置中医药科室。在乡镇卫生院和社区卫生服务中心建立中医馆、国医堂等中医综合服务区，加强中医药设备配置和中医药人员配备。加强中医医院康复科室建设，支持康复医院设置中医药科室，加强中医康复专业技术人员的配备。\n' +
                '2.提高中医药防病治病能力。实施中医临床优势培育工程，加强在区域内有影响力、科研实力强的省级或地市级中医医院能力建设。建立中医药参与突发公共事件应急网络和应急救治工作协调机制，提高中医药应急救治和重大传染病防治能力。持续实施基层中医药服务能力提升工程，提高县级中医医院和基层医疗卫生机构中医优势病种诊疗能力、中医药综合服务能力。建立慢性病中医药监测与信息管理制度，推动建立融入中医药内容的社区健康管理模式，开展高危人群中医药健康干预，提升基层中医药健康管理水平。大力发展中医非药物疗法，充分发挥其在常见病、多发病和慢性病防治中的独特作用。建立中医医院与基层医疗卫生机构、疾病预防控制机构分工合作的慢性病综合防治网络和工作机制，加快形成急慢分治的分级诊疗秩序。\n' +
                '3.促进中西医结合。运用现代科学技术，推进中西医资源整合、优势互补、协同创新。加强中西医结合创新研究平台建设，强化中西医临床协作，开展重大疑难疾病中西医联合攻关，形成独具特色的中西医结合诊疗方案，提高重大疑难疾病、急危重症的临床疗效。探索建立和完善国家重大疑难疾病中西医协作工作机制与模式，提升中西医结合服务能力。积极创造条件建设中西医结合医院。完善中西医结合人才培养政策措施，建立更加完善的西医学习中医制度，鼓励西医离职学习中医，加强高层次中西医结合人才培养。\n' +
                '4.促进民族医药发展。将民族医药发展纳入民族地区和民族自治地方经济社会发展规划，加强民族医医疗机构建设，支持有条件的民族自治地方举办民族医医院，鼓励民族地区各类医疗卫生机构设立民族医药科，鼓励社会力量举办民族医医院和诊所。加强民族医药传承保护、理论研究和文献的抢救与整理。推进民族药标准建设，提高民族药质量，加大开发推广力度，促进民族药产业发展。\n' +
                '5.放宽中医药服务准入。改革中医医疗执业人员资格准入、执业范围和执业管理制度，根据执业技能探索实行分类管理，对举办中医诊所的，将依法实施备案制管理。改革传统医学师承和确有专长人员执业资格准入制度，允许取得乡村医生执业证书的中医药一技之长人员在乡镇和村开办中医诊所。鼓励社会力量举办连锁中医医疗机构，对社会资本举办只提供传统中医药服务的中医门诊部、诊所，医疗机构设置规划和区域卫生发展规划不作布局限制，支持有资质的中医专业技术人员特别是名老中医开办中医门诊部、诊所，鼓励药品经营企业举办中医坐堂医诊所。保证社会办和政府办中医医疗机构在准入、执业等方面享有同等权利。\n' +
                '6.推动“互联网+”中医医疗。大力发展中医远程医疗、移动医疗、智慧医疗等新型医疗服务模式。构建集医学影像、检验报告等健康档案于一体的医疗信息共享服务体系，逐步建立跨医院的中医医疗数据共享交换标准体系。探索互联网延伸医嘱、电子处方等网络中医医疗服务应用。利用移动互联网等信息技术提供在线预约诊疗、候诊提醒、划价缴费、诊疗报告查询、药品配送等便捷服务。\n' +
                '（二）大力发展中医养生保健服务。\n' +
                '7.加快中医养生保健服务体系建设。研究制定促进中医养生保健服务发展的政策措施，支持社会力量举办中医养生保健机构，实现集团化发展或连锁化经营。实施中医治未病健康工程，加强中医医院治未病科室建设，为群众提供中医健康咨询评估、干预调理、随访管理等治未病服务，探索融健康文化、健康管理、健康保险于一体的中医健康保障模式。鼓励中医医院、中医医师为中医养生保健机构提供保健咨询、调理和药膳等技术支持。\n' +
                '8.提升中医养生保健服务能力。鼓励中医医疗机构、养生保健机构走进机关、学校、企业、社区、乡村和家庭，推广普及中医养生保健知识和易于掌握的理疗、推拿等中医养生保健技术与方法。鼓励中医药机构充分利用生物、仿生、智能等现代科学技术，研发一批保健食品、保健用品和保健器械器材。加快中医治未病技术体系与产业体系建设。推广融入中医治未病理念的健康工作和生活方式。\n' +
                '9.发展中医药健康养老服务。推动中医药与养老融合发展，促进中医医疗资源进入养老机构、社区和居民家庭。支持养老机构与中医医疗机构合作，建立快速就诊绿色通道，鼓励中医医疗机构面向老年人群开展上门诊视、健康查体、保健咨询等服务。鼓励中医医师在养老机构提供保健咨询和调理服务。鼓励社会资本新建以中医药健康养老为主的护理院、疗养院，探索设立中医药特色医养结合机构，建设一批医养结合示范基地。\n' +
                '10.发展中医药健康旅游服务。推动中医药健康服务与旅游产业有机融合，发展以中医药文化传播和体验为主题，融中医疗养、康复、养生、文化传播、商务会展、中药材科考与旅游于一体的中医药健康旅游。开发具有地域特色的中医药健康旅游产品和线路，建设一批国家中医药健康旅游示范基地和中医药健康旅游综合体。加强中医药文化旅游商品的开发生产。建立中医药健康旅游标准化体系，推进中医药健康旅游服务标准化和专业化。举办“中国中医药健康旅游年”，支持举办国际性的中医药健康旅游展览、会议和论坛。\n' +
                '（三）扎实推进中医药继承。\n' +
                '11.加强中医药理论方法继承。实施中医药传承工程，全面系统继承历代各家学术理论、流派及学说，全面系统继承当代名老中医药专家学术思想和临床诊疗经验，总结中医优势病种临床基本诊疗规律。将中医古籍文献的整理纳入国家中华典籍整理工程，开展中医古籍文献资源普查，抢救濒临失传的珍稀与珍贵古籍文献，推动中医古籍数字化，编撰出版《中华医藏》，加强海外中医古籍影印和回归工作。\n' +
                '12.加强中医药传统知识保护与技术挖掘。建立中医药传统知识保护数据库、保护名录和保护制度。加强中医临床诊疗技术、养生保健技术、康复技术筛选，完善中医医疗技术目录及技术操作规范。加强对传统制药、鉴定、炮制技术及老药工经验的继承应用。开展对中医药民间特色诊疗技术的调查、挖掘整理、研究评价及推广应用。加强对中医药百年老字号的保护。\n' +
                '13.强化中医药师承教育。建立中医药师承教育培养体系，将师承教育全面融入院校教育、毕业后教育和继续教育。鼓励医疗机构发展师承教育，实现师承教育常态化和制度化。建立传统中医师管理制度。加强名老中医药专家传承工作室建设，吸引、鼓励名老中医药专家和长期服务基层的中医药专家通过师承模式培养多层次的中医药骨干人才。\n' +
                '（四）着力推进中医药创新。\n' +
                '14.健全中医药协同创新体系。健全以国家和省级中医药科研机构为核心，以高等院校、医疗机构和企业为主体，以中医科学研究基地（平台）为支撑，多学科、跨部门共同参与的中医药协同创新体制机制，完善中医药领域科技布局。统筹利用相关科技计划（专项、基金等），支持中医药相关科技创新工作，促进中医药科技创新能力提升，加快形成自主知识产权，促进创新成果的知识产权化、商品化和产业化。\n' +
                '15.加强中医药科学研究。运用现代科学技术和传统中医药研究方法，深化中医基础理论、辨证论治方法研究，开展经穴特异性及针灸治疗机理、中药药性理论、方剂配伍理论、中药复方药效物质基础和作用机理等研究，建立概念明确、结构合理的理论框架体系。加强对重大疑难疾病、重大传染病防治的联合攻关和对常见病、多发病、慢性病的中医药防治研究，形成一批防治重大疾病和治未病的重大产品和技术成果。综合运用现代科技手段，开发一批基于中医理论的诊疗仪器与设备。探索适合中药特点的新药开发新模式，推动重大新药创制。鼓励基于经典名方、医疗机构中药制剂等的中药新药研发。针对疾病新的药物靶标，在中药资源中寻找新的候选药物。\n' +
                '16.完善中医药科研评价体系。建立和完善符合中医药特点的科研评价标准和体系，研究完善有利于中医药创新的激励政策。通过同行评议和引进第三方评估，提高项目管理效率和研究水平。不断提高中医药科研成果转化效率。开展中医临床疗效评价与转化应用研究，建立符合中医药特点的疗效评价体系。\n' +
                '　(五）全面提升中药产业发展水平。\n' +
                '17.加强中药资源保护利用。实施野生中药材资源保护工程，完善中药材资源分级保护、野生中药材物种分级保护制度，建立濒危野生药用动植物保护区、野生中药材资源培育基地和濒危稀缺中药材种植养殖基地，加强珍稀濒危野生药用动植物保护、繁育研究。建立国家级药用动植物种质资源库。建立普查和动态监测相结合的中药材资源调查制度。在国家医药储备中，进一步完善中药材及中药饮片储备。鼓励社会力量投资建立中药材科技园、博物馆和药用动植物园等保育基地。探索荒漠化地区中药材种植生态经济示范区建设。\n' +
                '18.推进中药材规范化种植养殖。制定中药材主产区种植区域规划。制定国家道地药材目录，加强道地药材良种繁育基地和规范化种植养殖基地建设。促进中药材种植养殖业绿色发展，制定中药材种植养殖、采集、储藏技术标准，加强对中药材种植养殖的科学引导，大力发展中药材种植养殖专业合作社和合作联社，提高规模化、规范化水平。支持发展中药材生产保险。建立完善中药材原产地标记制度。实施贫困地区中药材产业推进行动，引导贫困户以多种方式参与中药材生产，推进精准扶贫。\n' +
                '19.促进中药工业转型升级。推进中药工业数字化、网络化、智能化建设，加强技术集成和工艺创新，提升中药装备制造水平，加速中药生产工艺、流程的标准化、现代化，提升中药工业知识产权运用能力，逐步形成大型中药企业集团和产业集群。以中药现代化科技产业基地为依托，实施中医药大健康产业科技创业者行动，促进中药一二三产业融合发展。开展中成药上市后再评价，加大中成药二次开发力度，开展大规模、规范化临床试验，培育一批具有国际竞争力的名方大药。开发一批中药制造机械与设备，提高中药制造业技术水平与规模效益。推进实施中药标准化行动计划，构建中药产业全链条的优质产品标准体系。实施中药绿色制造工程，形成门类丰富的新兴绿色产业体系，逐步减少重金属及其化合物等物质的使用量，严格执行《中药类制药工业水污染物排放标准》（GB 21906-2008），建立中药绿色制造体系。\n' +
                '20.构建现代中药材流通体系。制定中药材流通体系建设规划，建设一批道地药材标准化、集约化、规模化和可追溯的初加工与仓储物流中心，与生产企业供应商管理和质量追溯体系紧密相连。发展中药材电子商务。利用大数据加强中药材生产信息搜集、价格动态监测分析和预测预警。实施中药材质量保障工程，建立中药材生产流通全过程质量管理和质量追溯体系，加强第三方检测平台建设。\n' +
                '（六）大力弘扬中医药文化。\n' +
                '21.繁荣发展中医药文化。大力倡导“大医精诚”理念，强化职业道德建设，形成良好行业风尚。实施中医药健康文化素养提升工程，加强中医药文物设施保护和非物质文化遗产传承，推动更多非药物中医诊疗技术列入联合国教科文组织非物质文化遗产名录和国家级非物质文化遗产目录，使更多古代中医典籍进入世界记忆名录。推动中医药文化国际传播，展示中华文化独特魅力，提升我国文化软实力。\n' +
                '22.发展中医药文化产业。推动中医药与文化产业融合发展，探索将中医药文化纳入文化产业发展规划。创作一批承载中医药文化的创意产品和文化精品。促进中医药与广播影视、新闻出版、数字出版、动漫游戏、旅游餐饮、体育演艺等有效融合，发展新型文化产品和服务。培育一批知名品牌和企业，提升中医药与文化产业融合发展水平。\n' +
                ' (七）积极推动中医药海外发展。\n' +
                '3.加强中医药对外交流合作。深化与各国政府和世界卫生组织、国际标准化组织等的交流与合作，积极参与国际规则、标准的研究与制订，营造有利于中医药海外发展的国际环境。实施中医药海外发展工程，推动中医药技术、药物、标准和服务走出去，促进国际社会广泛接受中医药。本着政府支持、民间运作、服务当地、互利共赢的原则，探索建设一批中医药海外中心。支持中医药机构全面参与全球中医药各领域合作与竞争，发挥中医药社会组织的作用。在国家援外医疗中进一步增加中医药服务内容。推进多层次的中医药国际教育交流合作，吸引更多的海外留学生来华接受学历教育、非学历教育、短期培训和临床实习，把中医药打造成中外人文交流、民心相通的亮丽名片。\n' +
                '24.扩大中医药国际贸易。将中医药国际贸易纳入国家对外贸易发展总体战略，构建政策支持体系，突破海外制约中医药对外贸易发展的法律、政策障碍和技术壁垒，加强中医药知识产权国际保护，扩大中医药服务贸易国际市场准入。支持中医药机构参与“一带一路”建设，扩大中医药对外投资和贸易。为中医药服务贸易发展提供全方位公共资源保障。鼓励中医药机构到海外开办中医医院、连锁诊所和中医养生保健机构。扶持中药材海外资源开拓，加强海外中药材生产流通质量管理。鼓励中医药企业走出去，加快打造全产业链服务的跨国公司和知名国际品牌。积极发展入境中医健康旅游，承接中医医疗服务外包，加强中医药服务贸易对外整体宣传和推介。',
                '四、保障措施' ,
                '（一）健全中医药法律体系。推动颁布并实施中医药法，研究制定配套政策法规和部门规章，推动修订执业医师法、药品管理法和医疗机构管理条例、中药品种保护条例等法律法规，进一步完善中医类别执业医师、中医医疗机构分类和管理、中药审批管理、中医药传统知识保护等领域相关法律规定，构建适应中医药发展需要的法律法规体系。指导地方加强中医药立法工作。\n' +
                '（二）完善中医药标准体系。为保障中医药服务质量安全，实施中医药标准化工程，重点开展中医临床诊疗指南、技术操作规范和疗效评价标准的制定、推广与应用。系统开展中医治未病标准、药膳制作标准和中医药保健品标准等研究制定。健全完善中药质量标准体系，加强中药质量管理，重点强化中药炮制、中药鉴定、中药制剂、中药配方颗粒以及道地药材的标准制定与质量管理。加快中药数字化标准及中药材标本建设。加快国内标准向国际标准转化。加强中医药监督体系建设，建立中医药监督信息数据平台。推进中医药认证管理，发挥社会力量的监督作用。\n' +
                '（三）加大中医药政策扶持力度。落实政府对中医药事业的投入政策。改革中医药价格形成机制，合理确定中医医疗服务收费项目和价格，降低中成药虚高药价，破除以药补医机制。继续实施不取消中药饮片加成政策。在国家基本药物目录中进一步增加中成药品种数量，不断提高国家基本药物中成药质量。地方各级政府要在土地利用总体规划和城乡规划中统筹考虑中医药发展需要，扩大中医医疗、养生保健、中医药健康养老服务等用地供给。\n' +
                '（四）加强中医药人才队伍建设。建立健全院校教育、毕业后教育、继续教育有机衔接以及师承教育贯穿始终的中医药人才培养体系。重点培养中医重点学科、重点专科及中医药临床科研领军人才。加强全科医生人才、基层中医药人才以及民族医药、中西医结合等各类专业技能人才培养。开展临床类别医师和乡村医生中医药知识与技能培训。建立中医药职业技能人员系列，合理设置中医药健康服务技能岗位。深化中医药教育改革，建立中医学专业认证制度，探索适应中医医师执业分类管理的人才培养模式，加强一批中医药重点学科建设，鼓励有条件的民族地区和高等院校开办民族医药专业，开展民族医药研究生教育，打造一批世界一流的中医药名校和学科。健全国医大师评选表彰制度，完善中医药人才评价机制。建立吸引、稳定基层中医药人才的保障和长效激励机制。\n' +
                '（五）推进中医药信息化建设。按照健康医疗大数据应用工作部署，在健康中国云服务计划中，加强中医药大数据应用。加强中医医院信息基础设施建设，完善中医医院信息系统。建立对患者处方真实有效性的网络核查机制，实现与人口健康信息纵向贯通、横向互通。完善中医药信息统计制度建设，建立全国中医药综合统计网络直报体系。',
                '五、组织实施',
                '（一）加强规划组织实施。进一步完善国家中医药工作部际联席会议制度，由国务院领导同志担任召集人。国家中医药工作部际联席会议办公室要强化统筹协调，研究提出中医药发展具体政策措施，协调解决重大问题，加强对政策落实的指导、督促和检查；要会同相关部门抓紧研究制定本规划纲要实施分工方案，规划建设一批国家中医药综合改革试验区，确保各项措施落到实处。地方各级政府要将中医药工作纳入经济社会发展规划，加强组织领导，健全中医药发展统筹协调机制和工作机制，结合实际制定本规划纲要具体实施方案，完善考核评估和监督检查机制。\n' +
                '（二）健全中医药管理体制。按照中医药治理体系和治理能力现代化要求，创新管理模式，建立健全国家、省、市、县级中医药管理体系，进一步完善领导机制，切实加强中医药管理工作。各相关部门要在职责范围内，加强沟通交流、协调配合，形成共同推进中医药发展的工作合力。\n' +
                '（三）营造良好社会氛围。综合运用广播电视、报刊等传统媒体和数字智能终端、移动终端等新型载体，大力弘扬中医药文化知识，宣传中医药在经济社会发展中的重要地位和作用。推动中医药进校园、进社区、进乡村、进家庭，将中医药基础知识纳入中小学传统文化、生理卫生课程，同时充分发挥社会组织作用，形成全社会“信中医、爱中医、用中医”的浓厚氛围和共同发展中医药的良好格局。\n'
            ],
            src: [],
        },
        {
            id: 2,
            title: '中药攻占全球, 80个国家动起来了',
            time: '',
            source: '来源： 江山中医可视化',
            // tslint:disable-next-line:max-line-length
            text: [
                '“太激动人心了！中药攻占全球市场，我们有希望！”出席 “世界中医药服务贸易联合会”成立大会的一位代表发出了内心的感慨。',
                // tslint:disable-next-line:max-line-length
                '2017年10月，中国医药物资协会在加勒比海洋量子号游轮上主办的第十二届中国成长型医药企业发论坛暨世界中医药服务贸易推进大会上，5000名医药人士出席。在这次活动上，自全球80多个国家和地区的中医药行业代表共同发起成立了世界中医药服务贸易联合会。在中国倡导的“一带一路”获世界瞩目背景下，中药通过成立全球组织、进而扩大海外市场，又将得到提速。',
                // tslint:disable-next-line:max-line-length
                '赛柏蓝应邀请出席了本次活动，并整理了与会代表对世界各国中医药贸易最新现状的介绍，对国内中药企业而言，意味着一轮新的机遇。',
                // tslint:disable-next-line:max-line-length
                '新西兰，中药能卖、能用纽西兰注册中医师工会名誉会长徐昕介绍，其已在海外27年，13年前在新西兰创办了中医药贸易公司同德堂，目前在销品种800多个。特别需要质量好、确确实实能够给中医师看病、能够有效果的中药。',
                // tslint:disable-next-line:max-line-length
                '新西兰也有很多医生在使用中药，但是没有一个统一的标准，这给行医者及患者均带来安全隐患。现在要从中国进口一个药材，药材本身要有许可证、原产地证书，进口商还要一级一级报到国家林业总局，获批后才能进口。这对于一个海外采购商而言，是十分困难的事。',
                // tslint:disable-next-line:max-line-length
                '南非，中药已经合法化南非中医针灸学会副会长张毅表示，中医药国际贸易最大的壁垒就是国外的政策法规，只有冲破这个壁垒，才能做大做强。要一个国家、一个国家地去做工作。目前在南非，中药实际上已经合法化了，中药就是药品，可以合法销售和使用。只是，对中药的管理还有待加强。这个工作在南非已经做了16年，由于缺乏足够的专家，管理法规目前还没有正式出台。',
                // tslint:disable-next-line:max-line-length
                '俄罗斯，中药有望今年底合法化俄罗斯中医药学会常务副会长兼秘书长王浩表示，2017年在中国驻俄罗斯大使馆举办了两次中医药从业人员大会，第一次是6月份，共有666名代表参加，中国人有115人，其余的全是俄罗斯人。第二次是10月中旬，又来了876人，中国人有120人，其余全是俄罗斯人。在全世界上，外国人如此集中参加中医药行业会议，还是没有过的，可见，俄罗斯人对中药是非常看重、认可的。而一个更重要的消息是，2017年12月30日，俄罗斯有望会通过一项法律，把俄罗斯的中医药合法化。此前的10月13日，俄罗斯已经通过一项法令，允许在俄罗斯种植43种中草药的科目。俄罗斯地大、资源好，没有任何一个国家能够比得上，中俄中医药贸易，前景广阔。',
                // tslint:disable-next-line:max-line-length
                '泰国，中药合法化已经17年，可进入东盟10国泰国中医师总会副会长张孟文介绍，泰国的华侨众多，已经有1000多年的中医中药使用历史，泰国的中医中药在17年前就已经全面的实行合法化。中药进入泰国也很多，在泰国唐人街，中药店非常多，这都是合法化后带来的市场繁荣。',
                // tslint:disable-next-line:max-line-length
                '目前，中药要进入泰国是很方便的，不但可以进口到泰国来，还可以从泰国卫生部获得中成药的注册证，只要你的产品有真正的疗效，是可以申请到的。由于泰国是东盟成员国，在泰国获证，就可以在东盟十国进行销售。而泰国也有泰药，每年出口几十亿美元，很多是被旅游者买走了。美国、澳大利亚、菲律宾：还在突破中药政策壁垒美国中医药商会会长刘源凯说，在商会中有300家从事中医药贸易的企业，中美中药贸易还是一个比较大的市场，遗憾的是，到目前为止，美国还没有承认中药是药，还需要不懈努力。',
                // tslint:disable-next-line:max-line-length
                '澳大利亚中药行业联合会会长马安阳表示说，自己在海外28年主要从事药品贸易，一路走来，感触太深了。在贸易过程中碰到了很大的障碍，很多的问题，其所在的联合会成立八年多来，一直在和澳大利亚政府游说，不断给政府提案，仅2017年10月就提交了3个提案，目标就是冲破政策壁垒。',
                // tslint:disable-next-line:max-line-length
                '菲律宾注册中医师及针灸师学会会长郑启明表示，要做好一个中药国际贸易商，最主要就是了解当地的政策法规，了解当地的销售渠道。政策要不断地去推进、去获得突破，而只有将贸易做好，才能够真正做到更远。',
                // tslint:disable-next-line:max-line-length
                '联合会：已建基础，责任重大联合会发起人之一、海外华人中医论坛主席董志林表示，国内已经有不少优秀的中药企业，但中药走出国门还是有一定的难度，发起成立联合会的初衷就是将优秀的中药产品推向世界际市场。目前已经有不少人在从事中医药国际批发贸易，第一步先从贸易这块开始。',
                // tslint:disable-next-line:max-line-length
                '联会会发起人之一、中国医药物资协会执行会长兼秘书长刘忠良介绍，中国医药物资协会目前已经联系了近100名国内中医药专家、200名国外中医药专家，先后在国内的及海外举行　了30多场的座谈会，目前是进一步推动中医药的国际贸易。协会会员中有大量优质的中药品种，并成立了12个有质量保障的原产地药材分支机构，努力将这些品种推向海外。',
                // tslint:disable-next-line:max-line-length
                '新当选为联合会会长的阮鸿献在会上表示，中药走出国门，质量至关重要，我们一定要把好质量关，一定不能让全球各地的中医药贸易产对我们中药心有疑虑，联合会责任重大，本人也是责任重大。',

            ],
            src: [
                '../../../../assets/images/information/insdury/4.png',
            ],
        },
        {
            id: 3,
            title: '国家高规格定调将健康融入所有政策16万亿的大健康产业蓝海市场大幕开启',
            time: '',
            source: '来源： 江山中医可视化',
            // tslint:disable-next-line:max-line-length
            text: [
                '一个庞大的产业破土而出。《规划纲要》定下明确目标：到2020年，健康服务业总规模超过8万亿，到2030年达到16万亿。一个以十数万亿计的健康产业正喷薄待出。',
                // tslint:disable-next-line:max-line-length
                '2017年11月21日至24日，第九届全球健康促进大会在上海举办，这是中国首次举办健康促进领域最高级别会议，此次会议将发布上海宣言和健康城市上海共识。就在会议召开前夕，卫计委等十部门联合制定下发加强健康促进与教育工作的指导意见，指导意见提出到2020年全国居民的健康素养水平要达到20%。不久前，《“健康中国2030”规划纲要》落地，“把健康融入所有政策，全方位、全周期维护和保障人民健康。”一个保障生命全周期的健康行动启程，一个以十数万亿计的健康产业正喷薄待出。',
                // tslint:disable-next-line:max-line-length
                '李克强当前，中国正处于全面建成小康社会的决胜阶段。前不久，习近平主席出席全国卫生与健康大会，会议提出“以基层为重点，以改革创新为动力，预防为主，中西医并重，将健康融入所有政策，人民共建共享”的卫生与健康工作方针。我们颁布了《“健康中国2030”规划纲要》，力争到2030年人人享有全方位、全生命周期的健康服务，人均预期寿命达到79岁，主要健康指标进入高收入国家行列。为此，我们将在以下方面做出不懈努力。一是切实把卫生与健康放在优先发展的战略地位，促进人民健康与经济社会协调发展，努力为全体人民提供基本卫生与健康服务。二是构建全程健康促进体系，全周期维护和保障人民健康。着力抓好预防保健，大力加强健康教育，深入开展全民健身，加强环境污染治理和重大疾病防控。三是着力强基层、补短板，促进健康公平可及。统筹城乡区域发展和新型城镇化建设，加大对基层卫生与健康事业的投入，积极发挥中医药作用，加大对贫困地区大病保险、医疗救助支持力度，逐步缩小城乡、地区、人群基本卫生健康服务差距。四是进一步深化医药卫生体制改革，建立健全覆盖城乡的基本医疗卫生制度。深化公立医院改革，完善全民基本医保制度，改革药品供应保障体系，更加注重医疗、医保、医药的三医联动改革。五是大力发展健康产业，不断满足群众多样化健康需求。充分发挥市场机制作用，调动社会力量增加健康产品和服务供给的积极性，使人民群众看病贵、看病难的问题不断得到缓解。促进健康与养老、旅游、互联网、健身休闲、食品等产业融合发展，推动健康领域的大众创业、万众创新。',
                // tslint:disable-next-line:max-line-length
                '全球最高规格健康促进大会开幕，把健康融入所有政策据人民日报报道，2017年11月21日，第九届全球健康促进大会启幕，这是全球健康促进领域的一场盛会。本次大会主题是“可持续发展中的健康促进”，口号是“人人享有健康，一切为了健康”。2016年8月，全国卫生与健康大会召开，“将健康融入所有政策”被列入我国卫生与健康工作方针。2016年10月，中共中央、国务院印发的《“健康中国2030”规划纲要》提出目标：到2020年，主要健康指标居于中高收入国家前列；到2030年，主要健康指标进入高收入国家行列；到2050年，建成与社会主义现代化国家相适应的健康国家。2030年人均预期寿命达到79岁。居民健康素养水平提高到2020年的20%和2030年的30%。',
                // tslint:disable-next-line:max-line-length
                '国家卫生计生委宣传司司长毛群安将健康融入所有政策，是应对和解决人群健康问题的核心策略。健康促进是一项跨部门协调工作，各个部门制定的公共政策都将对健康和可持续发展产生深刻的影响。为此，我国将建立跨部门高层协调机制，针对优先问题开展跨部门健康行动，全面提高城乡居民健康素养水平。无独有偶，在全球健康促进大会的新闻发布会上，《加强健康促进与教育工作的指导意见》下发，指导意见明确了“十三五”期间健康促进与教育工作的主要目标，针对普及健康生活方式提出了量化指标。文件提出：到2020年全国居民的健康素养水平要达到20%，重大慢性病过早死亡率比2015年要降低10%，同时指导意见也提出要进一步完善健康促进与教育工作的体系，把健康融入所有政策策略得到有效的实施，健康促进县区、学校、机关、企业、医院和健康家庭等建设的活动要取得明显的成效，初步形成了有利于健康的生活环境，以上是提出来的目标和要求。围绕着如何实现这些目标，指导意见从五个方面提出了工作的要求，分别是推进把健康融入所有政策，创造健康的支持环境，培养自助自律的行为，营造健康社会氛围，加强健康促进与教育体系建设这五个方面。无论从这届大会的主题和口号来看，还是之前健康中国2030规划纲要的目标来看，把健康融入所有政策将成为今后15年健康产业发展的主旋律，后期在细化政策的制定和研究中也将不断体现。',
                // tslint:disable-next-line:max-line-length
                '庞大的健康产业破土而出，16万亿蓝海即将开启目前，我国健康服务产业链主要有五大基本产业群：一是以医疗服务机构为主体的医疗产业；二是以药品、医疗器械、医疗耗材产销为主体的医药产业；三是以保健食品、健康产品产销为主体的保健品产业；四是以健康检测评估、咨询服务、调理康复和保障促进等为主体的健康管理服务产业；五是健康养老产业。“我国的医疗卫生服务体系主要是公立体系，深化医改以来，一直在鼓励社会力量参与到我国医疗卫生服务体系的建设中来。这就要鼓励社会多元化办医，不是办医疗，是多元化办健康产业，推动医疗服务，比如政府现在没有提供的健康管理、健康服务等很多方面，可以由社会力量来实施。”卫计委医药卫生科技发展研究中心副主任代涛说。',
                // tslint:disable-next-line:max-line-length
                '卫计委医药卫生科技发展研究中心代涛医药产业是很大的产业。在我国，药品、高端医疗设备还较落后，而在国际上这都是朝阳产业。我国将通过科技创新推动自主研发，特别是降低在专利药、高端医疗设备上对进口的依赖。代涛介绍，从提供传统的看病就医到提供全生命、全周期、全人群的健康服务，会催生出很多以前没有的新的业态。比如“互联网 ”、大数据和智能可穿戴设备等，都是有待发展的新业态。另外，健身休闲运动产业也正在蓬勃发展。',
                // tslint:disable-next-line:max-line-length
                '各地纷纷将“大健康”列为支柱产业，制定区域性的发展战略记者调研发现，一些省份已率先制定了区域性的健康产业发展战略。河北省《河北省“大健康、新医疗”产业发展规划（2016—2020年）》提出，到2020年，全省规模以上“大健康、新医疗”产业产值比2015年翻一番，产业总规模超过8000亿元，成为河北省战略性支柱产业。海南省海南省提出，“十三五”时期是我国医疗健康产业高速发展的时期，海南医疗健康产业迎来难得的发展机遇。预计到2020年，医疗健康产业占海南省GDP的比重将达到15％以上，成为名副其实的支柱产业。陕西省作为中国西部健康产业发展的先行者之一，陕西省国家级新区西咸新区沣东新城，将“大健康”产业列为战略性新兴产业支柱，近年来，先后引进了迪安生物医学诊断中心、深圳华大基因、佰美基因、宏基药业等一批国内“大健康”行业巨头企业，形成了医学研究、病理诊断、药品生产、医疗服务等“大健康”产业链。社会资本另外，中国银行、平安银行等一些金融机构和社会资本也纷纷介入健康服务产业。北京大学国家发展研究院专家认为，伴随中国新兴大健康服务业的快速增长，新一代信息技术、互联网的应用，生命科学领域研究和临床应用不断突破，医疗器械、养老服务、医药电商、移动医疗、健康保险、健康管理与促进等产业必将迎来全新的发展机遇。',
                // tslint:disable-next-line:max-line-length
                '专家视点北京大学国家发展研究院专家认为，伴随中国新兴大健康服务业的快速增长，新一代信息技术、互联网的应用，生命科学领域研究和临床应用不断突破，医疗器械、养老服务、医药电商、移动医疗、健康保险、健康管理与促进等产业必将迎来全新的发展机遇。一个庞大的产业破土而出。《规划纲要》定下明确目标：到2020年，健康服务业总规模超过8万亿，到2030年达到16万亿。'
            ],
            src: [
                '../../../../assets/images/information/insdury/5.png',
                '../../../../assets/images/information/insdury/6.png',
                '../../../../assets/images/information/insdury/7.png',
                '../../../../assets/images/information/insdury/8.png',
            ],
        },
    ];
    public companyNews: any[] = [
        {
            id: 1 ,
            title: '习近平总书记到西安视察鼓励发展红外医学',
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
            id:  2,
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
            id:  3,
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
            id: 4 ,
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
            id:  5,
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
            id:  8,
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
            id:  9,
            title: '公司荣誉',
            time: '2008-08',
            source: '来源： 江山中医可视化',
            text: [
                // tslint:disable-next-line:max-line-length
                '2018年，北京江山中医可视化科技股份有限公司收获了 "高新技术企业证书"、 "中关村高新技术企业证书"、中国健康促进基金会授予、“有社会责任感企业” ，三大项特殊荣誉'
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
