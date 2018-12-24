import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TechnologyComponent} from './technology.component';
import {StoryDetaillsComponent} from './story-detaills/story-detaills.component';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent ,
    },
    {
        path: 'story-detaills',
        component: StoryDetaillsComponent,
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TechnologyRouting { }
