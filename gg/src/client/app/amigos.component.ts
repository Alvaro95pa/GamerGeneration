import { Component } from 'angular2/core';
import { MenuComponent } from './menu.component';
import { UsuarioService } from './usuario.service';
import { OnInit } from 'angular2/core';
import { Usuario } from './usuario';
import { Datos } from './datos';
import { Amigo } from './amigos';
import { Router, RouteParams } from 'angular2/router';

@Component({
  selector: 'amigos-component',
  templateUrl: 'app/amigos.component.html',
  directives: [MenuComponent],
  styleUrls: ['app/amigos.component.css'],
  providers: []
})

export class AmigosComponent implements OnInit {
  //Variables
  usuario: Usuario;
  actual: string = 'castorTresDientes'
  visible: boolean = false;
  //Metodos
  constructor(private _usuarioService: UsuarioService,  private _router: Router, private _routeParams: RouteParams) {}
  ngOnInit() {
    let id= +this._routeParams.get('id');
    this._usuarioService.getUsuario(id).then(usuario =>{
      this.usuario = usuario;
      this.visible = true
    })
  }
  irConcreto(amigo: Amigo){
    this._router.navigate(['Cuenta', { id: amigo.id }]);
  }
}
