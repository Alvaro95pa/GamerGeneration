import {Component, OnInit} from 'angular2/core';
import {Contenido} from './contenido.model';
import {ContenidoService} from './contenido.service';
import {clasesservice} from './clases.service';
import { RouteParams } from 'angular2/router';
import {Prod} from './clases';

@Component({
  selector: 'analisis-detalles',
  templateUrl: 'app/analisis-details.html',
  providers: [ContenidoService, clasesservice]
})

export class AnalisisDetails implements OnInit{
  contenido: Contenido;
  visible: boolean = false;
  producto: Prod;

  constructor(private _contentService: ContenidoService, private _clasesService: clasesservice,
    private _routeParams: RouteParams) {}

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._contentService.getContenidoId(id).then(contenido =>{
      this.contenido = contenido;
      this.visible = true;
      this._clasesService.getProdNombre(this.contenido.nombreProd).then(producto =>{
        this.producto = producto;
      })
    });
  }

  
}
