import {trigger, style, transition, animate, state, keyframes} from '@angular/animations';
export const  Enter = trigger('advisor', [
    // ...
    // state('open', style({
    //     opacity: 1,
    //     // transform: 'translateY(80px)',
    // })),
    // state('closed', style({
    //     opacity: 1,
    //     // transform: 'translateY(-80px)',
    //
    // })),
    // transition('open => closed', [
    //     animate('0.5s')
    // ]),
    // transition('closed => open', [
    //     animate('0.25s')
    // ]),
    transition('void => *', [
        animate(1000, keyframes([
            style({opacity: 0, transform: 'translateY(10px)'}),
            style({opacity: 0.3, transform: 'translateY(15px)'}),
            style({opacity: 0.5, transform: 'translateY(20px)'}),
            style({opacity: 0.8, transform: 'translateY(15px)'}),
            style({opacity: 1, transform: 'translateY(10px)'})
        ]))
    ]),
    transition('* => void', [
        animate(500, keyframes([
            style({opacity: 1, transform: 'translateY(20px)', }),
            style({opacity: 0.3, transform: 'translateY(10px)', }),
            style({opacity: 0, transform: 'translateY(0px)', })
        ]))
    ])
]);