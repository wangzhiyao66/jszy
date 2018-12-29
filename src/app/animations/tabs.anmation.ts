import {trigger, style, transition, animate, state, keyframes} from '@angular/animations';

export const  transverse = trigger('transverse', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(300)
    ]),
    transition('* => void', [
        animate(300, style({ transform: 'translateX(100%)' }))
    ])
])