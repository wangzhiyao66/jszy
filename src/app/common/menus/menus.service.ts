import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

    public menus: any[] = [
        { title : '首页' , link : '/home' , hidden : false , animationfalg: false},
        { title : '技术概览' , link : '/technology' , hidden : false , animationfalg: false},
        { title : '产品与服务' , link : '/product-serve' , hidden : false , animationfalg: false},
        { title : '市场运营' , link : '/market-operation' , hidden : false , animationfalg: false},
        { title : '用户中心' , link : '/user' , hidden : false , animationfalg: false},
        { title : '重要资讯' , link : '/information' , hidden : false , animationfalg: false},
        { title : '关于我们' , link : '/about' , hidden : false , animationfalg: false},
];
    constructor() { }
}
