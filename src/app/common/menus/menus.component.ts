import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenusService } from './menus.service';
import { fromEvent, Subscription } from 'rxjs';
import { fadeIn } from '../../animations/fadeIn.animations';
import { Pulse } from 'src/app/animations/pulse.animation';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
  animations: [ fadeIn , Pulse ]
})
export class MenusComponent implements OnInit, OnDestroy {
  but_title: Boolean = false;
  isEnd = false;
  iSscroll = false;
  // 订阅事件
  subscription: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public menuservice: MenusService
  ) {}

  /**
   * 鼠标移入开始做动画 显示子级
   * @param i 下标
   */
  onmenuin(i) {
    this.menuservice.menus[i].animationfalg = true;
    // console.log('123' , i);
    if (i !== 0 && i !== 5) {
      this.menuservice.menus[i].showchildren = true;
    } else {
      this.menuservice.menus[i].showchildren = false;
    }
  }
  ngOnInit() {
    // console.log('url', this.router.url);
    // 页面监听  响应式
    this.subscription = fromEvent(window, 'scroll').subscribe(event => {
      // console.log('event', event);
      let target;
      // 在IE/Opera中 兼容  event;
      target = event.target || window.event.target;
      // IE 中兼容  获取高度问题
      const docuHeight =
        target.defaultView.scrollY || document.documentElement.scrollTop;
      // console.log('docuHeight', docuHeight);
      docuHeight > 0 ? (this.iSscroll = true) : (this.iSscroll = false);
    });
  }
  /**
   * 鼠标移入开始做动画 显示子级
   * @param i 下标
   */
  onmenuleave(i) {
    this.menuservice.menus[i].animationfalg = false;
    this.menuservice.menus[i].showchildren = false;
  }
  hidemenus() {
    this.menuservice.menus.forEach( value => value.showchildren = false);
  }
  linkTo(val) {
    this.menuservice.menus.forEach( value => value.showchildren = false);
    this.router.navigate([val.link], { fragment: val.params });
  }

  login() {
    // 登录功能
    this.but_title = true;
    this.router.navigate(['404']);
  }

  output() {
    // 退出功能
    // this.menuservice.menus[5].hidden = false;
    this.but_title = false;
    window.history.back();
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
