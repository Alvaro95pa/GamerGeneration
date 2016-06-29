import { Component,Input } from 'angular2/core';
import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';
import {Image} from './image.model';

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
  boton: boolean = false;
  error: boolean = false;
  registrado: boolean = false;
  img:Image;
  //Métodos
  constructor (private _usuarioService: UsuarioService){}
  registrar(){
    this.nuevo_usuario = {
      nombre: '',
      apellidos: '',
      nacionalidad: '',
      cumpleanos: '',
      roles: ['ROLE_USER'],
      usuario: this.usuario,
      contrasena: this.contrasena,
      correo: this.correo,
      imagen: this.img,
      nAmigos: 0,
      nPelis: 0,
      nSeries: 0,
      nJuegos: 0,
      ultima: "hoy",
      tUsuario: "hoy",
      fPeli: { id: null, tipoprod: null, name: null, img: null, fecha: null,
        genero: null, plataforma: null, desarrollador: null, editor: null, procesador: null, memoria: null,
      grafica: null, almacenamiento: null, trailer: null, sinopsis: null, comentarios: null},
      fSerie: { id: null, tipoprod: null, name: null, img: null, fecha: null,
        genero: null, plataforma: null, desarrollador: null, editor: null, procesador: null, memoria: null,
      grafica: null, almacenamiento: null, trailer: null, sinopsis: null, comentarios: null},
      fJuego: { id: null, tipoprod: null, name: null, img: null, fecha: null,
        genero: null, plataforma: null, desarrollador: null, editor: null, procesador: null, memoria: null,
      grafica: null, almacenamiento: null, trailer: null, sinopsis: null, comentarios: null},
      pPerfilTodos: true,
      cPerfilTodos: true,
      aPerfilTodos: true,
      coleccion: [],
      amigos: []
    };
    this._usuarioService.addUsuario(this.nuevo_usuario).subscribe(usuario => console.log("Hola"));
    this.registrado = true;
  }
}
