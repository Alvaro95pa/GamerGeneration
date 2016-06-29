import {Component, OnInit} from 'angular2/core';
import {Contenido} from './contenido.model';
import {ContenidoService} from './contenido.service';
import { Router } from 'angular2/router';

@Component({
	selector: 'listado',
	templateUrl: 'app/listado.component.html',
	providers: [ContenidoService]
})

export class ListadoComponent implements OnInit {
	contenido: Contenido[] = [];
	contAux: Contenido[] = [];

	constructor(private _router: Router, private _contentService: ContenidoService) {}

	ngOnInit(){
		this._contentService.getContenido().subscribe(contenido =>{
      this.contenido = contenido;
			for(let i = this.contenido.length-1; -1 < i; i--){
				this.contAux[this.contenido.length-i-1] = this.contenido[i];
			}
    });
	}

	gotoDetail(contenido: Contenido) {
		let link;
		if(contenido.tipo == "Análisis"){
			link = ['AnalisisDetalles', { id: contenido.id }];
		}
		else{
			link = ['NoticiaDetails', {id: contenido.id}];
		}
    this._router.navigate(link);
  }
}
