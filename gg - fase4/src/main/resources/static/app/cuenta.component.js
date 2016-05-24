System.register(['angular2/core', './menu.component', 'angular2/router', './usuario.service', './sesion.service'], function(exports_1, context_1) {
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
    var core_1, menu_component_1, router_1, usuario_service_1, sesion_service_1;
    var CuentaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (usuario_service_1_1) {
                usuario_service_1 = usuario_service_1_1;
            },
            function (sesion_service_1_1) {
                sesion_service_1 = sesion_service_1_1;
            }],
        execute: function() {
            CuentaComponent = (function () {
                //Metodos
                function CuentaComponent(_usuarioService, _routeParams, _sesionService) {
                    this._usuarioService = _usuarioService;
                    this._routeParams = _routeParams;
                    this._sesionService = _sesionService;
                    this.visible = false;
                    this.amigo = false;
                }
                CuentaComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._sesionService.getSesion().then(function (sesion) {
                        _this.actual = sesion.usuario;
                        _this.id_actual = sesion.id;
                        var id = +_this._routeParams.get('id');
                        _this._usuarioService.getUsuario(id).then(function (usuario) {
                            _this.usuario = usuario;
                            if (id != _this.id_actual) {
                                _this._usuarioService.getUsuario(_this.id_actual).then(function (usuario) {
                                    _this.usuario_actual = usuario;
                                    _this.esAmigo();
                                });
                            }
                            ;
                            _this.visible = true;
                        });
                    });
                };
                ;
                CuentaComponent.prototype.addAmigo = function () {
                    var actual = { id: this.id_actual, usuario: this.actual, imagen: "img/avatar1.jpg" };
                    var amigo = { id: this.usuario.id, usuario: this.usuario.usuario, imagen: this.usuario.imagen };
                    this._usuarioService.addAmigo(amigo, actual);
                    this.esAmigo();
                };
                CuentaComponent.prototype.removeAmigo = function () {
                    var actual = { id: this.id_actual, usuario: this.actual, imagen: "img/avatar1.jpg" };
                    var amigo = { id: this.usuario.id, usuario: this.usuario.usuario, imagen: this.usuario.imagen };
                    this._usuarioService.remAmigo(amigo, actual);
                    this.amigo = false;
                };
                CuentaComponent.prototype.esAmigo = function () {
                    for (var _i = 0, _a = this.usuario_actual.datos.amigos; _i < _a.length; _i++) {
                        var amigo = _a[_i];
                        if (amigo.id == this.usuario.id) {
                            this.amigo = true;
                        }
                    }
                };
                CuentaComponent = __decorate([
                    core_1.Component({
                        selector: 'cuenta-component',
                        templateUrl: 'app/cuenta.component.html',
                        directives: [menu_component_1.MenuComponent],
                        providers: [usuario_service_1.UsuarioService, sesion_service_1.SesionService]
                    }), 
                    __metadata('design:paramtypes', [usuario_service_1.UsuarioService, router_1.RouteParams, sesion_service_1.SesionService])
                ], CuentaComponent);
                return CuentaComponent;
            }());
            exports_1("CuentaComponent", CuentaComponent);
        }
    }
});
//# sourceMappingURL=cuenta.component.js.map