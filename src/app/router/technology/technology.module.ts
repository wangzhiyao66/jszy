import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TechnologyComponent} from './technology.component';
import {TechnologyRouting} from './technology-routing';

@NgModule({
    declarations: [
        TechnologyComponent
    ],
    imports: [
        CommonModule,
        TechnologyRouting
    ]
})
export class TechnologyModule {
}
