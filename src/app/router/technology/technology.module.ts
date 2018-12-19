import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TechnologyComponent} from './technology.component';
import {TechnologyRouting} from './technology-routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FooterComponent } from 'src/app/common/footer/footer.component';
import { FooterModule } from 'src/app/common/footer/footer.module';
import { IntroduceViewComponent } from './introduce-view/introduce-view.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { ExpertAdvisorComponent } from './expert-advisor/expert-advisor.component';
import {TechnologyServiceService} from './technology-service.service';
import { CourseViewComponent } from './course-view/course-view.component';

@NgModule({
    declarations: [
        TechnologyComponent,
        IntroduceViewComponent,
        TeamViewComponent,
        ExpertAdvisorComponent,
        CourseViewComponent,
    ],
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FooterModule,
        TechnologyRouting
    ],
    entryComponents: [
      FooterComponent
    ],
    providers: [
        TechnologyServiceService
    ]
})
export class TechnologyModule {
}
