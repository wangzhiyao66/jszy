import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {UserRouting} from './user-routing';

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        CommonModule,
        UserRouting
    ]
})
export class UserModule {
}
