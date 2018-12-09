import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MarketOperationComponent} from './market-operation.component';

const routes: Routes = [
    {
        path: '',
        component: MarketOperationComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarketOperationRouting {
}