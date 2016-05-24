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
                function AnalisisDetails(SesionService, _contentService, _clasesService, _routeParams) {
                    this.SesionService = SesionService;
                    this._contentService = _contentService;
                    this._clasesService = _clasesService;
                    this._routeParams = _routeParams;
                    this.visible = false;
                }
                AnalisisDetails.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._contentService.getContenidoId(id).subscribe(function (contenido) {
                        _this.contenido = contenido;
                        _this.visible = true;
                        _this._clasesService.getProdNombre(_this.contenido.nombreProd).then(function (producto) {
                            _this.producto = producto;
                        });
                    });
                    this.getComentarios();
                    this.getsesion();
                };
                AnalisisDetails.prototype.getComentarios = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this.aux_id = id;
                    this._clasesService.getcomentariosContenido(id).then(function (list) { return _this.comentarios = list; });
                };
                AnalisisDetails.prototype.getsesion = function () {
                    var _this = this;
                    this.SesionService.getSesion().then(function (login) {
                        _this.sesion = login;
                        console.log(_this.sesion.usuario);
                    });
                };
                AnalisisDetails.prototype.enviarcomentario = function () {
                    this.resp_comentario = {
                        idcomentario: this.sesion.id,
                        idjuego: 0,
                        idcontenido: this.aux_id,
                        user: this.sesion.usuario,
                        user_img: this.sesion.imagen,
                        fecha: "Hoy",
                        puntuacion: 0,
                        mensaje: this.respuesta
                    };
                    this._clasesService.pushRespuesta(this.resp_comentario);
                    this.getComentarios();
                    console.log(this.resp_comentario.mensaje);
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