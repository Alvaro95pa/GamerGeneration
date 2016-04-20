import { Component } from 'angular2/core';
import { MenuComponent } from './menu.component';
import { SeleccionComponent } from './seleccion.component';
import { UsuarioService } from './usuario.service';
import { OnInit } from 'angular2/core';
import { Usuario } from './usuario'
import { Datos } from './datos';

@Component({
  selector: 'ajustes-component',
  templateUrl: 'app/ajustes.component.html',
  directives: [MenuComponent, SeleccionComponent],
  styleUrls: ['app/ajustes.component.css'],
  providers: []
})

export class AjustesComponent  implements OnInit {
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
