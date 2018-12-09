import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MenusService} from './menus.service';

@Component({
    selector: 'app-menus',
    templateUrl: './menus.component.html',
    styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {
    but_title: Boolean = false;
    isEnd = false;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private menuservice: MenusService) {
    }

    ngOnInit() {
    }

    gotohome() {
        // 跳转首页
    }

    login() {
        // 登录功能
        this.but_title = true;
        this.router.navigate(['404']);
    }
    output() {
        // 退出功能
        this.but_title = false;

    }

    // /**
    //  * 开始动画
    //  */
    // start() {
    //     console.log('开始动画');
    //     this.isEnd = false;
    // }
    //
    /**
     * 结束动画
     */
    stopAnimation() {
        console.log('结束动画');
        this.isEnd = true;
        setTimeout(() => {
            this.isEnd = false;
        } , 500);
    }
}
