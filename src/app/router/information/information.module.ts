import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InformationRouting} from './information-routing';
import {InformationComponent} from './information.component';

@NgModule({
    declarations: [
        InformationComponent
    ],
    imports: [
        CommonModule,
        InformationRouting
    ]
})
export class InformationModule {
}
