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
                }
                informacionprod.prototype.AddSeguir = function (info) {
                    /*
                    this.seguir=!this.seguir;
                    if(this.seguir){
                      this.UsuarioService.addContenido(this.aux_prod,this.sesion.id);
                    } else {
                      this.UsuarioService.removeContenido(this.aux_prod,this.sesion.id);
                    }
                    console.log(info.id);
                    */
                };
                informacionprod.prototype.getsesion = function () {
                    this.loged = this.SesionService.getLogged();
                    this.usr = this.SesionService.getSesion();
                };
                informacionprod.prototype.getProducto = function () {
                    var _this = this;
                    var id = +this._routeParams.get('idprod');
                    var tipoprod = +this._routeParams.get('tipoprod');
                    this.clasesservice.getinfo(id).then(function (prod) {
                        _this.producto = prod;
                    });
                    this.aux_tipoprod = tipoprod;
                    this.aux_id = id;
                };
                informacionprod.prototype.getcomentarios = function () {
                    var _this = this;
                    var id = +this._routeParams.get('idprod');
                    this.clasesservice.getcomentarios(id).then(function (list) { return _this.comentarios = list; });
                };
                informacionprod.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getProducto();
                    this.getcomentarios();
                    this.getsesion();
                    this.clasesservice.getProd(this.aux_id).then(function (prod) { return _this.aux_prod = prod[0]; });
                    this.visible = true;
                };
                informacionprod.prototype.enviarcomentario = function () {
                    /*
                    console.log(this.usr.usuario);
                    if(this.nota>10 || this.nota<0){
                      this.error=true;
                    } else {
                      this.resp_comentario = {
                        idcomentario:this.usr.id,
                        idjuego:this.aux_id,
                        idcontenido:0,
                        user:this.usr.usuario,
                        user_img:this.usr.imagen,
                        fecha:"Hoy",
                        puntuacion:this.nota,
                        mensaje:this.respuesta
                      };
                      this.clasesservice.pushRespuesta(this.resp_comentario);
                      this.getcomentarios();
                      console.log(this.resp_comentario.puntuacion);
                
                    }*/
                };
                informacionprod = __decorate([
                    core_1.Component({
                        selector: 'prod-detalle',
                        template: "\n    <div class=\"panel-group\" *ngFor=\"#produc of producto\">\n      <div class=\"panel panel-danger\">\n        <div class=\"panel-heading\">Datos B\u00E1sicos</div>\n        <div class=\"panel-body\">\n          <div  class=\"datos col-md-9 col-xs-7\">\n            <h4>Informaci\u00F3n t\u00E9cnica</h4>\n            <dl  *ngIf=\"aux_tipoprod!=1 && visible\">\n              <dt>Fecha de lanzamiento: </dt>\n              <dd>{{produc.infotecnic.fecha}}</dd>\n              <dt>G\u00E9nero: </dt>\n              <dd><span class=\"label label-default\">{{produc.infotecnic.genero}}</span></dd>\n              <dt>Director:</dt>\n              <dd>{{produc.infotecnic.desarrollador}}</dd>\n              <dt>Patrocinador:</dt>\n              <dd>{{produc.infotecnic.editor}}</dd>\n            </dl>\n            <dl  *ngIf=\"aux_tipoprod==1 && visible\">\n              <dt>Fecha de lanzamiento: </dt>\n              <dd>{{produc.infotecnic.fecha}}</dd>\n              <dt>G\u00E9nero: </dt>\n              <dd><span class=\"label label-default\">{{produc.infotecnic.genero}}</span></dd>\n              <dt>Desarrollador:</dt>\n              <dd>{{produc.infotecnic.desarrollador}}</dd>\n              <dt>Editor:</dt>\n              <dd>{{produc.infotecnic.editor}}</dd>\n              <dt>Plataformas:</dt>\n              <dd><span class=\"label label-default\">{{produc.infotecnic.plataforma}}</span></dd>\n            </dl>\n            <div *ngIf=\"aux_tipoprod==1 && visible\">\n              <h4>Requisitos del sistema</h4>\n              <dl>\n                <dt>Procesador:</dt>\n                <dd>{{produc.inforequisitos.procesador}}</dd>\n                <dt>Memoria:</dt>\n                <dd>{{produc.inforequisitos.memoria}}</dd>\n                <dt>Gr\u00E1ficos:</dt>\n                <dd>{{produc.inforequisitos.graficos}}</dd>\n                <dt>Almacenamiento:</dt>\n                <dd>{{produc.inforequisitos.almacenamiento}}</dd>\n              </dl>\n            </div>\n          </div>\n\n          <div class=\"portada col-md-3 col-xs-5\">\n            <img src={{produc.img}}>\n            <div *ngIf=\"sesion.loged\" (click)=\"AddSeguir(produc)\" [class.checkfavorito]=\"seguir\" class=\"favorito col-md-12 col-xs-12\">\n              <div><span class=\"glyphicon glyphicon-plus\"></span>Seguir</div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div *ngIf=\"produc.sinopsis\" class=\"panel panel-danger sinopsis\">\n        <div class=\"panel-heading\">Sinopsis</div>\n        <div class=\"panel-body\">\n          <p>{{produc.sinopsis}}</p>\n        </div>\n      </div>\n\n      <div *ngIf=\"produc.trailer\" class=\"panel panel-danger trailer\">\n        <div class=\"panel-heading\">Trailer</div>\n        <div class=\"panel-body \">\n           <div class=\"embed-responsive embed-responsive-16by9\">\n              <iframe class=\"embed-responsive-item\" src={{produc.trailer}}></iframe>\n           </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"comentarios\" class=\"panel panel-danger comentarios\">\n        <div class=\"panel-heading\">Comentarios</div>\n        <div class=\"panel-body\">\n          <div *ngFor=\"#coment of comentarios\">\n            <comentarios [comentario]=\"coment\"></comentarios>\n          </div>\n        </div>\n       </div>\n\n       <div *ngIf=\"sesion.loged\" class=\"panel panel-danger comentarios respuesta\">\n        <div class=\"panel-heading\">\n          <button type=\"button\" class=\"btn btn-primary btn_respuesta\" onclick=\"document.getElementById('oculto').style.display = 'block';\"><span class=\"glyphicon glyphicon-plus\"></span> Responder</button></div>\n        <div class=\"panel-body\" id=\"oculto\" style='display:none;'>\n          <div class=\"col-md-12 col-xs-12 respuesta\">\n            <header class=\"col-md-2 col-xs-2\">\n              <dl>\n                <dd><img src={{sesion.imagen}}></dd>\n                <dd><a>{{sesion.usuario}}</a></dd>\n              </dl>\n            </header>\n            <div class=\"col-sm-10 col-xs-10\">\n              <div class=\"text col-sm-12 col-xs-12\">\n                <div class=\"col-sm-10\">\n                  <p>Mensaje:</p>\n                  <textarea class=\"mens\"   [(ngModel)]=\"respuesta\">Escribe</textarea>\n                </div>\n                <div class=\"col-sm-2 col-xs-4 nota\">\n                  <p>Puntuaci\u00F3n:</p>\n                  <input class=\"col-sm-9 col-xs4\"   [(ngModel)]=\"nota\">\n                </div>\n              </div>\n              <button (click)=\"enviarcomentario()\" id=\"btn_enviar\" class=\"col-sm-2 col-xs-12\">Enviar</button>\n              <div *ngIf=\"error\" class=\"msg_error\"><p >Debe introducir una puntuaci\u00F3n entre 1 y 10</p></div>\n            </div>\n          </div>\n        </div>\n        </div>\n\n    </div>\n  ",
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