import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';

@Component({
    selector: 'app-technology',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './technology.component.html',
    styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit , OnDestroy {
    // 订阅事件
    subscription: Subscription;

    constructor() {
    }

    ngOnInit() {
        // 页面监听  响应式
        this.subscription = fromEvent(window, 'scroll')
            .subscribe((event) => {
                // console.log('event', event);
                let target;
                // 在IE/Opera中 兼容  event;
                target = event.target || window.event.target;
                // IE 中兼容  获取滚动高度问题
                const docuHeight = target.defaultView.scrollY || document.documentElement.scrollTop;
                // IE 中兼容  获取可视区域高度问题
                const clientHeight = document.body.clientHeight || document.documentElement.clientHeight ;
                // console.log('docuHeight', docuHeight);
                // console.log('clientHeight', clientHeight);

            });
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
