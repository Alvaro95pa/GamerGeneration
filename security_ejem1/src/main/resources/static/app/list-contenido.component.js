System.register(['angular2/core', './modoadmin.service', 'angular2/router', './sesion.service'], function(exports_1, context_1) {
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
    var core_1, modoadmin_service_1, router_1, router_2, sesion_service_1;
    var listcontenido;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (modoadmin_service_1_1) {
                modoadmin_service_1 = modoadmin_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (sesion_service_1_1) {
                sesion_service_1 = sesion_service_1_1;
            }],
        execute: function() {
            listcontenido = (function () {
                function listcontenido(router, _sesionService, adminservice, _routeParams) {
                    this.router = router;
                    this._sesionService = _sesionService;
                    this.adminservice = adminservice;
                    this._routeParams = _routeParams;
                }
                listcontenido.prototype.getcontenido = function () {
                    var _this = this;
                    var tipo = this._routeParams.get('tipo');
                    this.adminservice.getContenidotipo(tipo).subscribe(function (list) { return _this.list_contenido = list; });
                };
                listcontenido.prototype.eliminarContenido = function (content) {
                    var _this = this;
                    this.adminservice.deleteContenido(content.id).subscribe(function (id) {
                        _this.getcontenido();
                    });
                };
                listcontenido.prototype.getopcion = function () {
                    var tipo = this._routeParams.get('tipo');
                    if (tipo == "Noticia") {
                        this.tipoopcion = 2;
                    }
                    if (tipo == "Análisis") {
                        this.tipoopcion = 3;
                    }
                };
                listcontenido.prototype.ngOnInit = function () {
                    this.getopcion();
                    this.getcontenido();
                };
                listcontenido.prototype.gotoAnadirContenido = function () {
                    if (this.tipoopcion == 2) {
                        var link = ['AdminNewContenido', { tipo: "Noticia", nuevo: "NuevaNoticia" }];
                        this.router.navigate(link);
                    }
                    if (this.tipoopcion == 3) {
                        var link = ['AdminNewContenido', { tipo: "Análisis", nuevo: "NuevoAnalisis" }];
                        this.router.navigate(link);
                    }
                };
                listcontenido.prototype.gotoadmin_users = function () {
                    var link = ['AdminUsers'];
                    this.router.navigate(link);
                };
                listcontenido.prototype.gotoadmin_contenido = function (opc) {
                    var link = ['AdminContenido', { tipo: opc }];
                    this.router.navigate(link);
                };
                listcontenido.prototype.gotoadmin_productos = function () {
                    var link = ['AdminProductos'];
                    this.router.navigate(link);
                };
                listcontenido.prototype.gotoadmin_salir = function () {
                    this._sesionService.logOut().subscribe(function (response) { }, function (error) { return console.log("Error when trying to log out: " + error); });
                    var link = ['Home'];
                    this.router.navigate(link);
                };
                listcontenido = __decorate([
                    core_1.Component({
                        selector: 'listcontenido',
                        template: "\n    <div class=\"row admin fondo\">\n      <div class=\"col-sm-3 aux\">\n        <ul class=\"nav nav-pills nav-stacked col-sm-12 contorno\">\n          <li  [class.selected]=\"tipoopcion==1\" (click)=\"gotoadmin_users('Users')\"><a >Usuarios</a></li>\n          <li  [class.selected]=\"tipoopcion==2\" (click)=\"gotoadmin_contenido('Noticia')\"><a >Noticias</a></li>\n          <li  [class.selected]=\"tipoopcion==3\" (click)=\"gotoadmin_contenido('An\u00E1lisis')\"><a >Analisis</a></li>\n          <li  [class.selected]=\"tipoopcion==4\" (click)=\"gotoadmin_productos()\"><a >Productos</a></li>\n          <li  (click)=\"gotoadmin_salir()\"><a >Salir</a></li>\n        </ul>\n        <button (click)=\"gotoAnadirContenido()\" class=\"btnanadir btn btn-danger col-sm-12 col-xs-12\"  >A\u00F1adir Contenido</button>\n      </div>\n\n      <div class=\"admin_info admin_contenido col-sm-9 col-xs-12\"  *ngFor=\"#contenido of list_contenido\">\n        <div class=\"col-sm-8 col-xs-9\">\n          <h3 class=\"col-sm-12\">{{contenido.titulo}}</h3>\n          <p class=\"col-sm-5 col-xs-5\">Fecha: {{contenido.fecha}}</p>\n          <p class=\"col-sm-7 col-xs-7\">Categoria: {{contenido.categoria}}</p>\n        </div>\n        <button (click)=\"eliminarContenido(contenido)\" class=\"btn col-sm-4 col-xs-4\"  >Eliminar</button>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, sesion_service_1.SesionService, modoadmin_service_1.modoadminservice, router_2.RouteParams])
                ], listcontenido);
                return listcontenido;
            }());
            exports_1("listcontenido", listcontenido);
        }
    }
});
//# sourceMappingURL=list-contenido.component.js.map