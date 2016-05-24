System.register(['./mock-usuario', 'angular2/core'], function(exports_1, context_1) {
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
    var mock_usuario_1, core_1;
    var UsuarioService;
    return {
        setters:[
            function (mock_usuario_1_1) {
                mock_usuario_1 = mock_usuario_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UsuarioService = (function () {
                function UsuarioService() {
                }
                //Obtener todos los usuarios
                UsuarioService.prototype.getUsuarios = function () {
                    return Promise.resolve(mock_usuario_1.USUARIOS);
                };
                UsuarioService.prototype.getUsuarios2 = function () {
                    return mock_usuario_1.USUARIOS;
                };
                UsuarioService.prototype.getContenidoNombre = function (nombre) {
                    return Promise.resolve(mock_usuario_1.USUARIOS).then(function (list) { return list.filter(function (user) { return user.usuario === nombre; })[0]; });
                };
                //Obtener un usuario
                UsuarioService.prototype.getUsuario = function (id) {
                    return Promise.resolve(mock_usuario_1.USUARIOS).then(function (usuarios) { return usuarios.filter(function (usuario) { return usuario.id === id; })[0]; });
                };
                //Cambiar la contraseña del usuario
                UsuarioService.prototype.setContraseña = function (pass, id) {
                    mock_usuario_1.USUARIOS[id - 1].contrasena = pass;
                };
                //Cambiar los datos personales del usuario
                UsuarioService.prototype.setPersonales = function (user, id) {
                    mock_usuario_1.USUARIOS[id - 1].nombre = user.nombre;
                    mock_usuario_1.USUARIOS[id - 1].apellidos = user.apellidos;
                    mock_usuario_1.USUARIOS[id - 1].nacionalidad = user.nacionalidad;
                    mock_usuario_1.USUARIOS[id - 1].cumpleanos = user.cumpleanos;
                    mock_usuario_1.USUARIOS[id - 1].usuario = user.usuario;
                    mock_usuario_1.USUARIOS[id - 1].correo = user.correo;
                };
                //Cambiar la privacidad de un usuario
                UsuarioService.prototype.setPrivacidad = function (data, id) {
                    mock_usuario_1.USUARIOS[id - 1].datos.pPerfilTodos = data.pPerfilTodos;
                    mock_usuario_1.USUARIOS[id - 1].datos.cPerfilTodos = data.cPerfilTodos;
                    mock_usuario_1.USUARIOS[id - 1].datos.aPerfilTodos = data.aPerfilTodos;
                };
                //Añadir usuario
                UsuarioService.prototype.addUsuario = function (usuario) {
                    mock_usuario_1.USUARIOS.push(usuario);
                };
                //Eliminar usuario
                UsuarioService.prototype.removeUsuario = function (usuario) {
                    var posicion = mock_usuario_1.USUARIOS.indexOf(usuario);
                    mock_usuario_1.USUARIOS.splice(posicion, 1);
                };
                //Añadir amigo al usuario
                UsuarioService.prototype.addAmigo = function (amigo, actual) {
                    mock_usuario_1.USUARIOS[amigo.id - 1].datos.amigos.push(actual);
                    mock_usuario_1.USUARIOS[actual.id - 1].datos.amigos.push(amigo);
                    mock_usuario_1.USUARIOS[amigo.id - 1].datos.nAmigos = mock_usuario_1.USUARIOS[amigo.id - 1].datos.nAmigos + 1;
                    mock_usuario_1.USUARIOS[actual.id - 1].datos.nAmigos = mock_usuario_1.USUARIOS[actual.id - 1].datos.nAmigos + 1;
                };
                //Borrar amigo del usuario
                UsuarioService.prototype.remAmigo = function (amigo, actual) {
                    var posicion1 = mock_usuario_1.USUARIOS[actual.id - 1].datos.amigos.indexOf(amigo);
                    mock_usuario_1.USUARIOS[actual.id - 1].datos.amigos.splice(posicion1, 1);
                    var posicion2 = mock_usuario_1.USUARIOS[amigo.id - 1].datos.amigos.indexOf(actual);
                    mock_usuario_1.USUARIOS[amigo.id - 1].datos.amigos.splice(posicion2, 1);
                    mock_usuario_1.USUARIOS[amigo.id - 1].datos.nAmigos = mock_usuario_1.USUARIOS[amigo.id - 1].datos.nAmigos - 1;
                    mock_usuario_1.USUARIOS[actual.id - 1].datos.nAmigos = mock_usuario_1.USUARIOS[actual.id - 1].datos.nAmigos - 1;
                };
                //Cambiar favorito del usuario
                UsuarioService.prototype.setFavorito = function (fav, id) {
                    if (fav.tipoprod == 3) {
                        mock_usuario_1.USUARIOS[id - 1].datos.fPeli = fav;
                    }
                    if (fav.tipoprod == 2) {
                        mock_usuario_1.USUARIOS[id - 1].datos.fSerie = fav;
                    }
                    if (fav.tipoprod == 1) {
                        mock_usuario_1.USUARIOS[id - 1].datos.fJuego = fav;
                    }
                };
                //Borrar favoritos
                UsuarioService.prototype.removeFav = function (producto, id) {
                    if (producto.tipoprod == 3) {
                        mock_usuario_1.USUARIOS[id - 1].datos.fPeli = { id: null, tipoprod: null, name: null, img: null, genero: null, plataforma: null };
                    }
                    if (producto.tipoprod == 2) {
                        mock_usuario_1.USUARIOS[id - 1].datos.fSerie = { id: null, tipoprod: null, name: null, img: null, genero: null, plataforma: null };
                    }
                    if (producto.tipoprod == 1) {
                        mock_usuario_1.USUARIOS[id - 1].datos.fJuego = { id: null, tipoprod: null, name: null, img: null, genero: null, plataforma: null };
                    }
                };
                //Añadir contenido al usuario
                UsuarioService.prototype.addContenido = function (producto, id) {
                    mock_usuario_1.USUARIOS[id - 1].datos.contenido.push(producto);
                    if (producto.tipoprod == 3) {
                        mock_usuario_1.USUARIOS[id - 1].datos.nPelis = mock_usuario_1.USUARIOS[id - 1].datos.nPelis + 1;
                    }
                    if (producto.tipoprod == 2) {
                        mock_usuario_1.USUARIOS[id - 1].datos.nSeries = mock_usuario_1.USUARIOS[id - 1].datos.nSeries + 1;
                    }
                    if (producto.tipoprod == 1) {
                        mock_usuario_1.USUARIOS[id - 1].datos.nJuegos = mock_usuario_1.USUARIOS[id - 1].datos.nJuegos + 1;
                    }
                };
                //Eliminar contenido del usuario
                UsuarioService.prototype.removeContenido = function (producto, id) {
                    var posicion = mock_usuario_1.USUARIOS[id - 1].datos.contenido.indexOf(producto);
                    mock_usuario_1.USUARIOS[id - 1].datos.contenido.splice(posicion, 1);
                    if (producto.tipoprod == 3) {
                        mock_usuario_1.USUARIOS[id - 1].datos.nPelis = mock_usuario_1.USUARIOS[id - 1].datos.nPelis - 1;
                    }
                    if (producto.tipoprod == 2) {
                        mock_usuario_1.USUARIOS[id - 1].datos.nSeries = mock_usuario_1.USUARIOS[id - 1].datos.nSeries - 1;
                    }
                    if (producto.tipoprod == 1) {
                        mock_usuario_1.USUARIOS[id - 1].datos.nJuegos = mock_usuario_1.USUARIOS[id - 1].datos.nJuegos - 1;
                    }
                };
                UsuarioService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UsuarioService);
                return UsuarioService;
            }());
            exports_1("UsuarioService", UsuarioService);
        }
    }
});
//# sourceMappingURL=usuario.service.js.map