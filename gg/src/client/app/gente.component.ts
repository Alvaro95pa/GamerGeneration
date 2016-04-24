import { Component } from 'angular2/core';
import { MenuComponent } from './menu.component';
import { UsuarioService } from './usuario.service';
import { OnInit } from 'angular2/core';
import { Usuario } from './usuario';
import { Datos } from './datos';
import { Router } from 'angular2/router';

@Component({
  selector: 'gente-component',
  templateUrl: 'app/gente.component.html',
  directives: [MenuComponent],
  styleUrls: ['app/amigos.component.css'],
  providers: []
})

export class GenteComponent implements OnInit {
  //Variables
  usuarios: Usuario[];
  actual: string = 'castorTresDientes'
  visible: boolean = false;
  //Metodos
  constructor(private _usuarioService: UsuarioService,  private _router: Router) {}
  ngOnInit() {
    this._usuarioService.getUsuarios().then(usuarios =>{
      this.usuarios = usuarios;
      this.visible = true
    });
  }
  irConcreto(persona: Usuario){
    this._router.navigate(['Cuenta', { id: persona.id }]);
  }
  volver() {
    window.history.back();
  }
}
