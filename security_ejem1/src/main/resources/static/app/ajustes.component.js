System.register(['angular2/core', './menu.component', './seleccion.component', './usuario.service', 'angular2/router', './sesion.service'], function(exports_1, context_1) {
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
    var core_1, menu_component_1, seleccion_component_1, usuario_service_1, router_1, sesion_service_1;
    var AjustesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (seleccion_component_1_1) {
                seleccion_component_1 = seleccion_component_1_1;
            },
            function (usuario_service_1_1) {
                usuario_service_1 = usuario_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sesion_service_1_1) {
                sesion_service_1 = sesion_service_1_1;
            }],
        execute: function() {
            AjustesComponent = (function () {
                //Metodos
                function AjustesComponent(_usuarioService, _routeParams, _sesionService) {
                    this._usuarioService = _usuarioService;
                    this._routeParams = _routeParams;
                    this._sesionService = _sesionService;
                    this.visible = false;
                    this.datos = false;
                    this.contra = false;
                    this.preContra = 'nada';
                }
                AjustesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._usuarioService.getUsuario(id).subscribe(function (usuario) {
                        _this.usuario = usuario;
                        _this.preContra = _this.usuario.contrasena;
                        _this.actual = _this._sesionService.getSesion().usuario;
                        _this.visible = true;
                    });
                };
                AjustesComponent.prototype.notificar = function (campo) {
                    if (campo == 'datos') {
                        this.datos = true;
                    }
                    if (campo == 'contra') {
                        this.contra = true;
                    }
                };
                AjustesComponent.prototype.prepaContra = function () {
                    this.preContra = this.usuario.contrasena;
                };
                AjustesComponent.prototype.noNotificar = function (campo) {
                    if (campo == 'datos') {
                        this.datos = false;
                    }
                    if (campo == 'contra') {
                        this.contra = false;
                    }
                };
                AjustesComponent.prototype.guardarDatosP = function () {
                    this._usuarioService.setPersonales(this.usuario);
                };
                AjustesComponent.prototype.guardarContra = function (pass) {
                    this.usuario.contrasena = pass;
                    this._usuarioService.setContraseña(this.usuario);
                };
                AjustesComponent.prototype.cambiaEstado = function (estado, sitio) {
                    if (sitio == 'perfil') {
                        this.usuario.pPerfilTodos = estado;
                        this._usuarioService.setPrivacidad(this.usuario);
                    }
                    if (sitio == 'contenido') {
                        this.usuario.cPerfilTodos = estado;
                        this._usuarioService.setPrivacidad(this.usuario);
                    }
                    if (sitio == 'amigos') {
                        this.usuario.aPerfilTodos = estado;
                        this._usuarioService.setPrivacidad(this.usuario);
                    }
                };
                AjustesComponent = __decorate([
                    core_1.Component({
                        selector: 'ajustes-component',
                        templateUrl: 'app/ajustes.component.html',
                        directives: [menu_component_1.MenuComponent, seleccion_component_1.SeleccionComponent],
                        providers: [usuario_service_1.UsuarioService, sesion_service_1.SesionService]
                    }), 
                    __metadata('design:paramtypes', [usuario_service_1.UsuarioService, router_1.RouteParams, sesion_service_1.SesionService])
                ], AjustesComponent);
                return AjustesComponent;
            }());
            exports_1("AjustesComponent", AjustesComponent);
        }
    }
});
//# sourceMappingURL=ajustes.component.js.map