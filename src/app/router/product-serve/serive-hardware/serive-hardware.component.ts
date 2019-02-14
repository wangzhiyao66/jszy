import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {transverse} from '../../../animations/tabs.anmation';
import {Enter} from '../../../animations/advisor.animation';
import {Pulse} from '../../../animations/pulse.animation';
import {
    SwiperConfigInterface,
    SwiperCoverflowEffectInterface,
    SwiperComponent,
    SwiperNavigationInterface
} from 'ngx-swiper-wrapper';
@Component({
    selector: 'app-serive-hardware',
    templateUrl: './serive-hardware.component.html',
    styleUrls: ['./serive-hardware.component.scss'],
    animations: [
        transverse,
        Pulse
    ]
})
export class SeriveHardwareComponent implements OnInit , OnChanges{

    // 获取本地变量
    @ViewChild('hardware') hardware: ElementRef;
    @Input() docuheight: number;
    @Input() clientHeight: number;
    hardwarefalg: Boolean = false;

    config: SwiperConfigInterface;
    // 3D 切换效果参数设置
    coverflowEffectConfig: SwiperCoverflowEffectInterface = {
        rotate: 0,
        stretch: 200,
        depth: 200,
        modifier: 1,
        slideShadows: false
    };
    constructor() {
    }

    ngOnInit() {
        /**
         * 轮播图配置项
         */
        this.config = {
            direction: 'horizontal',
            // 左右箭头
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable : true,
            },
            // 开启鼠标的抓手状态
            grabCursor: true,
            // 被选中的滑块居中，默认居左
            centeredSlides: true,
            loop: true,
            slidesPerView: 'auto',
            loopedSlides: 8,
            // autoplay: false,
            speed: 1000,
            slideToClickedSlide: false,
            autoplay: {
                // 用户操作过后  继续播放
                disableOnInteraction: false,
                // 开启反向轮播
                reverseDirection: false,
            },
            // 切换效果为 coverflow
            // effect: 'coverflow',
            // coverflow 配置
            coverflowEffect: this.coverflowEffectConfig,
            // 前进后退按钮设置

        };
    }

    // 变更检测
    ngOnChanges(): void {
        const target: number = this.docuheight + this.clientHeight * 0.7;
        if (this.hardware.nativeElement.offsetTop <= target) {
            this.hardwarefalg = true;
        }
    }

}
