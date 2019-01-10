import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InfomationViewComponent} from './infomation-view/infomation-view.component';

const routes: Routes = [
    {
        path: '',
        component: InfomationViewComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InformationRouting {
}