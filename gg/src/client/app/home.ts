import {Component} from 'angular2/core';
import {ExpositorComponent} from './expositor.component';
import {ListadoComponent} from './listado.component';
import {Calendario} from './calendario.component';

@Component({
  selector: 'home',
  templateUrl: 'app/home.html',
  directives: [ExpositorComponent, ListadoComponent, Calendario],
  pipes: []
})

export class Home {

}
