import { USUARIOS } from './mock-usuario';
import { Injectable } from 'angular2/core';
import { Usuario } from './usuario'
import { Datos } from './datos';

@Injectable()
export class UsuarioService {
  getUsuarios() {
    return Promise.resolve(USUARIOS[0]);
  }
  getUsuario(id: number) {
    return Promise.resolve(USUARIOS).then(usuarios => usuarios.filter(usuario => usuario.id === id)[0])
  }
  setContraseña(pass: string){
    USUARIOS[0].contrasena = pass;
  }
  setPersonales(user: Usuario){
    USUARIOS[0].nombre = user.nombre;
    USUARIOS[0].apellidos = user.apellidos;
    USUARIOS[0].nacionalidad = user.nacionalidad;
    USUARIOS[0].cumpleanos = user.cumpleanos;
    USUARIOS[0].usuario = user.usuario;
    USUARIOS[0].correo = user.correo;
  }
  setPrivacidad(data: Datos){
    USUARIOS[0].datos.pPerfilTodos = data.pPerfilTodos;
    USUARIOS[0].datos.cPerfilTodos = data.cPerfilTodos;
    USUARIOS[0].datos.aPerfilTodos = data.aPerfilTodos;
  }
}
