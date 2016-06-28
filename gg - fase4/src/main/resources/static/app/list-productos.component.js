System.register(['angular2/core', 'angular2/router', './clases.service', './prod-detalle.component', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, clases_service_1, prod_detalle_component_1, http_1;
    var listproductoscomponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (clases_service_1_1) {
                clases_service_1 = clases_service_1_1;
            },
            function (prod_detalle_component_1_1) {
                prod_detalle_component_1 = prod_detalle_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            listproductoscomponent = (function () {
                function listproductoscomponent(router, clasesservice, _routeParams) {
                    this.router = router;
                    this.clasesservice = clasesservice;
                    this._routeParams = _routeParams;
                    this.titulo = "Titulo";
                    this.visible = false;
                }
                listproductoscomponent.prototype.getProductos = function () {
                    var _this = this;
                    var tipoprod = +this._routeParams.get('tipoprod');
                    if (tipoprod == 1 || tipoprod == 2 || tipoprod == 3) {
                        this.clasesservice.getProductosTipo(tipoprod).subscribe(function (productos) { return _this.list_producto = productos; });
                        this.aux_tipoprod = tipoprod;
                    }
                    else {
                        this.clasesservice.getProductosTipo(1).subscribe(function (productos) {
                            _this.list_producto = productos;
                            _this.visible = true;
                        });
                        this.aux_tipoprod = 1;
                    }
                };
                listproductoscomponent.prototype.ngOnInit = function () {
                    this.getProductos();
                };
                listproductoscomponent.prototype.gotoFiltrar = function (tipo, filt) {
                    var _this = this;
                    if (tipo != "genero") {
                        this.clasesservice.getProdPlataforma(this.aux_tipoprod, filt).subscribe(function (prod) { return _this.list_producto = prod; });
                    }
                    else {
                        this.clasesservice.getProdGenero(this.aux_tipoprod, filt).subscribe(function (prod) { return _this.list_producto = prod; });
                    }
                };
                listproductoscomponent.prototype.gotoDetalles = function (prod) {
                    var link = ['Detalleprod', { tipoprod: this.aux_tipoprod, idprod: prod.id }];
                    this.router.navigate(link);
                };
                listproductoscomponent.prototype.gotoTipoprod = function (tipo) {
                    var _this = this;
                    this.aux_tipoprod = tipo;
                    this.clasesservice.getProductosTipo(tipo).subscribe(function (prod) { return _this.list_producto = prod; });
                };
                listproductoscomponent = __decorate([
                    core_1.Component({
                        selector: 'list-productos',
                        templateUrl: 'app/list-productos.html',
                        providers: [http_1.HTTP_PROVIDERS],
                        directives: [prod_detalle_component_1.proddetalleComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, clases_service_1.clasesservice, router_2.RouteParams])
                ], listproductoscomponent);
                return listproductoscomponent;
            }());
            exports_1("listproductoscomponent", listproductoscomponent);
        }
    }
});
//# sourceMappingURL=list-productos.component.js.map