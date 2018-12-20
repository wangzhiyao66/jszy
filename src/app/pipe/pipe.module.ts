import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UrlpathPipe} from './urlpath.pipe';

@NgModule({
    declarations: [
        UrlpathPipe
    ],
    providers: [
        UrlpathPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        UrlpathPipe
    ]
})
export class PipeModule {
}
