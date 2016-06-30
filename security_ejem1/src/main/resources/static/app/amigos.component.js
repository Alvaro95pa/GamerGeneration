System.register(['angular2/core', './menu.component', './usuario.service', 'angular2/router', './sesion.service'], function(exports_1, context_1) {
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
    var core_1, menu_component_1, usuario_service_1, router_1, sesion_service_1;
    var AmigosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (usuario_service_1_1) {
                usuario_service_1 = usuario_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sesion_service_1_1) {
                sesion_service_1 = sesion_service_1_1;
            }],
        execute: function() {
            AmigosComponent = (function () {
                //Metodos
                function AmigosComponent(_usuarioService, _router, _routeParams, _sesionService) {
                    this._usuarioService = _usuarioService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._sesionService = _sesionService;
                    this.visible = false;
                }
                AmigosComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._usuarioService.getUsuario(id).subscribe(function (usuario) {
                        _this.usuario = usuario;
                        _this._sesionService.getSesion().then(function (actual) {
                            _this.actual = actual.usuario;
                            _this.visible = true;
                        });
                    });
                };
                AmigosComponent.prototype.irConcreto = function (amigo) {
                    this._router.navigate(['Cuenta', { id: amigo.id }]);
                };
                AmigosComponent = __decorate([
                    core_1.Component({
                        selector: 'amigos-component',
                        templateUrl: 'app/amigos.component.html',
                        directives: [menu_component_1.MenuComponent],
                        providers: [usuario_service_1.UsuarioService, sesion_service_1.SesionService]
                    }), 
                    __metadata('design:paramtypes', [usuario_service_1.UsuarioService, router_1.Router, router_1.RouteParams, sesion_service_1.SesionService])
                ], AmigosComponent);
                return AmigosComponent;
            }());
            exports_1("AmigosComponent", AmigosComponent);
        }
    }
});
//# sourceMappingURL=amigos.component.js.map