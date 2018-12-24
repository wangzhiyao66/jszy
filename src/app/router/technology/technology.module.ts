import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TechnologyComponent} from './technology.component';
import {TechnologyRouting} from './technology-routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FooterComponent } from 'src/app/common/footer/footer.component';
import { FooterModule } from 'src/app/common/footer/footer.module';
import { IntroduceViewComponent } from './index/introduce-view/introduce-view.component';
import { TeamViewComponent } from './index/team-view/team-view.component';
import { ExpertAdvisorComponent } from './index/expert-advisor/expert-advisor.component';
import {TechnologyServiceService} from './technology-service.service';
import { CourseViewComponent } from './index/course-view/course-view.component';
import { AchievementsComponent } from './index/achievements/achievements.component';
import { StoryRedComponent } from './index/story-red/story-red.component';
import { ActiveComponent } from './index/active/active.component';
import { StoryDetaillsComponent } from './story-detaills/story-detaills.component';
import { IndexComponent } from './index/index.component';
import {RouterModule} from '@angular/router';

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
        StoryDetaillsComponent,
        IndexComponent,
    ],
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FooterModule,
        TechnologyRouting,
        RouterModule
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
