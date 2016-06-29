import { Component } from 'angular2/core';
import { MenuComponent } from './menu.component';
import { UsuarioService } from './usuario.service';
import { OnInit } from 'angular2/core';
import { Usuario } from './usuario.model';
import { Router } from 'angular2/router';
import { SesionService } from './sesion.service';

@Component({
  selector: 'gente-component',
  templateUrl: 'app/gente.component.html',
  directives: [MenuComponent],
  providers: [UsuarioService, SesionService]
})

export class GenteComponent implements OnInit {
  //Variables
  usuarios: Usuario[];
  actual: string;
  visible: boolean = false;
  //Metodos
  constructor(private _usuarioService: UsuarioService,  private _router: Router, private _sesionService: SesionService) {}
  ngOnInit() {
    this._usuarioService.getUsuarios().subscribe(usuarios =>{
      this.usuarios = usuarios;
      this._sesionService.getSesion().then(actual =>{
        this.actual = actual.usuario;
        this.visible = true
      });
    });
  }
  irConcreto(persona: Usuario){
    this._router.navigate(['Cuenta', { id: persona.id }]);
  }
  volver() {
    window.history.back();
  }
}
