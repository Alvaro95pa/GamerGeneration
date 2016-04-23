import {Component} from 'angular2/core';
import {ExpositorComponent} from './expositor.component';
import {ListadoComponent} from './listado.component';


@Component({
  selector: 'home',
  templateUrl: 'app/home.html',
  directives: [ExpositorComponent, ListadoComponent],
  pipes: []
})

export class Home {

}
