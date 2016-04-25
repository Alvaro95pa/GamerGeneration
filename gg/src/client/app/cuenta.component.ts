import { Component, Input } from 'angular2/core';
import { MenuComponent } from './menu.component';
import { RouteParams } from 'angular2/router';
import { UsuarioService } from './usuario.service';
import { OnInit } from 'angular2/core';
import { Usuario } from './usuario.model'
import { Datos } from './datos.model';
import { Prod } from './prod.model';
import { Amigo } from './amigos.model';
import {Sesion} from './sesion.model';
import { SesionService } from './sesion.service';

@Component({
  selector: 'cuenta-component',
  templateUrl: 'app/cuenta.component.html',
  directives: [MenuComponent],
  styleUrls: ['app/cuenta.component.css'],
  providers: [UsuarioService, SesionService]
})

export class CuentaComponent implements OnInit {
  //Variables
  usuario: Usuario;
  usuario_actual: Usuario;
  actual: string;
  id_actual: number;
  visible: boolean = false;
  amigo: boolean = false;
  //Metodos
  constructor(private _usuarioService: UsuarioService, private _routeParams: RouteParams, private _sesionService: SesionService) {}
  ngOnInit() {
    this._sesionService.getSesion().then(sesion =>{
      this.actual = sesion.usuario;
      this.id_actual = sesion.id;
      let id = +this._routeParams.get('id');
      if(id != 0){
        this._usuarioService.getUsuario(id).then(usuario =>{
          this.usuario = usuario;
          if(id != this.id_actual){
            this._usuarioService.getUsuario(this.id_actual).then(usuario =>{
              this.usuario_actual = usuario;
              this.esAmigo()
            })
          };
          this.visible = true
        })
        if(id != this.id_actual){
          this._usuarioService.getUsuario(this.id_actual).then(usuario =>{
            this.usuario_actual = usuario;
            this.esAmigo()
          })
        }
      }
      else{
        this._usuarioService.getUsuario(this.id_actual).then(usuario =>{
          this.usuario = usuario;
          this.visible = true;
          this.esAmigo()
        })
      }
    });
  };
  addAmigo(){
    var actual: Amigo = {id: this.id_actual, usuario: this.actual, imagen: "img/avatar1.jpg"};
    var amigo: Amigo = {id: this.usuario.id, usuario: this.usuario.usuario, imagen: this.usuario.imagen};
    this._usuarioService.addAmigo(amigo, actual);
    this.esAmigo();
  }
  removeAmigo(){
    var actual: Amigo = {id: this.id_actual, usuario: this.actual, imagen: "img/avatar1.jpg"};
    var amigo: Amigo = {id: this.usuario.id, usuario: this.usuario.usuario, imagen: this.usuario.imagen};
    this._usuarioService.remAmigo(amigo, actual);
    this.amigo = false;
  }
  esAmigo(){
      for(let amigo of this.usuario_actual.datos.amigos){
        if(amigo.id == this.usuario.id){
          this.amigo = true;
        }
      }
  }
}
