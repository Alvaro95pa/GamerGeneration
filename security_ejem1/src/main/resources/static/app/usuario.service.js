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
    var BASE_URL, UsuarioService;
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
            BASE_URL = 'https://localhost:8443/usuarios/';
            UsuarioService = (function () {
                //Constructor
                function UsuarioService(http) {
                    this.http = http;
                }
                //Metodos
                //Obtener todos los usuarios
                UsuarioService.prototype.getUsuarios = function () {
                    var _this = this;
                    return this.http.get(BASE_URL)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.handleError(error); });
                };
                //Obtener un usuario
                UsuarioService.prototype.getUsuario = function (id) {
                    var _this = this;
                    return this.http.get(BASE_URL + id)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.handleError(error); });
                };
                //Cambiar los datos personales del usuario
                UsuarioService.prototype.setPersonales = function (usuario) {
                    var _this = this;
                    var cambio = JSON.stringify(usuario);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(BASE_URL + usuario.id, cambio, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.handleError(error); });
                };
                //Cambiar la privacidad de un usuario
                UsuarioService.prototype.setPrivacidad = function (usuario) {
                    var _this = this;
                    var cambio = JSON.stringify(usuario);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(BASE_URL + usuario.id, cambio, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.handleError(error); });
                };
                //Añadir usuario
                UsuarioService.prototype.addUsuario = function (usuario) {
                    var _this = this;
                    var añadido = JSON.stringify(usuario);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(BASE_URL, añadido, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.handleError(error); });
                };
                //Eliminar usuario
                UsuarioService.prototype.removeUsuario = function (usuario) {
                    var _this = this;
                    return this.http.delete(BASE_URL + usuario.id)
                        .map(function (response) { return undefined; })
                        .catch(function (error) { return _this.handleError(error); });
                };
                //Añadir amigo al usuario
                UsuarioService.prototype.addAmigo = function (usuario) {
                    var _this = this;
                    var cambio = JSON.stringify(usuario);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(BASE_URL + usuario.id, cambio, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.handleError(error); });
                };
                //Borrar amigo del usuario
                UsuarioService.prototype.remAmigo = function (usuario) {
                    var _this = this;
                    var cambio = JSON.stringify(usuario);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(BASE_URL + usuario.id, cambio, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.handleError(error); });
                };
                //Cambiar favorito del usuario
                UsuarioService.prototype.setFavorito = function (usuario) {
                    var _this = this;
                    var cambio = JSON.stringify(usuario);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(BASE_URL + usuario.id, cambio, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.handleError(error); });
                };
                //Borrar favoritos
                UsuarioService.prototype.removeFav = function (usuario) {
                    var _this = this;
                    var cambio = JSON.stringify(usuario);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(BASE_URL + usuario.id, cambio, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.handleError(error); });
                };
                //Añadir contenido al usuario
                UsuarioService.prototype.addContenido = function (producto, usuario) {
                    var _this = this;
                    usuario.coleccion.push(producto);
                    if (producto.tipoprod == 3) {
                        usuario.nPelis = usuario.nPelis + 1;
                    }
                    if (producto.tipoprod == 2) {
                        usuario.nSeries = usuario.nSeries + 1;
                    }
                    if (producto.tipoprod == 1) {
                        usuario.nJuegos = usuario.nJuegos + 1;
                    }
                    var cambio = JSON.stringify(usuario);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(BASE_URL + usuario.id, cambio, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.handleError(error); });
                };
                //Eliminar contenido del usuario
                UsuarioService.prototype.removeContenido = function (usuario) {
                    var _this = this;
                    var cambio = JSON.stringify(usuario);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(BASE_URL + usuario.id, cambio, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.handleError(error); });
                };
                //handleError
                UsuarioService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw("Server error (" + error.status + "): " + error.text());
                };
                UsuarioService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UsuarioService);
                return UsuarioService;
            }());
            exports_1("UsuarioService", UsuarioService);
        }
    }
});
//# sourceMappingURL=usuario.service.js.map