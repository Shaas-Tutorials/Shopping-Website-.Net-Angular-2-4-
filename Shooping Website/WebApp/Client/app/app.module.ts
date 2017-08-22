import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { GlobalConfig } from './services/globalconfig';
import { StoreService } from './services/store';

import { Cart } from './models/cart';
import { CartComponent } from './store/cart.component';
import { StoreComponent } from './store/store.component';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { NameRoutingModule } from './routing';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, NameRoutingModule],
    declarations: [AppComponent, MenuComponent, StoreComponent, CartComponent],
    providers: [GlobalConfig, StoreService, Cart],
    bootstrap: [AppComponent]
})
export class AppModule { }
