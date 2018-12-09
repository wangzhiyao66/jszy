import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenusComponent} from './menus.component';
import {MenusService} from './menus.service';
import {FormsModule} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        MenusComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    providers: [
        MenusService
    ],
    exports: [
        MenusComponent
    ]
})
export class MenusModule {
}
