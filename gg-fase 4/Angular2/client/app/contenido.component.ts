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
      this._sesionService.getSesion().then(actual =>{
        this.actual = actual.usuario;
        this.visible = true
      });
    });
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
      this._usuarioService.setFavorito(this.usuario).subscribe();
  }
  removeContenido(cont: Prod){
    if(cont.tipoprod == 3){
      if(this.usuario.fPeli != null){
        if(cont.name == this.usuario.fPeli.name){
          this.usuario.fPeli = null;
          this._usuarioService.removeFav(this.usuario).subscribe();
        }
      }
      this.usuario.nPelis = this.usuario.nPelis - 1;
    }
    if(cont.tipoprod == 2){
      if(this.usuario.fSerie!= null){
        if(cont.name == this.usuario.fSerie.name){
          this.usuario.fSerie = null;
          this._usuarioService.removeFav(this.usuario).subscribe();
        }
      }
      this.usuario.nSeries = this.usuario.nSeries - 1;
    }
    if(cont.tipoprod == 1){
      if(this.usuario.fJuego != null){
        if(cont.name == this.usuario.fJuego.name){
          this.usuario.fJuego = null;
          this._usuarioService.removeFav(this.usuario).subscribe();
        }
      }
      this.usuario.nJuegos = this.usuario.nJuegos - 1;
    }
    let posicion = this.usuario.coleccion.indexOf(cont);
    this.usuario.coleccion.splice(posicion,1);
    this._usuarioService.removeContenido(this.usuario).subscribe();
  }
  comprobarJuegoFav(nombre: string){
    if(this.usuario.fJuego != null){
      return this.usuario.fJuego.name == nombre;
    }
    else{
      return false;
    }
  }
  comprobarSerieFav(nombre: string){
    if(this.usuario.fSerie != null){
      return this.usuario.fSerie.name == nombre;
    }
    else{
      return false;
    }
  }
  comprobarPeliculaFav(nombre: string){
    if(this.usuario.fPeli != null){
      return this.usuario.fPeli.name == nombre;
    }
    else{
      return false;
    }
  }
  irA(producto: Prod){
    this._router.navigate(['Detalleprod', {tipoProd: producto.tipoprod, idProd: producto.id}]);
  }
}
