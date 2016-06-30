import {Component,Input} from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';
import {clasesservice} from './clases.service';
import {UsuarioService} from './usuario.service';
import {Usuario} from './usuario.model';

import {comentario} from './clases';

@Component({
  selector:'comentarios',
  template: `
  <article class="col-md-12 col-xs-12 comentarios">
    <header class="col-md-2 col-xs-2">
      <dl>
        <dd><img src="images/{{comentario.user_img}}"></dd>
        <dd><a>{{comentario.user}}</a></dd>
      </dl>
    </header>
    <time class="col-md-10 col-xs-10 fecha">{{comentario.fecha}}</time>
    <p class="col-md-9 col-xs-8">{{comentario.mensaje}}</p>
    <div *ngIf="comentario.idjuego != 0" class="col-md-1 col-xs-12 puntuacion"><span>{{comentario.puntuacion}}</span></div>
  </article>
  `,
})

export class comentarioscomponent{
  @Input()
  comentario: comentario;

}
