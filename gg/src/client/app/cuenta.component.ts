import { Component, Input } from 'angular2/core';
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
})

export class CuentaComponent  implements OnInit {
  //Variables
  usuario: Usuario;
  actual: string = 'castorTresDientes'
  visible: boolean = false;
  //Metodos
  constructor(private _usuarioService: UsuarioService) {}
  ngOnInit() {
    this._usuarioService.getUsuario().then(usuario =>{
      this.usuario = usuario;
      this.visible = true
    });
  }
}
