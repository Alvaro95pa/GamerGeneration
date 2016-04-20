import { Component, Input } from 'angular2/core';
import { Router } from 'angular2/router';
import { Usuario } from './usuario'
import { Datos } from './datos';

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
  irA(link: string){
    this._router.navigate([link]);
  }
}
