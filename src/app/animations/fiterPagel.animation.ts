import {trigger, style, transition, animate, state, keyframes, query, animateChild, group, stagger} from '@angular/animations';

export const fiterPagel = trigger('fiterPagel', [
    transition('* <=> FiterPagel', [
        style({position: 'relative'}),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style({left: '-100%'})
        ]),
        query(':leave', animateChild()),
        group([
            query(':leave', [
                animate('2000ms ease-out', style({left: '100%'}))
            ]),
            query(':enter', [
                animate('3000ms ease-out', style({left: '0%'}))
            ])
        ]),
        query(':enter', animateChild()),
    ])
]);

export const page = trigger('pageAnimations', [
    transition(':enter', [
        query('.hero, form', [
            style({opacity: 0, transform: 'translateY(-100px)'}),
            stagger(-30, [
                animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'none'}))
            ])
        ])
    ])
]);