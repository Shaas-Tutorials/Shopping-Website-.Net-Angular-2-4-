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
var cart_1 = require("../models/cart");
var store_1 = require("../services/store");
var CartComponent = (function () {
    function CartComponent(cart, storeService) {
        this.cart = cart;
        this.storeService = storeService;
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.checkout = function () {
        var _this = this;
        var obj = {
            userId: 1,
            name: 'shailendra',
            username: 'pro.shailendra@gmail.com',
            contactNo: '9876543210'
        };
        this.cart.UserId = obj.userId;
        this.storeService.SaveCart(this.cart).subscribe(function (res) {
            //need to check
            console.log(res._body);
            if (res !== undefined) {
                _this.cart.CartId = res._body;
                _this.cart.checkoutPayUmoney(obj);
            }
        });
    };
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        selector: 'app-cart',
        templateUrl: 'client/app/store/cart.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [cart_1.Cart, store_1.StoreService])
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map