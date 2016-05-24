System.register(['angular2/core', 'angular2/router', './clases.service', './modoadmin.service', './admin.service', './contenido.service', './prod-detalle.component', './list-productos.component', './list-productosconfiltermenu.component', './informacion-prod.component', './list-users.component', './list-contenido.component', './anadircontenido.component', './anadirproducto.component', './list-objetos.component', './adminlogin.component'], function(exports_1, context_1) {
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
    var core_1, router_1, clases_service_1, modoadmin_service_1, admin_service_1, contenido_service_1, prod_detalle_component_1, list_productos_component_1, list_productosconfiltermenu_component_1, informacion_prod_component_1, list_users_component_1, list_contenido_component_1, anadircontenido_component_1, anadirproducto_component_1, list_objetos_component_1, adminlogin_component_1;
    var catalogoApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (clases_service_1_1) {
                clases_service_1 = clases_service_1_1;
            },
            function (modoadmin_service_1_1) {
                modoadmin_service_1 = modoadmin_service_1_1;
            },
            function (admin_service_1_1) {
                admin_service_1 = admin_service_1_1;
            },
            function (contenido_service_1_1) {
                contenido_service_1 = contenido_service_1_1;
            },
            function (prod_detalle_component_1_1) {
                prod_detalle_component_1 = prod_detalle_component_1_1;
            },
            function (list_productos_component_1_1) {
                list_productos_component_1 = list_productos_component_1_1;
            },
            function (list_productosconfiltermenu_component_1_1) {
                list_productosconfiltermenu_component_1 = list_productosconfiltermenu_component_1_1;
            },
            function (informacion_prod_component_1_1) {
                informacion_prod_component_1 = informacion_prod_component_1_1;
            },
            function (list_users_component_1_1) {
                list_users_component_1 = list_users_component_1_1;
            },
            function (list_contenido_component_1_1) {
                list_contenido_component_1 = list_contenido_component_1_1;
            },
            function (anadircontenido_component_1_1) {
                anadircontenido_component_1 = anadircontenido_component_1_1;
            },
            function (anadirproducto_component_1_1) {
                anadirproducto_component_1 = anadirproducto_component_1_1;
            },
            function (list_objetos_component_1_1) {
                list_objetos_component_1 = list_objetos_component_1_1;
            },
            function (adminlogin_component_1_1) {
                adminlogin_component_1 = adminlogin_component_1_1;
            }],
        execute: function() {
            catalogoApp = (function () {
                function catalogoApp(router, clasesservice) {
                    this.router = router;
                    this.clasesservice = clasesservice;
                }
                catalogoApp.prototype.gotoregistro = function () {
                    var link = ['Registrarse'];
                    this.router.navigate(link);
                };
                catalogoApp.prototype.gotoadmin_users = function () {
                    var link = ['AdminLogin'];
                    this.router.navigate(link);
                };
                catalogoApp.prototype.gotocatalogo = function () {
                    var link = ['Princ_Catalogo'];
                    this.router.navigate(link);
                };
                catalogoApp = __decorate([
                    core_1.Component({
                        selector: 'catalogo',
                        template: "\n       <div class=\"container\">\n        <a (click)=\"gotoadmin_users()\">Admin</a>\n        <a (click)=\"gotocatalogo()\">catalogo</a>\n        <router-outlet></router-outlet>\n       </div>\n\n\n  ",
                        providers: [router_1.ROUTER_PROVIDERS, modoadmin_service_1.modoadminservice, clases_service_1.clasesservice, contenido_service_1.ContenidoService, admin_service_1.AdminService],
                        styleUrls: ['style_j.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, prod_detalle_component_1.proddetalleComponent],
                        pipes: [],
                    }),
                    router_1.RouteConfig([
                        { path: '/', redirectTo: ['Princ_Catalogo'] },
                        {
                            path: '/Catalogo/1/',
                            name: 'Princ_Catalogo',
                            component: list_productos_component_1.listproductoscomponent,
                        },
                        {
                            path: '/Catalogo/:tipoprod/:idprod',
                            name: 'Detalleprod',
                            component: informacion_prod_component_1.informacionprod
                        },
                        {
                            path: '/Catalogo/:tipoprod/:tipo/:filtro',
                            name: 'FiltroJ',
                            component: list_productosconfiltermenu_component_1.listproductosconfiltermenucomponent,
                        },
                        {
                            path: '/Catalogo/:tipoprod',
                            name: 'SelecCatalogo',
                            component: list_productos_component_1.listproductoscomponent,
                        },
                        {
                            path: '/Admin',
                            name: 'AdminLogin',
                            component: adminlogin_component_1.loginadmin
                        },
                        {
                            path: '/Admin/Users',
                            name: 'AdminUsers',
                            component: list_users_component_1.listusers
                        },
                        {
                            path: '/Admin/:tipo',
                            name: 'AdminContenido',
                            component: list_contenido_component_1.listcontenido
                        },
                        {
                            path: '/Admin/:tipo/:nuevo',
                            name: 'AdminNewContenido',
                            component: anadircontenido_component_1.anadircontenido
                        },
                        {
                            path: '/Admin/Productos',
                            name: 'AdminProductos',
                            component: list_objetos_component_1.listobjetos
                        },
                        {
                            path: '/Admin/Productos/AñadirProducto',
                            name: 'AdminNewProducto',
                            component: anadirproducto_component_1.anadirproducto
                        }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, clases_service_1.clasesservice])
                ], catalogoApp);
                return catalogoApp;
            }());
            exports_1("catalogoApp", catalogoApp);
        }
    }
});
//# sourceMappingURL=catalogo.js.map