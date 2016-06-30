System.register(['angular2/core', './usuario.service', "./multipart-item", "./multipart-uploader", 'angular2/router', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, usuario_service_1, multipart_item_1, multipart_uploader_1, router_1, http_1;
    var registrar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (usuario_service_1_1) {
                usuario_service_1 = usuario_service_1_1;
            },
            function (multipart_item_1_1) {
                multipart_item_1 = multipart_item_1_1;
            },
            function (multipart_uploader_1_1) {
                multipart_uploader_1 = multipart_uploader_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            registrar = (function () {
                //Métodos
                function registrar(http, _usuarioService, router) {
                    this.http = http;
                    this._usuarioService = _usuarioService;
                    this.router = router;
                    this.boton = false;
                    this.error = false;
                    this.registrado = false;
                }
                //METODOS PARA IMAGENES
                registrar.prototype.loadImages = function () {
                    return this.http.get("/images").map(function (response) { return response.json(); });
                };
                registrar.prototype.buscarImage = function (id) {
                    return this.http.get("/image/" + id).map(function (response) { return response.json(); });
                };
                registrar.prototype.selectFile = function ($event) {
                    this.img_perfil = $event.target.files[0];
                    console.debug("Selected file: " + this.img_perfil.name + " type:" + this.img_perfil.size + " size:" + this.img_perfil.size);
                };
                registrar.prototype.upload = function () {
                    var _this = this;
                    console.debug("Uploading file...");
                    this.descripcion = "perfil";
                    if (this.img_perfil == null || this.descripcion == null) {
                        console.error("You have to select a file and set a description.");
                        return;
                    }
                    var formData = new FormData();
                    formData.append("description", this.descripcion);
                    formData.append("file", this.img_perfil);
                    var multipartItem = new multipart_item_1.MultipartItem(new multipart_uploader_1.MultipartUploader({ url: '/image/upload' }));
                    multipartItem.formData = formData;
                    multipartItem.callback = function (data, status, headers) {
                        if (status == 200) {
                            console.debug("File has been uploaded");
                            _this.loadImages();
                        }
                        else {
                            console.error("Error uploading file");
                        }
                    };
                    multipartItem.upload();
                    this.loadImages().subscribe(function (id) {
                        _this.auxid = id;
                        console.log(_this.auxid);
                    });
                };
                registrar.prototype.registrar = function () {
                    var _this = this;
                    this.buscarImage(this.auxid).subscribe(function (image) {
                        _this.img = image;
                        _this.nuevo_usuario = {
                            nombre: "",
                            apellidos: "",
                            nacionalidad: "",
                            cumpleanos: "",
                            roles: ['ROLE_USER'],
                            usuario: _this.usuario,
                            contrasena: _this.contrasena,
                            correo: _this.correo,
                            imagen: _this.img,
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
                            coleccion: _this.coleccion,
                            amigos: _this.amigos
                        };
                        _this._usuarioService.addUsuario(_this.nuevo_usuario).subscribe(function (usr) { return _this.gotoHome(); });
                        _this.registrado = true;
                    });
                };
                registrar.prototype.gotoHome = function () {
                    var link = ['Home'];
                    this.router.navigate(link);
                };
                registrar = __decorate([
                    core_1.Component({
                        selector: 'registro-component',
                        templateUrl: 'app/registro.component.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, usuario_service_1.UsuarioService, router_1.Router])
                ], registrar);
                return registrar;
            }());
            exports_1("registrar", registrar);
        }
    }
});
//# sourceMappingURL=registro.component.js.map