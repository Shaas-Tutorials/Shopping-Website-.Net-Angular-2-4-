import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { StoreService } from '../services/store';

@Component({
    selector: 'app-cart',
    templateUrl: 'client/app/store/cart.component.html',
    styles: []
})
export class CartComponent implements OnInit {

    constructor(public cart: Cart, private storeService: StoreService) { }

    ngOnInit() {
    }

    checkout() {
        const obj = {
            userId: 1,
            name: 'shailendra',
            username: 'pro.shailendra@gmail.com',
            contactNo: '9876543210'
        };
        this.cart.UserId = obj.userId;

        this.storeService.SaveCart(this.cart).subscribe((res: any) => {
            //need to check
            console.log(res._body);
            if (res !== undefined) {
                this.cart.CartId = res._body;            
                this.cart.checkoutPayUmoney(obj);
            }
        });
    }
}
