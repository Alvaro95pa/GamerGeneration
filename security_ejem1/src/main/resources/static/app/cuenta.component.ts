import { Component, Input } from 'angular2/core';
import { MenuComponent } from './menu.component';
import { RouteParams } from 'angular2/router';
import { UsuarioService } from './usuario.service';
import { OnInit } from 'angular2/core';
import { Usuario } from './usuario.model'
import { Prod } from './clases';
import { SesionService } from './sesion.service';

@Component({
  selector: 'cuenta-component',
  templateUrl: 'app/cuenta.component.html',
  directives: [MenuComponent],
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
    this.actual = this._sesionService.getSesion().usuario;
    this.id_actual = this._sesionService.getSesion().id;
    let id = +this._routeParams.get('id');
    this._usuarioService.getUsuario(id).subscribe(usuario =>{
      this.usuario = usuario;
      if(id != this.id_actual){
        this._usuarioService.getUsuario(this.id_actual).subscribe(usuario =>{
          this.usuario_actual = usuario;
          this.esAmigo()
        })
      };
      this.visible = true
    })
  };
  addAmigo(){
    this.usuario.amigos.push(this.usuario_actual);
    this.usuario.nAmigos = this.usuario.nAmigos + 1;
    this.usuario_actual.amigos.push(this.usuario);
    this.usuario_actual.nAmigos = this.usuario_actual.nAmigos + 1;
    this._usuarioService.addAmigo(this.usuario);
    this._usuarioService.addAmigo(this.usuario_actual);
    this.esAmigo();
  }
  removeAmigo(){
    let posicion1 = this.usuario.amigos.indexOf(this.usuario_actual);
    this.usuario.amigos.splice(posicion1, 1);
    let posicion2 = this.usuario_actual.amigos.indexOf(this.usuario);
    this.usuario_actual.amigos.splice(posicion2, 1);
    this.usuario.nAmigos = this.usuario.nAmigos - 1;
    this.usuario_actual.nAmigos = this.usuario_actual.nAmigos - 1;
    this._usuarioService.remAmigo(this.usuario);
    this._usuarioService.remAmigo(this.usuario_actual);
    this.amigo = false;
  }
  esAmigo(){
      for(let amigo of this.usuario_actual.amigos){
        if(amigo.id == this.usuario.id){
          this.amigo = true;
        }
      }
  }
}
