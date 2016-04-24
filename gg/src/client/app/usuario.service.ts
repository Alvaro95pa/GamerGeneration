import { USUARIOS } from './mock-usuario';
import { Injectable } from 'angular2/core';
import { Usuario } from './usuario'
import { Datos } from './datos';
import { Amigo } from './amigos';
import { Prod } from './prod'

@Injectable()
export class UsuarioService {
  getUsuarios() {
    return Promise.resolve(USUARIOS);
  }
  getUsuario(id: number) {
    return Promise.resolve(USUARIOS).then(usuarios => usuarios.filter(usuario => usuario.id === id)[0])
  }
  setContraseña(pass: string, id:  number){
    USUARIOS[id-1].contrasena = pass;
  }
  setPersonales(user: Usuario, id:  number){
    USUARIOS[id-1].nombre = user.nombre;
    USUARIOS[id-1].apellidos = user.apellidos;
    USUARIOS[id-1].nacionalidad = user.nacionalidad;
    USUARIOS[id-1].cumpleanos = user.cumpleanos;
    USUARIOS[id-1].usuario = user.usuario;
    USUARIOS[id-1].correo = user.correo;
  }
  setPrivacidad(data: Datos, id:  number){
    USUARIOS[id-1].datos.pPerfilTodos = data.pPerfilTodos;
    USUARIOS[id-1].datos.cPerfilTodos = data.cPerfilTodos;
    USUARIOS[id-1].datos.aPerfilTodos = data.aPerfilTodos;
  }
  addUsuario(usuario: Usuario){
    USUARIOS.push(usuario);
  }
  removeUsuario(usuario: Usuario){
    let posicion = USUARIOS.indexOf(usuario);
    USUARIOS.splice(posicion,1);
  }
  addAmigo(amigo: Amigo, actual: Amigo){
    USUARIOS[amigo.id-1].datos.amigos.push(actual);
    USUARIOS[actual.id-1].datos.amigos.push(amigo);
  }
  setFavorito(fav: Prod, id:  number){
    if(fav.plataforma == 'pelicula'){
      USUARIOS[id-1].datos.fPeli = fav;
    }
    if(fav.plataforma == 'serie'){
      USUARIOS[id-1].datos.fSerie = fav;
    }
    if(fav.plataforma == 'juego'){
      USUARIOS[id-1].datos.fJuego = fav;
    }
  }
}
