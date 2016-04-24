import { Component, Input } from 'angular2/core';
import { MenuComponent } from './menu.component';
import { RouteParams } from 'angular2/router';
import { UsuarioService } from './usuario.service';
import { OnInit } from 'angular2/core';
import { Usuario } from './usuario'
import { Datos } from './datos';
import { Prod } from './prod';
import { Amigo } from './amigos';

@Component({
  selector: 'cuenta-component',
  templateUrl: 'app/cuenta.component.html',
  directives: [MenuComponent],
  styleUrls: ['app/cuenta.component.css'],
})

export class CuentaComponent implements OnInit {
  //Variables
  usuario: Usuario;
  actual: string = 'castorTresDientes'
  visible: boolean = false;
  //Metodos
  constructor(private _usuarioService: UsuarioService, private _routeParams: RouteParams) {}
  ngOnInit() {
    let id= +this._routeParams.get('id');
    if(id != 0){
      this._usuarioService.getUsuario(id).then(usuario =>{
        this.usuario = usuario;
        this.visible = true
      })
    }
    else{
      this._usuarioService.getUsuario(1).then(usuario =>{
        this.usuario = usuario;
        this.visible = true
      })
    }
  };
  addAmigo(){
    var actual: Amigo = {id: 1, usuario: this.actual, imagen: "img/avatar1.jpg"};
    var amigo: Amigo = {id: this.usuario.id, usuario: this.usuario.usuario, imagen: this.usuario.imagen};
    this._usuarioService.addAmigo(amigo, actual);
  }
}
