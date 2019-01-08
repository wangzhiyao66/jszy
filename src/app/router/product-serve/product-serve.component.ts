import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {translateStatement} from '@angular/compiler-cli/src/ngtsc/translator';
import {Router} from '@angular/router';
import {Pulse} from '../../animations/pulse.animation';

@Component({
    selector: 'app-product-serve',
    template: `<router-outlet></router-outlet>`,
    styles: [``],
    animations: [
        Pulse
    ],
})
export class ProductServeComponent implements OnInit {
    isOpen = true;


    constructor(private router: Router) {
    }

    ngOnInit() {
    }


    goto() {
        this.router.navigate(['/technology'], { fragment: 'introduce' });
        // this.router.navigate(['/technology'], { fragment: 'introduce' , skipLocationChange: true });
    }

}
