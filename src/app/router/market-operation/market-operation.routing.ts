import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MarketViewComponent} from './market-view/market-view.component';

const routes: Routes = [
    {
        path: '',
        component: MarketViewComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarketOperationRouting {
}