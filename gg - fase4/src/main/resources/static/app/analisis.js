System.register(['angular2/core', './contenido.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, contenido_service_1, router_1;
    var Analisis;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contenido_service_1_1) {
                contenido_service_1 = contenido_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Analisis = (function () {
                function Analisis(_router, _contentService) {
                    this._router = _router;
                    this._contentService = _contentService;
                    this.contenido = [];
                    this.contAux = [];
                }
                Analisis.prototype.ngOnInit = function () {
                    var _this = this;
                    this._contentService.getContenido().subscribe(function (contenido) {
                        _this.contenido = contenido;
                        for (var i = _this.contenido.length - 1; -1 < i; i--) {
                            _this.contAux[_this.contenido.length - i - 1] = _this.contenido[i];
                        }
                    });
                };
                Analisis.prototype.gotoDetail = function (contenido) {
                    var link = ['AnalisisDetalles', { id: contenido.id }];
                    this._router.navigate(link);
                };
                Analisis = __decorate([
                    core_1.Component({
                        selector: 'analisis',
                        templateUrl: 'app/analisis.html',
                        providers: [contenido_service_1.ContenidoService],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, contenido_service_1.ContenidoService])
                ], Analisis);
                return Analisis;
            }());
            exports_1("Analisis", Analisis);
        }
    }
});
//# sourceMappingURL=analisis.js.map