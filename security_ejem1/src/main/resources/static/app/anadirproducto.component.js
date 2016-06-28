System.register(['angular2/core', './clases.service', './modoadmin.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, clases_service_1, modoadmin_service_1, router_1, router_2;
    var anadirproducto;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (clases_service_1_1) {
                clases_service_1 = clases_service_1_1;
            },
            function (modoadmin_service_1_1) {
                modoadmin_service_1 = modoadmin_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            anadirproducto = (function () {
                function anadirproducto(router, adminservice, clasesservice, _routeParams) {
                    this.router = router;
                    this.adminservice = adminservice;
                    this.clasesservice = clasesservice;
                    this._routeParams = _routeParams;
                    this.tipoopcion = 1;
                }
                anadirproducto.prototype.anadirElemProd = function () {
                    var _this = this;
                    this.newimg = {
                        descripcion: "",
                        url: this.img
                    };
                    this.new_prod = {
                        id: 1,
                        tipoprod: this.tipoprod,
                        name: this.name,
                        img: this.newimg,
                        fecha: this.fecha,
                        genero: this.genero,
                        plataforma: this.plataforma,
                        desarrollador: this.desarrollador,
                        editor: this.editor,
                        procesador: this.procesador,
                        memoria: this.memoria,
                        grafica: this.grafica,
                        almacenamiento: this.almacenamiento,
                        trailer: this.trailer,
                        sinopsis: this.sinopsis,
                        comentarios: this.new_comentarios
                    };
                    this.adminservice.pushProd(this.new_prod).subscribe(function (prod) {
                        console.log(prod);
                        _this.gotoadmin_productos();
                    });
                };
                anadirproducto.prototype.getopcion = function () {
                    this.tipoopcion = 4;
                };
                anadirproducto.prototype.ngOnInit = function () {
                    this.getopcion();
                };
                anadirproducto.prototype.gotoadmin_users = function () {
                    var link = ['AdminUsers'];
                    this.router.navigate(link);
                };
                anadirproducto.prototype.gotoadmin_contenido = function (opc) {
                    var link = ['AdminContenido', { tipo: opc }];
                    this.router.navigate(link);
                };
                anadirproducto.prototype.gotoadmin_productos = function () {
                    var link = ['AdminProductos'];
                    this.router.navigate(link);
                };
                anadirproducto.prototype.gotoadmin_salir = function () {
                    var link = ['Princ_Catalogo'];
                    this.router.navigate(link);
                };
                anadirproducto = __decorate([
                    core_1.Component({
                        selector: 'anadirproducto',
                        template: "\n  <div class=\"row admin\">\n    <div class=\"col-sm-3 aux\">\n      <ul class=\"nav nav-pills nav-stacked col-sm-12 contorno\">\n        <li  [class.selected]=\"tipoopcion==1\" (click)=\"gotoadmin_users('Users')\"><a >Usuarios</a></li>\n        <li  [class.selected]=\"tipoopcion==2\" (click)=\"gotoadmin_contenido('Noticia')\"><a >Noticias</a></li>\n        <li  [class.selected]=\"tipoopcion==3\" (click)=\"gotoadmin_contenido('An\u00E1lisis')\"><a >Analisis</a></li>\n        <li  [class.selected]=\"tipoopcion==4\" (click)=\"gotoadmin_productos()\"><a >Productos</a></li>\n        <li  (click)=\"gotoadmin_salir()\"><a >Salir</a></li>\n      </ul>\n    </div>\n\n    <div class=\"col-sm-9\" >\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Nombre:</span>\n        <input [(ngModel)]=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Inserte un nombre\" aria-describedby=\"basic-addon1\">\n      </div>\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Categoria:</span>\n        <ul class=\"col-xs-12 anadircategoria nav nav-pills nav-stacked col-sm-12 contorno\">\n          <li [class.selecteccheck]=\"tipoprod==1\" (click)=\"tipoprod = 1\"><a >Videojuego</a></li>\n          <li [class.selecteccheck]=\"tipoprod==2\" (click)=\"tipoprod = 2\"><a >Serie</a></li>\n          <li [class.selecteccheck]=\"tipoprod==3\" (click)=\"tipoprod = 3\"><a >Pelicula</a></li>\n        </ul>\n      </div>\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Imagen Portada:</span>\n        <input [(ngModel)]=\"img\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una fecha\" aria-describedby=\"basic-addon1\">\n      </div>\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Trailer:</span>\n        <input [(ngModel)]=\"trailer\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una URL de un video\" aria-describedby=\"basic-addon1\">\n      </div>\n      <div *ngIf=\"tipoprod==2 || tipoprod==3\">\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Director:</span>\n        <input [(ngModel)]=\"desarrollador\" type=\"text\" class=\"form-control\" placeholder=\"Inserte un el nombre de un director\" aria-describedby=\"basic-addon1\">\n      </div>\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Patrocinador:</span>\n        <input [(ngModel)]=\"editor\" type=\"text\" class=\"form-control\" placeholder=\"Inserte un el nombre de un editor\" aria-describedby=\"basic-addon1\">\n      </div>\n      </div>\n      <div *ngIf=\"tipoprod==1\" class=\"datos col-sm-6 infotecn\">\n          <h4>Informaci\u00F3n t\u00E9cnica</h4>\n          <div class=\"input-group nuevocontenido\">\n            <span class=\"input-group-addon\" id=\"basic-addon1\">Fecha:</span>\n            <input [(ngModel)]=\"fecha\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una fecha\" aria-describedby=\"basic-addon1\">\n          </div>\n          <div class=\"input-group nuevocontenido\">\n            <span class=\"input-group-addon\" id=\"basic-addon1\">Genero:</span>\n            <input [(ngModel)]=\"genero\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una genero\" aria-describedby=\"basic-addon1\">\n          </div>\n          <div class=\"input-group nuevocontenido\">\n            <span class=\"input-group-addon\" id=\"basic-addon1\">Plataformas:</span>\n            <input [(ngModel)]=\"plataforma\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una plataforma\" aria-describedby=\"basic-addon1\">\n          </div>\n          <div class=\"input-group nuevocontenido\">\n            <span class=\"input-group-addon\" id=\"basic-addon1\">Desarrollador:</span>\n            <input [(ngModel)]=\"desarrollador\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una desarrolladora\" aria-describedby=\"basic-addon1\">\n          </div>\n          <div class=\"input-group nuevocontenido\">\n            <span class=\"input-group-addon\" id=\"basic-addon1\">Editor:</span>\n            <input [(ngModel)]=\"editor\" type=\"text\" class=\"form-control\" placeholder=\"Inserte un editor\" aria-describedby=\"basic-addon1\">\n          </div>\n      </div>\n      <div *ngIf=\"tipoprod==1\" class=\"datos col-sm-6 inforeq\">\n          <h4>Requisitos del sistema</h4>\n          <div class=\"input-group nuevocontenido\">\n            <span class=\"input-group-addon\" id=\"basic-addon1\">Procesador:</span>\n            <input [(ngModel)]=\"procesador\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una procesador\" aria-describedby=\"basic-addon1\">\n          </div>\n          <div class=\"input-group nuevocontenido\">\n            <span class=\"input-group-addon\" id=\"basic-addon1\">Memoria:</span>\n            <input [(ngModel)]=\"memoria\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una cantidad de memoria\" aria-describedby=\"basic-addon1\">\n          </div>\n          <div class=\"input-group nuevocontenido\">\n            <span class=\"input-group-addon\" id=\"basic-addon1\">Graficos:</span>\n            <input [(ngModel)]=\"grafica\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una tarjeta grafica\" aria-describedby=\"basic-addon1\">\n          </div>\n          <div class=\"input-group nuevocontenido\">\n            <span class=\"input-group-addon\" id=\"basic-addon1\">Almacenamiento:</span>\n            <input [(ngModel)]=\"almacenamiento\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una cantidad en GBs\" aria-describedby=\"basic-addon1\">\n          </div>\n\n      </div>\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Sinopsis:</span>\n        <textarea class=\"mens col-sm-12 col-xs-12\"   [(ngModel)]=\"sinopsis\"></textarea>\n      </div>\n\n\n\n\n    <button (click)=\"anadirElemProd()\" class=\"btnanadir btn btn-danger col-sm-3 col-xs-12\"  >A\u00F1adir Contenido</button>\n\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, modoadmin_service_1.modoadminservice, clases_service_1.clasesservice, router_2.RouteParams])
                ], anadirproducto);
                return anadirproducto;
            }());
            exports_1("anadirproducto", anadirproducto);
        }
    }
});
/*

*/
//# sourceMappingURL=anadirproducto.component.js.map