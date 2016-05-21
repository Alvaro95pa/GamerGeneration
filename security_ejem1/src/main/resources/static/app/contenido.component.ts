import { Component } from 'angular2/core';
import { MenuComponent } from './menu.component';
import { UsuarioService } from './usuario.service';
import { OnInit } from 'angular2/core';
import { Usuario } from './usuario.model'
import { Datos } from './datos.model';
import { Amigo } from './amigos.model';
import { RouteParams } from 'angular2/router';
import { Prod } from './clases';
import { Sesion } from './sesion.model';
import { SesionService } from './sesion.service';
import { Router } from 'angular2/router';

@Component({
  selector: 'contenido-component',
  templateUrl: 'app/contenido.component.html',
  directives: [MenuComponent],
  providers: [UsuarioService, SesionService]
})

export class ContenidoComponent{
  //Variables
  usuario: Usuario;
  actual: string;
  visible: boolean = false;
  //Metodos
  constructor(private _router: Router, private _usuarioService: UsuarioService, private _routeParams: RouteParams, private _sesionService: SesionService) {}
  ngOnInit() {
    let id= +this._routeParams.get('id');
    this._usuarioService.getUsuario(id).subscribe(usuario =>{
      this.usuario = usuario;
      this._sesionService.getSesion().subscribe(sesion =>{
        this.actual = sesion.usuario;
      });
      this.visible = true
    })
  };
  cambiarFavorito(fav: Prod){
    if(fav.tipoprod == 3){
      this.usuario.datos.fPeli = fav;
    }
    if(fav.tipoprod == 2){
      this.usuario.datos.fSerie = fav;
    }
    if(fav.tipoprod == 1){
      this.usuario.datos.fJuego = fav;
    }
      this._usuarioService.setFavorito(this.usuario);
  }
  removeContenido(cont: Prod){
    if(cont.tipoprod == 3){
      if(cont.name == this.usuario.datos.fPeli.name){
        this.usuario.datos.fPeli = { id: null, tipoprod: null, name: null, img: null, genero: null, plataforma: null};
        this._usuarioService.removeFav(this.usuario);
      }
      this.usuario.datos.nPelis = this.usuario.datos.nPelis - 1;
    }
    if(cont.tipoprod == 2){
      if(cont.name == this.usuario.datos.fSerie.name){
        this.usuario.datos.fSerie = { id: null, tipoprod: null, name: null, img: null, genero: null, plataforma: null};
        this._usuarioService.removeFav(this.usuario);
      }
      this.usuario.datos.nSeries = this.usuario.datos.nSeries - 1;
    }
    if(cont.tipoprod == 1){
      if(cont.name == this.usuario.datos.fJuego.name){
        this.usuario.datos.fJuego = { id: null, tipoprod: null, name: null, img: null, genero: null, plataforma: null};
        this._usuarioService.removeFav(this.usuario);
      }
      this.usuario.datos.nJuegos = this.usuario.datos.nJuegos - 1;
    }
    let posicion = this.usuario.datos.contenido.indexOf(cont);
    this.usuario.datos.contenido.splice(posicion,1);
    this._usuarioService.removeContenido(this.usuario);
  }
  irA(producto: Prod){
    this._router.navigate(['Detalleprod', {tipoProd: producto.tipoprod, idProd: producto.id}]);
  }
}
