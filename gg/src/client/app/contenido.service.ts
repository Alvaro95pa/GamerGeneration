import {CONTENIDO} from './mock-contenido';
import { Injectable } from 'angular2/core';

@Injectable()
export class ContenidoService {
  getContenido() {
    return Promise.resolve(CONTENIDO);
  }
}
