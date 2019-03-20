import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Code404Component} from './common/code404/code404.component';
import {RouterComponent} from './router/router.component';
import {LoginComponent} from './router/login/login.component';

// 我是在dev分支修改的
const routes: Routes = [
    {
        path: '',
        component: RouterComponent,
        children: [
            {
                path: '',
                loadChildren: './router/home/home.module#HomeModule'
            },
            {
                path: 'home',
                loadChildren: './router/home/home.module#HomeModule'
            },
            {
                path: 'technology',
                loadChildren: './router/technology/technology.module#TechnologyModule'
            },
            {
                path: 'product-serve',
                loadChildren: './router/product-serve/product-serve.module#ProductServeModule'
            },
            {
                path: 'market-operation',
                loadChildren: './router/market-operation/market-operation.module#MarketOperationModule'
            },
            {
                path: 'user',
                loadChildren: './router/user/user.module#UserModule'
            },
            {
                path: 'information',
                loadChildren: './router/information/information.module#InformationModule'
            },
            {
                path: 'about',
                loadChildren: './router/about/about.module#AboutModule'
            },
            {
                path: 'login',
                component: LoginComponent
            },
        ]
    },
    {
        path: '**',
        component: Code404Component,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        urlUpdateStrategy: 'eager',
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
