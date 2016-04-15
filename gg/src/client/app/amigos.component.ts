import { Component } from 'angular2/core';
import { MenuComponent } from './menu.component';

@Component({
  selector: 'amigos-component',
  templateUrl: 'app/amigos.component.html',
  directives: [MenuComponent],
  styleUrls: ['app/amigos.component.css'],
  providers: []
})

export class AmigosComponent {
}
