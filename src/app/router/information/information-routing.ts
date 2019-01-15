import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InfomationViewComponent} from './infomation-view/infomation-view.component';
import {NewsDetaillComponent} from './news-detaill/news-detaill.component';

const routes: Routes = [
    {
        path: '',
        component: InfomationViewComponent,
    },
    {
        path: 'news-detail',
        component: NewsDetaillComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InformationRouting {
}