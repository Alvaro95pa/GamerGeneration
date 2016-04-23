import { USUARIO } from './mock-usuario';
import { Injectable } from 'angular2/core';
import { Usuario } from './usuario'
import { Datos } from './datos';

@Injectable()
export class UsuarioService {
  getUsuario() {
    return Promise.resolve(USUARIO);
  }
  setContraseña(pass: string){
    USUARIO.contrasena = pass;
  }
  setPersonales(user: Usuario){
    USUARIO.nombre = user.nombre;
    USUARIO.apellidos = user.apellidos;
    USUARIO.nacionalidad = user.nacionalidad;
    USUARIO.cumpleanos = user.cumpleanos;
    USUARIO.usuario = user.usuario;
    USUARIO.correo = user.correo;
  }
  setPrivacidad(data: Datos){
    USUARIO.datos.pPerfilTodos = data.pPerfilTodos;
    USUARIO.datos.cPerfilTodos = data.cPerfilTodos;
    USUARIO.datos.aPerfilTodos = data.aPerfilTodos;
  }
}
