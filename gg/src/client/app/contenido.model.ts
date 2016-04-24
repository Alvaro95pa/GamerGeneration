import 'angular2/core';
import {Destacado} from './destacado.model';

export interface Contenido {
  id: number;
  tipo: string;
  categoria: string;
	titulo: string;
	fecha: string;
  multimedia: string;
  resumen: string;
  cuerpo: string;
  ratio: string;
  dest: Destacado;
}
