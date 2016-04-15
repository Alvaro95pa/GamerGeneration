import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'menu-component',
  templateUrl: 'app/menu.component.html',
  directives: [],
  styleUrls: [],
  providers: []
})

export class MenuComponent {
  //Metodos
  constructor(private _router: Router) { }
  irA(link: string){
    this._router.navigate([link]);
  }
}
