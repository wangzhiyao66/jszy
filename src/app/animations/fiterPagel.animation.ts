import {trigger, style, transition, animate, state, keyframes, query, animateChild, group} from '@angular/animations';
export const fiterPagel = trigger('fiterPagel', [
    transition('* <=> FiterPagel', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style({ left: '-100%'})
        ]),
        query(':leave', animateChild()),
        group([
            query(':leave', [
                animate('2000ms ease-out', style({ left: '100%'}))
            ]),
            query(':enter', [
                animate('3000ms ease-out', style({ left: '0%'}))
            ])
        ]),
        query(':enter', animateChild()),
    ])
]);
