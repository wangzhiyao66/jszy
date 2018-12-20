import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-story-red',
    templateUrl: './story-red.component.html',
    styleUrls: ['./story-red.component.scss']
})
export class StoryRedComponent implements OnInit {

    storylist: object[] = [
        {id: 1, url: '../../../../assets/images/overview/story/yang.png',
            title: '杨某某(一个市)生物工程协会的会长，也是在研究红外成像技术的历程中我们从相'},
        {id: 2, url: '../../../../assets/images/overview/story/wang.png',
            title: '王某某，河北的病人，男，23岁，2010年在外打工时发现右手没有力气，大小伙子，提不起20斤重的物体，干不了重活了.'},
        {id: 3, url: '../../../../assets/images/overview/story/dong.png',
            title: '东北某大学医学院附属医院的高级专业技术人员，她在肿瘤内科工作近20年了,感觉压力大.'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
