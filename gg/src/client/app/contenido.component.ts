import { Component } from 'angular2/core';
import { MenuComponent } from './menu.component';
import { UsuarioService } from './usuario.service';
import { OnInit } from 'angular2/core';
import { Usuario } from './usuario.model'
import { Datos } from './datos.model';
import { Amigo } from './amigos.model';
import { RouteParams } from 'angular2/router';
import { Prod } from './prod.model'
import {Sesion} from './sesion.model';
import { SesionService } from './sesion.service';

@Component({
  selector: 'contenido-component',
  templateUrl: 'app/contenido.component.html',
  directives: [MenuComponent],
  styleUrls: ['app/contenido.component.css'],
  providers: [UsuarioService, SesionService]
})

export class ContenidoComponent{
  //Variables
  usuario: Usuario;
  actual: string;
  visible: boolean = false;
  //Metodos
  constructor(private _usuarioService: UsuarioService, private _routeParams: RouteParams, private _sesionService: SesionService) {}
  ngOnInit() {
    let id= +this._routeParams.get('id');
    this._usuarioService.getUsuario(id).then(usuario =>{
      this.usuario = usuario;
      this._sesionService.getSesion().then(sesion =>{
        this.actual = sesion.usuario;
      });
      this.visible = true
    })
  };
  cambiarFavorito(fav: Prod){
      this._usuarioService.setFavorito(fav, this.usuario.id);
  }
  removeContenido(cont: Prod){
    if(cont.tipoprod == 3){
      if(cont.name == this.usuario.datos.fPeli.name){
        this._usuarioService.removeFav(cont, this.usuario.id);
      }
    }
    if(cont.tipoprod == 2){
      if(cont.name == this.usuario.datos.fSerie.name){
        this._usuarioService.removeFav(cont, this.usuario.id);
      }
    }
    if(cont.tipoprod == 1){
      if(cont.name == this.usuario.datos.fJuego.name){
        this._usuarioService.removeFav(cont, this.usuario.id);
      }
    }
    this._usuarioService.removeContenido(cont, this.usuario.id);
  }
}
