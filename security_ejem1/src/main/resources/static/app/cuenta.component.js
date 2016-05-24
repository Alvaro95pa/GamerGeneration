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
                    this.actual = this._sesionService.getSesion().usuario;
                    this.id_actual = this._sesionService.getSesion().id;
                    var id = +this._routeParams.get('id');
                    this._usuarioService.getUsuario(id).subscribe(function (usuario) {
                        _this.usuario = usuario;
                        if (id != _this.id_actual) {
                            _this._usuarioService.getUsuario(_this.id_actual).subscribe(function (usuario) {
                                _this.usuario_actual = usuario;
                                _this.esAmigo();
                            });
                        }
                        ;
                        _this.visible = true;
                    });
                };
                ;
                CuentaComponent.prototype.addAmigo = function () {
                    this.usuario.amigos.push(this.usuario_actual);
                    this.usuario.nAmigos = this.usuario.nAmigos + 1;
                    this.usuario_actual.amigos.push(this.usuario);
                    this.usuario_actual.nAmigos = this.usuario_actual.nAmigos + 1;
                    this._usuarioService.addAmigo(this.usuario);
                    this._usuarioService.addAmigo(this.usuario_actual);
                    this.esAmigo();
                };
                CuentaComponent.prototype.removeAmigo = function () {
                    var posicion1 = this.usuario.amigos.indexOf(this.usuario_actual);
                    this.usuario.amigos.splice(posicion1, 1);
                    var posicion2 = this.usuario_actual.amigos.indexOf(this.usuario);
                    this.usuario_actual.amigos.splice(posicion2, 1);
                    this.usuario.nAmigos = this.usuario.nAmigos - 1;
                    this.usuario_actual.nAmigos = this.usuario_actual.nAmigos - 1;
                    this._usuarioService.remAmigo(this.usuario);
                    this._usuarioService.remAmigo(this.usuario_actual);
                    this.amigo = false;
                };
                CuentaComponent.prototype.esAmigo = function () {
                    for (var _i = 0, _a = this.usuario_actual.amigos; _i < _a.length; _i++) {
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