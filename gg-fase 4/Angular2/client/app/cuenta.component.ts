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
  visible: boolean = false;
  usuario: Usuario;
  usuario_actual: Usuario;
  actual: string;
  id_actual: number;
  amigos: Usuario[];
  amigo: boolean = false;
  //Metodos
  constructor(private _usuarioService: UsuarioService, private _routeParams: RouteParams, private _sesionService: SesionService) {}
  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._usuarioService.getUsuario(id).subscribe(usuario =>{
      this.usuario = usuario;
      this._sesionService.getSesion().then(actual =>{
          this.usuario_actual = actual;
          this.id_actual = this.usuario_actual.id;
          this.amigos = this.usuario_actual.amigos;
          if(id != this.id_actual){
            this.esAmigo()
          };
          this.visible = true;
      });
    })
  };
  addAmigo(){
      this.usuario_actual.amigos.push(this.usuario);
      this.usuario_actual.nAmigos = this.usuario_actual.nAmigos + 1;
      this._usuarioService.addAmigo(this.usuario_actual).subscribe(usuario =>{
        //this.usuario.amigos.push(usuario);
        //this.usuario.nAmigos = this.usuario.nAmigos + 1;
        //this._usuarioService.addAmigo(this.usuario).subscribe();
      });

    this.esAmigo();
  }
  removeAmigo(){
    //let posicion1 = this.usuario.amigos.indexOf(this.usuario_actual);
    //this.usuario.amigos.splice(posicion1, 1);
    let posicion2 = this.usuario_actual.amigos.indexOf(this.usuario);
    this.usuario_actual.amigos.splice(posicion2, 1);
    //this.usuario.nAmigos = this.usuario.nAmigos - 1;
    this.usuario_actual.nAmigos = this.usuario_actual.nAmigos - 1;
    //this._usuarioService.remAmigo(this.usuario).subscribe();
    this._usuarioService.remAmigo(this.usuario_actual).subscribe();
    this.amigo = false;
  }
  esAmigo(){
      for(let amigo of this.amigos){
        if(amigo.id == this.usuario.id){
          this.amigo = true;
        }
      }
  }
}
