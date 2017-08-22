import { Component, OnInit } from '@angular/core';

import { StoreService } from '../services/store'
import { Observable } from 'rxjs/Rx';
import { Product } from '../models/Product';
import { Cart } from '../models/cart';

@Component({
    selector: 'app-store',
    templateUrl: 'client/app/store/store.component.html'
})
export class StoreComponent implements OnInit {
    name = 'My Angular App';
    products: Product[] = [];
    constructor(private storeService: StoreService, public cart: Cart) {
    }

    ngOnInit() {
        this.storeService.GetProducts().subscribe((res) => {
            this.products = res;
           // console.log(this.products);
        });
    }
}

