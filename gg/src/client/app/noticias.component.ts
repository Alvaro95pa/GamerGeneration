import {Component, OnInit} from 'angular2/core';
import {FooterComponent} from './footer.component';
import {Contenido} from './contenido.model';
import { Router } from 'angular2/router';
import {ContenidoService} from './contenido.service';

@Component({
  selector: 'noticias',
  templateUrl: 'app/noticias.html',
  styleUrls: ['css/style.css'],
  providers: [ContenidoService],
  pipes: []
})

export class Noticias implements OnInit {
  contenido: Contenido[] = [];

  constructor(
    private _router: Router,
    private _contentService: ContenidoService) {}

    ngOnInit() {
      this._contentService.getContenido().then(contenido =>{
      this.contenido = contenido;
    });
    }
    gotoDetail(contenido: Contenido) {
    let link = ['NoticiaDetails', { id: contenido.id }];
    this._router.navigate(link);
  }
}
