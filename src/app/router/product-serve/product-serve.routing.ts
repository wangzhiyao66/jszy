import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductServeComponent} from './product-serve.component';

const routes: Routes = [
    {
        path: '',
        component: ProductServeComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductServeRouting { }