import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './store/cart.component'
import { StoreComponent } from './store/store.component'

const routes: Routes = [
    { path: '', component: StoreComponent },
    { path: 'cart', component: CartComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class NameRoutingModule { }