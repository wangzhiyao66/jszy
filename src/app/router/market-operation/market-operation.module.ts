import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarketOperationComponent} from './market-operation.component';
import {MarketOperationRouting} from './market-operation.routing';

@NgModule({
    declarations: [
        MarketOperationComponent
    ],
    imports: [
        CommonModule,
        MarketOperationRouting
    ]
})
export class MarketOperationModule {
}
