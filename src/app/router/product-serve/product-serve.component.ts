import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {translateStatement} from '@angular/compiler-cli/src/ngtsc/translator';
import {Router} from '@angular/router';

@Component({
    selector: 'app-product-serve',
    templateUrl: './product-serve.component.html',
    styleUrls: ['./product-serve.component.scss'],
    animations: [
        trigger('openClose', [
            // ...
            state('open', style({
                height: '200px',
                opacity: 0,
                backgroundColor: 'yellow',
                transform: 'translateY(25px)',
            })),
            state('closed', style({
                height: '100px',
                opacity: 1,
                backgroundColor: 'green',
                transform: 'translateY(-25px)',
            })),
            transition('open => closed', [
                animate('1s')
            ]),
            transition('closed => open', [
                animate('0.5s')
            ]),
        ]),
    ],
})
export class ProductServeComponent implements OnInit {
    isOpen = true;


    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }

    goto() {
        this.router.navigate(['/technology'], { fragment: 'introduce' });
        // this.router.navigate(['/technology'], { fragment: 'introduce' , skipLocationChange: true });
    }

}
