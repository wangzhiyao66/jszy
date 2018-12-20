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
import { AchievementsComponent } from './achievements/achievements.component';
import { StoryRedComponent } from './story-red/story-red.component';
import { ActiveComponent } from './active/active.component';

@NgModule({
    declarations: [
        TechnologyComponent,
        IntroduceViewComponent,
        TeamViewComponent,
        ExpertAdvisorComponent,
        CourseViewComponent,
        AchievementsComponent,
        StoryRedComponent,
        ActiveComponent,
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
