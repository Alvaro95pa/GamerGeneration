System.register(['angular2/core', 'ng2-bootstrap/ng2-bootstrap'], function(exports_1, context_1) {
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
    var core_1, ng2_bootstrap_1;
    var SeleccionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            SeleccionComponent = (function () {
                function SeleccionComponent() {
                    this.cambio = new core_1.EventEmitter();
                }
                //Metodos
                SeleccionComponent.prototype.cambiar = function () {
                    this.cambio.next(this.inicial);
                };
                SeleccionComponent.prototype.ngOnInit = function () {
                    if (this.inicial) {
                        this.estado = 'visible';
                    }
                    else {
                        this.estado = 'noVisible';
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], SeleccionComponent.prototype, "inicial", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SeleccionComponent.prototype, "cambio", void 0);
                SeleccionComponent = __decorate([
                    core_1.Component({
                        selector: 'seleccion-component',
                        templateUrl: 'app/seleccion.component.html',
                        directives: [ng2_bootstrap_1.BUTTON_DIRECTIVES],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], SeleccionComponent);
                return SeleccionComponent;
            }());
            exports_1("SeleccionComponent", SeleccionComponent);
        }
    }
});
//# sourceMappingURL=seleccion.component.js.map