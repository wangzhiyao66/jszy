import {trigger, style, transition, animate, state, keyframes} from '@angular/animations';
export const  Pulse = trigger('pulse', [
        // ...
        state('enter', style({
            opacity: 0,
            backgroundColor: 'rgba( 0, 0, 0, 0.1)',
            transform: 'translateY(0px)',
        })),
        state('closed', style({
            opacity: 1,
            backgroundColor: 'transparent',
            transform: 'translateY(-25px)',
        })),
        transition('enter => closed', [
            animate(1000, keyframes([
                style({ opacity: 0 , transform: 'translateY(50px)'}),
                style({ opacity: 0.3, transform: 'translateY(4px)' }),
                style({ opacity: 0.5, transform: 'translateY(20px)' }),
                style({ opacity: 0.8, transform: 'translateY(10px)' }),
                style({ opacity: 1, transform: 'translateY(0px)' })
            ]))
        ]),
        transition('closed => enter', [
            animate('0.5s')
        ]),
]);
