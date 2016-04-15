import { Component } from 'angular2/core';
import { MenuComponent } from './menu.component';
import { SeleccionComponent } from './seleccion.component';

@Component({
  selector: 'ajustes-component',
  templateUrl: 'app/ajustes.component.html',
  directives: [MenuComponent, SeleccionComponent],
  styleUrls: ['app/ajustes.component.css'],
  providers: []
})

export class AjustesComponent {
}
