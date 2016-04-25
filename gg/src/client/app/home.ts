import {Component} from 'angular2/core';
import {ExpositorComponent} from './expositor.component';


@Component({
  selector: 'home',
  templateUrl: 'app/home.html',
  directives: [ExpositorComponent],
  pipes: []
})

export class Home {

}
