System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                //Metodos
                function MenuComponent(_router) {
                    this._router = _router;
                }
                MenuComponent.prototype.irA = function (lugar, id) {
                    this._router.navigate([lugar, { id: id }]);
                };
                MenuComponent.prototype.ir = function (lugar) {
                    this._router.navigate([lugar]);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MenuComponent.prototype, "usuario", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MenuComponent.prototype, "actual", void 0);
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-component',
                        templateUrl: 'app/menu.component.html',
                        directives: [],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], MenuComponent);
                return MenuComponent;
            }());
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=menu.component.js.map