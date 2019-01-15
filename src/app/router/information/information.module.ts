import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InformationRouting} from './information-routing';
import {InformationComponent} from './information.component';
import {InfomationViewComponent} from './infomation-view/infomation-view.component';
import {CompanyNewsComponent} from './company-news/company-news.component';
import {MarkActiveComponent} from './mark-active/mark-active.component';
import {IndustryNewsComponent} from './industry-news/industry-news.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NewsDetaillComponent } from './news-detaill/news-detaill.component';
import {InformationService} from './information-service.service';

@NgModule({
    declarations: [
        InformationComponent,
        InfomationViewComponent,
        CompanyNewsComponent,
        MarkActiveComponent,
        IndustryNewsComponent,
        NewsDetaillComponent
    ],
    imports: [
        CommonModule,
        NgZorroAntdModule,
        RouterModule,
        FormsModule,
        InformationRouting
    ],
    providers: [
        InformationService
    ]
})
export class InformationModule {
}
