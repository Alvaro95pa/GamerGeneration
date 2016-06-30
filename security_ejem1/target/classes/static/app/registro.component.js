System.register(['angular2/core', './usuario.service'], function(exports_1, context_1) {
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
    var core_1, usuario_service_1;
    var registrar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (usuario_service_1_1) {
                usuario_service_1 = usuario_service_1_1;
            }],
        execute: function() {
            registrar = (function () {
                //Métodos
                function registrar(_usuarioService) {
                    this._usuarioService = _usuarioService;
                    this.boton = false;
                    this.error = false;
                    this.registrado = false;
                }
                registrar.prototype.registrar = function () {
                    this.nuevo_usuario = {
                        nombre: "",
                        apellidos: "",
                        nacionalidad: "",
                        cumpleanos: "",
                        roles: ['ROLE_USER'],
                        usuario: this.usuario,
                        contrasena: this.contrasena,
                        correo: this.correo,
                        imagen: null,
                        nAmigos: 0,
                        nPelis: 0,
                        nSeries: 0,
                        nJuegos: 0,
                        ultima: "hoy",
                        tUsuario: "hoy",
                        fPeli: null,
                        fSerie: null,
                        fJuego: null,
                        pPerfilTodos: true,
                        cPerfilTodos: true,
                        aPerfilTodos: true,
                        coleccion: [],
                        amigos: []
                    };
                    this._usuarioService.addUsuario(this.nuevo_usuario).subscribe();
                    this.registrado = true;
                };
                registrar = __decorate([
                    core_1.Component({
                        selector: 'registro-component',
                        templateUrl: 'app/registro.component.html'
                    }), 
                    __metadata('design:paramtypes', [usuario_service_1.UsuarioService])
                ], registrar);
                return registrar;
            }());
            exports_1("registrar", registrar);
        }
    }
});
//# sourceMappingURL=registro.component.js.map