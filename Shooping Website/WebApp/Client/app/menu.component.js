"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var cart_1 = require("./models/cart");
var globalconfig_1 = require("./services/globalconfig");
var MenuComponent = (function () {
    function MenuComponent(cart, globalConfig) {
        this.cart = cart;
        this.globalConfig = globalConfig;
        this.cart.CartName = this.globalConfig.cartName;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.cart.loadCart();
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'app-menu',
        templateUrl: 'home/menu'
    }),
    __metadata("design:paramtypes", [cart_1.Cart, globalconfig_1.GlobalConfig])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map