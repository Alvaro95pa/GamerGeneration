import {Component, OnInit} from 'angular2/core';
import {FooterComponent} from './footer.component';
import {Contenido} from './contenido.model';
import { Router } from 'angular2/router';
import {ContenidoService} from './contenido.service';

@Component({
  selector: 'noticias',
  templateUrl: 'app/noticias.html',
  providers: [ContenidoService],
  pipes: []
})

export class Noticias implements OnInit {
  contenido: Contenido[] = [];
  contAux: Contenido[] = [];

  constructor(
    private _router: Router,
    private _contentService: ContenidoService) {}

    ngOnInit() {
      this._contentService.getContenido().subscribe(contenido =>{
        this.contenido = contenido;
        for(let i = this.contenido.length-1; -1 < i; i--){
				      this.contAux[this.contenido.length-i-1] = this.contenido[i];
			         }
      });
    }
    gotoDetail(contenido: Contenido) {
    let link = ['NoticiaDetails', { id: contenido.id }];
    this._router.navigate(link);
  }
}
