System.register(['angular2/core', './admin.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, admin_service_1, router_1;
    var loginadmin;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (admin_service_1_1) {
                admin_service_1 = admin_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            loginadmin = (function () {
                function loginadmin(router, AdminService) {
                    this.router = router;
                    this.AdminService = AdminService;
                    this.error = false;
                }
                loginadmin.prototype.loginadmin = function () {
                    if (this.user == this.admin.usuario && this.pass == this.admin.contrasena) {
                        this.error = false;
                        this.gotoadmin_users();
                    }
                    else {
                        this.error = true;
                    }
                };
                loginadmin.prototype.getadmin = function () {
                    this.admin = this.AdminService.getAdmin();
                };
                loginadmin.prototype.ngOnInit = function () {
                    this.getadmin();
                };
                loginadmin.prototype.gotoadmin_users = function () {
                    var link = ['AdminUsers'];
                    this.router.navigate(link);
                };
                loginadmin.prototype.gotoadmin_contenido = function (opc) {
                    var link = ['AdminContenido', { tipo: opc }];
                    this.router.navigate(link);
                };
                loginadmin.prototype.gotoadmin_productos = function () {
                    var link = ['AdminProductos'];
                    this.router.navigate(link);
                };
                loginadmin.prototype.gotoadmin_salir = function () {
                    var link = ['Princ_Catalogo'];
                    this.router.navigate(link);
                };
                loginadmin = __decorate([
                    core_1.Component({
                        selector: 'loginadmin',
                        template: "\n\n    <div class=\"row admin fondo\">\n      <div class=\"panel panel-default\">\n          <div class=\"panel-body registro\">\n              <center>\n                  <h2>Inicia Sesion</h2>\n                  <div class=\"input-group nuevocontenido\">\n                    <span class=\"input-group-addon\" id=\"basic-addon1\">Usuario: </span>\n                    <input [(ngModel)]=\"user\" type=\"text\" class=\"form-control\" placeholder=\"Inserte un usuario\" aria-describedby=\"basic-addon1\">\n                  </div>\n                  <div class=\"col-sm-12 input-group nuevocontenido\">\n                    <span class=\"input-group-addon\" id=\"basic-addon1\">Contrase\u00F1a:</span>\n                    <input [(ngModel)]=\"pass\" type=\"password\" class=\"form-control\" placeholder=\"Inserte una contrase\u00F1a\" aria-describedby=\"basic-addon1\">\n                  </div>\n                  <p *ngIf=\"error\">Datos introducidos incorrectos</p>\n                  <button (click)=\"loginadmin()\" class=\"btn btn-info\">Conectarse</button>\n\n              </center>\n          </div>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, admin_service_1.AdminService])
                ], loginadmin);
                return loginadmin;
            }());
            exports_1("loginadmin", loginadmin);
        }
    }
});
/*

*/
//# sourceMappingURL=adminlogin.component.js.map