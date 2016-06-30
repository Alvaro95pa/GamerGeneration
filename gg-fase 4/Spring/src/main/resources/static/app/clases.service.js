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
    var BASE_URL, BASE_URL2, clasesservice;
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
            BASE_URL = 'https://localhost:8443/productos';
            BASE_URL2 = 'https://localhost:8443/comentarios';
            clasesservice = (function () {
                function clasesservice(http) {
                    this.http = http;
                }
                clasesservice.prototype.getProductos = function () {
                    var _this = this;
                    return this.http.get(BASE_URL + '/all')
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                clasesservice.prototype.getProdNombre = function (name) {
                    var _this = this;
                    return this.http.get(BASE_URL + '/' + name)
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                clasesservice.prototype.getProductosFiltro = function (juego, series, pelis) {
                    var _this = this;
                    return this.http.get(BASE_URL + '/filtro/' + "/" + juego + "/" + series + "/" + pelis)
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                clasesservice.prototype.getProductosTipo = function (tipo) {
                    var _this = this;
                    return this.http.get(BASE_URL + '/tipoprod/' + tipo)
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                clasesservice.prototype.getProd = function (id) {
                    var _this = this;
                    return this.http.get(BASE_URL + '/id/' + id)
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                clasesservice.prototype.getProdPlataforma = function (tipoprod, plat) {
                    var _this = this;
                    return this.http.get(BASE_URL + '/plataforma/' + tipoprod + '/' + plat)
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                clasesservice.prototype.getProdGenero = function (tipoprod, gen) {
                    var _this = this;
                    return this.http.get(BASE_URL + '/genero/' + tipoprod + '/' + gen)
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                clasesservice.prototype.getcomentarios = function (idjuego) {
                    var _this = this;
                    return this.http.get(BASE_URL + '/idjuego/' + idjuego)
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                clasesservice.prototype.getcomentariosContenido = function (idcontenido) {
                    var _this = this;
                    return this.http.get(BASE_URL2 + '/idcontenido/' + idcontenido)
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                clasesservice.prototype.pushRespuesta = function (comentario) {
                    var _this = this;
                    var body = JSON.stringify(comentario);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(BASE_URL2 + '/nuevocomentario', body, options)
                        .map(function (resp) { return resp.json(); })
                        .catch(function (err) { return _this.mostrarError(err); });
                };
                clasesservice.prototype.actualizarProducto = function (producto) {
                    var _this = this;
                    var añadido = JSON.stringify(producto);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(BASE_URL + "/" + producto.id, añadido, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.mostrarError(error); });
                };
                /*getusuarios(){
                  return Promise.resolve (usuarios_list);
                }
                deleteUser(user:usuario){
                  let position = usuarios_list.indexOf(user);
                  usuarios_list.splice(position,1);
                  console.log(position);
                }*/
                clasesservice.prototype.mostrarError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw("Server error (" + error.status + "): " + error.text());
                };
                clasesservice = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], clasesservice);
                return clasesservice;
            }());
            exports_1("clasesservice", clasesservice);
        }
    }
});
//# sourceMappingURL=clases.service.js.map