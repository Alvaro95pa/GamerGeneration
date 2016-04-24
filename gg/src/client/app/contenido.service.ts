import {CONTENIDO} from './mock-contenido';
import { Injectable } from 'angular2/core';

@Injectable()
export class ContenidoService {
  getContenido() {
    return Promise.resolve(CONTENIDO);
  }
  getContenidoTipo(tipo:string){
    return Promise.resolve(CONTENIDO).then( list => list.filter(prod => prod.tipo===tipo))
  }
  getContenidoSlides(){
    return CONTENIDO;
  }
}
