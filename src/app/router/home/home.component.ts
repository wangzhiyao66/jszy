import {Component, OnInit} from '@angular/core';
import {
    SwiperConfigInterface,
    SwiperCoverflowEffectInterface,
    SwiperComponent,
    SwiperNavigationInterface
} from 'ngx-swiper-wrapper';

// 3D 切换效果参数设置
const coverflowEffectConfig: SwiperCoverflowEffectInterface = {
    rotate: 0,
    stretch: 200,
    depth: 200,
    modifier: 1,
    slideShadows: false
};
// 前进后退按钮配置
const navigationConfig: SwiperNavigationInterface = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    hideOnClick: false,
};
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

    config: SwiperConfigInterface;

    constructor() {
    }

    ngOnInit() {

        /**
         * 轮播图配置项
         */
        this.config = {
            direction: 'horizontal',
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
            // autoplay: true,
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
            coverflowEffect: coverflowEffectConfig,
            // 前进后退按钮设置
            navigation: navigationConfig

        };
    }
}
