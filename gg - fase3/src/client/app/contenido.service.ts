import {CONTENIDO} from './mock-contenido';
import { Injectable } from 'angular2/core';

@Injectable()
export class ContenidoService {
  getContenido() {
    return Promise.resolve(CONTENIDO);
  }

  getContenidoId(id: number) {
    return Promise.resolve(CONTENIDO).then(
      contenido => contenido.filter(contenido => contenido.id === id)[0]
    );
  }

  getContenidoTipo(tipo:string){
    return Promise.resolve(CONTENIDO).then( list => list.filter(prod => prod.tipo===tipo))
  }

  getContenidoSlides(){
    return CONTENIDO;
  }
}
