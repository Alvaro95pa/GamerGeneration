import { Component } from 'angular2/core';
import { MenuComponent } from './menu.component';

@Component({
  selector: 'contenido-component',
  templateUrl: 'app/contenido.component.html',
  directives: [MenuComponent],
  styleUrls: ['app/contenido.component.css'],
  providers: []
})

export class ContenidoComponent {
}
