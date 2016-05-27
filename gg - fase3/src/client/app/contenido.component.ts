import { Component } from 'angular2/core';
import { MenuComponent } from './menu.component';
import { UsuarioService } from './usuario.service';
import { OnInit } from 'angular2/core';
import { Usuario } from './usuario.model'
import { RouteParams } from 'angular2/router';
import { Prod } from './clases';
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
      this.actual = this._sesionService.getSesion().usuario;
      this.visible = true
    })
  };
  cambiarFavorito(fav: Prod){
    if(fav.tipoprod == 3){
      this.usuario.fPeli = fav;
    }
    if(fav.tipoprod == 2){
      this.usuario.fSerie = fav;
    }
    if(fav.tipoprod == 1){
      this.usuario.fJuego = fav;
    }
      this._usuarioService.setFavorito(this.usuario);
  }
  removeContenido(cont: Prod){
    if(cont.tipoprod == 3){
      if(cont.name == this.usuario.fPeli.name){
        this.usuario.fPeli = { id: null, tipoprod: null, name: null, img: null, fecha: null,
          genero: null, plataforma: null, desarrollador: null, editor: null, procesador: null, memoria: null,
        grafica: null, almacenamiento: null, trailer: null, sinopsis: null, comentarios: null};
        this._usuarioService.removeFav(this.usuario);
      }
      this.usuario.nPelis = this.usuario.nPelis - 1;
    }
    if(cont.tipoprod == 2){
      if(cont.name == this.usuario.fSerie.name){
        this.usuario.fSerie = { id: null, tipoprod: null, name: null, img: null, fecha: null,
          genero: null, plataforma: null, desarrollador: null, editor: null, procesador: null, memoria: null,
        grafica: null, almacenamiento: null, trailer: null, sinopsis: null, comentarios: null};
        this._usuarioService.removeFav(this.usuario);
      }
      this.usuario.nSeries = this.usuario.nSeries - 1;
    }
    if(cont.tipoprod == 1){
      if(cont.name == this.usuario.fJuego.name){
        this.usuario.fJuego = { id: null, tipoprod: null, name: null, img: null, fecha: null,
          genero: null, plataforma: null, desarrollador: null, editor: null, procesador: null, memoria: null,
        grafica: null, almacenamiento: null, trailer: null, sinopsis: null, comentarios: null};
        this._usuarioService.removeFav(this.usuario);
      }
      this.usuario.nJuegos = this.usuario.nJuegos - 1;
    }
    let posicion = this.usuario.contenido.indexOf(cont);
    this.usuario.contenido.splice(posicion,1);
    this._usuarioService.removeContenido(this.usuario);
  }
  irA(producto: Prod){
    this._router.navigate(['Detalleprod', {tipoProd: producto.tipoprod, idProd: producto.id}]);
  }
}
