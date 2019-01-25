import {Component, OnInit} from '@angular/core';
import {OriginData} from '../../../../interface/responses-data';
import {TechnologyServiceService} from '../../technology-service.service';

@Component({
    selector: 'app-active',
    templateUrl: './active.component.html',
    styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {

    list = this.service.activelist;

    constructor(private service: TechnologyServiceService) {
    }

    ngOnInit() {
    }

}
