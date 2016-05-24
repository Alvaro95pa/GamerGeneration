System.register(['./mock-sesion', 'angular2/core'], function(exports_1, context_1) {
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
    var mock_sesion_1, core_1;
    var SesionService;
    return {
        setters:[
            function (mock_sesion_1_1) {
                mock_sesion_1 = mock_sesion_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SesionService = (function () {
                function SesionService() {
                }
                SesionService.prototype.getSesion = function () {
                    return Promise.resolve(mock_sesion_1.SESION);
                };
                SesionService.prototype.setSesion = function (sesion) {
                    mock_sesion_1.SESION.id = sesion.id;
                    mock_sesion_1.SESION.usuario = sesion.usuario;
                    mock_sesion_1.SESION.contrasena = sesion.contrasena;
                    mock_sesion_1.SESION.user = sesion.user;
                    mock_sesion_1.SESION.pass = sesion.pass;
                    mock_sesion_1.SESION.loged = sesion.loged;
                };
                SesionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SesionService);
                return SesionService;
            }());
            exports_1("SesionService", SesionService);
        }
    }
});
//# sourceMappingURL=sesion.service.js.map