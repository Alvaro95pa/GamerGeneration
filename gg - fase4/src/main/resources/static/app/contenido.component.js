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
                    this._usuarioService.getUsuario(id).subscribe(function (usuario) {
                        _this.usuario = usuario;
                        _this._sesionService.getSesion().then(function (actual) { return _this.actual = actual.usuario; });
                        _this.visible = true;
                    });
                };
                ;
                ContenidoComponent.prototype.cambiarFavorito = function (fav) {
                    if (fav.tipoprod == 3) {
                        this.usuario.fPeli = fav;
                    }
                    if (fav.tipoprod == 2) {
                        this.usuario.fSerie = fav;
                    }
                    if (fav.tipoprod == 1) {
                        this.usuario.fJuego = fav;
                    }
                    this._usuarioService.setFavorito(this.usuario);
                };
                ContenidoComponent.prototype.removeContenido = function (cont) {
                    if (cont.tipoprod == 3) {
                        if (cont.name == this.usuario.fPeli.name) {
                            this.usuario.fPeli = { id: null, tipoprod: null, name: null, img: null, fecha: null, genero: null,
                                plataforma: null, desarrollador: null, editor: null, procesador: null, memoria: null, grafica: null,
                                almacenamiento: null, trailer: null, sinopsis: null, comentarios: null };
                            this._usuarioService.removeFav(this.usuario);
                        }
                        this.usuario.nPelis = this.usuario.nPelis - 1;
                    }
                    if (cont.tipoprod == 2) {
                        if (cont.name == this.usuario.fSerie.name) {
                            this.usuario.fSerie = { id: null, tipoprod: null, name: null, img: null, fecha: null, genero: null,
                                plataforma: null, desarrollador: null, editor: null, procesador: null, memoria: null, grafica: null,
                                almacenamiento: null, trailer: null, sinopsis: null, comentarios: null };
                            this._usuarioService.removeFav(this.usuario);
                        }
                        this.usuario.nSeries = this.usuario.nSeries - 1;
                    }
                    if (cont.tipoprod == 1) {
                        if (cont.name == this.usuario.fJuego.name) {
                            this.usuario.fJuego = { id: null, tipoprod: null, name: null, img: null, fecha: null, genero: null,
                                plataforma: null, desarrollador: null, editor: null, procesador: null, memoria: null, grafica: null,
                                almacenamiento: null, trailer: null, sinopsis: null, comentarios: null };
                            this._usuarioService.removeFav(this.usuario);
                        }
                        this.usuario.nJuegos = this.usuario.nJuegos - 1;
                    }
                    var posicion = this.usuario.contenido.indexOf(cont);
                    this.usuario.contenido.splice(posicion, 1);
                    this._usuarioService.removeContenido(this.usuario);
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