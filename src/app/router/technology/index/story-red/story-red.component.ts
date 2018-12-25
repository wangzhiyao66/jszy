import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Pulse} from '../../../../animations/pulse.animation';
import {ActivatedRoute, Router} from '@angular/router';
import {TechnologyServiceService} from '../../technology-service.service';

@Component({
    selector: 'app-story-red',
    templateUrl: './story-red.component.html',
    styleUrls: ['./story-red.component.scss'],
    animations: [
        Pulse
    ]
})
export class StoryRedComponent implements OnInit , OnChanges {

    storyfalg = false;
    storylist: object[] = this.service.storylist;

    // 获取本地变量
    @ViewChild('story') story: ElementRef;
    @Input() docuheight: number;
    @Input() clientHeight: number;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private service: TechnologyServiceService
    ) {
    }

    ngOnInit() {
    }

    // 变更检测
    ngOnChanges(): void {
        const target: number = this.docuheight + this.clientHeight * 0.7;
        if (this.story.nativeElement.offsetTop <= target) {
            this.storyfalg = true;
        }
    }

}
