import { Component } from 'angular2/core';
import { MenuComponent } from './menu.component';
import { UsuarioService } from './usuario.service';
import { OnInit } from 'angular2/core';
import { Usuario } from './usuario.model';
import { Datos } from './datos.model';
import { Amigo } from './amigos.model';
import { Router, RouteParams } from 'angular2/router';
import { Sesion } from './sesion.model';
import { SesionService } from './sesion.service';

@Component({
  selector: 'amigos-component',
  templateUrl: 'app/amigos.component.html',
  directives: [MenuComponent],
  providers: [UsuarioService, SesionService]
})

export class AmigosComponent implements OnInit {
  //Variables
  usuario: Usuario;
  actual: string;
  visible: boolean = false;
  //Metodos
  constructor(private _usuarioService: UsuarioService,  private _router: Router, private _routeParams: RouteParams, private _sesionService: SesionService) {}
  ngOnInit() {
    let id= +this._routeParams.get('id');
    this._usuarioService.getUsuario(id).then(usuario =>{
      this.usuario = usuario;
      this._sesionService.getSesion().then(sesion =>{
        this.actual = sesion.usuario;
      });
      this.visible = true
    })
  }
  irConcreto(amigo: Amigo){
    this._router.navigate(['Cuenta', { id: amigo.id }]);
  }
}
