import { USUARIOS } from './mock-usuario';
import { Injectable } from 'angular2/core';
import { Usuario } from './usuario'
import { Datos } from './datos';
import { Amigo } from './amigos';

@Injectable()
export class UsuarioService {
  getUsuarios() {
    return Promise.resolve(USUARIOS);
  }

  getUsuarios2() {
    return USUARIOS;
  }

  getUsuario(id: number) {
    return Promise.resolve(USUARIOS).then(usuarios => usuarios.filter(usuario => usuario.id === id)[0])
  }
  setContraseña(pass: string, id:  number){
    USUARIOS[id].contrasena = pass;
  }
  setPersonales(user: Usuario, id:  number){
    USUARIOS[id].nombre = user.nombre;
    USUARIOS[id].apellidos = user.apellidos;
    USUARIOS[id].nacionalidad = user.nacionalidad;
    USUARIOS[id].cumpleanos = user.cumpleanos;
    USUARIOS[id].usuario = user.usuario;
    USUARIOS[id].correo = user.correo;
  }
  setPrivacidad(data: Datos, id:  number){
    USUARIOS[id].datos.pPerfilTodos = data.pPerfilTodos;
    USUARIOS[id].datos.cPerfilTodos = data.cPerfilTodos;
    USUARIOS[id].datos.aPerfilTodos = data.aPerfilTodos;
  }
  addUsuario(usuario: Usuario){
    USUARIOS.push(usuario);
  }
  removeUsuario(usuario: Usuario){
    let posicion = USUARIOS.indexOf(usuario);
    USUARIOS.splice(posicion,1);
  }

  addAmigo(amigo: Amigo, actual: Amigo){
    USUARIOS[actual.id].datos.amigos.push(amigo);
    USUARIOS[amigo.id].datos.amigos.push(actual);
  }
}
