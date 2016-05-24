import { Component,Input } from 'angular2/core';
import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'registro-component',
  templateUrl: 'app/registro.component.html'
})

export class registrar {
  //Variables
  correo: string;
  usuario: string;
  contrasena: string;
  contrasena2: string;
  nuevo_usuario: Usuario;
  boton:boolean = false;
  error: boolean = false;
  id: number = 3;
  registrado: boolean = false;
  //Métodos
  constructor (private _usuarioService: UsuarioService){}
  registrar(){
    this.nuevo_usuario = {
      id: this.id,
      nombre: '',
      apellidos: '',
      nacionalidad: '',
      cumpleanos: '',
      roles: ['ROLE_USER'],
      usuario: this.usuario,
      contrasena: this.contrasena,
      correo: this.correo,
      imagen: 'img/avatar.png',
      nAmigos: 0,
      nPelis: 0,
      nSeries: 0,
      nJuegos: 0,
      ultima: "hoy",
      tUsuario: "hoy",
      fPeli: { id: null, tipoprod: null, name: null, img: null, genero: null, plataforma: null},
      fSerie: { id: null, tipoprod: null, name: null, img: null, genero: null, plataforma: null},
      fJuego: { id: null, tipoprod: null, name: null, img: null, genero: null, plataforma: null},
      pPerfilTodos: true,
      cPerfilTodos: true,
      aPerfilTodos: true,
      contenido: [],
      amigos: []
    };
    this._usuarioService.addUsuario(this.nuevo_usuario);
    this.id = this.id + 1;
    this.registrado = true;
  }
}
