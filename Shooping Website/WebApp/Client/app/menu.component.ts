import { Component, OnInit} from '@angular/core';
import { Cart } from './models/cart';
import { GlobalConfig } from './services/globalconfig';

@Component({
    selector: 'app-menu',
    templateUrl: 'home/menu'
})
export class MenuComponent {
    constructor(public cart: Cart, private globalConfig: GlobalConfig) {
        this.cart.CartName = this.globalConfig.cartName;
    }
    ngOnInit() {
        this.cart.loadCart();
    }
}
