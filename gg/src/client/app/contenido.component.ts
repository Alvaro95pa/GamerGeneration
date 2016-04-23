import { Component } from 'angular2/core';
import { MenuComponent } from './menu.component';
import { UsuarioService } from './usuario.service';
import { OnInit } from 'angular2/core';
import { Usuario } from './usuario'
import { Datos } from './datos';
import { Amigo } from './amigos';


@Component({
  selector: 'contenido-component',
  templateUrl: 'app/contenido.component.html',
  directives: [MenuComponent],
  styleUrls: ['app/contenido.component.css'],
  providers: []
})

export class ContenidoComponent{
  //Variables
  usuario: Usuario;
  actual: string = 'castorTresDientes'
  visible: boolean = false;
  //Metodos
  constructor(private _usuarioService: UsuarioService) {}
  ngOnInit() {
    this._usuarioService.getUsuarios().then(usuarios =>{
      this.usuario = usuarios;
      this.visible = true
    })
  };
}
