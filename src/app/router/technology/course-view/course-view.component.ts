import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Pulse} from '../../../animations/pulse.animation';

@Component({
    selector: 'app-course-view',
    templateUrl: './course-view.component.html',
    styleUrls: ['./course-view.component.scss'],
    animations: [
        Pulse
    ]
})
export class CourseViewComponent implements OnInit, OnChanges {
    // 获取本地变量
    @ViewChild('course') course: ElementRef;
    @Input() docuheight: number;
    @Input() clientHeight: number;
    coursefalg: Boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    // 变更检测
    ngOnChanges(): void {
        const target: number = this.docuheight + this.clientHeight * 0.7;
        if (this.course.nativeElement.offsetTop <= target) {
            this.coursefalg = true;
        }
    }

}
