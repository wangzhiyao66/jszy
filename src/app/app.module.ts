import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProjectServiceService} from './service/project-service.service';
import {ApiService} from './service/api/api.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';

/** 配置 angular i18n **/
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {MenusModule} from './common/menus/menus.module';
import {Code404Component} from './common/code404/code404.component';
import {RouterComponent} from './router/router.component';
import {ScrollTopComponent} from './common/scroll-top/scroll-top.component';
import {FooterModule} from './common/footer/footer.module';
import {FooterComponent} from './common/footer/footer.component';

registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent,
        RouterComponent,
        Code404Component,
        ScrollTopComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        /** 导入 ng-zorro-antd 模块 **/
        NgZorroAntdModule,
        MenusModule,
        FooterModule,
        AppRoutingModule,
    ],
    entryComponents: [
        FooterComponent
    ],
    providers: [
        ApiService,
        ProjectServiceService,
        {provide: NZ_I18N, useValue: zh_CN}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
