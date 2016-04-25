import {Component, Input, OnInit} from 'angular2/core';
import {Contenido} from './contenido.model';
import {ContenidoService} from './contenido.service';
import { RouteParams } from 'angular2/router';

@Component({
  selector: 'noticia-detalles',
  templateUrl: 'app/noticia-detail.component.html',
  providers: [ContenidoService]
})

export class NoticiaDetails implements OnInit{
  @Input() contenido: Contenido;
  visible: boolean = false;

  constructor(private _contentService: ContenidoService, private _routeParams: RouteParams) {}

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._contentService.getContenidoId(id).then(contenido => {
      this.contenido = contenido;
      this.visible = true;
    })
  }
}
