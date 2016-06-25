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
    var GenteComponent;
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
            GenteComponent = (function () {
                //Metodos
                function GenteComponent(_usuarioService, _router, _sesionService) {
                    this._usuarioService = _usuarioService;
                    this._router = _router;
                    this._sesionService = _sesionService;
                    this.visible = false;
                }
                GenteComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._usuarioService.getUsuarios().subscribe(function (usuarios) {
                        _this.usuarios = usuarios;
                        _this._sesionService.getSesion().then(function (actual) { return _this.actual = actual.usuario; });
                        _this.visible = true;
                    });
                };
                GenteComponent.prototype.irConcreto = function (persona) {
                    this._router.navigate(['Cuenta', { id: persona.id }]);
                };
                GenteComponent.prototype.volver = function () {
                    window.history.back();
                };
                GenteComponent = __decorate([
                    core_1.Component({
                        selector: 'gente-component',
                        templateUrl: 'app/gente.component.html',
                        directives: [menu_component_1.MenuComponent],
                        providers: [usuario_service_1.UsuarioService, sesion_service_1.SesionService]
                    }), 
                    __metadata('design:paramtypes', [usuario_service_1.UsuarioService, router_1.Router, sesion_service_1.SesionService])
                ], GenteComponent);
                return GenteComponent;
            }());
            exports_1("GenteComponent", GenteComponent);
        }
    }
});
//# sourceMappingURL=gente.component.js.map