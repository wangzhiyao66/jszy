import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MenusService} from './menus.service';
import {fromEvent, Subscription} from 'rxjs';

@Component({
    selector: 'app-menus',
    templateUrl: './menus.component.html',
    styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit , OnDestroy {
    but_title: Boolean = false;
    isEnd = false;
    iSscroll = false;
    // 订阅事件
    subscription: Subscription;
    constructor(private router: Router,
                private route: ActivatedRoute,
                private menuservice: MenusService) {
    }

    ngOnInit() {
        // console.log('url', this.router.url);
        // 页面监听  响应式
        this.subscription = fromEvent(window, 'scroll')
            .subscribe((event) => {
                // console.log('event', event);
                let target;
                // 在IE/Opera中 兼容  event;
                target = event.target || window.event.target;
                // IE 中兼容  获取高度问题
                const docuHeight = target.defaultView.scrollY || document.documentElement.scrollTop;
                // console.log('docuHeight', docuHeight);
                docuHeight > 0 ? this.iSscroll = true : this.iSscroll = false;

            });
    }


    login() {
        // 登录功能
        this.but_title = true;
        this.router.navigate(['404']);
    }

    output() {
        // 退出功能
        this.but_title = false;
        window.history.back();

    }

    /**
     * 组件销毁停止订阅
     */
    ngOnDestroy(): void {
        if (this.subscription ) {
            this.subscription.unsubscribe();
        }
    }
}
