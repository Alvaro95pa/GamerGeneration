System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var prod_URL, comentarios_URL, content_URL, users_URL, modoadminservice;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            prod_URL = 'https://localhost:8443/productos';
            comentarios_URL = 'https://localhost:8443/comentarios';
            content_URL = 'https://localhost:8443/contenido';
            users_URL = 'https://localhost:8443/usuarios';
            modoadminservice = (function () {
                function modoadminservice(http) {
                    this.http = http;
                }
                modoadminservice.prototype.getProductos = function () {
                    var _this = this;
                    return this.http.get(prod_URL + '/all')
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                modoadminservice.prototype.getProductosFiltro = function (juego, series, pelis) {
                    var _this = this;
                    return this.http.get(prod_URL + '/filtro/' + "/" + juego + "/" + series + "/" + pelis)
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                modoadminservice.prototype.getProd = function (id) {
                    var _this = this;
                    return this.http.get(prod_URL + '/' + id)
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                modoadminservice.prototype.deleteProd = function (id) {
                    var _this = this;
                    return this.http.delete(prod_URL + '/' + id)
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                modoadminservice.prototype.pushProd = function (produc) {
                    var _this = this;
                    var body = JSON.stringify(produc);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(prod_URL + '/nuevoproducto', body, options)
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                modoadminservice.prototype.getContenido = function () {
                    var _this = this;
                    return this.http.get(content_URL + '/')
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                modoadminservice.prototype.deleteContenido = function (id) {
                    var _this = this;
                    return this.http.delete(content_URL + '/' + id)
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                modoadminservice.prototype.pushContenido = function (content) {
                    var _this = this;
                    var body = JSON.stringify(content);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(content_URL + '/', body, options)
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                modoadminservice.prototype.getContenidotipo = function (tipo) {
                    var _this = this;
                    return this.http.get(content_URL + '/tipo/' + tipo)
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                modoadminservice.prototype.deleteUser = function (id) {
                    var _this = this;
                    console.log(users_URL + '/' + id);
                    return this.http.delete(users_URL + '/' + id)
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                modoadminservice.prototype.mostrarError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw("Server error (" + error.status + "): " + error.text());
                };
                modoadminservice = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], modoadminservice);
                return modoadminservice;
            }());
            exports_1("modoadminservice", modoadminservice);
        }
    }
});
//# sourceMappingURL=modoadmin.service.js.map