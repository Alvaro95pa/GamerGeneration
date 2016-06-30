System.register(['angular2/core', './contenido.service', './clases.service', './sesion.service', 'angular2/router', './comentarios.component'], function(exports_1, context_1) {
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
    var core_1, contenido_service_1, clases_service_1, sesion_service_1, router_1, comentarios_component_1;
    var AnalisisDetails;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contenido_service_1_1) {
                contenido_service_1 = contenido_service_1_1;
            },
            function (clases_service_1_1) {
                clases_service_1 = clases_service_1_1;
            },
            function (sesion_service_1_1) {
                sesion_service_1 = sesion_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (comentarios_component_1_1) {
                comentarios_component_1 = comentarios_component_1_1;
            }],
        execute: function() {
            AnalisisDetails = (function () {
                function AnalisisDetails(_sesionService, _contentService, _clasesService, _routeParams) {
                    this._sesionService = _sesionService;
                    this._contentService = _contentService;
                    this._clasesService = _clasesService;
                    this._routeParams = _routeParams;
                    this.visible = false;
                    this.visible_usuario = false;
                    this.error = false;
                }
                AnalisisDetails.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._contentService.getContenidoId(id).subscribe(function (contenido) {
                        _this.contenido = contenido;
                        _this.visible = true;
                        if (contenido.nProducto != null) {
                            _this.getProducto(contenido.nProducto);
                        }
                    });
                    this.getComentarios();
                    this.getsesion();
                };
                AnalisisDetails.prototype.getProducto = function (nombre) {
                    var _this = this;
                    this._clasesService.getProdNombre(nombre).subscribe(function (producto) {
                        _this.producto = producto;
                    });
                };
                AnalisisDetails.prototype.getComentarios = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this.aux_id = id;
                    this._clasesService.getcomentariosContenido(id).subscribe(function (list) { return _this.comentarios = list; });
                };
                AnalisisDetails.prototype.getsesion = function () {
                    var _this = this;
                    this.loged = this._sesionService.getLogged();
                    this._sesionService.getSesion().then(function (actual) {
                        _this.usuario = actual,
                            _this.visible_usuario = true;
                    });
                };
                AnalisisDetails.prototype.enviarcomentario = function () {
                    this.resp_comentario = {
                        idjuego: 0,
                        idcontenido: this.contenido.id,
                        user: this.usuario.usuario,
                        user_img: this.usuario.imagen.url,
                        fecha: "Hoy",
                        puntuacion: 0,
                        mensaje: this.respuesta
                    };
                    this.contenido.comentarios.push(this.resp_comentario);
                    console.log(this.contenido.comentarios);
                    this._contentService.actualizarContenido(this.contenido).subscribe(function (cont) {
                        console.log("Hecho");
                    });
                };
                AnalisisDetails = __decorate([
                    core_1.Component({
                        selector: 'analisis-detalles',
                        templateUrl: 'app/analisis-details.html',
                        providers: [contenido_service_1.ContenidoService, clases_service_1.clasesservice],
                        directives: [comentarios_component_1.comentarioscomponent]
                    }), 
                    __metadata('design:paramtypes', [sesion_service_1.SesionService, contenido_service_1.ContenidoService, clases_service_1.clasesservice, router_1.RouteParams])
                ], AnalisisDetails);
                return AnalisisDetails;
            }());
            exports_1("AnalisisDetails", AnalisisDetails);
        }
    }
});
//# sourceMappingURL=analisis-details.js.map