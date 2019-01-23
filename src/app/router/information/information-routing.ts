import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InfomationViewComponent} from './infomation-view/infomation-view.component';
import {NewsDetaillComponent} from './news-detaill/news-detaill.component';
import {MarkDetaillComponent} from './mark-detaill/mark-detaill.component';
import {IndustryDetaillComponent} from './industry-detaill/industry-detaill.component';

const routes: Routes = [
    {
        path: '',
        component: InfomationViewComponent,
    },
    {
        path: 'news-detail',
        component: NewsDetaillComponent
    },
    {
        path: 'mark-detail',
        component: MarkDetaillComponent
    },
    {
        path: 'industry-detail',
        component: IndustryDetaillComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InformationRouting {
}