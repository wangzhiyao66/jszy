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

@NgModule({
    declarations: [
        InformationComponent,
        InfomationViewComponent,
        CompanyNewsComponent,
        MarkActiveComponent,
        IndustryNewsComponent
    ],
    imports: [
        CommonModule,
        NgZorroAntdModule,
        RouterModule,
        FormsModule,
        InformationRouting
    ]
})
export class InformationModule {
}
