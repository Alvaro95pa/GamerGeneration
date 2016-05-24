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
    var anadircontenido;
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
            anadircontenido = (function () {
                function anadircontenido(router, adminservice, clasesservice, _routeParams) {
                    this.router = router;
                    this.adminservice = adminservice;
                    this.clasesservice = clasesservice;
                    this._routeParams = _routeParams;
                    this.destacado = false;
                }
                anadircontenido.prototype.anadirElemContenido = function () {
                    this.imagenPortada = {
                        descripcion: this.descripcion,
                        url: this.imgn
                    };
                    this.expositor = {
                        descripcion: this.descripcion2,
                        url: this.imgn2
                    };
                    this.dest = {
                        destacado: this.destacado,
                        imgn: this.expositor
                    };
                    this.new_contenido = {
                        id: 20,
                        nombreProd: "",
                        tipo: this.tipo,
                        categoria: this.categoria,
                        titulo: this.titulo,
                        fecha: this.fecha,
                        multimedia: this.imagenPortada,
                        resumen: this.resumen,
                        cuerpo: this.cuerpo,
                        ratio: this.puntuacion,
                        dest: this.dest
                    };
                    this.adminservice.pushContenido(this.new_contenido);
                    console.log(this.new_contenido.ratio);
                    this.gotoadmin_contenido(this.tipo);
                };
                anadircontenido.prototype.getopcion = function () {
                    var tipo = this._routeParams.get('tipo');
                    if (tipo == "Noticia") {
                        this.tipoopcion = 2;
                        this.tipo = tipo;
                    }
                    if (tipo == "Análisis") {
                        this.tipoopcion = 3;
                        this.tipo = tipo;
                        console.log(tipo);
                    }
                };
                anadircontenido.prototype.ngOnInit = function () {
                    this.getopcion();
                };
                anadircontenido.prototype.gotoadmin_users = function () {
                    var link = ['AdminUsers'];
                    this.router.navigate(link);
                };
                anadircontenido.prototype.gotoadmin_contenido = function (opc) {
                    var link = ['AdminContenido', { tipo: opc }];
                    this.router.navigate(link);
                };
                anadircontenido.prototype.gotoadmin_salir = function () {
                    var link = ['Princ_Catalogo'];
                    this.router.navigate(link);
                };
                anadircontenido.prototype.gotoadmin_productos = function () {
                    var link = ['AdminProductos'];
                    this.router.navigate(link);
                };
                anadircontenido = __decorate([
                    core_1.Component({
                        selector: 'anadircontenido',
                        template: "\n  <div class=\"row admin fondo\">\n    <div class=\"col-sm-3 aux\">\n      <ul class=\"nav nav-pills nav-stacked col-sm-12 contorno\">\n        <li  [class.selected]=\"tipoopcion==1\" (click)=\"gotoadmin_users('Users')\"><a >Usuarios</a></li>\n        <li  [class.selected]=\"tipoopcion==2\" (click)=\"gotoadmin_contenido('Noticia')\"><a >Noticias</a></li>\n        <li  [class.selected]=\"tipoopcion==3\" (click)=\"gotoadmin_contenido('An\u00E1lisis')\"><a >Analisis</a></li>\n        <li  [class.selected]=\"tipoopcion==4\" (click)=\"gotoadmin_productos()\"><a >Productos</a></li>\n        <li  (click)=\"gotoadmin_salir()\"><a >Salir</a></li>\n      </ul>\n    </div>\n\n    <div class=\"col-sm-9\" >\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Titulo:</span>\n        <input [(ngModel)]=\"titulo\" type=\"text\" class=\"form-control\" placeholder=\"Inserte un titulo\" aria-describedby=\"basic-addon1\">\n      </div>\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Categoria:</span>\n        <ul class=\"col-xs-12 anadircategoria nav nav-pills nav-stacked col-sm-12 contorno\">\n          <li [class.selecteccheck]=\"categoria=='Juegos'\" (click)=\"categoria = 'Juegos'\"><a >Videojuegos</a></li>\n          <li [class.selecteccheck]=\"categoria=='Series'\" (click)=\"categoria = 'Series'\"><a >Series</a></li>\n          <li [class.selecteccheck]=\"categoria=='Peliculas'\" (click)=\"categoria = 'Peliculas'\"><a >Peliculas</a></li>\n        </ul>\n      </div>\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Fecha:</span>\n        <input [(ngModel)]=\"fecha\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una fecha\" aria-describedby=\"basic-addon1\">\n      </div>\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Multimedia:</span>\n        <input [(ngModel)]=\"imgn\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una URL de un video\" aria-describedby=\"basic-addon1\">\n      </div>\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Resumen:</span>\n        <textarea class=\"mens col-sm-12 col-xs-12\"   [(ngModel)]=\"resumen\">Escribe</textarea>\n      </div>\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Cuerpo:</span>\n        <textarea class=\"mens col-sm-12 col-xs-12\"   [(ngModel)]=\"cuerpo\">Escribe</textarea>\n      </div>\n      <div *ngIf=\"tipoopcion == 2\" class=\"datos col-sm-12 inforeq\">\n          <h4>Opciones de expositor</h4>\n          <div class=\"input-group nuevocontenido\">\n            <span class=\"input-group-addon\" id=\"basic-addon1\">\u00BFQuiere que aparezca en el expositor?:</span>\n            <div [class.checkboxdest]=\"destacado\" (click)=\"destacado= !destacado\" class=\"col-sm-2 chdestacado\">a</div>\n          </div>\n          <div class=\"input-group nuevocontenido\">\n            <span class=\"input-group-addon\" id=\"basic-addon1\">Imagen a mostrar:</span>\n            <input [(ngModel)]=\"imgn2\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una imagen\" aria-describedby=\"basic-addon1\">\n          </div>\n      </div>\n      <div *ngIf=\"tipoopcion == 3\" class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Puntuacion:</span>\n        <input [(ngModel)]=\"puntuacion\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una puntuaci\u00F3n\" aria-describedby=\"basic-addon1\">\n      </div>\n    </div>\n    <button (click)=\"anadirElemContenido()\" class=\"btnanadir btn btn-danger col-sm-3 col-xs-12\"  >A\u00F1adir Contenido</button>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, modoadmin_service_1.modoadminservice, clases_service_1.clasesservice, router_2.RouteParams])
                ], anadircontenido);
                return anadircontenido;
            }());
            exports_1("anadircontenido", anadircontenido);
        }
    }
});
/*

*/
//# sourceMappingURL=anadircontenido.component.js.map