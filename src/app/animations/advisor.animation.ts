import { trigger, style, transition, animate, state, keyframes } from '@angular/animations';
// 专家团队动画
export const Enter = trigger('advisor', [
  transition('void => *', [
    animate(
      1000,
      keyframes([
        style({ opacity: 0, transform: 'translateY(20px)' }),
        style({ opacity: 0.3, transform: 'translateY(15px)' }),
        style({ opacity: 0.5, transform: 'translateY(10px)' }),
        style({ opacity: 0.8, transform: 'translateY(5px)' }),
        style({ opacity: 1, transform: 'translateY(0px)' })
      ])
    )
  ]),
  transition('* => void', [
    animate(
      1000,
      keyframes([
        style({ opacity: 1, transform: 'translateY(0px)' }),
        style({ opacity: 0.3, transform: 'translateY(0px)' }),
        style({ opacity: 0, transform: 'translateY(0px)' })
      ])
    )
  ])
]);
