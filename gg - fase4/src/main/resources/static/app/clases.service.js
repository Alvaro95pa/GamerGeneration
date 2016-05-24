System.register(['angular2/core', './mock'], function(exports_1, context_1) {
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
    var core_1, mock_1;
    var clasesservice;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_1_1) {
                mock_1 = mock_1_1;
            }],
        execute: function() {
            clasesservice = (function () {
                function clasesservice() {
                }
                clasesservice.prototype.getProductos = function () {
                    return Promise.resolve(mock_1.prod_list);
                };
                clasesservice.prototype.getProductosFiltro = function (juego, series, pelis) {
                    return Promise.resolve(mock_1.prod_list).then(function (list) { return list.filter(function (prod) { return prod.tipoprod === juego || prod.tipoprod === series || prod.tipoprod === pelis; }); });
                };
                clasesservice.prototype.getProductosTipo = function (tipo) {
                    return Promise.resolve(mock_1.prod_list).then(function (list) { return list.filter(function (prod) { return prod.tipoprod === tipo; }); });
                };
                clasesservice.prototype.getProd = function (id) {
                    return Promise.resolve(mock_1.prod_list).then(function (list) { return list.filter(function (prod) { return prod.id === id; }); });
                };
                clasesservice.prototype.getProdNombre = function (name) {
                    return Promise.resolve(mock_1.prod_list).then(function (list) { return list.filter(function (prod) { return prod.name === name; })[0]; });
                };
                clasesservice.prototype.getProdPlataforma = function (plat) {
                    return Promise.resolve(mock_1.prod_list).then(function (list) { return list.filter(function (prod) { return prod.plataforma === plat; }); });
                };
                clasesservice.prototype.getProdGenero = function (gen) {
                    return Promise.resolve(mock_1.prod_list).then(function (list) { return list.filter(function (prod) { return prod.genero === gen; }); });
                };
                clasesservice.prototype.getinfo = function (id) {
                    return Promise.resolve(mock_1.infolista).then(function (list) { return list.filter(function (prod) { return prod.id === id; }); });
                };
                clasesservice.prototype.getcomentarios = function (idjuego) {
                    return Promise.resolve(mock_1.comentarios_list).then(function (list) { return list.filter(function (prod) { return prod.idjuego === idjuego; }); });
                };
                clasesservice.prototype.getcomentariosContenido = function (idcontenido) {
                    return Promise.resolve(mock_1.comentarios_list).then(function (list) { return list.filter(function (prod) { return prod.idcontenido === idcontenido; }); });
                };
                clasesservice.prototype.getusuarios = function () {
                    return Promise.resolve(mock_1.usuarios_list);
                };
                clasesservice.prototype.deleteUser = function (user) {
                    var position = mock_1.usuarios_list.indexOf(user);
                    mock_1.usuarios_list.splice(position, 1);
                    console.log(position);
                };
                clasesservice.prototype.pushRespuesta = function (comentario) {
                    mock_1.comentarios_list.push(comentario);
                };
                clasesservice = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], clasesservice);
                return clasesservice;
            }());
            exports_1("clasesservice", clasesservice);
        }
    }
});
//# sourceMappingURL=clases.service.js.map