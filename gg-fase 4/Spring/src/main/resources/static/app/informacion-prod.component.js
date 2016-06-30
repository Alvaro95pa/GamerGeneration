System.register(['angular2/core', 'angular2/router', './comentarios.component', './clases.service', './sesion.service', './usuario.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, comentarios_component_1, clases_service_1, sesion_service_1, usuario_service_1;
    var informacionprod;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (comentarios_component_1_1) {
                comentarios_component_1 = comentarios_component_1_1;
            },
            function (clases_service_1_1) {
                clases_service_1 = clases_service_1_1;
            },
            function (sesion_service_1_1) {
                sesion_service_1 = sesion_service_1_1;
            },
            function (usuario_service_1_1) {
                usuario_service_1 = usuario_service_1_1;
            }],
        execute: function() {
            informacionprod = (function () {
                function informacionprod(router, UsuarioService, SesionService, clasesservice, _routeParams) {
                    this.router = router;
                    this.UsuarioService = UsuarioService;
                    this.SesionService = SesionService;
                    this.clasesservice = clasesservice;
                    this._routeParams = _routeParams;
                    this.visible = false;
                    this.error = false;
                    this.seguir = false;
                    this.favorito = false;
                    this.logeado = true;
                    this.id_user = 1;
                    this.visible_usuario = false;
                }
                informacionprod.prototype.comprobarSeguir = function () {
                    for (var _i = 0, _a = this.usuario_actual.coleccion; _i < _a.length; _i++) {
                        var col = _a[_i];
                        if (col.id == this.produc.id) {
                            this.seguir = true;
                        }
                    }
                };
                informacionprod.prototype.AddSeguir = function (info) {
                    this.seguir = !this.seguir;
                    if (this.seguir) {
                        this.UsuarioService.addContenido(info, this.usuario).subscribe();
                    }
                    else {
                        if (info.tipoprod == 3) {
                            if (info.name == this.usuario.fPeli.name) {
                                this.usuario.fPeli = null;
                                this.UsuarioService.removeFav(this.usuario).subscribe();
                            }
                            this.usuario.nPelis = this.usuario.nPelis - 1;
                        }
                        if (info.tipoprod == 2) {
                            if (info.name == this.usuario.fSerie.name) {
                                this.usuario.fSerie = null;
                                this.UsuarioService.removeFav(this.usuario).subscribe();
                            }
                            this.usuario.nSeries = this.usuario.nSeries - 1;
                        }
                        if (info.tipoprod == 1) {
                            if (info.name == this.usuario.fJuego.name) {
                                this.usuario.fJuego = null;
                                this.UsuarioService.removeFav(this.usuario).subscribe();
                            }
                            this.usuario.nJuegos = this.usuario.nJuegos - 1;
                        }
                        var posicion = this.usuario.coleccion.indexOf(info);
                        this.usuario.coleccion.splice(posicion, 1);
                        this.UsuarioService.removeContenido(this.usuario).subscribe();
                    }
                };
                informacionprod.prototype.getsesion = function () {
                    var _this = this;
                    this.loged = this.SesionService.getLogged();
                    if (this.loged) {
                        this.SesionService.getSesion().then(function (actual) {
                            _this.usuario = actual;
                            _this.UsuarioService.getUsuario(actual.id).subscribe(function (usuario) {
                                _this.usuario_actual = usuario;
                                _this.comprobarSeguir();
                                _this.visible_usuario = true;
                            });
                        });
                    }
                    else {
                        this.usuario = {
                            id: -1,
                            roles: null,
                            nombre: "invitado",
                            apellidos: "invitado",
                            nacionalidad: null,
                            cumpleanos: null,
                            usuario: "invitado",
                            contrasena: null,
                            correo: null,
                            imagen: null,
                            nAmigos: null,
                            nPelis: null,
                            nSeries: null,
                            nJuegos: null,
                            ultima: null,
                            tUsuario: null,
                            fPeli: null,
                            fSerie: null,
                            fJuego: null,
                            pPerfilTodos: null,
                            cPerfilTodos: null,
                            aPerfilTodos: null,
                            coleccion: null,
                            amigos: null
                        };
                    }
                };
                informacionprod.prototype.getProducto = function () {
                    var _this = this;
                    var id = +this._routeParams.get('idprod');
                    var tipoprod = +this._routeParams.get('tipoprod');
                    this.clasesservice.getProd(id).subscribe(function (prod) {
                        _this.produc = prod;
                        _this.getsesion();
                        _this.visible = true;
                    });
                    this.aux_tipoprod = tipoprod;
                    this.aux_id = id;
                };
                informacionprod.prototype.getcomentarios = function () {
                    var id = +this._routeParams.get('idprod');
                    this.comentarios = this.produc[0].comentarios;
                };
                informacionprod.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getProducto();
                    this.clasesservice.getProd(this.aux_id).subscribe(function (prod) { return _this.aux_prod = prod[0]; });
                };
                informacionprod.prototype.enviarcomentario = function () {
                    var _this = this;
                    if (this.nota > 10 || this.nota < 0) {
                        this.error = true;
                    }
                    else {
                        this.resp_comentario = {
                            idjuego: this.produc.id,
                            idcontenido: 0,
                            user: this.usuario.usuario,
                            user_img: this.usuario.imagen.url,
                            fecha: "Hoy",
                            puntuacion: this.nota,
                            mensaje: this.respuesta
                        };
                        this.produc.comentarios.push(this.resp_comentario);
                        this.clasesservice.actualizarProducto(this.produc).subscribe(function (prod) {
                            console.log(prod);
                            console.log(_this.produc.comentarios);
                        });
                    }
                };
                informacionprod = __decorate([
                    core_1.Component({
                        selector: 'prod-detalle',
                        template: "\n    <div class=\"panel-group\">\n      <div class=\"panel panel-danger\">\n        <div class=\"panel-heading\">Datos B\u00E1sicos</div>\n        <div class=\"panel-body\">\n          <div  class=\"datos col-md-9 col-xs-7\">\n            <h4>Informaci\u00F3n t\u00E9cnica</h4>\n            <dl  *ngIf=\"aux_tipoprod!=1 && visible\">\n              <dt>Fecha de lanzamiento: </dt>\n              <dd>{{produc.fecha}}</dd>\n              <dt>G\u00E9nero: </dt>\n              <dd><span class=\"label label-default\">{{produc.genero}}</span></dd>\n              <dt>Director:</dt>\n              <dd>{{produc.desarrollador}}</dd>\n              <dt>Patrocinador:</dt>\n              <dd>{{produc.editor}}</dd>\n            </dl>\n            <dl  *ngIf=\"aux_tipoprod==1 && visible\">\n              <dt>Fecha de lanzamiento: </dt>\n              <dd>{{produc.fecha}}</dd>\n              <dt>G\u00E9nero: </dt>\n              <dd><span class=\"label label-default\">{{produc.genero}}</span></dd>\n              <dt>Desarrollador:</dt>\n              <dd>{{produc.desarrollador}}</dd>\n              <dt>Editor:</dt>\n              <dd>{{produc.editor}}</dd>\n              <dt>Plataformas:</dt>\n              <dd><span class=\"label label-default\">{{produc.plataforma}}</span></dd>\n            </dl>\n            <div *ngIf=\"aux_tipoprod==1 && visible\">\n              <h4>Requisitos del sistema</h4>\n              <dl>\n                <dt>Procesador:</dt>\n                <dd>{{produc.procesador}}</dd>\n                <dt>Memoria:</dt>\n                <dd>{{produc.memoria}}</dd>\n                <dt>Gr\u00E1ficos:</dt>\n                <dd>{{produc.grafica}}</dd>\n                <dt>Almacenamiento:</dt>\n                <dd>{{produc.almacenamiento}}</dd>\n              </dl>\n            </div>\n          </div>\n\n          <div class=\"portada col-md-3 col-xs-5\">\n            <img *ngIf=\"visible\" src=\"images/{{produc.img.url}}\">\n            <div *ngIf=\"loged && visible\"  (click)=\"AddSeguir(produc)\" [class.checkfavorito]=\"seguir\" class=\"favorito col-md-12 col-xs-12\">\n              <div><span class=\"glyphicon glyphicon-plus\"></span>Seguir</div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div *ngIf=\"visible\" class=\"panel panel-danger sinopsis\">\n        <div class=\"panel-heading\">Sinopsis</div>\n        <div class=\"panel-body\">\n          <p>{{produc.sinopsis}}</p>\n        </div>\n      </div>\n\n      <div *ngIf=\"visible\" class=\"panel panel-danger trailer\">\n        <div class=\"panel-heading\">Trailer</div>\n        <div class=\"panel-body \">\n           <div class=\"embed-responsive embed-responsive-16by9\">\n              <iframe class=\"embed-responsive-item\" src={{produc.trailer}}></iframe>\n           </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"visible\" class=\"panel panel-danger comentarios\">\n        <div class=\"panel-heading\">Comentarios</div>\n        <div class=\"panel-body\">\n          <div *ngFor=\"#coment of produc.comentarios\">\n            <comentarios [comentario]=\"coment\"></comentarios>\n          </div>\n        </div>\n       </div>\n\n       <div *ngIf=\"loged && visible_usuario\" class=\"panel panel-danger comentarios respuesta\">\n        <div class=\"panel-heading\">\n          <button type=\"button\" class=\"btn btn-primary btn_respuesta\" onclick=\"document.getElementById('oculto').style.display = 'block';\"><span class=\"glyphicon glyphicon-plus\"></span> Responder</button></div>\n        <div class=\"panel-body\" id=\"oculto\" style='display:none;'>\n          <div class=\"col-md-12 col-xs-12 respuesta\">\n            <header class=\"col-md-2 col-xs-2\">\n              <dl>\n                <dd><img *ngIf=\"visible_usuario && usuario.imagen != null\" src=\"images/{{usuario.imagen.url}}\"></dd>\n                <dd><a>{{usuario.usuario}}</a></dd>\n              </dl>\n            </header>\n            <div class=\"col-sm-10 col-xs-10\">\n              <div class=\"text col-sm-12 col-xs-12\">\n                <div class=\"col-sm-10\">\n                  <p>Mensaje:</p>\n                  <textarea class=\"mens\"   [(ngModel)]=\"respuesta\">Escribe</textarea>\n                </div>\n                <div class=\"col-sm-2 col-xs-4 nota\">\n                  <p>Puntuaci\u00F3n:</p>\n                  <input class=\"col-sm-9 col-xs4\"   [(ngModel)]=\"nota\">\n                </div>\n              </div>\n              <button (click)=\"enviarcomentario()\" id=\"btn_enviar\" class=\"col-sm-2 col-xs-12\">Enviar</button>\n              <div *ngIf=\"error\" class=\"msg_error\"><p >Debe introducir una puntuaci\u00F3n entre 1 y 10</p></div>\n            </div>\n          </div>\n        </div>\n        </div>\n\n    </div>\n  ",
                        directives: [comentarios_component_1.comentarioscomponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, usuario_service_1.UsuarioService, sesion_service_1.SesionService, clases_service_1.clasesservice, router_2.RouteParams])
                ], informacionprod);
                return informacionprod;
            }());
            exports_1("informacionprod", informacionprod);
        }
    }
});
//# sourceMappingURL=informacion-prod.component.js.map