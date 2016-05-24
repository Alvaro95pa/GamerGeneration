System.register(['angular2/core', 'rxjs/Observable', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, Observable_1, http_1;
    var BASE_URL, ContenidoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            BASE_URL = 'http://127.0.0.1:8443/contenido/';
            ContenidoService = (function () {
                function ContenidoService(http) {
                    this.http = http;
                }
                ContenidoService.prototype.getContenido = function () {
                    var _this = this;
                    return this.http.get(BASE_URL)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.handleError(error); });
                };
                ContenidoService.prototype.getContenidoId = function (id) {
                    var _this = this;
                    return this.http.get(BASE_URL + id)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.handleError(error); });
                };
                ContenidoService.prototype.getContenidoTipo = function (tipo) {
                    var _this = this;
                    return this.http.get(BASE_URL + tipo)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.handleError(error); });
                };
                //Subida de contenido
                ContenidoService.prototype.addContenido = function (contenido) {
                    var _this = this;
                    var añadido = JSON.stringify(contenido);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(BASE_URL, añadido, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.handleError(error); });
                };
                //Borrado de contenido
                ContenidoService.prototype.removeUsuario = function (contenido) {
                    var _this = this;
                    return this.http.delete(BASE_URL + contenido.id)
                        .map(function (response) { return undefined; })
                        .catch(function (error) { return _this.handleError(error); });
                };
                //handleError
                ContenidoService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw("Server error (" + error.status + "): " + error.text());
                };
                ContenidoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ContenidoService);
                return ContenidoService;
            }());
            exports_1("ContenidoService", ContenidoService);
        }
    }
});
//# sourceMappingURL=contenido.service.js.map