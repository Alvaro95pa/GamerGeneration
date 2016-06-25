System.register(['angular2/core', './clases.service', './modoadmin.service', './usuario.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, clases_service_1, modoadmin_service_1, usuario_service_1, router_1, router_2;
    var listusers;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (clases_service_1_1) {
                clases_service_1 = clases_service_1_1;
            },
            function (modoadmin_service_1_1) {
                modoadmin_service_1 = modoadmin_service_1_1;
            },
            function (usuario_service_1_1) {
                usuario_service_1 = usuario_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            listusers = (function () {
                function listusers(router, UsuarioService, adminservice, clasesservice, _routeParams) {
                    this.router = router;
                    this.UsuarioService = UsuarioService;
                    this.adminservice = adminservice;
                    this.clasesservice = clasesservice;
                    this._routeParams = _routeParams;
                }
                listusers.prototype.onselect = function (user) {
                    this.selectedUser = user;
                };
                listusers.prototype.eliminarUser = function (user) {
                    this.adminservice.deleteUser(user);
                    this.getusuarios();
                };
                listusers.prototype.getusuarios = function () {
                    var _this = this;
                    this.UsuarioService.getUsuarios().subscribe(function (users) { return _this.list_usuarios = users; });
                };
                listusers.prototype.getopcion = function () {
                    var opcion = this._routeParams.get('opcion');
                    console.log(opcion);
                    this.tipoopcion = 1;
                };
                listusers.prototype.ngOnInit = function () {
                    this.getopcion();
                    this.getusuarios();
                    console.log(this.tipoopcion);
                };
                listusers.prototype.gotoadmin_users = function () {
                    var link = ['AdminUsers'];
                    this.router.navigate(link);
                };
                listusers.prototype.gotoadmin_contenido = function (opc) {
                    var link = ['AdminContenido', { tipo: opc }];
                    this.router.navigate(link);
                };
                listusers.prototype.gotoadmin_productos = function () {
                    var link = ['AdminProductos'];
                    this.router.navigate(link);
                };
                listusers.prototype.gotoadmin_salir = function () {
                    var link = ['Princ_Catalogo'];
                    this.router.navigate(link);
                };
                listusers = __decorate([
                    core_1.Component({
                        selector: 'listusers',
                        template: "\n\n    <div class=\"row admin fondo\">\n      <ul class=\"nav nav-pills nav-stacked col-sm-3 contorno\">\n        <li  [class.selected]=\"tipoopcion==1\" (click)=\"gotoadmin_users('Users')\"><a >Usuarios</a></li>\n        <li  [class.selected]=\"tipoopcion==2\" (click)=\"gotoadmin_contenido('Noticia')\"><a >Noticias</a></li>\n        <li  [class.selected]=\"tipoopcion==3\" (click)=\"gotoadmin_contenido('An\u00E1lisis')\"><a >Analisis</a></li>\n        <li  [class.selected]=\"tipoopcion==4\" (click)=\"gotoadmin_productos()\"><a >Productos</a></li>\n        <li  (click)=\"gotoadmin_salir()\"><a >Salir</a></li>\n      </ul>\n      <div>\n        <div class=\"admin_info infor_user col-sm-9 col-xs-12\" *ngFor=\"#user of list_usuarios\" (click)=\"onselect(user)\">\n          <div class=\"col-sm-2 col-xs-2\">\n            <img src={{user.imagen}}>\n          </div>\n          <div class=\"col-sm-6 col-xs-6\">\n            <h3 class=\"col-sm-12\">{{user.usuario}}</h3>\n            <div *ngIf=\"user === selectedUser\">\n              <p class=\"col-sm-12\">Nombre: {{user.nombre}}</p>\n              <p class=\"col-sm-12\">Cumplea\u00F1os: {{user.cumpleanos}}</p>\n              <p class=\"col-sm-12\">Correo: {{user.correo}}</p>\n            </div>\n          </div>\n          <button *ngIf=\"user === selectedUser\" class=\"btn col-sm-4 col-xs-4\"  >Editar</button>\n          <button (click)=\"eliminarUser(user)\" class=\"btn col-sm-4 col-xs-4\"  >Eliminar</button>\n        </div>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, usuario_service_1.UsuarioService, modoadmin_service_1.modoadminservice, clases_service_1.clasesservice, router_2.RouteParams])
                ], listusers);
                return listusers;
            }());
            exports_1("listusers", listusers);
        }
    }
});
/*

*/
//# sourceMappingURL=list-users.component.js.map