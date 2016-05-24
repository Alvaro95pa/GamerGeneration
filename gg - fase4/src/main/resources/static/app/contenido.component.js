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
    var core_1, menu_component_1, usuario_service_1, router_1, sesion_service_1, router_2;
    var ContenidoComponent;
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
                router_2 = router_1_1;
            },
            function (sesion_service_1_1) {
                sesion_service_1 = sesion_service_1_1;
            }],
        execute: function() {
            ContenidoComponent = (function () {
                //Metodos
                function ContenidoComponent(_router, _usuarioService, _routeParams, _sesionService) {
                    this._router = _router;
                    this._usuarioService = _usuarioService;
                    this._routeParams = _routeParams;
                    this._sesionService = _sesionService;
                    this.visible = false;
                }
                ContenidoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._usuarioService.getUsuario(id).then(function (usuario) {
                        _this.usuario = usuario;
                        _this._sesionService.getSesion().then(function (sesion) {
                            _this.actual = sesion.usuario;
                        });
                        _this.visible = true;
                    });
                };
                ;
                ContenidoComponent.prototype.cambiarFavorito = function (fav) {
                    this._usuarioService.setFavorito(fav, this.usuario.id);
                };
                ContenidoComponent.prototype.removeContenido = function (cont) {
                    if (cont.tipoprod == 3) {
                        if (cont.name == this.usuario.datos.fPeli.name) {
                            this._usuarioService.removeFav(cont, this.usuario.id);
                        }
                    }
                    if (cont.tipoprod == 2) {
                        if (cont.name == this.usuario.datos.fSerie.name) {
                            this._usuarioService.removeFav(cont, this.usuario.id);
                        }
                    }
                    if (cont.tipoprod == 1) {
                        if (cont.name == this.usuario.datos.fJuego.name) {
                            this._usuarioService.removeFav(cont, this.usuario.id);
                        }
                    }
                    this._usuarioService.removeContenido(cont, this.usuario.id);
                };
                ContenidoComponent.prototype.irA = function (producto) {
                    this._router.navigate(['Detalleprod', { tipoProd: producto.tipoprod, idProd: producto.id }]);
                };
                ContenidoComponent = __decorate([
                    core_1.Component({
                        selector: 'contenido-component',
                        templateUrl: 'app/contenido.component.html',
                        directives: [menu_component_1.MenuComponent],
                        providers: [usuario_service_1.UsuarioService, sesion_service_1.SesionService]
                    }), 
                    __metadata('design:paramtypes', [router_2.Router, usuario_service_1.UsuarioService, router_1.RouteParams, sesion_service_1.SesionService])
                ], ContenidoComponent);
                return ContenidoComponent;
            }());
            exports_1("ContenidoComponent", ContenidoComponent);
        }
    }
});
//# sourceMappingURL=contenido.component.js.map