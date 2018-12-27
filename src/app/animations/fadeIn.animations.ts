import {
  trigger,
  style,
  transition,
  animate,
  state,
  keyframes
} from '@angular/animations';
export const fadeIn = trigger('fadeIn', [
  // ...
  state(
    'open',
    style({
      opacity: 1,
      transform: 'translateY(80px)'
    })
  ),
  state(
    'closed',
    style({
      opacity: 1,
      transform: 'translateY(-80px)'
    })
  ),
  transition('open => closed', [animate('0.5s')]),
  transition('closed => open', [animate('0.25s')])
  // transition('void => *', [
  //     animate(1000, keyframes([
  //         style({opacity: 0, transform: 'translateY(80px)', offset: 0}),
  //         style({opacity: 0.5, transform: 'translateY(25px)',  offset: 0.3}),
  //         style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
  //     ]))
  // ]),
  // transition('* => void', [
  //     animate(1000, keyframes([
  //         style({opacity: 1, transform: 'translateY(0)',     offset: 0}),
  //         style({opacity: 0, transform: 'translateY(-25px)', offset: 0.7}),
  //         style({opacity: 0, transform: 'translateY(-80px)',  offset: 1.0})
  //     ]))
  // ])
]);
