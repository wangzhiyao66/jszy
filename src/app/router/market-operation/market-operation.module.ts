import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarketOperationComponent} from './market-operation.component';
import {MarketOperationRouting} from './market-operation.routing';
import {MarketViewComponent} from './market-view/market-view.component';
import {RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import { MarketApplyComponent } from './market-apply/market-apply.component';
import { ApplyRangeComponent } from './apply-range/apply-range.component';
import { RangeCaseComponent } from './range-case/range-case.component';
import { OperationPlanComponent } from './operation-plan/operation-plan.component';
import { CooperationModeComponent } from './cooperation-mode/cooperation-mode.component';
import { AfterSeriveComponent } from './after-serive/after-serive.component';

@NgModule({
    declarations: [
        MarketOperationComponent,
        MarketViewComponent,
        MarketApplyComponent,
        ApplyRangeComponent,
        RangeCaseComponent,
        OperationPlanComponent,
        CooperationModeComponent,
        AfterSeriveComponent,
    ],
    imports: [
        CommonModule,
        NgZorroAntdModule,
        RouterModule,
        FormsModule,
        MarketOperationRouting
    ]
})
export class MarketOperationModule {
}
