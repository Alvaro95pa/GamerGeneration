System.register(['angular2/core', './clases.service', './modoadmin.service', 'angular2/router', './prod-detalle.component'], function(exports_1, context_1) {
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
    var core_1, clases_service_1, modoadmin_service_1, router_1, router_2, prod_detalle_component_1;
    var listobjetos;
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
            },
            function (prod_detalle_component_1_1) {
                prod_detalle_component_1 = prod_detalle_component_1_1;
            }],
        execute: function() {
            listobjetos = (function () {
                function listobjetos(router, adminservice, clasesservice, _routeParams) {
                    this.router = router;
                    this.adminservice = adminservice;
                    this.clasesservice = clasesservice;
                    this._routeParams = _routeParams;
                    this.checkjuego = false;
                    this.checkseries = false;
                    this.checkpelis = false;
                    this.juego = 0;
                    this.series = 0;
                    this.pelis = 0;
                }
                listobjetos.prototype.onVideojuegos = function () {
                    this.checkjuego = !this.checkjuego;
                    if (this.checkjuego) {
                        this.juego = 1;
                    }
                    else {
                        this.juego = 0;
                    }
                    console.log(this.checkjuego);
                    console.log(this.juego);
                    if (!this.checkpelis && !this.checkseries && !this.checkjuego) {
                        this.getproductos();
                        console.log("asdasd");
                    }
                    else {
                        this.getproductosfiltro();
                    }
                };
                listobjetos.prototype.onSeries = function () {
                    this.checkseries = !this.checkseries;
                    if (this.checkseries) {
                        this.series = 2;
                    }
                    else {
                        this.series = 0;
                    }
                    console.log(this.checkseries);
                    console.log(this.series);
                    if (!this.checkpelis && !this.checkseries && !this.checkjuego) {
                        this.getproductos();
                        console.log("asdasd");
                    }
                    else {
                        this.getproductosfiltro();
                    }
                };
                listobjetos.prototype.onPeliculas = function () {
                    this.checkpelis = !this.checkpelis;
                    if (this.checkpelis) {
                        this.pelis = 3;
                    }
                    else {
                        this.pelis = 0;
                    }
                    console.log(this.checkpelis);
                    console.log(this.pelis);
                    if (!this.checkpelis && !this.checkseries && !this.checkjuego) {
                        this.getproductos();
                        console.log("asdasd");
                    }
                    else {
                        this.getproductosfiltro();
                    }
                };
                listobjetos.prototype.eliminarProd = function (produc) {
                    this.adminservice.deleteProd(produc.id);
                    if (!this.checkpelis && !this.checkseries && !this.checkjuego) {
                        this.getproductos();
                        console.log("Prueba");
                    }
                    else {
                        this.getproductosfiltro();
                    }
                };
                listobjetos.prototype.getproductos = function () {
                    var _this = this;
                    this.adminservice.getProductos().subscribe(function (list) { return _this.list_productos = list; });
                };
                listobjetos.prototype.getproductosfiltro = function () {
                    var _this = this;
                    this.adminservice.getProductosFiltro(this.juego, this.series, this.pelis).subscribe(function (list) { return _this.list_productos = list; });
                };
                listobjetos.prototype.getopcion = function () {
                    var opcion = this._routeParams.get('opcion');
                    console.log(opcion);
                    this.tipoopcion = 4;
                };
                listobjetos.prototype.ngOnInit = function () {
                    this.getopcion();
                    this.getproductos();
                    console.log(this.tipoopcion);
                };
                listobjetos.prototype.gotoadmin_users = function () {
                    var link = ['AdminUsers'];
                    this.router.navigate(link);
                };
                listobjetos.prototype.gotoadmin_contenido = function (opc) {
                    var link = ['AdminContenido', { tipo: opc }];
                    this.router.navigate(link);
                };
                listobjetos.prototype.gotoadmin_productos = function () {
                    var link = ['AdminProductos'];
                    this.router.navigate(link);
                };
                listobjetos.prototype.gotoadmin_salir = function () {
                    var link = ['Princ_Catalogo'];
                    this.router.navigate(link);
                };
                listobjetos.prototype.gotoAnadirProd = function () {
                    var link = ['AdminNewProducto'];
                    this.router.navigate(link);
                };
                listobjetos = __decorate([
                    core_1.Component({
                        selector: 'listobjetos',
                        template: "\n\n    <div class=\"row admin fondo\">\n      <div class=\"col-sm-3 aux\">\n\n        <ul class=\"nav nav-pills nav-stacked col-sm-12 contorno\">\n          <li  [class.selected]=\"tipoopcion==1\" (click)=\"gotoadmin_users('Users')\"><a >Usuarios</a></li>\n          <li  [class.selected]=\"tipoopcion==2\" (click)=\"gotoadmin_contenido('Noticia')\"><a >Noticias</a></li>\n          <li  [class.selected]=\"tipoopcion==3\" (click)=\"gotoadmin_contenido('An\u00E1lisis')\"><a >Analisis</a></li>\n          <li  [class.selected]=\"tipoopcion==4\" (click)=\"gotoadmin_productos()\"><a >Productos</a></li>\n          <li  (click)=\"gotoadmin_salir()\"><a >Salir</a></li>\n        </ul>\n        <ul class=\" filtroobjeto nav nav-pills nav-stacked col-sm-12 contorno\">\n          <li [class.selected]=\"tipoopcion==4\" ><a ><h3>Filtro</h3></a></li>\n          <li [class.selecteccheck]=\"juego==1\" (click)=\"onVideojuegos()\"><a >Videojuegos</a></li>\n          <li [class.selecteccheck]=\"series==2\" (click)=\"onSeries()\"><a >Series</a></li>\n          <li [class.selecteccheck]=\"pelis==3\" (click)=\"onPeliculas()\"><a >Peliculas</a></li>\n        </ul>\n        <button (click)=\"gotoAnadirProd()\"  class=\"btnanadir btn btn-danger col-sm-12 col-xs-12\"  >A\u00F1adir Producto</button>\n      </div>\n      <div class=\"col-sm-9\">\n        <ul class=\"listado\">\n          <li *ngFor=\"#produc of list_productos\">\n            <prod-detalle [prod]=\"produc\" ></prod-detalle>\n            <button (click)=\"eliminarProd(produc)\" class=\"btn col-sm-10 col-xs-10\"  >Eliminar</button>\n          </li>\n        </ul>\n      </div>\n    </div>\n  ",
                        directives: [prod_detalle_component_1.proddetalleComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, modoadmin_service_1.modoadminservice, clases_service_1.clasesservice, router_2.RouteParams])
                ], listobjetos);
                return listobjetos;
            }());
            exports_1("listobjetos", listobjetos);
        }
    }
});
//# sourceMappingURL=list-objetos.component.js.map