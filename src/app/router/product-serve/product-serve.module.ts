import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductServeComponent} from './product-serve.component';
import {ProductServeRouting} from './product-serve.routing';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        ProductServeComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ProductServeRouting,
    ]
})
export class ProductServeModule {
}
