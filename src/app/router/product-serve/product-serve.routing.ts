import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriveViewComponent } from './serive-view/serive-view.component';

const routes: Routes = [
    {
        path: '',
        component: SeriveViewComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductServeRouting { }
