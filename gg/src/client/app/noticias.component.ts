import {Component, OnInit} from 'angular2/core';
import {FooterComponent} from './footer.component';
import {Noticia} from './noticia';
import { Router } from 'angular2/router';
import {NoticiaService} from './noticias.service';

@Component({
  selector: 'noticias',
  templateUrl: 'app/noticias.html',
  styleUrls: ['css/style.css'],
  directives: [FooterComponent],
  pipes: []
})

export class Noticias implements OnInit {
  noticias: Noticia[];

  constructor(
    private _router: Router,
    private _noticiaService: NoticiaService) {}

    getNoticias() {
      this._noticiaService.getNoticias().then(noticias => this.noticias = noticias);
    }

    ngOnInit() {
      this.getNoticias();
    }
}
