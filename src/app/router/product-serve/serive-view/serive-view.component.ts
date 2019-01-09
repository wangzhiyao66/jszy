import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Enter} from 'src/app/animations/advisor.animation';
import {fromEvent, Subscription} from 'rxjs';

@Component({
    selector: 'app-serive-view',
    templateUrl: './serive-view.component.html',
    styleUrls: ['./serive-view.component.scss'],
    animations: [
        Enter
    ]
})
export class SeriveViewComponent implements OnInit, OnDestroy  {

    // 订阅事件
    subscription: Subscription;
    // 获取本地变量
    @ViewChild('anchor') anchor: ElementRef;
    // 滚动高度
    docuHeight = 0;
    // 可视区域高度
    clientHeight = 0;

    constructor() {
    }

    ngOnInit() {

        // console.log('cnchor', this.anchor);
        // 页面监听  响应式
        this.subscription = fromEvent(window, 'scroll')
            .subscribe((event) => {
                // console.log('event', event);
                let target;
                // 在IE/Opera中 兼容  event;
                target = event.target || window.event.target;
                // IE 中兼容  获取滚动高度问题
                this.docuHeight = target.defaultView.scrollY || document.documentElement.scrollTop;
                // IE 中兼容  获取可视区域高度问题
                this.clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
                // console.log('docuHeight', this.docuHeight);
                // console.log('clientHeight', this.clientHeight);

            });
    }

    /**
     * 组件销毁停止订阅
     */
    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
