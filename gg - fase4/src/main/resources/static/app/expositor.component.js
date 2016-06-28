System.register(['angular2/core', 'angular2/common', 'ng2-bootstrap/ng2-bootstrap', 'angular2/http', './contenido.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, ng2_bootstrap_1, http_1, contenido_service_1, router_1;
    var ExpositorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (contenido_service_1_1) {
                contenido_service_1 = contenido_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ExpositorComponent = (function () {
                function ExpositorComponent(_contentService, _router) {
                    this._contentService = _contentService;
                    this._router = _router;
                    this.myInterval = 4000;
                    this.noWrapSlides = false;
                    this.slides = [];
                    this.contenido = [];
                    this.addSlide();
                }
                ExpositorComponent.prototype.addSlide = function () {
                    var _this = this;
                    this._contentService.getContenido().subscribe(function (contenido) {
                        _this.contenido = contenido;
                        for (var i = 0; i < _this.contenido.length; i++) {
                            if (_this.contenido[i].dest.destacado) {
                                _this.slides.push({
                                    image: _this.contenido[i].dest.imgn.url,
                                    text: _this.contenido[i].titulo,
                                    date: _this.contenido[i].fecha
                                });
                            }
                        }
                    });
                };
                ExpositorComponent = __decorate([
                    core_1.Component({
                        selector: 'expositor',
                        directives: [ng2_bootstrap_1.CAROUSEL_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        templateUrl: 'app/expositor.component.html',
                        providers: [contenido_service_1.ContenidoService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [contenido_service_1.ContenidoService, router_1.Router])
                ], ExpositorComponent);
                return ExpositorComponent;
            }());
            exports_1("ExpositorComponent", ExpositorComponent);
        }
    }
});
//# sourceMappingURL=expositor.component.js.map