import 'angular2/core';
import {Destacado} from './destacado.model';
import {Image} from './image.model';

export interface Contenido {
  id: number;
  nombreProd: string;
  tipo: string;
  categoria: string;
	titulo: string;
	fecha: string;
  multimedia: Image;
  resumen: string;
  cuerpo: string;
  ratio: string;
  dest: Destacado;
}