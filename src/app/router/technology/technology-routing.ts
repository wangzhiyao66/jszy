import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoryDetaillsComponent} from './story-detaills/story-detaills.component';
import {IndexComponent} from './index/index.component';
import {ActiveDetaillsComponent} from './active-detaills/active-detaills.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent ,
    },
    {
        path: 'story-detaills',
        component: StoryDetaillsComponent,
    },
    {
        path: 'active-detaills',
        component: ActiveDetaillsComponent,
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TechnologyRouting { }
