import {Component, OnInit} from 'angular2/core';
import {Contenido} from './contenido.model';
import {ContenidoService} from './contenido.service';

@Component({
	selector: 'listado',
	templateUrl: 'app/listado.component.html',
	providers: [ContenidoService]
})

export class ListadoComponent implements OnInit {
	contenido: Contenido[] = [];

	constructor(private _contentService: ContenidoService) {}

	ngOnInit(){
		this._contentService.getContenido().then(contenido =>{
      this.contenido = contenido;
    });
	}
}
