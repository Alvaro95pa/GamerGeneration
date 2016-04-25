import { Component, Input } from 'angular2/core';
import { Router } from 'angular2/router';
import { Usuario } from './usuario.model'
import { Datos } from './datos.model';

@Component({
  selector: 'menu-component',
  templateUrl: 'app/menu.component.html',
  directives: [],
  styleUrls: [],
  providers: []
})

export class MenuComponent {
  //Variables
  @Input()
  private usuario: Usuario;
  @Input()
  private actual: string;
  //Metodos
  constructor(private _router: Router) { }
  irA(lugar: string, id: number){
    this._router.navigate([lugar, {id: id}]);
  }
  ir(lugar: string){
    this._router.navigate([lugar]);
  }
}
