import { Component } from 'angular2/core';
import { MenuComponent } from './menu.component';
import { UsuarioService } from './usuario.service';
import { OnInit } from 'angular2/core';
import { Usuario } from './usuario'
import { Datos } from './datos';

@Component({
  selector: 'cuenta-component',
  templateUrl: 'app/cuenta.component.html',
  directives: [MenuComponent],
  styleUrls: ['app/cuenta.component.css'],
  providers: [UsuarioService]
})

export class CuentaComponent  implements OnInit {
  //Variables
  usuario: Usuario;
  //Metodos
  constructor(private _usurioService: UsuarioService) {}
  ngOnInit() {
    this._usurioService.getUsuario().then(usuario => this.usuario = usuario);
  }
}
