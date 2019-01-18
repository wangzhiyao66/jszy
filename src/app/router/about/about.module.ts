import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {AboutRouting} from './about-routing';
import {CompanyProfileComponent} from './company-profile/company-profile.component';
import {OrganizationComponent} from './organization/organization.component';
import {SocialConcernComponent} from './social-concern/social-concern.component';
import {ComputedHonorComponent} from './computed-honor/computed-honor.component';
import {LegalTeamComponent} from './legal-team/legal-team.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AboutComponent,
        CompanyProfileComponent,
        OrganizationComponent,
        SocialConcernComponent,
        ComputedHonorComponent,
        LegalTeamComponent,
        ContactUsComponent
    ],
    imports: [
        CommonModule,
        NgZorroAntdModule,
        RouterModule,
        AboutRouting
    ]
})
export class AboutModule {
}
