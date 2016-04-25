import { USUARIOS } from './mock-usuario';
import { Injectable } from 'angular2/core';
import { Usuario } from './usuario.model'
import { Datos } from './datos.model';
import { Amigo } from './amigos.model';
import { Prod } from './clases';

@Injectable()
export class UsuarioService {
  //Obtener todos los usuarios
  getUsuarios() {
    return Promise.resolve(USUARIOS);
  }
  getUsuarios2() {
    return USUARIOS;
  }

  getContenidoNombre(nombre:string){
    return Promise.resolve(USUARIOS).then( list => list.filter(user => user.usuario===nombre)[0])
  }
  //Obtener un usuario
  getUsuario(id: number) {
    return Promise.resolve(USUARIOS).then(usuarios => usuarios.filter(usuario => usuario.id === id)[0])
  }
  //Cambiar la contraseña del usuario
  setContraseña(pass: string, id:  number){
    USUARIOS[id-1].contrasena = pass;
  }
  //Cambiar los datos personales del usuario
  setPersonales(user: Usuario, id:  number){
    USUARIOS[id-1].nombre = user.nombre;
    USUARIOS[id-1].apellidos = user.apellidos;
    USUARIOS[id-1].nacionalidad = user.nacionalidad;
    USUARIOS[id-1].cumpleanos = user.cumpleanos;
    USUARIOS[id-1].usuario = user.usuario;
    USUARIOS[id-1].correo = user.correo;
  }
  //Cambiar la privacidad de un usuario
  setPrivacidad(data: Datos, id:  number){
    USUARIOS[id-1].datos.pPerfilTodos = data.pPerfilTodos;
    USUARIOS[id-1].datos.cPerfilTodos = data.cPerfilTodos;
    USUARIOS[id-1].datos.aPerfilTodos = data.aPerfilTodos;
  }
  //Añadir usuario
  addUsuario(usuario: Usuario){
    USUARIOS.push(usuario);
  }
  //Eliminar usuario
  removeUsuario(usuario: Usuario){
    let posicion = USUARIOS.indexOf(usuario);
    USUARIOS.splice(posicion,1);
  }
  //Añadir amigo al usuario
  addAmigo(amigo: Amigo, actual: Amigo){
    USUARIOS[amigo.id-1].datos.amigos.push(actual);
    USUARIOS[actual.id-1].datos.amigos.push(amigo);
    USUARIOS[amigo.id-1].datos.nAmigos = USUARIOS[amigo.id-1].datos.nAmigos + 1;
    USUARIOS[actual.id-1].datos.nAmigos = USUARIOS[actual.id-1].datos.nAmigos + 1;
  }
  //Borrar amigo del usuario
  remAmigo(amigo: Amigo, actual: Amigo){
    let posicion1 = USUARIOS[actual.id-1].datos.amigos.indexOf(amigo);
    USUARIOS[actual.id-1].datos.amigos.splice(posicion1,1);
    let posicion2 = USUARIOS[amigo.id-1].datos.amigos.indexOf(actual);
    USUARIOS[amigo.id-1].datos.amigos.splice(posicion2,1);
    USUARIOS[amigo.id-1].datos.nAmigos = USUARIOS[amigo.id-1].datos.nAmigos - 1;
    USUARIOS[actual.id-1].datos.nAmigos = USUARIOS[actual.id-1].datos.nAmigos - 1;
  }
  //Cambiar favorito del usuario
  setFavorito(fav: Prod, id:  number){
    if(fav.tipoprod == 3){
      USUARIOS[id-1].datos.fPeli = fav;
    }
    if(fav.tipoprod == 2){
      USUARIOS[id-1].datos.fSerie = fav;
    }
    if(fav.tipoprod == 1){
      USUARIOS[id-1].datos.fJuego = fav;
    }
  }
  //Borrar favoritos
  removeFav(producto: Prod, id: number){
    if(producto.tipoprod == 3){
      USUARIOS[id-1].datos.fPeli = { id: null, tipoprod: null, name: null, img: null, genero: null, plataforma: null};
    }
    if(producto.tipoprod == 2){
      USUARIOS[id-1].datos.fSerie = { id: null, tipoprod: null, name: null, img: null, genero: null, plataforma: null};
    }
    if(producto.tipoprod == 1){
      USUARIOS[id-1].datos.fJuego = { id: null, tipoprod: null, name: null, img: null, genero: null, plataforma: null};
    }
  }
  //Añadir contenido al usuario
  addContenido(producto: Prod, id: number){
    USUARIOS[id-1].datos.contenido.push(producto);
    if(producto.tipoprod == 3){
      USUARIOS[id-1].datos.nPelis = USUARIOS[id-1].datos.nPelis + 1;
    }
    if(producto.tipoprod == 2){
      USUARIOS[id-1].datos.nSeries = USUARIOS[id-1].datos.nSeries + 1;
    }
    if(producto.tipoprod == 1){
      USUARIOS[id-1].datos.nJuegos = USUARIOS[id-1].datos.nJuegos + 1;
    }
  }
  //Eliminar contenido del usuario
  removeContenido(producto: Prod, id: number){
    let posicion = USUARIOS[id-1].datos.contenido.indexOf(producto);
    USUARIOS[id-1].datos.contenido.splice(posicion,1);
    if(producto.tipoprod == 3){
      USUARIOS[id-1].datos.nPelis = USUARIOS[id-1].datos.nPelis - 1;
    }
    if(producto.tipoprod == 2){
      USUARIOS[id-1].datos.nSeries = USUARIOS[id-1].datos.nSeries - 1;
    }
    if(producto.tipoprod == 1){
      USUARIOS[id-1].datos.nJuegos = USUARIOS[id-1].datos.nJuegos - 1;
    }
  }
}
