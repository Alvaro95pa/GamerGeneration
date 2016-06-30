System.register(['angular2/core', './menu.component', './seleccion.component', './usuario.service', 'angular2/router', './sesion.service', 'angular2/http', "./multipart-item", "./multipart-uploader"], function(exports_1, context_1) {
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
    var core_1, menu_component_1, seleccion_component_1, usuario_service_1, router_1, sesion_service_1, http_1, multipart_item_1, multipart_uploader_1;
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
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (multipart_item_1_1) {
                multipart_item_1 = multipart_item_1_1;
            },
            function (multipart_uploader_1_1) {
                multipart_uploader_1 = multipart_uploader_1_1;
            }],
        execute: function() {
            AjustesComponent = (function () {
                //Metodos
                function AjustesComponent(http, _usuarioService, _routeParams, _sesionService) {
                    this.http = http;
                    this._usuarioService = _usuarioService;
                    this._routeParams = _routeParams;
                    this._sesionService = _sesionService;
                    this.visible = false;
                    this.datos = false;
                }
                AjustesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._usuarioService.getUsuario(id).subscribe(function (usuario) {
                        _this.usuario = usuario;
                        _this._sesionService.getSesion().then(function (actual) {
                            _this.actual = actual.usuario;
                            _this.visible = true;
                        });
                    });
                };
                //METODOS PARA IMAGENES
                AjustesComponent.prototype.loadImages = function () {
                    return this.http.get("/images").map(function (response) { return response.json(); });
                };
                AjustesComponent.prototype.buscarImage = function (id) {
                    return this.http.get("/image/" + id).map(function (response) { return response.json(); });
                };
                AjustesComponent.prototype.selectFile = function ($event) {
                    this.img_perfil = $event.target.files[0];
                    console.debug("Selected file: " + this.img_perfil.name + " type:" + this.img_perfil.size + " size:" + this.img_perfil.size);
                };
                AjustesComponent.prototype.upload = function () {
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
                        console.log(id);
                        _this.auxid = id;
                    });
                };
                AjustesComponent.prototype.guardarImg = function () {
                    var _this = this;
                    this.buscarImage(this.auxid).subscribe(function (image) {
                        _this.usuario.imagen = image;
                        _this.guardarDatosP();
                        console.log(_this.usuario.imagen);
                    });
                };
                AjustesComponent.prototype.notificar = function (campo) {
                    if (campo == 'datos') {
                        this.datos = true;
                    }
                };
                AjustesComponent.prototype.noNotificar = function (campo) {
                    if (campo == 'datos') {
                        this.datos = false;
                    }
                };
                AjustesComponent.prototype.guardarDatosP = function () {
                    this._usuarioService.setPersonales(this.usuario).subscribe(function (usuario) { return console.log(usuario); });
                };
                AjustesComponent.prototype.cambiaEstado = function (estado, sitio) {
                    if (sitio == 'perfil') {
                        this.usuario.pPerfilTodos = estado;
                        this._usuarioService.setPrivacidad(this.usuario).subscribe(function (usuario) { return console.log(usuario); });
                    }
                    if (sitio == 'contenido') {
                        this.usuario.cPerfilTodos = estado;
                        this._usuarioService.setPrivacidad(this.usuario).subscribe(function (usuario) { return console.log("Hola"); });
                    }
                    if (sitio == 'amigos') {
                        this.usuario.aPerfilTodos = estado;
                        this._usuarioService.setPrivacidad(this.usuario).subscribe(function (usuario) { return console.log("Hola"); });
                    }
                };
                AjustesComponent = __decorate([
                    core_1.Component({
                        selector: 'ajustes-component',
                        templateUrl: 'app/ajustes.component.html',
                        directives: [menu_component_1.MenuComponent, seleccion_component_1.SeleccionComponent],
                        providers: [usuario_service_1.UsuarioService, sesion_service_1.SesionService]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, usuario_service_1.UsuarioService, router_1.RouteParams, sesion_service_1.SesionService])
                ], AjustesComponent);
                return AjustesComponent;
            }());
            exports_1("AjustesComponent", AjustesComponent);
        }
    }
});
//# sourceMappingURL=ajustes.component.js.map