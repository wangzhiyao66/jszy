import { Component, OnInit } from '@angular/core';
import { TechnologyServiceService } from '../technology-service.service';
import {Enter} from '../../../animations/advisor.animation';

@Component({
    selector: 'app-expert-advisor',
    templateUrl: './expert-advisor.component.html',
    styleUrls: ['./expert-advisor.component.scss'],
    animations: [
        Enter
    ]
})
export class ExpertAdvisorComponent implements OnInit {

    proplelist: any[] = [];
    morelist: any[] = [];
    showlist: boolean = false;

    constructor(private advisor: TechnologyServiceService) {
    }

    ngOnInit() {
        this.proplelist = this.advisor.advisordata.slice( 0 , 12);
        this.morelist = this.advisor.advisordata.slice(-5);
    }

    addshow() {
        this.showlist = !this.showlist ;
    }

}
