import {Component,Input} from 'angular2/core';

import {Prod} from './clases';

@Component({
  selector:'prod-detalle',
  template: `
    <a class="detalle"><div>
      <img src={{prod.img}}>
      <p>{{prod.name}}</p>
    </div></a>
  `,
  styleUrls:  ['style.css']
})

export class proddetalleComponent{
  @Input()
  prod: Prod;
}
