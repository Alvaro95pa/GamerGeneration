import { Component } from 'angular2/core';
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'seleccion-component',
  templateUrl: 'app/seleccion.component.html',
  directives: [BUTTON_DIRECTIVES],
  styleUrls: [],
  providers: []
})

export class SeleccionComponent {
  public activo = 'NoVisible';
}
