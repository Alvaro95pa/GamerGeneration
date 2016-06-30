System.register(['angular2/core', './clases.service', './modoadmin.service', 'angular2/router', "./multipart-item", "./multipart-uploader", 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, clases_service_1, modoadmin_service_1, router_1, router_2, multipart_item_1, multipart_uploader_1, http_1;
    var anadircontenido;
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
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (multipart_item_1_1) {
                multipart_item_1 = multipart_item_1_1;
            },
            function (multipart_uploader_1_1) {
                multipart_uploader_1 = multipart_uploader_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            anadircontenido = (function () {
                function anadircontenido(http, router, adminservice, clasesservice, _routeParams) {
                    this.http = http;
                    this.router = router;
                    this.adminservice = adminservice;
                    this.clasesservice = clasesservice;
                    this._routeParams = _routeParams;
                    this.images = [];
                    this.destacado = false;
                }
                //METODOS PARA IMAGENES
                anadircontenido.prototype.loadImages = function () {
                    return this.http.get("/images").map(function (response) { return response.json(); });
                };
                anadircontenido.prototype.buscarImage = function (id) {
                    return this.http.get("/image/" + id).map(function (response) { return response.json(); });
                };
                anadircontenido.prototype.selectFile = function ($event, id) {
                    if (id == 1) {
                        this.portada = $event.target.files[0];
                        console.debug("Selected file: " + this.portada.name + " type:" + this.portada.size + " size:" + this.portada.size);
                    }
                    if (id == 2) {
                        this.expost = $event.target.files[0];
                        console.debug("Selected file: " + this.expost.name + " type:" + this.expost.size + " size:" + this.expost.size);
                    }
                };
                anadircontenido.prototype.upload = function (id) {
                    var _this = this;
                    var archivo;
                    var desc;
                    if (id == 1) {
                        archivo = this.portada;
                        desc = this.desc_portada;
                    }
                    if (id == 2) {
                        archivo = this.expost;
                        desc = this.desc_exp;
                    }
                    console.debug("Uploading file...");
                    if (archivo == null || desc == null) {
                        console.error("You have to select a file and set a description.");
                        return;
                    }
                    var formData = new FormData();
                    formData.append("description", desc);
                    formData.append("file", archivo);
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
                    if (id == 1) {
                        this.loadImages().subscribe(function (id) {
                            _this.auxidP = id;
                            console.log(_this.auxidP);
                        });
                    }
                    if (id == 2) {
                        this.loadImages().subscribe(function (id) {
                            _this.auxidE = id;
                            console.log(_this.auximgE);
                        });
                    }
                };
                anadircontenido.prototype.anadirElemContenido = function () {
                    var _this = this;
                    if (this.destacado) {
                        this.buscarImage(this.auxidP).subscribe(function (image) {
                            _this.imagenPortada = image;
                            console.log(_this.imagenPortada);
                            _this.buscarImage(_this.auxidE).subscribe(function (image) {
                                _this.expositor = image;
                                console.log(_this.imagenPortada);
                                _this.generarContenido();
                            });
                        });
                    }
                    else {
                        this.buscarImage(this.auxidP).subscribe(function (image) {
                            _this.imagenPortada = image;
                            _this.expositor = image;
                            console.log(_this.imagenPortada);
                            _this.generarContenido();
                        });
                    }
                };
                anadircontenido.prototype.generarContenido = function () {
                    var _this = this;
                    this.dest = {
                        destacado: this.destacado,
                        imgn: this.expositor
                    };
                    this.new_contenido = {
                        nProducto: this.nProd,
                        tipo: this.tipo,
                        categoria: this.categoria,
                        titulo: this.titulo,
                        fecha: this.fecha,
                        multimedia: this.imagenPortada,
                        resumen: this.resumen,
                        cuerpo: this.cuerpo,
                        ratio: this.puntuacion,
                        dest: this.dest,
                        comentarios: this.coments
                    };
                    this.adminservice.pushContenido(this.new_contenido).subscribe(function (cont) {
                        console.log(cont);
                        _this.gotoadmin_contenido(_this.tipo);
                    });
                };
                anadircontenido.prototype.getopcion = function () {
                    var tipo = this._routeParams.get('tipo');
                    if (tipo == "Noticia") {
                        this.tipoopcion = 2;
                        this.tipo = tipo;
                    }
                    if (tipo == "Análisis") {
                        this.tipoopcion = 3;
                        this.tipo = tipo;
                        console.log(tipo);
                    }
                };
                anadircontenido.prototype.ngOnInit = function () {
                    this.getopcion();
                };
                anadircontenido.prototype.gotoadmin_users = function () {
                    var link = ['AdminUsers'];
                    this.router.navigate(link);
                };
                anadircontenido.prototype.gotoadmin_contenido = function (opc) {
                    var link = ['AdminContenido', { tipo: opc }];
                    this.router.navigate(link);
                };
                anadircontenido.prototype.gotoadmin_salir = function () {
                    var link = ['Princ_Catalogo'];
                    this.router.navigate(link);
                };
                anadircontenido.prototype.gotoadmin_productos = function () {
                    var link = ['AdminProductos'];
                    this.router.navigate(link);
                };
                anadircontenido = __decorate([
                    core_1.Component({
                        selector: 'anadircontenido',
                        template: "\n  <div class=\"row admin fondo\">\n    <div class=\"col-sm-3 aux\">\n      <ul class=\"nav nav-pills nav-stacked col-sm-12 contorno\">\n        <li  [class.selected]=\"tipoopcion==1\" (click)=\"gotoadmin_users('Users')\"><a >Usuarios</a></li>\n        <li  [class.selected]=\"tipoopcion==2\" (click)=\"gotoadmin_contenido('Noticia')\"><a >Noticias</a></li>\n        <li  [class.selected]=\"tipoopcion==3\" (click)=\"gotoadmin_contenido('An\u00E1lisis')\"><a >Analisis</a></li>\n        <li  [class.selected]=\"tipoopcion==4\" (click)=\"gotoadmin_productos()\"><a >Productos</a></li>\n        <li  (click)=\"gotoadmin_salir()\"><a >Salir</a></li>\n      </ul>\n    </div>\n\n    <div class=\"col-sm-9\" >\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Titulo:</span>\n        <input [(ngModel)]=\"titulo\" type=\"text\" class=\"form-control\" placeholder=\"Inserte un titulo\" aria-describedby=\"basic-addon1\">\n      </div>\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Categoria:</span>\n        <ul class=\"col-xs-12 anadircategoria nav nav-pills nav-stacked col-sm-12 contorno\">\n          <li [class.selecteccheck]=\"categoria=='Juegos'\" (click)=\"categoria = 'Juegos'\"><a >Videojuegos</a></li>\n          <li [class.selecteccheck]=\"categoria=='Series'\" (click)=\"categoria = 'Series'\"><a >Series</a></li>\n          <li [class.selecteccheck]=\"categoria=='Peliculas'\" (click)=\"categoria = 'Peliculas'\"><a >Peliculas</a></li>\n        </ul>\n      </div>\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Fecha:</span>\n        <input [(ngModel)]=\"fecha\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una fecha\" aria-describedby=\"basic-addon1\">\n      </div>\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Nombre del producto:</span>\n        <input [(ngModel)]=\"nProd\" type=\"text\" class=\"form-control\" placeholder=\"Inserte un nombre\" aria-describedby=\"basic-addon1\">\n      </div>\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Multimedia:</span>\n        <input [(ngModel)]=\"imgn\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una URL de un video\" aria-describedby=\"basic-addon1\">\n      </div>\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Resumen:</span>\n        <textarea class=\"mens col-sm-12 col-xs-12\"   [(ngModel)]=\"resumen\">Escribe</textarea>\n      </div>\n      <div class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Cuerpo:</span>\n        <textarea class=\"mens col-sm-12 col-xs-12\"   [(ngModel)]=\"cuerpo\">Escribe</textarea>\n      </div>\n      <div *ngIf=\"tipoopcion == 3\" class=\"input-group nuevocontenido\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Puntuacion:</span>\n        <input [(ngModel)]=\"puntuacion\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una puntuaci\u00F3n\" aria-describedby=\"basic-addon1\">\n      </div>\n      <div  class=\"datos col-sm-12 inforeq\">\n          <h4>Opciones de Portada</h4>\n          <div class=\"input-group nuevocontenido\">\n            <span class=\"input-group-addon\" id=\"basic-addon1\">Descripcion de la Img:</span>\n            <input [(ngModel)]=\"desc_portada\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una imagen\" aria-describedby=\"basic-addon1\">\n          </div>\n          <div class=\"formulario\">\n            <form>\n          \t\t<label for=\"exampleInputFile\">Buscador de ficheros</label><input type=\"file\" (change)=\"selectFile($event, 1)\">\n          \t\t<button type=\"submit\" class=\"btn btn-danger\" (click)=\"upload(1)\">Subir imagen</button>\n            </form>\n          </div>\n\n      </div>\n      <div *ngIf=\"tipoopcion == 2\" class=\"datos col-sm-12 inforeq\">\n          <h4>Opciones de expositor</h4>\n          <div class=\"input-group nuevocontenido\">\n            <span class=\"input-group-addon\" id=\"basic-addon1\">\u00BFQuiere que aparezca en el expositor?:</span>\n            <div [class.checkboxdest]=\"destacado\" (click)=\"destacado= !destacado\" class=\"col-sm-2 chdestacado\">a</div>\n          </div>\n          <div class=\"input-group nuevocontenido\">\n            <span class=\"input-group-addon\" id=\"basic-addon1\">Descripcion de la Img:</span>\n            <input [(ngModel)]=\"desc_exp\" type=\"text\" class=\"form-control\" placeholder=\"Inserte una imagen\" aria-describedby=\"basic-addon1\">\n          </div>\n          <div class=\"formulario\">\n            <form>\n          \t\t<label for=\"exampleInputFile\">Buscador de ficheros</label><input type=\"file\" (change)=\"selectFile($event, 2)\">\n          \t\t<button type=\"submit\" class=\"btn btn-danger\" (click)=\"upload(2)\">Subir imagen</button>\n            </form>\n          </div>\n      </div>\n    </div>\n    <button (click)=\"anadirElemContenido()\" class=\"btnanadir btn btn-danger col-sm-3 col-xs-12\"  >A\u00F1adir Contenido</button>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router, modoadmin_service_1.modoadminservice, clases_service_1.clasesservice, router_2.RouteParams])
                ], anadircontenido);
                return anadircontenido;
            }());
            exports_1("anadircontenido", anadircontenido);
        }
    }
});
/*

*/
//# sourceMappingURL=anadircontenido.component.js.map