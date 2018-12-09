import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductServeComponent} from './product-serve.component';
import {ProductServeRouting} from './product-serve.routing';

@NgModule({
    declarations: [
        ProductServeComponent
    ],
    imports: [
        CommonModule,
        ProductServeRouting,
    ]
})
export class ProductServeModule {
}
