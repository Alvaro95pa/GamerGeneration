import { Component, Input } from 'angular2/core';
import { MenuComponent } from './menu.component';
import { RouteParams } from 'angular2/router';
import { UsuarioService } from './usuario.service';
import { OnInit } from 'angular2/core';
import { Usuario } from './usuario'
import { Datos } from './datos';

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
    //let id= +this._routeParams.get('id');
    this._usuarioService.getUsuarios().then(usuarios =>{
      this.usuario = usuarios;
      this.visible = true
    })
  };
}
