System.register(['angular2/core', 'angular2/router', 'angular2/http', './footer.component', './home', './analisis', './noticias.component', './sesion.service', './usuario.service', './analisis-details', './noticia-detail.component', './registro.component', './cuenta.component', './contenido.component', './clases.service', './modoadmin.service', './admin.service', './amigos.component', './ajustes.component', './gente.component', './contenido.service', './list-productos.component', './list-productosconfiltermenu.component', './informacion-prod.component', './list-users.component', './list-contenido.component', './anadircontenido.component', './anadirproducto.component', './list-objetos.component', './adminlogin.component'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, footer_component_1, home_1, analisis_1, noticias_component_1, sesion_service_1, usuario_service_1, analisis_details_1, noticia_detail_component_1, registro_component_1, cuenta_component_1, contenido_component_1, clases_service_1, modoadmin_service_1, admin_service_1, amigos_component_1, ajustes_component_1, gente_component_1, contenido_service_1, list_productos_component_1, list_productosconfiltermenu_component_1, informacion_prod_component_1, list_users_component_1, list_contenido_component_1, anadircontenido_component_1, anadirproducto_component_1, list_objetos_component_1, adminlogin_component_1;
    var CabeceraComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (analisis_1_1) {
                analisis_1 = analisis_1_1;
            },
            function (noticias_component_1_1) {
                noticias_component_1 = noticias_component_1_1;
            },
            function (sesion_service_1_1) {
                sesion_service_1 = sesion_service_1_1;
            },
            function (usuario_service_1_1) {
                usuario_service_1 = usuario_service_1_1;
            },
            function (analisis_details_1_1) {
                analisis_details_1 = analisis_details_1_1;
            },
            function (noticia_detail_component_1_1) {
                noticia_detail_component_1 = noticia_detail_component_1_1;
            },
            function (registro_component_1_1) {
                registro_component_1 = registro_component_1_1;
            },
            function (cuenta_component_1_1) {
                cuenta_component_1 = cuenta_component_1_1;
            },
            function (contenido_component_1_1) {
                contenido_component_1 = contenido_component_1_1;
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
            function (amigos_component_1_1) {
                amigos_component_1 = amigos_component_1_1;
            },
            function (ajustes_component_1_1) {
                ajustes_component_1 = ajustes_component_1_1;
            },
            function (gente_component_1_1) {
                gente_component_1 = gente_component_1_1;
            },
            function (contenido_service_1_1) {
                contenido_service_1 = contenido_service_1_1;
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
            CabeceraComponent = (function () {
                function CabeceraComponent(_sesionService, _usuarioService) {
                    this._sesionService = _sesionService;
                    this._usuarioService = _usuarioService;
                    this.usr = [];
                    this.visible = false;
                }
                CabeceraComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._sesionService.getSesion().then(function (sesion) {
                        _this.sesion = sesion;
                        _this.visible = true;
                    });
                };
                ;
                CabeceraComponent.prototype.inicioSesion = function () {
                    this.usr = this._usuarioService.getUsuarios2();
                    for (var i = 0; i < this.usr.length; i++) {
                        if ((this.sesion.usuario == this.usr[i].usuario) && (this.sesion.contrasena == this.usr[i].contrasena)) {
                            this.sesion.user = true;
                            this.sesion.pass = true;
                            this.sesion.imagen = this.usr[i].imagen;
                            this.sesion.id = this.usr[i].id;
                        }
                        else if ((this.sesion.usuario == this.usr[i].usuario) && (this.sesion.contrasena != this.usr[i].contrasena)) {
                            this.sesion.user = true;
                            this.sesion.pass = false;
                        }
                        else if ((this.sesion.usuario != this.usr[i].usuario) && (this.sesion.contrasena == this.usr[i].contrasena)) {
                            this.sesion.pass = true;
                            this.sesion.user = false;
                        }
                    }
                    this.sesion.loged = true;
                    this._sesionService.setSesion(this.sesion);
                };
                CabeceraComponent.prototype.cierreSesion = function () {
                    this.sesion.user = false;
                    this.sesion.pass = false;
                    this.sesion.usuario = '';
                    this.sesion.contrasena = '';
                    this.sesion.loged = false;
                    this._sesionService.setSesion(this.sesion);
                };
                CabeceraComponent = __decorate([
                    core_1.Component({
                        selector: 'cabecera',
                        templateUrl: 'app/cabecera.component.html',
                        directives: [footer_component_1.FooterComponent, home_1.Home, router_1.ROUTER_DIRECTIVES, cuenta_component_1.CuentaComponent, amigos_component_1.AmigosComponent, ajustes_component_1.AjustesComponent],
                        providers: [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, sesion_service_1.SesionService, usuario_service_1.UsuarioService, modoadmin_service_1.modoadminservice, clases_service_1.clasesservice, contenido_service_1.ContenidoService, admin_service_1.AdminService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/home',
                            name: 'Home',
                            component: home_1.Home,
                            useAsDefault: true
                        },
                        {
                            path: '/analisis',
                            name: 'Analisis',
                            component: analisis_1.Analisis
                        },
                        {
                            path: '/analisis/:id',
                            name: 'AnalisisDetalles',
                            component: analisis_details_1.AnalisisDetails
                        },
                        {
                            path: '/noticias',
                            name: 'Noticias',
                            component: noticias_component_1.Noticias
                        },
                        {
                            path: '/noticias/:id',
                            name: 'NoticiaDetails',
                            component: noticia_detail_component_1.NoticiaDetails
                        },
                        {
                            path: '/registro',
                            name: 'Registro',
                            component: registro_component_1.registrar
                        },
                        {
                            path: '/Cuenta/:id',
                            name: 'Cuenta',
                            component: cuenta_component_1.CuentaComponent,
                        },
                        {
                            path: '/ajustes/:id',
                            name: 'Ajustes',
                            component: ajustes_component_1.AjustesComponent,
                        },
                        {
                            path: '/amigos/:id',
                            name: 'Amigos',
                            component: amigos_component_1.AmigosComponent,
                        },
                        {
                            path: '/contenido/:id',
                            name: 'Contenido',
                            component: contenido_component_1.ContenidoComponent,
                        },
                        {
                            path: '/gente',
                            name: 'Gente',
                            component: gente_component_1.GenteComponent,
                        },
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
                    __metadata('design:paramtypes', [sesion_service_1.SesionService, usuario_service_1.UsuarioService])
                ], CabeceraComponent);
                return CabeceraComponent;
            }());
            exports_1("CabeceraComponent", CabeceraComponent);
        }
    }
});
//# sourceMappingURL=cabecera.component.js.map