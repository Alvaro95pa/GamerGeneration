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

  getContenidoSlides(){
    return CONTENIDO;
  }
}
