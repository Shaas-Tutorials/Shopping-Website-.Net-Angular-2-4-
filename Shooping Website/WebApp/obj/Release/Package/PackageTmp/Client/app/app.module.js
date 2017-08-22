"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var globalconfig_1 = require("./services/globalconfig");
var store_1 = require("./services/store");
var cart_1 = require("./models/cart");
var cart_component_1 = require("./store/cart.component");
var store_component_1 = require("./store/store.component");
var app_component_1 = require("./app.component");
var menu_component_1 = require("./menu.component");
var routing_1 = require("./routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, routing_1.NameRoutingModule],
        declarations: [app_component_1.AppComponent, menu_component_1.MenuComponent, store_component_1.StoreComponent, cart_component_1.CartComponent],
        providers: [globalconfig_1.GlobalConfig, store_1.StoreService, cart_1.Cart],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map