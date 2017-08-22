"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var cart_component_1 = require("./store/cart.component");
var store_component_1 = require("./store/store.component");
var routes = [
    { path: '', component: store_component_1.StoreComponent },
    { path: 'cart', component: cart_component_1.CartComponent },
];
var NameRoutingModule = (function () {
    function NameRoutingModule() {
    }
    return NameRoutingModule;
}());
NameRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
    })
], NameRoutingModule);
exports.NameRoutingModule = NameRoutingModule;
//# sourceMappingURL=routing.js.map